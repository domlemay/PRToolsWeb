import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s13_accouchement
 *
 */
export type s13_accouchementModel = runtime.Types.Result.DefaultSelection<Prisma.$s13_accouchementPayload>;
export type AggregateS13_accouchement = {
    _count: S13_accouchementCountAggregateOutputType | null;
    _avg: S13_accouchementAvgAggregateOutputType | null;
    _sum: S13_accouchementSumAggregateOutputType | null;
    _min: S13_accouchementMinAggregateOutputType | null;
    _max: S13_accouchementMaxAggregateOutputType | null;
};
export type S13_accouchementAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S13_accouchementSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S13_accouchementMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    accouchement: string | null;
    accouchement_heure: Date | null;
    acces_refuse: string | null;
};
export type S13_accouchementMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    accouchement: string | null;
    accouchement_heure: Date | null;
    acces_refuse: string | null;
};
export type S13_accouchementCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    accouchement: number;
    accouchement_heure: number;
    acces_refuse: number;
    _all: number;
};
export type S13_accouchementAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S13_accouchementSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S13_accouchementMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    accouchement?: true;
    accouchement_heure?: true;
    acces_refuse?: true;
};
export type S13_accouchementMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    accouchement?: true;
    accouchement_heure?: true;
    acces_refuse?: true;
};
export type S13_accouchementCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    accouchement?: true;
    accouchement_heure?: true;
    acces_refuse?: true;
    _all?: true;
};
export type S13_accouchementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s13_accouchement to aggregate.
     */
    where?: Prisma.s13_accouchementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_accouchements to fetch.
     */
    orderBy?: Prisma.s13_accouchementOrderByWithRelationInput | Prisma.s13_accouchementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s13_accouchementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_accouchements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_accouchements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s13_accouchements
    **/
    _count?: true | S13_accouchementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S13_accouchementAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S13_accouchementSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S13_accouchementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S13_accouchementMaxAggregateInputType;
};
export type GetS13_accouchementAggregateType<T extends S13_accouchementAggregateArgs> = {
    [P in keyof T & keyof AggregateS13_accouchement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS13_accouchement[P]> : Prisma.GetScalarType<T[P], AggregateS13_accouchement[P]>;
};
export type s13_accouchementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s13_accouchementWhereInput;
    orderBy?: Prisma.s13_accouchementOrderByWithAggregationInput | Prisma.s13_accouchementOrderByWithAggregationInput[];
    by: Prisma.S13_accouchementScalarFieldEnum[] | Prisma.S13_accouchementScalarFieldEnum;
    having?: Prisma.s13_accouchementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S13_accouchementCountAggregateInputType | true;
    _avg?: S13_accouchementAvgAggregateInputType;
    _sum?: S13_accouchementSumAggregateInputType;
    _min?: S13_accouchementMinAggregateInputType;
    _max?: S13_accouchementMaxAggregateInputType;
};
export type S13_accouchementGroupByOutputType = {
    id: number;
    rapport_id: number;
    accouchement: string | null;
    accouchement_heure: Date | null;
    acces_refuse: string | null;
    _count: S13_accouchementCountAggregateOutputType | null;
    _avg: S13_accouchementAvgAggregateOutputType | null;
    _sum: S13_accouchementSumAggregateOutputType | null;
    _min: S13_accouchementMinAggregateOutputType | null;
    _max: S13_accouchementMaxAggregateOutputType | null;
};
type GetS13_accouchementGroupByPayload<T extends s13_accouchementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S13_accouchementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S13_accouchementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S13_accouchementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S13_accouchementGroupByOutputType[P]>;
}>>;
export type s13_accouchementWhereInput = {
    AND?: Prisma.s13_accouchementWhereInput | Prisma.s13_accouchementWhereInput[];
    OR?: Prisma.s13_accouchementWhereInput[];
    NOT?: Prisma.s13_accouchementWhereInput | Prisma.s13_accouchementWhereInput[];
    id?: Prisma.IntFilter<"s13_accouchement"> | number;
    rapport_id?: Prisma.IntFilter<"s13_accouchement"> | number;
    accouchement?: Prisma.StringNullableFilter<"s13_accouchement"> | string | null;
    accouchement_heure?: Prisma.DateTimeNullableFilter<"s13_accouchement"> | Date | string | null;
    acces_refuse?: Prisma.StringNullableFilter<"s13_accouchement"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s13_accouchementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    accouchement?: Prisma.SortOrderInput | Prisma.SortOrder;
    accouchement_heure?: Prisma.SortOrderInput | Prisma.SortOrder;
    acces_refuse?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s13_accouchementWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id?: number;
    AND?: Prisma.s13_accouchementWhereInput | Prisma.s13_accouchementWhereInput[];
    OR?: Prisma.s13_accouchementWhereInput[];
    NOT?: Prisma.s13_accouchementWhereInput | Prisma.s13_accouchementWhereInput[];
    accouchement?: Prisma.StringNullableFilter<"s13_accouchement"> | string | null;
    accouchement_heure?: Prisma.DateTimeNullableFilter<"s13_accouchement"> | Date | string | null;
    acces_refuse?: Prisma.StringNullableFilter<"s13_accouchement"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id" | "rapport_id">;
export type s13_accouchementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    accouchement?: Prisma.SortOrderInput | Prisma.SortOrder;
    accouchement_heure?: Prisma.SortOrderInput | Prisma.SortOrder;
    acces_refuse?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s13_accouchementCountOrderByAggregateInput;
    _avg?: Prisma.s13_accouchementAvgOrderByAggregateInput;
    _max?: Prisma.s13_accouchementMaxOrderByAggregateInput;
    _min?: Prisma.s13_accouchementMinOrderByAggregateInput;
    _sum?: Prisma.s13_accouchementSumOrderByAggregateInput;
};
export type s13_accouchementScalarWhereWithAggregatesInput = {
    AND?: Prisma.s13_accouchementScalarWhereWithAggregatesInput | Prisma.s13_accouchementScalarWhereWithAggregatesInput[];
    OR?: Prisma.s13_accouchementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s13_accouchementScalarWhereWithAggregatesInput | Prisma.s13_accouchementScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s13_accouchement"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s13_accouchement"> | number;
    accouchement?: Prisma.StringNullableWithAggregatesFilter<"s13_accouchement"> | string | null;
    accouchement_heure?: Prisma.DateTimeNullableWithAggregatesFilter<"s13_accouchement"> | Date | string | null;
    acces_refuse?: Prisma.StringNullableWithAggregatesFilter<"s13_accouchement"> | string | null;
};
export type s13_accouchementCreateInput = {
    accouchement?: string | null;
    accouchement_heure?: Date | string | null;
    acces_refuse?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS13_accouchementInput;
};
export type s13_accouchementUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    accouchement?: string | null;
    accouchement_heure?: Date | string | null;
    acces_refuse?: string | null;
};
export type s13_accouchementUpdateInput = {
    accouchement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accouchement_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acces_refuse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS13_accouchementNestedInput;
};
export type s13_accouchementUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    accouchement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accouchement_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acces_refuse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_accouchementCreateManyInput = {
    id?: number;
    rapport_id: number;
    accouchement?: string | null;
    accouchement_heure?: Date | string | null;
    acces_refuse?: string | null;
};
export type s13_accouchementUpdateManyMutationInput = {
    accouchement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accouchement_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acces_refuse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_accouchementUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    accouchement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accouchement_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acces_refuse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type S13_accouchementNullableScalarRelationFilter = {
    is?: Prisma.s13_accouchementWhereInput | null;
    isNot?: Prisma.s13_accouchementWhereInput | null;
};
export type s13_accouchementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    accouchement?: Prisma.SortOrder;
    accouchement_heure?: Prisma.SortOrder;
    acces_refuse?: Prisma.SortOrder;
};
export type s13_accouchementAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s13_accouchementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    accouchement?: Prisma.SortOrder;
    accouchement_heure?: Prisma.SortOrder;
    acces_refuse?: Prisma.SortOrder;
};
export type s13_accouchementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    accouchement?: Prisma.SortOrder;
    accouchement_heure?: Prisma.SortOrder;
    acces_refuse?: Prisma.SortOrder;
};
export type s13_accouchementSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s13_accouchementCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s13_accouchementCreateWithoutRapportInput, Prisma.s13_accouchementUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_accouchementCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s13_accouchementWhereUniqueInput;
};
export type s13_accouchementUncheckedCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s13_accouchementCreateWithoutRapportInput, Prisma.s13_accouchementUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_accouchementCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s13_accouchementWhereUniqueInput;
};
export type s13_accouchementUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s13_accouchementCreateWithoutRapportInput, Prisma.s13_accouchementUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_accouchementCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s13_accouchementUpsertWithoutRapportInput;
    disconnect?: Prisma.s13_accouchementWhereInput | boolean;
    delete?: Prisma.s13_accouchementWhereInput | boolean;
    connect?: Prisma.s13_accouchementWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s13_accouchementUpdateToOneWithWhereWithoutRapportInput, Prisma.s13_accouchementUpdateWithoutRapportInput>, Prisma.s13_accouchementUncheckedUpdateWithoutRapportInput>;
};
export type s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s13_accouchementCreateWithoutRapportInput, Prisma.s13_accouchementUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_accouchementCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s13_accouchementUpsertWithoutRapportInput;
    disconnect?: Prisma.s13_accouchementWhereInput | boolean;
    delete?: Prisma.s13_accouchementWhereInput | boolean;
    connect?: Prisma.s13_accouchementWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s13_accouchementUpdateToOneWithWhereWithoutRapportInput, Prisma.s13_accouchementUpdateWithoutRapportInput>, Prisma.s13_accouchementUncheckedUpdateWithoutRapportInput>;
};
export type s13_accouchementCreateWithoutRapportInput = {
    accouchement?: string | null;
    accouchement_heure?: Date | string | null;
    acces_refuse?: string | null;
};
export type s13_accouchementUncheckedCreateWithoutRapportInput = {
    id?: number;
    accouchement?: string | null;
    accouchement_heure?: Date | string | null;
    acces_refuse?: string | null;
};
export type s13_accouchementCreateOrConnectWithoutRapportInput = {
    where: Prisma.s13_accouchementWhereUniqueInput;
    create: Prisma.XOR<Prisma.s13_accouchementCreateWithoutRapportInput, Prisma.s13_accouchementUncheckedCreateWithoutRapportInput>;
};
export type s13_accouchementUpsertWithoutRapportInput = {
    update: Prisma.XOR<Prisma.s13_accouchementUpdateWithoutRapportInput, Prisma.s13_accouchementUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s13_accouchementCreateWithoutRapportInput, Prisma.s13_accouchementUncheckedCreateWithoutRapportInput>;
    where?: Prisma.s13_accouchementWhereInput;
};
export type s13_accouchementUpdateToOneWithWhereWithoutRapportInput = {
    where?: Prisma.s13_accouchementWhereInput;
    data: Prisma.XOR<Prisma.s13_accouchementUpdateWithoutRapportInput, Prisma.s13_accouchementUncheckedUpdateWithoutRapportInput>;
};
export type s13_accouchementUpdateWithoutRapportInput = {
    accouchement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accouchement_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acces_refuse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_accouchementUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    accouchement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accouchement_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acces_refuse?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_accouchementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    accouchement?: boolean;
    accouchement_heure?: boolean;
    acces_refuse?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_accouchement"]>;
export type s13_accouchementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    accouchement?: boolean;
    accouchement_heure?: boolean;
    acces_refuse?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_accouchement"]>;
export type s13_accouchementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    accouchement?: boolean;
    accouchement_heure?: boolean;
    acces_refuse?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_accouchement"]>;
export type s13_accouchementSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    accouchement?: boolean;
    accouchement_heure?: boolean;
    acces_refuse?: boolean;
};
export type s13_accouchementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "accouchement" | "accouchement_heure" | "acces_refuse", ExtArgs["result"]["s13_accouchement"]>;
export type s13_accouchementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s13_accouchementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s13_accouchementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s13_accouchementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s13_accouchement";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        accouchement: string | null;
        accouchement_heure: Date | null;
        acces_refuse: string | null;
    }, ExtArgs["result"]["s13_accouchement"]>;
    composites: {};
};
export type s13_accouchementGetPayload<S extends boolean | null | undefined | s13_accouchementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s13_accouchementPayload, S>;
export type s13_accouchementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s13_accouchementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S13_accouchementCountAggregateInputType | true;
};
export interface s13_accouchementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s13_accouchement'];
        meta: {
            name: 's13_accouchement';
        };
    };
    /**
     * Find zero or one S13_accouchement that matches the filter.
     * @param {s13_accouchementFindUniqueArgs} args - Arguments to find a S13_accouchement
     * @example
     * // Get one S13_accouchement
     * const s13_accouchement = await prisma.s13_accouchement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s13_accouchementFindUniqueArgs>(args: Prisma.SelectSubset<T, s13_accouchementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s13_accouchementClient<runtime.Types.Result.GetResult<Prisma.$s13_accouchementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S13_accouchement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s13_accouchementFindUniqueOrThrowArgs} args - Arguments to find a S13_accouchement
     * @example
     * // Get one S13_accouchement
     * const s13_accouchement = await prisma.s13_accouchement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s13_accouchementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s13_accouchementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s13_accouchementClient<runtime.Types.Result.GetResult<Prisma.$s13_accouchementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S13_accouchement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_accouchementFindFirstArgs} args - Arguments to find a S13_accouchement
     * @example
     * // Get one S13_accouchement
     * const s13_accouchement = await prisma.s13_accouchement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s13_accouchementFindFirstArgs>(args?: Prisma.SelectSubset<T, s13_accouchementFindFirstArgs<ExtArgs>>): Prisma.Prisma__s13_accouchementClient<runtime.Types.Result.GetResult<Prisma.$s13_accouchementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S13_accouchement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_accouchementFindFirstOrThrowArgs} args - Arguments to find a S13_accouchement
     * @example
     * // Get one S13_accouchement
     * const s13_accouchement = await prisma.s13_accouchement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s13_accouchementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s13_accouchementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s13_accouchementClient<runtime.Types.Result.GetResult<Prisma.$s13_accouchementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S13_accouchements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_accouchementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S13_accouchements
     * const s13_accouchements = await prisma.s13_accouchement.findMany()
     *
     * // Get first 10 S13_accouchements
     * const s13_accouchements = await prisma.s13_accouchement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s13_accouchementWithIdOnly = await prisma.s13_accouchement.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s13_accouchementFindManyArgs>(args?: Prisma.SelectSubset<T, s13_accouchementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_accouchementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S13_accouchement.
     * @param {s13_accouchementCreateArgs} args - Arguments to create a S13_accouchement.
     * @example
     * // Create one S13_accouchement
     * const S13_accouchement = await prisma.s13_accouchement.create({
     *   data: {
     *     // ... data to create a S13_accouchement
     *   }
     * })
     *
     */
    create<T extends s13_accouchementCreateArgs>(args: Prisma.SelectSubset<T, s13_accouchementCreateArgs<ExtArgs>>): Prisma.Prisma__s13_accouchementClient<runtime.Types.Result.GetResult<Prisma.$s13_accouchementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S13_accouchements.
     * @param {s13_accouchementCreateManyArgs} args - Arguments to create many S13_accouchements.
     * @example
     * // Create many S13_accouchements
     * const s13_accouchement = await prisma.s13_accouchement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s13_accouchementCreateManyArgs>(args?: Prisma.SelectSubset<T, s13_accouchementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S13_accouchements and returns the data saved in the database.
     * @param {s13_accouchementCreateManyAndReturnArgs} args - Arguments to create many S13_accouchements.
     * @example
     * // Create many S13_accouchements
     * const s13_accouchement = await prisma.s13_accouchement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S13_accouchements and only return the `id`
     * const s13_accouchementWithIdOnly = await prisma.s13_accouchement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s13_accouchementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s13_accouchementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_accouchementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S13_accouchement.
     * @param {s13_accouchementDeleteArgs} args - Arguments to delete one S13_accouchement.
     * @example
     * // Delete one S13_accouchement
     * const S13_accouchement = await prisma.s13_accouchement.delete({
     *   where: {
     *     // ... filter to delete one S13_accouchement
     *   }
     * })
     *
     */
    delete<T extends s13_accouchementDeleteArgs>(args: Prisma.SelectSubset<T, s13_accouchementDeleteArgs<ExtArgs>>): Prisma.Prisma__s13_accouchementClient<runtime.Types.Result.GetResult<Prisma.$s13_accouchementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S13_accouchement.
     * @param {s13_accouchementUpdateArgs} args - Arguments to update one S13_accouchement.
     * @example
     * // Update one S13_accouchement
     * const s13_accouchement = await prisma.s13_accouchement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s13_accouchementUpdateArgs>(args: Prisma.SelectSubset<T, s13_accouchementUpdateArgs<ExtArgs>>): Prisma.Prisma__s13_accouchementClient<runtime.Types.Result.GetResult<Prisma.$s13_accouchementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S13_accouchements.
     * @param {s13_accouchementDeleteManyArgs} args - Arguments to filter S13_accouchements to delete.
     * @example
     * // Delete a few S13_accouchements
     * const { count } = await prisma.s13_accouchement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s13_accouchementDeleteManyArgs>(args?: Prisma.SelectSubset<T, s13_accouchementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S13_accouchements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_accouchementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S13_accouchements
     * const s13_accouchement = await prisma.s13_accouchement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s13_accouchementUpdateManyArgs>(args: Prisma.SelectSubset<T, s13_accouchementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S13_accouchements and returns the data updated in the database.
     * @param {s13_accouchementUpdateManyAndReturnArgs} args - Arguments to update many S13_accouchements.
     * @example
     * // Update many S13_accouchements
     * const s13_accouchement = await prisma.s13_accouchement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S13_accouchements and only return the `id`
     * const s13_accouchementWithIdOnly = await prisma.s13_accouchement.updateManyAndReturn({
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
    updateManyAndReturn<T extends s13_accouchementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s13_accouchementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_accouchementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S13_accouchement.
     * @param {s13_accouchementUpsertArgs} args - Arguments to update or create a S13_accouchement.
     * @example
     * // Update or create a S13_accouchement
     * const s13_accouchement = await prisma.s13_accouchement.upsert({
     *   create: {
     *     // ... data to create a S13_accouchement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S13_accouchement we want to update
     *   }
     * })
     */
    upsert<T extends s13_accouchementUpsertArgs>(args: Prisma.SelectSubset<T, s13_accouchementUpsertArgs<ExtArgs>>): Prisma.Prisma__s13_accouchementClient<runtime.Types.Result.GetResult<Prisma.$s13_accouchementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S13_accouchements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_accouchementCountArgs} args - Arguments to filter S13_accouchements to count.
     * @example
     * // Count the number of S13_accouchements
     * const count = await prisma.s13_accouchement.count({
     *   where: {
     *     // ... the filter for the S13_accouchements we want to count
     *   }
     * })
    **/
    count<T extends s13_accouchementCountArgs>(args?: Prisma.Subset<T, s13_accouchementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S13_accouchementCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S13_accouchement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S13_accouchementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S13_accouchementAggregateArgs>(args: Prisma.Subset<T, S13_accouchementAggregateArgs>): Prisma.PrismaPromise<GetS13_accouchementAggregateType<T>>;
    /**
     * Group by S13_accouchement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_accouchementGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s13_accouchementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s13_accouchementGroupByArgs['orderBy'];
    } : {
        orderBy?: s13_accouchementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s13_accouchementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS13_accouchementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s13_accouchement model
     */
    readonly fields: s13_accouchementFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s13_accouchement.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s13_accouchementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rapport<T extends Prisma.r_rapport_prDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_prDefaultArgs<ExtArgs>>): Prisma.Prisma__r_rapport_prClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the s13_accouchement model
 */
export interface s13_accouchementFieldRefs {
    readonly id: Prisma.FieldRef<"s13_accouchement", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s13_accouchement", 'Int'>;
    readonly accouchement: Prisma.FieldRef<"s13_accouchement", 'String'>;
    readonly accouchement_heure: Prisma.FieldRef<"s13_accouchement", 'DateTime'>;
    readonly acces_refuse: Prisma.FieldRef<"s13_accouchement", 'String'>;
}
/**
 * s13_accouchement findUnique
 */
export type s13_accouchementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_accouchement
     */
    select?: Prisma.s13_accouchementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_accouchement
     */
    omit?: Prisma.s13_accouchementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_accouchementInclude<ExtArgs> | null;
    /**
     * Filter, which s13_accouchement to fetch.
     */
    where: Prisma.s13_accouchementWhereUniqueInput;
};
/**
 * s13_accouchement findUniqueOrThrow
 */
export type s13_accouchementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_accouchement
     */
    select?: Prisma.s13_accouchementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_accouchement
     */
    omit?: Prisma.s13_accouchementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_accouchementInclude<ExtArgs> | null;
    /**
     * Filter, which s13_accouchement to fetch.
     */
    where: Prisma.s13_accouchementWhereUniqueInput;
};
/**
 * s13_accouchement findFirst
 */
export type s13_accouchementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_accouchement
     */
    select?: Prisma.s13_accouchementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_accouchement
     */
    omit?: Prisma.s13_accouchementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_accouchementInclude<ExtArgs> | null;
    /**
     * Filter, which s13_accouchement to fetch.
     */
    where?: Prisma.s13_accouchementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_accouchements to fetch.
     */
    orderBy?: Prisma.s13_accouchementOrderByWithRelationInput | Prisma.s13_accouchementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s13_accouchements.
     */
    cursor?: Prisma.s13_accouchementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_accouchements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_accouchements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s13_accouchements.
     */
    distinct?: Prisma.S13_accouchementScalarFieldEnum | Prisma.S13_accouchementScalarFieldEnum[];
};
/**
 * s13_accouchement findFirstOrThrow
 */
export type s13_accouchementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_accouchement
     */
    select?: Prisma.s13_accouchementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_accouchement
     */
    omit?: Prisma.s13_accouchementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_accouchementInclude<ExtArgs> | null;
    /**
     * Filter, which s13_accouchement to fetch.
     */
    where?: Prisma.s13_accouchementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_accouchements to fetch.
     */
    orderBy?: Prisma.s13_accouchementOrderByWithRelationInput | Prisma.s13_accouchementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s13_accouchements.
     */
    cursor?: Prisma.s13_accouchementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_accouchements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_accouchements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s13_accouchements.
     */
    distinct?: Prisma.S13_accouchementScalarFieldEnum | Prisma.S13_accouchementScalarFieldEnum[];
};
/**
 * s13_accouchement findMany
 */
