import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s13_info
 *
 */
export type s13_infoModel = runtime.Types.Result.DefaultSelection<Prisma.$s13_infoPayload>;
export type AggregateS13_info = {
    _count: S13_infoCountAggregateOutputType | null;
    _avg: S13_infoAvgAggregateOutputType | null;
    _sum: S13_infoSumAggregateOutputType | null;
    _min: S13_infoMinAggregateOutputType | null;
    _max: S13_infoMaxAggregateOutputType | null;
};
export type S13_infoAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S13_infoSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S13_infoMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    non_intervention: string | null;
    commentaire: string | null;
};
export type S13_infoMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    non_intervention: string | null;
    commentaire: string | null;
};
export type S13_infoCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    non_intervention: number;
    commentaire: number;
    _all: number;
};
export type S13_infoAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S13_infoSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S13_infoMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    non_intervention?: true;
    commentaire?: true;
};
export type S13_infoMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    non_intervention?: true;
    commentaire?: true;
};
export type S13_infoCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    non_intervention?: true;
    commentaire?: true;
    _all?: true;
};
export type S13_infoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s13_info to aggregate.
     */
    where?: Prisma.s13_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_infos to fetch.
     */
    orderBy?: Prisma.s13_infoOrderByWithRelationInput | Prisma.s13_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s13_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_infos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s13_infos
    **/
    _count?: true | S13_infoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S13_infoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S13_infoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S13_infoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S13_infoMaxAggregateInputType;
};
export type GetS13_infoAggregateType<T extends S13_infoAggregateArgs> = {
    [P in keyof T & keyof AggregateS13_info]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS13_info[P]> : Prisma.GetScalarType<T[P], AggregateS13_info[P]>;
};
export type s13_infoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s13_infoWhereInput;
    orderBy?: Prisma.s13_infoOrderByWithAggregationInput | Prisma.s13_infoOrderByWithAggregationInput[];
    by: Prisma.S13_infoScalarFieldEnum[] | Prisma.S13_infoScalarFieldEnum;
    having?: Prisma.s13_infoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S13_infoCountAggregateInputType | true;
    _avg?: S13_infoAvgAggregateInputType;
    _sum?: S13_infoSumAggregateInputType;
    _min?: S13_infoMinAggregateInputType;
    _max?: S13_infoMaxAggregateInputType;
};
export type S13_infoGroupByOutputType = {
    id: number;
    rapport_id: number;
    non_intervention: string | null;
    commentaire: string | null;
    _count: S13_infoCountAggregateOutputType | null;
    _avg: S13_infoAvgAggregateOutputType | null;
    _sum: S13_infoSumAggregateOutputType | null;
    _min: S13_infoMinAggregateOutputType | null;
    _max: S13_infoMaxAggregateOutputType | null;
};
type GetS13_infoGroupByPayload<T extends s13_infoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S13_infoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S13_infoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S13_infoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S13_infoGroupByOutputType[P]>;
}>>;
export type s13_infoWhereInput = {
    AND?: Prisma.s13_infoWhereInput | Prisma.s13_infoWhereInput[];
    OR?: Prisma.s13_infoWhereInput[];
    NOT?: Prisma.s13_infoWhereInput | Prisma.s13_infoWhereInput[];
    id?: Prisma.IntFilter<"s13_info"> | number;
    rapport_id?: Prisma.IntFilter<"s13_info"> | number;
    non_intervention?: Prisma.StringNullableFilter<"s13_info"> | string | null;
    commentaire?: Prisma.StringNullableFilter<"s13_info"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s13_infoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    non_intervention?: Prisma.SortOrderInput | Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s13_infoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id?: number;
    AND?: Prisma.s13_infoWhereInput | Prisma.s13_infoWhereInput[];
    OR?: Prisma.s13_infoWhereInput[];
    NOT?: Prisma.s13_infoWhereInput | Prisma.s13_infoWhereInput[];
    non_intervention?: Prisma.StringNullableFilter<"s13_info"> | string | null;
    commentaire?: Prisma.StringNullableFilter<"s13_info"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id" | "rapport_id">;
export type s13_infoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    non_intervention?: Prisma.SortOrderInput | Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s13_infoCountOrderByAggregateInput;
    _avg?: Prisma.s13_infoAvgOrderByAggregateInput;
    _max?: Prisma.s13_infoMaxOrderByAggregateInput;
    _min?: Prisma.s13_infoMinOrderByAggregateInput;
    _sum?: Prisma.s13_infoSumOrderByAggregateInput;
};
export type s13_infoScalarWhereWithAggregatesInput = {
    AND?: Prisma.s13_infoScalarWhereWithAggregatesInput | Prisma.s13_infoScalarWhereWithAggregatesInput[];
    OR?: Prisma.s13_infoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s13_infoScalarWhereWithAggregatesInput | Prisma.s13_infoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s13_info"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s13_info"> | number;
    non_intervention?: Prisma.StringNullableWithAggregatesFilter<"s13_info"> | string | null;
    commentaire?: Prisma.StringNullableWithAggregatesFilter<"s13_info"> | string | null;
};
export type s13_infoCreateInput = {
    non_intervention?: string | null;
    commentaire?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS13_infoInput;
};
export type s13_infoUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    non_intervention?: string | null;
    commentaire?: string | null;
};
export type s13_infoUpdateInput = {
    non_intervention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS13_infoNestedInput;
};
export type s13_infoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    non_intervention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_infoCreateManyInput = {
    id?: number;
    rapport_id: number;
    non_intervention?: string | null;
    commentaire?: string | null;
};
export type s13_infoUpdateManyMutationInput = {
    non_intervention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_infoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    non_intervention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type S13_infoNullableScalarRelationFilter = {
    is?: Prisma.s13_infoWhereInput | null;
    isNot?: Prisma.s13_infoWhereInput | null;
};
export type s13_infoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    non_intervention?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
};
export type s13_infoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s13_infoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    non_intervention?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
};
export type s13_infoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    non_intervention?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
};
export type s13_infoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s13_infoCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s13_infoCreateWithoutRapportInput, Prisma.s13_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_infoCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s13_infoWhereUniqueInput;
};
export type s13_infoUncheckedCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s13_infoCreateWithoutRapportInput, Prisma.s13_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_infoCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s13_infoWhereUniqueInput;
};
export type s13_infoUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s13_infoCreateWithoutRapportInput, Prisma.s13_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_infoCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s13_infoUpsertWithoutRapportInput;
    disconnect?: Prisma.s13_infoWhereInput | boolean;
    delete?: Prisma.s13_infoWhereInput | boolean;
    connect?: Prisma.s13_infoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s13_infoUpdateToOneWithWhereWithoutRapportInput, Prisma.s13_infoUpdateWithoutRapportInput>, Prisma.s13_infoUncheckedUpdateWithoutRapportInput>;
};
export type s13_infoUncheckedUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s13_infoCreateWithoutRapportInput, Prisma.s13_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_infoCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s13_infoUpsertWithoutRapportInput;
    disconnect?: Prisma.s13_infoWhereInput | boolean;
    delete?: Prisma.s13_infoWhereInput | boolean;
    connect?: Prisma.s13_infoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s13_infoUpdateToOneWithWhereWithoutRapportInput, Prisma.s13_infoUpdateWithoutRapportInput>, Prisma.s13_infoUncheckedUpdateWithoutRapportInput>;
};
export type s13_infoCreateWithoutRapportInput = {
    non_intervention?: string | null;
    commentaire?: string | null;
};
export type s13_infoUncheckedCreateWithoutRapportInput = {
    id?: number;
    non_intervention?: string | null;
    commentaire?: string | null;
};
export type s13_infoCreateOrConnectWithoutRapportInput = {
    where: Prisma.s13_infoWhereUniqueInput;
    create: Prisma.XOR<Prisma.s13_infoCreateWithoutRapportInput, Prisma.s13_infoUncheckedCreateWithoutRapportInput>;
};
export type s13_infoUpsertWithoutRapportInput = {
    update: Prisma.XOR<Prisma.s13_infoUpdateWithoutRapportInput, Prisma.s13_infoUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s13_infoCreateWithoutRapportInput, Prisma.s13_infoUncheckedCreateWithoutRapportInput>;
    where?: Prisma.s13_infoWhereInput;
};
export type s13_infoUpdateToOneWithWhereWithoutRapportInput = {
    where?: Prisma.s13_infoWhereInput;
    data: Prisma.XOR<Prisma.s13_infoUpdateWithoutRapportInput, Prisma.s13_infoUncheckedUpdateWithoutRapportInput>;
};
export type s13_infoUpdateWithoutRapportInput = {
    non_intervention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_infoUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    non_intervention?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_infoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    non_intervention?: boolean;
    commentaire?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_info"]>;
export type s13_infoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    non_intervention?: boolean;
    commentaire?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_info"]>;
export type s13_infoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    non_intervention?: boolean;
    commentaire?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_info"]>;
export type s13_infoSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    non_intervention?: boolean;
    commentaire?: boolean;
};
export type s13_infoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "non_intervention" | "commentaire", ExtArgs["result"]["s13_info"]>;
export type s13_infoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s13_infoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s13_infoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s13_infoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s13_info";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        non_intervention: string | null;
        commentaire: string | null;
    }, ExtArgs["result"]["s13_info"]>;
    composites: {};
};
export type s13_infoGetPayload<S extends boolean | null | undefined | s13_infoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s13_infoPayload, S>;
export type s13_infoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s13_infoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S13_infoCountAggregateInputType | true;
};
export interface s13_infoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s13_info'];
        meta: {
            name: 's13_info';
        };
    };
    /**
     * Find zero or one S13_info that matches the filter.
     * @param {s13_infoFindUniqueArgs} args - Arguments to find a S13_info
     * @example
     * // Get one S13_info
     * const s13_info = await prisma.s13_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s13_infoFindUniqueArgs>(args: Prisma.SelectSubset<T, s13_infoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s13_infoClient<runtime.Types.Result.GetResult<Prisma.$s13_infoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S13_info that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s13_infoFindUniqueOrThrowArgs} args - Arguments to find a S13_info
     * @example
     * // Get one S13_info
     * const s13_info = await prisma.s13_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s13_infoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s13_infoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s13_infoClient<runtime.Types.Result.GetResult<Prisma.$s13_infoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S13_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_infoFindFirstArgs} args - Arguments to find a S13_info
     * @example
     * // Get one S13_info
     * const s13_info = await prisma.s13_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s13_infoFindFirstArgs>(args?: Prisma.SelectSubset<T, s13_infoFindFirstArgs<ExtArgs>>): Prisma.Prisma__s13_infoClient<runtime.Types.Result.GetResult<Prisma.$s13_infoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S13_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_infoFindFirstOrThrowArgs} args - Arguments to find a S13_info
     * @example
     * // Get one S13_info
     * const s13_info = await prisma.s13_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s13_infoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s13_infoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s13_infoClient<runtime.Types.Result.GetResult<Prisma.$s13_infoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S13_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_infoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S13_infos
     * const s13_infos = await prisma.s13_info.findMany()
     *
     * // Get first 10 S13_infos
     * const s13_infos = await prisma.s13_info.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s13_infoWithIdOnly = await prisma.s13_info.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s13_infoFindManyArgs>(args?: Prisma.SelectSubset<T, s13_infoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_infoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S13_info.
     * @param {s13_infoCreateArgs} args - Arguments to create a S13_info.
     * @example
     * // Create one S13_info
     * const S13_info = await prisma.s13_info.create({
     *   data: {
     *     // ... data to create a S13_info
     *   }
     * })
     *
     */
    create<T extends s13_infoCreateArgs>(args: Prisma.SelectSubset<T, s13_infoCreateArgs<ExtArgs>>): Prisma.Prisma__s13_infoClient<runtime.Types.Result.GetResult<Prisma.$s13_infoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S13_infos.
     * @param {s13_infoCreateManyArgs} args - Arguments to create many S13_infos.
     * @example
     * // Create many S13_infos
     * const s13_info = await prisma.s13_info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s13_infoCreateManyArgs>(args?: Prisma.SelectSubset<T, s13_infoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S13_infos and returns the data saved in the database.
     * @param {s13_infoCreateManyAndReturnArgs} args - Arguments to create many S13_infos.
     * @example
     * // Create many S13_infos
     * const s13_info = await prisma.s13_info.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S13_infos and only return the `id`
     * const s13_infoWithIdOnly = await prisma.s13_info.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s13_infoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s13_infoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_infoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S13_info.
     * @param {s13_infoDeleteArgs} args - Arguments to delete one S13_info.
     * @example
     * // Delete one S13_info
     * const S13_info = await prisma.s13_info.delete({
     *   where: {
     *     // ... filter to delete one S13_info
     *   }
     * })
     *
     */
    delete<T extends s13_infoDeleteArgs>(args: Prisma.SelectSubset<T, s13_infoDeleteArgs<ExtArgs>>): Prisma.Prisma__s13_infoClient<runtime.Types.Result.GetResult<Prisma.$s13_infoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S13_info.
     * @param {s13_infoUpdateArgs} args - Arguments to update one S13_info.
     * @example
     * // Update one S13_info
     * const s13_info = await prisma.s13_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s13_infoUpdateArgs>(args: Prisma.SelectSubset<T, s13_infoUpdateArgs<ExtArgs>>): Prisma.Prisma__s13_infoClient<runtime.Types.Result.GetResult<Prisma.$s13_infoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S13_infos.
     * @param {s13_infoDeleteManyArgs} args - Arguments to filter S13_infos to delete.
     * @example
     * // Delete a few S13_infos
     * const { count } = await prisma.s13_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s13_infoDeleteManyArgs>(args?: Prisma.SelectSubset<T, s13_infoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S13_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S13_infos
     * const s13_info = await prisma.s13_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s13_infoUpdateManyArgs>(args: Prisma.SelectSubset<T, s13_infoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S13_infos and returns the data updated in the database.
     * @param {s13_infoUpdateManyAndReturnArgs} args - Arguments to update many S13_infos.
     * @example
     * // Update many S13_infos
     * const s13_info = await prisma.s13_info.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S13_infos and only return the `id`
     * const s13_infoWithIdOnly = await prisma.s13_info.updateManyAndReturn({
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
    updateManyAndReturn<T extends s13_infoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s13_infoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_infoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S13_info.
     * @param {s13_infoUpsertArgs} args - Arguments to update or create a S13_info.
     * @example
     * // Update or create a S13_info
     * const s13_info = await prisma.s13_info.upsert({
     *   create: {
     *     // ... data to create a S13_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S13_info we want to update
     *   }
     * })
     */
    upsert<T extends s13_infoUpsertArgs>(args: Prisma.SelectSubset<T, s13_infoUpsertArgs<ExtArgs>>): Prisma.Prisma__s13_infoClient<runtime.Types.Result.GetResult<Prisma.$s13_infoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S13_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_infoCountArgs} args - Arguments to filter S13_infos to count.
     * @example
     * // Count the number of S13_infos
     * const count = await prisma.s13_info.count({
     *   where: {
     *     // ... the filter for the S13_infos we want to count
     *   }
     * })
    **/
    count<T extends s13_infoCountArgs>(args?: Prisma.Subset<T, s13_infoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S13_infoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S13_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S13_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S13_infoAggregateArgs>(args: Prisma.Subset<T, S13_infoAggregateArgs>): Prisma.PrismaPromise<GetS13_infoAggregateType<T>>;
    /**
     * Group by S13_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_infoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s13_infoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s13_infoGroupByArgs['orderBy'];
    } : {
        orderBy?: s13_infoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s13_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS13_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s13_info model
     */
    readonly fields: s13_infoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s13_info.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s13_infoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the s13_info model
 */
export interface s13_infoFieldRefs {
    readonly id: Prisma.FieldRef<"s13_info", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s13_info", 'Int'>;
    readonly non_intervention: Prisma.FieldRef<"s13_info", 'String'>;
    readonly commentaire: Prisma.FieldRef<"s13_info", 'String'>;
}
/**
 * s13_info findUnique
 */
export type s13_infoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_info
     */
    select?: Prisma.s13_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_info
     */
    omit?: Prisma.s13_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s13_info to fetch.
     */
    where: Prisma.s13_infoWhereUniqueInput;
};
/**
 * s13_info findUniqueOrThrow
 */
export type s13_infoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_info
     */
    select?: Prisma.s13_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_info
     */
    omit?: Prisma.s13_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s13_info to fetch.
     */
    where: Prisma.s13_infoWhereUniqueInput;
};
/**
 * s13_info findFirst
 */
export type s13_infoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_info
     */
    select?: Prisma.s13_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_info
     */
    omit?: Prisma.s13_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s13_info to fetch.
     */
    where?: Prisma.s13_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_infos to fetch.
     */
    orderBy?: Prisma.s13_infoOrderByWithRelationInput | Prisma.s13_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s13_infos.
     */
    cursor?: Prisma.s13_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_infos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s13_infos.
     */
    distinct?: Prisma.S13_infoScalarFieldEnum | Prisma.S13_infoScalarFieldEnum[];
};
/**
 * s13_info findFirstOrThrow
 */
export type s13_infoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_info
     */
    select?: Prisma.s13_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_info
     */
    omit?: Prisma.s13_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s13_info to fetch.
     */
    where?: Prisma.s13_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_infos to fetch.
     */
    orderBy?: Prisma.s13_infoOrderByWithRelationInput | Prisma.s13_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s13_infos.
     */
    cursor?: Prisma.s13_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_infos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s13_infos.
     */
    distinct?: Prisma.S13_infoScalarFieldEnum | Prisma.S13_infoScalarFieldEnum[];
};
/**
 * s13_info findMany
 */
export type s13_infoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_info
     */
    select?: Prisma.s13_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_info
     */
    omit?: Prisma.s13_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s13_infos to fetch.
     */
    where?: Prisma.s13_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_infos to fetch.
     */
    orderBy?: Prisma.s13_infoOrderByWithRelationInput | Prisma.s13_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s13_infos.
     */
    cursor?: Prisma.s13_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_infos.
     */
    skip?: number;
    distinct?: Prisma.S13_infoScalarFieldEnum | Prisma.S13_infoScalarFieldEnum[];
};
/**
 * s13_info create
 */
