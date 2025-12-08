import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s07_maladies_infectieuses_info
 *
 */
export type s07_maladies_infectieuses_infoModel = runtime.Types.Result.DefaultSelection<Prisma.$s07_maladies_infectieuses_infoPayload>;
export type AggregateS07_maladies_infectieuses_info = {
    _count: S07_maladies_infectieuses_infoCountAggregateOutputType | null;
    _avg: S07_maladies_infectieuses_infoAvgAggregateOutputType | null;
    _sum: S07_maladies_infectieuses_infoSumAggregateOutputType | null;
    _min: S07_maladies_infectieuses_infoMinAggregateOutputType | null;
    _max: S07_maladies_infectieuses_infoMaxAggregateOutputType | null;
};
export type S07_maladies_infectieuses_infoAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S07_maladies_infectieuses_infoSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S07_maladies_infectieuses_infoMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    a_maladies_inf: boolean | null;
    commentaire: string | null;
};
export type S07_maladies_infectieuses_infoMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    a_maladies_inf: boolean | null;
    commentaire: string | null;
};
export type S07_maladies_infectieuses_infoCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    a_maladies_inf: number;
    commentaire: number;
    _all: number;
};
export type S07_maladies_infectieuses_infoAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S07_maladies_infectieuses_infoSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S07_maladies_infectieuses_infoMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    a_maladies_inf?: true;
    commentaire?: true;
};
export type S07_maladies_infectieuses_infoMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    a_maladies_inf?: true;
    commentaire?: true;
};
export type S07_maladies_infectieuses_infoCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    a_maladies_inf?: true;
    commentaire?: true;
    _all?: true;
};
export type S07_maladies_infectieuses_infoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s07_maladies_infectieuses_info to aggregate.
     */
    where?: Prisma.s07_maladies_infectieuses_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s07_maladies_infectieuses_infos to fetch.
     */
    orderBy?: Prisma.s07_maladies_infectieuses_infoOrderByWithRelationInput | Prisma.s07_maladies_infectieuses_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s07_maladies_infectieuses_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s07_maladies_infectieuses_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s07_maladies_infectieuses_infos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s07_maladies_infectieuses_infos
    **/
    _count?: true | S07_maladies_infectieuses_infoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S07_maladies_infectieuses_infoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S07_maladies_infectieuses_infoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S07_maladies_infectieuses_infoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S07_maladies_infectieuses_infoMaxAggregateInputType;
};
export type GetS07_maladies_infectieuses_infoAggregateType<T extends S07_maladies_infectieuses_infoAggregateArgs> = {
    [P in keyof T & keyof AggregateS07_maladies_infectieuses_info]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS07_maladies_infectieuses_info[P]> : Prisma.GetScalarType<T[P], AggregateS07_maladies_infectieuses_info[P]>;
};
export type s07_maladies_infectieuses_infoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s07_maladies_infectieuses_infoWhereInput;
    orderBy?: Prisma.s07_maladies_infectieuses_infoOrderByWithAggregationInput | Prisma.s07_maladies_infectieuses_infoOrderByWithAggregationInput[];
    by: Prisma.S07_maladies_infectieuses_infoScalarFieldEnum[] | Prisma.S07_maladies_infectieuses_infoScalarFieldEnum;
    having?: Prisma.s07_maladies_infectieuses_infoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S07_maladies_infectieuses_infoCountAggregateInputType | true;
    _avg?: S07_maladies_infectieuses_infoAvgAggregateInputType;
    _sum?: S07_maladies_infectieuses_infoSumAggregateInputType;
    _min?: S07_maladies_infectieuses_infoMinAggregateInputType;
    _max?: S07_maladies_infectieuses_infoMaxAggregateInputType;
};
export type S07_maladies_infectieuses_infoGroupByOutputType = {
    id: number;
    rapport_id: number;
    a_maladies_inf: boolean | null;
    commentaire: string | null;
    _count: S07_maladies_infectieuses_infoCountAggregateOutputType | null;
    _avg: S07_maladies_infectieuses_infoAvgAggregateOutputType | null;
    _sum: S07_maladies_infectieuses_infoSumAggregateOutputType | null;
    _min: S07_maladies_infectieuses_infoMinAggregateOutputType | null;
    _max: S07_maladies_infectieuses_infoMaxAggregateOutputType | null;
};
type GetS07_maladies_infectieuses_infoGroupByPayload<T extends s07_maladies_infectieuses_infoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S07_maladies_infectieuses_infoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S07_maladies_infectieuses_infoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S07_maladies_infectieuses_infoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S07_maladies_infectieuses_infoGroupByOutputType[P]>;
}>>;
export type s07_maladies_infectieuses_infoWhereInput = {
    AND?: Prisma.s07_maladies_infectieuses_infoWhereInput | Prisma.s07_maladies_infectieuses_infoWhereInput[];
    OR?: Prisma.s07_maladies_infectieuses_infoWhereInput[];
    NOT?: Prisma.s07_maladies_infectieuses_infoWhereInput | Prisma.s07_maladies_infectieuses_infoWhereInput[];
    id?: Prisma.IntFilter<"s07_maladies_infectieuses_info"> | number;
    rapport_id?: Prisma.IntFilter<"s07_maladies_infectieuses_info"> | number;
    a_maladies_inf?: Prisma.BoolNullableFilter<"s07_maladies_infectieuses_info"> | boolean | null;
    commentaire?: Prisma.StringNullableFilter<"s07_maladies_infectieuses_info"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s07_maladies_infectieuses_infoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    a_maladies_inf?: Prisma.SortOrderInput | Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s07_maladies_infectieuses_infoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id?: number;
    AND?: Prisma.s07_maladies_infectieuses_infoWhereInput | Prisma.s07_maladies_infectieuses_infoWhereInput[];
    OR?: Prisma.s07_maladies_infectieuses_infoWhereInput[];
    NOT?: Prisma.s07_maladies_infectieuses_infoWhereInput | Prisma.s07_maladies_infectieuses_infoWhereInput[];
    a_maladies_inf?: Prisma.BoolNullableFilter<"s07_maladies_infectieuses_info"> | boolean | null;
    commentaire?: Prisma.StringNullableFilter<"s07_maladies_infectieuses_info"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id" | "rapport_id">;
export type s07_maladies_infectieuses_infoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    a_maladies_inf?: Prisma.SortOrderInput | Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s07_maladies_infectieuses_infoCountOrderByAggregateInput;
    _avg?: Prisma.s07_maladies_infectieuses_infoAvgOrderByAggregateInput;
    _max?: Prisma.s07_maladies_infectieuses_infoMaxOrderByAggregateInput;
    _min?: Prisma.s07_maladies_infectieuses_infoMinOrderByAggregateInput;
    _sum?: Prisma.s07_maladies_infectieuses_infoSumOrderByAggregateInput;
};
export type s07_maladies_infectieuses_infoScalarWhereWithAggregatesInput = {
    AND?: Prisma.s07_maladies_infectieuses_infoScalarWhereWithAggregatesInput | Prisma.s07_maladies_infectieuses_infoScalarWhereWithAggregatesInput[];
    OR?: Prisma.s07_maladies_infectieuses_infoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s07_maladies_infectieuses_infoScalarWhereWithAggregatesInput | Prisma.s07_maladies_infectieuses_infoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s07_maladies_infectieuses_info"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s07_maladies_infectieuses_info"> | number;
    a_maladies_inf?: Prisma.BoolNullableWithAggregatesFilter<"s07_maladies_infectieuses_info"> | boolean | null;
    commentaire?: Prisma.StringNullableWithAggregatesFilter<"s07_maladies_infectieuses_info"> | string | null;
};
export type s07_maladies_infectieuses_infoCreateInput = {
    a_maladies_inf?: boolean | null;
    commentaire?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS07_maladies_infectieuses_infoInput;
};
export type s07_maladies_infectieuses_infoUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    a_maladies_inf?: boolean | null;
    commentaire?: string | null;
};
export type s07_maladies_infectieuses_infoUpdateInput = {
    a_maladies_inf?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS07_maladies_infectieuses_infoNestedInput;
};
export type s07_maladies_infectieuses_infoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    a_maladies_inf?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s07_maladies_infectieuses_infoCreateManyInput = {
    id?: number;
    rapport_id: number;
    a_maladies_inf?: boolean | null;
    commentaire?: string | null;
};
export type s07_maladies_infectieuses_infoUpdateManyMutationInput = {
    a_maladies_inf?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s07_maladies_infectieuses_infoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    a_maladies_inf?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type S07_maladies_infectieuses_infoNullableScalarRelationFilter = {
    is?: Prisma.s07_maladies_infectieuses_infoWhereInput | null;
    isNot?: Prisma.s07_maladies_infectieuses_infoWhereInput | null;
};
export type s07_maladies_infectieuses_infoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    a_maladies_inf?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
};
export type s07_maladies_infectieuses_infoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s07_maladies_infectieuses_infoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    a_maladies_inf?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
};
export type s07_maladies_infectieuses_infoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    a_maladies_inf?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
};
export type s07_maladies_infectieuses_infoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s07_maladies_infectieuses_infoCreateWithoutRapportInput, Prisma.s07_maladies_infectieuses_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s07_maladies_infectieuses_infoCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s07_maladies_infectieuses_infoWhereUniqueInput;
};
export type s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s07_maladies_infectieuses_infoCreateWithoutRapportInput, Prisma.s07_maladies_infectieuses_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s07_maladies_infectieuses_infoCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s07_maladies_infectieuses_infoWhereUniqueInput;
};
export type s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s07_maladies_infectieuses_infoCreateWithoutRapportInput, Prisma.s07_maladies_infectieuses_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s07_maladies_infectieuses_infoCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s07_maladies_infectieuses_infoUpsertWithoutRapportInput;
    disconnect?: Prisma.s07_maladies_infectieuses_infoWhereInput | boolean;
    delete?: Prisma.s07_maladies_infectieuses_infoWhereInput | boolean;
    connect?: Prisma.s07_maladies_infectieuses_infoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s07_maladies_infectieuses_infoUpdateToOneWithWhereWithoutRapportInput, Prisma.s07_maladies_infectieuses_infoUpdateWithoutRapportInput>, Prisma.s07_maladies_infectieuses_infoUncheckedUpdateWithoutRapportInput>;
};
export type s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s07_maladies_infectieuses_infoCreateWithoutRapportInput, Prisma.s07_maladies_infectieuses_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s07_maladies_infectieuses_infoCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s07_maladies_infectieuses_infoUpsertWithoutRapportInput;
    disconnect?: Prisma.s07_maladies_infectieuses_infoWhereInput | boolean;
    delete?: Prisma.s07_maladies_infectieuses_infoWhereInput | boolean;
    connect?: Prisma.s07_maladies_infectieuses_infoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s07_maladies_infectieuses_infoUpdateToOneWithWhereWithoutRapportInput, Prisma.s07_maladies_infectieuses_infoUpdateWithoutRapportInput>, Prisma.s07_maladies_infectieuses_infoUncheckedUpdateWithoutRapportInput>;
};
export type s07_maladies_infectieuses_infoCreateWithoutRapportInput = {
    a_maladies_inf?: boolean | null;
    commentaire?: string | null;
};
export type s07_maladies_infectieuses_infoUncheckedCreateWithoutRapportInput = {
    id?: number;
    a_maladies_inf?: boolean | null;
    commentaire?: string | null;
};
export type s07_maladies_infectieuses_infoCreateOrConnectWithoutRapportInput = {
    where: Prisma.s07_maladies_infectieuses_infoWhereUniqueInput;
    create: Prisma.XOR<Prisma.s07_maladies_infectieuses_infoCreateWithoutRapportInput, Prisma.s07_maladies_infectieuses_infoUncheckedCreateWithoutRapportInput>;
};
export type s07_maladies_infectieuses_infoUpsertWithoutRapportInput = {
    update: Prisma.XOR<Prisma.s07_maladies_infectieuses_infoUpdateWithoutRapportInput, Prisma.s07_maladies_infectieuses_infoUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s07_maladies_infectieuses_infoCreateWithoutRapportInput, Prisma.s07_maladies_infectieuses_infoUncheckedCreateWithoutRapportInput>;
    where?: Prisma.s07_maladies_infectieuses_infoWhereInput;
};
export type s07_maladies_infectieuses_infoUpdateToOneWithWhereWithoutRapportInput = {
    where?: Prisma.s07_maladies_infectieuses_infoWhereInput;
    data: Prisma.XOR<Prisma.s07_maladies_infectieuses_infoUpdateWithoutRapportInput, Prisma.s07_maladies_infectieuses_infoUncheckedUpdateWithoutRapportInput>;
};
export type s07_maladies_infectieuses_infoUpdateWithoutRapportInput = {
    a_maladies_inf?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s07_maladies_infectieuses_infoUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    a_maladies_inf?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s07_maladies_infectieuses_infoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    a_maladies_inf?: boolean;
    commentaire?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s07_maladies_infectieuses_info"]>;
export type s07_maladies_infectieuses_infoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    a_maladies_inf?: boolean;
    commentaire?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s07_maladies_infectieuses_info"]>;
export type s07_maladies_infectieuses_infoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    a_maladies_inf?: boolean;
    commentaire?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s07_maladies_infectieuses_info"]>;
export type s07_maladies_infectieuses_infoSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    a_maladies_inf?: boolean;
    commentaire?: boolean;
};
export type s07_maladies_infectieuses_infoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "a_maladies_inf" | "commentaire", ExtArgs["result"]["s07_maladies_infectieuses_info"]>;
export type s07_maladies_infectieuses_infoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s07_maladies_infectieuses_infoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s07_maladies_infectieuses_infoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s07_maladies_infectieuses_infoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s07_maladies_infectieuses_info";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        a_maladies_inf: boolean | null;
        commentaire: string | null;
    }, ExtArgs["result"]["s07_maladies_infectieuses_info"]>;
    composites: {};
};
export type s07_maladies_infectieuses_infoGetPayload<S extends boolean | null | undefined | s07_maladies_infectieuses_infoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s07_maladies_infectieuses_infoPayload, S>;
export type s07_maladies_infectieuses_infoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s07_maladies_infectieuses_infoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S07_maladies_infectieuses_infoCountAggregateInputType | true;
};
export interface s07_maladies_infectieuses_infoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s07_maladies_infectieuses_info'];
        meta: {
            name: 's07_maladies_infectieuses_info';
        };
    };
    /**
     * Find zero or one S07_maladies_infectieuses_info that matches the filter.
     * @param {s07_maladies_infectieuses_infoFindUniqueArgs} args - Arguments to find a S07_maladies_infectieuses_info
     * @example
     * // Get one S07_maladies_infectieuses_info
     * const s07_maladies_infectieuses_info = await prisma.s07_maladies_infectieuses_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s07_maladies_infectieuses_infoFindUniqueArgs>(args: Prisma.SelectSubset<T, s07_maladies_infectieuses_infoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s07_maladies_infectieuses_infoClient<runtime.Types.Result.GetResult<Prisma.$s07_maladies_infectieuses_infoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S07_maladies_infectieuses_info that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s07_maladies_infectieuses_infoFindUniqueOrThrowArgs} args - Arguments to find a S07_maladies_infectieuses_info
     * @example
     * // Get one S07_maladies_infectieuses_info
     * const s07_maladies_infectieuses_info = await prisma.s07_maladies_infectieuses_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s07_maladies_infectieuses_infoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s07_maladies_infectieuses_infoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s07_maladies_infectieuses_infoClient<runtime.Types.Result.GetResult<Prisma.$s07_maladies_infectieuses_infoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S07_maladies_infectieuses_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s07_maladies_infectieuses_infoFindFirstArgs} args - Arguments to find a S07_maladies_infectieuses_info
     * @example
     * // Get one S07_maladies_infectieuses_info
     * const s07_maladies_infectieuses_info = await prisma.s07_maladies_infectieuses_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s07_maladies_infectieuses_infoFindFirstArgs>(args?: Prisma.SelectSubset<T, s07_maladies_infectieuses_infoFindFirstArgs<ExtArgs>>): Prisma.Prisma__s07_maladies_infectieuses_infoClient<runtime.Types.Result.GetResult<Prisma.$s07_maladies_infectieuses_infoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S07_maladies_infectieuses_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s07_maladies_infectieuses_infoFindFirstOrThrowArgs} args - Arguments to find a S07_maladies_infectieuses_info
     * @example
     * // Get one S07_maladies_infectieuses_info
     * const s07_maladies_infectieuses_info = await prisma.s07_maladies_infectieuses_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s07_maladies_infectieuses_infoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s07_maladies_infectieuses_infoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s07_maladies_infectieuses_infoClient<runtime.Types.Result.GetResult<Prisma.$s07_maladies_infectieuses_infoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S07_maladies_infectieuses_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s07_maladies_infectieuses_infoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S07_maladies_infectieuses_infos
     * const s07_maladies_infectieuses_infos = await prisma.s07_maladies_infectieuses_info.findMany()
     *
     * // Get first 10 S07_maladies_infectieuses_infos
     * const s07_maladies_infectieuses_infos = await prisma.s07_maladies_infectieuses_info.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s07_maladies_infectieuses_infoWithIdOnly = await prisma.s07_maladies_infectieuses_info.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s07_maladies_infectieuses_infoFindManyArgs>(args?: Prisma.SelectSubset<T, s07_maladies_infectieuses_infoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s07_maladies_infectieuses_infoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S07_maladies_infectieuses_info.
     * @param {s07_maladies_infectieuses_infoCreateArgs} args - Arguments to create a S07_maladies_infectieuses_info.
     * @example
     * // Create one S07_maladies_infectieuses_info
     * const S07_maladies_infectieuses_info = await prisma.s07_maladies_infectieuses_info.create({
     *   data: {
     *     // ... data to create a S07_maladies_infectieuses_info
     *   }
     * })
     *
     */
    create<T extends s07_maladies_infectieuses_infoCreateArgs>(args: Prisma.SelectSubset<T, s07_maladies_infectieuses_infoCreateArgs<ExtArgs>>): Prisma.Prisma__s07_maladies_infectieuses_infoClient<runtime.Types.Result.GetResult<Prisma.$s07_maladies_infectieuses_infoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S07_maladies_infectieuses_infos.
     * @param {s07_maladies_infectieuses_infoCreateManyArgs} args - Arguments to create many S07_maladies_infectieuses_infos.
     * @example
     * // Create many S07_maladies_infectieuses_infos
     * const s07_maladies_infectieuses_info = await prisma.s07_maladies_infectieuses_info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s07_maladies_infectieuses_infoCreateManyArgs>(args?: Prisma.SelectSubset<T, s07_maladies_infectieuses_infoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S07_maladies_infectieuses_infos and returns the data saved in the database.
     * @param {s07_maladies_infectieuses_infoCreateManyAndReturnArgs} args - Arguments to create many S07_maladies_infectieuses_infos.
     * @example
     * // Create many S07_maladies_infectieuses_infos
     * const s07_maladies_infectieuses_info = await prisma.s07_maladies_infectieuses_info.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S07_maladies_infectieuses_infos and only return the `id`
     * const s07_maladies_infectieuses_infoWithIdOnly = await prisma.s07_maladies_infectieuses_info.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s07_maladies_infectieuses_infoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s07_maladies_infectieuses_infoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s07_maladies_infectieuses_infoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S07_maladies_infectieuses_info.
     * @param {s07_maladies_infectieuses_infoDeleteArgs} args - Arguments to delete one S07_maladies_infectieuses_info.
     * @example
     * // Delete one S07_maladies_infectieuses_info
     * const S07_maladies_infectieuses_info = await prisma.s07_maladies_infectieuses_info.delete({
     *   where: {
     *     // ... filter to delete one S07_maladies_infectieuses_info
     *   }
     * })
     *
     */
    delete<T extends s07_maladies_infectieuses_infoDeleteArgs>(args: Prisma.SelectSubset<T, s07_maladies_infectieuses_infoDeleteArgs<ExtArgs>>): Prisma.Prisma__s07_maladies_infectieuses_infoClient<runtime.Types.Result.GetResult<Prisma.$s07_maladies_infectieuses_infoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S07_maladies_infectieuses_info.
     * @param {s07_maladies_infectieuses_infoUpdateArgs} args - Arguments to update one S07_maladies_infectieuses_info.
     * @example
     * // Update one S07_maladies_infectieuses_info
     * const s07_maladies_infectieuses_info = await prisma.s07_maladies_infectieuses_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s07_maladies_infectieuses_infoUpdateArgs>(args: Prisma.SelectSubset<T, s07_maladies_infectieuses_infoUpdateArgs<ExtArgs>>): Prisma.Prisma__s07_maladies_infectieuses_infoClient<runtime.Types.Result.GetResult<Prisma.$s07_maladies_infectieuses_infoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S07_maladies_infectieuses_infos.
     * @param {s07_maladies_infectieuses_infoDeleteManyArgs} args - Arguments to filter S07_maladies_infectieuses_infos to delete.
     * @example
     * // Delete a few S07_maladies_infectieuses_infos
     * const { count } = await prisma.s07_maladies_infectieuses_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s07_maladies_infectieuses_infoDeleteManyArgs>(args?: Prisma.SelectSubset<T, s07_maladies_infectieuses_infoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S07_maladies_infectieuses_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s07_maladies_infectieuses_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S07_maladies_infectieuses_infos
     * const s07_maladies_infectieuses_info = await prisma.s07_maladies_infectieuses_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s07_maladies_infectieuses_infoUpdateManyArgs>(args: Prisma.SelectSubset<T, s07_maladies_infectieuses_infoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S07_maladies_infectieuses_infos and returns the data updated in the database.
     * @param {s07_maladies_infectieuses_infoUpdateManyAndReturnArgs} args - Arguments to update many S07_maladies_infectieuses_infos.
     * @example
     * // Update many S07_maladies_infectieuses_infos
     * const s07_maladies_infectieuses_info = await prisma.s07_maladies_infectieuses_info.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S07_maladies_infectieuses_infos and only return the `id`
     * const s07_maladies_infectieuses_infoWithIdOnly = await prisma.s07_maladies_infectieuses_info.updateManyAndReturn({
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
    updateManyAndReturn<T extends s07_maladies_infectieuses_infoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s07_maladies_infectieuses_infoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s07_maladies_infectieuses_infoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S07_maladies_infectieuses_info.
     * @param {s07_maladies_infectieuses_infoUpsertArgs} args - Arguments to update or create a S07_maladies_infectieuses_info.
     * @example
     * // Update or create a S07_maladies_infectieuses_info
     * const s07_maladies_infectieuses_info = await prisma.s07_maladies_infectieuses_info.upsert({
     *   create: {
     *     // ... data to create a S07_maladies_infectieuses_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S07_maladies_infectieuses_info we want to update
     *   }
     * })
     */
    upsert<T extends s07_maladies_infectieuses_infoUpsertArgs>(args: Prisma.SelectSubset<T, s07_maladies_infectieuses_infoUpsertArgs<ExtArgs>>): Prisma.Prisma__s07_maladies_infectieuses_infoClient<runtime.Types.Result.GetResult<Prisma.$s07_maladies_infectieuses_infoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S07_maladies_infectieuses_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s07_maladies_infectieuses_infoCountArgs} args - Arguments to filter S07_maladies_infectieuses_infos to count.
     * @example
     * // Count the number of S07_maladies_infectieuses_infos
     * const count = await prisma.s07_maladies_infectieuses_info.count({
     *   where: {
     *     // ... the filter for the S07_maladies_infectieuses_infos we want to count
     *   }
     * })
    **/
    count<T extends s07_maladies_infectieuses_infoCountArgs>(args?: Prisma.Subset<T, s07_maladies_infectieuses_infoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S07_maladies_infectieuses_infoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S07_maladies_infectieuses_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S07_maladies_infectieuses_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S07_maladies_infectieuses_infoAggregateArgs>(args: Prisma.Subset<T, S07_maladies_infectieuses_infoAggregateArgs>): Prisma.PrismaPromise<GetS07_maladies_infectieuses_infoAggregateType<T>>;
    /**
     * Group by S07_maladies_infectieuses_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s07_maladies_infectieuses_infoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s07_maladies_infectieuses_infoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s07_maladies_infectieuses_infoGroupByArgs['orderBy'];
    } : {
        orderBy?: s07_maladies_infectieuses_infoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s07_maladies_infectieuses_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS07_maladies_infectieuses_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s07_maladies_infectieuses_info model
     */
    readonly fields: s07_maladies_infectieuses_infoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s07_maladies_infectieuses_info.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s07_maladies_infectieuses_infoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the s07_maladies_infectieuses_info model
 */
export interface s07_maladies_infectieuses_infoFieldRefs {
    readonly id: Prisma.FieldRef<"s07_maladies_infectieuses_info", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s07_maladies_infectieuses_info", 'Int'>;
    readonly a_maladies_inf: Prisma.FieldRef<"s07_maladies_infectieuses_info", 'Boolean'>;
    readonly commentaire: Prisma.FieldRef<"s07_maladies_infectieuses_info", 'String'>;
}
/**
 * s07_maladies_infectieuses_info findUnique
 */
export type s07_maladies_infectieuses_infoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladies_infectieuses_info
     */
    select?: Prisma.s07_maladies_infectieuses_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladies_infectieuses_info
     */
    omit?: Prisma.s07_maladies_infectieuses_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladies_infectieuses_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s07_maladies_infectieuses_info to fetch.
     */
    where: Prisma.s07_maladies_infectieuses_infoWhereUniqueInput;
};
/**
 * s07_maladies_infectieuses_info findUniqueOrThrow
 */
export type s07_maladies_infectieuses_infoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladies_infectieuses_info
     */
    select?: Prisma.s07_maladies_infectieuses_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladies_infectieuses_info
     */
    omit?: Prisma.s07_maladies_infectieuses_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladies_infectieuses_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s07_maladies_infectieuses_info to fetch.
     */
    where: Prisma.s07_maladies_infectieuses_infoWhereUniqueInput;
};
/**
 * s07_maladies_infectieuses_info findFirst
 */
export type s07_maladies_infectieuses_infoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladies_infectieuses_info
     */
    select?: Prisma.s07_maladies_infectieuses_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladies_infectieuses_info
     */
    omit?: Prisma.s07_maladies_infectieuses_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladies_infectieuses_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s07_maladies_infectieuses_info to fetch.
     */
    where?: Prisma.s07_maladies_infectieuses_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s07_maladies_infectieuses_infos to fetch.
     */
    orderBy?: Prisma.s07_maladies_infectieuses_infoOrderByWithRelationInput | Prisma.s07_maladies_infectieuses_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s07_maladies_infectieuses_infos.
     */
    cursor?: Prisma.s07_maladies_infectieuses_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s07_maladies_infectieuses_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s07_maladies_infectieuses_infos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s07_maladies_infectieuses_infos.
     */
    distinct?: Prisma.S07_maladies_infectieuses_infoScalarFieldEnum | Prisma.S07_maladies_infectieuses_infoScalarFieldEnum[];
};
/**
 * s07_maladies_infectieuses_info findFirstOrThrow
 */
export type s07_maladies_infectieuses_infoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladies_infectieuses_info
     */
    select?: Prisma.s07_maladies_infectieuses_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladies_infectieuses_info
     */
    omit?: Prisma.s07_maladies_infectieuses_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladies_infectieuses_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s07_maladies_infectieuses_info to fetch.
     */
    where?: Prisma.s07_maladies_infectieuses_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s07_maladies_infectieuses_infos to fetch.
     */
    orderBy?: Prisma.s07_maladies_infectieuses_infoOrderByWithRelationInput | Prisma.s07_maladies_infectieuses_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s07_maladies_infectieuses_infos.
     */
    cursor?: Prisma.s07_maladies_infectieuses_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s07_maladies_infectieuses_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s07_maladies_infectieuses_infos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s07_maladies_infectieuses_infos.
     */
    distinct?: Prisma.S07_maladies_infectieuses_infoScalarFieldEnum | Prisma.S07_maladies_infectieuses_infoScalarFieldEnum[];
};
/**
 * s07_maladies_infectieuses_info findMany
 */
export type s07_maladies_infectieuses_infoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladies_infectieuses_info
     */
    select?: Prisma.s07_maladies_infectieuses_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladies_infectieuses_info
     */
    omit?: Prisma.s07_maladies_infectieuses_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladies_infectieuses_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s07_maladies_infectieuses_infos to fetch.
     */
    where?: Prisma.s07_maladies_infectieuses_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s07_maladies_infectieuses_infos to fetch.
     */
    orderBy?: Prisma.s07_maladies_infectieuses_infoOrderByWithRelationInput | Prisma.s07_maladies_infectieuses_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s07_maladies_infectieuses_infos.
     */
    cursor?: Prisma.s07_maladies_infectieuses_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s07_maladies_infectieuses_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s07_maladies_infectieuses_infos.
     */
    skip?: number;
    distinct?: Prisma.S07_maladies_infectieuses_infoScalarFieldEnum | Prisma.S07_maladies_infectieuses_infoScalarFieldEnum[];
};
/**
 * s07_maladies_infectieuses_info create
 */
