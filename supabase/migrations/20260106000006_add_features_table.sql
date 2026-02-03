-- Create features table to drive the feature columns shown on services page
-- Note: we store which column the feature belongs to in `feature_column`
-- (e.g. 'problems', 'solutions', 'benefits')

create table if not exists public.features (
  id uuid primary key default gen_random_uuid(),
  service_id uuid references public.services(id) on delete set null,
  section text not null,
  feature_column text not null,
  content text not null,
  italic boolean default false,
  order_index integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists features_section_idx
  on public.features(section);

create index if not exists features_service_idx
  on public.features(service_id);

create index if not exists features_feature_column_idx
  on public.features(feature_column);
