import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model patient
 *
 */
export type patientModel = runtime.Types.Result.DefaultSelection<Prisma.$patientPayload>;
export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null;
    _avg: PatientAvgAggregateOutputType | null;
    _sum: PatientSumAggregateOutputType | null;
    _min: PatientMinAggregateOutputType | null;
    _max: PatientMaxAggregateOutputType | null;
};
export type PatientAvgAggregateOutputType = {
    id: number | null;
    annee_naissance: number | null;
};
export type PatientSumAggregateOutputType = {
    id: number | null;
    annee_naissance: number | null;
};
export type PatientMinAggregateOutputType = {
    id: number | null;
    nom: string | null;
    prenom: string | null;
    annee_naissance: number | null;
    sexe: string | null;
    no_ass: string | null;
    maladie: string | null;
};
export type PatientMaxAggregateOutputType = {
    id: number | null;
    nom: string | null;
    prenom: string | null;
    annee_naissance: number | null;
    sexe: string | null;
    no_ass: string | null;
    maladie: string | null;
};
export type PatientCountAggregateOutputType = {
    id: number;
    nom: number;
    prenom: number;
    annee_naissance: number;
    sexe: number;
    no_ass: number;
    maladie: number;
    _all: number;
};
export type PatientAvgAggregateInputType = {
    id?: true;
    annee_naissance?: true;
};
export type PatientSumAggregateInputType = {
    id?: true;
    annee_naissance?: true;
};
export type PatientMinAggregateInputType = {
    id?: true;
    nom?: true;
    prenom?: true;
    annee_naissance?: true;
    sexe?: true;
    no_ass?: true;
    maladie?: true;
};
export type PatientMaxAggregateInputType = {
    id?: true;
    nom?: true;
    prenom?: true;
    annee_naissance?: true;
    sexe?: true;
    no_ass?: true;
    maladie?: true;
};
export type PatientCountAggregateInputType = {
    id?: true;
    nom?: true;
    prenom?: true;
    annee_naissance?: true;
    sexe?: true;
    no_ass?: true;
    maladie?: true;
    _all?: true;
};
export type PatientAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which patient to aggregate.
     */
    where?: Prisma.patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: Prisma.patientOrderByWithRelationInput | Prisma.patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned patients
    **/
    _count?: true | PatientCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType;
};
export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
    [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePatient[P]> : Prisma.GetScalarType<T[P], AggregatePatient[P]>;
};
export type patientGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.patientWhereInput;
    orderBy?: Prisma.patientOrderByWithAggregationInput | Prisma.patientOrderByWithAggregationInput[];
    by: Prisma.PatientScalarFieldEnum[] | Prisma.PatientScalarFieldEnum;
    having?: Prisma.patientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PatientCountAggregateInputType | true;
    _avg?: PatientAvgAggregateInputType;
    _sum?: PatientSumAggregateInputType;
    _min?: PatientMinAggregateInputType;
    _max?: PatientMaxAggregateInputType;
};
export type PatientGroupByOutputType = {
    id: number;
    nom: string | null;
    prenom: string | null;
    annee_naissance: number | null;
    sexe: string | null;
    no_ass: string | null;
    maladie: string | null;
    _count: PatientCountAggregateOutputType | null;
    _avg: PatientAvgAggregateOutputType | null;
    _sum: PatientSumAggregateOutputType | null;
    _min: PatientMinAggregateOutputType | null;
    _max: PatientMaxAggregateOutputType | null;
};
type GetPatientGroupByPayload<T extends patientGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PatientGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PatientGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PatientGroupByOutputType[P]>;
}>>;
export type patientWhereInput = {
    AND?: Prisma.patientWhereInput | Prisma.patientWhereInput[];
    OR?: Prisma.patientWhereInput[];
    NOT?: Prisma.patientWhereInput | Prisma.patientWhereInput[];
    id?: Prisma.IntFilter<"patient"> | number;
    nom?: Prisma.StringNullableFilter<"patient"> | string | null;
    prenom?: Prisma.StringNullableFilter<"patient"> | string | null;
    annee_naissance?: Prisma.IntNullableFilter<"patient"> | number | null;
    sexe?: Prisma.StringNullableFilter<"patient"> | string | null;
    no_ass?: Prisma.StringNullableFilter<"patient"> | string | null;
    maladie?: Prisma.StringNullableFilter<"patient"> | string | null;
    r_rapport_pr?: Prisma.R_rapport_prListRelationFilter;
};
export type patientOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrderInput | Prisma.SortOrder;
    prenom?: Prisma.SortOrderInput | Prisma.SortOrder;
    annee_naissance?: Prisma.SortOrderInput | Prisma.SortOrder;
    sexe?: Prisma.SortOrderInput | Prisma.SortOrder;
    no_ass?: Prisma.SortOrderInput | Prisma.SortOrder;
    maladie?: Prisma.SortOrderInput | Prisma.SortOrder;
    r_rapport_pr?: Prisma.r_rapport_prOrderByRelationAggregateInput;
};
export type patientWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.patientWhereInput | Prisma.patientWhereInput[];
    OR?: Prisma.patientWhereInput[];
    NOT?: Prisma.patientWhereInput | Prisma.patientWhereInput[];
    nom?: Prisma.StringNullableFilter<"patient"> | string | null;
    prenom?: Prisma.StringNullableFilter<"patient"> | string | null;
    annee_naissance?: Prisma.IntNullableFilter<"patient"> | number | null;
    sexe?: Prisma.StringNullableFilter<"patient"> | string | null;
    no_ass?: Prisma.StringNullableFilter<"patient"> | string | null;
    maladie?: Prisma.StringNullableFilter<"patient"> | string | null;
    r_rapport_pr?: Prisma.R_rapport_prListRelationFilter;
}, "id">;
export type patientOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrderInput | Prisma.SortOrder;
    prenom?: Prisma.SortOrderInput | Prisma.SortOrder;
    annee_naissance?: Prisma.SortOrderInput | Prisma.SortOrder;
    sexe?: Prisma.SortOrderInput | Prisma.SortOrder;
    no_ass?: Prisma.SortOrderInput | Prisma.SortOrder;
    maladie?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.patientCountOrderByAggregateInput;
    _avg?: Prisma.patientAvgOrderByAggregateInput;
    _max?: Prisma.patientMaxOrderByAggregateInput;
    _min?: Prisma.patientMinOrderByAggregateInput;
    _sum?: Prisma.patientSumOrderByAggregateInput;
};
export type patientScalarWhereWithAggregatesInput = {
    AND?: Prisma.patientScalarWhereWithAggregatesInput | Prisma.patientScalarWhereWithAggregatesInput[];
    OR?: Prisma.patientScalarWhereWithAggregatesInput[];
    NOT?: Prisma.patientScalarWhereWithAggregatesInput | Prisma.patientScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"patient"> | number;
    nom?: Prisma.StringNullableWithAggregatesFilter<"patient"> | string | null;
    prenom?: Prisma.StringNullableWithAggregatesFilter<"patient"> | string | null;
    annee_naissance?: Prisma.IntNullableWithAggregatesFilter<"patient"> | number | null;
    sexe?: Prisma.StringNullableWithAggregatesFilter<"patient"> | string | null;
    no_ass?: Prisma.StringNullableWithAggregatesFilter<"patient"> | string | null;
    maladie?: Prisma.StringNullableWithAggregatesFilter<"patient"> | string | null;
};
export type patientCreateInput = {
    nom?: string | null;
    prenom?: string | null;
    annee_naissance?: number | null;
    sexe?: string | null;
    no_ass?: string | null;
    maladie?: string | null;
    r_rapport_pr?: Prisma.r_rapport_prCreateNestedManyWithoutPatientInput;
};
export type patientUncheckedCreateInput = {
    id?: number;
    nom?: string | null;
    prenom?: string | null;
    annee_naissance?: number | null;
    sexe?: string | null;
    no_ass?: string | null;
    maladie?: string | null;
    r_rapport_pr?: Prisma.r_rapport_prUncheckedCreateNestedManyWithoutPatientInput;
};
export type patientUpdateInput = {
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prenom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    annee_naissance?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_ass?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maladie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    r_rapport_pr?: Prisma.r_rapport_prUpdateManyWithoutPatientNestedInput;
};
export type patientUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prenom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    annee_naissance?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_ass?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maladie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    r_rapport_pr?: Prisma.r_rapport_prUncheckedUpdateManyWithoutPatientNestedInput;
};
export type patientCreateManyInput = {
    id?: number;
    nom?: string | null;
    prenom?: string | null;
    annee_naissance?: number | null;
    sexe?: string | null;
    no_ass?: string | null;
    maladie?: string | null;
};
export type patientUpdateManyMutationInput = {
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prenom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    annee_naissance?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_ass?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maladie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type patientUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prenom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    annee_naissance?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_ass?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maladie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type patientCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    annee_naissance?: Prisma.SortOrder;
    sexe?: Prisma.SortOrder;
    no_ass?: Prisma.SortOrder;
    maladie?: Prisma.SortOrder;
};
export type patientAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    annee_naissance?: Prisma.SortOrder;
};
export type patientMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    annee_naissance?: Prisma.SortOrder;
    sexe?: Prisma.SortOrder;
    no_ass?: Prisma.SortOrder;
    maladie?: Prisma.SortOrder;
};
export type patientMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    annee_naissance?: Prisma.SortOrder;
    sexe?: Prisma.SortOrder;
    no_ass?: Prisma.SortOrder;
    maladie?: Prisma.SortOrder;
};
export type patientSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    annee_naissance?: Prisma.SortOrder;
};
export type PatientScalarRelationFilter = {
    is?: Prisma.patientWhereInput;
    isNot?: Prisma.patientWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type patientCreateNestedOneWithoutR_rapport_prInput = {
    create?: Prisma.XOR<Prisma.patientCreateWithoutR_rapport_prInput, Prisma.patientUncheckedCreateWithoutR_rapport_prInput>;
    connectOrCreate?: Prisma.patientCreateOrConnectWithoutR_rapport_prInput;
    connect?: Prisma.patientWhereUniqueInput;
};
export type patientUpdateOneRequiredWithoutR_rapport_prNestedInput = {
    create?: Prisma.XOR<Prisma.patientCreateWithoutR_rapport_prInput, Prisma.patientUncheckedCreateWithoutR_rapport_prInput>;
    connectOrCreate?: Prisma.patientCreateOrConnectWithoutR_rapport_prInput;
    upsert?: Prisma.patientUpsertWithoutR_rapport_prInput;
    connect?: Prisma.patientWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.patientUpdateToOneWithWhereWithoutR_rapport_prInput, Prisma.patientUpdateWithoutR_rapport_prInput>, Prisma.patientUncheckedUpdateWithoutR_rapport_prInput>;
};
export type patientCreateWithoutR_rapport_prInput = {
    nom?: string | null;
    prenom?: string | null;
    annee_naissance?: number | null;
    sexe?: string | null;
    no_ass?: string | null;
    maladie?: string | null;
};
export type patientUncheckedCreateWithoutR_rapport_prInput = {
    id?: number;
    nom?: string | null;
    prenom?: string | null;
    annee_naissance?: number | null;
    sexe?: string | null;
    no_ass?: string | null;
    maladie?: string | null;
};
export type patientCreateOrConnectWithoutR_rapport_prInput = {
    where: Prisma.patientWhereUniqueInput;
    create: Prisma.XOR<Prisma.patientCreateWithoutR_rapport_prInput, Prisma.patientUncheckedCreateWithoutR_rapport_prInput>;
};
export type patientUpsertWithoutR_rapport_prInput = {
    update: Prisma.XOR<Prisma.patientUpdateWithoutR_rapport_prInput, Prisma.patientUncheckedUpdateWithoutR_rapport_prInput>;
    create: Prisma.XOR<Prisma.patientCreateWithoutR_rapport_prInput, Prisma.patientUncheckedCreateWithoutR_rapport_prInput>;
    where?: Prisma.patientWhereInput;
};
export type patientUpdateToOneWithWhereWithoutR_rapport_prInput = {
    where?: Prisma.patientWhereInput;
    data: Prisma.XOR<Prisma.patientUpdateWithoutR_rapport_prInput, Prisma.patientUncheckedUpdateWithoutR_rapport_prInput>;
};
export type patientUpdateWithoutR_rapport_prInput = {
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prenom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    annee_naissance?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_ass?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maladie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type patientUncheckedUpdateWithoutR_rapport_prInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prenom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    annee_naissance?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    sexe?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_ass?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maladie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type PatientCountOutputType
 */
export type PatientCountOutputType = {
    r_rapport_pr: number;
};
export type PatientCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    r_rapport_pr?: boolean | PatientCountOutputTypeCountR_rapport_prArgs;
};
/**
 * PatientCountOutputType without action
 */
export type PatientCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: Prisma.PatientCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PatientCountOutputType without action
 */
export type PatientCountOutputTypeCountR_rapport_prArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.r_rapport_prWhereInput;
};
export type patientSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    prenom?: boolean;
    annee_naissance?: boolean;
    sexe?: boolean;
    no_ass?: boolean;
    maladie?: boolean;
    r_rapport_pr?: boolean | Prisma.patient$r_rapport_prArgs<ExtArgs>;
    _count?: boolean | Prisma.PatientCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["patient"]>;
