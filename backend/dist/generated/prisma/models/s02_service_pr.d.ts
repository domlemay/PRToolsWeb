import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s02_service_pr
 *
 */
export type s02_service_prModel = runtime.Types.Result.DefaultSelection<Prisma.$s02_service_prPayload>;
export type AggregateS02_service_pr = {
    _count: S02_service_prCountAggregateOutputType | null;
    _avg: S02_service_prAvgAggregateOutputType | null;
    _sum: S02_service_prSumAggregateOutputType | null;
    _min: S02_service_prMinAggregateOutputType | null;
    _max: S02_service_prMaxAggregateOutputType | null;
};
export type S02_service_prAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S02_service_prSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S02_service_prMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    service_pr: string | null;
    no_evenement_pr: string | null;
};
export type S02_service_prMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    service_pr: string | null;
    no_evenement_pr: string | null;
};
export type S02_service_prCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    service_pr: number;
    no_evenement_pr: number;
    _all: number;
};
export type S02_service_prAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S02_service_prSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S02_service_prMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    service_pr?: true;
    no_evenement_pr?: true;
};
export type S02_service_prMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    service_pr?: true;
    no_evenement_pr?: true;
};
export type S02_service_prCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    service_pr?: true;
    no_evenement_pr?: true;
    _all?: true;
};
export type S02_service_prAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s02_service_pr to aggregate.
     */
    where?: Prisma.s02_service_prWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s02_service_prs to fetch.
     */
    orderBy?: Prisma.s02_service_prOrderByWithRelationInput | Prisma.s02_service_prOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s02_service_prWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s02_service_prs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s02_service_prs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s02_service_prs
    **/
    _count?: true | S02_service_prCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S02_service_prAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S02_service_prSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S02_service_prMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S02_service_prMaxAggregateInputType;
};
export type GetS02_service_prAggregateType<T extends S02_service_prAggregateArgs> = {
    [P in keyof T & keyof AggregateS02_service_pr]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS02_service_pr[P]> : Prisma.GetScalarType<T[P], AggregateS02_service_pr[P]>;
};
export type s02_service_prGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s02_service_prWhereInput;
    orderBy?: Prisma.s02_service_prOrderByWithAggregationInput | Prisma.s02_service_prOrderByWithAggregationInput[];
    by: Prisma.S02_service_prScalarFieldEnum[] | Prisma.S02_service_prScalarFieldEnum;
    having?: Prisma.s02_service_prScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S02_service_prCountAggregateInputType | true;
    _avg?: S02_service_prAvgAggregateInputType;
    _sum?: S02_service_prSumAggregateInputType;
    _min?: S02_service_prMinAggregateInputType;
    _max?: S02_service_prMaxAggregateInputType;
};
export type S02_service_prGroupByOutputType = {
    id: number;
    rapport_id: number;
    service_pr: string;
    no_evenement_pr: string | null;
    _count: S02_service_prCountAggregateOutputType | null;
    _avg: S02_service_prAvgAggregateOutputType | null;
    _sum: S02_service_prSumAggregateOutputType | null;
    _min: S02_service_prMinAggregateOutputType | null;
    _max: S02_service_prMaxAggregateOutputType | null;
};
type GetS02_service_prGroupByPayload<T extends s02_service_prGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S02_service_prGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S02_service_prGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S02_service_prGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S02_service_prGroupByOutputType[P]>;
}>>;
export type s02_service_prWhereInput = {
    AND?: Prisma.s02_service_prWhereInput | Prisma.s02_service_prWhereInput[];
    OR?: Prisma.s02_service_prWhereInput[];
    NOT?: Prisma.s02_service_prWhereInput | Prisma.s02_service_prWhereInput[];
    id?: Prisma.IntFilter<"s02_service_pr"> | number;
    rapport_id?: Prisma.IntFilter<"s02_service_pr"> | number;
    service_pr?: Prisma.StringFilter<"s02_service_pr"> | string;
    no_evenement_pr?: Prisma.StringNullableFilter<"s02_service_pr"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s02_service_prOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    service_pr?: Prisma.SortOrder;
    no_evenement_pr?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s02_service_prWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id?: number;
    AND?: Prisma.s02_service_prWhereInput | Prisma.s02_service_prWhereInput[];
    OR?: Prisma.s02_service_prWhereInput[];
    NOT?: Prisma.s02_service_prWhereInput | Prisma.s02_service_prWhereInput[];
    service_pr?: Prisma.StringFilter<"s02_service_pr"> | string;
    no_evenement_pr?: Prisma.StringNullableFilter<"s02_service_pr"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id" | "rapport_id">;
export type s02_service_prOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    service_pr?: Prisma.SortOrder;
    no_evenement_pr?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s02_service_prCountOrderByAggregateInput;
    _avg?: Prisma.s02_service_prAvgOrderByAggregateInput;
    _max?: Prisma.s02_service_prMaxOrderByAggregateInput;
    _min?: Prisma.s02_service_prMinOrderByAggregateInput;
    _sum?: Prisma.s02_service_prSumOrderByAggregateInput;
};
export type s02_service_prScalarWhereWithAggregatesInput = {
    AND?: Prisma.s02_service_prScalarWhereWithAggregatesInput | Prisma.s02_service_prScalarWhereWithAggregatesInput[];
    OR?: Prisma.s02_service_prScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s02_service_prScalarWhereWithAggregatesInput | Prisma.s02_service_prScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s02_service_pr"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s02_service_pr"> | number;
    service_pr?: Prisma.StringWithAggregatesFilter<"s02_service_pr"> | string;
    no_evenement_pr?: Prisma.StringNullableWithAggregatesFilter<"s02_service_pr"> | string | null;
};
export type s02_service_prCreateInput = {
    service_pr: string;
    no_evenement_pr?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS02_service_prInput;
};
export type s02_service_prUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    service_pr: string;
    no_evenement_pr?: string | null;
};
export type s02_service_prUpdateInput = {
    service_pr?: Prisma.StringFieldUpdateOperationsInput | string;
    no_evenement_pr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS02_service_prNestedInput;
};
export type s02_service_prUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    service_pr?: Prisma.StringFieldUpdateOperationsInput | string;
    no_evenement_pr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s02_service_prCreateManyInput = {
    id?: number;
    rapport_id: number;
    service_pr: string;
    no_evenement_pr?: string | null;
};
export type s02_service_prUpdateManyMutationInput = {
    service_pr?: Prisma.StringFieldUpdateOperationsInput | string;
    no_evenement_pr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s02_service_prUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    service_pr?: Prisma.StringFieldUpdateOperationsInput | string;
    no_evenement_pr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type S02_service_prNullableScalarRelationFilter = {
    is?: Prisma.s02_service_prWhereInput | null;
    isNot?: Prisma.s02_service_prWhereInput | null;
};
export type s02_service_prCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    service_pr?: Prisma.SortOrder;
    no_evenement_pr?: Prisma.SortOrder;
};
export type s02_service_prAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s02_service_prMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    service_pr?: Prisma.SortOrder;
    no_evenement_pr?: Prisma.SortOrder;
};
export type s02_service_prMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    service_pr?: Prisma.SortOrder;
    no_evenement_pr?: Prisma.SortOrder;
};
export type s02_service_prSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s02_service_prCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s02_service_prCreateWithoutRapportInput, Prisma.s02_service_prUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s02_service_prCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s02_service_prWhereUniqueInput;
};
export type s02_service_prUncheckedCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s02_service_prCreateWithoutRapportInput, Prisma.s02_service_prUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s02_service_prCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s02_service_prWhereUniqueInput;
};
export type s02_service_prUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s02_service_prCreateWithoutRapportInput, Prisma.s02_service_prUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s02_service_prCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s02_service_prUpsertWithoutRapportInput;
    disconnect?: Prisma.s02_service_prWhereInput | boolean;
    delete?: Prisma.s02_service_prWhereInput | boolean;
    connect?: Prisma.s02_service_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s02_service_prUpdateToOneWithWhereWithoutRapportInput, Prisma.s02_service_prUpdateWithoutRapportInput>, Prisma.s02_service_prUncheckedUpdateWithoutRapportInput>;
};
export type s02_service_prUncheckedUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s02_service_prCreateWithoutRapportInput, Prisma.s02_service_prUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s02_service_prCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s02_service_prUpsertWithoutRapportInput;
    disconnect?: Prisma.s02_service_prWhereInput | boolean;
    delete?: Prisma.s02_service_prWhereInput | boolean;
    connect?: Prisma.s02_service_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s02_service_prUpdateToOneWithWhereWithoutRapportInput, Prisma.s02_service_prUpdateWithoutRapportInput>, Prisma.s02_service_prUncheckedUpdateWithoutRapportInput>;
};
export type s02_service_prCreateWithoutRapportInput = {
    service_pr: string;
    no_evenement_pr?: string | null;
};
export type s02_service_prUncheckedCreateWithoutRapportInput = {
    id?: number;
    service_pr: string;
    no_evenement_pr?: string | null;
};
export type s02_service_prCreateOrConnectWithoutRapportInput = {
    where: Prisma.s02_service_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.s02_service_prCreateWithoutRapportInput, Prisma.s02_service_prUncheckedCreateWithoutRapportInput>;
};
export type s02_service_prUpsertWithoutRapportInput = {
    update: Prisma.XOR<Prisma.s02_service_prUpdateWithoutRapportInput, Prisma.s02_service_prUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s02_service_prCreateWithoutRapportInput, Prisma.s02_service_prUncheckedCreateWithoutRapportInput>;
    where?: Prisma.s02_service_prWhereInput;
};
export type s02_service_prUpdateToOneWithWhereWithoutRapportInput = {
    where?: Prisma.s02_service_prWhereInput;
    data: Prisma.XOR<Prisma.s02_service_prUpdateWithoutRapportInput, Prisma.s02_service_prUncheckedUpdateWithoutRapportInput>;
};
export type s02_service_prUpdateWithoutRapportInput = {
    service_pr?: Prisma.StringFieldUpdateOperationsInput | string;
    no_evenement_pr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s02_service_prUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    service_pr?: Prisma.StringFieldUpdateOperationsInput | string;
    no_evenement_pr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s02_service_prSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    service_pr?: boolean;
    no_evenement_pr?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s02_service_pr"]>;
export type s02_service_prSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    service_pr?: boolean;
    no_evenement_pr?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s02_service_pr"]>;
export type s02_service_prSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    service_pr?: boolean;
    no_evenement_pr?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s02_service_pr"]>;
export type s02_service_prSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    service_pr?: boolean;
    no_evenement_pr?: boolean;
};
export type s02_service_prOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "service_pr" | "no_evenement_pr", ExtArgs["result"]["s02_service_pr"]>;
export type s02_service_prInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s02_service_prIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s02_service_prIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s02_service_prPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s02_service_pr";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        service_pr: string;
        no_evenement_pr: string | null;
    }, ExtArgs["result"]["s02_service_pr"]>;
    composites: {};
};
export type s02_service_prGetPayload<S extends boolean | null | undefined | s02_service_prDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s02_service_prPayload, S>;
export type s02_service_prCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s02_service_prFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S02_service_prCountAggregateInputType | true;
};
export interface s02_service_prDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s02_service_pr'];
        meta: {
            name: 's02_service_pr';
        };
    };
    /**
     * Find zero or one S02_service_pr that matches the filter.
     * @param {s02_service_prFindUniqueArgs} args - Arguments to find a S02_service_pr
     * @example
     * // Get one S02_service_pr
     * const s02_service_pr = await prisma.s02_service_pr.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s02_service_prFindUniqueArgs>(args: Prisma.SelectSubset<T, s02_service_prFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s02_service_prClient<runtime.Types.Result.GetResult<Prisma.$s02_service_prPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S02_service_pr that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s02_service_prFindUniqueOrThrowArgs} args - Arguments to find a S02_service_pr
     * @example
     * // Get one S02_service_pr
     * const s02_service_pr = await prisma.s02_service_pr.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s02_service_prFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s02_service_prFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s02_service_prClient<runtime.Types.Result.GetResult<Prisma.$s02_service_prPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S02_service_pr that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s02_service_prFindFirstArgs} args - Arguments to find a S02_service_pr
     * @example
     * // Get one S02_service_pr
     * const s02_service_pr = await prisma.s02_service_pr.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s02_service_prFindFirstArgs>(args?: Prisma.SelectSubset<T, s02_service_prFindFirstArgs<ExtArgs>>): Prisma.Prisma__s02_service_prClient<runtime.Types.Result.GetResult<Prisma.$s02_service_prPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S02_service_pr that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s02_service_prFindFirstOrThrowArgs} args - Arguments to find a S02_service_pr
     * @example
     * // Get one S02_service_pr
     * const s02_service_pr = await prisma.s02_service_pr.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s02_service_prFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s02_service_prFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s02_service_prClient<runtime.Types.Result.GetResult<Prisma.$s02_service_prPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S02_service_prs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s02_service_prFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S02_service_prs
     * const s02_service_prs = await prisma.s02_service_pr.findMany()
     *
     * // Get first 10 S02_service_prs
     * const s02_service_prs = await prisma.s02_service_pr.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s02_service_prWithIdOnly = await prisma.s02_service_pr.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s02_service_prFindManyArgs>(args?: Prisma.SelectSubset<T, s02_service_prFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s02_service_prPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S02_service_pr.
     * @param {s02_service_prCreateArgs} args - Arguments to create a S02_service_pr.
     * @example
     * // Create one S02_service_pr
     * const S02_service_pr = await prisma.s02_service_pr.create({
     *   data: {
     *     // ... data to create a S02_service_pr
     *   }
     * })
     *
     */
    create<T extends s02_service_prCreateArgs>(args: Prisma.SelectSubset<T, s02_service_prCreateArgs<ExtArgs>>): Prisma.Prisma__s02_service_prClient<runtime.Types.Result.GetResult<Prisma.$s02_service_prPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S02_service_prs.
     * @param {s02_service_prCreateManyArgs} args - Arguments to create many S02_service_prs.
     * @example
     * // Create many S02_service_prs
     * const s02_service_pr = await prisma.s02_service_pr.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s02_service_prCreateManyArgs>(args?: Prisma.SelectSubset<T, s02_service_prCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S02_service_prs and returns the data saved in the database.
     * @param {s02_service_prCreateManyAndReturnArgs} args - Arguments to create many S02_service_prs.
     * @example
     * // Create many S02_service_prs
     * const s02_service_pr = await prisma.s02_service_pr.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S02_service_prs and only return the `id`
     * const s02_service_prWithIdOnly = await prisma.s02_service_pr.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s02_service_prCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s02_service_prCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s02_service_prPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S02_service_pr.
     * @param {s02_service_prDeleteArgs} args - Arguments to delete one S02_service_pr.
     * @example
     * // Delete one S02_service_pr
     * const S02_service_pr = await prisma.s02_service_pr.delete({
     *   where: {
     *     // ... filter to delete one S02_service_pr
     *   }
     * })
     *
     */
    delete<T extends s02_service_prDeleteArgs>(args: Prisma.SelectSubset<T, s02_service_prDeleteArgs<ExtArgs>>): Prisma.Prisma__s02_service_prClient<runtime.Types.Result.GetResult<Prisma.$s02_service_prPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S02_service_pr.
     * @param {s02_service_prUpdateArgs} args - Arguments to update one S02_service_pr.
     * @example
     * // Update one S02_service_pr
     * const s02_service_pr = await prisma.s02_service_pr.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s02_service_prUpdateArgs>(args: Prisma.SelectSubset<T, s02_service_prUpdateArgs<ExtArgs>>): Prisma.Prisma__s02_service_prClient<runtime.Types.Result.GetResult<Prisma.$s02_service_prPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S02_service_prs.
     * @param {s02_service_prDeleteManyArgs} args - Arguments to filter S02_service_prs to delete.
     * @example
     * // Delete a few S02_service_prs
     * const { count } = await prisma.s02_service_pr.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s02_service_prDeleteManyArgs>(args?: Prisma.SelectSubset<T, s02_service_prDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S02_service_prs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s02_service_prUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S02_service_prs
     * const s02_service_pr = await prisma.s02_service_pr.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s02_service_prUpdateManyArgs>(args: Prisma.SelectSubset<T, s02_service_prUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S02_service_prs and returns the data updated in the database.
     * @param {s02_service_prUpdateManyAndReturnArgs} args - Arguments to update many S02_service_prs.
     * @example
     * // Update many S02_service_prs
     * const s02_service_pr = await prisma.s02_service_pr.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S02_service_prs and only return the `id`
     * const s02_service_prWithIdOnly = await prisma.s02_service_pr.updateManyAndReturn({
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
    updateManyAndReturn<T extends s02_service_prUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s02_service_prUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s02_service_prPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S02_service_pr.
     * @param {s02_service_prUpsertArgs} args - Arguments to update or create a S02_service_pr.
     * @example
     * // Update or create a S02_service_pr
     * const s02_service_pr = await prisma.s02_service_pr.upsert({
     *   create: {
     *     // ... data to create a S02_service_pr
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S02_service_pr we want to update
     *   }
     * })
     */
    upsert<T extends s02_service_prUpsertArgs>(args: Prisma.SelectSubset<T, s02_service_prUpsertArgs<ExtArgs>>): Prisma.Prisma__s02_service_prClient<runtime.Types.Result.GetResult<Prisma.$s02_service_prPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S02_service_prs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s02_service_prCountArgs} args - Arguments to filter S02_service_prs to count.
     * @example
     * // Count the number of S02_service_prs
     * const count = await prisma.s02_service_pr.count({
     *   where: {
     *     // ... the filter for the S02_service_prs we want to count
     *   }
     * })
    **/
    count<T extends s02_service_prCountArgs>(args?: Prisma.Subset<T, s02_service_prCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S02_service_prCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S02_service_pr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S02_service_prAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S02_service_prAggregateArgs>(args: Prisma.Subset<T, S02_service_prAggregateArgs>): Prisma.PrismaPromise<GetS02_service_prAggregateType<T>>;
    /**
     * Group by S02_service_pr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s02_service_prGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s02_service_prGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s02_service_prGroupByArgs['orderBy'];
    } : {
        orderBy?: s02_service_prGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s02_service_prGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS02_service_prGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s02_service_pr model
     */
    readonly fields: s02_service_prFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s02_service_pr.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s02_service_prClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the s02_service_pr model
 */
export interface s02_service_prFieldRefs {
    readonly id: Prisma.FieldRef<"s02_service_pr", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s02_service_pr", 'Int'>;
    readonly service_pr: Prisma.FieldRef<"s02_service_pr", 'String'>;
    readonly no_evenement_pr: Prisma.FieldRef<"s02_service_pr", 'String'>;
}
/**
 * s02_service_pr findUnique
 */
export type s02_service_prFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s02_service_pr
     */
    select?: Prisma.s02_service_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s02_service_pr
     */
    omit?: Prisma.s02_service_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s02_service_prInclude<ExtArgs> | null;
    /**
     * Filter, which s02_service_pr to fetch.
     */
    where: Prisma.s02_service_prWhereUniqueInput;
};
/**
 * s02_service_pr findUniqueOrThrow
 */
export type s02_service_prFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s02_service_pr
     */
    select?: Prisma.s02_service_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s02_service_pr
     */
    omit?: Prisma.s02_service_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s02_service_prInclude<ExtArgs> | null;
    /**
     * Filter, which s02_service_pr to fetch.
     */
    where: Prisma.s02_service_prWhereUniqueInput;
};
/**
 * s02_service_pr findFirst
 */
export type s02_service_prFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s02_service_pr
     */
    select?: Prisma.s02_service_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s02_service_pr
     */
    omit?: Prisma.s02_service_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s02_service_prInclude<ExtArgs> | null;
    /**
     * Filter, which s02_service_pr to fetch.
     */
    where?: Prisma.s02_service_prWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s02_service_prs to fetch.
     */
    orderBy?: Prisma.s02_service_prOrderByWithRelationInput | Prisma.s02_service_prOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s02_service_prs.
     */
    cursor?: Prisma.s02_service_prWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s02_service_prs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s02_service_prs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s02_service_prs.
     */
    distinct?: Prisma.S02_service_prScalarFieldEnum | Prisma.S02_service_prScalarFieldEnum[];
};
/**
 * s02_service_pr findFirstOrThrow
 */
export type s02_service_prFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s02_service_pr
     */
    select?: Prisma.s02_service_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s02_service_pr
     */
    omit?: Prisma.s02_service_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s02_service_prInclude<ExtArgs> | null;
    /**
     * Filter, which s02_service_pr to fetch.
     */
    where?: Prisma.s02_service_prWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s02_service_prs to fetch.
     */
    orderBy?: Prisma.s02_service_prOrderByWithRelationInput | Prisma.s02_service_prOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s02_service_prs.
     */
    cursor?: Prisma.s02_service_prWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s02_service_prs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s02_service_prs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s02_service_prs.
     */
    distinct?: Prisma.S02_service_prScalarFieldEnum | Prisma.S02_service_prScalarFieldEnum[];
};
/**
 * s02_service_pr findMany
 */
export type s02_service_prFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s02_service_pr
     */
    select?: Prisma.s02_service_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s02_service_pr
     */
    omit?: Prisma.s02_service_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s02_service_prInclude<ExtArgs> | null;
    /**
     * Filter, which s02_service_prs to fetch.
     */
    where?: Prisma.s02_service_prWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s02_service_prs to fetch.
     */
    orderBy?: Prisma.s02_service_prOrderByWithRelationInput | Prisma.s02_service_prOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s02_service_prs.
     */
    cursor?: Prisma.s02_service_prWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s02_service_prs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s02_service_prs.
     */
    skip?: number;
    distinct?: Prisma.S02_service_prScalarFieldEnum | Prisma.S02_service_prScalarFieldEnum[];
};
/**
 * s02_service_pr create
 */
