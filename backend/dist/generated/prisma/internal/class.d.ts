import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.patient`: Exposes CRUD operations for the **patient** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Patients
  * const patients = await prisma.patient.findMany()
  * ```
  */
    get patient(): Prisma.patientDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.intervenant_pr`: Exposes CRUD operations for the **intervenant_pr** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Intervenant_prs
      * const intervenant_prs = await prisma.intervenant_pr.findMany()
      * ```
      */
    get intervenant_pr(): Prisma.intervenant_prDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.r_rapport_pr`: Exposes CRUD operations for the **r_rapport_pr** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more R_rapport_prs
      * const r_rapport_prs = await prisma.r_rapport_pr.findMany()
      * ```
      */
    get r_rapport_pr(): Prisma.r_rapport_prDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.r_rapport_pr_intervenant`: Exposes CRUD operations for the **r_rapport_pr_intervenant** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more R_rapport_pr_intervenants
      * const r_rapport_pr_intervenants = await prisma.r_rapport_pr_intervenant.findMany()
      * ```
      */
    get r_rapport_pr_intervenant(): Prisma.r_rapport_pr_intervenantDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s01_prise_en_charge`: Exposes CRUD operations for the **s01_prise_en_charge** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S01_prise_en_charges
      * const s01_prise_en_charges = await prisma.s01_prise_en_charge.findMany()
      * ```
      */
    get s01_prise_en_charge(): Prisma.s01_prise_en_chargeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s02_service_pr`: Exposes CRUD operations for the **s02_service_pr** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S02_service_prs
      * const s02_service_prs = await prisma.s02_service_pr.findMany()
      * ```
      */
    get s02_service_pr(): Prisma.s02_service_prDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s03_arrivee_usager`: Exposes CRUD operations for the **s03_arrivee_usager** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S03_arrivee_usagers
      * const s03_arrivee_usagers = await prisma.s03_arrivee_usager.findMany()
      * ```
      */
    get s03_arrivee_usager(): Prisma.s03_arrivee_usagerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s04_approche_initiale`: Exposes CRUD operations for the **s04_approche_initiale** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S04_approche_initiales
      * const s04_approche_initiales = await prisma.s04_approche_initiale.findMany()
      * ```
      */
    get s04_approche_initiale(): Prisma.s04_approche_initialeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s05_nature_cas_type`: Exposes CRUD operations for the **s05_nature_cas_type** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S05_nature_cas_types
      * const s05_nature_cas_types = await prisma.s05_nature_cas_type.findMany()
      * ```
      */
    get s05_nature_cas_type(): Prisma.s05_nature_cas_typeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s05_rapport_nature_cas`: Exposes CRUD operations for the **s05_rapport_nature_cas** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S05_rapport_nature_cas
      * const s05_rapport_nature_cas = await prisma.s05_rapport_nature_cas.findMany()
      * ```
      */
    get s05_rapport_nature_cas(): Prisma.s05_rapport_nature_casDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s05_nature_cas_info`: Exposes CRUD operations for the **s05_nature_cas_info** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S05_nature_cas_infos
      * const s05_nature_cas_infos = await prisma.s05_nature_cas_info.findMany()
      * ```
      */
    get s05_nature_cas_info(): Prisma.s05_nature_cas_infoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s06_antecedent_type`: Exposes CRUD operations for the **s06_antecedent_type** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S06_antecedent_types
      * const s06_antecedent_types = await prisma.s06_antecedent_type.findMany()
      * ```
      */
    get s06_antecedent_type(): Prisma.s06_antecedent_typeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s06_rapport_antecedent`: Exposes CRUD operations for the **s06_rapport_antecedent** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S06_rapport_antecedents
      * const s06_rapport_antecedents = await prisma.s06_rapport_antecedent.findMany()
      * ```
      */
    get s06_rapport_antecedent(): Prisma.s06_rapport_antecedentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s07_maladie_infectieuse_type`: Exposes CRUD operations for the **s07_maladie_infectieuse_type** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S07_maladie_infectieuse_types
      * const s07_maladie_infectieuse_types = await prisma.s07_maladie_infectieuse_type.findMany()
      * ```
      */
    get s07_maladie_infectieuse_type(): Prisma.s07_maladie_infectieuse_typeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s07_maladies_infectieuses_info`: Exposes CRUD operations for the **s07_maladies_infectieuses_info** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S07_maladies_infectieuses_infos
      * const s07_maladies_infectieuses_infos = await prisma.s07_maladies_infectieuses_info.findMany()
      * ```
      */
    get s07_maladies_infectieuses_info(): Prisma.s07_maladies_infectieuses_infoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s07_rapport_maladie_infectieuse`: Exposes CRUD operations for the **s07_rapport_maladie_infectieuse** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S07_rapport_maladie_infectieuses
      * const s07_rapport_maladie_infectieuses = await prisma.s07_rapport_maladie_infectieuse.findMany()
      * ```
      */
    get s07_rapport_maladie_infectieuse(): Prisma.s07_rapport_maladie_infectieuseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s08_allergie_type`: Exposes CRUD operations for the **s08_allergie_type** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S08_allergie_types
      * const s08_allergie_types = await prisma.s08_allergie_type.findMany()
      * ```
      */
    get s08_allergie_type(): Prisma.s08_allergie_typeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s08_allergies_info`: Exposes CRUD operations for the **s08_allergies_info** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S08_allergies_infos
      * const s08_allergies_infos = await prisma.s08_allergies_info.findMany()
      * ```
      */
    get s08_allergies_info(): Prisma.s08_allergies_infoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s08_rapport_allergie`: Exposes CRUD operations for the **s08_rapport_allergie** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S08_rapport_allergies
      * const s08_rapport_allergies = await prisma.s08_rapport_allergie.findMany()
      * ```
      */
    get s08_rapport_allergie(): Prisma.s08_rapport_allergieDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s09_mecanisme_trauma_type`: Exposes CRUD operations for the **s09_mecanisme_trauma_type** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S09_mecanisme_trauma_types
      * const s09_mecanisme_trauma_types = await prisma.s09_mecanisme_trauma_type.findMany()
      * ```
      */
    get s09_mecanisme_trauma_type(): Prisma.s09_mecanisme_trauma_typeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s09_rapport_mecanisme_trauma`: Exposes CRUD operations for the **s09_rapport_mecanisme_trauma** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S09_rapport_mecanisme_traumas
      * const s09_rapport_mecanisme_traumas = await prisma.s09_rapport_mecanisme_trauma.findMany()
      * ```
      */
    get s09_rapport_mecanisme_trauma(): Prisma.s09_rapport_mecanisme_traumaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s09_mecanisme_trauma_info`: Exposes CRUD operations for the **s09_mecanisme_trauma_info** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S09_mecanisme_trauma_infos
      * const s09_mecanisme_trauma_infos = await prisma.s09_mecanisme_trauma_info.findMany()
      * ```
      */
    get s09_mecanisme_trauma_info(): Prisma.s09_mecanisme_trauma_infoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s10_trauma_info`: Exposes CRUD operations for the **s10_trauma_info** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S10_trauma_infos
      * const s10_trauma_infos = await prisma.s10_trauma_info.findMany()
      * ```
      */
    get s10_trauma_info(): Prisma.s10_trauma_infoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s10_trauma_zone_type`: Exposes CRUD operations for the **s10_trauma_zone_type** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S10_trauma_zone_types
      * const s10_trauma_zone_types = await prisma.s10_trauma_zone_type.findMany()
      * ```
      */
    get s10_trauma_zone_type(): Prisma.s10_trauma_zone_typeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s10_trauma_lesion_type`: Exposes CRUD operations for the **s10_trauma_lesion_type** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S10_trauma_lesion_types
      * const s10_trauma_lesion_types = await prisma.s10_trauma_lesion_type.findMany()
      * ```
      */
    get s10_trauma_lesion_type(): Prisma.s10_trauma_lesion_typeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s10_trauma_constat`: Exposes CRUD operations for the **s10_trauma_constat** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S10_trauma_constats
      * const s10_trauma_constats = await prisma.s10_trauma_constat.findMany()
      * ```
      */
    get s10_trauma_constat(): Prisma.s10_trauma_constatDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s11_support_clinique_info`: Exposes CRUD operations for the **s11_support_clinique_info** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S11_support_clinique_infos
      * const s11_support_clinique_infos = await prisma.s11_support_clinique_info.findMany()
      * ```
      */
    get s11_support_clinique_info(): Prisma.s11_support_clinique_infoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s12_signe_vital`: Exposes CRUD operations for the **s12_signe_vital** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S12_signe_vitals
      * const s12_signe_vitals = await prisma.s12_signe_vital.findMany()
      * ```
      */
    get s12_signe_vital(): Prisma.s12_signe_vitalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s13_info`: Exposes CRUD operations for the **s13_info** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S13_infos
      * const s13_infos = await prisma.s13_info.findMany()
      * ```
      */
    get s13_info(): Prisma.s13_infoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s13_arret_cardiaque`: Exposes CRUD operations for the **s13_arret_cardiaque** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S13_arret_cardiaques
      * const s13_arret_cardiaques = await prisma.s13_arret_cardiaque.findMany()
      * ```
      */
    get s13_arret_cardiaque(): Prisma.s13_arret_cardiaqueDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s13_voies_aeriennes`: Exposes CRUD operations for the **s13_voies_aeriennes** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S13_voies_aeriennes
      * const s13_voies_aeriennes = await prisma.s13_voies_aeriennes.findMany()
      * ```
      */
    get s13_voies_aeriennes(): Prisma.s13_voies_aeriennesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s13_hemorragies`: Exposes CRUD operations for the **s13_hemorragies** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S13_hemorragies
      * const s13_hemorragies = await prisma.s13_hemorragies.findMany()
      * ```
      */
    get s13_hemorragies(): Prisma.s13_hemorragiesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s13_immobilisations`: Exposes CRUD operations for the **s13_immobilisations** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S13_immobilisations
      * const s13_immobilisations = await prisma.s13_immobilisations.findMany()
      * ```
      */
    get s13_immobilisations(): Prisma.s13_immobilisationsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s13_accouchement`: Exposes CRUD operations for the **s13_accouchement** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S13_accouchements
      * const s13_accouchements = await prisma.s13_accouchement.findMany()
      * ```
      */
    get s13_accouchement(): Prisma.s13_accouchementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s13_medicaments`: Exposes CRUD operations for the **s13_medicaments** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S13_medicaments
      * const s13_medicaments = await prisma.s13_medicaments.findMany()
      * ```
      */
    get s13_medicaments(): Prisma.s13_medicamentsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s14_entreprise_ambulanciere`: Exposes CRUD operations for the **s14_entreprise_ambulanciere** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S14_entreprise_ambulancieres
      * const s14_entreprise_ambulancieres = await prisma.s14_entreprise_ambulanciere.findMany()
      * ```
      */
    get s14_entreprise_ambulanciere(): Prisma.s14_entreprise_ambulanciereDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.s15_autres_renseignements`: Exposes CRUD operations for the **s15_autres_renseignements** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more S15_autres_renseignements
      * const s15_autres_renseignements = await prisma.s15_autres_renseignements.findMany()
      * ```
      */
    get s15_autres_renseignements(): Prisma.s15_autres_renseignementsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map