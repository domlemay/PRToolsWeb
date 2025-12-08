import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s09_mecanisme_trauma_info
 *
 */
export type s09_mecanisme_trauma_infoModel = runtime.Types.Result.DefaultSelection<Prisma.$s09_mecanisme_trauma_infoPayload>;
export type AggregateS09_mecanisme_trauma_info = {
    _count: S09_mecanisme_trauma_infoCountAggregateOutputType | null;
    _avg: S09_mecanisme_trauma_infoAvgAggregateOutputType | null;
    _sum: S09_mecanisme_trauma_infoSumAggregateOutputType | null;
    _min: S09_mecanisme_trauma_infoMinAggregateOutputType | null;
    _max: S09_mecanisme_trauma_infoMaxAggregateOutputType | null;
};
export type S09_mecanisme_trauma_infoAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    incarcere_duree_min: number | null;
};
export type S09_mecanisme_trauma_infoSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    incarcere_duree_min: number | null;
};
export type S09_mecanisme_trauma_infoMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    ceinture: string | null;
    ballon_deploye: string | null;
    incarcere: string | null;
    incarcere_duree_min: number | null;
};
export type S09_mecanisme_trauma_infoMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    ceinture: string | null;
    ballon_deploye: string | null;
    incarcere: string | null;
    incarcere_duree_min: number | null;
};
export type S09_mecanisme_trauma_infoCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    ceinture: number;
    ballon_deploye: number;
    incarcere: number;
    incarcere_duree_min: number;
    _all: number;
};
export type S09_mecanisme_trauma_infoAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
    incarcere_duree_min?: true;
};
export type S09_mecanisme_trauma_infoSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
    incarcere_duree_min?: true;
};
export type S09_mecanisme_trauma_infoMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    ceinture?: true;
    ballon_deploye?: true;
    incarcere?: true;
    incarcere_duree_min?: true;
};
export type S09_mecanisme_trauma_infoMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    ceinture?: true;
    ballon_deploye?: true;
    incarcere?: true;
    incarcere_duree_min?: true;
};
export type S09_mecanisme_trauma_infoCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    ceinture?: true;
    ballon_deploye?: true;
    incarcere?: true;
    incarcere_duree_min?: true;
    _all?: true;
};
export type S09_mecanisme_trauma_infoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s09_mecanisme_trauma_info to aggregate.
     */
    where?: Prisma.s09_mecanisme_trauma_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s09_mecanisme_trauma_infos to fetch.
     */
    orderBy?: Prisma.s09_mecanisme_trauma_infoOrderByWithRelationInput | Prisma.s09_mecanisme_trauma_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s09_mecanisme_trauma_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s09_mecanisme_trauma_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s09_mecanisme_trauma_infos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s09_mecanisme_trauma_infos
    **/
    _count?: true | S09_mecanisme_trauma_infoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S09_mecanisme_trauma_infoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S09_mecanisme_trauma_infoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S09_mecanisme_trauma_infoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S09_mecanisme_trauma_infoMaxAggregateInputType;
};
export type GetS09_mecanisme_trauma_infoAggregateType<T extends S09_mecanisme_trauma_infoAggregateArgs> = {
    [P in keyof T & keyof AggregateS09_mecanisme_trauma_info]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS09_mecanisme_trauma_info[P]> : Prisma.GetScalarType<T[P], AggregateS09_mecanisme_trauma_info[P]>;
};
export type s09_mecanisme_trauma_infoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s09_mecanisme_trauma_infoWhereInput;
    orderBy?: Prisma.s09_mecanisme_trauma_infoOrderByWithAggregationInput | Prisma.s09_mecanisme_trauma_infoOrderByWithAggregationInput[];
    by: Prisma.S09_mecanisme_trauma_infoScalarFieldEnum[] | Prisma.S09_mecanisme_trauma_infoScalarFieldEnum;
    having?: Prisma.s09_mecanisme_trauma_infoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S09_mecanisme_trauma_infoCountAggregateInputType | true;
    _avg?: S09_mecanisme_trauma_infoAvgAggregateInputType;
    _sum?: S09_mecanisme_trauma_infoSumAggregateInputType;
    _min?: S09_mecanisme_trauma_infoMinAggregateInputType;
    _max?: S09_mecanisme_trauma_infoMaxAggregateInputType;
};
export type S09_mecanisme_trauma_infoGroupByOutputType = {
    id: number;
    rapport_id: number;
    ceinture: string | null;
    ballon_deploye: string | null;
    incarcere: string | null;
    incarcere_duree_min: number | null;
    _count: S09_mecanisme_trauma_infoCountAggregateOutputType | null;
    _avg: S09_mecanisme_trauma_infoAvgAggregateOutputType | null;
    _sum: S09_mecanisme_trauma_infoSumAggregateOutputType | null;
    _min: S09_mecanisme_trauma_infoMinAggregateOutputType | null;
    _max: S09_mecanisme_trauma_infoMaxAggregateOutputType | null;
};
type GetS09_mecanisme_trauma_infoGroupByPayload<T extends s09_mecanisme_trauma_infoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S09_mecanisme_trauma_infoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S09_mecanisme_trauma_infoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S09_mecanisme_trauma_infoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S09_mecanisme_trauma_infoGroupByOutputType[P]>;
}>>;
export type s09_mecanisme_trauma_infoWhereInput = {
    AND?: Prisma.s09_mecanisme_trauma_infoWhereInput | Prisma.s09_mecanisme_trauma_infoWhereInput[];
    OR?: Prisma.s09_mecanisme_trauma_infoWhereInput[];
    NOT?: Prisma.s09_mecanisme_trauma_infoWhereInput | Prisma.s09_mecanisme_trauma_infoWhereInput[];
    id?: Prisma.IntFilter<"s09_mecanisme_trauma_info"> | number;
    rapport_id?: Prisma.IntFilter<"s09_mecanisme_trauma_info"> | number;
    ceinture?: Prisma.StringNullableFilter<"s09_mecanisme_trauma_info"> | string | null;
    ballon_deploye?: Prisma.StringNullableFilter<"s09_mecanisme_trauma_info"> | string | null;
    incarcere?: Prisma.StringNullableFilter<"s09_mecanisme_trauma_info"> | string | null;
    incarcere_duree_min?: Prisma.IntNullableFilter<"s09_mecanisme_trauma_info"> | number | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s09_mecanisme_trauma_infoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    ceinture?: Prisma.SortOrderInput | Prisma.SortOrder;
    ballon_deploye?: Prisma.SortOrderInput | Prisma.SortOrder;
    incarcere?: Prisma.SortOrderInput | Prisma.SortOrder;
    incarcere_duree_min?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s09_mecanisme_trauma_infoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id?: number;
    AND?: Prisma.s09_mecanisme_trauma_infoWhereInput | Prisma.s09_mecanisme_trauma_infoWhereInput[];
    OR?: Prisma.s09_mecanisme_trauma_infoWhereInput[];
    NOT?: Prisma.s09_mecanisme_trauma_infoWhereInput | Prisma.s09_mecanisme_trauma_infoWhereInput[];
    ceinture?: Prisma.StringNullableFilter<"s09_mecanisme_trauma_info"> | string | null;
    ballon_deploye?: Prisma.StringNullableFilter<"s09_mecanisme_trauma_info"> | string | null;
    incarcere?: Prisma.StringNullableFilter<"s09_mecanisme_trauma_info"> | string | null;
    incarcere_duree_min?: Prisma.IntNullableFilter<"s09_mecanisme_trauma_info"> | number | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id" | "rapport_id">;
export type s09_mecanisme_trauma_infoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    ceinture?: Prisma.SortOrderInput | Prisma.SortOrder;
    ballon_deploye?: Prisma.SortOrderInput | Prisma.SortOrder;
    incarcere?: Prisma.SortOrderInput | Prisma.SortOrder;
    incarcere_duree_min?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s09_mecanisme_trauma_infoCountOrderByAggregateInput;
    _avg?: Prisma.s09_mecanisme_trauma_infoAvgOrderByAggregateInput;
    _max?: Prisma.s09_mecanisme_trauma_infoMaxOrderByAggregateInput;
    _min?: Prisma.s09_mecanisme_trauma_infoMinOrderByAggregateInput;
    _sum?: Prisma.s09_mecanisme_trauma_infoSumOrderByAggregateInput;
};
export type s09_mecanisme_trauma_infoScalarWhereWithAggregatesInput = {
    AND?: Prisma.s09_mecanisme_trauma_infoScalarWhereWithAggregatesInput | Prisma.s09_mecanisme_trauma_infoScalarWhereWithAggregatesInput[];
    OR?: Prisma.s09_mecanisme_trauma_infoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s09_mecanisme_trauma_infoScalarWhereWithAggregatesInput | Prisma.s09_mecanisme_trauma_infoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s09_mecanisme_trauma_info"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s09_mecanisme_trauma_info"> | number;
    ceinture?: Prisma.StringNullableWithAggregatesFilter<"s09_mecanisme_trauma_info"> | string | null;
    ballon_deploye?: Prisma.StringNullableWithAggregatesFilter<"s09_mecanisme_trauma_info"> | string | null;
    incarcere?: Prisma.StringNullableWithAggregatesFilter<"s09_mecanisme_trauma_info"> | string | null;
    incarcere_duree_min?: Prisma.IntNullableWithAggregatesFilter<"s09_mecanisme_trauma_info"> | number | null;
};
export type s09_mecanisme_trauma_infoCreateInput = {
    ceinture?: string | null;
    ballon_deploye?: string | null;
    incarcere?: string | null;
    incarcere_duree_min?: number | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS09_mecanisme_trauma_infoInput;
};
export type s09_mecanisme_trauma_infoUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    ceinture?: string | null;
    ballon_deploye?: string | null;
    incarcere?: string | null;
    incarcere_duree_min?: number | null;
};
export type s09_mecanisme_trauma_infoUpdateInput = {
    ceinture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ballon_deploye?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    incarcere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    incarcere_duree_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS09_mecanisme_trauma_infoNestedInput;
};
export type s09_mecanisme_trauma_infoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    ceinture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ballon_deploye?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    incarcere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    incarcere_duree_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type s09_mecanisme_trauma_infoCreateManyInput = {
    id?: number;
    rapport_id: number;
    ceinture?: string | null;
    ballon_deploye?: string | null;
    incarcere?: string | null;
    incarcere_duree_min?: number | null;
};
export type s09_mecanisme_trauma_infoUpdateManyMutationInput = {
    ceinture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ballon_deploye?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    incarcere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    incarcere_duree_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type s09_mecanisme_trauma_infoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    ceinture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ballon_deploye?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    incarcere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    incarcere_duree_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type S09_mecanisme_trauma_infoNullableScalarRelationFilter = {
    is?: Prisma.s09_mecanisme_trauma_infoWhereInput | null;
    isNot?: Prisma.s09_mecanisme_trauma_infoWhereInput | null;
};
export type s09_mecanisme_trauma_infoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    ceinture?: Prisma.SortOrder;
    ballon_deploye?: Prisma.SortOrder;
    incarcere?: Prisma.SortOrder;
    incarcere_duree_min?: Prisma.SortOrder;
};
export type s09_mecanisme_trauma_infoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    incarcere_duree_min?: Prisma.SortOrder;
};
export type s09_mecanisme_trauma_infoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    ceinture?: Prisma.SortOrder;
    ballon_deploye?: Prisma.SortOrder;
    incarcere?: Prisma.SortOrder;
    incarcere_duree_min?: Prisma.SortOrder;
};
export type s09_mecanisme_trauma_infoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    ceinture?: Prisma.SortOrder;
    ballon_deploye?: Prisma.SortOrder;
    incarcere?: Prisma.SortOrder;
    incarcere_duree_min?: Prisma.SortOrder;
};
export type s09_mecanisme_trauma_infoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    incarcere_duree_min?: Prisma.SortOrder;
};
export type s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s09_mecanisme_trauma_infoCreateWithoutRapportInput, Prisma.s09_mecanisme_trauma_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s09_mecanisme_trauma_infoCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s09_mecanisme_trauma_infoWhereUniqueInput;
};
export type s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s09_mecanisme_trauma_infoCreateWithoutRapportInput, Prisma.s09_mecanisme_trauma_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s09_mecanisme_trauma_infoCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s09_mecanisme_trauma_infoWhereUniqueInput;
};
export type s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s09_mecanisme_trauma_infoCreateWithoutRapportInput, Prisma.s09_mecanisme_trauma_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s09_mecanisme_trauma_infoCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s09_mecanisme_trauma_infoUpsertWithoutRapportInput;
    disconnect?: Prisma.s09_mecanisme_trauma_infoWhereInput | boolean;
    delete?: Prisma.s09_mecanisme_trauma_infoWhereInput | boolean;
    connect?: Prisma.s09_mecanisme_trauma_infoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s09_mecanisme_trauma_infoUpdateToOneWithWhereWithoutRapportInput, Prisma.s09_mecanisme_trauma_infoUpdateWithoutRapportInput>, Prisma.s09_mecanisme_trauma_infoUncheckedUpdateWithoutRapportInput>;
};
export type s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s09_mecanisme_trauma_infoCreateWithoutRapportInput, Prisma.s09_mecanisme_trauma_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s09_mecanisme_trauma_infoCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s09_mecanisme_trauma_infoUpsertWithoutRapportInput;
    disconnect?: Prisma.s09_mecanisme_trauma_infoWhereInput | boolean;
    delete?: Prisma.s09_mecanisme_trauma_infoWhereInput | boolean;
    connect?: Prisma.s09_mecanisme_trauma_infoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s09_mecanisme_trauma_infoUpdateToOneWithWhereWithoutRapportInput, Prisma.s09_mecanisme_trauma_infoUpdateWithoutRapportInput>, Prisma.s09_mecanisme_trauma_infoUncheckedUpdateWithoutRapportInput>;
};
export type s09_mecanisme_trauma_infoCreateWithoutRapportInput = {
    ceinture?: string | null;
    ballon_deploye?: string | null;
    incarcere?: string | null;
    incarcere_duree_min?: number | null;
};
export type s09_mecanisme_trauma_infoUncheckedCreateWithoutRapportInput = {
    id?: number;
    ceinture?: string | null;
    ballon_deploye?: string | null;
    incarcere?: string | null;
    incarcere_duree_min?: number | null;
};
export type s09_mecanisme_trauma_infoCreateOrConnectWithoutRapportInput = {
    where: Prisma.s09_mecanisme_trauma_infoWhereUniqueInput;
    create: Prisma.XOR<Prisma.s09_mecanisme_trauma_infoCreateWithoutRapportInput, Prisma.s09_mecanisme_trauma_infoUncheckedCreateWithoutRapportInput>;
};
export type s09_mecanisme_trauma_infoUpsertWithoutRapportInput = {
    update: Prisma.XOR<Prisma.s09_mecanisme_trauma_infoUpdateWithoutRapportInput, Prisma.s09_mecanisme_trauma_infoUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s09_mecanisme_trauma_infoCreateWithoutRapportInput, Prisma.s09_mecanisme_trauma_infoUncheckedCreateWithoutRapportInput>;
    where?: Prisma.s09_mecanisme_trauma_infoWhereInput;
};
export type s09_mecanisme_trauma_infoUpdateToOneWithWhereWithoutRapportInput = {
    where?: Prisma.s09_mecanisme_trauma_infoWhereInput;
    data: Prisma.XOR<Prisma.s09_mecanisme_trauma_infoUpdateWithoutRapportInput, Prisma.s09_mecanisme_trauma_infoUncheckedUpdateWithoutRapportInput>;
};
export type s09_mecanisme_trauma_infoUpdateWithoutRapportInput = {
    ceinture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ballon_deploye?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    incarcere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    incarcere_duree_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type s09_mecanisme_trauma_infoUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ceinture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ballon_deploye?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    incarcere?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    incarcere_duree_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type s09_mecanisme_trauma_infoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    ceinture?: boolean;
    ballon_deploye?: boolean;
    incarcere?: boolean;
    incarcere_duree_min?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s09_mecanisme_trauma_info"]>;
export type s09_mecanisme_trauma_infoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    ceinture?: boolean;
    ballon_deploye?: boolean;
    incarcere?: boolean;
    incarcere_duree_min?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s09_mecanisme_trauma_info"]>;
export type s09_mecanisme_trauma_infoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    ceinture?: boolean;
    ballon_deploye?: boolean;
    incarcere?: boolean;
    incarcere_duree_min?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s09_mecanisme_trauma_info"]>;
export type s09_mecanisme_trauma_infoSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    ceinture?: boolean;
    ballon_deploye?: boolean;
    incarcere?: boolean;
    incarcere_duree_min?: boolean;
};
export type s09_mecanisme_trauma_infoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "ceinture" | "ballon_deploye" | "incarcere" | "incarcere_duree_min", ExtArgs["result"]["s09_mecanisme_trauma_info"]>;
export type s09_mecanisme_trauma_infoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s09_mecanisme_trauma_infoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s09_mecanisme_trauma_infoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s09_mecanisme_trauma_infoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s09_mecanisme_trauma_info";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        ceinture: string | null;
        ballon_deploye: string | null;
        incarcere: string | null;
        incarcere_duree_min: number | null;
    }, ExtArgs["result"]["s09_mecanisme_trauma_info"]>;
    composites: {};
};
export type s09_mecanisme_trauma_infoGetPayload<S extends boolean | null | undefined | s09_mecanisme_trauma_infoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_infoPayload, S>;
export type s09_mecanisme_trauma_infoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s09_mecanisme_trauma_infoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S09_mecanisme_trauma_infoCountAggregateInputType | true;
};
export interface s09_mecanisme_trauma_infoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s09_mecanisme_trauma_info'];
        meta: {
            name: 's09_mecanisme_trauma_info';
        };
    };
    /**
     * Find zero or one S09_mecanisme_trauma_info that matches the filter.
     * @param {s09_mecanisme_trauma_infoFindUniqueArgs} args - Arguments to find a S09_mecanisme_trauma_info
     * @example
     * // Get one S09_mecanisme_trauma_info
     * const s09_mecanisme_trauma_info = await prisma.s09_mecanisme_trauma_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s09_mecanisme_trauma_infoFindUniqueArgs>(args: Prisma.SelectSubset<T, s09_mecanisme_trauma_infoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s09_mecanisme_trauma_infoClient<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_infoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S09_mecanisme_trauma_info that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s09_mecanisme_trauma_infoFindUniqueOrThrowArgs} args - Arguments to find a S09_mecanisme_trauma_info
     * @example
     * // Get one S09_mecanisme_trauma_info
     * const s09_mecanisme_trauma_info = await prisma.s09_mecanisme_trauma_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s09_mecanisme_trauma_infoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s09_mecanisme_trauma_infoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s09_mecanisme_trauma_infoClient<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_infoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S09_mecanisme_trauma_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s09_mecanisme_trauma_infoFindFirstArgs} args - Arguments to find a S09_mecanisme_trauma_info
     * @example
     * // Get one S09_mecanisme_trauma_info
     * const s09_mecanisme_trauma_info = await prisma.s09_mecanisme_trauma_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s09_mecanisme_trauma_infoFindFirstArgs>(args?: Prisma.SelectSubset<T, s09_mecanisme_trauma_infoFindFirstArgs<ExtArgs>>): Prisma.Prisma__s09_mecanisme_trauma_infoClient<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_infoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S09_mecanisme_trauma_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s09_mecanisme_trauma_infoFindFirstOrThrowArgs} args - Arguments to find a S09_mecanisme_trauma_info
     * @example
     * // Get one S09_mecanisme_trauma_info
     * const s09_mecanisme_trauma_info = await prisma.s09_mecanisme_trauma_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s09_mecanisme_trauma_infoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s09_mecanisme_trauma_infoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s09_mecanisme_trauma_infoClient<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_infoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S09_mecanisme_trauma_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s09_mecanisme_trauma_infoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S09_mecanisme_trauma_infos
     * const s09_mecanisme_trauma_infos = await prisma.s09_mecanisme_trauma_info.findMany()
     *
     * // Get first 10 S09_mecanisme_trauma_infos
     * const s09_mecanisme_trauma_infos = await prisma.s09_mecanisme_trauma_info.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s09_mecanisme_trauma_infoWithIdOnly = await prisma.s09_mecanisme_trauma_info.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s09_mecanisme_trauma_infoFindManyArgs>(args?: Prisma.SelectSubset<T, s09_mecanisme_trauma_infoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_infoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S09_mecanisme_trauma_info.
     * @param {s09_mecanisme_trauma_infoCreateArgs} args - Arguments to create a S09_mecanisme_trauma_info.
     * @example
     * // Create one S09_mecanisme_trauma_info
     * const S09_mecanisme_trauma_info = await prisma.s09_mecanisme_trauma_info.create({
     *   data: {
     *     // ... data to create a S09_mecanisme_trauma_info
     *   }
     * })
     *
     */
    create<T extends s09_mecanisme_trauma_infoCreateArgs>(args: Prisma.SelectSubset<T, s09_mecanisme_trauma_infoCreateArgs<ExtArgs>>): Prisma.Prisma__s09_mecanisme_trauma_infoClient<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_infoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S09_mecanisme_trauma_infos.
     * @param {s09_mecanisme_trauma_infoCreateManyArgs} args - Arguments to create many S09_mecanisme_trauma_infos.
     * @example
     * // Create many S09_mecanisme_trauma_infos
     * const s09_mecanisme_trauma_info = await prisma.s09_mecanisme_trauma_info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s09_mecanisme_trauma_infoCreateManyArgs>(args?: Prisma.SelectSubset<T, s09_mecanisme_trauma_infoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S09_mecanisme_trauma_infos and returns the data saved in the database.
     * @param {s09_mecanisme_trauma_infoCreateManyAndReturnArgs} args - Arguments to create many S09_mecanisme_trauma_infos.
     * @example
     * // Create many S09_mecanisme_trauma_infos
     * const s09_mecanisme_trauma_info = await prisma.s09_mecanisme_trauma_info.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S09_mecanisme_trauma_infos and only return the `id`
     * const s09_mecanisme_trauma_infoWithIdOnly = await prisma.s09_mecanisme_trauma_info.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s09_mecanisme_trauma_infoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s09_mecanisme_trauma_infoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_infoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S09_mecanisme_trauma_info.
     * @param {s09_mecanisme_trauma_infoDeleteArgs} args - Arguments to delete one S09_mecanisme_trauma_info.
     * @example
     * // Delete one S09_mecanisme_trauma_info
     * const S09_mecanisme_trauma_info = await prisma.s09_mecanisme_trauma_info.delete({
     *   where: {
     *     // ... filter to delete one S09_mecanisme_trauma_info
     *   }
     * })
     *
     */
    delete<T extends s09_mecanisme_trauma_infoDeleteArgs>(args: Prisma.SelectSubset<T, s09_mecanisme_trauma_infoDeleteArgs<ExtArgs>>): Prisma.Prisma__s09_mecanisme_trauma_infoClient<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_infoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S09_mecanisme_trauma_info.
     * @param {s09_mecanisme_trauma_infoUpdateArgs} args - Arguments to update one S09_mecanisme_trauma_info.
     * @example
     * // Update one S09_mecanisme_trauma_info
     * const s09_mecanisme_trauma_info = await prisma.s09_mecanisme_trauma_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s09_mecanisme_trauma_infoUpdateArgs>(args: Prisma.SelectSubset<T, s09_mecanisme_trauma_infoUpdateArgs<ExtArgs>>): Prisma.Prisma__s09_mecanisme_trauma_infoClient<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_infoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S09_mecanisme_trauma_infos.
     * @param {s09_mecanisme_trauma_infoDeleteManyArgs} args - Arguments to filter S09_mecanisme_trauma_infos to delete.
     * @example
     * // Delete a few S09_mecanisme_trauma_infos
     * const { count } = await prisma.s09_mecanisme_trauma_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s09_mecanisme_trauma_infoDeleteManyArgs>(args?: Prisma.SelectSubset<T, s09_mecanisme_trauma_infoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S09_mecanisme_trauma_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s09_mecanisme_trauma_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S09_mecanisme_trauma_infos
     * const s09_mecanisme_trauma_info = await prisma.s09_mecanisme_trauma_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s09_mecanisme_trauma_infoUpdateManyArgs>(args: Prisma.SelectSubset<T, s09_mecanisme_trauma_infoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S09_mecanisme_trauma_infos and returns the data updated in the database.
     * @param {s09_mecanisme_trauma_infoUpdateManyAndReturnArgs} args - Arguments to update many S09_mecanisme_trauma_infos.
     * @example
     * // Update many S09_mecanisme_trauma_infos
     * const s09_mecanisme_trauma_info = await prisma.s09_mecanisme_trauma_info.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S09_mecanisme_trauma_infos and only return the `id`
     * const s09_mecanisme_trauma_infoWithIdOnly = await prisma.s09_mecanisme_trauma_info.updateManyAndReturn({
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
    updateManyAndReturn<T extends s09_mecanisme_trauma_infoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s09_mecanisme_trauma_infoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_infoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S09_mecanisme_trauma_info.
     * @param {s09_mecanisme_trauma_infoUpsertArgs} args - Arguments to update or create a S09_mecanisme_trauma_info.
     * @example
     * // Update or create a S09_mecanisme_trauma_info
     * const s09_mecanisme_trauma_info = await prisma.s09_mecanisme_trauma_info.upsert({
     *   create: {
     *     // ... data to create a S09_mecanisme_trauma_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S09_mecanisme_trauma_info we want to update
     *   }
     * })
     */
    upsert<T extends s09_mecanisme_trauma_infoUpsertArgs>(args: Prisma.SelectSubset<T, s09_mecanisme_trauma_infoUpsertArgs<ExtArgs>>): Prisma.Prisma__s09_mecanisme_trauma_infoClient<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_infoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S09_mecanisme_trauma_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s09_mecanisme_trauma_infoCountArgs} args - Arguments to filter S09_mecanisme_trauma_infos to count.
     * @example
     * // Count the number of S09_mecanisme_trauma_infos
     * const count = await prisma.s09_mecanisme_trauma_info.count({
     *   where: {
     *     // ... the filter for the S09_mecanisme_trauma_infos we want to count
     *   }
     * })
    **/
    count<T extends s09_mecanisme_trauma_infoCountArgs>(args?: Prisma.Subset<T, s09_mecanisme_trauma_infoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S09_mecanisme_trauma_infoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S09_mecanisme_trauma_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S09_mecanisme_trauma_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S09_mecanisme_trauma_infoAggregateArgs>(args: Prisma.Subset<T, S09_mecanisme_trauma_infoAggregateArgs>): Prisma.PrismaPromise<GetS09_mecanisme_trauma_infoAggregateType<T>>;
    /**
     * Group by S09_mecanisme_trauma_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s09_mecanisme_trauma_infoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s09_mecanisme_trauma_infoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s09_mecanisme_trauma_infoGroupByArgs['orderBy'];
    } : {
        orderBy?: s09_mecanisme_trauma_infoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s09_mecanisme_trauma_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS09_mecanisme_trauma_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s09_mecanisme_trauma_info model
     */
    readonly fields: s09_mecanisme_trauma_infoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s09_mecanisme_trauma_info.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s09_mecanisme_trauma_infoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the s09_mecanisme_trauma_info model
 */
export interface s09_mecanisme_trauma_infoFieldRefs {
    readonly id: Prisma.FieldRef<"s09_mecanisme_trauma_info", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s09_mecanisme_trauma_info", 'Int'>;
    readonly ceinture: Prisma.FieldRef<"s09_mecanisme_trauma_info", 'String'>;
    readonly ballon_deploye: Prisma.FieldRef<"s09_mecanisme_trauma_info", 'String'>;
    readonly incarcere: Prisma.FieldRef<"s09_mecanisme_trauma_info", 'String'>;
    readonly incarcere_duree_min: Prisma.FieldRef<"s09_mecanisme_trauma_info", 'Int'>;
}
/**
 * s09_mecanisme_trauma_info findUnique
 */
export type s09_mecanisme_trauma_infoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_info
     */
    select?: Prisma.s09_mecanisme_trauma_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_info
     */
    omit?: Prisma.s09_mecanisme_trauma_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s09_mecanisme_trauma_info to fetch.
     */
    where: Prisma.s09_mecanisme_trauma_infoWhereUniqueInput;
};
/**
 * s09_mecanisme_trauma_info findUniqueOrThrow
 */
export type s09_mecanisme_trauma_infoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_info
     */
    select?: Prisma.s09_mecanisme_trauma_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_info
     */
    omit?: Prisma.s09_mecanisme_trauma_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s09_mecanisme_trauma_info to fetch.
     */
    where: Prisma.s09_mecanisme_trauma_infoWhereUniqueInput;
};
/**
 * s09_mecanisme_trauma_info findFirst
 */
export type s09_mecanisme_trauma_infoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_info
     */
    select?: Prisma.s09_mecanisme_trauma_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_info
     */
    omit?: Prisma.s09_mecanisme_trauma_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s09_mecanisme_trauma_info to fetch.
     */
    where?: Prisma.s09_mecanisme_trauma_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s09_mecanisme_trauma_infos to fetch.
     */
    orderBy?: Prisma.s09_mecanisme_trauma_infoOrderByWithRelationInput | Prisma.s09_mecanisme_trauma_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s09_mecanisme_trauma_infos.
     */
    cursor?: Prisma.s09_mecanisme_trauma_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s09_mecanisme_trauma_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s09_mecanisme_trauma_infos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s09_mecanisme_trauma_infos.
     */
    distinct?: Prisma.S09_mecanisme_trauma_infoScalarFieldEnum | Prisma.S09_mecanisme_trauma_infoScalarFieldEnum[];
};
/**
 * s09_mecanisme_trauma_info findFirstOrThrow
 */
export type s09_mecanisme_trauma_infoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_info
     */
    select?: Prisma.s09_mecanisme_trauma_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_info
     */
    omit?: Prisma.s09_mecanisme_trauma_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s09_mecanisme_trauma_info to fetch.
     */
    where?: Prisma.s09_mecanisme_trauma_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s09_mecanisme_trauma_infos to fetch.
     */
    orderBy?: Prisma.s09_mecanisme_trauma_infoOrderByWithRelationInput | Prisma.s09_mecanisme_trauma_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s09_mecanisme_trauma_infos.
     */
    cursor?: Prisma.s09_mecanisme_trauma_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s09_mecanisme_trauma_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s09_mecanisme_trauma_infos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s09_mecanisme_trauma_infos.
     */
    distinct?: Prisma.S09_mecanisme_trauma_infoScalarFieldEnum | Prisma.S09_mecanisme_trauma_infoScalarFieldEnum[];
};
/**
 * s09_mecanisme_trauma_info findMany
 */
export type s09_mecanisme_trauma_infoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_info
     */
    select?: Prisma.s09_mecanisme_trauma_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_info
     */
    omit?: Prisma.s09_mecanisme_trauma_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s09_mecanisme_trauma_infos to fetch.
     */
    where?: Prisma.s09_mecanisme_trauma_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s09_mecanisme_trauma_infos to fetch.
     */
    orderBy?: Prisma.s09_mecanisme_trauma_infoOrderByWithRelationInput | Prisma.s09_mecanisme_trauma_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s09_mecanisme_trauma_infos.
     */
    cursor?: Prisma.s09_mecanisme_trauma_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s09_mecanisme_trauma_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s09_mecanisme_trauma_infos.
     */
    skip?: number;
    distinct?: Prisma.S09_mecanisme_trauma_infoScalarFieldEnum | Prisma.S09_mecanisme_trauma_infoScalarFieldEnum[];
};
/**
 * s09_mecanisme_trauma_info create
 */
