-- BentoBoard Database Schema
-- Run this in your Supabase SQL editor: https://app.supabase.com/project/<id>/sql

-- ============================================================
-- Tables
-- ============================================================

create table if not exists items (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('draft', 'idea', 'file', 'task')),
  title text not null,
  project text not null,
  status text not null default 'proposed' check (status in ('proposed', 'in_review', 'approved', 'rejected', 'done')),
  created_by text not null check (created_by in ('bento', 'brian')),
  content_markdown text,
  content_html text,
  file_path text,
  file_type text,
  description text,
  tags text[] default '{}',
  priority text default 'normal' check (priority in ('normal', 'high', 'urgent')),
  due_date timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  item_id uuid references items(id) on delete cascade,
  author text not null check (author in ('bento', 'brian')),
  content text not null,
  resolved boolean default false,
  created_at timestamptz default now()
);

create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('vip_email', 'approval_needed', 'idea_proposed', 'task_complete', 'alert')),
  title text not null,
  body text,
  priority text default 'normal' check (priority in ('normal', 'high', 'urgent')),
  read boolean default false,
  action_item_id uuid references items(id),
  created_at timestamptz default now()
);

create table if not exists projects (
  slug text primary key,
  name text not null,
  emoji text,
  description text,
  color text default '#3B82F6',
  created_at timestamptz default now()
);

create table if not exists config (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz default now()
);

-- ============================================================
-- Realtime
-- ============================================================

alter publication supabase_realtime add table items;
alter publication supabase_realtime add table comments;
alter publication supabase_realtime add table notifications;

-- ============================================================
-- Row Level Security (simple v1 — allow all for authenticated)
-- ============================================================

alter table items enable row level security;
alter table comments enable row level security;
alter table notifications enable row level security;
alter table projects enable row level security;
alter table config enable row level security;

-- Allow all for authenticated users (single-user app)
create policy "Allow all" on items for all using (true) with check (true);
create policy "Allow all" on comments for all using (true) with check (true);
create policy "Allow all" on notifications for all using (true) with check (true);
create policy "Allow all" on projects for all using (true) with check (true);
create policy "Allow all" on config for all using (true) with check (true);

-- ============================================================
-- Storage
-- ============================================================

insert into storage.buckets (id, name, public) values ('files', 'files', true)
  on conflict do nothing;

create policy "Allow uploads" on storage.objects for insert
  with check (bucket_id = 'files');

create policy "Allow reads" on storage.objects for select
  using (bucket_id = 'files');

-- ============================================================
-- Seed: Projects
-- ============================================================

insert into projects (slug, name, emoji, color) values
  ('newsletter', 'Weekly Newsletter', '📰', '#3B82F6'),
  ('claudepocalypse', 'Claudepocalypse', '🔥', '#EF4444'),
  ('ambassador-outreach', 'Ambassador Outreach', '🤝', '#8B5CF6'),
  ('morning-briefing', 'Morning Briefing', '☀️', '#F59E0B'),
  ('content-creation', 'Content Creation', '🎬', '#EC4899'),
  ('email-monitoring', 'Email Monitoring', '📧', '#06B6D4'),
  ('blog-posts', 'Blog Posts', '✍️', '#10B981')
on conflict (slug) do nothing;

-- ============================================================
-- Helpful queries for Bento
-- ============================================================

-- Create a draft for Brian to review:
-- curl -X POST "$SUPABASE_URL/rest/v1/items" \
--   -H "apikey: $SUPABASE_KEY" \
--   -H "Authorization: Bearer $SUPABASE_KEY" \
--   -H "Content-Type: application/json" \
--   -d '{"type":"draft","title":"Weekly Newsletter - Apr 16","project":"newsletter",
--        "status":"in_review","created_by":"bento","priority":"high",
--        "content_markdown":"# Content here..."}'

-- Send a VIP email notification:
-- curl -X POST "$SUPABASE_URL/rest/v1/notifications" \
--   -H "apikey: $SUPABASE_KEY" \
--   -H "Authorization: Bearer $SUPABASE_KEY" \
--   -H "Content-Type: application/json" \
--   -d '{"type":"vip_email","title":"Email from Scott","body":"Wants to sync","priority":"high"}'

-- Check for approved items (run on heartbeat):
-- curl "$SUPABASE_URL/rest/v1/items?status=eq.approved&created_by=eq.bento" \
--   -H "apikey: $SUPABASE_KEY" \
--   -H "Authorization: Bearer $SUPABASE_KEY"
