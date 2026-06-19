create extension if not exists pgcrypto with schema extensions;

create table if not exists public.order_requests (
  id uuid primary key default extensions.gen_random_uuid(),
  reference text not null unique,
  status text not null default 'pending',
  customer_name text not null,
  customer_phone text not null,
  customer_address text not null,
  customer_email text,
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
  rec record;
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

    -- Pack-formule : pas de stock propre, on valide chaque ingrédient de la recette.
    if exists (select 1 from public.pack_recipes where pack_id = item->>'product_id') then
      for rec in select component_id, quantity from public.pack_recipes where pack_id = item->>'product_id'
      loop
        select quantity
        into current_quantity
        from public.product_stock
        where product_id = rec.component_id
        for update;

        if current_quantity is null then
          raise exception 'product_not_available:%', rec.component_id;
        end if;

        if current_quantity < rec.quantity * item_quantity then
          raise exception 'stock_insufficient:%', item->>'name';
        end if;
      end loop;
    else
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
    end if;
  end loop;

  insert into public.order_requests (
    reference,
    customer_name,
    customer_phone,
    customer_address,
    customer_email,
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
    nullif(p_customer->>'email', ''),
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

    -- Pack-formule : on décrémente les ingrédients (recette × nb packs),
    -- pas de stock propre. Sinon, produit standard décrémenté normalement.
    if exists (select 1 from public.pack_recipes where pack_id = item->>'product_id') then
      update public.product_stock ps
      set quantity = ps.quantity - pr.quantity * item_quantity,
          updated_at = now()
      from public.pack_recipes pr
      where pr.pack_id = item->>'product_id'
        and pr.component_id = ps.product_id;
    else
      update public.product_stock
      set quantity = quantity - item_quantity,
          updated_at = now()
      where product_id = item->>'product_id';
    end if;

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

-- La commande manuelle peut faire passer le stock en négatif (survente).
-- On retire donc la contrainte quantity >= 0 sur product_stock.
-- La boutique (create_order_request) valide le stock AVANT de décrémenter,
-- elle ne produit donc jamais de négatif : retirer la contrainte est sans risque.
alter table public.product_stock drop constraint if exists product_stock_quantity_check;

-- Commande manuelle (prise au téléphone par l'admin).
-- Identique à create_order_request mais SANS validation de stock :
-- la vente a déjà eu lieu, on l'enregistre pour le suivi CA et on décrémente
-- le stock même s'il passe en négatif (= survente, réversible via l'annulation).
create or replace function public.create_manual_order(
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
  item_quantity integer;
  clean_reference text;
begin
  if p_items is null or jsonb_array_length(p_items) = 0 then
    raise exception 'empty_order';
  end if;

  clean_reference := coalesce(nullif(trim(p_reference), ''), 'EDC-' || extract(epoch from now())::bigint);

  insert into public.order_requests (
    reference,
    customer_name,
    customer_phone,
    customer_address,
    customer_email,
    delivery_date,
    delivery_time,
    notes,
    total,
    created_at
  )
  values (
    clean_reference,
    p_customer->>'name',
    p_customer->>'phone',
    p_customer->>'address',
    nullif(p_customer->>'email', ''),
    (p_customer->>'delivery_date')::date,
    (p_customer->>'delivery_time')::time,
    nullif(p_customer->>'notes', ''),
    (
      select coalesce(sum((value->>'total')::numeric), 0)
      from jsonb_array_elements(p_items)
    ),
    -- Commande manuelle = vente déjà réalisée : on date au moment de la vente
    -- saisi (date + heure de livraison), pas au moment de la saisie admin.
    -- L'historique et le suivi CA trient par created_at → CA daté correctement.
    coalesce(
      (p_customer->>'delivery_date')::date + coalesce((p_customer->>'delivery_time')::time, time '00:00'),
      now()
    )
  )
  returning id into created_order_id;

  for item in select * from jsonb_array_elements(p_items)
  loop
    item_quantity := greatest(0, coalesce((item->>'quantity')::integer, 0));

    if item_quantity <= 0 then
      raise exception 'invalid_quantity';
    end if;

    -- Pack-formule : décrémente les ingrédients (survente autorisée, peut passer
    -- en négatif). Sinon, produit standard décrémenté normalement.
    if exists (select 1 from public.pack_recipes where pack_id = item->>'product_id') then
      update public.product_stock ps
      set quantity = ps.quantity - pr.quantity * item_quantity,
          updated_at = now()
      from public.pack_recipes pr
      where pr.pack_id = item->>'product_id'
        and pr.component_id = ps.product_id;
    else
      update public.product_stock
      set quantity = quantity - item_quantity,
          updated_at = now()
      where product_id = item->>'product_id';
    end if;

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

grant execute on function public.create_manual_order(text, jsonb, jsonb) to anon;

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
            'email', orders.customer_email,
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
      where orders.status <> 'cancelled'
    ),
    '[]'::jsonb
  );
end;
$$;

grant execute on function public.admin_get_order_requests(text) to anon;

create or replace function public.admin_cancel_order_request(
  p_pin text,
  p_order_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_status text;
begin
  if not exists (
    select 1
    from public.admin_settings
    where key = 'admin_pin'
      and value = extensions.crypt(p_pin, value)
  ) then
    raise exception 'invalid_pin';
  end if;

  select status
  into v_status
  from public.order_requests
  where id = p_order_id
  for update;

  if v_status is null then
    raise exception 'order_not_found';
  end if;

  if v_status = 'cancelled' then
    return jsonb_build_object('id', p_order_id, 'status', 'cancelled');
  end if;

  -- Lignes produits standards : on re-crédite le produit lui-même.
  update public.product_stock ps
  set quantity = ps.quantity + oi.quantity,
      updated_at = now()
  from public.order_items oi
  where oi.order_id = p_order_id
    and oi.product_id = ps.product_id
    and not exists (
      select 1 from public.pack_recipes pr where pr.pack_id = oi.product_id
    );

  -- Lignes pack-formule : on re-crédite chaque ingrédient (recette × quantité).
  update public.product_stock ps
  set quantity = ps.quantity + pr.quantity * oi.quantity,
      updated_at = now()
  from public.order_items oi
  join public.pack_recipes pr on pr.pack_id = oi.product_id
  where oi.order_id = p_order_id
    and pr.component_id = ps.product_id;

  update public.order_requests
  set status = 'cancelled'
  where id = p_order_id;

  return jsonb_build_object('id', p_order_id, 'status', 'cancelled');
end;
$$;

grant execute on function public.admin_cancel_order_request(text, uuid) to anon;

-- ─────────────────────────────────────────────────────────────────────────
-- Packs (ex. Pack Apéro Chalet) : recette éditable + assemblage.
-- Le pack garde son propre stock dans product_stock. La recette liste ses
-- composants (produits ayant un stock). « Assembler N packs » incrémente le
-- stock du pack de N et décrémente chaque composant de N × quantité_recette.
-- Si un composant manque, l'assemblage est REFUSÉ (rien ne bouge).
-- ─────────────────────────────────────────────────────────────────────────
create table if not exists public.pack_recipes (
  pack_id text not null,
  component_id text not null,
  quantity integer not null check (quantity > 0),
  primary key (pack_id, component_id)
);

alter table public.pack_recipes enable row level security;
-- Aucune politique anon : accès uniquement via les RPC security definer ci-dessous.

create or replace function public.admin_get_pack_recipe(p_pin text, p_pack_id text)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
begin
  if not exists (
    select 1 from public.admin_settings
    where key = 'admin_pin' and value = extensions.crypt(p_pin, value)
  ) then
    raise exception 'invalid_pin';
  end if;

  return coalesce(
    (
      select jsonb_agg(
        jsonb_build_object('product_id', component_id, 'quantity', quantity)
        order by component_id
      )
      from public.pack_recipes
      where pack_id = p_pack_id
    ),
    '[]'::jsonb
  );
end;
$$;

grant execute on function public.admin_get_pack_recipe(text, text) to anon;

create or replace function public.admin_save_pack_recipe(
  p_pin text,
  p_pack_id text,
  p_components jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  comp jsonb;
  comp_qty integer;
begin
  if not exists (
    select 1 from public.admin_settings
    where key = 'admin_pin' and value = extensions.crypt(p_pin, value)
  ) then
    raise exception 'invalid_pin';
  end if;

  delete from public.pack_recipes where pack_id = p_pack_id;

  if p_components is not null then
    for comp in select * from jsonb_array_elements(p_components)
    loop
      comp_qty := greatest(1, coalesce((comp->>'quantity')::integer, 0));
      insert into public.pack_recipes (pack_id, component_id, quantity)
      values (p_pack_id, comp->>'product_id', comp_qty)
      on conflict (pack_id, component_id)
      do update set quantity = excluded.quantity;
    end loop;
  end if;

  return jsonb_build_object('pack_id', p_pack_id, 'saved', true);
end;
$$;

grant execute on function public.admin_save_pack_recipe(text, text, jsonb) to anon;

create or replace function public.assemble_pack(
  p_pin text,
  p_pack_id text,
  p_count integer
)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  rec record;
  v_available integer;
begin
  if not exists (
    select 1 from public.admin_settings
    where key = 'admin_pin' and value = extensions.crypt(p_pin, value)
  ) then
    raise exception 'invalid_pin';
  end if;

  if coalesce(p_count, 0) <= 0 then
    raise exception 'invalid_count';
  end if;

  if not exists (select 1 from public.product_stock where product_id = p_pack_id) then
    raise exception 'pack_not_available';
  end if;

  -- 1) Verrouille + valide chaque composant AVANT toute modification.
  for rec in select component_id, quantity from public.pack_recipes where pack_id = p_pack_id
  loop
    select quantity into v_available
    from public.product_stock
    where product_id = rec.component_id
    for update;

    if v_available is null then
      raise exception 'component_not_available:%', rec.component_id;
    end if;

    if v_available < rec.quantity * p_count then
      raise exception 'component_insufficient:%', rec.component_id;
    end if;
  end loop;

  -- 2) Applique : décrémente les composants, incrémente le pack.
  update public.product_stock ps
  set quantity = ps.quantity - pr.quantity * p_count,
      updated_at = now()
  from public.pack_recipes pr
  where pr.pack_id = p_pack_id
    and pr.component_id = ps.product_id;

  update public.product_stock
  set quantity = quantity + p_count,
      updated_at = now()
  where product_id = p_pack_id;

  return jsonb_build_object('pack_id', p_pack_id, 'assembled', p_count);
end;
$$;

grant execute on function public.assemble_pack(text, text, integer) to anon;

-- ─────────────────────────────────────────────────────────────────────────
-- PACKS PERSONNALISÉS (saisonniers / événementiels) créés depuis l'admin.
-- L'utilisateur crée des packs vendables (nom, prix, photo, description,
-- recette). La boutique les charge via list_packs() et les affiche dans le
-- catalogue (filtre « Packs »). La fiche product_stock + la recette
-- pack_recipes sont créées en même temps. La photo est une data URI
-- redimensionnée côté navigateur, stockée directement ici (site statique,
-- pas de serveur de fichiers).
-- ─────────────────────────────────────────────────────────────────────────
create table if not exists public.custom_packs (
  id text primary key,
  name text not null,
  price numeric(10, 2) not null check (price >= 0),
  description text not null default '',
  image text,
  icon text not null default '🧺',
  alcohol boolean not null default false,
  active boolean not null default true,
  sort integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.custom_packs enable row level security;
-- Aucune politique anon : la boutique lit via list_packs() (security definer),
-- l'admin gère via les RPC protégées par PIN ci-dessous.

-- Boutique : liste publique des packs actifs (pas de PIN).
-- Le pack est une FORMULE sans stock propre : sa dispo = le nombre de packs
-- assemblables à partir des ingrédients en stock, soit le plus petit
-- floor(stock_ingrédient ÷ quantité_recette) sur toute la recette.
-- Un pack sans recette retombe sur sa propre fiche product_stock (legacy).
create or replace function public.list_packs()
returns jsonb
language sql
security definer
set search_path = public
as $$
  select coalesce(
    jsonb_agg(
      jsonb_build_object(
        'id', cp.id,
        'name', cp.name,
        'price', cp.price,
        'description', cp.description,
        'image', cp.image,
        'icon', cp.icon,
        'alcohol', cp.alcohol,
        'stock', case
          when exists (select 1 from public.pack_recipes pr where pr.pack_id = cp.id) then
            coalesce((
              select min(floor(coalesce(ps.quantity, 0) / pr.quantity))
              from public.pack_recipes pr
              left join public.product_stock ps on ps.product_id = pr.component_id
              where pr.pack_id = cp.id
            ), 0)::integer
          else
            coalesce((select quantity from public.product_stock where product_id = cp.id), 0)
        end
      )
      order by cp.sort, cp.created_at
    ),
    '[]'::jsonb
  )
  from public.custom_packs cp
  where cp.active = true;
$$;

grant execute on function public.list_packs() to anon;

-- Admin : liste TOUS les packs persos (actifs + inactifs) + leur stock.
create or replace function public.admin_list_packs(p_pin text)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
begin
  if not exists (
    select 1 from public.admin_settings
    where key = 'admin_pin' and value = extensions.crypt(p_pin, value)
  ) then
    raise exception 'invalid_pin';
  end if;

  return coalesce(
    (
      select jsonb_agg(
        jsonb_build_object(
          'id', cp.id,
          'name', cp.name,
          'price', cp.price,
          'description', cp.description,
          'image', cp.image,
          'icon', cp.icon,
          'alcohol', cp.alcohol,
          'active', cp.active,
          'sort', cp.sort,
          'stock', coalesce(ps.quantity, 0)
        )
        order by cp.sort, cp.created_at
      )
      from public.custom_packs cp
      left join public.product_stock ps on ps.product_id = cp.id
    ),
    '[]'::jsonb
  );
end;
$$;

grant execute on function public.admin_list_packs(text) to anon;

-- Admin : crée un pack (catalogue + fiche stock + recette éventuelle).
create or replace function public.admin_create_pack(p_pin text, p_pack jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_base text;
  v_id text;
  v_n integer := 1;
  comp jsonb;
  comp_qty integer;
begin
  if not exists (
    select 1 from public.admin_settings
    where key = 'admin_pin' and value = extensions.crypt(p_pin, value)
  ) then
    raise exception 'invalid_pin';
  end if;

  if coalesce(trim(p_pack->>'name'), '') = '' then
    raise exception 'name_required';
  end if;

  -- Slug d'identifiant unique à partir du nom.
  v_base := trim(both '-' from regexp_replace(lower(p_pack->>'name'), '[^a-z0-9]+', '-', 'g'));
  if v_base = '' then v_base := 'pack'; end if;
  v_id := 'pack-' || v_base;
  while exists (select 1 from public.custom_packs where id = v_id)
     or exists (select 1 from public.product_stock where product_id = v_id)
  loop
    v_n := v_n + 1;
    v_id := 'pack-' || v_base || '-' || v_n;
  end loop;

  insert into public.custom_packs (id, name, price, description, image, icon, alcohol, sort)
  values (
    v_id,
    trim(p_pack->>'name'),
    greatest(0, coalesce((p_pack->>'price')::numeric, 0)),
    coalesce(p_pack->>'description', ''),
    nullif(p_pack->>'image', ''),
    coalesce(nullif(p_pack->>'icon', ''), '🧺'),
    coalesce((p_pack->>'alcohol')::boolean, false),
    coalesce((p_pack->>'sort')::integer, 0)
  );

  insert into public.product_stock (product_id, quantity)
  values (v_id, greatest(0, coalesce((p_pack->>'stock')::integer, 0)))
  on conflict (product_id) do nothing;

  if p_pack ? 'components' and jsonb_typeof(p_pack->'components') = 'array' then
    delete from public.pack_recipes where pack_id = v_id;
    for comp in select * from jsonb_array_elements(p_pack->'components')
    loop
      comp_qty := greatest(1, coalesce((comp->>'quantity')::integer, 0));
      insert into public.pack_recipes (pack_id, component_id, quantity)
      values (v_id, comp->>'product_id', comp_qty)
      on conflict (pack_id, component_id) do update set quantity = excluded.quantity;
    end loop;
  end if;

  return jsonb_build_object('id', v_id, 'created', true);
end;
$$;

grant execute on function public.admin_create_pack(text, jsonb) to anon;

-- Admin : met à jour les champs catalogue d'un pack (pas l'id, pas la recette).
create or replace function public.admin_update_pack(p_pin text, p_pack jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_id text;
begin
  if not exists (
    select 1 from public.admin_settings
    where key = 'admin_pin' and value = extensions.crypt(p_pin, value)
  ) then
    raise exception 'invalid_pin';
  end if;

  v_id := p_pack->>'id';
  if v_id is null then raise exception 'id_required'; end if;

  update public.custom_packs set
    name = coalesce(nullif(trim(p_pack->>'name'), ''), name),
    price = case when p_pack ? 'price' then greatest(0, coalesce((p_pack->>'price')::numeric, price)) else price end,
    description = coalesce(p_pack->>'description', description),
    image = case when p_pack ? 'image' then nullif(p_pack->>'image', '') else image end,
    icon = coalesce(nullif(p_pack->>'icon', ''), icon),
    alcohol = case when p_pack ? 'alcohol' then coalesce((p_pack->>'alcohol')::boolean, alcohol) else alcohol end,
    active = case when p_pack ? 'active' then coalesce((p_pack->>'active')::boolean, active) else active end,
    sort = case when p_pack ? 'sort' then coalesce((p_pack->>'sort')::integer, sort) else sort end,
    updated_at = now()
  where id = v_id;

  if not found then raise exception 'pack_not_found'; end if;

  return jsonb_build_object('id', v_id, 'updated', true);
end;
$$;

grant execute on function public.admin_update_pack(text, jsonb) to anon;

-- Admin : supprime un pack (catalogue + fiche stock + recette).
create or replace function public.admin_delete_pack(p_pin text, p_pack_id text)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
begin
  if not exists (
    select 1 from public.admin_settings
    where key = 'admin_pin' and value = extensions.crypt(p_pin, value)
  ) then
    raise exception 'invalid_pin';
  end if;

  delete from public.pack_recipes where pack_id = p_pack_id;
  delete from public.product_stock where product_id = p_pack_id;
  delete from public.custom_packs where id = p_pack_id;

  return jsonb_build_object('id', p_pack_id, 'deleted', true);
end;
$$;

grant execute on function public.admin_delete_pack(text, text) to anon;