export type s09_mecanisme_trauma_infoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_info
     */
    select?: Prisma.s09_mecanisme_trauma_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_info
     */
    omit?: Prisma.s09_mecanisme_trauma_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_infoInclude<ExtArgs> | null;
    /**
     * The data needed to create a s09_mecanisme_trauma_info.
     */
    data: Prisma.XOR<Prisma.s09_mecanisme_trauma_infoCreateInput, Prisma.s09_mecanisme_trauma_infoUncheckedCreateInput>;
};
/**
 * s09_mecanisme_trauma_info createMany
 */
export type s09_mecanisme_trauma_infoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s09_mecanisme_trauma_infos.
     */
    data: Prisma.s09_mecanisme_trauma_infoCreateManyInput | Prisma.s09_mecanisme_trauma_infoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s09_mecanisme_trauma_info createManyAndReturn
 */
export type s09_mecanisme_trauma_infoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_info
     */
    select?: Prisma.s09_mecanisme_trauma_infoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_info
     */
    omit?: Prisma.s09_mecanisme_trauma_infoOmit<ExtArgs> | null;
    /**
     * The data used to create many s09_mecanisme_trauma_infos.
     */
    data: Prisma.s09_mecanisme_trauma_infoCreateManyInput | Prisma.s09_mecanisme_trauma_infoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_infoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s09_mecanisme_trauma_info update
 */