export type s07_maladies_infectieuses_infoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladies_infectieuses_info
     */
    select?: Prisma.s07_maladies_infectieuses_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladies_infectieuses_info
     */
    omit?: Prisma.s07_maladies_infectieuses_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladies_infectieuses_infoInclude<ExtArgs> | null;
    /**
     * The data needed to create a s07_maladies_infectieuses_info.
     */
    data: Prisma.XOR<Prisma.s07_maladies_infectieuses_infoCreateInput, Prisma.s07_maladies_infectieuses_infoUncheckedCreateInput>;
};
/**
 * s07_maladies_infectieuses_info createMany
 */
export type s07_maladies_infectieuses_infoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s07_maladies_infectieuses_infos.
     */
    data: Prisma.s07_maladies_infectieuses_infoCreateManyInput | Prisma.s07_maladies_infectieuses_infoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s07_maladies_infectieuses_info createManyAndReturn
 */
export type s07_maladies_infectieuses_infoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladies_infectieuses_info
     */
    select?: Prisma.s07_maladies_infectieuses_infoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladies_infectieuses_info
     */
    omit?: Prisma.s07_maladies_infectieuses_infoOmit<ExtArgs> | null;
    /**
     * The data used to create many s07_maladies_infectieuses_infos.
     */
    data: Prisma.s07_maladies_infectieuses_infoCreateManyInput | Prisma.s07_maladies_infectieuses_infoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladies_infectieuses_infoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s07_maladies_infectieuses_info update
 */
