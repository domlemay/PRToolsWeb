-- Migration: rendre mot_de_passe optionnel, date_active optionnel, défaut actif=false
-- NOTE: Exécutez cette migration avec `npx prisma migrate dev` ou `npx prisma migrate deploy` selon votre workflow.

BEGIN;

-- Autoriser mot_de_passe NULL
ALTER TABLE "intervenant_pr" ALTER COLUMN "mot_de_passe" DROP NOT NULL;

-- Autoriser date_active NULL
ALTER TABLE "intervenant_pr" ALTER COLUMN "date_active" DROP NOT NULL;

-- Mettre la valeur par défaut de `actif` à false
ALTER TABLE "intervenant_pr" ALTER COLUMN "actif" SET DEFAULT false;

-- S'assurer que les utilisateurs sans mot_de_passe ne sont ni actifs ni admin
UPDATE "intervenant_pr" SET "actif" = false, "admin" = false WHERE "mot_de_passe" IS NULL;

COMMIT;
