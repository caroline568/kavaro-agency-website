-- ============================================================
-- Kavaro Site — Initial Schema
-- Run this in: Supabase Dashboard > SQL Editor > New Query
-- ============================================================

-- LEADS (contact form submissions)
create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  phone       text,
  service     text,
  message     text not null,
  status      text not null default 'new' check (status in ('new','read','replied')),
  email_sent  boolean not null default false,
  created_at  timestamptz not null default now()
);

-- NOTES (internal admin notes)
create table if not exists public.notes (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  content     text not null,
  created_at  timestamptz not null default now()
);

-- BOOKED CALLS (Calendly link clicks)
create table if not exists public.booked_calls (
  id           uuid primary key default gen_random_uuid(),
  name         text,
  email        text,
  service      text,
  calendly_url text not null,
  created_at   timestamptz not null default now()
);

-- ── Row Level Security ────────────────────────────────────────────────────
-- Leads: anyone can INSERT (public contact form), only authenticated admin can SELECT/UPDATE/DELETE
alter table public.leads enable row level security;

create policy "Public can insert leads"
  on public.leads for insert
  to anon
  with check (true);

create policy "Authenticated can read leads"
  on public.leads for select
  to authenticated
  using (true);

create policy "Authenticated can update leads"
  on public.leads for update
  to authenticated
  using (true);

create policy "Authenticated can delete leads"
  on public.leads for delete
  to authenticated
  using (true);

-- Booked calls: anyone can INSERT, only authenticated admin can SELECT/DELETE
alter table public.booked_calls enable row level security;

create policy "Public can insert booked calls"
  on public.booked_calls for insert
  to anon
  with check (true);

create policy "Authenticated can read booked calls"
  on public.booked_calls for select
  to authenticated
  using (true);

create policy "Authenticated can delete booked calls"
  on public.booked_calls for delete
  to authenticated
  using (true);

-- Notes: only authenticated admin can do everything
alter table public.notes enable row level security;

create policy "Authenticated can manage notes"
  on public.notes for all
  to authenticated
  using (true)
  with check (true);