export type s07_maladies_infectieuses_infoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladies_infectieuses_info
     */
    select?: Prisma.s07_maladies_infectieuses_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladies_infectieuses_info
     */
    omit?: Prisma.s07_maladies_infectieuses_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladies_infectieuses_infoInclude<ExtArgs> | null;
    /**
     * The data needed to update a s07_maladies_infectieuses_info.
     */
    data: Prisma.XOR<Prisma.s07_maladies_infectieuses_infoUpdateInput, Prisma.s07_maladies_infectieuses_infoUncheckedUpdateInput>;
    /**
     * Choose, which s07_maladies_infectieuses_info to update.
     */
    where: Prisma.s07_maladies_infectieuses_infoWhereUniqueInput;
};
/**
 * s07_maladies_infectieuses_info updateMany
 */
export type s07_maladies_infectieuses_infoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s07_maladies_infectieuses_infos.
     */
    data: Prisma.XOR<Prisma.s07_maladies_infectieuses_infoUpdateManyMutationInput, Prisma.s07_maladies_infectieuses_infoUncheckedUpdateManyInput>;
    /**
     * Filter which s07_maladies_infectieuses_infos to update
     */
    where?: Prisma.s07_maladies_infectieuses_infoWhereInput;
    /**
     * Limit how many s07_maladies_infectieuses_infos to update.
     */
    limit?: number;
};
/**
 * s07_maladies_infectieuses_info updateManyAndReturn
 */