export type s13_accouchementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_accouchement
     */
    select?: Prisma.s13_accouchementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_accouchement
     */
    omit?: Prisma.s13_accouchementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_accouchementInclude<ExtArgs> | null;
    /**
     * Filter, which s13_accouchements to fetch.
     */
    where?: Prisma.s13_accouchementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_accouchements to fetch.
     */
    orderBy?: Prisma.s13_accouchementOrderByWithRelationInput | Prisma.s13_accouchementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s13_accouchements.
     */
    cursor?: Prisma.s13_accouchementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_accouchements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_accouchements.
     */
    skip?: number;
    distinct?: Prisma.S13_accouchementScalarFieldEnum | Prisma.S13_accouchementScalarFieldEnum[];
};
/**
 * s13_accouchement create
 */
export type s13_accouchementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_accouchement
     */
    select?: Prisma.s13_accouchementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_accouchement
     */
    omit?: Prisma.s13_accouchementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_accouchementInclude<ExtArgs> | null;
    /**
     * The data needed to create a s13_accouchement.
     */
    data: Prisma.XOR<Prisma.s13_accouchementCreateInput, Prisma.s13_accouchementUncheckedCreateInput>;
};
/**
 * s13_accouchement createMany
 */
export type s13_accouchementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s13_accouchements.
     */
    data: Prisma.s13_accouchementCreateManyInput | Prisma.s13_accouchementCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s13_accouchement createManyAndReturn
 */
