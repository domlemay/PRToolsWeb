/*
  Warnings:

  - Made the column `actif` on table `intervenant_pr` required. This step will fail if there are existing NULL values in that column.
  - Made the column `admin` on table `intervenant_pr` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "intervenant_pr" ALTER COLUMN "numero_pr" DROP NOT NULL,
ALTER COLUMN "actif" SET NOT NULL,
ALTER COLUMN "admin" SET NOT NULL;

-- RenameIndex
-- RenameIndex removed: l'index contraint existe déjà dans la base, renommer provoquait une erreur 42P07.
-- Si vous devez renommer l'index manuellement, exécutez la commande ci-dessous une seule fois en vérifiant l'absence de conflit :
-- ALTER INDEX "idx_intervenant_pr_email_unique" RENAME TO "intervenant_pr_email_key";