export type s02_service_prCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s02_service_pr
     */
    select?: Prisma.s02_service_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s02_service_pr
     */
    omit?: Prisma.s02_service_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s02_service_prInclude<ExtArgs> | null;
    /**
     * The data needed to create a s02_service_pr.
     */
    data: Prisma.XOR<Prisma.s02_service_prCreateInput, Prisma.s02_service_prUncheckedCreateInput>;
};
/**
 * s02_service_pr createMany
 */
export type s02_service_prCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s02_service_prs.
     */
    data: Prisma.s02_service_prCreateManyInput | Prisma.s02_service_prCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s02_service_pr createManyAndReturn
 */
export type s02_service_prCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s02_service_pr
     */
    select?: Prisma.s02_service_prSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s02_service_pr
     */
    omit?: Prisma.s02_service_prOmit<ExtArgs> | null;
    /**
     * The data used to create many s02_service_prs.
     */
    data: Prisma.s02_service_prCreateManyInput | Prisma.s02_service_prCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s02_service_prIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s02_service_pr update
 */
export type s02_service_prUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s02_service_pr
     */
    select?: Prisma.s02_service_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s02_service_pr
     */
    omit?: Prisma.s02_service_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s02_service_prInclude<ExtArgs> | null;
    /**
     * The data needed to update a s02_service_pr.
     */
    data: Prisma.XOR<Prisma.s02_service_prUpdateInput, Prisma.s02_service_prUncheckedUpdateInput>;
    /**
     * Choose, which s02_service_pr to update.
     */
    where: Prisma.s02_service_prWhereUniqueInput;
};
/**
 * s02_service_pr updateMany
 */