export type s13_accouchementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_accouchement
     */
    select?: Prisma.s13_accouchementSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_accouchement
     */
    omit?: Prisma.s13_accouchementOmit<ExtArgs> | null;
    /**
     * The data used to create many s13_accouchements.
     */
    data: Prisma.s13_accouchementCreateManyInput | Prisma.s13_accouchementCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_accouchementIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s13_accouchement update
 */
export type s13_accouchementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_accouchement
     */
    select?: Prisma.s13_accouchementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_accouchement
     */
    omit?: Prisma.s13_accouchementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_accouchementInclude<ExtArgs> | null;
    /**
     * The data needed to update a s13_accouchement.
     */
    data: Prisma.XOR<Prisma.s13_accouchementUpdateInput, Prisma.s13_accouchementUncheckedUpdateInput>;
    /**
     * Choose, which s13_accouchement to update.
     */
    where: Prisma.s13_accouchementWhereUniqueInput;
};
/**
 * s13_accouchement updateMany
 */
export type s13_accouchementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s13_accouchements.
     */
    data: Prisma.XOR<Prisma.s13_accouchementUpdateManyMutationInput, Prisma.s13_accouchementUncheckedUpdateManyInput>;
    /**
     * Filter which s13_accouchements to update
     */
    where?: Prisma.s13_accouchementWhereInput;
    /**
     * Limit how many s13_accouchements to update.
     */
    limit?: number;
};
/**
 * s13_accouchement updateManyAndReturn
 */
