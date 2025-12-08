import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s05_nature_cas_info
 *
 */
export type s05_nature_cas_infoModel = runtime.Types.Result.DefaultSelection<Prisma.$s05_nature_cas_infoPayload>;
export type AggregateS05_nature_cas_info = {
    _count: S05_nature_cas_infoCountAggregateOutputType | null;
    _avg: S05_nature_cas_infoAvgAggregateOutputType | null;
    _sum: S05_nature_cas_infoSumAggregateOutputType | null;
    _min: S05_nature_cas_infoMinAggregateOutputType | null;
    _max: S05_nature_cas_infoMaxAggregateOutputType | null;
};
export type S05_nature_cas_infoAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S05_nature_cas_infoSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S05_nature_cas_infoMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    nature_cas_autre: string | null;
};
export type S05_nature_cas_infoMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    nature_cas_autre: string | null;
};
export type S05_nature_cas_infoCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    nature_cas_autre: number;
    _all: number;
};
export type S05_nature_cas_infoAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S05_nature_cas_infoSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S05_nature_cas_infoMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    nature_cas_autre?: true;
};
export type S05_nature_cas_infoMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    nature_cas_autre?: true;
};
export type S05_nature_cas_infoCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    nature_cas_autre?: true;
    _all?: true;
};
export type S05_nature_cas_infoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s05_nature_cas_info to aggregate.
     */
    where?: Prisma.s05_nature_cas_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s05_nature_cas_infos to fetch.
     */
    orderBy?: Prisma.s05_nature_cas_infoOrderByWithRelationInput | Prisma.s05_nature_cas_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s05_nature_cas_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s05_nature_cas_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s05_nature_cas_infos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s05_nature_cas_infos
    **/
    _count?: true | S05_nature_cas_infoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S05_nature_cas_infoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S05_nature_cas_infoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S05_nature_cas_infoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S05_nature_cas_infoMaxAggregateInputType;
};
export type GetS05_nature_cas_infoAggregateType<T extends S05_nature_cas_infoAggregateArgs> = {
    [P in keyof T & keyof AggregateS05_nature_cas_info]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS05_nature_cas_info[P]> : Prisma.GetScalarType<T[P], AggregateS05_nature_cas_info[P]>;
};
export type s05_nature_cas_infoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s05_nature_cas_infoWhereInput;
    orderBy?: Prisma.s05_nature_cas_infoOrderByWithAggregationInput | Prisma.s05_nature_cas_infoOrderByWithAggregationInput[];
    by: Prisma.S05_nature_cas_infoScalarFieldEnum[] | Prisma.S05_nature_cas_infoScalarFieldEnum;
    having?: Prisma.s05_nature_cas_infoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S05_nature_cas_infoCountAggregateInputType | true;
    _avg?: S05_nature_cas_infoAvgAggregateInputType;
    _sum?: S05_nature_cas_infoSumAggregateInputType;
    _min?: S05_nature_cas_infoMinAggregateInputType;
    _max?: S05_nature_cas_infoMaxAggregateInputType;
};
export type S05_nature_cas_infoGroupByOutputType = {
    id: number;
    rapport_id: number;
    nature_cas_autre: string | null;
    _count: S05_nature_cas_infoCountAggregateOutputType | null;
    _avg: S05_nature_cas_infoAvgAggregateOutputType | null;
    _sum: S05_nature_cas_infoSumAggregateOutputType | null;
    _min: S05_nature_cas_infoMinAggregateOutputType | null;
    _max: S05_nature_cas_infoMaxAggregateOutputType | null;
};
type GetS05_nature_cas_infoGroupByPayload<T extends s05_nature_cas_infoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S05_nature_cas_infoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S05_nature_cas_infoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S05_nature_cas_infoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S05_nature_cas_infoGroupByOutputType[P]>;
}>>;
export type s05_nature_cas_infoWhereInput = {
    AND?: Prisma.s05_nature_cas_infoWhereInput | Prisma.s05_nature_cas_infoWhereInput[];
    OR?: Prisma.s05_nature_cas_infoWhereInput[];
    NOT?: Prisma.s05_nature_cas_infoWhereInput | Prisma.s05_nature_cas_infoWhereInput[];
    id?: Prisma.IntFilter<"s05_nature_cas_info"> | number;
    rapport_id?: Prisma.IntFilter<"s05_nature_cas_info"> | number;
    nature_cas_autre?: Prisma.StringNullableFilter<"s05_nature_cas_info"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s05_nature_cas_infoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    nature_cas_autre?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s05_nature_cas_infoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id?: number;
    AND?: Prisma.s05_nature_cas_infoWhereInput | Prisma.s05_nature_cas_infoWhereInput[];
    OR?: Prisma.s05_nature_cas_infoWhereInput[];
    NOT?: Prisma.s05_nature_cas_infoWhereInput | Prisma.s05_nature_cas_infoWhereInput[];
    nature_cas_autre?: Prisma.StringNullableFilter<"s05_nature_cas_info"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id" | "rapport_id">;
export type s05_nature_cas_infoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    nature_cas_autre?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s05_nature_cas_infoCountOrderByAggregateInput;
    _avg?: Prisma.s05_nature_cas_infoAvgOrderByAggregateInput;
    _max?: Prisma.s05_nature_cas_infoMaxOrderByAggregateInput;
    _min?: Prisma.s05_nature_cas_infoMinOrderByAggregateInput;
    _sum?: Prisma.s05_nature_cas_infoSumOrderByAggregateInput;
};
export type s05_nature_cas_infoScalarWhereWithAggregatesInput = {
    AND?: Prisma.s05_nature_cas_infoScalarWhereWithAggregatesInput | Prisma.s05_nature_cas_infoScalarWhereWithAggregatesInput[];
    OR?: Prisma.s05_nature_cas_infoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s05_nature_cas_infoScalarWhereWithAggregatesInput | Prisma.s05_nature_cas_infoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s05_nature_cas_info"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s05_nature_cas_info"> | number;
    nature_cas_autre?: Prisma.StringNullableWithAggregatesFilter<"s05_nature_cas_info"> | string | null;
};
export type s05_nature_cas_infoCreateInput = {
    nature_cas_autre?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS05_nature_cas_infoInput;
};
export type s05_nature_cas_infoUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    nature_cas_autre?: string | null;
};
export type s05_nature_cas_infoUpdateInput = {
    nature_cas_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS05_nature_cas_infoNestedInput;
};
export type s05_nature_cas_infoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nature_cas_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s05_nature_cas_infoCreateManyInput = {
    id?: number;
    rapport_id: number;
    nature_cas_autre?: string | null;
};
export type s05_nature_cas_infoUpdateManyMutationInput = {
    nature_cas_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s05_nature_cas_infoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nature_cas_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type S05_nature_cas_infoNullableScalarRelationFilter = {
    is?: Prisma.s05_nature_cas_infoWhereInput | null;
    isNot?: Prisma.s05_nature_cas_infoWhereInput | null;
};
export type s05_nature_cas_infoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    nature_cas_autre?: Prisma.SortOrder;
};
export type s05_nature_cas_infoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s05_nature_cas_infoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    nature_cas_autre?: Prisma.SortOrder;
};
export type s05_nature_cas_infoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    nature_cas_autre?: Prisma.SortOrder;
};
export type s05_nature_cas_infoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s05_nature_cas_infoCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s05_nature_cas_infoCreateWithoutRapportInput, Prisma.s05_nature_cas_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s05_nature_cas_infoCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s05_nature_cas_infoWhereUniqueInput;
};
export type s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s05_nature_cas_infoCreateWithoutRapportInput, Prisma.s05_nature_cas_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s05_nature_cas_infoCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s05_nature_cas_infoWhereUniqueInput;
};
export type s05_nature_cas_infoUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s05_nature_cas_infoCreateWithoutRapportInput, Prisma.s05_nature_cas_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s05_nature_cas_infoCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s05_nature_cas_infoUpsertWithoutRapportInput;
    disconnect?: Prisma.s05_nature_cas_infoWhereInput | boolean;
    delete?: Prisma.s05_nature_cas_infoWhereInput | boolean;
    connect?: Prisma.s05_nature_cas_infoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s05_nature_cas_infoUpdateToOneWithWhereWithoutRapportInput, Prisma.s05_nature_cas_infoUpdateWithoutRapportInput>, Prisma.s05_nature_cas_infoUncheckedUpdateWithoutRapportInput>;
};
export type s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s05_nature_cas_infoCreateWithoutRapportInput, Prisma.s05_nature_cas_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s05_nature_cas_infoCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s05_nature_cas_infoUpsertWithoutRapportInput;
    disconnect?: Prisma.s05_nature_cas_infoWhereInput | boolean;
    delete?: Prisma.s05_nature_cas_infoWhereInput | boolean;
    connect?: Prisma.s05_nature_cas_infoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s05_nature_cas_infoUpdateToOneWithWhereWithoutRapportInput, Prisma.s05_nature_cas_infoUpdateWithoutRapportInput>, Prisma.s05_nature_cas_infoUncheckedUpdateWithoutRapportInput>;
};
export type s05_nature_cas_infoCreateWithoutRapportInput = {
    nature_cas_autre?: string | null;
};
export type s05_nature_cas_infoUncheckedCreateWithoutRapportInput = {
    id?: number;
    nature_cas_autre?: string | null;
};
export type s05_nature_cas_infoCreateOrConnectWithoutRapportInput = {
    where: Prisma.s05_nature_cas_infoWhereUniqueInput;
    create: Prisma.XOR<Prisma.s05_nature_cas_infoCreateWithoutRapportInput, Prisma.s05_nature_cas_infoUncheckedCreateWithoutRapportInput>;
};
export type s05_nature_cas_infoUpsertWithoutRapportInput = {
    update: Prisma.XOR<Prisma.s05_nature_cas_infoUpdateWithoutRapportInput, Prisma.s05_nature_cas_infoUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s05_nature_cas_infoCreateWithoutRapportInput, Prisma.s05_nature_cas_infoUncheckedCreateWithoutRapportInput>;
    where?: Prisma.s05_nature_cas_infoWhereInput;
};
export type s05_nature_cas_infoUpdateToOneWithWhereWithoutRapportInput = {
    where?: Prisma.s05_nature_cas_infoWhereInput;
    data: Prisma.XOR<Prisma.s05_nature_cas_infoUpdateWithoutRapportInput, Prisma.s05_nature_cas_infoUncheckedUpdateWithoutRapportInput>;
};
export type s05_nature_cas_infoUpdateWithoutRapportInput = {
    nature_cas_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s05_nature_cas_infoUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nature_cas_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s05_nature_cas_infoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    nature_cas_autre?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s05_nature_cas_info"]>;
export type s05_nature_cas_infoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    nature_cas_autre?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s05_nature_cas_info"]>;
export type s05_nature_cas_infoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    nature_cas_autre?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s05_nature_cas_info"]>;
export type s05_nature_cas_infoSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    nature_cas_autre?: boolean;
};
export type s05_nature_cas_infoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "nature_cas_autre", ExtArgs["result"]["s05_nature_cas_info"]>;
export type s05_nature_cas_infoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s05_nature_cas_infoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s05_nature_cas_infoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s05_nature_cas_infoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s05_nature_cas_info";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        nature_cas_autre: string | null;
    }, ExtArgs["result"]["s05_nature_cas_info"]>;
    composites: {};
};
export type s05_nature_cas_infoGetPayload<S extends boolean | null | undefined | s05_nature_cas_infoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_infoPayload, S>;
export type s05_nature_cas_infoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s05_nature_cas_infoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S05_nature_cas_infoCountAggregateInputType | true;
};
export interface s05_nature_cas_infoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s05_nature_cas_info'];
        meta: {
            name: 's05_nature_cas_info';
        };
    };
    /**
     * Find zero or one S05_nature_cas_info that matches the filter.
     * @param {s05_nature_cas_infoFindUniqueArgs} args - Arguments to find a S05_nature_cas_info
     * @example
     * // Get one S05_nature_cas_info
     * const s05_nature_cas_info = await prisma.s05_nature_cas_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s05_nature_cas_infoFindUniqueArgs>(args: Prisma.SelectSubset<T, s05_nature_cas_infoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s05_nature_cas_infoClient<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_infoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S05_nature_cas_info that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s05_nature_cas_infoFindUniqueOrThrowArgs} args - Arguments to find a S05_nature_cas_info
     * @example
     * // Get one S05_nature_cas_info
     * const s05_nature_cas_info = await prisma.s05_nature_cas_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s05_nature_cas_infoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s05_nature_cas_infoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s05_nature_cas_infoClient<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_infoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S05_nature_cas_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s05_nature_cas_infoFindFirstArgs} args - Arguments to find a S05_nature_cas_info
     * @example
     * // Get one S05_nature_cas_info
     * const s05_nature_cas_info = await prisma.s05_nature_cas_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s05_nature_cas_infoFindFirstArgs>(args?: Prisma.SelectSubset<T, s05_nature_cas_infoFindFirstArgs<ExtArgs>>): Prisma.Prisma__s05_nature_cas_infoClient<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_infoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S05_nature_cas_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s05_nature_cas_infoFindFirstOrThrowArgs} args - Arguments to find a S05_nature_cas_info
     * @example
     * // Get one S05_nature_cas_info
     * const s05_nature_cas_info = await prisma.s05_nature_cas_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s05_nature_cas_infoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s05_nature_cas_infoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s05_nature_cas_infoClient<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_infoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S05_nature_cas_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s05_nature_cas_infoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S05_nature_cas_infos
     * const s05_nature_cas_infos = await prisma.s05_nature_cas_info.findMany()
     *
     * // Get first 10 S05_nature_cas_infos
     * const s05_nature_cas_infos = await prisma.s05_nature_cas_info.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s05_nature_cas_infoWithIdOnly = await prisma.s05_nature_cas_info.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s05_nature_cas_infoFindManyArgs>(args?: Prisma.SelectSubset<T, s05_nature_cas_infoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_infoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S05_nature_cas_info.
     * @param {s05_nature_cas_infoCreateArgs} args - Arguments to create a S05_nature_cas_info.
     * @example
     * // Create one S05_nature_cas_info
     * const S05_nature_cas_info = await prisma.s05_nature_cas_info.create({
     *   data: {
     *     // ... data to create a S05_nature_cas_info
     *   }
     * })
     *
     */
    create<T extends s05_nature_cas_infoCreateArgs>(args: Prisma.SelectSubset<T, s05_nature_cas_infoCreateArgs<ExtArgs>>): Prisma.Prisma__s05_nature_cas_infoClient<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_infoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S05_nature_cas_infos.
     * @param {s05_nature_cas_infoCreateManyArgs} args - Arguments to create many S05_nature_cas_infos.
     * @example
     * // Create many S05_nature_cas_infos
     * const s05_nature_cas_info = await prisma.s05_nature_cas_info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s05_nature_cas_infoCreateManyArgs>(args?: Prisma.SelectSubset<T, s05_nature_cas_infoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S05_nature_cas_infos and returns the data saved in the database.
     * @param {s05_nature_cas_infoCreateManyAndReturnArgs} args - Arguments to create many S05_nature_cas_infos.
     * @example
     * // Create many S05_nature_cas_infos
     * const s05_nature_cas_info = await prisma.s05_nature_cas_info.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S05_nature_cas_infos and only return the `id`
     * const s05_nature_cas_infoWithIdOnly = await prisma.s05_nature_cas_info.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s05_nature_cas_infoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s05_nature_cas_infoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_infoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S05_nature_cas_info.
     * @param {s05_nature_cas_infoDeleteArgs} args - Arguments to delete one S05_nature_cas_info.
     * @example
     * // Delete one S05_nature_cas_info
     * const S05_nature_cas_info = await prisma.s05_nature_cas_info.delete({
     *   where: {
     *     // ... filter to delete one S05_nature_cas_info
     *   }
     * })
     *
     */
    delete<T extends s05_nature_cas_infoDeleteArgs>(args: Prisma.SelectSubset<T, s05_nature_cas_infoDeleteArgs<ExtArgs>>): Prisma.Prisma__s05_nature_cas_infoClient<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_infoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S05_nature_cas_info.
     * @param {s05_nature_cas_infoUpdateArgs} args - Arguments to update one S05_nature_cas_info.
     * @example
     * // Update one S05_nature_cas_info
     * const s05_nature_cas_info = await prisma.s05_nature_cas_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s05_nature_cas_infoUpdateArgs>(args: Prisma.SelectSubset<T, s05_nature_cas_infoUpdateArgs<ExtArgs>>): Prisma.Prisma__s05_nature_cas_infoClient<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_infoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S05_nature_cas_infos.
     * @param {s05_nature_cas_infoDeleteManyArgs} args - Arguments to filter S05_nature_cas_infos to delete.
     * @example
     * // Delete a few S05_nature_cas_infos
     * const { count } = await prisma.s05_nature_cas_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s05_nature_cas_infoDeleteManyArgs>(args?: Prisma.SelectSubset<T, s05_nature_cas_infoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S05_nature_cas_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s05_nature_cas_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S05_nature_cas_infos
     * const s05_nature_cas_info = await prisma.s05_nature_cas_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s05_nature_cas_infoUpdateManyArgs>(args: Prisma.SelectSubset<T, s05_nature_cas_infoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S05_nature_cas_infos and returns the data updated in the database.
     * @param {s05_nature_cas_infoUpdateManyAndReturnArgs} args - Arguments to update many S05_nature_cas_infos.
     * @example
     * // Update many S05_nature_cas_infos
     * const s05_nature_cas_info = await prisma.s05_nature_cas_info.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S05_nature_cas_infos and only return the `id`
     * const s05_nature_cas_infoWithIdOnly = await prisma.s05_nature_cas_info.updateManyAndReturn({
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
    updateManyAndReturn<T extends s05_nature_cas_infoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s05_nature_cas_infoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_infoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S05_nature_cas_info.
     * @param {s05_nature_cas_infoUpsertArgs} args - Arguments to update or create a S05_nature_cas_info.
     * @example
     * // Update or create a S05_nature_cas_info
     * const s05_nature_cas_info = await prisma.s05_nature_cas_info.upsert({
     *   create: {
     *     // ... data to create a S05_nature_cas_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S05_nature_cas_info we want to update
     *   }
     * })
     */
    upsert<T extends s05_nature_cas_infoUpsertArgs>(args: Prisma.SelectSubset<T, s05_nature_cas_infoUpsertArgs<ExtArgs>>): Prisma.Prisma__s05_nature_cas_infoClient<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_infoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S05_nature_cas_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s05_nature_cas_infoCountArgs} args - Arguments to filter S05_nature_cas_infos to count.
     * @example
     * // Count the number of S05_nature_cas_infos
     * const count = await prisma.s05_nature_cas_info.count({
     *   where: {
     *     // ... the filter for the S05_nature_cas_infos we want to count
     *   }
     * })
    **/
    count<T extends s05_nature_cas_infoCountArgs>(args?: Prisma.Subset<T, s05_nature_cas_infoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S05_nature_cas_infoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S05_nature_cas_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S05_nature_cas_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S05_nature_cas_infoAggregateArgs>(args: Prisma.Subset<T, S05_nature_cas_infoAggregateArgs>): Prisma.PrismaPromise<GetS05_nature_cas_infoAggregateType<T>>;
    /**
     * Group by S05_nature_cas_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s05_nature_cas_infoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s05_nature_cas_infoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s05_nature_cas_infoGroupByArgs['orderBy'];
    } : {
        orderBy?: s05_nature_cas_infoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s05_nature_cas_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS05_nature_cas_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s05_nature_cas_info model
     */
    readonly fields: s05_nature_cas_infoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s05_nature_cas_info.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s05_nature_cas_infoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the s05_nature_cas_info model
 */
export interface s05_nature_cas_infoFieldRefs {
    readonly id: Prisma.FieldRef<"s05_nature_cas_info", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s05_nature_cas_info", 'Int'>;
    readonly nature_cas_autre: Prisma.FieldRef<"s05_nature_cas_info", 'String'>;
}
/**
 * s05_nature_cas_info findUnique
 */
export type s05_nature_cas_infoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_info
     */
    select?: Prisma.s05_nature_cas_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_info
     */
    omit?: Prisma.s05_nature_cas_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s05_nature_cas_info to fetch.
     */
    where: Prisma.s05_nature_cas_infoWhereUniqueInput;
};
/**
 * s05_nature_cas_info findUniqueOrThrow
 */
export type s05_nature_cas_infoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_info
     */
    select?: Prisma.s05_nature_cas_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_info
     */
    omit?: Prisma.s05_nature_cas_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s05_nature_cas_info to fetch.
     */
    where: Prisma.s05_nature_cas_infoWhereUniqueInput;
};
/**
 * s05_nature_cas_info findFirst
 */
export type s05_nature_cas_infoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_info
     */
    select?: Prisma.s05_nature_cas_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_info
     */
    omit?: Prisma.s05_nature_cas_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s05_nature_cas_info to fetch.
     */
    where?: Prisma.s05_nature_cas_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s05_nature_cas_infos to fetch.
     */
    orderBy?: Prisma.s05_nature_cas_infoOrderByWithRelationInput | Prisma.s05_nature_cas_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s05_nature_cas_infos.
     */
    cursor?: Prisma.s05_nature_cas_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s05_nature_cas_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s05_nature_cas_infos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s05_nature_cas_infos.
     */
    distinct?: Prisma.S05_nature_cas_infoScalarFieldEnum | Prisma.S05_nature_cas_infoScalarFieldEnum[];
};
/**
 * s05_nature_cas_info findFirstOrThrow
 */
export type s05_nature_cas_infoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_info
     */
    select?: Prisma.s05_nature_cas_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_info
     */
    omit?: Prisma.s05_nature_cas_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s05_nature_cas_info to fetch.
     */
    where?: Prisma.s05_nature_cas_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s05_nature_cas_infos to fetch.
     */
    orderBy?: Prisma.s05_nature_cas_infoOrderByWithRelationInput | Prisma.s05_nature_cas_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s05_nature_cas_infos.
     */
    cursor?: Prisma.s05_nature_cas_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s05_nature_cas_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s05_nature_cas_infos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s05_nature_cas_infos.
     */
    distinct?: Prisma.S05_nature_cas_infoScalarFieldEnum | Prisma.S05_nature_cas_infoScalarFieldEnum[];
};
/**
 * s05_nature_cas_info findMany
 */
export type s05_nature_cas_infoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_info
     */
    select?: Prisma.s05_nature_cas_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_info
     */
    omit?: Prisma.s05_nature_cas_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s05_nature_cas_infos to fetch.
     */
    where?: Prisma.s05_nature_cas_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s05_nature_cas_infos to fetch.
     */
    orderBy?: Prisma.s05_nature_cas_infoOrderByWithRelationInput | Prisma.s05_nature_cas_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s05_nature_cas_infos.
     */
    cursor?: Prisma.s05_nature_cas_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s05_nature_cas_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s05_nature_cas_infos.
     */
    skip?: number;
    distinct?: Prisma.S05_nature_cas_infoScalarFieldEnum | Prisma.S05_nature_cas_infoScalarFieldEnum[];
};
/**
 * s05_nature_cas_info create
 */
