-- ============================================================
-- Kavaro Site — Initial Schema (hardened)
-- Run this in: Supabase Dashboard > SQL Editor > New Query
--
-- Safe to re-run: every statement is idempotent (drop-if-exists
-- on policies, create-if-not-exists on tables/indexes).
-- ============================================================

-- ── Helper: keep updated_at fresh on every UPDATE ──────────────────────────
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ============================================================
-- LEADS  (public contact-form submissions)
-- ============================================================
create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  phone       text,
  service     text,
  message     text not null,
  status      text not null default 'new' check (status in ('new','read','replied')),
  email_sent  boolean not null default false,
  source      text,                                   -- optional: page / utm the lead came from
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),

  -- Length guards: anon can INSERT freely, so cap field sizes at the DB
  -- level to blunt spam / abuse even if the client validation is bypassed.
  constraint leads_name_len    check (char_length(name)    between 1 and 100),
  constraint leads_email_len   check (char_length(email)   between 3 and 254),
  constraint leads_phone_len   check (phone   is null or char_length(phone)   <= 20),
  constraint leads_service_len check (service is null or char_length(service) <= 100),
  constraint leads_message_len check (char_length(message) between 1 and 5000),
  constraint leads_email_fmt   check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$')
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx     on public.leads (status);
create index if not exists leads_email_idx       on public.leads (email);

drop trigger if exists leads_set_updated_at on public.leads;
create trigger leads_set_updated_at
  before update on public.leads
  for each row execute function public.set_updated_at();

-- ============================================================
-- NOTES  (internal admin notes)
-- ============================================================
create table if not exists public.notes (
  id          uuid primary key default gen_random_uuid(),
  title       text not null check (char_length(title) between 1 and 200),
  content     text not null check (char_length(content) between 1 and 20000),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists notes_created_at_idx on public.notes (created_at desc);

drop trigger if exists notes_set_updated_at on public.notes;
create trigger notes_set_updated_at
  before update on public.notes
  for each row execute function public.set_updated_at();

-- ============================================================
-- BOOKED CALLS  (Calendly bookings from the site)
-- ============================================================
create table if not exists public.booked_calls (
  id           uuid primary key default gen_random_uuid(),
  name         text,
  email        text,
  service      text,
  calendly_url text not null,
  created_at   timestamptz not null default now(),

  constraint booked_name_len    check (name    is null or char_length(name)    <= 100),
  constraint booked_email_len   check (email   is null or char_length(email)   <= 254),
  constraint booked_service_len check (service is null or char_length(service) <= 100),
  constraint booked_url_len     check (char_length(calendly_url) <= 500)
);

create index if not exists booked_calls_created_at_idx on public.booked_calls (created_at desc);

-- ============================================================
-- Row Level Security
--   leads / booked_calls : anon may INSERT only; admin (authenticated) reads/manages
--   notes                : admin only
-- ============================================================
alter table public.leads        enable row level security;
alter table public.notes        enable row level security;
alter table public.booked_calls enable row level security;

-- ── LEADS policies ──────────────────────────────────────────────────────────
drop policy if exists "Public can insert leads"        on public.leads;
drop policy if exists "Authenticated can read leads"    on public.leads;
drop policy if exists "Authenticated can update leads"  on public.leads;
drop policy if exists "Authenticated can delete leads"  on public.leads;

create policy "Public can insert leads"
  on public.leads for insert to anon with check (true);
create policy "Authenticated can read leads"
  on public.leads for select to authenticated using (true);
create policy "Authenticated can update leads"
  on public.leads for update to authenticated using (true) with check (true);
create policy "Authenticated can delete leads"
  on public.leads for delete to authenticated using (true);

-- ── BOOKED CALLS policies ───────────────────────────────────────────────────
drop policy if exists "Public can insert booked calls"      on public.booked_calls;
drop policy if exists "Authenticated can read booked calls"  on public.booked_calls;
drop policy if exists "Authenticated can delete booked calls" on public.booked_calls;

create policy "Public can insert booked calls"
  on public.booked_calls for insert to anon with check (true);
create policy "Authenticated can read booked calls"
  on public.booked_calls for select to authenticated using (true);
create policy "Authenticated can delete booked calls"
  on public.booked_calls for delete to authenticated using (true);

-- ── NOTES policies ──────────────────────────────────────────────────────────
drop policy if exists "Authenticated can manage notes" on public.notes;

create policy "Authenticated can manage notes"
  on public.notes for all to authenticated using (true) with check (true);

-- ============================================================
-- Grants  (RLS decides row visibility; grants decide table access)
-- Reset to a clean, least-privilege baseline first.
-- ============================================================
grant usage on schema public to anon, authenticated;

revoke all on public.leads        from anon, authenticated;
revoke all on public.notes        from anon, authenticated;
revoke all on public.booked_calls from anon, authenticated;

-- Public visitors: insert only, nothing else.
grant insert on public.leads        to anon;
grant insert on public.booked_calls to anon;

-- Admin: full access to leads & notes, no UPDATE on booked_calls (immutable log).
grant select, insert, update, delete on public.leads        to authenticated;
grant select, insert, update, delete on public.notes        to authenticated;
grant select, insert, delete         on public.booked_calls to authenticated;
