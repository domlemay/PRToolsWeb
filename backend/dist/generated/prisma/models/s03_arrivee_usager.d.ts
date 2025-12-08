import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s03_arrivee_usager
 *
 */
export type s03_arrivee_usagerModel = runtime.Types.Result.DefaultSelection<Prisma.$s03_arrivee_usagerPayload>;
export type AggregateS03_arrivee_usager = {
    _count: S03_arrivee_usagerCountAggregateOutputType | null;
    _avg: S03_arrivee_usagerAvgAggregateOutputType | null;
    _sum: S03_arrivee_usagerSumAggregateOutputType | null;
    _min: S03_arrivee_usagerMinAggregateOutputType | null;
    _max: S03_arrivee_usagerMaxAggregateOutputType | null;
};
export type S03_arrivee_usagerAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S03_arrivee_usagerSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S03_arrivee_usagerMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    heure_arrivee_usager: Date | null;
};
export type S03_arrivee_usagerMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    heure_arrivee_usager: Date | null;
};
export type S03_arrivee_usagerCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    heure_arrivee_usager: number;
    _all: number;
};
export type S03_arrivee_usagerAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S03_arrivee_usagerSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S03_arrivee_usagerMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    heure_arrivee_usager?: true;
};
export type S03_arrivee_usagerMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    heure_arrivee_usager?: true;
};
export type S03_arrivee_usagerCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    heure_arrivee_usager?: true;
    _all?: true;
};
export type S03_arrivee_usagerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s03_arrivee_usager to aggregate.
     */
    where?: Prisma.s03_arrivee_usagerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s03_arrivee_usagers to fetch.
     */
    orderBy?: Prisma.s03_arrivee_usagerOrderByWithRelationInput | Prisma.s03_arrivee_usagerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s03_arrivee_usagerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s03_arrivee_usagers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s03_arrivee_usagers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s03_arrivee_usagers
    **/
    _count?: true | S03_arrivee_usagerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S03_arrivee_usagerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S03_arrivee_usagerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S03_arrivee_usagerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S03_arrivee_usagerMaxAggregateInputType;
};
export type GetS03_arrivee_usagerAggregateType<T extends S03_arrivee_usagerAggregateArgs> = {
    [P in keyof T & keyof AggregateS03_arrivee_usager]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS03_arrivee_usager[P]> : Prisma.GetScalarType<T[P], AggregateS03_arrivee_usager[P]>;
};
export type s03_arrivee_usagerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s03_arrivee_usagerWhereInput;
    orderBy?: Prisma.s03_arrivee_usagerOrderByWithAggregationInput | Prisma.s03_arrivee_usagerOrderByWithAggregationInput[];
    by: Prisma.S03_arrivee_usagerScalarFieldEnum[] | Prisma.S03_arrivee_usagerScalarFieldEnum;
    having?: Prisma.s03_arrivee_usagerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S03_arrivee_usagerCountAggregateInputType | true;
    _avg?: S03_arrivee_usagerAvgAggregateInputType;
    _sum?: S03_arrivee_usagerSumAggregateInputType;
    _min?: S03_arrivee_usagerMinAggregateInputType;
    _max?: S03_arrivee_usagerMaxAggregateInputType;
};
export type S03_arrivee_usagerGroupByOutputType = {
    id: number;
    rapport_id: number;
    heure_arrivee_usager: Date | null;
    _count: S03_arrivee_usagerCountAggregateOutputType | null;
    _avg: S03_arrivee_usagerAvgAggregateOutputType | null;
    _sum: S03_arrivee_usagerSumAggregateOutputType | null;
    _min: S03_arrivee_usagerMinAggregateOutputType | null;
    _max: S03_arrivee_usagerMaxAggregateOutputType | null;
};
type GetS03_arrivee_usagerGroupByPayload<T extends s03_arrivee_usagerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S03_arrivee_usagerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S03_arrivee_usagerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S03_arrivee_usagerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S03_arrivee_usagerGroupByOutputType[P]>;
}>>;
export type s03_arrivee_usagerWhereInput = {
    AND?: Prisma.s03_arrivee_usagerWhereInput | Prisma.s03_arrivee_usagerWhereInput[];
    OR?: Prisma.s03_arrivee_usagerWhereInput[];
    NOT?: Prisma.s03_arrivee_usagerWhereInput | Prisma.s03_arrivee_usagerWhereInput[];
    id?: Prisma.IntFilter<"s03_arrivee_usager"> | number;
    rapport_id?: Prisma.IntFilter<"s03_arrivee_usager"> | number;
    heure_arrivee_usager?: Prisma.DateTimeNullableFilter<"s03_arrivee_usager"> | Date | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s03_arrivee_usagerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    heure_arrivee_usager?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s03_arrivee_usagerWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id?: number;
    AND?: Prisma.s03_arrivee_usagerWhereInput | Prisma.s03_arrivee_usagerWhereInput[];
    OR?: Prisma.s03_arrivee_usagerWhereInput[];
    NOT?: Prisma.s03_arrivee_usagerWhereInput | Prisma.s03_arrivee_usagerWhereInput[];
    heure_arrivee_usager?: Prisma.DateTimeNullableFilter<"s03_arrivee_usager"> | Date | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id" | "rapport_id">;
export type s03_arrivee_usagerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    heure_arrivee_usager?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s03_arrivee_usagerCountOrderByAggregateInput;
    _avg?: Prisma.s03_arrivee_usagerAvgOrderByAggregateInput;
    _max?: Prisma.s03_arrivee_usagerMaxOrderByAggregateInput;
    _min?: Prisma.s03_arrivee_usagerMinOrderByAggregateInput;
    _sum?: Prisma.s03_arrivee_usagerSumOrderByAggregateInput;
};
export type s03_arrivee_usagerScalarWhereWithAggregatesInput = {
    AND?: Prisma.s03_arrivee_usagerScalarWhereWithAggregatesInput | Prisma.s03_arrivee_usagerScalarWhereWithAggregatesInput[];
    OR?: Prisma.s03_arrivee_usagerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s03_arrivee_usagerScalarWhereWithAggregatesInput | Prisma.s03_arrivee_usagerScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s03_arrivee_usager"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s03_arrivee_usager"> | number;
    heure_arrivee_usager?: Prisma.DateTimeNullableWithAggregatesFilter<"s03_arrivee_usager"> | Date | string | null;
};
export type s03_arrivee_usagerCreateInput = {
    heure_arrivee_usager?: Date | string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS03_arrivee_usagerInput;
};
export type s03_arrivee_usagerUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    heure_arrivee_usager?: Date | string | null;
};
export type s03_arrivee_usagerUpdateInput = {
    heure_arrivee_usager?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS03_arrivee_usagerNestedInput;
};
export type s03_arrivee_usagerUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    heure_arrivee_usager?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s03_arrivee_usagerCreateManyInput = {
    id?: number;
    rapport_id: number;
    heure_arrivee_usager?: Date | string | null;
};
export type s03_arrivee_usagerUpdateManyMutationInput = {
    heure_arrivee_usager?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s03_arrivee_usagerUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    heure_arrivee_usager?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type S03_arrivee_usagerNullableScalarRelationFilter = {
    is?: Prisma.s03_arrivee_usagerWhereInput | null;
    isNot?: Prisma.s03_arrivee_usagerWhereInput | null;
};
export type s03_arrivee_usagerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    heure_arrivee_usager?: Prisma.SortOrder;
};
export type s03_arrivee_usagerAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s03_arrivee_usagerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    heure_arrivee_usager?: Prisma.SortOrder;
};
export type s03_arrivee_usagerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    heure_arrivee_usager?: Prisma.SortOrder;
};
export type s03_arrivee_usagerSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s03_arrivee_usagerCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s03_arrivee_usagerCreateWithoutRapportInput, Prisma.s03_arrivee_usagerUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s03_arrivee_usagerCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s03_arrivee_usagerWhereUniqueInput;
};
export type s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s03_arrivee_usagerCreateWithoutRapportInput, Prisma.s03_arrivee_usagerUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s03_arrivee_usagerCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s03_arrivee_usagerWhereUniqueInput;
};
export type s03_arrivee_usagerUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s03_arrivee_usagerCreateWithoutRapportInput, Prisma.s03_arrivee_usagerUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s03_arrivee_usagerCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s03_arrivee_usagerUpsertWithoutRapportInput;
    disconnect?: Prisma.s03_arrivee_usagerWhereInput | boolean;
    delete?: Prisma.s03_arrivee_usagerWhereInput | boolean;
    connect?: Prisma.s03_arrivee_usagerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s03_arrivee_usagerUpdateToOneWithWhereWithoutRapportInput, Prisma.s03_arrivee_usagerUpdateWithoutRapportInput>, Prisma.s03_arrivee_usagerUncheckedUpdateWithoutRapportInput>;
};
export type s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s03_arrivee_usagerCreateWithoutRapportInput, Prisma.s03_arrivee_usagerUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s03_arrivee_usagerCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s03_arrivee_usagerUpsertWithoutRapportInput;
    disconnect?: Prisma.s03_arrivee_usagerWhereInput | boolean;
    delete?: Prisma.s03_arrivee_usagerWhereInput | boolean;
    connect?: Prisma.s03_arrivee_usagerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s03_arrivee_usagerUpdateToOneWithWhereWithoutRapportInput, Prisma.s03_arrivee_usagerUpdateWithoutRapportInput>, Prisma.s03_arrivee_usagerUncheckedUpdateWithoutRapportInput>;
};
export type s03_arrivee_usagerCreateWithoutRapportInput = {
    heure_arrivee_usager?: Date | string | null;
};
export type s03_arrivee_usagerUncheckedCreateWithoutRapportInput = {
    id?: number;
    heure_arrivee_usager?: Date | string | null;
};
export type s03_arrivee_usagerCreateOrConnectWithoutRapportInput = {
    where: Prisma.s03_arrivee_usagerWhereUniqueInput;
    create: Prisma.XOR<Prisma.s03_arrivee_usagerCreateWithoutRapportInput, Prisma.s03_arrivee_usagerUncheckedCreateWithoutRapportInput>;
};
export type s03_arrivee_usagerUpsertWithoutRapportInput = {
    update: Prisma.XOR<Prisma.s03_arrivee_usagerUpdateWithoutRapportInput, Prisma.s03_arrivee_usagerUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s03_arrivee_usagerCreateWithoutRapportInput, Prisma.s03_arrivee_usagerUncheckedCreateWithoutRapportInput>;
    where?: Prisma.s03_arrivee_usagerWhereInput;
};
export type s03_arrivee_usagerUpdateToOneWithWhereWithoutRapportInput = {
    where?: Prisma.s03_arrivee_usagerWhereInput;
    data: Prisma.XOR<Prisma.s03_arrivee_usagerUpdateWithoutRapportInput, Prisma.s03_arrivee_usagerUncheckedUpdateWithoutRapportInput>;
};
export type s03_arrivee_usagerUpdateWithoutRapportInput = {
    heure_arrivee_usager?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s03_arrivee_usagerUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    heure_arrivee_usager?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s03_arrivee_usagerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    heure_arrivee_usager?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s03_arrivee_usager"]>;
export type s03_arrivee_usagerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    heure_arrivee_usager?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s03_arrivee_usager"]>;
export type s03_arrivee_usagerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    heure_arrivee_usager?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s03_arrivee_usager"]>;
export type s03_arrivee_usagerSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    heure_arrivee_usager?: boolean;
};
export type s03_arrivee_usagerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "heure_arrivee_usager", ExtArgs["result"]["s03_arrivee_usager"]>;
export type s03_arrivee_usagerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s03_arrivee_usagerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s03_arrivee_usagerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s03_arrivee_usagerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s03_arrivee_usager";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        heure_arrivee_usager: Date | null;
    }, ExtArgs["result"]["s03_arrivee_usager"]>;
    composites: {};
};
export type s03_arrivee_usagerGetPayload<S extends boolean | null | undefined | s03_arrivee_usagerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s03_arrivee_usagerPayload, S>;
export type s03_arrivee_usagerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s03_arrivee_usagerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S03_arrivee_usagerCountAggregateInputType | true;
};
export interface s03_arrivee_usagerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s03_arrivee_usager'];
        meta: {
            name: 's03_arrivee_usager';
        };
    };
    /**
     * Find zero or one S03_arrivee_usager that matches the filter.
     * @param {s03_arrivee_usagerFindUniqueArgs} args - Arguments to find a S03_arrivee_usager
     * @example
     * // Get one S03_arrivee_usager
     * const s03_arrivee_usager = await prisma.s03_arrivee_usager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s03_arrivee_usagerFindUniqueArgs>(args: Prisma.SelectSubset<T, s03_arrivee_usagerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s03_arrivee_usagerClient<runtime.Types.Result.GetResult<Prisma.$s03_arrivee_usagerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S03_arrivee_usager that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s03_arrivee_usagerFindUniqueOrThrowArgs} args - Arguments to find a S03_arrivee_usager
     * @example
     * // Get one S03_arrivee_usager
     * const s03_arrivee_usager = await prisma.s03_arrivee_usager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s03_arrivee_usagerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s03_arrivee_usagerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s03_arrivee_usagerClient<runtime.Types.Result.GetResult<Prisma.$s03_arrivee_usagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S03_arrivee_usager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s03_arrivee_usagerFindFirstArgs} args - Arguments to find a S03_arrivee_usager
     * @example
     * // Get one S03_arrivee_usager
     * const s03_arrivee_usager = await prisma.s03_arrivee_usager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s03_arrivee_usagerFindFirstArgs>(args?: Prisma.SelectSubset<T, s03_arrivee_usagerFindFirstArgs<ExtArgs>>): Prisma.Prisma__s03_arrivee_usagerClient<runtime.Types.Result.GetResult<Prisma.$s03_arrivee_usagerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S03_arrivee_usager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s03_arrivee_usagerFindFirstOrThrowArgs} args - Arguments to find a S03_arrivee_usager
     * @example
     * // Get one S03_arrivee_usager
     * const s03_arrivee_usager = await prisma.s03_arrivee_usager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s03_arrivee_usagerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s03_arrivee_usagerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s03_arrivee_usagerClient<runtime.Types.Result.GetResult<Prisma.$s03_arrivee_usagerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S03_arrivee_usagers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s03_arrivee_usagerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S03_arrivee_usagers
     * const s03_arrivee_usagers = await prisma.s03_arrivee_usager.findMany()
     *
     * // Get first 10 S03_arrivee_usagers
     * const s03_arrivee_usagers = await prisma.s03_arrivee_usager.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s03_arrivee_usagerWithIdOnly = await prisma.s03_arrivee_usager.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s03_arrivee_usagerFindManyArgs>(args?: Prisma.SelectSubset<T, s03_arrivee_usagerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s03_arrivee_usagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S03_arrivee_usager.
     * @param {s03_arrivee_usagerCreateArgs} args - Arguments to create a S03_arrivee_usager.
     * @example
     * // Create one S03_arrivee_usager
     * const S03_arrivee_usager = await prisma.s03_arrivee_usager.create({
     *   data: {
     *     // ... data to create a S03_arrivee_usager
     *   }
     * })
     *
     */
    create<T extends s03_arrivee_usagerCreateArgs>(args: Prisma.SelectSubset<T, s03_arrivee_usagerCreateArgs<ExtArgs>>): Prisma.Prisma__s03_arrivee_usagerClient<runtime.Types.Result.GetResult<Prisma.$s03_arrivee_usagerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S03_arrivee_usagers.
     * @param {s03_arrivee_usagerCreateManyArgs} args - Arguments to create many S03_arrivee_usagers.
     * @example
     * // Create many S03_arrivee_usagers
     * const s03_arrivee_usager = await prisma.s03_arrivee_usager.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s03_arrivee_usagerCreateManyArgs>(args?: Prisma.SelectSubset<T, s03_arrivee_usagerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S03_arrivee_usagers and returns the data saved in the database.
     * @param {s03_arrivee_usagerCreateManyAndReturnArgs} args - Arguments to create many S03_arrivee_usagers.
     * @example
     * // Create many S03_arrivee_usagers
     * const s03_arrivee_usager = await prisma.s03_arrivee_usager.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S03_arrivee_usagers and only return the `id`
     * const s03_arrivee_usagerWithIdOnly = await prisma.s03_arrivee_usager.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s03_arrivee_usagerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s03_arrivee_usagerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s03_arrivee_usagerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S03_arrivee_usager.
     * @param {s03_arrivee_usagerDeleteArgs} args - Arguments to delete one S03_arrivee_usager.
     * @example
     * // Delete one S03_arrivee_usager
     * const S03_arrivee_usager = await prisma.s03_arrivee_usager.delete({
     *   where: {
     *     // ... filter to delete one S03_arrivee_usager
     *   }
     * })
     *
     */
    delete<T extends s03_arrivee_usagerDeleteArgs>(args: Prisma.SelectSubset<T, s03_arrivee_usagerDeleteArgs<ExtArgs>>): Prisma.Prisma__s03_arrivee_usagerClient<runtime.Types.Result.GetResult<Prisma.$s03_arrivee_usagerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S03_arrivee_usager.
     * @param {s03_arrivee_usagerUpdateArgs} args - Arguments to update one S03_arrivee_usager.
     * @example
     * // Update one S03_arrivee_usager
     * const s03_arrivee_usager = await prisma.s03_arrivee_usager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s03_arrivee_usagerUpdateArgs>(args: Prisma.SelectSubset<T, s03_arrivee_usagerUpdateArgs<ExtArgs>>): Prisma.Prisma__s03_arrivee_usagerClient<runtime.Types.Result.GetResult<Prisma.$s03_arrivee_usagerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S03_arrivee_usagers.
     * @param {s03_arrivee_usagerDeleteManyArgs} args - Arguments to filter S03_arrivee_usagers to delete.
     * @example
     * // Delete a few S03_arrivee_usagers
     * const { count } = await prisma.s03_arrivee_usager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s03_arrivee_usagerDeleteManyArgs>(args?: Prisma.SelectSubset<T, s03_arrivee_usagerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S03_arrivee_usagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s03_arrivee_usagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S03_arrivee_usagers
     * const s03_arrivee_usager = await prisma.s03_arrivee_usager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s03_arrivee_usagerUpdateManyArgs>(args: Prisma.SelectSubset<T, s03_arrivee_usagerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S03_arrivee_usagers and returns the data updated in the database.
     * @param {s03_arrivee_usagerUpdateManyAndReturnArgs} args - Arguments to update many S03_arrivee_usagers.
     * @example
     * // Update many S03_arrivee_usagers
     * const s03_arrivee_usager = await prisma.s03_arrivee_usager.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S03_arrivee_usagers and only return the `id`
     * const s03_arrivee_usagerWithIdOnly = await prisma.s03_arrivee_usager.updateManyAndReturn({
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
    updateManyAndReturn<T extends s03_arrivee_usagerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s03_arrivee_usagerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s03_arrivee_usagerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S03_arrivee_usager.
     * @param {s03_arrivee_usagerUpsertArgs} args - Arguments to update or create a S03_arrivee_usager.
     * @example
     * // Update or create a S03_arrivee_usager
     * const s03_arrivee_usager = await prisma.s03_arrivee_usager.upsert({
     *   create: {
     *     // ... data to create a S03_arrivee_usager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S03_arrivee_usager we want to update
     *   }
     * })
     */
    upsert<T extends s03_arrivee_usagerUpsertArgs>(args: Prisma.SelectSubset<T, s03_arrivee_usagerUpsertArgs<ExtArgs>>): Prisma.Prisma__s03_arrivee_usagerClient<runtime.Types.Result.GetResult<Prisma.$s03_arrivee_usagerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S03_arrivee_usagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s03_arrivee_usagerCountArgs} args - Arguments to filter S03_arrivee_usagers to count.
     * @example
     * // Count the number of S03_arrivee_usagers
     * const count = await prisma.s03_arrivee_usager.count({
     *   where: {
     *     // ... the filter for the S03_arrivee_usagers we want to count
     *   }
     * })
    **/
    count<T extends s03_arrivee_usagerCountArgs>(args?: Prisma.Subset<T, s03_arrivee_usagerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S03_arrivee_usagerCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S03_arrivee_usager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S03_arrivee_usagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S03_arrivee_usagerAggregateArgs>(args: Prisma.Subset<T, S03_arrivee_usagerAggregateArgs>): Prisma.PrismaPromise<GetS03_arrivee_usagerAggregateType<T>>;
    /**
     * Group by S03_arrivee_usager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s03_arrivee_usagerGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s03_arrivee_usagerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s03_arrivee_usagerGroupByArgs['orderBy'];
    } : {
        orderBy?: s03_arrivee_usagerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s03_arrivee_usagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS03_arrivee_usagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s03_arrivee_usager model
     */
    readonly fields: s03_arrivee_usagerFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s03_arrivee_usager.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s03_arrivee_usagerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the s03_arrivee_usager model
 */
export interface s03_arrivee_usagerFieldRefs {
    readonly id: Prisma.FieldRef<"s03_arrivee_usager", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s03_arrivee_usager", 'Int'>;
    readonly heure_arrivee_usager: Prisma.FieldRef<"s03_arrivee_usager", 'DateTime'>;
}
/**
 * s03_arrivee_usager findUnique
 */
export type s03_arrivee_usagerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s03_arrivee_usager
     */
    select?: Prisma.s03_arrivee_usagerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s03_arrivee_usager
     */
    omit?: Prisma.s03_arrivee_usagerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s03_arrivee_usagerInclude<ExtArgs> | null;
    /**
     * Filter, which s03_arrivee_usager to fetch.
     */
    where: Prisma.s03_arrivee_usagerWhereUniqueInput;
};
/**
 * s03_arrivee_usager findUniqueOrThrow
 */
export type s03_arrivee_usagerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s03_arrivee_usager
     */
    select?: Prisma.s03_arrivee_usagerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s03_arrivee_usager
     */
    omit?: Prisma.s03_arrivee_usagerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s03_arrivee_usagerInclude<ExtArgs> | null;
    /**
     * Filter, which s03_arrivee_usager to fetch.
     */
    where: Prisma.s03_arrivee_usagerWhereUniqueInput;
};
/**
 * s03_arrivee_usager findFirst
 */
export type s03_arrivee_usagerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s03_arrivee_usager
     */
    select?: Prisma.s03_arrivee_usagerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s03_arrivee_usager
     */
    omit?: Prisma.s03_arrivee_usagerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s03_arrivee_usagerInclude<ExtArgs> | null;
    /**
     * Filter, which s03_arrivee_usager to fetch.
     */
    where?: Prisma.s03_arrivee_usagerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s03_arrivee_usagers to fetch.
     */
    orderBy?: Prisma.s03_arrivee_usagerOrderByWithRelationInput | Prisma.s03_arrivee_usagerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s03_arrivee_usagers.
     */
    cursor?: Prisma.s03_arrivee_usagerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s03_arrivee_usagers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s03_arrivee_usagers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s03_arrivee_usagers.
     */
    distinct?: Prisma.S03_arrivee_usagerScalarFieldEnum | Prisma.S03_arrivee_usagerScalarFieldEnum[];
};
/**
 * s03_arrivee_usager findFirstOrThrow
 */
export type s03_arrivee_usagerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s03_arrivee_usager
     */
    select?: Prisma.s03_arrivee_usagerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s03_arrivee_usager
     */
    omit?: Prisma.s03_arrivee_usagerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s03_arrivee_usagerInclude<ExtArgs> | null;
    /**
     * Filter, which s03_arrivee_usager to fetch.
     */
    where?: Prisma.s03_arrivee_usagerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s03_arrivee_usagers to fetch.
     */
    orderBy?: Prisma.s03_arrivee_usagerOrderByWithRelationInput | Prisma.s03_arrivee_usagerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s03_arrivee_usagers.
     */
    cursor?: Prisma.s03_arrivee_usagerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s03_arrivee_usagers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s03_arrivee_usagers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s03_arrivee_usagers.
     */
    distinct?: Prisma.S03_arrivee_usagerScalarFieldEnum | Prisma.S03_arrivee_usagerScalarFieldEnum[];
};
/**
 * s03_arrivee_usager findMany
 */
export type s03_arrivee_usagerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s03_arrivee_usager
     */
    select?: Prisma.s03_arrivee_usagerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s03_arrivee_usager
     */
    omit?: Prisma.s03_arrivee_usagerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s03_arrivee_usagerInclude<ExtArgs> | null;
    /**
     * Filter, which s03_arrivee_usagers to fetch.
     */
    where?: Prisma.s03_arrivee_usagerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s03_arrivee_usagers to fetch.
     */
    orderBy?: Prisma.s03_arrivee_usagerOrderByWithRelationInput | Prisma.s03_arrivee_usagerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s03_arrivee_usagers.
     */
    cursor?: Prisma.s03_arrivee_usagerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s03_arrivee_usagers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s03_arrivee_usagers.
     */
    skip?: number;
    distinct?: Prisma.S03_arrivee_usagerScalarFieldEnum | Prisma.S03_arrivee_usagerScalarFieldEnum[];
};
/**
 * s03_arrivee_usager create
 */