export type patientSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    prenom?: boolean;
    annee_naissance?: boolean;
    sexe?: boolean;
    no_ass?: boolean;
    maladie?: boolean;
}, ExtArgs["result"]["patient"]>;
export type patientSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    prenom?: boolean;
    annee_naissance?: boolean;
    sexe?: boolean;
    no_ass?: boolean;
    maladie?: boolean;
}, ExtArgs["result"]["patient"]>;
export type patientSelectScalar = {
    id?: boolean;
    nom?: boolean;
    prenom?: boolean;
    annee_naissance?: boolean;
    sexe?: boolean;
    no_ass?: boolean;
    maladie?: boolean;
};
export type patientOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "prenom" | "annee_naissance" | "sexe" | "no_ass" | "maladie", ExtArgs["result"]["patient"]>;
export type patientInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    r_rapport_pr?: boolean | Prisma.patient$r_rapport_prArgs<ExtArgs>;
    _count?: boolean | Prisma.PatientCountOutputTypeDefaultArgs<ExtArgs>;
};
export type patientIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type patientIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $patientPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "patient";
    objects: {
        r_rapport_pr: Prisma.$r_rapport_prPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nom: string | null;
        prenom: string | null;
        annee_naissance: number | null;
        sexe: string | null;
        no_ass: string | null;
        maladie: string | null;
    }, ExtArgs["result"]["patient"]>;
    composites: {};
};
export type patientGetPayload<S extends boolean | null | undefined | patientDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$patientPayload, S>;
export type patientCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<patientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PatientCountAggregateInputType | true;
};
export interface patientDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['patient'];
        meta: {
            name: 'patient';
        };
    };
    /**
     * Find zero or one Patient that matches the filter.
     * @param {patientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends patientFindUniqueArgs>(args: Prisma.SelectSubset<T, patientFindUniqueArgs<ExtArgs>>): Prisma.Prisma__patientClient<runtime.Types.Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {patientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends patientFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, patientFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__patientClient<runtime.Types.Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends patientFindFirstArgs>(args?: Prisma.SelectSubset<T, patientFindFirstArgs<ExtArgs>>): Prisma.Prisma__patientClient<runtime.Types.Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends patientFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, patientFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__patientClient<runtime.Types.Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     *
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     *
     */
    findMany<T extends patientFindManyArgs>(args?: Prisma.SelectSubset<T, patientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Patient.
     * @param {patientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     *
     */
    create<T extends patientCreateArgs>(args: Prisma.SelectSubset<T, patientCreateArgs<ExtArgs>>): Prisma.Prisma__patientClient<runtime.Types.Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Patients.
     * @param {patientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends patientCreateManyArgs>(args?: Prisma.SelectSubset<T, patientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Patients and returns the data saved in the database.
     * @param {patientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends patientCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, patientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Patient.
     * @param {patientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     *
     */
    delete<T extends patientDeleteArgs>(args: Prisma.SelectSubset<T, patientDeleteArgs<ExtArgs>>): Prisma.Prisma__patientClient<runtime.Types.Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Patient.
     * @param {patientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends patientUpdateArgs>(args: Prisma.SelectSubset<T, patientUpdateArgs<ExtArgs>>): Prisma.Prisma__patientClient<runtime.Types.Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Patients.
     * @param {patientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends patientDeleteManyArgs>(args?: Prisma.SelectSubset<T, patientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends patientUpdateManyArgs>(args: Prisma.SelectSubset<T, patientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {patientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends patientUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, patientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Patient.
     * @param {patientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends patientUpsertArgs>(args: Prisma.SelectSubset<T, patientUpsertArgs<ExtArgs>>): Prisma.Prisma__patientClient<runtime.Types.Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends patientCountArgs>(args?: Prisma.Subset<T, patientCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PatientCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Prisma.Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>;
    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends patientGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: patientGroupByArgs['orderBy'];
    } : {
        orderBy?: patientGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, patientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the patient model
     */
    readonly fields: patientFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for patient.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__patientClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    r_rapport_pr<T extends Prisma.patient$r_rapport_prArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.patient$r_rapport_prArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the patient model
 */
export interface patientFieldRefs {
    readonly id: Prisma.FieldRef<"patient", 'Int'>;
    readonly nom: Prisma.FieldRef<"patient", 'String'>;
    readonly prenom: Prisma.FieldRef<"patient", 'String'>;
    readonly annee_naissance: Prisma.FieldRef<"patient", 'Int'>;
    readonly sexe: Prisma.FieldRef<"patient", 'String'>;
    readonly no_ass: Prisma.FieldRef<"patient", 'String'>;
    readonly maladie: Prisma.FieldRef<"patient", 'String'>;
}
/**
 * patient findUnique
 */
export type patientFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: Prisma.patientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the patient
     */
    omit?: Prisma.patientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where: Prisma.patientWhereUniqueInput;
};
/**
 * patient findUniqueOrThrow
 */
export type patientFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: Prisma.patientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the patient
     */
    omit?: Prisma.patientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where: Prisma.patientWhereUniqueInput;
};
/**
 * patient findFirst
 */
export type patientFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: Prisma.patientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the patient
     */
    omit?: Prisma.patientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where?: Prisma.patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: Prisma.patientOrderByWithRelationInput | Prisma.patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for patients.
     */
    cursor?: Prisma.patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of patients.
     */
    distinct?: Prisma.PatientScalarFieldEnum | Prisma.PatientScalarFieldEnum[];
};
/**
 * patient findFirstOrThrow
 */
export type patientFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: Prisma.patientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the patient
     */
    omit?: Prisma.patientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.patientInclude<ExtArgs> | null;
    /**
     * Filter, which patient to fetch.
     */
    where?: Prisma.patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: Prisma.patientOrderByWithRelationInput | Prisma.patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for patients.
     */
    cursor?: Prisma.patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of patients.
     */
    distinct?: Prisma.PatientScalarFieldEnum | Prisma.PatientScalarFieldEnum[];
};
/**
 * patient findMany
 */
export type patientFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: Prisma.patientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the patient
     */
    omit?: Prisma.patientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.patientInclude<ExtArgs> | null;
    /**
     * Filter, which patients to fetch.
     */
    where?: Prisma.patientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of patients to fetch.
     */
    orderBy?: Prisma.patientOrderByWithRelationInput | Prisma.patientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing patients.
     */
    cursor?: Prisma.patientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` patients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` patients.
     */
    skip?: number;
    distinct?: Prisma.PatientScalarFieldEnum | Prisma.PatientScalarFieldEnum[];
};
/**
 * patient create
 */
export type patientCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: Prisma.patientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the patient
     */
    omit?: Prisma.patientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.patientInclude<ExtArgs> | null;
    /**
     * The data needed to create a patient.
     */
    data?: Prisma.XOR<Prisma.patientCreateInput, Prisma.patientUncheckedCreateInput>;
};
/**
 * patient createMany
 */
export type patientCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many patients.
     */
    data: Prisma.patientCreateManyInput | Prisma.patientCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * patient createManyAndReturn
 */
export type patientCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: Prisma.patientSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the patient
     */
    omit?: Prisma.patientOmit<ExtArgs> | null;
    /**
     * The data used to create many patients.
     */
    data: Prisma.patientCreateManyInput | Prisma.patientCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * patient update
 */
export type patientUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: Prisma.patientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the patient
     */
    omit?: Prisma.patientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.patientInclude<ExtArgs> | null;
    /**
     * The data needed to update a patient.
     */
    data: Prisma.XOR<Prisma.patientUpdateInput, Prisma.patientUncheckedUpdateInput>;
    /**
     * Choose, which patient to update.
     */
    where: Prisma.patientWhereUniqueInput;
};
/**
 * patient updateMany
 */
export type patientUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update patients.
     */
    data: Prisma.XOR<Prisma.patientUpdateManyMutationInput, Prisma.patientUncheckedUpdateManyInput>;
    /**
     * Filter which patients to update
     */
    where?: Prisma.patientWhereInput;
    /**
     * Limit how many patients to update.
     */
    limit?: number;
};
/**
 * patient updateManyAndReturn
 */
export type patientUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: Prisma.patientSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the patient
     */
    omit?: Prisma.patientOmit<ExtArgs> | null;
    /**
     * The data used to update patients.
     */
    data: Prisma.XOR<Prisma.patientUpdateManyMutationInput, Prisma.patientUncheckedUpdateManyInput>;
    /**
     * Filter which patients to update
     */
    where?: Prisma.patientWhereInput;
    /**
     * Limit how many patients to update.
     */
    limit?: number;
};
/**
 * patient upsert
 */
export type patientUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: Prisma.patientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the patient
     */
    omit?: Prisma.patientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.patientInclude<ExtArgs> | null;
    /**
     * The filter to search for the patient to update in case it exists.
     */
    where: Prisma.patientWhereUniqueInput;
    /**
     * In case the patient found by the `where` argument doesn't exist, create a new patient with this data.
     */
    create: Prisma.XOR<Prisma.patientCreateInput, Prisma.patientUncheckedCreateInput>;
    /**
     * In case the patient was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.patientUpdateInput, Prisma.patientUncheckedUpdateInput>;
};
/**
 * patient delete
 */
export type patientDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: Prisma.patientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the patient
     */
    omit?: Prisma.patientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.patientInclude<ExtArgs> | null;
    /**
     * Filter which patient to delete.
     */
    where: Prisma.patientWhereUniqueInput;
};
/**
 * patient deleteMany
 */
export type patientDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which patients to delete
     */
    where?: Prisma.patientWhereInput;
    /**
     * Limit how many patients to delete.
     */
    limit?: number;
};
/**
 * patient.r_rapport_pr
 */
export type patient$r_rapport_prArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr
     */
    select?: Prisma.r_rapport_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr
     */
    omit?: Prisma.r_rapport_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_prInclude<ExtArgs> | null;
    where?: Prisma.r_rapport_prWhereInput;
    orderBy?: Prisma.r_rapport_prOrderByWithRelationInput | Prisma.r_rapport_prOrderByWithRelationInput[];
    cursor?: Prisma.r_rapport_prWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.R_rapport_prScalarFieldEnum | Prisma.R_rapport_prScalarFieldEnum[];
};
/**
 * patient without action
 */
export type patientDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: Prisma.patientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the patient
     */
    omit?: Prisma.patientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.patientInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=patient.d.ts.map