export type s13_accouchementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_accouchement
     */
    select?: Prisma.s13_accouchementSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_accouchement
     */
    omit?: Prisma.s13_accouchementOmit<ExtArgs> | null;
    /**
     * The data used to update s13_accouchements.
     */
    data: Prisma.XOR<Prisma.s13_accouchementUpdateManyMutationInput, Prisma.s13_accouchementUncheckedUpdateManyInput>;
    /**
     * Filter which s13_accouchements to update
     */
    where?: Prisma.s13_accouchementWhereInput;
    /**
     * Limit how many s13_accouchements to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_accouchementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s13_accouchement upsert
 */
export type s13_accouchementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_accouchement
     */
    select?: Prisma.s13_accouchementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_accouchement
     */
    omit?: Prisma.s13_accouchementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_accouchementInclude<ExtArgs> | null;
    /**
     * The filter to search for the s13_accouchement to update in case it exists.
     */
    where: Prisma.s13_accouchementWhereUniqueInput;
    /**
     * In case the s13_accouchement found by the `where` argument doesn't exist, create a new s13_accouchement with this data.
     */
    create: Prisma.XOR<Prisma.s13_accouchementCreateInput, Prisma.s13_accouchementUncheckedCreateInput>;
    /**
     * In case the s13_accouchement was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s13_accouchementUpdateInput, Prisma.s13_accouchementUncheckedUpdateInput>;
};
/**
 * s13_accouchement delete
 */
export type s13_accouchementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_accouchement
     */
    select?: Prisma.s13_accouchementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_accouchement
     */
    omit?: Prisma.s13_accouchementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_accouchementInclude<ExtArgs> | null;
    /**
     * Filter which s13_accouchement to delete.
     */
    where: Prisma.s13_accouchementWhereUniqueInput;
};
/**
 * s13_accouchement deleteMany
 */
export type s13_accouchementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s13_accouchements to delete
     */
    where?: Prisma.s13_accouchementWhereInput;
    /**
     * Limit how many s13_accouchements to delete.
     */
    limit?: number;
};
/**
 * s13_accouchement without action
 */
export type s13_accouchementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_accouchement
     */
    select?: Prisma.s13_accouchementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_accouchement
     */
    omit?: Prisma.s13_accouchementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_accouchementInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s13_accouchement.d.ts.map