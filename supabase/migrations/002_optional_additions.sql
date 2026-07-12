-- ============================================================
-- Kavaro Site — Optional Additions (run only the parts you want)
--
-- These are NOT required for the current site to work. They add
-- room to grow: a newsletter list, testimonials you can manage from
-- the admin, and a projects/portfolio table so the homepage work
-- section can be data-driven instead of hard-coded.
-- ============================================================

-- ── NEWSLETTER SUBSCRIBERS ─────────────────────────────────────────────────
-- Collect emails from a footer "subscribe" box. anon inserts, admin reads.
create table if not exists public.subscribers (
  id          uuid primary key default gen_random_uuid(),
  email       text not null unique
              check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 254),
  source      text,
  created_at  timestamptz not null default now()
);
create index if not exists subscribers_created_at_idx on public.subscribers (created_at desc);

alter table public.subscribers enable row level security;
drop policy if exists "Public can subscribe"            on public.subscribers;
drop policy if exists "Authenticated can read subscribers" on public.subscribers;
drop policy if exists "Authenticated can delete subscribers" on public.subscribers;
create policy "Public can subscribe"
  on public.subscribers for insert to anon with check (true);
create policy "Authenticated can read subscribers"
  on public.subscribers for select to authenticated using (true);
create policy "Authenticated can delete subscribers"
  on public.subscribers for delete to authenticated using (true);

revoke all on public.subscribers from anon, authenticated;
grant insert on public.subscribers to anon;
grant select, delete on public.subscribers to authenticated;

-- ── TESTIMONIALS ───────────────────────────────────────────────────────────
-- Managed by admin, shown publicly only when published = true.
create table if not exists public.testimonials (
  id          uuid primary key default gen_random_uuid(),
  author      text not null,
  role        text,                         -- e.g. "Founder, Carol's Grocery"
  quote       text not null,
  avatar_url  text,
  published   boolean not null default false,
  sort_order  int not null default 0,
  created_at  timestamptz not null default now()
);
create index if not exists testimonials_published_idx on public.testimonials (published, sort_order);

alter table public.testimonials enable row level security;
drop policy if exists "Public can read published testimonials" on public.testimonials;
drop policy if exists "Authenticated can manage testimonials"   on public.testimonials;
create policy "Public can read published testimonials"
  on public.testimonials for select to anon using (published = true);
create policy "Authenticated can manage testimonials"
  on public.testimonials for all to authenticated using (true) with check (true);

revoke all on public.testimonials from anon, authenticated;
grant select on public.testimonials to anon;
grant select, insert, update, delete on public.testimonials to authenticated;

-- ── PROJECTS / PORTFOLIO ───────────────────────────────────────────────────
-- Data-drive the "Our Work" section instead of hard-coding it in index.tsx.
create table if not exists public.projects (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  slug         text unique,
  summary      text,
  image_url    text,
  live_url     text,
  tags         text[],                      -- e.g. {'Web Development','UI/UX'}
  published    boolean not null default false,
  sort_order   int not null default 0,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);
create index if not exists projects_published_idx on public.projects (published, sort_order);

drop trigger if exists projects_set_updated_at on public.projects;
create trigger projects_set_updated_at
  before update on public.projects
  for each row execute function public.set_updated_at();  -- from 001

alter table public.projects enable row level security;
drop policy if exists "Public can read published projects" on public.projects;
drop policy if exists "Authenticated can manage projects"   on public.projects;
create policy "Public can read published projects"
  on public.projects for select to anon using (published = true);
create policy "Authenticated can manage projects"
  on public.projects for all to authenticated using (true) with check (true);

revoke all on public.projects from anon, authenticated;
grant select on public.projects to anon;
grant select, insert, update, delete on public.projects to authenticated;

-- ── REALTIME (optional) ────────────────────────────────────────────────────
-- Lets the admin dashboard update live when a new lead/booking arrives.
-- Wrapped so it won't error if a table is already in the publication.
do $$
begin
  alter publication supabase_realtime add table public.leads;
exception when duplicate_object then null; end $$;
do $$
begin
  alter publication supabase_realtime add table public.booked_calls;
exception when duplicate_object then null; end $$;