export type s05_nature_cas_infoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_info
     */
    select?: Prisma.s05_nature_cas_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_info
     */
    omit?: Prisma.s05_nature_cas_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_infoInclude<ExtArgs> | null;
    /**
     * The data needed to create a s05_nature_cas_info.
     */
    data: Prisma.XOR<Prisma.s05_nature_cas_infoCreateInput, Prisma.s05_nature_cas_infoUncheckedCreateInput>;
};
/**
 * s05_nature_cas_info createMany
 */
export type s05_nature_cas_infoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s05_nature_cas_infos.
     */
    data: Prisma.s05_nature_cas_infoCreateManyInput | Prisma.s05_nature_cas_infoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s05_nature_cas_info createManyAndReturn
 */
export type s05_nature_cas_infoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_info
     */
    select?: Prisma.s05_nature_cas_infoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_info
     */
    omit?: Prisma.s05_nature_cas_infoOmit<ExtArgs> | null;
    /**
     * The data used to create many s05_nature_cas_infos.
     */
    data: Prisma.s05_nature_cas_infoCreateManyInput | Prisma.s05_nature_cas_infoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_infoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s05_nature_cas_info update
 */
export type s05_nature_cas_infoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_info
     */
    select?: Prisma.s05_nature_cas_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_info
     */
    omit?: Prisma.s05_nature_cas_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_infoInclude<ExtArgs> | null;
    /**
     * The data needed to update a s05_nature_cas_info.
     */
    data: Prisma.XOR<Prisma.s05_nature_cas_infoUpdateInput, Prisma.s05_nature_cas_infoUncheckedUpdateInput>;
    /**
     * Choose, which s05_nature_cas_info to update.
     */
    where: Prisma.s05_nature_cas_infoWhereUniqueInput;
};
/**
 * s05_nature_cas_info updateMany
 */