export type s03_arrivee_usagerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s03_arrivee_usager
     */
    select?: Prisma.s03_arrivee_usagerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s03_arrivee_usager
     */
    omit?: Prisma.s03_arrivee_usagerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s03_arrivee_usagerInclude<ExtArgs> | null;
    /**
     * The data needed to create a s03_arrivee_usager.
     */
    data: Prisma.XOR<Prisma.s03_arrivee_usagerCreateInput, Prisma.s03_arrivee_usagerUncheckedCreateInput>;
};
/**
 * s03_arrivee_usager createMany
 */
export type s03_arrivee_usagerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s03_arrivee_usagers.
     */
    data: Prisma.s03_arrivee_usagerCreateManyInput | Prisma.s03_arrivee_usagerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s03_arrivee_usager createManyAndReturn
 */
export type s03_arrivee_usagerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s03_arrivee_usager
     */
    select?: Prisma.s03_arrivee_usagerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s03_arrivee_usager
     */
    omit?: Prisma.s03_arrivee_usagerOmit<ExtArgs> | null;
    /**
     * The data used to create many s03_arrivee_usagers.
     */
    data: Prisma.s03_arrivee_usagerCreateManyInput | Prisma.s03_arrivee_usagerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s03_arrivee_usagerIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s03_arrivee_usager update
 */
