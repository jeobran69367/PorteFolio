-- Enrich professional experience records with structured, portfolio-ready details.
ALTER TABLE experience
  ADD COLUMN IF NOT EXISTS responsibilities JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS technologies JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS project_links JSONB NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS work_mode VARCHAR(50) NOT NULL DEFAULT 'onsite';

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'experience_work_mode_check'
      AND conrelid = 'experience'::regclass
  ) THEN
    ALTER TABLE experience
      ADD CONSTRAINT experience_work_mode_check
      CHECK (work_mode IN ('onsite', 'hybrid', 'remote'));
  END IF;

  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'experience_responsibilities_is_array'
      AND conrelid = 'experience'::regclass
  ) THEN
    ALTER TABLE experience
      ADD CONSTRAINT experience_responsibilities_is_array
      CHECK (jsonb_typeof(responsibilities) = 'array');
  END IF;

  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'experience_technologies_is_array'
      AND conrelid = 'experience'::regclass
  ) THEN
    ALTER TABLE experience
      ADD CONSTRAINT experience_technologies_is_array
      CHECK (jsonb_typeof(technologies) = 'array');
  END IF;

  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'experience_project_links_is_array'
      AND conrelid = 'experience'::regclass
  ) THEN
    ALTER TABLE experience
      ADD CONSTRAINT experience_project_links_is_array
      CHECK (jsonb_typeof(project_links) = 'array');
  END IF;
END
$$;

COMMENT ON COLUMN experience.responsibilities IS 'Key responsibilities for the role';
COMMENT ON COLUMN experience.technologies IS 'Technologies used in this role';
COMMENT ON COLUMN experience.project_links IS 'Related project links [{label, url, type}]';
COMMENT ON COLUMN experience.work_mode IS 'Work mode: onsite, hybrid or remote';
