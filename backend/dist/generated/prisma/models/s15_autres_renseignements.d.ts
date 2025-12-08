import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s15_autres_renseignements
 *
 */
export type s15_autres_renseignementsModel = runtime.Types.Result.DefaultSelection<Prisma.$s15_autres_renseignementsPayload>;
export type AggregateS15_autres_renseignements = {
    _count: S15_autres_renseignementsCountAggregateOutputType | null;
    _avg: S15_autres_renseignementsAvgAggregateOutputType | null;
    _sum: S15_autres_renseignementsSumAggregateOutputType | null;
    _min: S15_autres_renseignementsMinAggregateOutputType | null;
    _max: S15_autres_renseignementsMaxAggregateOutputType | null;
};
export type S15_autres_renseignementsAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S15_autres_renseignementsSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S15_autres_renseignementsMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    texte: string | null;
};
export type S15_autres_renseignementsMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    texte: string | null;
};
export type S15_autres_renseignementsCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    texte: number;
    _all: number;
};
export type S15_autres_renseignementsAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S15_autres_renseignementsSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S15_autres_renseignementsMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    texte?: true;
};
export type S15_autres_renseignementsMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    texte?: true;
};
export type S15_autres_renseignementsCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    texte?: true;
    _all?: true;
};
export type S15_autres_renseignementsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s15_autres_renseignements to aggregate.
     */
    where?: Prisma.s15_autres_renseignementsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s15_autres_renseignements to fetch.
     */
    orderBy?: Prisma.s15_autres_renseignementsOrderByWithRelationInput | Prisma.s15_autres_renseignementsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s15_autres_renseignementsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s15_autres_renseignements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s15_autres_renseignements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s15_autres_renseignements
    **/
    _count?: true | S15_autres_renseignementsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S15_autres_renseignementsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S15_autres_renseignementsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S15_autres_renseignementsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S15_autres_renseignementsMaxAggregateInputType;
};
export type GetS15_autres_renseignementsAggregateType<T extends S15_autres_renseignementsAggregateArgs> = {
    [P in keyof T & keyof AggregateS15_autres_renseignements]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS15_autres_renseignements[P]> : Prisma.GetScalarType<T[P], AggregateS15_autres_renseignements[P]>;
};
export type s15_autres_renseignementsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s15_autres_renseignementsWhereInput;
    orderBy?: Prisma.s15_autres_renseignementsOrderByWithAggregationInput | Prisma.s15_autres_renseignementsOrderByWithAggregationInput[];
    by: Prisma.S15_autres_renseignementsScalarFieldEnum[] | Prisma.S15_autres_renseignementsScalarFieldEnum;
    having?: Prisma.s15_autres_renseignementsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S15_autres_renseignementsCountAggregateInputType | true;
    _avg?: S15_autres_renseignementsAvgAggregateInputType;
    _sum?: S15_autres_renseignementsSumAggregateInputType;
    _min?: S15_autres_renseignementsMinAggregateInputType;
    _max?: S15_autres_renseignementsMaxAggregateInputType;
};
export type S15_autres_renseignementsGroupByOutputType = {
    id: number;
    rapport_id: number;
    texte: string | null;
    _count: S15_autres_renseignementsCountAggregateOutputType | null;
    _avg: S15_autres_renseignementsAvgAggregateOutputType | null;
    _sum: S15_autres_renseignementsSumAggregateOutputType | null;
    _min: S15_autres_renseignementsMinAggregateOutputType | null;
    _max: S15_autres_renseignementsMaxAggregateOutputType | null;
};
type GetS15_autres_renseignementsGroupByPayload<T extends s15_autres_renseignementsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S15_autres_renseignementsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S15_autres_renseignementsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S15_autres_renseignementsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S15_autres_renseignementsGroupByOutputType[P]>;
}>>;
export type s15_autres_renseignementsWhereInput = {
    AND?: Prisma.s15_autres_renseignementsWhereInput | Prisma.s15_autres_renseignementsWhereInput[];
    OR?: Prisma.s15_autres_renseignementsWhereInput[];
    NOT?: Prisma.s15_autres_renseignementsWhereInput | Prisma.s15_autres_renseignementsWhereInput[];
    id?: Prisma.IntFilter<"s15_autres_renseignements"> | number;
    rapport_id?: Prisma.IntFilter<"s15_autres_renseignements"> | number;
    texte?: Prisma.StringNullableFilter<"s15_autres_renseignements"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s15_autres_renseignementsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    texte?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s15_autres_renseignementsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id?: number;
    AND?: Prisma.s15_autres_renseignementsWhereInput | Prisma.s15_autres_renseignementsWhereInput[];
    OR?: Prisma.s15_autres_renseignementsWhereInput[];
    NOT?: Prisma.s15_autres_renseignementsWhereInput | Prisma.s15_autres_renseignementsWhereInput[];
    texte?: Prisma.StringNullableFilter<"s15_autres_renseignements"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id" | "rapport_id">;
export type s15_autres_renseignementsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    texte?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s15_autres_renseignementsCountOrderByAggregateInput;
    _avg?: Prisma.s15_autres_renseignementsAvgOrderByAggregateInput;
    _max?: Prisma.s15_autres_renseignementsMaxOrderByAggregateInput;
    _min?: Prisma.s15_autres_renseignementsMinOrderByAggregateInput;
    _sum?: Prisma.s15_autres_renseignementsSumOrderByAggregateInput;
};
export type s15_autres_renseignementsScalarWhereWithAggregatesInput = {
    AND?: Prisma.s15_autres_renseignementsScalarWhereWithAggregatesInput | Prisma.s15_autres_renseignementsScalarWhereWithAggregatesInput[];
    OR?: Prisma.s15_autres_renseignementsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s15_autres_renseignementsScalarWhereWithAggregatesInput | Prisma.s15_autres_renseignementsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s15_autres_renseignements"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s15_autres_renseignements"> | number;
    texte?: Prisma.StringNullableWithAggregatesFilter<"s15_autres_renseignements"> | string | null;
};
export type s15_autres_renseignementsCreateInput = {
    texte?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS15_autres_renseignementsInput;
};
export type s15_autres_renseignementsUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    texte?: string | null;
};
export type s15_autres_renseignementsUpdateInput = {
    texte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS15_autres_renseignementsNestedInput;
};
export type s15_autres_renseignementsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    texte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s15_autres_renseignementsCreateManyInput = {
    id?: number;
    rapport_id: number;
    texte?: string | null;
};
export type s15_autres_renseignementsUpdateManyMutationInput = {
    texte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s15_autres_renseignementsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    texte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type S15_autres_renseignementsNullableScalarRelationFilter = {
    is?: Prisma.s15_autres_renseignementsWhereInput | null;
    isNot?: Prisma.s15_autres_renseignementsWhereInput | null;
};
export type s15_autres_renseignementsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    texte?: Prisma.SortOrder;
};
export type s15_autres_renseignementsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s15_autres_renseignementsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    texte?: Prisma.SortOrder;
};
export type s15_autres_renseignementsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    texte?: Prisma.SortOrder;
};
export type s15_autres_renseignementsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s15_autres_renseignementsCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s15_autres_renseignementsCreateWithoutRapportInput, Prisma.s15_autres_renseignementsUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s15_autres_renseignementsCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s15_autres_renseignementsWhereUniqueInput;
};
export type s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s15_autres_renseignementsCreateWithoutRapportInput, Prisma.s15_autres_renseignementsUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s15_autres_renseignementsCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s15_autres_renseignementsWhereUniqueInput;
};
export type s15_autres_renseignementsUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s15_autres_renseignementsCreateWithoutRapportInput, Prisma.s15_autres_renseignementsUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s15_autres_renseignementsCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s15_autres_renseignementsUpsertWithoutRapportInput;
    disconnect?: Prisma.s15_autres_renseignementsWhereInput | boolean;
    delete?: Prisma.s15_autres_renseignementsWhereInput | boolean;
    connect?: Prisma.s15_autres_renseignementsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s15_autres_renseignementsUpdateToOneWithWhereWithoutRapportInput, Prisma.s15_autres_renseignementsUpdateWithoutRapportInput>, Prisma.s15_autres_renseignementsUncheckedUpdateWithoutRapportInput>;
};
export type s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s15_autres_renseignementsCreateWithoutRapportInput, Prisma.s15_autres_renseignementsUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s15_autres_renseignementsCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s15_autres_renseignementsUpsertWithoutRapportInput;
    disconnect?: Prisma.s15_autres_renseignementsWhereInput | boolean;
    delete?: Prisma.s15_autres_renseignementsWhereInput | boolean;
    connect?: Prisma.s15_autres_renseignementsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s15_autres_renseignementsUpdateToOneWithWhereWithoutRapportInput, Prisma.s15_autres_renseignementsUpdateWithoutRapportInput>, Prisma.s15_autres_renseignementsUncheckedUpdateWithoutRapportInput>;
};
export type s15_autres_renseignementsCreateWithoutRapportInput = {
    texte?: string | null;
};
export type s15_autres_renseignementsUncheckedCreateWithoutRapportInput = {
    id?: number;
    texte?: string | null;
};
export type s15_autres_renseignementsCreateOrConnectWithoutRapportInput = {
    where: Prisma.s15_autres_renseignementsWhereUniqueInput;
    create: Prisma.XOR<Prisma.s15_autres_renseignementsCreateWithoutRapportInput, Prisma.s15_autres_renseignementsUncheckedCreateWithoutRapportInput>;
};
export type s15_autres_renseignementsUpsertWithoutRapportInput = {
    update: Prisma.XOR<Prisma.s15_autres_renseignementsUpdateWithoutRapportInput, Prisma.s15_autres_renseignementsUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s15_autres_renseignementsCreateWithoutRapportInput, Prisma.s15_autres_renseignementsUncheckedCreateWithoutRapportInput>;
    where?: Prisma.s15_autres_renseignementsWhereInput;
};
export type s15_autres_renseignementsUpdateToOneWithWhereWithoutRapportInput = {
    where?: Prisma.s15_autres_renseignementsWhereInput;
    data: Prisma.XOR<Prisma.s15_autres_renseignementsUpdateWithoutRapportInput, Prisma.s15_autres_renseignementsUncheckedUpdateWithoutRapportInput>;
};
export type s15_autres_renseignementsUpdateWithoutRapportInput = {
    texte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s15_autres_renseignementsUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    texte?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s15_autres_renseignementsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    texte?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s15_autres_renseignements"]>;
export type s15_autres_renseignementsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    texte?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s15_autres_renseignements"]>;
export type s15_autres_renseignementsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    texte?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s15_autres_renseignements"]>;
export type s15_autres_renseignementsSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    texte?: boolean;
};
export type s15_autres_renseignementsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "texte", ExtArgs["result"]["s15_autres_renseignements"]>;
export type s15_autres_renseignementsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s15_autres_renseignementsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s15_autres_renseignementsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s15_autres_renseignementsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s15_autres_renseignements";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        texte: string | null;
    }, ExtArgs["result"]["s15_autres_renseignements"]>;
    composites: {};
};
export type s15_autres_renseignementsGetPayload<S extends boolean | null | undefined | s15_autres_renseignementsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s15_autres_renseignementsPayload, S>;
export type s15_autres_renseignementsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s15_autres_renseignementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S15_autres_renseignementsCountAggregateInputType | true;
};
export interface s15_autres_renseignementsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s15_autres_renseignements'];
        meta: {
            name: 's15_autres_renseignements';
        };
    };
    /**
     * Find zero or one S15_autres_renseignements that matches the filter.
     * @param {s15_autres_renseignementsFindUniqueArgs} args - Arguments to find a S15_autres_renseignements
     * @example
     * // Get one S15_autres_renseignements
     * const s15_autres_renseignements = await prisma.s15_autres_renseignements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s15_autres_renseignementsFindUniqueArgs>(args: Prisma.SelectSubset<T, s15_autres_renseignementsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s15_autres_renseignementsClient<runtime.Types.Result.GetResult<Prisma.$s15_autres_renseignementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S15_autres_renseignements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s15_autres_renseignementsFindUniqueOrThrowArgs} args - Arguments to find a S15_autres_renseignements
     * @example
     * // Get one S15_autres_renseignements
     * const s15_autres_renseignements = await prisma.s15_autres_renseignements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s15_autres_renseignementsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s15_autres_renseignementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s15_autres_renseignementsClient<runtime.Types.Result.GetResult<Prisma.$s15_autres_renseignementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S15_autres_renseignements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s15_autres_renseignementsFindFirstArgs} args - Arguments to find a S15_autres_renseignements
     * @example
     * // Get one S15_autres_renseignements
     * const s15_autres_renseignements = await prisma.s15_autres_renseignements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s15_autres_renseignementsFindFirstArgs>(args?: Prisma.SelectSubset<T, s15_autres_renseignementsFindFirstArgs<ExtArgs>>): Prisma.Prisma__s15_autres_renseignementsClient<runtime.Types.Result.GetResult<Prisma.$s15_autres_renseignementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S15_autres_renseignements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s15_autres_renseignementsFindFirstOrThrowArgs} args - Arguments to find a S15_autres_renseignements
     * @example
     * // Get one S15_autres_renseignements
     * const s15_autres_renseignements = await prisma.s15_autres_renseignements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s15_autres_renseignementsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s15_autres_renseignementsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s15_autres_renseignementsClient<runtime.Types.Result.GetResult<Prisma.$s15_autres_renseignementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S15_autres_renseignements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s15_autres_renseignementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S15_autres_renseignements
     * const s15_autres_renseignements = await prisma.s15_autres_renseignements.findMany()
     *
     * // Get first 10 S15_autres_renseignements
     * const s15_autres_renseignements = await prisma.s15_autres_renseignements.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s15_autres_renseignementsWithIdOnly = await prisma.s15_autres_renseignements.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s15_autres_renseignementsFindManyArgs>(args?: Prisma.SelectSubset<T, s15_autres_renseignementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s15_autres_renseignementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S15_autres_renseignements.
     * @param {s15_autres_renseignementsCreateArgs} args - Arguments to create a S15_autres_renseignements.
     * @example
     * // Create one S15_autres_renseignements
     * const S15_autres_renseignements = await prisma.s15_autres_renseignements.create({
     *   data: {
     *     // ... data to create a S15_autres_renseignements
     *   }
     * })
     *
     */
    create<T extends s15_autres_renseignementsCreateArgs>(args: Prisma.SelectSubset<T, s15_autres_renseignementsCreateArgs<ExtArgs>>): Prisma.Prisma__s15_autres_renseignementsClient<runtime.Types.Result.GetResult<Prisma.$s15_autres_renseignementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S15_autres_renseignements.
     * @param {s15_autres_renseignementsCreateManyArgs} args - Arguments to create many S15_autres_renseignements.
     * @example
     * // Create many S15_autres_renseignements
     * const s15_autres_renseignements = await prisma.s15_autres_renseignements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s15_autres_renseignementsCreateManyArgs>(args?: Prisma.SelectSubset<T, s15_autres_renseignementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S15_autres_renseignements and returns the data saved in the database.
     * @param {s15_autres_renseignementsCreateManyAndReturnArgs} args - Arguments to create many S15_autres_renseignements.
     * @example
     * // Create many S15_autres_renseignements
     * const s15_autres_renseignements = await prisma.s15_autres_renseignements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S15_autres_renseignements and only return the `id`
     * const s15_autres_renseignementsWithIdOnly = await prisma.s15_autres_renseignements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s15_autres_renseignementsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s15_autres_renseignementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s15_autres_renseignementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S15_autres_renseignements.
     * @param {s15_autres_renseignementsDeleteArgs} args - Arguments to delete one S15_autres_renseignements.
     * @example
     * // Delete one S15_autres_renseignements
     * const S15_autres_renseignements = await prisma.s15_autres_renseignements.delete({
     *   where: {
     *     // ... filter to delete one S15_autres_renseignements
     *   }
     * })
     *
     */
    delete<T extends s15_autres_renseignementsDeleteArgs>(args: Prisma.SelectSubset<T, s15_autres_renseignementsDeleteArgs<ExtArgs>>): Prisma.Prisma__s15_autres_renseignementsClient<runtime.Types.Result.GetResult<Prisma.$s15_autres_renseignementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S15_autres_renseignements.
     * @param {s15_autres_renseignementsUpdateArgs} args - Arguments to update one S15_autres_renseignements.
     * @example
     * // Update one S15_autres_renseignements
     * const s15_autres_renseignements = await prisma.s15_autres_renseignements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s15_autres_renseignementsUpdateArgs>(args: Prisma.SelectSubset<T, s15_autres_renseignementsUpdateArgs<ExtArgs>>): Prisma.Prisma__s15_autres_renseignementsClient<runtime.Types.Result.GetResult<Prisma.$s15_autres_renseignementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S15_autres_renseignements.
     * @param {s15_autres_renseignementsDeleteManyArgs} args - Arguments to filter S15_autres_renseignements to delete.
     * @example
     * // Delete a few S15_autres_renseignements
     * const { count } = await prisma.s15_autres_renseignements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s15_autres_renseignementsDeleteManyArgs>(args?: Prisma.SelectSubset<T, s15_autres_renseignementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S15_autres_renseignements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s15_autres_renseignementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S15_autres_renseignements
     * const s15_autres_renseignements = await prisma.s15_autres_renseignements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s15_autres_renseignementsUpdateManyArgs>(args: Prisma.SelectSubset<T, s15_autres_renseignementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S15_autres_renseignements and returns the data updated in the database.
     * @param {s15_autres_renseignementsUpdateManyAndReturnArgs} args - Arguments to update many S15_autres_renseignements.
     * @example
     * // Update many S15_autres_renseignements
     * const s15_autres_renseignements = await prisma.s15_autres_renseignements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S15_autres_renseignements and only return the `id`
     * const s15_autres_renseignementsWithIdOnly = await prisma.s15_autres_renseignements.updateManyAndReturn({
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
    updateManyAndReturn<T extends s15_autres_renseignementsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s15_autres_renseignementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s15_autres_renseignementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S15_autres_renseignements.
     * @param {s15_autres_renseignementsUpsertArgs} args - Arguments to update or create a S15_autres_renseignements.
     * @example
     * // Update or create a S15_autres_renseignements
     * const s15_autres_renseignements = await prisma.s15_autres_renseignements.upsert({
     *   create: {
     *     // ... data to create a S15_autres_renseignements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S15_autres_renseignements we want to update
     *   }
     * })
     */
    upsert<T extends s15_autres_renseignementsUpsertArgs>(args: Prisma.SelectSubset<T, s15_autres_renseignementsUpsertArgs<ExtArgs>>): Prisma.Prisma__s15_autres_renseignementsClient<runtime.Types.Result.GetResult<Prisma.$s15_autres_renseignementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S15_autres_renseignements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s15_autres_renseignementsCountArgs} args - Arguments to filter S15_autres_renseignements to count.
     * @example
     * // Count the number of S15_autres_renseignements
     * const count = await prisma.s15_autres_renseignements.count({
     *   where: {
     *     // ... the filter for the S15_autres_renseignements we want to count
     *   }
     * })
    **/
    count<T extends s15_autres_renseignementsCountArgs>(args?: Prisma.Subset<T, s15_autres_renseignementsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S15_autres_renseignementsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S15_autres_renseignements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S15_autres_renseignementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S15_autres_renseignementsAggregateArgs>(args: Prisma.Subset<T, S15_autres_renseignementsAggregateArgs>): Prisma.PrismaPromise<GetS15_autres_renseignementsAggregateType<T>>;
    /**
     * Group by S15_autres_renseignements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s15_autres_renseignementsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s15_autres_renseignementsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s15_autres_renseignementsGroupByArgs['orderBy'];
    } : {
        orderBy?: s15_autres_renseignementsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s15_autres_renseignementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS15_autres_renseignementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s15_autres_renseignements model
     */
    readonly fields: s15_autres_renseignementsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s15_autres_renseignements.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s15_autres_renseignementsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the s15_autres_renseignements model
 */
export interface s15_autres_renseignementsFieldRefs {
    readonly id: Prisma.FieldRef<"s15_autres_renseignements", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s15_autres_renseignements", 'Int'>;
    readonly texte: Prisma.FieldRef<"s15_autres_renseignements", 'String'>;
}
/**
 * s15_autres_renseignements findUnique
 */
export type s15_autres_renseignementsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s15_autres_renseignements
     */
    select?: Prisma.s15_autres_renseignementsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s15_autres_renseignements
     */
    omit?: Prisma.s15_autres_renseignementsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s15_autres_renseignementsInclude<ExtArgs> | null;
    /**
     * Filter, which s15_autres_renseignements to fetch.
     */
    where: Prisma.s15_autres_renseignementsWhereUniqueInput;
};
/**
 * s15_autres_renseignements findUniqueOrThrow
 */
export type s15_autres_renseignementsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s15_autres_renseignements
     */
    select?: Prisma.s15_autres_renseignementsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s15_autres_renseignements
     */
    omit?: Prisma.s15_autres_renseignementsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s15_autres_renseignementsInclude<ExtArgs> | null;
    /**
     * Filter, which s15_autres_renseignements to fetch.
     */
    where: Prisma.s15_autres_renseignementsWhereUniqueInput;
};
/**
 * s15_autres_renseignements findFirst
 */
export type s15_autres_renseignementsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s15_autres_renseignements
     */
    select?: Prisma.s15_autres_renseignementsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s15_autres_renseignements
     */
    omit?: Prisma.s15_autres_renseignementsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s15_autres_renseignementsInclude<ExtArgs> | null;
    /**
     * Filter, which s15_autres_renseignements to fetch.
     */
    where?: Prisma.s15_autres_renseignementsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s15_autres_renseignements to fetch.
     */
    orderBy?: Prisma.s15_autres_renseignementsOrderByWithRelationInput | Prisma.s15_autres_renseignementsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s15_autres_renseignements.
     */
    cursor?: Prisma.s15_autres_renseignementsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s15_autres_renseignements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s15_autres_renseignements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s15_autres_renseignements.
     */
    distinct?: Prisma.S15_autres_renseignementsScalarFieldEnum | Prisma.S15_autres_renseignementsScalarFieldEnum[];
};
/**
 * s15_autres_renseignements findFirstOrThrow
 */
export type s15_autres_renseignementsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s15_autres_renseignements
     */
    select?: Prisma.s15_autres_renseignementsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s15_autres_renseignements
     */
    omit?: Prisma.s15_autres_renseignementsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s15_autres_renseignementsInclude<ExtArgs> | null;
    /**
     * Filter, which s15_autres_renseignements to fetch.
     */
    where?: Prisma.s15_autres_renseignementsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s15_autres_renseignements to fetch.
     */
    orderBy?: Prisma.s15_autres_renseignementsOrderByWithRelationInput | Prisma.s15_autres_renseignementsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s15_autres_renseignements.
     */
    cursor?: Prisma.s15_autres_renseignementsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s15_autres_renseignements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s15_autres_renseignements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s15_autres_renseignements.
     */
    distinct?: Prisma.S15_autres_renseignementsScalarFieldEnum | Prisma.S15_autres_renseignementsScalarFieldEnum[];
};
/**
 * s15_autres_renseignements findMany
 */
export type s15_autres_renseignementsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s15_autres_renseignements
     */
    select?: Prisma.s15_autres_renseignementsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s15_autres_renseignements
     */
    omit?: Prisma.s15_autres_renseignementsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s15_autres_renseignementsInclude<ExtArgs> | null;
    /**
     * Filter, which s15_autres_renseignements to fetch.
     */
    where?: Prisma.s15_autres_renseignementsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s15_autres_renseignements to fetch.
     */
    orderBy?: Prisma.s15_autres_renseignementsOrderByWithRelationInput | Prisma.s15_autres_renseignementsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s15_autres_renseignements.
     */
    cursor?: Prisma.s15_autres_renseignementsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s15_autres_renseignements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s15_autres_renseignements.
     */
    skip?: number;
    distinct?: Prisma.S15_autres_renseignementsScalarFieldEnum | Prisma.S15_autres_renseignementsScalarFieldEnum[];
};
/**
 * s15_autres_renseignements create
 */