export type s07_maladies_infectieuses_infoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladies_infectieuses_info
     */
    select?: Prisma.s07_maladies_infectieuses_infoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladies_infectieuses_info
     */
    omit?: Prisma.s07_maladies_infectieuses_infoOmit<ExtArgs> | null;
    /**
     * The data used to update s07_maladies_infectieuses_infos.
     */
    data: Prisma.XOR<Prisma.s07_maladies_infectieuses_infoUpdateManyMutationInput, Prisma.s07_maladies_infectieuses_infoUncheckedUpdateManyInput>;
    /**
     * Filter which s07_maladies_infectieuses_infos to update
     */
    where?: Prisma.s07_maladies_infectieuses_infoWhereInput;
    /**
     * Limit how many s07_maladies_infectieuses_infos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladies_infectieuses_infoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s07_maladies_infectieuses_info upsert
 */
export type s07_maladies_infectieuses_infoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladies_infectieuses_info
     */
    select?: Prisma.s07_maladies_infectieuses_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladies_infectieuses_info
     */
    omit?: Prisma.s07_maladies_infectieuses_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladies_infectieuses_infoInclude<ExtArgs> | null;
    /**
     * The filter to search for the s07_maladies_infectieuses_info to update in case it exists.
     */
    where: Prisma.s07_maladies_infectieuses_infoWhereUniqueInput;
    /**
     * In case the s07_maladies_infectieuses_info found by the `where` argument doesn't exist, create a new s07_maladies_infectieuses_info with this data.
     */
    create: Prisma.XOR<Prisma.s07_maladies_infectieuses_infoCreateInput, Prisma.s07_maladies_infectieuses_infoUncheckedCreateInput>;
    /**
     * In case the s07_maladies_infectieuses_info was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s07_maladies_infectieuses_infoUpdateInput, Prisma.s07_maladies_infectieuses_infoUncheckedUpdateInput>;
};
/**
 * s07_maladies_infectieuses_info delete
 */
export type s07_maladies_infectieuses_infoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladies_infectieuses_info
     */
    select?: Prisma.s07_maladies_infectieuses_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladies_infectieuses_info
     */
    omit?: Prisma.s07_maladies_infectieuses_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladies_infectieuses_infoInclude<ExtArgs> | null;
    /**
     * Filter which s07_maladies_infectieuses_info to delete.
     */
    where: Prisma.s07_maladies_infectieuses_infoWhereUniqueInput;
};
/**
 * s07_maladies_infectieuses_info deleteMany
 */
export type s07_maladies_infectieuses_infoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s07_maladies_infectieuses_infos to delete
     */
    where?: Prisma.s07_maladies_infectieuses_infoWhereInput;
    /**
     * Limit how many s07_maladies_infectieuses_infos to delete.
     */
    limit?: number;
};
/**
 * s07_maladies_infectieuses_info without action
 */
export type s07_maladies_infectieuses_infoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladies_infectieuses_info
     */
    select?: Prisma.s07_maladies_infectieuses_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladies_infectieuses_info
     */
    omit?: Prisma.s07_maladies_infectieuses_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladies_infectieuses_infoInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s07_maladies_infectieuses_info.d.ts.map