export type s09_mecanisme_trauma_infoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_info
     */
    select?: Prisma.s09_mecanisme_trauma_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_info
     */
    omit?: Prisma.s09_mecanisme_trauma_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_infoInclude<ExtArgs> | null;
    /**
     * The data needed to update a s09_mecanisme_trauma_info.
     */
    data: Prisma.XOR<Prisma.s09_mecanisme_trauma_infoUpdateInput, Prisma.s09_mecanisme_trauma_infoUncheckedUpdateInput>;
    /**
     * Choose, which s09_mecanisme_trauma_info to update.
     */
    where: Prisma.s09_mecanisme_trauma_infoWhereUniqueInput;
};
/**
 * s09_mecanisme_trauma_info updateMany
 */
export type s09_mecanisme_trauma_infoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s09_mecanisme_trauma_infos.
     */
    data: Prisma.XOR<Prisma.s09_mecanisme_trauma_infoUpdateManyMutationInput, Prisma.s09_mecanisme_trauma_infoUncheckedUpdateManyInput>;
    /**
     * Filter which s09_mecanisme_trauma_infos to update
     */
    where?: Prisma.s09_mecanisme_trauma_infoWhereInput;
    /**
     * Limit how many s09_mecanisme_trauma_infos to update.
     */
    limit?: number;
};
/**
 * s09_mecanisme_trauma_info updateManyAndReturn
 */
