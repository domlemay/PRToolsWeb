import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.1.0
 * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "patient" | "intervenant_pr" | "r_rapport_pr" | "r_rapport_pr_intervenant" | "s01_prise_en_charge" | "s02_service_pr" | "s03_arrivee_usager" | "s04_approche_initiale" | "s05_nature_cas_type" | "s05_rapport_nature_cas" | "s05_nature_cas_info" | "s06_antecedent_type" | "s06_rapport_antecedent" | "s07_maladie_infectieuse_type" | "s07_maladies_infectieuses_info" | "s07_rapport_maladie_infectieuse" | "s08_allergie_type" | "s08_allergies_info" | "s08_rapport_allergie" | "s09_mecanisme_trauma_type" | "s09_rapport_mecanisme_trauma" | "s09_mecanisme_trauma_info" | "s10_trauma_info" | "s10_trauma_zone_type" | "s10_trauma_lesion_type" | "s10_trauma_constat" | "s11_support_clinique_info" | "s12_signe_vital" | "s13_info" | "s13_arret_cardiaque" | "s13_voies_aeriennes" | "s13_hemorragies" | "s13_immobilisations" | "s13_accouchement" | "s13_medicaments" | "s14_entreprise_ambulanciere" | "s15_autres_renseignements";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        patient: {
            payload: Prisma.$patientPayload<ExtArgs>;
            fields: Prisma.patientFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.patientFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.patientFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientPayload>;
                };
                findFirst: {
                    args: Prisma.patientFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.patientFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientPayload>;
                };
                findMany: {
                    args: Prisma.patientFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientPayload>[];
                };
                create: {
                    args: Prisma.patientCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientPayload>;
                };
                createMany: {
                    args: Prisma.patientCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.patientCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientPayload>[];
                };
                delete: {
                    args: Prisma.patientDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientPayload>;
                };
                update: {
                    args: Prisma.patientUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientPayload>;
                };
                deleteMany: {
                    args: Prisma.patientDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.patientUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.patientUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientPayload>[];
                };
                upsert: {
                    args: Prisma.patientUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$patientPayload>;
                };
                aggregate: {
                    args: Prisma.PatientAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePatient>;
                };
                groupBy: {
                    args: Prisma.patientGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientGroupByOutputType>[];
                };
                count: {
                    args: Prisma.patientCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PatientCountAggregateOutputType> | number;
                };
            };
        };
        intervenant_pr: {
            payload: Prisma.$intervenant_prPayload<ExtArgs>;
            fields: Prisma.intervenant_prFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.intervenant_prFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intervenant_prPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.intervenant_prFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intervenant_prPayload>;
                };
                findFirst: {
                    args: Prisma.intervenant_prFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intervenant_prPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.intervenant_prFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intervenant_prPayload>;
                };
                findMany: {
                    args: Prisma.intervenant_prFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intervenant_prPayload>[];
                };
                create: {
                    args: Prisma.intervenant_prCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intervenant_prPayload>;
                };
                createMany: {
                    args: Prisma.intervenant_prCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.intervenant_prCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intervenant_prPayload>[];
                };
                delete: {
                    args: Prisma.intervenant_prDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intervenant_prPayload>;
                };
                update: {
                    args: Prisma.intervenant_prUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intervenant_prPayload>;
                };
                deleteMany: {
                    args: Prisma.intervenant_prDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.intervenant_prUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.intervenant_prUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intervenant_prPayload>[];
                };
                upsert: {
                    args: Prisma.intervenant_prUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intervenant_prPayload>;
                };
                aggregate: {
                    args: Prisma.Intervenant_prAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIntervenant_pr>;
                };
                groupBy: {
                    args: Prisma.intervenant_prGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Intervenant_prGroupByOutputType>[];
                };
                count: {
                    args: Prisma.intervenant_prCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Intervenant_prCountAggregateOutputType> | number;
                };
            };
        };
        r_rapport_pr: {
            payload: Prisma.$r_rapport_prPayload<ExtArgs>;
            fields: Prisma.r_rapport_prFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.r_rapport_prFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_prPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.r_rapport_prFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_prPayload>;
                };
                findFirst: {
                    args: Prisma.r_rapport_prFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_prPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.r_rapport_prFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_prPayload>;
                };
                findMany: {
                    args: Prisma.r_rapport_prFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_prPayload>[];
                };
                create: {
                    args: Prisma.r_rapport_prCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_prPayload>;
                };
                createMany: {
                    args: Prisma.r_rapport_prCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.r_rapport_prCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_prPayload>[];
                };
                delete: {
                    args: Prisma.r_rapport_prDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_prPayload>;
                };
                update: {
                    args: Prisma.r_rapport_prUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_prPayload>;
                };
                deleteMany: {
                    args: Prisma.r_rapport_prDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.r_rapport_prUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.r_rapport_prUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_prPayload>[];
                };
                upsert: {
                    args: Prisma.r_rapport_prUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_prPayload>;
                };
                aggregate: {
                    args: Prisma.R_rapport_prAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateR_rapport_pr>;
                };
                groupBy: {
                    args: Prisma.r_rapport_prGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.R_rapport_prGroupByOutputType>[];
                };
                count: {
                    args: Prisma.r_rapport_prCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.R_rapport_prCountAggregateOutputType> | number;
                };
            };
        };
        r_rapport_pr_intervenant: {
            payload: Prisma.$r_rapport_pr_intervenantPayload<ExtArgs>;
            fields: Prisma.r_rapport_pr_intervenantFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.r_rapport_pr_intervenantFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_pr_intervenantPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.r_rapport_pr_intervenantFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_pr_intervenantPayload>;
                };
                findFirst: {
                    args: Prisma.r_rapport_pr_intervenantFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_pr_intervenantPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.r_rapport_pr_intervenantFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_pr_intervenantPayload>;
                };
                findMany: {
                    args: Prisma.r_rapport_pr_intervenantFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_pr_intervenantPayload>[];
                };
                create: {
                    args: Prisma.r_rapport_pr_intervenantCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_pr_intervenantPayload>;
                };
                createMany: {
                    args: Prisma.r_rapport_pr_intervenantCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.r_rapport_pr_intervenantCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_pr_intervenantPayload>[];
                };
                delete: {
                    args: Prisma.r_rapport_pr_intervenantDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_pr_intervenantPayload>;
                };
                update: {
                    args: Prisma.r_rapport_pr_intervenantUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_pr_intervenantPayload>;
                };
                deleteMany: {
                    args: Prisma.r_rapport_pr_intervenantDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.r_rapport_pr_intervenantUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.r_rapport_pr_intervenantUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_pr_intervenantPayload>[];
                };
                upsert: {
                    args: Prisma.r_rapport_pr_intervenantUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$r_rapport_pr_intervenantPayload>;
                };
                aggregate: {
                    args: Prisma.R_rapport_pr_intervenantAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateR_rapport_pr_intervenant>;
                };
                groupBy: {
                    args: Prisma.r_rapport_pr_intervenantGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.R_rapport_pr_intervenantGroupByOutputType>[];
                };
                count: {
                    args: Prisma.r_rapport_pr_intervenantCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.R_rapport_pr_intervenantCountAggregateOutputType> | number;
                };
            };
        };
        s01_prise_en_charge: {
            payload: Prisma.$s01_prise_en_chargePayload<ExtArgs>;
            fields: Prisma.s01_prise_en_chargeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s01_prise_en_chargeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s01_prise_en_chargePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s01_prise_en_chargeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s01_prise_en_chargePayload>;
                };
                findFirst: {
                    args: Prisma.s01_prise_en_chargeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s01_prise_en_chargePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s01_prise_en_chargeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s01_prise_en_chargePayload>;
                };
                findMany: {
                    args: Prisma.s01_prise_en_chargeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s01_prise_en_chargePayload>[];
                };
                create: {
                    args: Prisma.s01_prise_en_chargeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s01_prise_en_chargePayload>;
                };
                createMany: {
                    args: Prisma.s01_prise_en_chargeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s01_prise_en_chargeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s01_prise_en_chargePayload>[];
                };
                delete: {
                    args: Prisma.s01_prise_en_chargeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s01_prise_en_chargePayload>;
                };
                update: {
                    args: Prisma.s01_prise_en_chargeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s01_prise_en_chargePayload>;
                };
                deleteMany: {
                    args: Prisma.s01_prise_en_chargeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s01_prise_en_chargeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s01_prise_en_chargeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s01_prise_en_chargePayload>[];
                };
                upsert: {
                    args: Prisma.s01_prise_en_chargeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s01_prise_en_chargePayload>;
                };
                aggregate: {
                    args: Prisma.S01_prise_en_chargeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS01_prise_en_charge>;
                };
                groupBy: {
                    args: Prisma.s01_prise_en_chargeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S01_prise_en_chargeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s01_prise_en_chargeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S01_prise_en_chargeCountAggregateOutputType> | number;
                };
            };
        };
        s02_service_pr: {
            payload: Prisma.$s02_service_prPayload<ExtArgs>;
            fields: Prisma.s02_service_prFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s02_service_prFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s02_service_prPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s02_service_prFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s02_service_prPayload>;
                };
                findFirst: {
                    args: Prisma.s02_service_prFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s02_service_prPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s02_service_prFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s02_service_prPayload>;
                };
                findMany: {
                    args: Prisma.s02_service_prFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s02_service_prPayload>[];
                };
                create: {
                    args: Prisma.s02_service_prCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s02_service_prPayload>;
                };
                createMany: {
                    args: Prisma.s02_service_prCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s02_service_prCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s02_service_prPayload>[];
                };
                delete: {
                    args: Prisma.s02_service_prDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s02_service_prPayload>;
                };
                update: {
                    args: Prisma.s02_service_prUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s02_service_prPayload>;
                };
                deleteMany: {
                    args: Prisma.s02_service_prDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s02_service_prUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s02_service_prUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s02_service_prPayload>[];
                };
                upsert: {
                    args: Prisma.s02_service_prUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s02_service_prPayload>;
                };
                aggregate: {
                    args: Prisma.S02_service_prAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS02_service_pr>;
                };
                groupBy: {
                    args: Prisma.s02_service_prGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S02_service_prGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s02_service_prCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S02_service_prCountAggregateOutputType> | number;
                };
            };
        };
        s03_arrivee_usager: {
            payload: Prisma.$s03_arrivee_usagerPayload<ExtArgs>;
            fields: Prisma.s03_arrivee_usagerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s03_arrivee_usagerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s03_arrivee_usagerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s03_arrivee_usagerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s03_arrivee_usagerPayload>;
                };
                findFirst: {
                    args: Prisma.s03_arrivee_usagerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s03_arrivee_usagerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s03_arrivee_usagerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s03_arrivee_usagerPayload>;
                };
                findMany: {
                    args: Prisma.s03_arrivee_usagerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s03_arrivee_usagerPayload>[];
                };
                create: {
                    args: Prisma.s03_arrivee_usagerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s03_arrivee_usagerPayload>;
                };
                createMany: {
                    args: Prisma.s03_arrivee_usagerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s03_arrivee_usagerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s03_arrivee_usagerPayload>[];
                };
                delete: {
                    args: Prisma.s03_arrivee_usagerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s03_arrivee_usagerPayload>;
                };
                update: {
                    args: Prisma.s03_arrivee_usagerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s03_arrivee_usagerPayload>;
                };
                deleteMany: {
                    args: Prisma.s03_arrivee_usagerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s03_arrivee_usagerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s03_arrivee_usagerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s03_arrivee_usagerPayload>[];
                };
                upsert: {
                    args: Prisma.s03_arrivee_usagerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s03_arrivee_usagerPayload>;
                };
                aggregate: {
                    args: Prisma.S03_arrivee_usagerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS03_arrivee_usager>;
                };
                groupBy: {
                    args: Prisma.s03_arrivee_usagerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S03_arrivee_usagerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s03_arrivee_usagerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S03_arrivee_usagerCountAggregateOutputType> | number;
                };
            };
        };
        s04_approche_initiale: {
            payload: Prisma.$s04_approche_initialePayload<ExtArgs>;
            fields: Prisma.s04_approche_initialeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s04_approche_initialeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s04_approche_initialePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s04_approche_initialeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s04_approche_initialePayload>;
                };
                findFirst: {
                    args: Prisma.s04_approche_initialeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s04_approche_initialePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s04_approche_initialeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s04_approche_initialePayload>;
                };
                findMany: {
                    args: Prisma.s04_approche_initialeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s04_approche_initialePayload>[];
                };
                create: {
                    args: Prisma.s04_approche_initialeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s04_approche_initialePayload>;
                };
                createMany: {
                    args: Prisma.s04_approche_initialeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s04_approche_initialeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s04_approche_initialePayload>[];
                };
                delete: {
                    args: Prisma.s04_approche_initialeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s04_approche_initialePayload>;
                };
                update: {
                    args: Prisma.s04_approche_initialeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s04_approche_initialePayload>;
                };
                deleteMany: {
                    args: Prisma.s04_approche_initialeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s04_approche_initialeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s04_approche_initialeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s04_approche_initialePayload>[];
                };
                upsert: {
                    args: Prisma.s04_approche_initialeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s04_approche_initialePayload>;
                };
                aggregate: {
                    args: Prisma.S04_approche_initialeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS04_approche_initiale>;
                };
                groupBy: {
                    args: Prisma.s04_approche_initialeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S04_approche_initialeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s04_approche_initialeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S04_approche_initialeCountAggregateOutputType> | number;
                };
            };
        };
        s05_nature_cas_type: {
            payload: Prisma.$s05_nature_cas_typePayload<ExtArgs>;
            fields: Prisma.s05_nature_cas_typeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s05_nature_cas_typeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_typePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s05_nature_cas_typeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_typePayload>;
                };
                findFirst: {
                    args: Prisma.s05_nature_cas_typeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_typePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s05_nature_cas_typeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_typePayload>;
                };
                findMany: {
                    args: Prisma.s05_nature_cas_typeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_typePayload>[];
                };
                create: {
                    args: Prisma.s05_nature_cas_typeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_typePayload>;
                };
                createMany: {
                    args: Prisma.s05_nature_cas_typeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s05_nature_cas_typeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_typePayload>[];
                };
                delete: {
                    args: Prisma.s05_nature_cas_typeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_typePayload>;
                };
                update: {
                    args: Prisma.s05_nature_cas_typeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_typePayload>;
                };
                deleteMany: {
                    args: Prisma.s05_nature_cas_typeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s05_nature_cas_typeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s05_nature_cas_typeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_typePayload>[];
                };
                upsert: {
                    args: Prisma.s05_nature_cas_typeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_typePayload>;
                };
                aggregate: {
                    args: Prisma.S05_nature_cas_typeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS05_nature_cas_type>;
                };
                groupBy: {
                    args: Prisma.s05_nature_cas_typeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S05_nature_cas_typeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s05_nature_cas_typeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S05_nature_cas_typeCountAggregateOutputType> | number;
                };
            };
        };
        s05_rapport_nature_cas: {
            payload: Prisma.$s05_rapport_nature_casPayload<ExtArgs>;
            fields: Prisma.s05_rapport_nature_casFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s05_rapport_nature_casFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_rapport_nature_casPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s05_rapport_nature_casFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_rapport_nature_casPayload>;
                };
                findFirst: {
                    args: Prisma.s05_rapport_nature_casFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_rapport_nature_casPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s05_rapport_nature_casFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_rapport_nature_casPayload>;
                };
                findMany: {
                    args: Prisma.s05_rapport_nature_casFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_rapport_nature_casPayload>[];
                };
                create: {
                    args: Prisma.s05_rapport_nature_casCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_rapport_nature_casPayload>;
                };
                createMany: {
                    args: Prisma.s05_rapport_nature_casCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s05_rapport_nature_casCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_rapport_nature_casPayload>[];
                };
                delete: {
                    args: Prisma.s05_rapport_nature_casDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_rapport_nature_casPayload>;
                };
                update: {
                    args: Prisma.s05_rapport_nature_casUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_rapport_nature_casPayload>;
                };
                deleteMany: {
                    args: Prisma.s05_rapport_nature_casDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s05_rapport_nature_casUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s05_rapport_nature_casUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_rapport_nature_casPayload>[];
                };
                upsert: {
                    args: Prisma.s05_rapport_nature_casUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_rapport_nature_casPayload>;
                };
                aggregate: {
                    args: Prisma.S05_rapport_nature_casAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS05_rapport_nature_cas>;
                };
                groupBy: {
                    args: Prisma.s05_rapport_nature_casGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S05_rapport_nature_casGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s05_rapport_nature_casCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S05_rapport_nature_casCountAggregateOutputType> | number;
                };
            };
        };
        s05_nature_cas_info: {
            payload: Prisma.$s05_nature_cas_infoPayload<ExtArgs>;
            fields: Prisma.s05_nature_cas_infoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s05_nature_cas_infoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_infoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s05_nature_cas_infoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_infoPayload>;
                };
                findFirst: {
                    args: Prisma.s05_nature_cas_infoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_infoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s05_nature_cas_infoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_infoPayload>;
                };
                findMany: {
                    args: Prisma.s05_nature_cas_infoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_infoPayload>[];
                };
                create: {
                    args: Prisma.s05_nature_cas_infoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_infoPayload>;
                };
                createMany: {
                    args: Prisma.s05_nature_cas_infoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s05_nature_cas_infoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_infoPayload>[];
                };
                delete: {
                    args: Prisma.s05_nature_cas_infoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_infoPayload>;
                };
                update: {
                    args: Prisma.s05_nature_cas_infoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_infoPayload>;
                };
                deleteMany: {
                    args: Prisma.s05_nature_cas_infoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s05_nature_cas_infoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s05_nature_cas_infoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_infoPayload>[];
                };
                upsert: {
                    args: Prisma.s05_nature_cas_infoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s05_nature_cas_infoPayload>;
                };
                aggregate: {
                    args: Prisma.S05_nature_cas_infoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS05_nature_cas_info>;
                };
                groupBy: {
                    args: Prisma.s05_nature_cas_infoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S05_nature_cas_infoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s05_nature_cas_infoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S05_nature_cas_infoCountAggregateOutputType> | number;
                };
            };
        };
        s06_antecedent_type: {
            payload: Prisma.$s06_antecedent_typePayload<ExtArgs>;
            fields: Prisma.s06_antecedent_typeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s06_antecedent_typeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_antecedent_typePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s06_antecedent_typeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_antecedent_typePayload>;
                };
                findFirst: {
                    args: Prisma.s06_antecedent_typeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_antecedent_typePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s06_antecedent_typeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_antecedent_typePayload>;
                };
                findMany: {
                    args: Prisma.s06_antecedent_typeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_antecedent_typePayload>[];
                };
                create: {
                    args: Prisma.s06_antecedent_typeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_antecedent_typePayload>;
                };
                createMany: {
                    args: Prisma.s06_antecedent_typeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s06_antecedent_typeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_antecedent_typePayload>[];
                };
                delete: {
                    args: Prisma.s06_antecedent_typeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_antecedent_typePayload>;
                };
                update: {
                    args: Prisma.s06_antecedent_typeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_antecedent_typePayload>;
                };
                deleteMany: {
                    args: Prisma.s06_antecedent_typeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s06_antecedent_typeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s06_antecedent_typeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_antecedent_typePayload>[];
                };
                upsert: {
                    args: Prisma.s06_antecedent_typeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_antecedent_typePayload>;
                };
                aggregate: {
                    args: Prisma.S06_antecedent_typeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS06_antecedent_type>;
                };
                groupBy: {
                    args: Prisma.s06_antecedent_typeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S06_antecedent_typeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s06_antecedent_typeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S06_antecedent_typeCountAggregateOutputType> | number;
                };
            };
        };
        s06_rapport_antecedent: {
            payload: Prisma.$s06_rapport_antecedentPayload<ExtArgs>;
            fields: Prisma.s06_rapport_antecedentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s06_rapport_antecedentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_rapport_antecedentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s06_rapport_antecedentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_rapport_antecedentPayload>;
                };
                findFirst: {
                    args: Prisma.s06_rapport_antecedentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_rapport_antecedentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s06_rapport_antecedentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_rapport_antecedentPayload>;
                };
                findMany: {
                    args: Prisma.s06_rapport_antecedentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_rapport_antecedentPayload>[];
                };
                create: {
                    args: Prisma.s06_rapport_antecedentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_rapport_antecedentPayload>;
                };
                createMany: {
                    args: Prisma.s06_rapport_antecedentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s06_rapport_antecedentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_rapport_antecedentPayload>[];
                };
                delete: {
                    args: Prisma.s06_rapport_antecedentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_rapport_antecedentPayload>;
                };
                update: {
                    args: Prisma.s06_rapport_antecedentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_rapport_antecedentPayload>;
                };
                deleteMany: {
                    args: Prisma.s06_rapport_antecedentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s06_rapport_antecedentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s06_rapport_antecedentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_rapport_antecedentPayload>[];
                };
                upsert: {
                    args: Prisma.s06_rapport_antecedentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s06_rapport_antecedentPayload>;
                };
                aggregate: {
                    args: Prisma.S06_rapport_antecedentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS06_rapport_antecedent>;
                };
                groupBy: {
                    args: Prisma.s06_rapport_antecedentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S06_rapport_antecedentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s06_rapport_antecedentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S06_rapport_antecedentCountAggregateOutputType> | number;
                };
            };
        };
        s07_maladie_infectieuse_type: {
            payload: Prisma.$s07_maladie_infectieuse_typePayload<ExtArgs>;
            fields: Prisma.s07_maladie_infectieuse_typeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s07_maladie_infectieuse_typeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladie_infectieuse_typePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s07_maladie_infectieuse_typeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladie_infectieuse_typePayload>;
                };
                findFirst: {
                    args: Prisma.s07_maladie_infectieuse_typeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladie_infectieuse_typePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s07_maladie_infectieuse_typeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladie_infectieuse_typePayload>;
                };
                findMany: {
                    args: Prisma.s07_maladie_infectieuse_typeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladie_infectieuse_typePayload>[];
                };
                create: {
                    args: Prisma.s07_maladie_infectieuse_typeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladie_infectieuse_typePayload>;
                };
                createMany: {
                    args: Prisma.s07_maladie_infectieuse_typeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s07_maladie_infectieuse_typeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladie_infectieuse_typePayload>[];
                };
                delete: {
                    args: Prisma.s07_maladie_infectieuse_typeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladie_infectieuse_typePayload>;
                };
                update: {
                    args: Prisma.s07_maladie_infectieuse_typeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladie_infectieuse_typePayload>;
                };
                deleteMany: {
                    args: Prisma.s07_maladie_infectieuse_typeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s07_maladie_infectieuse_typeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s07_maladie_infectieuse_typeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladie_infectieuse_typePayload>[];
                };
                upsert: {
                    args: Prisma.s07_maladie_infectieuse_typeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladie_infectieuse_typePayload>;
                };
                aggregate: {
                    args: Prisma.S07_maladie_infectieuse_typeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS07_maladie_infectieuse_type>;
                };
                groupBy: {
                    args: Prisma.s07_maladie_infectieuse_typeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S07_maladie_infectieuse_typeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s07_maladie_infectieuse_typeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S07_maladie_infectieuse_typeCountAggregateOutputType> | number;
                };
            };
        };
        s07_maladies_infectieuses_info: {
            payload: Prisma.$s07_maladies_infectieuses_infoPayload<ExtArgs>;
            fields: Prisma.s07_maladies_infectieuses_infoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s07_maladies_infectieuses_infoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladies_infectieuses_infoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s07_maladies_infectieuses_infoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladies_infectieuses_infoPayload>;
                };
                findFirst: {
                    args: Prisma.s07_maladies_infectieuses_infoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladies_infectieuses_infoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s07_maladies_infectieuses_infoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladies_infectieuses_infoPayload>;
                };
                findMany: {
                    args: Prisma.s07_maladies_infectieuses_infoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladies_infectieuses_infoPayload>[];
                };
                create: {
                    args: Prisma.s07_maladies_infectieuses_infoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladies_infectieuses_infoPayload>;
                };
                createMany: {
                    args: Prisma.s07_maladies_infectieuses_infoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s07_maladies_infectieuses_infoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladies_infectieuses_infoPayload>[];
                };
                delete: {
                    args: Prisma.s07_maladies_infectieuses_infoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladies_infectieuses_infoPayload>;
                };
                update: {
                    args: Prisma.s07_maladies_infectieuses_infoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladies_infectieuses_infoPayload>;
                };
                deleteMany: {
                    args: Prisma.s07_maladies_infectieuses_infoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s07_maladies_infectieuses_infoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s07_maladies_infectieuses_infoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladies_infectieuses_infoPayload>[];
                };
                upsert: {
                    args: Prisma.s07_maladies_infectieuses_infoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_maladies_infectieuses_infoPayload>;
                };
                aggregate: {
                    args: Prisma.S07_maladies_infectieuses_infoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS07_maladies_infectieuses_info>;
                };
                groupBy: {
                    args: Prisma.s07_maladies_infectieuses_infoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S07_maladies_infectieuses_infoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s07_maladies_infectieuses_infoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S07_maladies_infectieuses_infoCountAggregateOutputType> | number;
                };
            };
        };
        s07_rapport_maladie_infectieuse: {
            payload: Prisma.$s07_rapport_maladie_infectieusePayload<ExtArgs>;
            fields: Prisma.s07_rapport_maladie_infectieuseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s07_rapport_maladie_infectieuseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_rapport_maladie_infectieusePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s07_rapport_maladie_infectieuseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_rapport_maladie_infectieusePayload>;
                };
                findFirst: {
                    args: Prisma.s07_rapport_maladie_infectieuseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_rapport_maladie_infectieusePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s07_rapport_maladie_infectieuseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_rapport_maladie_infectieusePayload>;
                };
                findMany: {
                    args: Prisma.s07_rapport_maladie_infectieuseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_rapport_maladie_infectieusePayload>[];
                };
                create: {
                    args: Prisma.s07_rapport_maladie_infectieuseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_rapport_maladie_infectieusePayload>;
                };
                createMany: {
                    args: Prisma.s07_rapport_maladie_infectieuseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s07_rapport_maladie_infectieuseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_rapport_maladie_infectieusePayload>[];
                };
                delete: {
                    args: Prisma.s07_rapport_maladie_infectieuseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_rapport_maladie_infectieusePayload>;
                };
                update: {
                    args: Prisma.s07_rapport_maladie_infectieuseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_rapport_maladie_infectieusePayload>;
                };
                deleteMany: {
                    args: Prisma.s07_rapport_maladie_infectieuseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s07_rapport_maladie_infectieuseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s07_rapport_maladie_infectieuseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_rapport_maladie_infectieusePayload>[];
                };
                upsert: {
                    args: Prisma.s07_rapport_maladie_infectieuseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s07_rapport_maladie_infectieusePayload>;
                };
                aggregate: {
                    args: Prisma.S07_rapport_maladie_infectieuseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS07_rapport_maladie_infectieuse>;
                };
                groupBy: {
                    args: Prisma.s07_rapport_maladie_infectieuseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S07_rapport_maladie_infectieuseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s07_rapport_maladie_infectieuseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S07_rapport_maladie_infectieuseCountAggregateOutputType> | number;
                };
            };
        };
        s08_allergie_type: {
            payload: Prisma.$s08_allergie_typePayload<ExtArgs>;
            fields: Prisma.s08_allergie_typeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s08_allergie_typeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergie_typePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s08_allergie_typeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergie_typePayload>;
                };
                findFirst: {
                    args: Prisma.s08_allergie_typeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergie_typePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s08_allergie_typeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergie_typePayload>;
                };
                findMany: {
                    args: Prisma.s08_allergie_typeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergie_typePayload>[];
                };
                create: {
                    args: Prisma.s08_allergie_typeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergie_typePayload>;
                };
                createMany: {
                    args: Prisma.s08_allergie_typeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s08_allergie_typeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergie_typePayload>[];
                };
                delete: {
                    args: Prisma.s08_allergie_typeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergie_typePayload>;
                };
                update: {
                    args: Prisma.s08_allergie_typeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergie_typePayload>;
                };
                deleteMany: {
                    args: Prisma.s08_allergie_typeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s08_allergie_typeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s08_allergie_typeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergie_typePayload>[];
                };
                upsert: {
                    args: Prisma.s08_allergie_typeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergie_typePayload>;
                };
                aggregate: {
                    args: Prisma.S08_allergie_typeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS08_allergie_type>;
                };
                groupBy: {
                    args: Prisma.s08_allergie_typeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S08_allergie_typeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s08_allergie_typeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S08_allergie_typeCountAggregateOutputType> | number;
                };
            };
        };
        s08_allergies_info: {
            payload: Prisma.$s08_allergies_infoPayload<ExtArgs>;
            fields: Prisma.s08_allergies_infoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s08_allergies_infoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergies_infoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s08_allergies_infoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergies_infoPayload>;
                };
                findFirst: {
                    args: Prisma.s08_allergies_infoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergies_infoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s08_allergies_infoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergies_infoPayload>;
                };
                findMany: {
                    args: Prisma.s08_allergies_infoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergies_infoPayload>[];
                };
                create: {
                    args: Prisma.s08_allergies_infoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergies_infoPayload>;
                };
                createMany: {
                    args: Prisma.s08_allergies_infoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s08_allergies_infoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergies_infoPayload>[];
                };
                delete: {
                    args: Prisma.s08_allergies_infoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergies_infoPayload>;
                };
                update: {
                    args: Prisma.s08_allergies_infoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergies_infoPayload>;
                };
                deleteMany: {
                    args: Prisma.s08_allergies_infoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s08_allergies_infoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s08_allergies_infoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergies_infoPayload>[];
                };
                upsert: {
                    args: Prisma.s08_allergies_infoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_allergies_infoPayload>;
                };
                aggregate: {
                    args: Prisma.S08_allergies_infoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS08_allergies_info>;
                };
                groupBy: {
                    args: Prisma.s08_allergies_infoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S08_allergies_infoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s08_allergies_infoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S08_allergies_infoCountAggregateOutputType> | number;
                };
            };
        };
        s08_rapport_allergie: {
            payload: Prisma.$s08_rapport_allergiePayload<ExtArgs>;
            fields: Prisma.s08_rapport_allergieFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s08_rapport_allergieFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_rapport_allergiePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s08_rapport_allergieFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_rapport_allergiePayload>;
                };
                findFirst: {
                    args: Prisma.s08_rapport_allergieFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_rapport_allergiePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s08_rapport_allergieFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_rapport_allergiePayload>;
                };
                findMany: {
                    args: Prisma.s08_rapport_allergieFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_rapport_allergiePayload>[];
                };
                create: {
                    args: Prisma.s08_rapport_allergieCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_rapport_allergiePayload>;
                };
                createMany: {
                    args: Prisma.s08_rapport_allergieCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s08_rapport_allergieCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_rapport_allergiePayload>[];
                };
                delete: {
                    args: Prisma.s08_rapport_allergieDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_rapport_allergiePayload>;
                };
                update: {
                    args: Prisma.s08_rapport_allergieUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_rapport_allergiePayload>;
                };
                deleteMany: {
                    args: Prisma.s08_rapport_allergieDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s08_rapport_allergieUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s08_rapport_allergieUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_rapport_allergiePayload>[];
                };
                upsert: {
                    args: Prisma.s08_rapport_allergieUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s08_rapport_allergiePayload>;
                };
                aggregate: {
                    args: Prisma.S08_rapport_allergieAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS08_rapport_allergie>;
                };
                groupBy: {
                    args: Prisma.s08_rapport_allergieGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S08_rapport_allergieGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s08_rapport_allergieCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S08_rapport_allergieCountAggregateOutputType> | number;
                };
            };
        };
        s09_mecanisme_trauma_type: {
            payload: Prisma.$s09_mecanisme_trauma_typePayload<ExtArgs>;
            fields: Prisma.s09_mecanisme_trauma_typeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s09_mecanisme_trauma_typeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_typePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s09_mecanisme_trauma_typeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_typePayload>;
                };
                findFirst: {
                    args: Prisma.s09_mecanisme_trauma_typeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_typePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s09_mecanisme_trauma_typeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_typePayload>;
                };
                findMany: {
                    args: Prisma.s09_mecanisme_trauma_typeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_typePayload>[];
                };
                create: {
                    args: Prisma.s09_mecanisme_trauma_typeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_typePayload>;
                };
                createMany: {
                    args: Prisma.s09_mecanisme_trauma_typeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s09_mecanisme_trauma_typeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_typePayload>[];
                };
                delete: {
                    args: Prisma.s09_mecanisme_trauma_typeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_typePayload>;
                };
                update: {
                    args: Prisma.s09_mecanisme_trauma_typeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_typePayload>;
                };
                deleteMany: {
                    args: Prisma.s09_mecanisme_trauma_typeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s09_mecanisme_trauma_typeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s09_mecanisme_trauma_typeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_typePayload>[];
                };
                upsert: {
                    args: Prisma.s09_mecanisme_trauma_typeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_typePayload>;
                };
                aggregate: {
                    args: Prisma.S09_mecanisme_trauma_typeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS09_mecanisme_trauma_type>;
                };
                groupBy: {
                    args: Prisma.s09_mecanisme_trauma_typeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S09_mecanisme_trauma_typeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s09_mecanisme_trauma_typeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S09_mecanisme_trauma_typeCountAggregateOutputType> | number;
                };
            };
        };
        s09_rapport_mecanisme_trauma: {
            payload: Prisma.$s09_rapport_mecanisme_traumaPayload<ExtArgs>;
            fields: Prisma.s09_rapport_mecanisme_traumaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s09_rapport_mecanisme_traumaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_rapport_mecanisme_traumaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s09_rapport_mecanisme_traumaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_rapport_mecanisme_traumaPayload>;
                };
                findFirst: {
                    args: Prisma.s09_rapport_mecanisme_traumaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_rapport_mecanisme_traumaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s09_rapport_mecanisme_traumaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_rapport_mecanisme_traumaPayload>;
                };
                findMany: {
                    args: Prisma.s09_rapport_mecanisme_traumaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_rapport_mecanisme_traumaPayload>[];
                };
                create: {
                    args: Prisma.s09_rapport_mecanisme_traumaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_rapport_mecanisme_traumaPayload>;
                };
                createMany: {
                    args: Prisma.s09_rapport_mecanisme_traumaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s09_rapport_mecanisme_traumaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_rapport_mecanisme_traumaPayload>[];
                };
                delete: {
                    args: Prisma.s09_rapport_mecanisme_traumaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_rapport_mecanisme_traumaPayload>;
                };
                update: {
                    args: Prisma.s09_rapport_mecanisme_traumaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_rapport_mecanisme_traumaPayload>;
                };
                deleteMany: {
                    args: Prisma.s09_rapport_mecanisme_traumaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s09_rapport_mecanisme_traumaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s09_rapport_mecanisme_traumaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_rapport_mecanisme_traumaPayload>[];
                };
                upsert: {
                    args: Prisma.s09_rapport_mecanisme_traumaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_rapport_mecanisme_traumaPayload>;
                };
                aggregate: {
                    args: Prisma.S09_rapport_mecanisme_traumaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS09_rapport_mecanisme_trauma>;
                };
                groupBy: {
                    args: Prisma.s09_rapport_mecanisme_traumaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S09_rapport_mecanisme_traumaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s09_rapport_mecanisme_traumaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S09_rapport_mecanisme_traumaCountAggregateOutputType> | number;
                };
            };
        };
        s09_mecanisme_trauma_info: {
            payload: Prisma.$s09_mecanisme_trauma_infoPayload<ExtArgs>;
            fields: Prisma.s09_mecanisme_trauma_infoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s09_mecanisme_trauma_infoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_infoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s09_mecanisme_trauma_infoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_infoPayload>;
                };
                findFirst: {
                    args: Prisma.s09_mecanisme_trauma_infoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_infoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s09_mecanisme_trauma_infoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_infoPayload>;
                };
                findMany: {
                    args: Prisma.s09_mecanisme_trauma_infoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_infoPayload>[];
                };
                create: {
                    args: Prisma.s09_mecanisme_trauma_infoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_infoPayload>;
                };
                createMany: {
                    args: Prisma.s09_mecanisme_trauma_infoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s09_mecanisme_trauma_infoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_infoPayload>[];
                };
                delete: {
                    args: Prisma.s09_mecanisme_trauma_infoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_infoPayload>;
                };
                update: {
                    args: Prisma.s09_mecanisme_trauma_infoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_infoPayload>;
                };
                deleteMany: {
                    args: Prisma.s09_mecanisme_trauma_infoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s09_mecanisme_trauma_infoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s09_mecanisme_trauma_infoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_infoPayload>[];
                };
                upsert: {
                    args: Prisma.s09_mecanisme_trauma_infoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s09_mecanisme_trauma_infoPayload>;
                };
                aggregate: {
                    args: Prisma.S09_mecanisme_trauma_infoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS09_mecanisme_trauma_info>;
                };
                groupBy: {
                    args: Prisma.s09_mecanisme_trauma_infoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S09_mecanisme_trauma_infoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s09_mecanisme_trauma_infoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S09_mecanisme_trauma_infoCountAggregateOutputType> | number;
                };
            };
        };
        s10_trauma_info: {
            payload: Prisma.$s10_trauma_infoPayload<ExtArgs>;
            fields: Prisma.s10_trauma_infoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s10_trauma_infoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_infoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s10_trauma_infoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_infoPayload>;
                };
                findFirst: {
                    args: Prisma.s10_trauma_infoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_infoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s10_trauma_infoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_infoPayload>;
                };
                findMany: {
                    args: Prisma.s10_trauma_infoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_infoPayload>[];
                };
                create: {
                    args: Prisma.s10_trauma_infoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_infoPayload>;
                };
                createMany: {
                    args: Prisma.s10_trauma_infoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s10_trauma_infoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_infoPayload>[];
                };
                delete: {
                    args: Prisma.s10_trauma_infoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_infoPayload>;
                };
                update: {
                    args: Prisma.s10_trauma_infoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_infoPayload>;
                };
                deleteMany: {
                    args: Prisma.s10_trauma_infoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s10_trauma_infoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s10_trauma_infoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_infoPayload>[];
                };
                upsert: {
                    args: Prisma.s10_trauma_infoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_infoPayload>;
                };
                aggregate: {
                    args: Prisma.S10_trauma_infoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS10_trauma_info>;
                };
                groupBy: {
                    args: Prisma.s10_trauma_infoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S10_trauma_infoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s10_trauma_infoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S10_trauma_infoCountAggregateOutputType> | number;
                };
            };
        };
        s10_trauma_zone_type: {
            payload: Prisma.$s10_trauma_zone_typePayload<ExtArgs>;
            fields: Prisma.s10_trauma_zone_typeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s10_trauma_zone_typeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_zone_typePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s10_trauma_zone_typeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_zone_typePayload>;
                };
                findFirst: {
                    args: Prisma.s10_trauma_zone_typeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_zone_typePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s10_trauma_zone_typeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_zone_typePayload>;
                };
                findMany: {
                    args: Prisma.s10_trauma_zone_typeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_zone_typePayload>[];
                };
                create: {
                    args: Prisma.s10_trauma_zone_typeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_zone_typePayload>;
                };
                createMany: {
                    args: Prisma.s10_trauma_zone_typeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s10_trauma_zone_typeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_zone_typePayload>[];
                };
                delete: {
                    args: Prisma.s10_trauma_zone_typeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_zone_typePayload>;
                };
                update: {
                    args: Prisma.s10_trauma_zone_typeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_zone_typePayload>;
                };
                deleteMany: {
                    args: Prisma.s10_trauma_zone_typeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s10_trauma_zone_typeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s10_trauma_zone_typeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_zone_typePayload>[];
                };
                upsert: {
                    args: Prisma.s10_trauma_zone_typeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_zone_typePayload>;
                };
                aggregate: {
                    args: Prisma.S10_trauma_zone_typeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS10_trauma_zone_type>;
                };
                groupBy: {
                    args: Prisma.s10_trauma_zone_typeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S10_trauma_zone_typeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s10_trauma_zone_typeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S10_trauma_zone_typeCountAggregateOutputType> | number;
                };
            };
        };
        s10_trauma_lesion_type: {
            payload: Prisma.$s10_trauma_lesion_typePayload<ExtArgs>;
            fields: Prisma.s10_trauma_lesion_typeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s10_trauma_lesion_typeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_lesion_typePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s10_trauma_lesion_typeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_lesion_typePayload>;
                };
                findFirst: {
                    args: Prisma.s10_trauma_lesion_typeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_lesion_typePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s10_trauma_lesion_typeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_lesion_typePayload>;
                };
                findMany: {
                    args: Prisma.s10_trauma_lesion_typeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_lesion_typePayload>[];
                };
                create: {
                    args: Prisma.s10_trauma_lesion_typeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_lesion_typePayload>;
                };
                createMany: {
                    args: Prisma.s10_trauma_lesion_typeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s10_trauma_lesion_typeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_lesion_typePayload>[];
                };
                delete: {
                    args: Prisma.s10_trauma_lesion_typeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_lesion_typePayload>;
                };
                update: {
                    args: Prisma.s10_trauma_lesion_typeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_lesion_typePayload>;
                };
                deleteMany: {
                    args: Prisma.s10_trauma_lesion_typeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s10_trauma_lesion_typeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s10_trauma_lesion_typeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_lesion_typePayload>[];
                };
                upsert: {
                    args: Prisma.s10_trauma_lesion_typeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_lesion_typePayload>;
                };
                aggregate: {
                    args: Prisma.S10_trauma_lesion_typeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS10_trauma_lesion_type>;
                };
                groupBy: {
                    args: Prisma.s10_trauma_lesion_typeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S10_trauma_lesion_typeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s10_trauma_lesion_typeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S10_trauma_lesion_typeCountAggregateOutputType> | number;
                };
            };
        };
        s10_trauma_constat: {
            payload: Prisma.$s10_trauma_constatPayload<ExtArgs>;
            fields: Prisma.s10_trauma_constatFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s10_trauma_constatFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_constatPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s10_trauma_constatFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_constatPayload>;
                };
                findFirst: {
                    args: Prisma.s10_trauma_constatFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_constatPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s10_trauma_constatFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_constatPayload>;
                };
                findMany: {
                    args: Prisma.s10_trauma_constatFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_constatPayload>[];
                };
                create: {
                    args: Prisma.s10_trauma_constatCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_constatPayload>;
                };
                createMany: {
                    args: Prisma.s10_trauma_constatCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s10_trauma_constatCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_constatPayload>[];
                };
                delete: {
                    args: Prisma.s10_trauma_constatDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_constatPayload>;
                };
                update: {
                    args: Prisma.s10_trauma_constatUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_constatPayload>;
                };
                deleteMany: {
                    args: Prisma.s10_trauma_constatDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s10_trauma_constatUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s10_trauma_constatUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_constatPayload>[];
                };
                upsert: {
                    args: Prisma.s10_trauma_constatUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s10_trauma_constatPayload>;
                };
                aggregate: {
                    args: Prisma.S10_trauma_constatAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS10_trauma_constat>;
                };
                groupBy: {
                    args: Prisma.s10_trauma_constatGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S10_trauma_constatGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s10_trauma_constatCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S10_trauma_constatCountAggregateOutputType> | number;
                };
            };
        };
        s11_support_clinique_info: {
            payload: Prisma.$s11_support_clinique_infoPayload<ExtArgs>;
            fields: Prisma.s11_support_clinique_infoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s11_support_clinique_infoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s11_support_clinique_infoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s11_support_clinique_infoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s11_support_clinique_infoPayload>;
                };
                findFirst: {
                    args: Prisma.s11_support_clinique_infoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s11_support_clinique_infoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s11_support_clinique_infoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s11_support_clinique_infoPayload>;
                };
                findMany: {
                    args: Prisma.s11_support_clinique_infoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s11_support_clinique_infoPayload>[];
                };
                create: {
                    args: Prisma.s11_support_clinique_infoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s11_support_clinique_infoPayload>;
                };
                createMany: {
                    args: Prisma.s11_support_clinique_infoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s11_support_clinique_infoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s11_support_clinique_infoPayload>[];
                };
                delete: {
                    args: Prisma.s11_support_clinique_infoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s11_support_clinique_infoPayload>;
                };
                update: {
                    args: Prisma.s11_support_clinique_infoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s11_support_clinique_infoPayload>;
                };
                deleteMany: {
                    args: Prisma.s11_support_clinique_infoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s11_support_clinique_infoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s11_support_clinique_infoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s11_support_clinique_infoPayload>[];
                };
                upsert: {
                    args: Prisma.s11_support_clinique_infoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s11_support_clinique_infoPayload>;
                };
                aggregate: {
                    args: Prisma.S11_support_clinique_infoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS11_support_clinique_info>;
                };
                groupBy: {
                    args: Prisma.s11_support_clinique_infoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S11_support_clinique_infoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s11_support_clinique_infoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S11_support_clinique_infoCountAggregateOutputType> | number;
                };
            };
        };
        s12_signe_vital: {
            payload: Prisma.$s12_signe_vitalPayload<ExtArgs>;
            fields: Prisma.s12_signe_vitalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s12_signe_vitalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s12_signe_vitalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s12_signe_vitalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s12_signe_vitalPayload>;
                };
                findFirst: {
                    args: Prisma.s12_signe_vitalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s12_signe_vitalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s12_signe_vitalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s12_signe_vitalPayload>;
                };
                findMany: {
                    args: Prisma.s12_signe_vitalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s12_signe_vitalPayload>[];
                };
                create: {
                    args: Prisma.s12_signe_vitalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s12_signe_vitalPayload>;
                };
                createMany: {
                    args: Prisma.s12_signe_vitalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s12_signe_vitalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s12_signe_vitalPayload>[];
                };
                delete: {
                    args: Prisma.s12_signe_vitalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s12_signe_vitalPayload>;
                };
                update: {
                    args: Prisma.s12_signe_vitalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s12_signe_vitalPayload>;
                };
                deleteMany: {
                    args: Prisma.s12_signe_vitalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s12_signe_vitalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s12_signe_vitalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s12_signe_vitalPayload>[];
                };
                upsert: {
                    args: Prisma.s12_signe_vitalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s12_signe_vitalPayload>;
                };
                aggregate: {
                    args: Prisma.S12_signe_vitalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS12_signe_vital>;
                };
                groupBy: {
                    args: Prisma.s12_signe_vitalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S12_signe_vitalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s12_signe_vitalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S12_signe_vitalCountAggregateOutputType> | number;
                };
            };
        };
        s13_info: {
            payload: Prisma.$s13_infoPayload<ExtArgs>;
            fields: Prisma.s13_infoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s13_infoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_infoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s13_infoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_infoPayload>;
                };
                findFirst: {
                    args: Prisma.s13_infoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_infoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s13_infoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_infoPayload>;
                };
                findMany: {
                    args: Prisma.s13_infoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_infoPayload>[];
                };
                create: {
                    args: Prisma.s13_infoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_infoPayload>;
                };
                createMany: {
                    args: Prisma.s13_infoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s13_infoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_infoPayload>[];
                };
                delete: {
                    args: Prisma.s13_infoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_infoPayload>;
                };
                update: {
                    args: Prisma.s13_infoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_infoPayload>;
                };
                deleteMany: {
                    args: Prisma.s13_infoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s13_infoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s13_infoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_infoPayload>[];
                };
                upsert: {
                    args: Prisma.s13_infoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_infoPayload>;
                };
                aggregate: {
                    args: Prisma.S13_infoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS13_info>;
                };
                groupBy: {
                    args: Prisma.s13_infoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S13_infoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s13_infoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S13_infoCountAggregateOutputType> | number;
                };
            };
        };
        s13_arret_cardiaque: {
            payload: Prisma.$s13_arret_cardiaquePayload<ExtArgs>;
            fields: Prisma.s13_arret_cardiaqueFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s13_arret_cardiaqueFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_arret_cardiaquePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s13_arret_cardiaqueFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_arret_cardiaquePayload>;
                };
                findFirst: {
                    args: Prisma.s13_arret_cardiaqueFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_arret_cardiaquePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s13_arret_cardiaqueFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_arret_cardiaquePayload>;
                };
                findMany: {
                    args: Prisma.s13_arret_cardiaqueFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_arret_cardiaquePayload>[];
                };
                create: {
                    args: Prisma.s13_arret_cardiaqueCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_arret_cardiaquePayload>;
                };
                createMany: {
                    args: Prisma.s13_arret_cardiaqueCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s13_arret_cardiaqueCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_arret_cardiaquePayload>[];
                };
                delete: {
                    args: Prisma.s13_arret_cardiaqueDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_arret_cardiaquePayload>;
                };
                update: {
                    args: Prisma.s13_arret_cardiaqueUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_arret_cardiaquePayload>;
                };
                deleteMany: {
                    args: Prisma.s13_arret_cardiaqueDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s13_arret_cardiaqueUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s13_arret_cardiaqueUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_arret_cardiaquePayload>[];
                };
                upsert: {
                    args: Prisma.s13_arret_cardiaqueUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_arret_cardiaquePayload>;
                };
                aggregate: {
                    args: Prisma.S13_arret_cardiaqueAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS13_arret_cardiaque>;
                };
                groupBy: {
                    args: Prisma.s13_arret_cardiaqueGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S13_arret_cardiaqueGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s13_arret_cardiaqueCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S13_arret_cardiaqueCountAggregateOutputType> | number;
                };
            };
        };
        s13_voies_aeriennes: {
            payload: Prisma.$s13_voies_aeriennesPayload<ExtArgs>;
            fields: Prisma.s13_voies_aeriennesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s13_voies_aeriennesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_voies_aeriennesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s13_voies_aeriennesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_voies_aeriennesPayload>;
                };
                findFirst: {
                    args: Prisma.s13_voies_aeriennesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_voies_aeriennesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s13_voies_aeriennesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_voies_aeriennesPayload>;
                };
                findMany: {
                    args: Prisma.s13_voies_aeriennesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_voies_aeriennesPayload>[];
                };
                create: {
                    args: Prisma.s13_voies_aeriennesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_voies_aeriennesPayload>;
                };
                createMany: {
                    args: Prisma.s13_voies_aeriennesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s13_voies_aeriennesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_voies_aeriennesPayload>[];
                };
                delete: {
                    args: Prisma.s13_voies_aeriennesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_voies_aeriennesPayload>;
                };
                update: {
                    args: Prisma.s13_voies_aeriennesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_voies_aeriennesPayload>;
                };
                deleteMany: {
                    args: Prisma.s13_voies_aeriennesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s13_voies_aeriennesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s13_voies_aeriennesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_voies_aeriennesPayload>[];
                };
                upsert: {
                    args: Prisma.s13_voies_aeriennesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_voies_aeriennesPayload>;
                };
                aggregate: {
                    args: Prisma.S13_voies_aeriennesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS13_voies_aeriennes>;
                };
                groupBy: {
                    args: Prisma.s13_voies_aeriennesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S13_voies_aeriennesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s13_voies_aeriennesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S13_voies_aeriennesCountAggregateOutputType> | number;
                };
            };
        };
        s13_hemorragies: {
            payload: Prisma.$s13_hemorragiesPayload<ExtArgs>;
            fields: Prisma.s13_hemorragiesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s13_hemorragiesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_hemorragiesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s13_hemorragiesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_hemorragiesPayload>;
                };
                findFirst: {
                    args: Prisma.s13_hemorragiesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_hemorragiesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s13_hemorragiesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_hemorragiesPayload>;
                };
                findMany: {
                    args: Prisma.s13_hemorragiesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_hemorragiesPayload>[];
                };
                create: {
                    args: Prisma.s13_hemorragiesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_hemorragiesPayload>;
                };
                createMany: {
                    args: Prisma.s13_hemorragiesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s13_hemorragiesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_hemorragiesPayload>[];
                };
                delete: {
                    args: Prisma.s13_hemorragiesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_hemorragiesPayload>;
                };
                update: {
                    args: Prisma.s13_hemorragiesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_hemorragiesPayload>;
                };
                deleteMany: {
                    args: Prisma.s13_hemorragiesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s13_hemorragiesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s13_hemorragiesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_hemorragiesPayload>[];
                };
                upsert: {
                    args: Prisma.s13_hemorragiesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_hemorragiesPayload>;
                };
                aggregate: {
                    args: Prisma.S13_hemorragiesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS13_hemorragies>;
                };
                groupBy: {
                    args: Prisma.s13_hemorragiesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S13_hemorragiesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s13_hemorragiesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S13_hemorragiesCountAggregateOutputType> | number;
                };
            };
        };
        s13_immobilisations: {
            payload: Prisma.$s13_immobilisationsPayload<ExtArgs>;
            fields: Prisma.s13_immobilisationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s13_immobilisationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_immobilisationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s13_immobilisationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_immobilisationsPayload>;
                };
                findFirst: {
                    args: Prisma.s13_immobilisationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_immobilisationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s13_immobilisationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_immobilisationsPayload>;
                };
                findMany: {
                    args: Prisma.s13_immobilisationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_immobilisationsPayload>[];
                };
                create: {
                    args: Prisma.s13_immobilisationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_immobilisationsPayload>;
                };
                createMany: {
                    args: Prisma.s13_immobilisationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s13_immobilisationsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_immobilisationsPayload>[];
                };
                delete: {
                    args: Prisma.s13_immobilisationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_immobilisationsPayload>;
                };
                update: {
                    args: Prisma.s13_immobilisationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_immobilisationsPayload>;
                };
                deleteMany: {
                    args: Prisma.s13_immobilisationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s13_immobilisationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s13_immobilisationsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_immobilisationsPayload>[];
                };
                upsert: {
                    args: Prisma.s13_immobilisationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_immobilisationsPayload>;
                };
                aggregate: {
                    args: Prisma.S13_immobilisationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS13_immobilisations>;
                };
                groupBy: {
                    args: Prisma.s13_immobilisationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S13_immobilisationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s13_immobilisationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S13_immobilisationsCountAggregateOutputType> | number;
                };
            };
        };
        s13_accouchement: {
            payload: Prisma.$s13_accouchementPayload<ExtArgs>;
            fields: Prisma.s13_accouchementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s13_accouchementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_accouchementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s13_accouchementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_accouchementPayload>;
                };
                findFirst: {
                    args: Prisma.s13_accouchementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_accouchementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s13_accouchementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_accouchementPayload>;
                };
                findMany: {
                    args: Prisma.s13_accouchementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_accouchementPayload>[];
                };
                create: {
                    args: Prisma.s13_accouchementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_accouchementPayload>;
                };
                createMany: {
                    args: Prisma.s13_accouchementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s13_accouchementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_accouchementPayload>[];
                };
                delete: {
                    args: Prisma.s13_accouchementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_accouchementPayload>;
                };
                update: {
                    args: Prisma.s13_accouchementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_accouchementPayload>;
                };
                deleteMany: {
                    args: Prisma.s13_accouchementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s13_accouchementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s13_accouchementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_accouchementPayload>[];
                };
                upsert: {
                    args: Prisma.s13_accouchementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_accouchementPayload>;
                };
                aggregate: {
                    args: Prisma.S13_accouchementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS13_accouchement>;
                };
                groupBy: {
                    args: Prisma.s13_accouchementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S13_accouchementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s13_accouchementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S13_accouchementCountAggregateOutputType> | number;
                };
            };
        };
        s13_medicaments: {
            payload: Prisma.$s13_medicamentsPayload<ExtArgs>;
            fields: Prisma.s13_medicamentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s13_medicamentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_medicamentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s13_medicamentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_medicamentsPayload>;
                };
                findFirst: {
                    args: Prisma.s13_medicamentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_medicamentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s13_medicamentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_medicamentsPayload>;
                };
                findMany: {
                    args: Prisma.s13_medicamentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_medicamentsPayload>[];
                };
                create: {
                    args: Prisma.s13_medicamentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_medicamentsPayload>;
                };
                createMany: {
                    args: Prisma.s13_medicamentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s13_medicamentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_medicamentsPayload>[];
                };
                delete: {
                    args: Prisma.s13_medicamentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_medicamentsPayload>;
                };
                update: {
                    args: Prisma.s13_medicamentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_medicamentsPayload>;
                };
                deleteMany: {
                    args: Prisma.s13_medicamentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s13_medicamentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s13_medicamentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_medicamentsPayload>[];
                };
                upsert: {
                    args: Prisma.s13_medicamentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s13_medicamentsPayload>;
                };
                aggregate: {
                    args: Prisma.S13_medicamentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS13_medicaments>;
                };
                groupBy: {
                    args: Prisma.s13_medicamentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S13_medicamentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s13_medicamentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S13_medicamentsCountAggregateOutputType> | number;
                };
            };
        };
        s14_entreprise_ambulanciere: {
            payload: Prisma.$s14_entreprise_ambulancierePayload<ExtArgs>;
            fields: Prisma.s14_entreprise_ambulanciereFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s14_entreprise_ambulanciereFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s14_entreprise_ambulancierePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s14_entreprise_ambulanciereFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s14_entreprise_ambulancierePayload>;
                };
                findFirst: {
                    args: Prisma.s14_entreprise_ambulanciereFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s14_entreprise_ambulancierePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s14_entreprise_ambulanciereFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s14_entreprise_ambulancierePayload>;
                };
                findMany: {
                    args: Prisma.s14_entreprise_ambulanciereFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s14_entreprise_ambulancierePayload>[];
                };
                create: {
                    args: Prisma.s14_entreprise_ambulanciereCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s14_entreprise_ambulancierePayload>;
                };
                createMany: {
                    args: Prisma.s14_entreprise_ambulanciereCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s14_entreprise_ambulanciereCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s14_entreprise_ambulancierePayload>[];
                };
                delete: {
                    args: Prisma.s14_entreprise_ambulanciereDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s14_entreprise_ambulancierePayload>;
                };
                update: {
                    args: Prisma.s14_entreprise_ambulanciereUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s14_entreprise_ambulancierePayload>;
                };
                deleteMany: {
                    args: Prisma.s14_entreprise_ambulanciereDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s14_entreprise_ambulanciereUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s14_entreprise_ambulanciereUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s14_entreprise_ambulancierePayload>[];
                };
                upsert: {
                    args: Prisma.s14_entreprise_ambulanciereUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s14_entreprise_ambulancierePayload>;
                };
                aggregate: {
                    args: Prisma.S14_entreprise_ambulanciereAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS14_entreprise_ambulanciere>;
                };
                groupBy: {
                    args: Prisma.s14_entreprise_ambulanciereGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S14_entreprise_ambulanciereGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s14_entreprise_ambulanciereCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S14_entreprise_ambulanciereCountAggregateOutputType> | number;
                };
            };
        };
        s15_autres_renseignements: {
            payload: Prisma.$s15_autres_renseignementsPayload<ExtArgs>;
            fields: Prisma.s15_autres_renseignementsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.s15_autres_renseignementsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s15_autres_renseignementsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.s15_autres_renseignementsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s15_autres_renseignementsPayload>;
                };
                findFirst: {
                    args: Prisma.s15_autres_renseignementsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s15_autres_renseignementsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.s15_autres_renseignementsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s15_autres_renseignementsPayload>;
                };
                findMany: {
                    args: Prisma.s15_autres_renseignementsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s15_autres_renseignementsPayload>[];
                };
                create: {
                    args: Prisma.s15_autres_renseignementsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s15_autres_renseignementsPayload>;
                };
                createMany: {
                    args: Prisma.s15_autres_renseignementsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.s15_autres_renseignementsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s15_autres_renseignementsPayload>[];
                };
                delete: {
                    args: Prisma.s15_autres_renseignementsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s15_autres_renseignementsPayload>;
                };
                update: {
                    args: Prisma.s15_autres_renseignementsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s15_autres_renseignementsPayload>;
                };
                deleteMany: {
                    args: Prisma.s15_autres_renseignementsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.s15_autres_renseignementsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.s15_autres_renseignementsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s15_autres_renseignementsPayload>[];
                };
                upsert: {
                    args: Prisma.s15_autres_renseignementsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$s15_autres_renseignementsPayload>;
                };
                aggregate: {
                    args: Prisma.S15_autres_renseignementsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateS15_autres_renseignements>;
                };
                groupBy: {
                    args: Prisma.s15_autres_renseignementsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S15_autres_renseignementsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.s15_autres_renseignementsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.S15_autres_renseignementsCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
    readonly admin: "admin";
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
/**
 * Field references
 */
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    patient?: Prisma.patientOmit;
    intervenant_pr?: Prisma.intervenant_prOmit;
    r_rapport_pr?: Prisma.r_rapport_prOmit;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantOmit;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeOmit;
    s02_service_pr?: Prisma.s02_service_prOmit;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerOmit;
    s04_approche_initiale?: Prisma.s04_approche_initialeOmit;
    s05_nature_cas_type?: Prisma.s05_nature_cas_typeOmit;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casOmit;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoOmit;
    s06_antecedent_type?: Prisma.s06_antecedent_typeOmit;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentOmit;
    s07_maladie_infectieuse_type?: Prisma.s07_maladie_infectieuse_typeOmit;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoOmit;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseOmit;
    s08_allergie_type?: Prisma.s08_allergie_typeOmit;
    s08_allergies_info?: Prisma.s08_allergies_infoOmit;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieOmit;
    s09_mecanisme_trauma_type?: Prisma.s09_mecanisme_trauma_typeOmit;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaOmit;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoOmit;
    s10_trauma_info?: Prisma.s10_trauma_infoOmit;
    s10_trauma_zone_type?: Prisma.s10_trauma_zone_typeOmit;
    s10_trauma_lesion_type?: Prisma.s10_trauma_lesion_typeOmit;
    s10_trauma_constat?: Prisma.s10_trauma_constatOmit;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoOmit;
    s12_signe_vital?: Prisma.s12_signe_vitalOmit;
    s13_info?: Prisma.s13_infoOmit;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueOmit;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesOmit;
    s13_hemorragies?: Prisma.s13_hemorragiesOmit;
    s13_immobilisations?: Prisma.s13_immobilisationsOmit;
    s13_accouchement?: Prisma.s13_accouchementOmit;
    s13_medicaments?: Prisma.s13_medicamentsOmit;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereOmit;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map