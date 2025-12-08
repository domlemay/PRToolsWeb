import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s08_allergies_info
 *
 */
export type s08_allergies_infoModel = runtime.Types.Result.DefaultSelection<Prisma.$s08_allergies_infoPayload>;
export type AggregateS08_allergies_info = {
    _count: S08_allergies_infoCountAggregateOutputType | null;
    _avg: S08_allergies_infoAvgAggregateOutputType | null;
    _sum: S08_allergies_infoSumAggregateOutputType | null;
    _min: S08_allergies_infoMinAggregateOutputType | null;
    _max: S08_allergies_infoMaxAggregateOutputType | null;
};
export type S08_allergies_infoAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S08_allergies_infoSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S08_allergies_infoMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    a_allergies: boolean | null;
    commentaire: string | null;
};
export type S08_allergies_infoMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    a_allergies: boolean | null;
    commentaire: string | null;
};
export type S08_allergies_infoCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    a_allergies: number;
    commentaire: number;
    _all: number;
};
export type S08_allergies_infoAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S08_allergies_infoSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S08_allergies_infoMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    a_allergies?: true;
    commentaire?: true;
};
export type S08_allergies_infoMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    a_allergies?: true;
    commentaire?: true;
};
export type S08_allergies_infoCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    a_allergies?: true;
    commentaire?: true;
    _all?: true;
};
export type S08_allergies_infoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s08_allergies_info to aggregate.
     */
    where?: Prisma.s08_allergies_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s08_allergies_infos to fetch.
     */
    orderBy?: Prisma.s08_allergies_infoOrderByWithRelationInput | Prisma.s08_allergies_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s08_allergies_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s08_allergies_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s08_allergies_infos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s08_allergies_infos
    **/
    _count?: true | S08_allergies_infoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S08_allergies_infoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S08_allergies_infoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S08_allergies_infoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S08_allergies_infoMaxAggregateInputType;
};
export type GetS08_allergies_infoAggregateType<T extends S08_allergies_infoAggregateArgs> = {
    [P in keyof T & keyof AggregateS08_allergies_info]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS08_allergies_info[P]> : Prisma.GetScalarType<T[P], AggregateS08_allergies_info[P]>;
};
export type s08_allergies_infoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s08_allergies_infoWhereInput;
    orderBy?: Prisma.s08_allergies_infoOrderByWithAggregationInput | Prisma.s08_allergies_infoOrderByWithAggregationInput[];
    by: Prisma.S08_allergies_infoScalarFieldEnum[] | Prisma.S08_allergies_infoScalarFieldEnum;
    having?: Prisma.s08_allergies_infoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S08_allergies_infoCountAggregateInputType | true;
    _avg?: S08_allergies_infoAvgAggregateInputType;
    _sum?: S08_allergies_infoSumAggregateInputType;
    _min?: S08_allergies_infoMinAggregateInputType;
    _max?: S08_allergies_infoMaxAggregateInputType;
};
export type S08_allergies_infoGroupByOutputType = {
    id: number;
    rapport_id: number;
    a_allergies: boolean | null;
    commentaire: string | null;
    _count: S08_allergies_infoCountAggregateOutputType | null;
    _avg: S08_allergies_infoAvgAggregateOutputType | null;
    _sum: S08_allergies_infoSumAggregateOutputType | null;
    _min: S08_allergies_infoMinAggregateOutputType | null;
    _max: S08_allergies_infoMaxAggregateOutputType | null;
};
type GetS08_allergies_infoGroupByPayload<T extends s08_allergies_infoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S08_allergies_infoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S08_allergies_infoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S08_allergies_infoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S08_allergies_infoGroupByOutputType[P]>;
}>>;
export type s08_allergies_infoWhereInput = {
    AND?: Prisma.s08_allergies_infoWhereInput | Prisma.s08_allergies_infoWhereInput[];
    OR?: Prisma.s08_allergies_infoWhereInput[];
    NOT?: Prisma.s08_allergies_infoWhereInput | Prisma.s08_allergies_infoWhereInput[];
    id?: Prisma.IntFilter<"s08_allergies_info"> | number;
    rapport_id?: Prisma.IntFilter<"s08_allergies_info"> | number;
    a_allergies?: Prisma.BoolNullableFilter<"s08_allergies_info"> | boolean | null;
    commentaire?: Prisma.StringNullableFilter<"s08_allergies_info"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s08_allergies_infoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    a_allergies?: Prisma.SortOrderInput | Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s08_allergies_infoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id?: number;
    AND?: Prisma.s08_allergies_infoWhereInput | Prisma.s08_allergies_infoWhereInput[];
    OR?: Prisma.s08_allergies_infoWhereInput[];
    NOT?: Prisma.s08_allergies_infoWhereInput | Prisma.s08_allergies_infoWhereInput[];
    a_allergies?: Prisma.BoolNullableFilter<"s08_allergies_info"> | boolean | null;
    commentaire?: Prisma.StringNullableFilter<"s08_allergies_info"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id" | "rapport_id">;
export type s08_allergies_infoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    a_allergies?: Prisma.SortOrderInput | Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s08_allergies_infoCountOrderByAggregateInput;
    _avg?: Prisma.s08_allergies_infoAvgOrderByAggregateInput;
    _max?: Prisma.s08_allergies_infoMaxOrderByAggregateInput;
    _min?: Prisma.s08_allergies_infoMinOrderByAggregateInput;
    _sum?: Prisma.s08_allergies_infoSumOrderByAggregateInput;
};
export type s08_allergies_infoScalarWhereWithAggregatesInput = {
    AND?: Prisma.s08_allergies_infoScalarWhereWithAggregatesInput | Prisma.s08_allergies_infoScalarWhereWithAggregatesInput[];
    OR?: Prisma.s08_allergies_infoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s08_allergies_infoScalarWhereWithAggregatesInput | Prisma.s08_allergies_infoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s08_allergies_info"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s08_allergies_info"> | number;
    a_allergies?: Prisma.BoolNullableWithAggregatesFilter<"s08_allergies_info"> | boolean | null;
    commentaire?: Prisma.StringNullableWithAggregatesFilter<"s08_allergies_info"> | string | null;
};
export type s08_allergies_infoCreateInput = {
    a_allergies?: boolean | null;
    commentaire?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS08_allergies_infoInput;
};
export type s08_allergies_infoUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    a_allergies?: boolean | null;
    commentaire?: string | null;
};
export type s08_allergies_infoUpdateInput = {
    a_allergies?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS08_allergies_infoNestedInput;
};
export type s08_allergies_infoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    a_allergies?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s08_allergies_infoCreateManyInput = {
    id?: number;
    rapport_id: number;
    a_allergies?: boolean | null;
    commentaire?: string | null;
};
export type s08_allergies_infoUpdateManyMutationInput = {
    a_allergies?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s08_allergies_infoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    a_allergies?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type S08_allergies_infoNullableScalarRelationFilter = {
    is?: Prisma.s08_allergies_infoWhereInput | null;
    isNot?: Prisma.s08_allergies_infoWhereInput | null;
};
export type s08_allergies_infoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    a_allergies?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
};
export type s08_allergies_infoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s08_allergies_infoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    a_allergies?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
};
export type s08_allergies_infoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    a_allergies?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
};
export type s08_allergies_infoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s08_allergies_infoCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s08_allergies_infoCreateWithoutRapportInput, Prisma.s08_allergies_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s08_allergies_infoCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s08_allergies_infoWhereUniqueInput;
};
export type s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s08_allergies_infoCreateWithoutRapportInput, Prisma.s08_allergies_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s08_allergies_infoCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s08_allergies_infoWhereUniqueInput;
};
export type s08_allergies_infoUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s08_allergies_infoCreateWithoutRapportInput, Prisma.s08_allergies_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s08_allergies_infoCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s08_allergies_infoUpsertWithoutRapportInput;
    disconnect?: Prisma.s08_allergies_infoWhereInput | boolean;
    delete?: Prisma.s08_allergies_infoWhereInput | boolean;
    connect?: Prisma.s08_allergies_infoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s08_allergies_infoUpdateToOneWithWhereWithoutRapportInput, Prisma.s08_allergies_infoUpdateWithoutRapportInput>, Prisma.s08_allergies_infoUncheckedUpdateWithoutRapportInput>;
};
export type s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s08_allergies_infoCreateWithoutRapportInput, Prisma.s08_allergies_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s08_allergies_infoCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s08_allergies_infoUpsertWithoutRapportInput;
    disconnect?: Prisma.s08_allergies_infoWhereInput | boolean;
    delete?: Prisma.s08_allergies_infoWhereInput | boolean;
    connect?: Prisma.s08_allergies_infoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s08_allergies_infoUpdateToOneWithWhereWithoutRapportInput, Prisma.s08_allergies_infoUpdateWithoutRapportInput>, Prisma.s08_allergies_infoUncheckedUpdateWithoutRapportInput>;
};
export type s08_allergies_infoCreateWithoutRapportInput = {
    a_allergies?: boolean | null;
    commentaire?: string | null;
};
export type s08_allergies_infoUncheckedCreateWithoutRapportInput = {
    id?: number;
    a_allergies?: boolean | null;
    commentaire?: string | null;
};
export type s08_allergies_infoCreateOrConnectWithoutRapportInput = {
    where: Prisma.s08_allergies_infoWhereUniqueInput;
    create: Prisma.XOR<Prisma.s08_allergies_infoCreateWithoutRapportInput, Prisma.s08_allergies_infoUncheckedCreateWithoutRapportInput>;
};
export type s08_allergies_infoUpsertWithoutRapportInput = {
    update: Prisma.XOR<Prisma.s08_allergies_infoUpdateWithoutRapportInput, Prisma.s08_allergies_infoUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s08_allergies_infoCreateWithoutRapportInput, Prisma.s08_allergies_infoUncheckedCreateWithoutRapportInput>;
    where?: Prisma.s08_allergies_infoWhereInput;
};
export type s08_allergies_infoUpdateToOneWithWhereWithoutRapportInput = {
    where?: Prisma.s08_allergies_infoWhereInput;
    data: Prisma.XOR<Prisma.s08_allergies_infoUpdateWithoutRapportInput, Prisma.s08_allergies_infoUncheckedUpdateWithoutRapportInput>;
};
export type s08_allergies_infoUpdateWithoutRapportInput = {
    a_allergies?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s08_allergies_infoUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    a_allergies?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s08_allergies_infoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    a_allergies?: boolean;
    commentaire?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s08_allergies_info"]>;
export type s08_allergies_infoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    a_allergies?: boolean;
    commentaire?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s08_allergies_info"]>;
export type s08_allergies_infoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    a_allergies?: boolean;
    commentaire?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s08_allergies_info"]>;
export type s08_allergies_infoSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    a_allergies?: boolean;
    commentaire?: boolean;
};
export type s08_allergies_infoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "a_allergies" | "commentaire", ExtArgs["result"]["s08_allergies_info"]>;
export type s08_allergies_infoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s08_allergies_infoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s08_allergies_infoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s08_allergies_infoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s08_allergies_info";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        a_allergies: boolean | null;
        commentaire: string | null;
    }, ExtArgs["result"]["s08_allergies_info"]>;
    composites: {};
};
export type s08_allergies_infoGetPayload<S extends boolean | null | undefined | s08_allergies_infoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s08_allergies_infoPayload, S>;
export type s08_allergies_infoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s08_allergies_infoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S08_allergies_infoCountAggregateInputType | true;
};
export interface s08_allergies_infoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s08_allergies_info'];
        meta: {
            name: 's08_allergies_info';
        };
    };
    /**
     * Find zero or one S08_allergies_info that matches the filter.
     * @param {s08_allergies_infoFindUniqueArgs} args - Arguments to find a S08_allergies_info
     * @example
     * // Get one S08_allergies_info
     * const s08_allergies_info = await prisma.s08_allergies_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s08_allergies_infoFindUniqueArgs>(args: Prisma.SelectSubset<T, s08_allergies_infoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s08_allergies_infoClient<runtime.Types.Result.GetResult<Prisma.$s08_allergies_infoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S08_allergies_info that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s08_allergies_infoFindUniqueOrThrowArgs} args - Arguments to find a S08_allergies_info
     * @example
     * // Get one S08_allergies_info
     * const s08_allergies_info = await prisma.s08_allergies_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s08_allergies_infoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s08_allergies_infoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s08_allergies_infoClient<runtime.Types.Result.GetResult<Prisma.$s08_allergies_infoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S08_allergies_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s08_allergies_infoFindFirstArgs} args - Arguments to find a S08_allergies_info
     * @example
     * // Get one S08_allergies_info
     * const s08_allergies_info = await prisma.s08_allergies_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s08_allergies_infoFindFirstArgs>(args?: Prisma.SelectSubset<T, s08_allergies_infoFindFirstArgs<ExtArgs>>): Prisma.Prisma__s08_allergies_infoClient<runtime.Types.Result.GetResult<Prisma.$s08_allergies_infoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S08_allergies_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s08_allergies_infoFindFirstOrThrowArgs} args - Arguments to find a S08_allergies_info
     * @example
     * // Get one S08_allergies_info
     * const s08_allergies_info = await prisma.s08_allergies_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s08_allergies_infoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s08_allergies_infoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s08_allergies_infoClient<runtime.Types.Result.GetResult<Prisma.$s08_allergies_infoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S08_allergies_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s08_allergies_infoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S08_allergies_infos
     * const s08_allergies_infos = await prisma.s08_allergies_info.findMany()
     *
     * // Get first 10 S08_allergies_infos
     * const s08_allergies_infos = await prisma.s08_allergies_info.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s08_allergies_infoWithIdOnly = await prisma.s08_allergies_info.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s08_allergies_infoFindManyArgs>(args?: Prisma.SelectSubset<T, s08_allergies_infoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s08_allergies_infoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S08_allergies_info.
     * @param {s08_allergies_infoCreateArgs} args - Arguments to create a S08_allergies_info.
     * @example
     * // Create one S08_allergies_info
     * const S08_allergies_info = await prisma.s08_allergies_info.create({
     *   data: {
     *     // ... data to create a S08_allergies_info
     *   }
     * })
     *
     */
    create<T extends s08_allergies_infoCreateArgs>(args: Prisma.SelectSubset<T, s08_allergies_infoCreateArgs<ExtArgs>>): Prisma.Prisma__s08_allergies_infoClient<runtime.Types.Result.GetResult<Prisma.$s08_allergies_infoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S08_allergies_infos.
     * @param {s08_allergies_infoCreateManyArgs} args - Arguments to create many S08_allergies_infos.
     * @example
     * // Create many S08_allergies_infos
     * const s08_allergies_info = await prisma.s08_allergies_info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s08_allergies_infoCreateManyArgs>(args?: Prisma.SelectSubset<T, s08_allergies_infoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S08_allergies_infos and returns the data saved in the database.
     * @param {s08_allergies_infoCreateManyAndReturnArgs} args - Arguments to create many S08_allergies_infos.
     * @example
     * // Create many S08_allergies_infos
     * const s08_allergies_info = await prisma.s08_allergies_info.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S08_allergies_infos and only return the `id`
     * const s08_allergies_infoWithIdOnly = await prisma.s08_allergies_info.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s08_allergies_infoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s08_allergies_infoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s08_allergies_infoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S08_allergies_info.
     * @param {s08_allergies_infoDeleteArgs} args - Arguments to delete one S08_allergies_info.
     * @example
     * // Delete one S08_allergies_info
     * const S08_allergies_info = await prisma.s08_allergies_info.delete({
     *   where: {
     *     // ... filter to delete one S08_allergies_info
     *   }
     * })
     *
     */
    delete<T extends s08_allergies_infoDeleteArgs>(args: Prisma.SelectSubset<T, s08_allergies_infoDeleteArgs<ExtArgs>>): Prisma.Prisma__s08_allergies_infoClient<runtime.Types.Result.GetResult<Prisma.$s08_allergies_infoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S08_allergies_info.
     * @param {s08_allergies_infoUpdateArgs} args - Arguments to update one S08_allergies_info.
     * @example
     * // Update one S08_allergies_info
     * const s08_allergies_info = await prisma.s08_allergies_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s08_allergies_infoUpdateArgs>(args: Prisma.SelectSubset<T, s08_allergies_infoUpdateArgs<ExtArgs>>): Prisma.Prisma__s08_allergies_infoClient<runtime.Types.Result.GetResult<Prisma.$s08_allergies_infoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S08_allergies_infos.
     * @param {s08_allergies_infoDeleteManyArgs} args - Arguments to filter S08_allergies_infos to delete.
     * @example
     * // Delete a few S08_allergies_infos
     * const { count } = await prisma.s08_allergies_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s08_allergies_infoDeleteManyArgs>(args?: Prisma.SelectSubset<T, s08_allergies_infoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S08_allergies_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s08_allergies_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S08_allergies_infos
     * const s08_allergies_info = await prisma.s08_allergies_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s08_allergies_infoUpdateManyArgs>(args: Prisma.SelectSubset<T, s08_allergies_infoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S08_allergies_infos and returns the data updated in the database.
     * @param {s08_allergies_infoUpdateManyAndReturnArgs} args - Arguments to update many S08_allergies_infos.
     * @example
     * // Update many S08_allergies_infos
     * const s08_allergies_info = await prisma.s08_allergies_info.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S08_allergies_infos and only return the `id`
     * const s08_allergies_infoWithIdOnly = await prisma.s08_allergies_info.updateManyAndReturn({
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
    updateManyAndReturn<T extends s08_allergies_infoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s08_allergies_infoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s08_allergies_infoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S08_allergies_info.
     * @param {s08_allergies_infoUpsertArgs} args - Arguments to update or create a S08_allergies_info.
     * @example
     * // Update or create a S08_allergies_info
     * const s08_allergies_info = await prisma.s08_allergies_info.upsert({
     *   create: {
     *     // ... data to create a S08_allergies_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S08_allergies_info we want to update
     *   }
     * })
     */
    upsert<T extends s08_allergies_infoUpsertArgs>(args: Prisma.SelectSubset<T, s08_allergies_infoUpsertArgs<ExtArgs>>): Prisma.Prisma__s08_allergies_infoClient<runtime.Types.Result.GetResult<Prisma.$s08_allergies_infoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S08_allergies_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s08_allergies_infoCountArgs} args - Arguments to filter S08_allergies_infos to count.
     * @example
     * // Count the number of S08_allergies_infos
     * const count = await prisma.s08_allergies_info.count({
     *   where: {
     *     // ... the filter for the S08_allergies_infos we want to count
     *   }
     * })
    **/
    count<T extends s08_allergies_infoCountArgs>(args?: Prisma.Subset<T, s08_allergies_infoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S08_allergies_infoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S08_allergies_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S08_allergies_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S08_allergies_infoAggregateArgs>(args: Prisma.Subset<T, S08_allergies_infoAggregateArgs>): Prisma.PrismaPromise<GetS08_allergies_infoAggregateType<T>>;
    /**
     * Group by S08_allergies_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s08_allergies_infoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s08_allergies_infoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s08_allergies_infoGroupByArgs['orderBy'];
    } : {
        orderBy?: s08_allergies_infoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s08_allergies_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS08_allergies_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s08_allergies_info model
     */
    readonly fields: s08_allergies_infoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s08_allergies_info.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s08_allergies_infoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the s08_allergies_info model
 */
export interface s08_allergies_infoFieldRefs {
    readonly id: Prisma.FieldRef<"s08_allergies_info", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s08_allergies_info", 'Int'>;
    readonly a_allergies: Prisma.FieldRef<"s08_allergies_info", 'Boolean'>;
    readonly commentaire: Prisma.FieldRef<"s08_allergies_info", 'String'>;
}
/**
 * s08_allergies_info findUnique
 */
export type s08_allergies_infoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergies_info
     */
    select?: Prisma.s08_allergies_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergies_info
     */
    omit?: Prisma.s08_allergies_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergies_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s08_allergies_info to fetch.
     */
    where: Prisma.s08_allergies_infoWhereUniqueInput;
};
/**
 * s08_allergies_info findUniqueOrThrow
 */
export type s08_allergies_infoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergies_info
     */
    select?: Prisma.s08_allergies_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergies_info
     */
    omit?: Prisma.s08_allergies_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergies_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s08_allergies_info to fetch.
     */
    where: Prisma.s08_allergies_infoWhereUniqueInput;
};
/**
 * s08_allergies_info findFirst
 */
export type s08_allergies_infoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergies_info
     */
    select?: Prisma.s08_allergies_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergies_info
     */
    omit?: Prisma.s08_allergies_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergies_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s08_allergies_info to fetch.
     */
    where?: Prisma.s08_allergies_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s08_allergies_infos to fetch.
     */
    orderBy?: Prisma.s08_allergies_infoOrderByWithRelationInput | Prisma.s08_allergies_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s08_allergies_infos.
     */
    cursor?: Prisma.s08_allergies_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s08_allergies_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s08_allergies_infos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s08_allergies_infos.
     */
    distinct?: Prisma.S08_allergies_infoScalarFieldEnum | Prisma.S08_allergies_infoScalarFieldEnum[];
};
/**
 * s08_allergies_info findFirstOrThrow
 */
export type s08_allergies_infoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergies_info
     */
    select?: Prisma.s08_allergies_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergies_info
     */
    omit?: Prisma.s08_allergies_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergies_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s08_allergies_info to fetch.
     */
    where?: Prisma.s08_allergies_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s08_allergies_infos to fetch.
     */
    orderBy?: Prisma.s08_allergies_infoOrderByWithRelationInput | Prisma.s08_allergies_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s08_allergies_infos.
     */
    cursor?: Prisma.s08_allergies_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s08_allergies_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s08_allergies_infos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s08_allergies_infos.
     */
    distinct?: Prisma.S08_allergies_infoScalarFieldEnum | Prisma.S08_allergies_infoScalarFieldEnum[];
};
/**
 * s08_allergies_info findMany
 */
export type s08_allergies_infoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergies_info
     */
    select?: Prisma.s08_allergies_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergies_info
     */
    omit?: Prisma.s08_allergies_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergies_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s08_allergies_infos to fetch.
     */
    where?: Prisma.s08_allergies_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s08_allergies_infos to fetch.
     */
    orderBy?: Prisma.s08_allergies_infoOrderByWithRelationInput | Prisma.s08_allergies_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s08_allergies_infos.
     */
    cursor?: Prisma.s08_allergies_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s08_allergies_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s08_allergies_infos.
     */
    skip?: number;
    distinct?: Prisma.S08_allergies_infoScalarFieldEnum | Prisma.S08_allergies_infoScalarFieldEnum[];
};
/**
 * s08_allergies_info create
 */