export type s09_mecanisme_trauma_infoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_info
     */
    select?: Prisma.s09_mecanisme_trauma_infoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_info
     */
    omit?: Prisma.s09_mecanisme_trauma_infoOmit<ExtArgs> | null;
    /**
     * The data used to update s09_mecanisme_trauma_infos.
     */
    data: Prisma.XOR<Prisma.s09_mecanisme_trauma_infoUpdateManyMutationInput, Prisma.s09_mecanisme_trauma_infoUncheckedUpdateManyInput>;
    /**
     * Filter which s09_mecanisme_trauma_infos to update
     */
    where?: Prisma.s09_mecanisme_trauma_infoWhereInput;
    /**
     * Limit how many s09_mecanisme_trauma_infos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_infoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s09_mecanisme_trauma_info upsert
 */
export type s09_mecanisme_trauma_infoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_info
     */
    select?: Prisma.s09_mecanisme_trauma_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_info
     */
    omit?: Prisma.s09_mecanisme_trauma_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_infoInclude<ExtArgs> | null;
    /**
     * The filter to search for the s09_mecanisme_trauma_info to update in case it exists.
     */
    where: Prisma.s09_mecanisme_trauma_infoWhereUniqueInput;
    /**
     * In case the s09_mecanisme_trauma_info found by the `where` argument doesn't exist, create a new s09_mecanisme_trauma_info with this data.
     */
    create: Prisma.XOR<Prisma.s09_mecanisme_trauma_infoCreateInput, Prisma.s09_mecanisme_trauma_infoUncheckedCreateInput>;
    /**
     * In case the s09_mecanisme_trauma_info was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s09_mecanisme_trauma_infoUpdateInput, Prisma.s09_mecanisme_trauma_infoUncheckedUpdateInput>;
};
/**
 * s09_mecanisme_trauma_info delete
 */
export type s09_mecanisme_trauma_infoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_info
     */
    select?: Prisma.s09_mecanisme_trauma_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_info
     */
    omit?: Prisma.s09_mecanisme_trauma_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_infoInclude<ExtArgs> | null;
    /**
     * Filter which s09_mecanisme_trauma_info to delete.
     */
    where: Prisma.s09_mecanisme_trauma_infoWhereUniqueInput;
};
/**
 * s09_mecanisme_trauma_info deleteMany
 */
export type s09_mecanisme_trauma_infoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s09_mecanisme_trauma_infos to delete
     */
    where?: Prisma.s09_mecanisme_trauma_infoWhereInput;
    /**
     * Limit how many s09_mecanisme_trauma_infos to delete.
     */
    limit?: number;
};
/**
 * s09_mecanisme_trauma_info without action
 */
export type s09_mecanisme_trauma_infoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_info
     */
    select?: Prisma.s09_mecanisme_trauma_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_info
     */
    omit?: Prisma.s09_mecanisme_trauma_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_infoInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s09_mecanisme_trauma_info.d.ts.map