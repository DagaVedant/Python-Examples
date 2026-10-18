-- Tables used by the web app and the edge functions.
-- Safe to run on a project that already has `completions`.

-- Lesson completions: one row per user per lesson.
create table if not exists public.completions (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  unit integer not null check (unit >= 1),
  lesson integer not null check (lesson >= 1),
  completed_at timestamptz not null default now(),
  unique (user_id, unit, lesson)
);

alter table public.completions enable row level security;

drop policy if exists "completions_select_own" on public.completions;
create policy "completions_select_own" on public.completions
  for select to authenticated using (auth.uid() = user_id);

drop policy if exists "completions_insert_own" on public.completions;
create policy "completions_insert_own" on public.completions
  for insert to authenticated with check (auth.uid() = user_id);

drop policy if exists "completions_delete_own" on public.completions;
create policy "completions_delete_own" on public.completions
  for delete to authenticated using (auth.uid() = user_id);

grant select, insert, delete on public.completions to authenticated;

-- AI grading log: used for rate limits (per minute, per day, global) and
-- to cache the last answer for identical code. Only the grade-practice and
-- delete-account edge functions touch it, using the service role, so RLS is
-- on with no policies (clients cannot read or write it).
create table if not exists public.grade_log (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  unit integer not null,
  lesson integer not null,
  task_index integer not null,
  code_hash text not null,
  passed boolean not null,
  response jsonb,
  created_at timestamptz not null default now()
);

alter table public.grade_log enable row level security;

create index if not exists grade_log_user_created_idx
  on public.grade_log (user_id, created_at desc);
create index if not exists grade_log_created_idx
  on public.grade_log (created_at desc);
create index if not exists grade_log_task_idx
  on public.grade_log (user_id, unit, lesson, task_index, created_at desc);