export type s08_allergies_infoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergies_info
     */
    select?: Prisma.s08_allergies_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergies_info
     */
    omit?: Prisma.s08_allergies_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergies_infoInclude<ExtArgs> | null;
    /**
     * The data needed to create a s08_allergies_info.
     */
    data: Prisma.XOR<Prisma.s08_allergies_infoCreateInput, Prisma.s08_allergies_infoUncheckedCreateInput>;
};
/**
 * s08_allergies_info createMany
 */
export type s08_allergies_infoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s08_allergies_infos.
     */
    data: Prisma.s08_allergies_infoCreateManyInput | Prisma.s08_allergies_infoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s08_allergies_info createManyAndReturn
 */
export type s08_allergies_infoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergies_info
     */
    select?: Prisma.s08_allergies_infoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergies_info
     */
    omit?: Prisma.s08_allergies_infoOmit<ExtArgs> | null;
    /**
     * The data used to create many s08_allergies_infos.
     */
    data: Prisma.s08_allergies_infoCreateManyInput | Prisma.s08_allergies_infoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergies_infoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s08_allergies_info update
 */
export type s08_allergies_infoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergies_info
     */
    select?: Prisma.s08_allergies_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergies_info
     */
    omit?: Prisma.s08_allergies_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergies_infoInclude<ExtArgs> | null;
    /**
     * The data needed to update a s08_allergies_info.
     */
    data: Prisma.XOR<Prisma.s08_allergies_infoUpdateInput, Prisma.s08_allergies_infoUncheckedUpdateInput>;
    /**
     * Choose, which s08_allergies_info to update.
     */
    where: Prisma.s08_allergies_infoWhereUniqueInput;
};
/**
 * s08_allergies_info updateMany
 */
