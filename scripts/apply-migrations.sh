#!/usr/bin/env bash
set -euo pipefail

# apply-migrations.sh
# Applies SQL files from supabase/migrations in alphabetical order using psql
# Requires: DATABASE_URL environment variable

if [ -z "${DATABASE_URL:-}" ]; then
  echo "ERROR: DATABASE_URL is not set. Set it to the target PostgreSQL connection string." >&2
  exit 2
fi

MIGRATIONS_DIR="$(dirname "$0")/../supabase/migrations"
if [ ! -d "$MIGRATIONS_DIR" ]; then
  echo "No migrations directory found at $MIGRATIONS_DIR" >&2
  exit 0
fi

echo "Applying migrations from $MIGRATIONS_DIR"
for f in "$MIGRATIONS_DIR"/*.sql; do
  [ -e "$f" ] || continue
  echo "---- Applying: $f ----"
  psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f "$f"
done

if [ "${SUPABASE_APPLY_SEED:-false}" = "true" ]; then
  SEED_FILE="$(dirname "$0")/../supabase/seed.sql"
  if [ -f "$SEED_FILE" ]; then
    echo "Applying seed: $SEED_FILE"
    psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f "$SEED_FILE"
  else
    echo "No seed file found at $SEED_FILE"
  fi
fi

echo "Migrations applied successfully."