export type s02_service_prUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s02_service_prs.
     */
    data: Prisma.XOR<Prisma.s02_service_prUpdateManyMutationInput, Prisma.s02_service_prUncheckedUpdateManyInput>;
    /**
     * Filter which s02_service_prs to update
     */
    where?: Prisma.s02_service_prWhereInput;
    /**
     * Limit how many s02_service_prs to update.
     */
    limit?: number;
};
/**
 * s02_service_pr updateManyAndReturn
 */
export type s02_service_prUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s02_service_pr
     */
    select?: Prisma.s02_service_prSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s02_service_pr
     */
    omit?: Prisma.s02_service_prOmit<ExtArgs> | null;
    /**
     * The data used to update s02_service_prs.
     */
    data: Prisma.XOR<Prisma.s02_service_prUpdateManyMutationInput, Prisma.s02_service_prUncheckedUpdateManyInput>;
    /**
     * Filter which s02_service_prs to update
     */
    where?: Prisma.s02_service_prWhereInput;
    /**
     * Limit how many s02_service_prs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s02_service_prIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s02_service_pr upsert
 */
export type s02_service_prUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s02_service_pr
     */
    select?: Prisma.s02_service_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s02_service_pr
     */
    omit?: Prisma.s02_service_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s02_service_prInclude<ExtArgs> | null;
    /**
     * The filter to search for the s02_service_pr to update in case it exists.
     */
    where: Prisma.s02_service_prWhereUniqueInput;
    /**
     * In case the s02_service_pr found by the `where` argument doesn't exist, create a new s02_service_pr with this data.
     */
    create: Prisma.XOR<Prisma.s02_service_prCreateInput, Prisma.s02_service_prUncheckedCreateInput>;
    /**
     * In case the s02_service_pr was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s02_service_prUpdateInput, Prisma.s02_service_prUncheckedUpdateInput>;
};
/**
 * s02_service_pr delete
 */
export type s02_service_prDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s02_service_pr
     */
    select?: Prisma.s02_service_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s02_service_pr
     */
    omit?: Prisma.s02_service_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s02_service_prInclude<ExtArgs> | null;
    /**
     * Filter which s02_service_pr to delete.
     */
    where: Prisma.s02_service_prWhereUniqueInput;
};
/**
 * s02_service_pr deleteMany
 */
export type s02_service_prDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s02_service_prs to delete
     */
    where?: Prisma.s02_service_prWhereInput;
    /**
     * Limit how many s02_service_prs to delete.
     */
    limit?: number;
};
/**
 * s02_service_pr without action
 */
export type s02_service_prDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s02_service_pr
     */
    select?: Prisma.s02_service_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s02_service_pr
     */
    omit?: Prisma.s02_service_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s02_service_prInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s02_service_pr.d.ts.map