export type s15_autres_renseignementsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s15_autres_renseignements
     */
    select?: Prisma.s15_autres_renseignementsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s15_autres_renseignements
     */
    omit?: Prisma.s15_autres_renseignementsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s15_autres_renseignementsInclude<ExtArgs> | null;
    /**
     * The data needed to create a s15_autres_renseignements.
     */
    data: Prisma.XOR<Prisma.s15_autres_renseignementsCreateInput, Prisma.s15_autres_renseignementsUncheckedCreateInput>;
};
/**
 * s15_autres_renseignements createMany
 */
export type s15_autres_renseignementsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s15_autres_renseignements.
     */
    data: Prisma.s15_autres_renseignementsCreateManyInput | Prisma.s15_autres_renseignementsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s15_autres_renseignements createManyAndReturn
 */
export type s15_autres_renseignementsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s15_autres_renseignements
     */
    select?: Prisma.s15_autres_renseignementsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s15_autres_renseignements
     */
    omit?: Prisma.s15_autres_renseignementsOmit<ExtArgs> | null;
    /**
     * The data used to create many s15_autres_renseignements.
     */
    data: Prisma.s15_autres_renseignementsCreateManyInput | Prisma.s15_autres_renseignementsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s15_autres_renseignementsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s15_autres_renseignements update
 */
export type s15_autres_renseignementsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s15_autres_renseignements
     */
    select?: Prisma.s15_autres_renseignementsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s15_autres_renseignements
     */
    omit?: Prisma.s15_autres_renseignementsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s15_autres_renseignementsInclude<ExtArgs> | null;
    /**
     * The data needed to update a s15_autres_renseignements.
     */
    data: Prisma.XOR<Prisma.s15_autres_renseignementsUpdateInput, Prisma.s15_autres_renseignementsUncheckedUpdateInput>;
    /**
     * Choose, which s15_autres_renseignements to update.
     */
    where: Prisma.s15_autres_renseignementsWhereUniqueInput;
};
/**
 * s15_autres_renseignements updateMany
 */