export type s13_infoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_info
     */
    select?: Prisma.s13_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_info
     */
    omit?: Prisma.s13_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_infoInclude<ExtArgs> | null;
    /**
     * The data needed to create a s13_info.
     */
    data: Prisma.XOR<Prisma.s13_infoCreateInput, Prisma.s13_infoUncheckedCreateInput>;
};
/**
 * s13_info createMany
 */
export type s13_infoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s13_infos.
     */
    data: Prisma.s13_infoCreateManyInput | Prisma.s13_infoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s13_info createManyAndReturn
 */
export type s13_infoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_info
     */
    select?: Prisma.s13_infoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_info
     */
    omit?: Prisma.s13_infoOmit<ExtArgs> | null;
    /**
     * The data used to create many s13_infos.
     */
    data: Prisma.s13_infoCreateManyInput | Prisma.s13_infoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_infoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s13_info update
 */
export type s13_infoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_info
     */
    select?: Prisma.s13_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_info
     */
    omit?: Prisma.s13_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_infoInclude<ExtArgs> | null;
    /**
     * The data needed to update a s13_info.
     */
    data: Prisma.XOR<Prisma.s13_infoUpdateInput, Prisma.s13_infoUncheckedUpdateInput>;
    /**
     * Choose, which s13_info to update.
     */
    where: Prisma.s13_infoWhereUniqueInput;
};
/**
 * s13_info updateMany
 */
