import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Patients
 * const patients = await prisma.patient.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model patient
 *
 */
export type patient = Prisma.patientModel;
/**
 * Model intervenant_pr
 *
 */
export type intervenant_pr = Prisma.intervenant_prModel;
/**
 * Model r_rapport_pr
 *
 */
export type r_rapport_pr = Prisma.r_rapport_prModel;
/**
 * Model r_rapport_pr_intervenant
 *
 */
export type r_rapport_pr_intervenant = Prisma.r_rapport_pr_intervenantModel;
/**
 * Model s01_prise_en_charge
 *
 */
export type s01_prise_en_charge = Prisma.s01_prise_en_chargeModel;
/**
 * Model s02_service_pr
 *
 */
export type s02_service_pr = Prisma.s02_service_prModel;
/**
 * Model s03_arrivee_usager
 *
 */
export type s03_arrivee_usager = Prisma.s03_arrivee_usagerModel;
/**
 * Model s04_approche_initiale
 *
 */
export type s04_approche_initiale = Prisma.s04_approche_initialeModel;
/**
 * Model s05_nature_cas_type
 *
 */
export type s05_nature_cas_type = Prisma.s05_nature_cas_typeModel;
/**
 * Model s05_rapport_nature_cas
 *
 */
export type s05_rapport_nature_cas = Prisma.s05_rapport_nature_casModel;
/**
 * Model s05_nature_cas_info
 *
 */
export type s05_nature_cas_info = Prisma.s05_nature_cas_infoModel;
/**
 * Model s06_antecedent_type
 *
 */
export type s06_antecedent_type = Prisma.s06_antecedent_typeModel;
/**
 * Model s06_rapport_antecedent
 *
 */
export type s06_rapport_antecedent = Prisma.s06_rapport_antecedentModel;
/**
 * Model s07_maladie_infectieuse_type
 *
 */
export type s07_maladie_infectieuse_type = Prisma.s07_maladie_infectieuse_typeModel;
/**
 * Model s07_maladies_infectieuses_info
 *
 */
export type s07_maladies_infectieuses_info = Prisma.s07_maladies_infectieuses_infoModel;
/**
 * Model s07_rapport_maladie_infectieuse
 *
 */
export type s07_rapport_maladie_infectieuse = Prisma.s07_rapport_maladie_infectieuseModel;
/**
 * Model s08_allergie_type
 *
 */
export type s08_allergie_type = Prisma.s08_allergie_typeModel;
/**
 * Model s08_allergies_info
 *
 */
export type s08_allergies_info = Prisma.s08_allergies_infoModel;
/**
 * Model s08_rapport_allergie
 *
 */
export type s08_rapport_allergie = Prisma.s08_rapport_allergieModel;
/**
 * Model s09_mecanisme_trauma_type
 *
 */
export type s09_mecanisme_trauma_type = Prisma.s09_mecanisme_trauma_typeModel;
/**
 * Model s09_rapport_mecanisme_trauma
 *
 */
export type s09_rapport_mecanisme_trauma = Prisma.s09_rapport_mecanisme_traumaModel;
/**
 * Model s09_mecanisme_trauma_info
 *
 */
export type s09_mecanisme_trauma_info = Prisma.s09_mecanisme_trauma_infoModel;
/**
 * Model s10_trauma_info
 *
 */
export type s10_trauma_info = Prisma.s10_trauma_infoModel;
/**
 * Model s10_trauma_zone_type
 *
 */
export type s10_trauma_zone_type = Prisma.s10_trauma_zone_typeModel;
/**
 * Model s10_trauma_lesion_type
 *
 */
export type s10_trauma_lesion_type = Prisma.s10_trauma_lesion_typeModel;
/**
 * Model s10_trauma_constat
 *
 */
export type s10_trauma_constat = Prisma.s10_trauma_constatModel;
/**
 * Model s11_support_clinique_info
 *
 */
export type s11_support_clinique_info = Prisma.s11_support_clinique_infoModel;
/**
 * Model s12_signe_vital
 *
 */
export type s12_signe_vital = Prisma.s12_signe_vitalModel;
/**
 * Model s13_info
 *
 */
export type s13_info = Prisma.s13_infoModel;
/**
 * Model s13_arret_cardiaque
 *
 */
export type s13_arret_cardiaque = Prisma.s13_arret_cardiaqueModel;
/**
 * Model s13_voies_aeriennes
 *
 */
export type s13_voies_aeriennes = Prisma.s13_voies_aeriennesModel;
/**
 * Model s13_hemorragies
 *
 */
export type s13_hemorragies = Prisma.s13_hemorragiesModel;
/**
 * Model s13_immobilisations
 *
 */
export type s13_immobilisations = Prisma.s13_immobilisationsModel;
/**
 * Model s13_accouchement
 *
 */
export type s13_accouchement = Prisma.s13_accouchementModel;
/**
 * Model s13_medicaments
 *
 */
export type s13_medicaments = Prisma.s13_medicamentsModel;
/**
 * Model s14_entreprise_ambulanciere
 *
 */
export type s14_entreprise_ambulanciere = Prisma.s14_entreprise_ambulanciereModel;
/**
 * Model s15_autres_renseignements
 *
 */
export type s15_autres_renseignements = Prisma.s15_autres_renseignementsModel;
//# sourceMappingURL=client.d.ts.map