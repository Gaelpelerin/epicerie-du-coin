-- Newsletter / collecte d'emails RGPD pour L'Épicerie du Coin.
-- Double opt-in : inscription -> email de confirmation -> statut "confirmed".
-- La table est la source de vérité (preuve de consentement). La sync Brevo
-- se fait après confirmation (edge function newsletter-confirm).

create extension if not exists pgcrypto with schema extensions;

create table if not exists public.newsletter_subscribers (
  id uuid primary key default extensions.gen_random_uuid(),
  email text not null unique,
  status text not null default 'pending', -- pending | confirmed | unsubscribed
  source text not null default 'shop_footer',
  confirm_token uuid not null default extensions.gen_random_uuid(),
  consent_at timestamptz not null default now(),
  confirmed_at timestamptz,
  unsubscribed_at timestamptz,
  synced_to_brevo boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists idx_newsletter_status on public.newsletter_subscribers (status);
create index if not exists idx_newsletter_token on public.newsletter_subscribers (confirm_token);

alter table public.newsletter_subscribers enable row level security;

drop policy if exists "No public direct subscriber read" on public.newsletter_subscribers;
create policy "No public direct subscriber read"
on public.newsletter_subscribers
for select
to anon
using (false);

-- Inscription depuis la boutique. Consentement obligatoire (case cochée).
create or replace function public.subscribe_newsletter(
  p_email text,
  p_consent boolean,
  p_source text default 'shop_footer'
)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_email text := lower(trim(p_email));
  v_row public.newsletter_subscribers;
begin
  if p_consent is not true then
    return jsonb_build_object('ok', false, 'error', 'consent_required');
  end if;

  if v_email !~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$' then
    return jsonb_build_object('ok', false, 'error', 'invalid_email');
  end if;

  select * into v_row
  from public.newsletter_subscribers
  where email = v_email;

  if found then
    if v_row.status = 'confirmed' then
      return jsonb_build_object('ok', true, 'status', 'already_confirmed');
    end if;
    -- Pending ou désinscrit qui se réinscrit : on régénère le token et on
    -- repasse en pending pour qu'un nouvel email de confirmation parte.
    update public.newsletter_subscribers
    set status = 'pending',
        source = coalesce(nullif(trim(p_source), ''), source),
        confirm_token = extensions.gen_random_uuid(),
        consent_at = now(),
        unsubscribed_at = null
    where id = v_row.id;
    return jsonb_build_object('ok', true, 'status', 'pending');
  end if;

  insert into public.newsletter_subscribers (email, status, source, consent_at)
  values (v_email, 'pending', coalesce(nullif(trim(p_source), ''), 'shop_footer'), now());

  return jsonb_build_object('ok', true, 'status', 'pending');
end;
$$;

grant execute on function public.subscribe_newsletter(text, boolean, text) to anon;

-- Confirmation du double opt-in (lien cliqué dans l'email).
create or replace function public.confirm_newsletter(p_token uuid)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_row public.newsletter_subscribers;
begin
  select * into v_row
  from public.newsletter_subscribers
  where confirm_token = p_token;

  if not found then
    return jsonb_build_object('ok', false, 'error', 'invalid_token');
  end if;

  if v_row.status = 'confirmed' then
    return jsonb_build_object('ok', true, 'status', 'already_confirmed', 'email', v_row.email);
  end if;

  update public.newsletter_subscribers
  set status = 'confirmed',
      confirmed_at = now()
  where id = v_row.id;

  return jsonb_build_object('ok', true, 'status', 'confirmed', 'email', v_row.email);
end;
$$;

grant execute on function public.confirm_newsletter(uuid) to anon;

-- Désinscription (lien en pied d'email).
create or replace function public.unsubscribe_newsletter(p_token uuid)
returns jsonb
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_row public.newsletter_subscribers;
begin
  select * into v_row
  from public.newsletter_subscribers
  where confirm_token = p_token;

  if not found then
    return jsonb_build_object('ok', false, 'error', 'invalid_token');
  end if;

  update public.newsletter_subscribers
  set status = 'unsubscribed',
      unsubscribed_at = now()
  where id = v_row.id;

  return jsonb_build_object('ok', true, 'status', 'unsubscribed', 'email', v_row.email);
end;
$$;

grant execute on function public.unsubscribe_newsletter(uuid) to anon;

-- Liste admin (protégée par le PIN admin).
create or replace function public.admin_list_subscribers(p_pin text)
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

  return jsonb_build_object(
    'total', (select count(*) from public.newsletter_subscribers),
    'confirmed', (select count(*) from public.newsletter_subscribers where status = 'confirmed'),
    'pending', (select count(*) from public.newsletter_subscribers where status = 'pending'),
    'unsubscribed', (select count(*) from public.newsletter_subscribers where status = 'unsubscribed'),
    'subscribers', coalesce(
      (
        select jsonb_agg(
          jsonb_build_object(
            'email', s.email,
            'status', s.status,
            'source', s.source,
            'consentAt', s.consent_at,
            'confirmedAt', s.confirmed_at,
            'createdAt', s.created_at
          )
          order by s.created_at desc
        )
        from public.newsletter_subscribers s
      ),
      '[]'::jsonb
    )
  );
end;
$$;

grant execute on function public.admin_list_subscribers(text) to anon;
