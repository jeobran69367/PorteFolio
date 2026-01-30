-- Migration: add 'objectif' and 'solution' columns to projects
-- Adds two text[] columns with an empty-array default so existing rows remain valid
BEGIN;

ALTER TABLE public.projects
  ADD COLUMN IF NOT EXISTS objectif text[] DEFAULT ARRAY[]::text[] NOT NULL,
  ADD COLUMN IF NOT EXISTS solution text[] DEFAULT ARRAY[]::text[] NOT NULL;

COMMIT;
