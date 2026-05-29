create extension if not exists pgcrypto with schema extensions;

create table if not exists public.order_requests (
  id uuid primary key default extensions.gen_random_uuid(),
  reference text not null unique,
  status text not null default 'pending',
  customer_name text not null,
  customer_phone text not null,
  customer_address text not null,
  delivery_date date not null,
  delivery_time time not null,
  notes text,
  total numeric(10, 2) not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.order_items (
  id uuid primary key default extensions.gen_random_uuid(),
  order_id uuid not null references public.order_requests(id) on delete cascade,
  product_id text not null,
  name text not null,
  category text,
  price numeric(10, 2) not null,
  quantity integer not null check (quantity > 0),
  total numeric(10, 2) not null,
  alcohol boolean not null default false
);

alter table public.order_requests enable row level security;
alter table public.order_items enable row level security;

drop policy if exists "No public direct order read" on public.order_requests;
drop policy if exists "No public direct item read" on public.order_items;

create policy "No public direct order read"
on public.order_requests
for select
to anon
using (false);

create policy "No public direct item read"
on public.order_items
for select
to anon
using (false);

create or replace function public.create_order_request(
  p_reference text,
  p_customer jsonb,
  p_items jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  created_order_id uuid;
  item jsonb;
  current_quantity integer;
  item_quantity integer;
  clean_reference text;
begin
  if p_items is null or jsonb_array_length(p_items) = 0 then
    raise exception 'empty_order';
  end if;

  clean_reference := coalesce(nullif(trim(p_reference), ''), 'EDC-' || extract(epoch from now())::bigint);

  for item in select * from jsonb_array_elements(p_items)
  loop
    item_quantity := greatest(0, coalesce((item->>'quantity')::integer, 0));

    if item_quantity <= 0 then
      raise exception 'invalid_quantity';
    end if;

    select quantity
    into current_quantity
    from public.product_stock
    where product_id = item->>'product_id'
    for update;

    if current_quantity is null then
      raise exception 'product_not_available:%', item->>'product_id';
    end if;

    if current_quantity < item_quantity then
      raise exception 'stock_insufficient:%', item->>'name';
    end if;
  end loop;

  insert into public.order_requests (
    reference,
    customer_name,
    customer_phone,
    customer_address,
    delivery_date,
    delivery_time,
    notes,
    total
  )
  values (
    clean_reference,
    p_customer->>'name',
    p_customer->>'phone',
    p_customer->>'address',
    (p_customer->>'delivery_date')::date,
    (p_customer->>'delivery_time')::time,
    nullif(p_customer->>'notes', ''),
    (
      select coalesce(sum((value->>'total')::numeric), 0)
      from jsonb_array_elements(p_items)
    )
  )
  returning id into created_order_id;

  for item in select * from jsonb_array_elements(p_items)
  loop
    item_quantity := (item->>'quantity')::integer;

    update public.product_stock
    set quantity = quantity - item_quantity,
        updated_at = now()
    where product_id = item->>'product_id';

    insert into public.order_items (
      order_id,
      product_id,
      name,
      category,
      price,
      quantity,
      total,
      alcohol
    )
    values (
      created_order_id,
      item->>'product_id',
      item->>'name',
      item->>'category',
      (item->>'price')::numeric,
      item_quantity,
      (item->>'total')::numeric,
      coalesce((item->>'alcohol')::boolean, false)
    );
  end loop;

  return jsonb_build_object(
    'id', created_order_id,
    'reference', clean_reference,
    'status', 'pending'
  );
end;
$$;

grant execute on function public.create_order_request(text, jsonb, jsonb) to anon;

create or replace function public.admin_get_order_requests(p_pin text)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
begin
  if not exists (
    select 1
    from public.admin_settings
    where key = 'admin_pin'
      and value = extensions.crypt(p_pin, value)
  ) then
    raise exception 'invalid_pin';
  end if;

  return coalesce(
    (
      select jsonb_agg(
        jsonb_build_object(
          'id', orders.id,
          'reference', orders.reference,
          'status', orders.status,
          'createdAt', orders.created_at,
          'total', orders.total,
          'customer', jsonb_build_object(
            'name', orders.customer_name,
            'phone', orders.customer_phone,
            'address', orders.customer_address,
            'date', orders.delivery_date,
            'time', orders.delivery_time,
            'notes', orders.notes
          ),
          'items', coalesce(items.items, '[]'::jsonb)
        )
        order by orders.created_at desc
      )
      from public.order_requests orders
      left join lateral (
        select jsonb_agg(
          jsonb_build_object(
            'id', order_items.product_id,
            'name', order_items.name,
            'category', order_items.category,
            'price', order_items.price,
            'quantity', order_items.quantity,
            'total', order_items.total,
            'alcohol', order_items.alcohol
          )
          order by order_items.name
        ) as items
        from public.order_items
        where order_items.order_id = orders.id
      ) items on true
    ),
    '[]'::jsonb
  );
end;
$$;

grant execute on function public.admin_get_order_requests(text) to anon;
