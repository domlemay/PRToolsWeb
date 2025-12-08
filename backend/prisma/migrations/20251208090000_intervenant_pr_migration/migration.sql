-- Migration: intervenant_pr_migration
-- Generated manually to reflect changes to `intervenant_pr` model

BEGIN;

-- 1) Add `admin` column (default false) if it doesn't exist
ALTER TABLE public.intervenant_pr
ADD COLUMN IF NOT EXISTS admin boolean DEFAULT false;

-- 2) Ensure `email` column has a unique index (idempotent)
CREATE UNIQUE INDEX IF NOT EXISTS idx_intervenant_pr_email_unique
ON public.intervenant_pr (email);

COMMIT;
