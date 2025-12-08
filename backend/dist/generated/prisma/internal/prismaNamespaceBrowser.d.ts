import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly patient: "patient";
    readonly intervenant_pr: "intervenant_pr";
    readonly r_rapport_pr: "r_rapport_pr";
    readonly r_rapport_pr_intervenant: "r_rapport_pr_intervenant";
    readonly s01_prise_en_charge: "s01_prise_en_charge";
    readonly s02_service_pr: "s02_service_pr";
    readonly s03_arrivee_usager: "s03_arrivee_usager";
    readonly s04_approche_initiale: "s04_approche_initiale";
    readonly s05_nature_cas_type: "s05_nature_cas_type";
    readonly s05_rapport_nature_cas: "s05_rapport_nature_cas";
    readonly s05_nature_cas_info: "s05_nature_cas_info";
    readonly s06_antecedent_type: "s06_antecedent_type";
    readonly s06_rapport_antecedent: "s06_rapport_antecedent";
    readonly s07_maladie_infectieuse_type: "s07_maladie_infectieuse_type";
    readonly s07_maladies_infectieuses_info: "s07_maladies_infectieuses_info";
    readonly s07_rapport_maladie_infectieuse: "s07_rapport_maladie_infectieuse";
    readonly s08_allergie_type: "s08_allergie_type";
    readonly s08_allergies_info: "s08_allergies_info";
    readonly s08_rapport_allergie: "s08_rapport_allergie";
    readonly s09_mecanisme_trauma_type: "s09_mecanisme_trauma_type";
    readonly s09_rapport_mecanisme_trauma: "s09_rapport_mecanisme_trauma";
    readonly s09_mecanisme_trauma_info: "s09_mecanisme_trauma_info";
    readonly s10_trauma_info: "s10_trauma_info";
    readonly s10_trauma_zone_type: "s10_trauma_zone_type";
    readonly s10_trauma_lesion_type: "s10_trauma_lesion_type";
    readonly s10_trauma_constat: "s10_trauma_constat";
    readonly s11_support_clinique_info: "s11_support_clinique_info";
    readonly s12_signe_vital: "s12_signe_vital";
    readonly s13_info: "s13_info";
    readonly s13_arret_cardiaque: "s13_arret_cardiaque";
    readonly s13_voies_aeriennes: "s13_voies_aeriennes";
    readonly s13_hemorragies: "s13_hemorragies";
    readonly s13_immobilisations: "s13_immobilisations";
    readonly s13_accouchement: "s13_accouchement";
    readonly s13_medicaments: "s13_medicaments";
    readonly s14_entreprise_ambulanciere: "s14_entreprise_ambulanciere";
    readonly s15_autres_renseignements: "s15_autres_renseignements";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const PatientScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly annee_naissance: "annee_naissance";
    readonly sexe: "sexe";
    readonly no_ass: "no_ass";
    readonly maladie: "maladie";
};
export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum];
export declare const Intervenant_prScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly email: "email";
    readonly numero_pr: "numero_pr";
    readonly mot_de_passe: "mot_de_passe";
    readonly niveau_pr: "niveau_pr";
    readonly date_active: "date_active";
    readonly date_inactive: "date_inactive";
    readonly actif: "actif";
    readonly cellulaire: "cellulaire";
};
export type Intervenant_prScalarFieldEnum = (typeof Intervenant_prScalarFieldEnum)[keyof typeof Intervenant_prScalarFieldEnum];
export declare const R_rapport_prScalarFieldEnum: {
    readonly id: "id";
    readonly patient_id: "patient_id";
    readonly numero_formulaire_terrain: "numero_formulaire_terrain";
    readonly code_smpau: "code_smpau";
    readonly no_autor: "no_autor";
    readonly etat_rapport: "etat_rapport";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type R_rapport_prScalarFieldEnum = (typeof R_rapport_prScalarFieldEnum)[keyof typeof R_rapport_prScalarFieldEnum];
export declare const R_rapport_pr_intervenantScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly intervenant_id: "intervenant_id";
    readonly role: "role";
};
export type R_rapport_pr_intervenantScalarFieldEnum = (typeof R_rapport_pr_intervenantScalarFieldEnum)[keyof typeof R_rapport_pr_intervenantScalarFieldEnum];
export declare const S01_prise_en_chargeScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly date_prise_en_charge: "date_prise_en_charge";
};
export type S01_prise_en_chargeScalarFieldEnum = (typeof S01_prise_en_chargeScalarFieldEnum)[keyof typeof S01_prise_en_chargeScalarFieldEnum];
export declare const S02_service_prScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly service_pr: "service_pr";
    readonly no_evenement_pr: "no_evenement_pr";
};
export type S02_service_prScalarFieldEnum = (typeof S02_service_prScalarFieldEnum)[keyof typeof S02_service_prScalarFieldEnum];
export declare const S03_arrivee_usagerScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly heure_arrivee_usager: "heure_arrivee_usager";
};
export type S03_arrivee_usagerScalarFieldEnum = (typeof S03_arrivee_usagerScalarFieldEnum)[keyof typeof S03_arrivee_usagerScalarFieldEnum];
export declare const S04_approche_initialeScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly etat_conscience: "etat_conscience";
    readonly voies_respiratoires: "voies_respiratoires";
    readonly respiration: "respiration";
    readonly pouls_presence: "pouls_presence";
    readonly pouls_localisation: "pouls_localisation";
    readonly niveau_conscience: "niveau_conscience";
    readonly oriente: "oriente";
};
export type S04_approche_initialeScalarFieldEnum = (typeof S04_approche_initialeScalarFieldEnum)[keyof typeof S04_approche_initialeScalarFieldEnum];
export declare const S05_nature_cas_typeScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly libelle: "libelle";
    readonly actif: "actif";
};
export type S05_nature_cas_typeScalarFieldEnum = (typeof S05_nature_cas_typeScalarFieldEnum)[keyof typeof S05_nature_cas_typeScalarFieldEnum];
export declare const S05_rapport_nature_casScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly nature_cas_id: "nature_cas_id";
};
export type S05_rapport_nature_casScalarFieldEnum = (typeof S05_rapport_nature_casScalarFieldEnum)[keyof typeof S05_rapport_nature_casScalarFieldEnum];
export declare const S05_nature_cas_infoScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly nature_cas_autre: "nature_cas_autre";
};
export type S05_nature_cas_infoScalarFieldEnum = (typeof S05_nature_cas_infoScalarFieldEnum)[keyof typeof S05_nature_cas_infoScalarFieldEnum];
export declare const S06_antecedent_typeScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly libelle: "libelle";
    readonly actif: "actif";
};
export type S06_antecedent_typeScalarFieldEnum = (typeof S06_antecedent_typeScalarFieldEnum)[keyof typeof S06_antecedent_typeScalarFieldEnum];
export declare const S06_rapport_antecedentScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly antecedent_id: "antecedent_id";
};
export type S06_rapport_antecedentScalarFieldEnum = (typeof S06_rapport_antecedentScalarFieldEnum)[keyof typeof S06_rapport_antecedentScalarFieldEnum];
export declare const S07_maladie_infectieuse_typeScalarFieldEnum: {
    readonly id: "id";
    readonly categorie: "categorie";
    readonly code: "code";
    readonly libelle: "libelle";
    readonly actif: "actif";
};
export type S07_maladie_infectieuse_typeScalarFieldEnum = (typeof S07_maladie_infectieuse_typeScalarFieldEnum)[keyof typeof S07_maladie_infectieuse_typeScalarFieldEnum];
export declare const S07_maladies_infectieuses_infoScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly a_maladies_inf: "a_maladies_inf";
    readonly commentaire: "commentaire";
};
export type S07_maladies_infectieuses_infoScalarFieldEnum = (typeof S07_maladies_infectieuses_infoScalarFieldEnum)[keyof typeof S07_maladies_infectieuses_infoScalarFieldEnum];
export declare const S07_rapport_maladie_infectieuseScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly maladie_infectieuse_type_id: "maladie_infectieuse_type_id";
    readonly libelle_autre: "libelle_autre";
    readonly details: "details";
};
export type S07_rapport_maladie_infectieuseScalarFieldEnum = (typeof S07_rapport_maladie_infectieuseScalarFieldEnum)[keyof typeof S07_rapport_maladie_infectieuseScalarFieldEnum];
export declare const S08_allergie_typeScalarFieldEnum: {
    readonly id: "id";
    readonly categorie: "categorie";
    readonly code: "code";
    readonly libelle: "libelle";
    readonly actif: "actif";
};
export type S08_allergie_typeScalarFieldEnum = (typeof S08_allergie_typeScalarFieldEnum)[keyof typeof S08_allergie_typeScalarFieldEnum];
export declare const S08_allergies_infoScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly a_allergies: "a_allergies";
    readonly commentaire: "commentaire";
};
export type S08_allergies_infoScalarFieldEnum = (typeof S08_allergies_infoScalarFieldEnum)[keyof typeof S08_allergies_infoScalarFieldEnum];
export declare const S08_rapport_allergieScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly allergie_type_id: "allergie_type_id";
    readonly libelle_autre: "libelle_autre";
    readonly details: "details";
};
export type S08_rapport_allergieScalarFieldEnum = (typeof S08_rapport_allergieScalarFieldEnum)[keyof typeof S08_rapport_allergieScalarFieldEnum];
export declare const S09_mecanisme_trauma_typeScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly libelle: "libelle";
    readonly actif: "actif";
};
export type S09_mecanisme_trauma_typeScalarFieldEnum = (typeof S09_mecanisme_trauma_typeScalarFieldEnum)[keyof typeof S09_mecanisme_trauma_typeScalarFieldEnum];
export declare const S09_rapport_mecanisme_traumaScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly mecanisme_trauma_id: "mecanisme_trauma_id";
};
export type S09_rapport_mecanisme_traumaScalarFieldEnum = (typeof S09_rapport_mecanisme_traumaScalarFieldEnum)[keyof typeof S09_rapport_mecanisme_traumaScalarFieldEnum];
export declare const S09_mecanisme_trauma_infoScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly ceinture: "ceinture";
    readonly ballon_deploye: "ballon_deploye";
    readonly incarcere: "incarcere";
    readonly incarcere_duree_min: "incarcere_duree_min";
};
export type S09_mecanisme_trauma_infoScalarFieldEnum = (typeof S09_mecanisme_trauma_infoScalarFieldEnum)[keyof typeof S09_mecanisme_trauma_infoScalarFieldEnum];
export declare const S10_trauma_infoScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly sans_particularite: "sans_particularite";
    readonly commentaire: "commentaire";
};
export type S10_trauma_infoScalarFieldEnum = (typeof S10_trauma_infoScalarFieldEnum)[keyof typeof S10_trauma_infoScalarFieldEnum];
export declare const S10_trauma_zone_typeScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly libelle: "libelle";
    readonly actif: "actif";
};
export type S10_trauma_zone_typeScalarFieldEnum = (typeof S10_trauma_zone_typeScalarFieldEnum)[keyof typeof S10_trauma_zone_typeScalarFieldEnum];
export declare const S10_trauma_lesion_typeScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly libelle: "libelle";
    readonly actif: "actif";
};
export type S10_trauma_lesion_typeScalarFieldEnum = (typeof S10_trauma_lesion_typeScalarFieldEnum)[keyof typeof S10_trauma_lesion_typeScalarFieldEnum];
export declare const S10_trauma_constatScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly zone_id: "zone_id";
    readonly lesion_type_id: "lesion_type_id";
    readonly commentaire: "commentaire";
};
export type S10_trauma_constatScalarFieldEnum = (typeof S10_trauma_constatScalarFieldEnum)[keyof typeof S10_trauma_constatScalarFieldEnum];
export declare const S11_support_clinique_infoScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly sur_les_lieux: "sur_les_lieux";
    readonly a_distance: "a_distance";
    readonly no_permis: "no_permis";
    readonly heure_support: "heure_support";
};
export type S11_support_clinique_infoScalarFieldEnum = (typeof S11_support_clinique_infoScalarFieldEnum)[keyof typeof S11_support_clinique_infoScalarFieldEnum];
export declare const S12_signe_vitalScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly heure_prise: "heure_prise";
    readonly respiration_min: "respiration_min";
    readonly pouls_min: "pouls_min";
    readonly etat_conscience_avpu: "etat_conscience_avpu";
    readonly glycemie: "glycemie";
    readonly spo2_pct: "spo2_pct";
    readonly o2_pct: "o2_pct";
    readonly created_at: "created_at";
};
export type S12_signe_vitalScalarFieldEnum = (typeof S12_signe_vitalScalarFieldEnum)[keyof typeof S12_signe_vitalScalarFieldEnum];
export declare const S13_infoScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly non_intervention: "non_intervention";
    readonly commentaire: "commentaire";
};
export type S13_infoScalarFieldEnum = (typeof S13_infoScalarFieldEnum)[keyof typeof S13_infoScalarFieldEnum];
export declare const S13_arret_cardiaqueScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly temoin_effondrement: "temoin_effondrement";
    readonly temoin_effondrement_type: "temoin_effondrement_type";
    readonly temoin_effondrement_heure: "temoin_effondrement_heure";
    readonly rcr_temoin: "rcr_temoin";
    readonly dea_temoin: "dea_temoin";
    readonly dea_temoin_nb_chocs: "dea_temoin_nb_chocs";
    readonly rcr_pr_debut_heure: "rcr_pr_debut_heure";
    readonly dea_pr: "dea_pr";
    readonly dea_pr_nb_chocs: "dea_pr_nb_chocs";
    readonly retour_pouls_avant_tap: "retour_pouls_avant_tap";
};
export type S13_arret_cardiaqueScalarFieldEnum = (typeof S13_arret_cardiaqueScalarFieldEnum)[keyof typeof S13_arret_cardiaqueScalarFieldEnum];
export declare const S13_voies_aeriennesScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly voies_aeriennes_liberees: "voies_aeriennes_liberees";
    readonly appareil_succion: "appareil_succion";
    readonly masque_poche: "masque_poche";
    readonly canule: "canule";
    readonly canule_type: "canule_type";
    readonly ballon_ventilatoire: "ballon_ventilatoire";
};
export type S13_voies_aeriennesScalarFieldEnum = (typeof S13_voies_aeriennesScalarFieldEnum)[keyof typeof S13_voies_aeriennesScalarFieldEnum];
export declare const S13_hemorragiesScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly pansements: "pansements";
    readonly controle_pression: "controle_pression";
    readonly controle_pression_type: "controle_pression_type";
    readonly garrot: "garrot";
    readonly garrot_heure: "garrot_heure";
};
export type S13_hemorragiesScalarFieldEnum = (typeof S13_hemorragiesScalarFieldEnum)[keyof typeof S13_hemorragiesScalarFieldEnum];
export declare const S13_immobilisationsScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly collet_cervical: "collet_cervical";
    readonly collet_taille: "collet_taille";
    readonly matelas_immobilisateur: "matelas_immobilisateur";
    readonly planche_longue: "planche_longue";
    readonly ked: "ked";
    readonly attelle_fixation: "attelle_fixation";
};
export type S13_immobilisationsScalarFieldEnum = (typeof S13_immobilisationsScalarFieldEnum)[keyof typeof S13_immobilisationsScalarFieldEnum];
export declare const S13_accouchementScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly accouchement: "accouchement";
    readonly accouchement_heure: "accouchement_heure";
    readonly acces_refuse: "acces_refuse";
};
export type S13_accouchementScalarFieldEnum = (typeof S13_accouchementScalarFieldEnum)[keyof typeof S13_accouchementScalarFieldEnum];
export declare const S13_medicamentsScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly nitro_prise: "nitro_prise";
    readonly nitro_heure_dose1: "nitro_heure_dose1";
    readonly nitro_heure_dose2: "nitro_heure_dose2";
    readonly epinephrine_03_prise: "epinephrine_03_prise";
    readonly epinephrine_03_heure_dose1: "epinephrine_03_heure_dose1";
    readonly epinephrine_03_heure_dose2: "epinephrine_03_heure_dose2";
    readonly epinephrine_015_prise: "epinephrine_015_prise";
    readonly epinephrine_015_heure_dose1: "epinephrine_015_heure_dose1";
    readonly epinephrine_015_heure_dose2: "epinephrine_015_heure_dose2";
    readonly glucose_prise: "glucose_prise";
    readonly glucose_heure_dose1: "glucose_heure_dose1";
    readonly glucose_heure_dose2: "glucose_heure_dose2";
    readonly glucagon_prise: "glucagon_prise";
    readonly glucagon_heure: "glucagon_heure";
    readonly naloxone_prise: "naloxone_prise";
    readonly naloxone_heure_dose1: "naloxone_heure_dose1";
    readonly naloxone_heure_dose2: "naloxone_heure_dose2";
};
export type S13_medicamentsScalarFieldEnum = (typeof S13_medicamentsScalarFieldEnum)[keyof typeof S13_medicamentsScalarFieldEnum];
export declare const S14_entreprise_ambulanciereScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly entreprise_ambulanciere_nom: "entreprise_ambulanciere_nom";
    readonly entreprise_ambulanciere_no: "entreprise_ambulanciere_no";
    readonly pr_accompagnant: "pr_accompagnant";
};
export type S14_entreprise_ambulanciereScalarFieldEnum = (typeof S14_entreprise_ambulanciereScalarFieldEnum)[keyof typeof S14_entreprise_ambulanciereScalarFieldEnum];
export declare const S15_autres_renseignementsScalarFieldEnum: {
    readonly id: "id";
    readonly rapport_id: "rapport_id";
    readonly texte: "texte";
};
export type S15_autres_renseignementsScalarFieldEnum = (typeof S15_autres_renseignementsScalarFieldEnum)[keyof typeof S15_autres_renseignementsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map