export type s15_autres_renseignementsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s15_autres_renseignements.
     */
    data: Prisma.XOR<Prisma.s15_autres_renseignementsUpdateManyMutationInput, Prisma.s15_autres_renseignementsUncheckedUpdateManyInput>;
    /**
     * Filter which s15_autres_renseignements to update
     */
    where?: Prisma.s15_autres_renseignementsWhereInput;
    /**
     * Limit how many s15_autres_renseignements to update.
     */
    limit?: number;
};
/**
 * s15_autres_renseignements updateManyAndReturn
 */
export type s15_autres_renseignementsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s15_autres_renseignements
     */
    select?: Prisma.s15_autres_renseignementsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s15_autres_renseignements
     */
    omit?: Prisma.s15_autres_renseignementsOmit<ExtArgs> | null;
    /**
     * The data used to update s15_autres_renseignements.
     */
    data: Prisma.XOR<Prisma.s15_autres_renseignementsUpdateManyMutationInput, Prisma.s15_autres_renseignementsUncheckedUpdateManyInput>;
    /**
     * Filter which s15_autres_renseignements to update
     */
    where?: Prisma.s15_autres_renseignementsWhereInput;
    /**
     * Limit how many s15_autres_renseignements to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s15_autres_renseignementsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s15_autres_renseignements upsert
 */