export type s08_allergies_infoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s08_allergies_infos.
     */
    data: Prisma.XOR<Prisma.s08_allergies_infoUpdateManyMutationInput, Prisma.s08_allergies_infoUncheckedUpdateManyInput>;
    /**
     * Filter which s08_allergies_infos to update
     */
    where?: Prisma.s08_allergies_infoWhereInput;
    /**
     * Limit how many s08_allergies_infos to update.
     */
    limit?: number;
};
/**
 * s08_allergies_info updateManyAndReturn
 */
export type s08_allergies_infoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergies_info
     */
    select?: Prisma.s08_allergies_infoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergies_info
     */
    omit?: Prisma.s08_allergies_infoOmit<ExtArgs> | null;
    /**
     * The data used to update s08_allergies_infos.
     */
    data: Prisma.XOR<Prisma.s08_allergies_infoUpdateManyMutationInput, Prisma.s08_allergies_infoUncheckedUpdateManyInput>;
    /**
     * Filter which s08_allergies_infos to update
     */
    where?: Prisma.s08_allergies_infoWhereInput;
    /**
     * Limit how many s08_allergies_infos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergies_infoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s08_allergies_info upsert
 */
export type s08_allergies_infoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergies_info
     */
    select?: Prisma.s08_allergies_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergies_info
     */
    omit?: Prisma.s08_allergies_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergies_infoInclude<ExtArgs> | null;
    /**
     * The filter to search for the s08_allergies_info to update in case it exists.
     */
    where: Prisma.s08_allergies_infoWhereUniqueInput;
    /**
     * In case the s08_allergies_info found by the `where` argument doesn't exist, create a new s08_allergies_info with this data.
     */
    create: Prisma.XOR<Prisma.s08_allergies_infoCreateInput, Prisma.s08_allergies_infoUncheckedCreateInput>;
    /**
     * In case the s08_allergies_info was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s08_allergies_infoUpdateInput, Prisma.s08_allergies_infoUncheckedUpdateInput>;
};
/**
 * s08_allergies_info delete
 */
export type s08_allergies_infoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergies_info
     */
    select?: Prisma.s08_allergies_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergies_info
     */
    omit?: Prisma.s08_allergies_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergies_infoInclude<ExtArgs> | null;
    /**
     * Filter which s08_allergies_info to delete.
     */
    where: Prisma.s08_allergies_infoWhereUniqueInput;
};
/**
 * s08_allergies_info deleteMany
 */
export type s08_allergies_infoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s08_allergies_infos to delete
     */
    where?: Prisma.s08_allergies_infoWhereInput;
    /**
     * Limit how many s08_allergies_infos to delete.
     */
    limit?: number;
};
/**
 * s08_allergies_info without action
 */
export type s08_allergies_infoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergies_info
     */
    select?: Prisma.s08_allergies_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergies_info
     */
    omit?: Prisma.s08_allergies_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergies_infoInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s08_allergies_info.d.ts.map