export type s03_arrivee_usagerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s03_arrivee_usager
     */
    select?: Prisma.s03_arrivee_usagerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s03_arrivee_usager
     */
    omit?: Prisma.s03_arrivee_usagerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s03_arrivee_usagerInclude<ExtArgs> | null;
    /**
     * The data needed to update a s03_arrivee_usager.
     */
    data: Prisma.XOR<Prisma.s03_arrivee_usagerUpdateInput, Prisma.s03_arrivee_usagerUncheckedUpdateInput>;
    /**
     * Choose, which s03_arrivee_usager to update.
     */
    where: Prisma.s03_arrivee_usagerWhereUniqueInput;
};
/**
 * s03_arrivee_usager updateMany
 */
export type s03_arrivee_usagerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s03_arrivee_usagers.
     */
    data: Prisma.XOR<Prisma.s03_arrivee_usagerUpdateManyMutationInput, Prisma.s03_arrivee_usagerUncheckedUpdateManyInput>;
    /**
     * Filter which s03_arrivee_usagers to update
     */
    where?: Prisma.s03_arrivee_usagerWhereInput;
    /**
     * Limit how many s03_arrivee_usagers to update.
     */
    limit?: number;
};
/**
 * s03_arrivee_usager updateManyAndReturn
 */
export type s03_arrivee_usagerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s03_arrivee_usager
     */
    select?: Prisma.s03_arrivee_usagerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s03_arrivee_usager
     */
    omit?: Prisma.s03_arrivee_usagerOmit<ExtArgs> | null;
    /**
     * The data used to update s03_arrivee_usagers.
     */
    data: Prisma.XOR<Prisma.s03_arrivee_usagerUpdateManyMutationInput, Prisma.s03_arrivee_usagerUncheckedUpdateManyInput>;
    /**
     * Filter which s03_arrivee_usagers to update
     */
    where?: Prisma.s03_arrivee_usagerWhereInput;
    /**
     * Limit how many s03_arrivee_usagers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s03_arrivee_usagerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s03_arrivee_usager upsert
 */