export type s05_nature_cas_infoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s05_nature_cas_infos.
     */
    data: Prisma.XOR<Prisma.s05_nature_cas_infoUpdateManyMutationInput, Prisma.s05_nature_cas_infoUncheckedUpdateManyInput>;
    /**
     * Filter which s05_nature_cas_infos to update
     */
    where?: Prisma.s05_nature_cas_infoWhereInput;
    /**
     * Limit how many s05_nature_cas_infos to update.
     */
    limit?: number;
};
/**
 * s05_nature_cas_info updateManyAndReturn
 */
export type s05_nature_cas_infoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_info
     */
    select?: Prisma.s05_nature_cas_infoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_info
     */
    omit?: Prisma.s05_nature_cas_infoOmit<ExtArgs> | null;
    /**
     * The data used to update s05_nature_cas_infos.
     */
    data: Prisma.XOR<Prisma.s05_nature_cas_infoUpdateManyMutationInput, Prisma.s05_nature_cas_infoUncheckedUpdateManyInput>;
    /**
     * Filter which s05_nature_cas_infos to update
     */
    where?: Prisma.s05_nature_cas_infoWhereInput;
    /**
     * Limit how many s05_nature_cas_infos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_infoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s05_nature_cas_info upsert
 */
export type s05_nature_cas_infoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_info
     */
    select?: Prisma.s05_nature_cas_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_info
     */
    omit?: Prisma.s05_nature_cas_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_infoInclude<ExtArgs> | null;
    /**
     * The filter to search for the s05_nature_cas_info to update in case it exists.
     */
    where: Prisma.s05_nature_cas_infoWhereUniqueInput;
    /**
     * In case the s05_nature_cas_info found by the `where` argument doesn't exist, create a new s05_nature_cas_info with this data.
     */
    create: Prisma.XOR<Prisma.s05_nature_cas_infoCreateInput, Prisma.s05_nature_cas_infoUncheckedCreateInput>;
    /**
     * In case the s05_nature_cas_info was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s05_nature_cas_infoUpdateInput, Prisma.s05_nature_cas_infoUncheckedUpdateInput>;
};
/**
 * s05_nature_cas_info delete
 */
export type s05_nature_cas_infoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_info
     */
    select?: Prisma.s05_nature_cas_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_info
     */
    omit?: Prisma.s05_nature_cas_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_infoInclude<ExtArgs> | null;
    /**
     * Filter which s05_nature_cas_info to delete.
     */
    where: Prisma.s05_nature_cas_infoWhereUniqueInput;
};
/**
 * s05_nature_cas_info deleteMany
 */
export type s05_nature_cas_infoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s05_nature_cas_infos to delete
     */
    where?: Prisma.s05_nature_cas_infoWhereInput;
    /**
     * Limit how many s05_nature_cas_infos to delete.
     */
    limit?: number;
};
/**
 * s05_nature_cas_info without action
 */
export type s05_nature_cas_infoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_info
     */
    select?: Prisma.s05_nature_cas_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_info
     */
    omit?: Prisma.s05_nature_cas_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_infoInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s05_nature_cas_info.d.ts.map