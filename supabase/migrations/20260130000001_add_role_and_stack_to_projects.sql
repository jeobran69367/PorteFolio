-- Migration: add 'role' and 'stack_details' columns to projects
-- Adds role field for developer role and stack_details for categorized technology stack
BEGIN;

ALTER TABLE public.projects
  ADD COLUMN IF NOT EXISTS role text,
  ADD COLUMN IF NOT EXISTS stack_details jsonb DEFAULT '{}'::jsonb;

COMMENT ON COLUMN public.projects.role IS 'Developer role for this project (e.g., "Développeur Full-Stack & IA")';
COMMENT ON COLUMN public.projects.stack_details IS 'Categorized technology stack (e.g., {"Frontend": ["Next.js"], "Backend": ["API REST"]})';

COMMIT;
