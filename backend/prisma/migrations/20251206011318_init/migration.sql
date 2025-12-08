-- CreateTable
CREATE TABLE "patient" (
    "id" SERIAL NOT NULL,
    "nom" TEXT,
    "prenom" TEXT,
    "annee_naissance" INTEGER,
    "sexe" TEXT,
    "no_ass" TEXT,
    "maladie" TEXT,

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "intervenant_pr" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "numero_pr" TEXT NOT NULL,
    "mot_de_passe" TEXT NOT NULL,
    "niveau_pr" TEXT NOT NULL,
    "date_active" TIMESTAMP(3) NOT NULL,
    "date_inactive" TIMESTAMP(3),
    "actif" BOOLEAN DEFAULT true,
    "cellulaire" TEXT,

    CONSTRAINT "intervenant_pr_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "r_rapport_pr" (
    "id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "numero_formulaire_terrain" TEXT,
    "code_smpau" TEXT NOT NULL,
    "no_autor" TEXT,
    "etat_rapport" TEXT,
    "created_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "r_rapport_pr_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "r_rapport_pr_intervenant" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "intervenant_id" INTEGER NOT NULL,
    "role" TEXT,

    CONSTRAINT "r_rapport_pr_intervenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s01_prise_en_charge" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "date_prise_en_charge" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "s01_prise_en_charge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s02_service_pr" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "service_pr" TEXT NOT NULL,
    "no_evenement_pr" TEXT,

    CONSTRAINT "s02_service_pr_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s03_arrivee_usager" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "heure_arrivee_usager" TIMESTAMP(3),

    CONSTRAINT "s03_arrivee_usager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s04_approche_initiale" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "etat_conscience" TEXT,
    "voies_respiratoires" TEXT,
    "respiration" TEXT,
    "pouls_presence" BOOLEAN,
    "pouls_localisation" TEXT,
    "niveau_conscience" TEXT,
    "oriente" BOOLEAN,

    CONSTRAINT "s04_approche_initiale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s05_nature_cas_type" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "libelle" TEXT NOT NULL,
    "actif" BOOLEAN DEFAULT true,

    CONSTRAINT "s05_nature_cas_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s05_rapport_nature_cas" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "nature_cas_id" INTEGER NOT NULL,

    CONSTRAINT "s05_rapport_nature_cas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s05_nature_cas_info" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "nature_cas_autre" TEXT,

    CONSTRAINT "s05_nature_cas_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s06_antecedent_type" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "libelle" TEXT NOT NULL,
    "actif" BOOLEAN DEFAULT true,

    CONSTRAINT "s06_antecedent_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s06_rapport_antecedent" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "antecedent_id" INTEGER NOT NULL,

    CONSTRAINT "s06_rapport_antecedent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s07_maladie_infectieuse_type" (
    "id" SERIAL NOT NULL,
    "categorie" TEXT,
    "code" TEXT NOT NULL,
    "libelle" TEXT NOT NULL,
    "actif" BOOLEAN DEFAULT true,

    CONSTRAINT "s07_maladie_infectieuse_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s07_maladies_infectieuses_info" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "a_maladies_inf" BOOLEAN,
    "commentaire" TEXT,

    CONSTRAINT "s07_maladies_infectieuses_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s07_rapport_maladie_infectieuse" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "maladie_infectieuse_type_id" INTEGER,
    "libelle_autre" TEXT,
    "details" TEXT,

    CONSTRAINT "s07_rapport_maladie_infectieuse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s08_allergie_type" (
    "id" SERIAL NOT NULL,
    "categorie" TEXT,
    "code" TEXT NOT NULL,
    "libelle" TEXT NOT NULL,
    "actif" BOOLEAN DEFAULT true,

    CONSTRAINT "s08_allergie_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s08_allergies_info" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "a_allergies" BOOLEAN,
    "commentaire" TEXT,

    CONSTRAINT "s08_allergies_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s08_rapport_allergie" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "allergie_type_id" INTEGER,
    "libelle_autre" TEXT,
    "details" TEXT,

    CONSTRAINT "s08_rapport_allergie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s09_mecanisme_trauma_type" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "libelle" TEXT NOT NULL,
    "actif" BOOLEAN DEFAULT true,

    CONSTRAINT "s09_mecanisme_trauma_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s09_rapport_mecanisme_trauma" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "mecanisme_trauma_id" INTEGER NOT NULL,

    CONSTRAINT "s09_rapport_mecanisme_trauma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s09_mecanisme_trauma_info" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "ceinture" TEXT,
    "ballon_deploye" TEXT,
    "incarcere" TEXT,
    "incarcere_duree_min" INTEGER,

    CONSTRAINT "s09_mecanisme_trauma_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s10_trauma_info" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "sans_particularite" TEXT,
    "commentaire" TEXT,

    CONSTRAINT "s10_trauma_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s10_trauma_zone_type" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "libelle" TEXT NOT NULL,
    "actif" BOOLEAN DEFAULT true,

    CONSTRAINT "s10_trauma_zone_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s10_trauma_lesion_type" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "libelle" TEXT NOT NULL,
    "actif" BOOLEAN DEFAULT true,

    CONSTRAINT "s10_trauma_lesion_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s10_trauma_constat" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "zone_id" INTEGER NOT NULL,
    "lesion_type_id" INTEGER NOT NULL,
    "commentaire" TEXT,

    CONSTRAINT "s10_trauma_constat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s11_support_clinique_info" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "sur_les_lieux" TEXT,
    "a_distance" TEXT,
    "no_permis" TEXT,
    "heure_support" TIMESTAMP(3),

    CONSTRAINT "s11_support_clinique_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s12_signe_vital" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "heure_prise" TIMESTAMP(3) NOT NULL,
    "respiration_min" INTEGER,
    "pouls_min" INTEGER,
    "etat_conscience_avpu" TEXT,
    "glycemie" DOUBLE PRECISION,
    "spo2_pct" INTEGER,
    "o2_pct" INTEGER,
    "created_at" TIMESTAMP(3),

    CONSTRAINT "s12_signe_vital_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s13_info" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "non_intervention" TEXT,
    "commentaire" TEXT,

    CONSTRAINT "s13_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s13_arret_cardiaque" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "temoin_effondrement" TEXT,
    "temoin_effondrement_type" TEXT,
    "temoin_effondrement_heure" TIMESTAMP(3),
    "rcr_temoin" TEXT,
    "dea_temoin" TEXT,
    "dea_temoin_nb_chocs" INTEGER,
    "rcr_pr_debut_heure" TIMESTAMP(3),
    "dea_pr" TEXT,
    "dea_pr_nb_chocs" INTEGER,
    "retour_pouls_avant_tap" TEXT,

    CONSTRAINT "s13_arret_cardiaque_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s13_voies_aeriennes" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "voies_aeriennes_liberees" TEXT,
    "appareil_succion" TEXT,
    "masque_poche" TEXT,
    "canule" TEXT,
    "canule_type" TEXT,
    "ballon_ventilatoire" TEXT,

    CONSTRAINT "s13_voies_aeriennes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s13_hemorragies" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "pansements" TEXT,
    "controle_pression" TEXT,
    "controle_pression_type" TEXT,
    "garrot" TEXT,
    "garrot_heure" TIMESTAMP(3),

    CONSTRAINT "s13_hemorragies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s13_immobilisations" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "collet_cervical" TEXT,
    "collet_taille" TEXT,
    "matelas_immobilisateur" TEXT,
    "planche_longue" TEXT,
    "ked" TEXT,
    "attelle_fixation" TEXT,

    CONSTRAINT "s13_immobilisations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s13_accouchement" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "accouchement" TEXT,
    "accouchement_heure" TIMESTAMP(3),
    "acces_refuse" TEXT,

    CONSTRAINT "s13_accouchement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s13_medicaments" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "nitro_prise" TEXT,
    "nitro_heure_dose1" TIMESTAMP(3),
    "nitro_heure_dose2" TIMESTAMP(3),
    "epinephrine_03_prise" TEXT,
    "epinephrine_03_heure_dose1" TIMESTAMP(3),
    "epinephrine_03_heure_dose2" TIMESTAMP(3),
    "epinephrine_015_prise" TEXT,
    "epinephrine_015_heure_dose1" TIMESTAMP(3),
    "epinephrine_015_heure_dose2" TIMESTAMP(3),
    "glucose_prise" TEXT,
    "glucose_heure_dose1" TIMESTAMP(3),
    "glucose_heure_dose2" TIMESTAMP(3),
    "glucagon_prise" TEXT,
    "glucagon_heure" TIMESTAMP(3),
    "naloxone_prise" TEXT,
    "naloxone_heure_dose1" TIMESTAMP(3),
    "naloxone_heure_dose2" TIMESTAMP(3),

    CONSTRAINT "s13_medicaments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s14_entreprise_ambulanciere" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "entreprise_ambulanciere_nom" TEXT,
    "entreprise_ambulanciere_no" TEXT,
    "pr_accompagnant" BOOLEAN,

    CONSTRAINT "s14_entreprise_ambulanciere_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "s15_autres_renseignements" (
    "id" SERIAL NOT NULL,
    "rapport_id" INTEGER NOT NULL,
    "texte" TEXT,

    CONSTRAINT "s15_autres_renseignements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "r_rapport_pr_intervenant_rapport_id_intervenant_id_key" ON "r_rapport_pr_intervenant"("rapport_id", "intervenant_id");

-- CreateIndex
CREATE UNIQUE INDEX "s01_prise_en_charge_rapport_id_key" ON "s01_prise_en_charge"("rapport_id");

-- CreateIndex
CREATE UNIQUE INDEX "s02_service_pr_rapport_id_key" ON "s02_service_pr"("rapport_id");

-- CreateIndex
CREATE UNIQUE INDEX "s03_arrivee_usager_rapport_id_key" ON "s03_arrivee_usager"("rapport_id");

-- CreateIndex
CREATE UNIQUE INDEX "s04_approche_initiale_rapport_id_key" ON "s04_approche_initiale"("rapport_id");

-- CreateIndex
CREATE UNIQUE INDEX "s05_nature_cas_info_rapport_id_key" ON "s05_nature_cas_info"("rapport_id");

-- CreateIndex
CREATE UNIQUE INDEX "s07_maladies_infectieuses_info_rapport_id_key" ON "s07_maladies_infectieuses_info"("rapport_id");

-- CreateIndex
CREATE UNIQUE INDEX "s08_allergies_info_rapport_id_key" ON "s08_allergies_info"("rapport_id");

-- CreateIndex
CREATE UNIQUE INDEX "s09_mecanisme_trauma_info_rapport_id_key" ON "s09_mecanisme_trauma_info"("rapport_id");

-- CreateIndex
CREATE UNIQUE INDEX "s10_trauma_info_rapport_id_key" ON "s10_trauma_info"("rapport_id");

-- CreateIndex
CREATE UNIQUE INDEX "s10_trauma_constat_rapport_id_zone_id_lesion_type_id_key" ON "s10_trauma_constat"("rapport_id", "zone_id", "lesion_type_id");

-- CreateIndex
CREATE UNIQUE INDEX "s11_support_clinique_info_rapport_id_key" ON "s11_support_clinique_info"("rapport_id");

-- CreateIndex
CREATE UNIQUE INDEX "s13_info_rapport_id_key" ON "s13_info"("rapport_id");

-- CreateIndex
CREATE UNIQUE INDEX "s13_arret_cardiaque_rapport_id_key" ON "s13_arret_cardiaque"("rapport_id");

-- CreateIndex
CREATE UNIQUE INDEX "s13_voies_aeriennes_rapport_id_key" ON "s13_voies_aeriennes"("rapport_id");

-- CreateIndex
CREATE UNIQUE INDEX "s13_hemorragies_rapport_id_key" ON "s13_hemorragies"("rapport_id");

-- CreateIndex
CREATE UNIQUE INDEX "s13_immobilisations_rapport_id_key" ON "s13_immobilisations"("rapport_id");

-- CreateIndex
CREATE UNIQUE INDEX "s13_accouchement_rapport_id_key" ON "s13_accouchement"("rapport_id");

-- CreateIndex
CREATE UNIQUE INDEX "s13_medicaments_rapport_id_key" ON "s13_medicaments"("rapport_id");

-- CreateIndex
CREATE UNIQUE INDEX "s14_entreprise_ambulanciere_rapport_id_key" ON "s14_entreprise_ambulanciere"("rapport_id");

-- CreateIndex
CREATE UNIQUE INDEX "s15_autres_renseignements_rapport_id_key" ON "s15_autres_renseignements"("rapport_id");

-- AddForeignKey
ALTER TABLE "r_rapport_pr" ADD CONSTRAINT "r_rapport_pr_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "r_rapport_pr_intervenant" ADD CONSTRAINT "r_rapport_pr_intervenant_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "r_rapport_pr_intervenant" ADD CONSTRAINT "r_rapport_pr_intervenant_intervenant_id_fkey" FOREIGN KEY ("intervenant_id") REFERENCES "intervenant_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s01_prise_en_charge" ADD CONSTRAINT "s01_prise_en_charge_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s02_service_pr" ADD CONSTRAINT "s02_service_pr_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s03_arrivee_usager" ADD CONSTRAINT "s03_arrivee_usager_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s04_approche_initiale" ADD CONSTRAINT "s04_approche_initiale_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s05_rapport_nature_cas" ADD CONSTRAINT "s05_rapport_nature_cas_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s05_rapport_nature_cas" ADD CONSTRAINT "s05_rapport_nature_cas_nature_cas_id_fkey" FOREIGN KEY ("nature_cas_id") REFERENCES "s05_nature_cas_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s05_nature_cas_info" ADD CONSTRAINT "s05_nature_cas_info_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s06_rapport_antecedent" ADD CONSTRAINT "s06_rapport_antecedent_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s06_rapport_antecedent" ADD CONSTRAINT "s06_rapport_antecedent_antecedent_id_fkey" FOREIGN KEY ("antecedent_id") REFERENCES "s06_antecedent_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s07_maladies_infectieuses_info" ADD CONSTRAINT "s07_maladies_infectieuses_info_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s07_rapport_maladie_infectieuse" ADD CONSTRAINT "s07_rapport_maladie_infectieuse_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s07_rapport_maladie_infectieuse" ADD CONSTRAINT "s07_rapport_maladie_infectieuse_maladie_infectieuse_type_i_fkey" FOREIGN KEY ("maladie_infectieuse_type_id") REFERENCES "s07_maladie_infectieuse_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s08_allergies_info" ADD CONSTRAINT "s08_allergies_info_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s08_rapport_allergie" ADD CONSTRAINT "s08_rapport_allergie_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s08_rapport_allergie" ADD CONSTRAINT "s08_rapport_allergie_allergie_type_id_fkey" FOREIGN KEY ("allergie_type_id") REFERENCES "s08_allergie_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s09_rapport_mecanisme_trauma" ADD CONSTRAINT "s09_rapport_mecanisme_trauma_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s09_rapport_mecanisme_trauma" ADD CONSTRAINT "s09_rapport_mecanisme_trauma_mecanisme_trauma_id_fkey" FOREIGN KEY ("mecanisme_trauma_id") REFERENCES "s09_mecanisme_trauma_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s09_mecanisme_trauma_info" ADD CONSTRAINT "s09_mecanisme_trauma_info_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s10_trauma_info" ADD CONSTRAINT "s10_trauma_info_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s10_trauma_constat" ADD CONSTRAINT "s10_trauma_constat_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s10_trauma_constat" ADD CONSTRAINT "s10_trauma_constat_zone_id_fkey" FOREIGN KEY ("zone_id") REFERENCES "s10_trauma_zone_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s10_trauma_constat" ADD CONSTRAINT "s10_trauma_constat_lesion_type_id_fkey" FOREIGN KEY ("lesion_type_id") REFERENCES "s10_trauma_lesion_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s11_support_clinique_info" ADD CONSTRAINT "s11_support_clinique_info_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s12_signe_vital" ADD CONSTRAINT "s12_signe_vital_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s13_info" ADD CONSTRAINT "s13_info_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s13_arret_cardiaque" ADD CONSTRAINT "s13_arret_cardiaque_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s13_voies_aeriennes" ADD CONSTRAINT "s13_voies_aeriennes_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s13_hemorragies" ADD CONSTRAINT "s13_hemorragies_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s13_immobilisations" ADD CONSTRAINT "s13_immobilisations_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s13_accouchement" ADD CONSTRAINT "s13_accouchement_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s13_medicaments" ADD CONSTRAINT "s13_medicaments_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s14_entreprise_ambulanciere" ADD CONSTRAINT "s14_entreprise_ambulanciere_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "s15_autres_renseignements" ADD CONSTRAINT "s15_autres_renseignements_rapport_id_fkey" FOREIGN KEY ("rapport_id") REFERENCES "r_rapport_pr"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