export type s03_arrivee_usagerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s03_arrivee_usager
     */
    select?: Prisma.s03_arrivee_usagerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s03_arrivee_usager
     */
    omit?: Prisma.s03_arrivee_usagerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s03_arrivee_usagerInclude<ExtArgs> | null;
    /**
     * The filter to search for the s03_arrivee_usager to update in case it exists.
     */
    where: Prisma.s03_arrivee_usagerWhereUniqueInput;
    /**
     * In case the s03_arrivee_usager found by the `where` argument doesn't exist, create a new s03_arrivee_usager with this data.
     */
    create: Prisma.XOR<Prisma.s03_arrivee_usagerCreateInput, Prisma.s03_arrivee_usagerUncheckedCreateInput>;
    /**
     * In case the s03_arrivee_usager was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s03_arrivee_usagerUpdateInput, Prisma.s03_arrivee_usagerUncheckedUpdateInput>;
};
/**
 * s03_arrivee_usager delete
 */
export type s03_arrivee_usagerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s03_arrivee_usager
     */
    select?: Prisma.s03_arrivee_usagerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s03_arrivee_usager
     */
    omit?: Prisma.s03_arrivee_usagerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s03_arrivee_usagerInclude<ExtArgs> | null;
    /**
     * Filter which s03_arrivee_usager to delete.
     */
    where: Prisma.s03_arrivee_usagerWhereUniqueInput;
};
/**
 * s03_arrivee_usager deleteMany
 */
export type s03_arrivee_usagerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s03_arrivee_usagers to delete
     */
    where?: Prisma.s03_arrivee_usagerWhereInput;
    /**
     * Limit how many s03_arrivee_usagers to delete.
     */
    limit?: number;
};
/**
 * s03_arrivee_usager without action
 */
export type s03_arrivee_usagerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s03_arrivee_usager
     */
    select?: Prisma.s03_arrivee_usagerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s03_arrivee_usager
     */
    omit?: Prisma.s03_arrivee_usagerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s03_arrivee_usagerInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s03_arrivee_usager.d.ts.map