export type s13_infoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s13_infos.
     */
    data: Prisma.XOR<Prisma.s13_infoUpdateManyMutationInput, Prisma.s13_infoUncheckedUpdateManyInput>;
    /**
     * Filter which s13_infos to update
     */
    where?: Prisma.s13_infoWhereInput;
    /**
     * Limit how many s13_infos to update.
     */
    limit?: number;
};
/**
 * s13_info updateManyAndReturn
 */
export type s13_infoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_info
     */
    select?: Prisma.s13_infoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_info
     */
    omit?: Prisma.s13_infoOmit<ExtArgs> | null;
    /**
     * The data used to update s13_infos.
     */
    data: Prisma.XOR<Prisma.s13_infoUpdateManyMutationInput, Prisma.s13_infoUncheckedUpdateManyInput>;
    /**
     * Filter which s13_infos to update
     */
    where?: Prisma.s13_infoWhereInput;
    /**
     * Limit how many s13_infos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_infoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s13_info upsert
 */
export type s13_infoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_info
     */
    select?: Prisma.s13_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_info
     */
    omit?: Prisma.s13_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_infoInclude<ExtArgs> | null;
    /**
     * The filter to search for the s13_info to update in case it exists.
     */
    where: Prisma.s13_infoWhereUniqueInput;
    /**
     * In case the s13_info found by the `where` argument doesn't exist, create a new s13_info with this data.
     */
    create: Prisma.XOR<Prisma.s13_infoCreateInput, Prisma.s13_infoUncheckedCreateInput>;
    /**
     * In case the s13_info was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s13_infoUpdateInput, Prisma.s13_infoUncheckedUpdateInput>;
};
/**
 * s13_info delete
 */
export type s13_infoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_info
     */
    select?: Prisma.s13_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_info
     */
    omit?: Prisma.s13_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_infoInclude<ExtArgs> | null;
    /**
     * Filter which s13_info to delete.
     */
    where: Prisma.s13_infoWhereUniqueInput;
};
/**
 * s13_info deleteMany
 */
export type s13_infoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s13_infos to delete
     */
    where?: Prisma.s13_infoWhereInput;
    /**
     * Limit how many s13_infos to delete.
     */
    limit?: number;
};
/**
 * s13_info without action
 */
export type s13_infoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_info
     */
    select?: Prisma.s13_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_info
     */
    omit?: Prisma.s13_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_infoInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s13_info.d.ts.map