export type s15_autres_renseignementsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s15_autres_renseignements
     */
    select?: Prisma.s15_autres_renseignementsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s15_autres_renseignements
     */
    omit?: Prisma.s15_autres_renseignementsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s15_autres_renseignementsInclude<ExtArgs> | null;
    /**
     * The filter to search for the s15_autres_renseignements to update in case it exists.
     */
    where: Prisma.s15_autres_renseignementsWhereUniqueInput;
    /**
     * In case the s15_autres_renseignements found by the `where` argument doesn't exist, create a new s15_autres_renseignements with this data.
     */
    create: Prisma.XOR<Prisma.s15_autres_renseignementsCreateInput, Prisma.s15_autres_renseignementsUncheckedCreateInput>;
    /**
     * In case the s15_autres_renseignements was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s15_autres_renseignementsUpdateInput, Prisma.s15_autres_renseignementsUncheckedUpdateInput>;
};
/**
 * s15_autres_renseignements delete
 */
export type s15_autres_renseignementsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s15_autres_renseignements
     */
    select?: Prisma.s15_autres_renseignementsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s15_autres_renseignements
     */
    omit?: Prisma.s15_autres_renseignementsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s15_autres_renseignementsInclude<ExtArgs> | null;
    /**
     * Filter which s15_autres_renseignements to delete.
     */
    where: Prisma.s15_autres_renseignementsWhereUniqueInput;
};
/**
 * s15_autres_renseignements deleteMany
 */
export type s15_autres_renseignementsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s15_autres_renseignements to delete
     */
    where?: Prisma.s15_autres_renseignementsWhereInput;
    /**
     * Limit how many s15_autres_renseignements to delete.
     */
    limit?: number;
};
/**
 * s15_autres_renseignements without action
 */
export type s15_autres_renseignementsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s15_autres_renseignements
     */
    select?: Prisma.s15_autres_renseignementsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s15_autres_renseignements
     */
    omit?: Prisma.s15_autres_renseignementsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s15_autres_renseignementsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s15_autres_renseignements.d.ts.map