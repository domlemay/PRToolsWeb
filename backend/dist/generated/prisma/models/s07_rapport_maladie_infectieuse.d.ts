import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s07_rapport_maladie_infectieuse
 *
 */
export type s07_rapport_maladie_infectieuseModel = runtime.Types.Result.DefaultSelection<Prisma.$s07_rapport_maladie_infectieusePayload>;
export type AggregateS07_rapport_maladie_infectieuse = {
    _count: S07_rapport_maladie_infectieuseCountAggregateOutputType | null;
    _avg: S07_rapport_maladie_infectieuseAvgAggregateOutputType | null;
    _sum: S07_rapport_maladie_infectieuseSumAggregateOutputType | null;
    _min: S07_rapport_maladie_infectieuseMinAggregateOutputType | null;
    _max: S07_rapport_maladie_infectieuseMaxAggregateOutputType | null;
};
export type S07_rapport_maladie_infectieuseAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    maladie_infectieuse_type_id: number | null;
};
export type S07_rapport_maladie_infectieuseSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    maladie_infectieuse_type_id: number | null;
};
export type S07_rapport_maladie_infectieuseMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    maladie_infectieuse_type_id: number | null;
    libelle_autre: string | null;
    details: string | null;
};
export type S07_rapport_maladie_infectieuseMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    maladie_infectieuse_type_id: number | null;
    libelle_autre: string | null;
    details: string | null;
};
export type S07_rapport_maladie_infectieuseCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    maladie_infectieuse_type_id: number;
    libelle_autre: number;
    details: number;
    _all: number;
};
export type S07_rapport_maladie_infectieuseAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
    maladie_infectieuse_type_id?: true;
};
export type S07_rapport_maladie_infectieuseSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
    maladie_infectieuse_type_id?: true;
};
export type S07_rapport_maladie_infectieuseMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    maladie_infectieuse_type_id?: true;
    libelle_autre?: true;
    details?: true;
};
export type S07_rapport_maladie_infectieuseMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    maladie_infectieuse_type_id?: true;
    libelle_autre?: true;
    details?: true;
};
export type S07_rapport_maladie_infectieuseCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    maladie_infectieuse_type_id?: true;
    libelle_autre?: true;
    details?: true;
    _all?: true;
};
export type S07_rapport_maladie_infectieuseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s07_rapport_maladie_infectieuse to aggregate.
     */
    where?: Prisma.s07_rapport_maladie_infectieuseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s07_rapport_maladie_infectieuses to fetch.
     */
    orderBy?: Prisma.s07_rapport_maladie_infectieuseOrderByWithRelationInput | Prisma.s07_rapport_maladie_infectieuseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s07_rapport_maladie_infectieuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s07_rapport_maladie_infectieuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s07_rapport_maladie_infectieuses
    **/
    _count?: true | S07_rapport_maladie_infectieuseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S07_rapport_maladie_infectieuseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S07_rapport_maladie_infectieuseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S07_rapport_maladie_infectieuseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S07_rapport_maladie_infectieuseMaxAggregateInputType;
};
export type GetS07_rapport_maladie_infectieuseAggregateType<T extends S07_rapport_maladie_infectieuseAggregateArgs> = {
    [P in keyof T & keyof AggregateS07_rapport_maladie_infectieuse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS07_rapport_maladie_infectieuse[P]> : Prisma.GetScalarType<T[P], AggregateS07_rapport_maladie_infectieuse[P]>;
};
export type s07_rapport_maladie_infectieuseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s07_rapport_maladie_infectieuseWhereInput;
    orderBy?: Prisma.s07_rapport_maladie_infectieuseOrderByWithAggregationInput | Prisma.s07_rapport_maladie_infectieuseOrderByWithAggregationInput[];
    by: Prisma.S07_rapport_maladie_infectieuseScalarFieldEnum[] | Prisma.S07_rapport_maladie_infectieuseScalarFieldEnum;
    having?: Prisma.s07_rapport_maladie_infectieuseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S07_rapport_maladie_infectieuseCountAggregateInputType | true;
    _avg?: S07_rapport_maladie_infectieuseAvgAggregateInputType;
    _sum?: S07_rapport_maladie_infectieuseSumAggregateInputType;
    _min?: S07_rapport_maladie_infectieuseMinAggregateInputType;
    _max?: S07_rapport_maladie_infectieuseMaxAggregateInputType;
};
export type S07_rapport_maladie_infectieuseGroupByOutputType = {
    id: number;
    rapport_id: number;
    maladie_infectieuse_type_id: number | null;
    libelle_autre: string | null;
    details: string | null;
    _count: S07_rapport_maladie_infectieuseCountAggregateOutputType | null;
    _avg: S07_rapport_maladie_infectieuseAvgAggregateOutputType | null;
    _sum: S07_rapport_maladie_infectieuseSumAggregateOutputType | null;
    _min: S07_rapport_maladie_infectieuseMinAggregateOutputType | null;
    _max: S07_rapport_maladie_infectieuseMaxAggregateOutputType | null;
};
type GetS07_rapport_maladie_infectieuseGroupByPayload<T extends s07_rapport_maladie_infectieuseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S07_rapport_maladie_infectieuseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S07_rapport_maladie_infectieuseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S07_rapport_maladie_infectieuseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S07_rapport_maladie_infectieuseGroupByOutputType[P]>;
}>>;
export type s07_rapport_maladie_infectieuseWhereInput = {
    AND?: Prisma.s07_rapport_maladie_infectieuseWhereInput | Prisma.s07_rapport_maladie_infectieuseWhereInput[];
    OR?: Prisma.s07_rapport_maladie_infectieuseWhereInput[];
    NOT?: Prisma.s07_rapport_maladie_infectieuseWhereInput | Prisma.s07_rapport_maladie_infectieuseWhereInput[];
    id?: Prisma.IntFilter<"s07_rapport_maladie_infectieuse"> | number;
    rapport_id?: Prisma.IntFilter<"s07_rapport_maladie_infectieuse"> | number;
    maladie_infectieuse_type_id?: Prisma.IntNullableFilter<"s07_rapport_maladie_infectieuse"> | number | null;
    libelle_autre?: Prisma.StringNullableFilter<"s07_rapport_maladie_infectieuse"> | string | null;
    details?: Prisma.StringNullableFilter<"s07_rapport_maladie_infectieuse"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
    maladie_type?: Prisma.XOR<Prisma.S07_maladie_infectieuse_typeNullableScalarRelationFilter, Prisma.s07_maladie_infectieuse_typeWhereInput> | null;
};
export type s07_rapport_maladie_infectieuseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    maladie_infectieuse_type_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    libelle_autre?: Prisma.SortOrderInput | Prisma.SortOrder;
    details?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
    maladie_type?: Prisma.s07_maladie_infectieuse_typeOrderByWithRelationInput;
};
export type s07_rapport_maladie_infectieuseWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.s07_rapport_maladie_infectieuseWhereInput | Prisma.s07_rapport_maladie_infectieuseWhereInput[];
    OR?: Prisma.s07_rapport_maladie_infectieuseWhereInput[];
    NOT?: Prisma.s07_rapport_maladie_infectieuseWhereInput | Prisma.s07_rapport_maladie_infectieuseWhereInput[];
    rapport_id?: Prisma.IntFilter<"s07_rapport_maladie_infectieuse"> | number;
    maladie_infectieuse_type_id?: Prisma.IntNullableFilter<"s07_rapport_maladie_infectieuse"> | number | null;
    libelle_autre?: Prisma.StringNullableFilter<"s07_rapport_maladie_infectieuse"> | string | null;
    details?: Prisma.StringNullableFilter<"s07_rapport_maladie_infectieuse"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
    maladie_type?: Prisma.XOR<Prisma.S07_maladie_infectieuse_typeNullableScalarRelationFilter, Prisma.s07_maladie_infectieuse_typeWhereInput> | null;
}, "id">;
export type s07_rapport_maladie_infectieuseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    maladie_infectieuse_type_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    libelle_autre?: Prisma.SortOrderInput | Prisma.SortOrder;
    details?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s07_rapport_maladie_infectieuseCountOrderByAggregateInput;
    _avg?: Prisma.s07_rapport_maladie_infectieuseAvgOrderByAggregateInput;
    _max?: Prisma.s07_rapport_maladie_infectieuseMaxOrderByAggregateInput;
    _min?: Prisma.s07_rapport_maladie_infectieuseMinOrderByAggregateInput;
    _sum?: Prisma.s07_rapport_maladie_infectieuseSumOrderByAggregateInput;
};
export type s07_rapport_maladie_infectieuseScalarWhereWithAggregatesInput = {
    AND?: Prisma.s07_rapport_maladie_infectieuseScalarWhereWithAggregatesInput | Prisma.s07_rapport_maladie_infectieuseScalarWhereWithAggregatesInput[];
    OR?: Prisma.s07_rapport_maladie_infectieuseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s07_rapport_maladie_infectieuseScalarWhereWithAggregatesInput | Prisma.s07_rapport_maladie_infectieuseScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s07_rapport_maladie_infectieuse"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s07_rapport_maladie_infectieuse"> | number;
    maladie_infectieuse_type_id?: Prisma.IntNullableWithAggregatesFilter<"s07_rapport_maladie_infectieuse"> | number | null;
    libelle_autre?: Prisma.StringNullableWithAggregatesFilter<"s07_rapport_maladie_infectieuse"> | string | null;
    details?: Prisma.StringNullableWithAggregatesFilter<"s07_rapport_maladie_infectieuse"> | string | null;
};
export type s07_rapport_maladie_infectieuseCreateInput = {
    libelle_autre?: string | null;
    details?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS07_rapport_maladie_infectieuseInput;
    maladie_type?: Prisma.s07_maladie_infectieuse_typeCreateNestedOneWithoutRapportsInput;
};
export type s07_rapport_maladie_infectieuseUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    maladie_infectieuse_type_id?: number | null;
    libelle_autre?: string | null;
    details?: string | null;
};
export type s07_rapport_maladie_infectieuseUpdateInput = {
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS07_rapport_maladie_infectieuseNestedInput;
    maladie_type?: Prisma.s07_maladie_infectieuse_typeUpdateOneWithoutRapportsNestedInput;
};
export type s07_rapport_maladie_infectieuseUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    maladie_infectieuse_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s07_rapport_maladie_infectieuseCreateManyInput = {
    id?: number;
    rapport_id: number;
    maladie_infectieuse_type_id?: number | null;
    libelle_autre?: string | null;
    details?: string | null;
};
export type s07_rapport_maladie_infectieuseUpdateManyMutationInput = {
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s07_rapport_maladie_infectieuseUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    maladie_infectieuse_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type S07_rapport_maladie_infectieuseListRelationFilter = {
    every?: Prisma.s07_rapport_maladie_infectieuseWhereInput;
    some?: Prisma.s07_rapport_maladie_infectieuseWhereInput;
    none?: Prisma.s07_rapport_maladie_infectieuseWhereInput;
};
export type s07_rapport_maladie_infectieuseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type s07_rapport_maladie_infectieuseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    maladie_infectieuse_type_id?: Prisma.SortOrder;
    libelle_autre?: Prisma.SortOrder;
    details?: Prisma.SortOrder;
};
export type s07_rapport_maladie_infectieuseAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    maladie_infectieuse_type_id?: Prisma.SortOrder;
};
export type s07_rapport_maladie_infectieuseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    maladie_infectieuse_type_id?: Prisma.SortOrder;
    libelle_autre?: Prisma.SortOrder;
    details?: Prisma.SortOrder;
};
export type s07_rapport_maladie_infectieuseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    maladie_infectieuse_type_id?: Prisma.SortOrder;
    libelle_autre?: Prisma.SortOrder;
    details?: Prisma.SortOrder;
};
export type s07_rapport_maladie_infectieuseSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    maladie_infectieuse_type_id?: Prisma.SortOrder;
};
export type s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseCreateWithoutRapportInput, Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutRapportInput> | Prisma.s07_rapport_maladie_infectieuseCreateWithoutRapportInput[] | Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s07_rapport_maladie_infectieuseCreateOrConnectWithoutRapportInput | Prisma.s07_rapport_maladie_infectieuseCreateOrConnectWithoutRapportInput[];
    createMany?: Prisma.s07_rapport_maladie_infectieuseCreateManyRapportInputEnvelope;
    connect?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
};
export type s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseCreateWithoutRapportInput, Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutRapportInput> | Prisma.s07_rapport_maladie_infectieuseCreateWithoutRapportInput[] | Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s07_rapport_maladie_infectieuseCreateOrConnectWithoutRapportInput | Prisma.s07_rapport_maladie_infectieuseCreateOrConnectWithoutRapportInput[];
    createMany?: Prisma.s07_rapport_maladie_infectieuseCreateManyRapportInputEnvelope;
    connect?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
};
export type s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseCreateWithoutRapportInput, Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutRapportInput> | Prisma.s07_rapport_maladie_infectieuseCreateWithoutRapportInput[] | Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s07_rapport_maladie_infectieuseCreateOrConnectWithoutRapportInput | Prisma.s07_rapport_maladie_infectieuseCreateOrConnectWithoutRapportInput[];
    upsert?: Prisma.s07_rapport_maladie_infectieuseUpsertWithWhereUniqueWithoutRapportInput | Prisma.s07_rapport_maladie_infectieuseUpsertWithWhereUniqueWithoutRapportInput[];
    createMany?: Prisma.s07_rapport_maladie_infectieuseCreateManyRapportInputEnvelope;
    set?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
    disconnect?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
    delete?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
    connect?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
    update?: Prisma.s07_rapport_maladie_infectieuseUpdateWithWhereUniqueWithoutRapportInput | Prisma.s07_rapport_maladie_infectieuseUpdateWithWhereUniqueWithoutRapportInput[];
    updateMany?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithWhereWithoutRapportInput | Prisma.s07_rapport_maladie_infectieuseUpdateManyWithWhereWithoutRapportInput[];
    deleteMany?: Prisma.s07_rapport_maladie_infectieuseScalarWhereInput | Prisma.s07_rapport_maladie_infectieuseScalarWhereInput[];
};
export type s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseCreateWithoutRapportInput, Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutRapportInput> | Prisma.s07_rapport_maladie_infectieuseCreateWithoutRapportInput[] | Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s07_rapport_maladie_infectieuseCreateOrConnectWithoutRapportInput | Prisma.s07_rapport_maladie_infectieuseCreateOrConnectWithoutRapportInput[];
    upsert?: Prisma.s07_rapport_maladie_infectieuseUpsertWithWhereUniqueWithoutRapportInput | Prisma.s07_rapport_maladie_infectieuseUpsertWithWhereUniqueWithoutRapportInput[];
    createMany?: Prisma.s07_rapport_maladie_infectieuseCreateManyRapportInputEnvelope;
    set?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
    disconnect?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
    delete?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
    connect?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
    update?: Prisma.s07_rapport_maladie_infectieuseUpdateWithWhereUniqueWithoutRapportInput | Prisma.s07_rapport_maladie_infectieuseUpdateWithWhereUniqueWithoutRapportInput[];
    updateMany?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithWhereWithoutRapportInput | Prisma.s07_rapport_maladie_infectieuseUpdateManyWithWhereWithoutRapportInput[];
    deleteMany?: Prisma.s07_rapport_maladie_infectieuseScalarWhereInput | Prisma.s07_rapport_maladie_infectieuseScalarWhereInput[];
};
export type s07_rapport_maladie_infectieuseCreateNestedManyWithoutMaladie_typeInput = {
    create?: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseCreateWithoutMaladie_typeInput, Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutMaladie_typeInput> | Prisma.s07_rapport_maladie_infectieuseCreateWithoutMaladie_typeInput[] | Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutMaladie_typeInput[];
    connectOrCreate?: Prisma.s07_rapport_maladie_infectieuseCreateOrConnectWithoutMaladie_typeInput | Prisma.s07_rapport_maladie_infectieuseCreateOrConnectWithoutMaladie_typeInput[];
    createMany?: Prisma.s07_rapport_maladie_infectieuseCreateManyMaladie_typeInputEnvelope;
    connect?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
};
export type s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutMaladie_typeInput = {
    create?: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseCreateWithoutMaladie_typeInput, Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutMaladie_typeInput> | Prisma.s07_rapport_maladie_infectieuseCreateWithoutMaladie_typeInput[] | Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutMaladie_typeInput[];
    connectOrCreate?: Prisma.s07_rapport_maladie_infectieuseCreateOrConnectWithoutMaladie_typeInput | Prisma.s07_rapport_maladie_infectieuseCreateOrConnectWithoutMaladie_typeInput[];
    createMany?: Prisma.s07_rapport_maladie_infectieuseCreateManyMaladie_typeInputEnvelope;
    connect?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
};
export type s07_rapport_maladie_infectieuseUpdateManyWithoutMaladie_typeNestedInput = {
    create?: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseCreateWithoutMaladie_typeInput, Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutMaladie_typeInput> | Prisma.s07_rapport_maladie_infectieuseCreateWithoutMaladie_typeInput[] | Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutMaladie_typeInput[];
    connectOrCreate?: Prisma.s07_rapport_maladie_infectieuseCreateOrConnectWithoutMaladie_typeInput | Prisma.s07_rapport_maladie_infectieuseCreateOrConnectWithoutMaladie_typeInput[];
    upsert?: Prisma.s07_rapport_maladie_infectieuseUpsertWithWhereUniqueWithoutMaladie_typeInput | Prisma.s07_rapport_maladie_infectieuseUpsertWithWhereUniqueWithoutMaladie_typeInput[];
    createMany?: Prisma.s07_rapport_maladie_infectieuseCreateManyMaladie_typeInputEnvelope;
    set?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
    disconnect?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
    delete?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
    connect?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
    update?: Prisma.s07_rapport_maladie_infectieuseUpdateWithWhereUniqueWithoutMaladie_typeInput | Prisma.s07_rapport_maladie_infectieuseUpdateWithWhereUniqueWithoutMaladie_typeInput[];
    updateMany?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithWhereWithoutMaladie_typeInput | Prisma.s07_rapport_maladie_infectieuseUpdateManyWithWhereWithoutMaladie_typeInput[];
    deleteMany?: Prisma.s07_rapport_maladie_infectieuseScalarWhereInput | Prisma.s07_rapport_maladie_infectieuseScalarWhereInput[];
};
export type s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutMaladie_typeNestedInput = {
    create?: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseCreateWithoutMaladie_typeInput, Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutMaladie_typeInput> | Prisma.s07_rapport_maladie_infectieuseCreateWithoutMaladie_typeInput[] | Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutMaladie_typeInput[];
    connectOrCreate?: Prisma.s07_rapport_maladie_infectieuseCreateOrConnectWithoutMaladie_typeInput | Prisma.s07_rapport_maladie_infectieuseCreateOrConnectWithoutMaladie_typeInput[];
    upsert?: Prisma.s07_rapport_maladie_infectieuseUpsertWithWhereUniqueWithoutMaladie_typeInput | Prisma.s07_rapport_maladie_infectieuseUpsertWithWhereUniqueWithoutMaladie_typeInput[];
    createMany?: Prisma.s07_rapport_maladie_infectieuseCreateManyMaladie_typeInputEnvelope;
    set?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
    disconnect?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
    delete?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
    connect?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput | Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput[];
    update?: Prisma.s07_rapport_maladie_infectieuseUpdateWithWhereUniqueWithoutMaladie_typeInput | Prisma.s07_rapport_maladie_infectieuseUpdateWithWhereUniqueWithoutMaladie_typeInput[];
    updateMany?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithWhereWithoutMaladie_typeInput | Prisma.s07_rapport_maladie_infectieuseUpdateManyWithWhereWithoutMaladie_typeInput[];
    deleteMany?: Prisma.s07_rapport_maladie_infectieuseScalarWhereInput | Prisma.s07_rapport_maladie_infectieuseScalarWhereInput[];
};
export type s07_rapport_maladie_infectieuseCreateWithoutRapportInput = {
    libelle_autre?: string | null;
    details?: string | null;
    maladie_type?: Prisma.s07_maladie_infectieuse_typeCreateNestedOneWithoutRapportsInput;
};
export type s07_rapport_maladie_infectieuseUncheckedCreateWithoutRapportInput = {
    id?: number;
    maladie_infectieuse_type_id?: number | null;
    libelle_autre?: string | null;
    details?: string | null;
};
export type s07_rapport_maladie_infectieuseCreateOrConnectWithoutRapportInput = {
    where: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput;
    create: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseCreateWithoutRapportInput, Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutRapportInput>;
};
export type s07_rapport_maladie_infectieuseCreateManyRapportInputEnvelope = {
    data: Prisma.s07_rapport_maladie_infectieuseCreateManyRapportInput | Prisma.s07_rapport_maladie_infectieuseCreateManyRapportInput[];
    skipDuplicates?: boolean;
};
export type s07_rapport_maladie_infectieuseUpsertWithWhereUniqueWithoutRapportInput = {
    where: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput;
    update: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseUpdateWithoutRapportInput, Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseCreateWithoutRapportInput, Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutRapportInput>;
};
export type s07_rapport_maladie_infectieuseUpdateWithWhereUniqueWithoutRapportInput = {
    where: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput;
    data: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseUpdateWithoutRapportInput, Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateWithoutRapportInput>;
};
export type s07_rapport_maladie_infectieuseUpdateManyWithWhereWithoutRapportInput = {
    where: Prisma.s07_rapport_maladie_infectieuseScalarWhereInput;
    data: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseUpdateManyMutationInput, Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportInput>;
};
export type s07_rapport_maladie_infectieuseScalarWhereInput = {
    AND?: Prisma.s07_rapport_maladie_infectieuseScalarWhereInput | Prisma.s07_rapport_maladie_infectieuseScalarWhereInput[];
    OR?: Prisma.s07_rapport_maladie_infectieuseScalarWhereInput[];
    NOT?: Prisma.s07_rapport_maladie_infectieuseScalarWhereInput | Prisma.s07_rapport_maladie_infectieuseScalarWhereInput[];
    id?: Prisma.IntFilter<"s07_rapport_maladie_infectieuse"> | number;
    rapport_id?: Prisma.IntFilter<"s07_rapport_maladie_infectieuse"> | number;
    maladie_infectieuse_type_id?: Prisma.IntNullableFilter<"s07_rapport_maladie_infectieuse"> | number | null;
    libelle_autre?: Prisma.StringNullableFilter<"s07_rapport_maladie_infectieuse"> | string | null;
    details?: Prisma.StringNullableFilter<"s07_rapport_maladie_infectieuse"> | string | null;
};
export type s07_rapport_maladie_infectieuseCreateWithoutMaladie_typeInput = {
    libelle_autre?: string | null;
    details?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS07_rapport_maladie_infectieuseInput;
};
export type s07_rapport_maladie_infectieuseUncheckedCreateWithoutMaladie_typeInput = {
    id?: number;
    rapport_id: number;
    libelle_autre?: string | null;
    details?: string | null;
};
export type s07_rapport_maladie_infectieuseCreateOrConnectWithoutMaladie_typeInput = {
    where: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput;
    create: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseCreateWithoutMaladie_typeInput, Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutMaladie_typeInput>;
};
export type s07_rapport_maladie_infectieuseCreateManyMaladie_typeInputEnvelope = {
    data: Prisma.s07_rapport_maladie_infectieuseCreateManyMaladie_typeInput | Prisma.s07_rapport_maladie_infectieuseCreateManyMaladie_typeInput[];
    skipDuplicates?: boolean;
};
export type s07_rapport_maladie_infectieuseUpsertWithWhereUniqueWithoutMaladie_typeInput = {
    where: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput;
    update: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseUpdateWithoutMaladie_typeInput, Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateWithoutMaladie_typeInput>;
    create: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseCreateWithoutMaladie_typeInput, Prisma.s07_rapport_maladie_infectieuseUncheckedCreateWithoutMaladie_typeInput>;
};
export type s07_rapport_maladie_infectieuseUpdateWithWhereUniqueWithoutMaladie_typeInput = {
    where: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput;
    data: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseUpdateWithoutMaladie_typeInput, Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateWithoutMaladie_typeInput>;
};
export type s07_rapport_maladie_infectieuseUpdateManyWithWhereWithoutMaladie_typeInput = {
    where: Prisma.s07_rapport_maladie_infectieuseScalarWhereInput;
    data: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseUpdateManyMutationInput, Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutMaladie_typeInput>;
};
export type s07_rapport_maladie_infectieuseCreateManyRapportInput = {
    id?: number;
    maladie_infectieuse_type_id?: number | null;
    libelle_autre?: string | null;
    details?: string | null;
};
export type s07_rapport_maladie_infectieuseUpdateWithoutRapportInput = {
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    maladie_type?: Prisma.s07_maladie_infectieuse_typeUpdateOneWithoutRapportsNestedInput;
};
export type s07_rapport_maladie_infectieuseUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    maladie_infectieuse_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    maladie_infectieuse_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s07_rapport_maladie_infectieuseCreateManyMaladie_typeInput = {
    id?: number;
    rapport_id: number;
    libelle_autre?: string | null;
    details?: string | null;
};
export type s07_rapport_maladie_infectieuseUpdateWithoutMaladie_typeInput = {
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS07_rapport_maladie_infectieuseNestedInput;
};
export type s07_rapport_maladie_infectieuseUncheckedUpdateWithoutMaladie_typeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutMaladie_typeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s07_rapport_maladie_infectieuseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    maladie_infectieuse_type_id?: boolean;
    libelle_autre?: boolean;
    details?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    maladie_type?: boolean | Prisma.s07_rapport_maladie_infectieuse$maladie_typeArgs<ExtArgs>;
}, ExtArgs["result"]["s07_rapport_maladie_infectieuse"]>;
export type s07_rapport_maladie_infectieuseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    maladie_infectieuse_type_id?: boolean;
    libelle_autre?: boolean;
    details?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    maladie_type?: boolean | Prisma.s07_rapport_maladie_infectieuse$maladie_typeArgs<ExtArgs>;
}, ExtArgs["result"]["s07_rapport_maladie_infectieuse"]>;
export type s07_rapport_maladie_infectieuseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    maladie_infectieuse_type_id?: boolean;
    libelle_autre?: boolean;
    details?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    maladie_type?: boolean | Prisma.s07_rapport_maladie_infectieuse$maladie_typeArgs<ExtArgs>;
}, ExtArgs["result"]["s07_rapport_maladie_infectieuse"]>;
export type s07_rapport_maladie_infectieuseSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    maladie_infectieuse_type_id?: boolean;
    libelle_autre?: boolean;
    details?: boolean;
};
export type s07_rapport_maladie_infectieuseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "maladie_infectieuse_type_id" | "libelle_autre" | "details", ExtArgs["result"]["s07_rapport_maladie_infectieuse"]>;
export type s07_rapport_maladie_infectieuseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    maladie_type?: boolean | Prisma.s07_rapport_maladie_infectieuse$maladie_typeArgs<ExtArgs>;
};
export type s07_rapport_maladie_infectieuseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    maladie_type?: boolean | Prisma.s07_rapport_maladie_infectieuse$maladie_typeArgs<ExtArgs>;
};
export type s07_rapport_maladie_infectieuseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    maladie_type?: boolean | Prisma.s07_rapport_maladie_infectieuse$maladie_typeArgs<ExtArgs>;
};
export type $s07_rapport_maladie_infectieusePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s07_rapport_maladie_infectieuse";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
        maladie_type: Prisma.$s07_maladie_infectieuse_typePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        maladie_infectieuse_type_id: number | null;
        libelle_autre: string | null;
        details: string | null;
    }, ExtArgs["result"]["s07_rapport_maladie_infectieuse"]>;
    composites: {};
};
export type s07_rapport_maladie_infectieuseGetPayload<S extends boolean | null | undefined | s07_rapport_maladie_infectieuseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s07_rapport_maladie_infectieusePayload, S>;
export type s07_rapport_maladie_infectieuseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s07_rapport_maladie_infectieuseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S07_rapport_maladie_infectieuseCountAggregateInputType | true;
};
export interface s07_rapport_maladie_infectieuseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s07_rapport_maladie_infectieuse'];
        meta: {
            name: 's07_rapport_maladie_infectieuse';
        };
    };
    /**
     * Find zero or one S07_rapport_maladie_infectieuse that matches the filter.
     * @param {s07_rapport_maladie_infectieuseFindUniqueArgs} args - Arguments to find a S07_rapport_maladie_infectieuse
     * @example
     * // Get one S07_rapport_maladie_infectieuse
     * const s07_rapport_maladie_infectieuse = await prisma.s07_rapport_maladie_infectieuse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s07_rapport_maladie_infectieuseFindUniqueArgs>(args: Prisma.SelectSubset<T, s07_rapport_maladie_infectieuseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s07_rapport_maladie_infectieuseClient<runtime.Types.Result.GetResult<Prisma.$s07_rapport_maladie_infectieusePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S07_rapport_maladie_infectieuse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s07_rapport_maladie_infectieuseFindUniqueOrThrowArgs} args - Arguments to find a S07_rapport_maladie_infectieuse
     * @example
     * // Get one S07_rapport_maladie_infectieuse
     * const s07_rapport_maladie_infectieuse = await prisma.s07_rapport_maladie_infectieuse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s07_rapport_maladie_infectieuseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s07_rapport_maladie_infectieuseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s07_rapport_maladie_infectieuseClient<runtime.Types.Result.GetResult<Prisma.$s07_rapport_maladie_infectieusePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S07_rapport_maladie_infectieuse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s07_rapport_maladie_infectieuseFindFirstArgs} args - Arguments to find a S07_rapport_maladie_infectieuse
     * @example
     * // Get one S07_rapport_maladie_infectieuse
     * const s07_rapport_maladie_infectieuse = await prisma.s07_rapport_maladie_infectieuse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s07_rapport_maladie_infectieuseFindFirstArgs>(args?: Prisma.SelectSubset<T, s07_rapport_maladie_infectieuseFindFirstArgs<ExtArgs>>): Prisma.Prisma__s07_rapport_maladie_infectieuseClient<runtime.Types.Result.GetResult<Prisma.$s07_rapport_maladie_infectieusePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S07_rapport_maladie_infectieuse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s07_rapport_maladie_infectieuseFindFirstOrThrowArgs} args - Arguments to find a S07_rapport_maladie_infectieuse
     * @example
     * // Get one S07_rapport_maladie_infectieuse
     * const s07_rapport_maladie_infectieuse = await prisma.s07_rapport_maladie_infectieuse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s07_rapport_maladie_infectieuseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s07_rapport_maladie_infectieuseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s07_rapport_maladie_infectieuseClient<runtime.Types.Result.GetResult<Prisma.$s07_rapport_maladie_infectieusePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S07_rapport_maladie_infectieuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s07_rapport_maladie_infectieuseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S07_rapport_maladie_infectieuses
     * const s07_rapport_maladie_infectieuses = await prisma.s07_rapport_maladie_infectieuse.findMany()
     *
     * // Get first 10 S07_rapport_maladie_infectieuses
     * const s07_rapport_maladie_infectieuses = await prisma.s07_rapport_maladie_infectieuse.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s07_rapport_maladie_infectieuseWithIdOnly = await prisma.s07_rapport_maladie_infectieuse.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s07_rapport_maladie_infectieuseFindManyArgs>(args?: Prisma.SelectSubset<T, s07_rapport_maladie_infectieuseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s07_rapport_maladie_infectieusePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S07_rapport_maladie_infectieuse.
     * @param {s07_rapport_maladie_infectieuseCreateArgs} args - Arguments to create a S07_rapport_maladie_infectieuse.
     * @example
     * // Create one S07_rapport_maladie_infectieuse
     * const S07_rapport_maladie_infectieuse = await prisma.s07_rapport_maladie_infectieuse.create({
     *   data: {
     *     // ... data to create a S07_rapport_maladie_infectieuse
     *   }
     * })
     *
     */
    create<T extends s07_rapport_maladie_infectieuseCreateArgs>(args: Prisma.SelectSubset<T, s07_rapport_maladie_infectieuseCreateArgs<ExtArgs>>): Prisma.Prisma__s07_rapport_maladie_infectieuseClient<runtime.Types.Result.GetResult<Prisma.$s07_rapport_maladie_infectieusePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S07_rapport_maladie_infectieuses.
     * @param {s07_rapport_maladie_infectieuseCreateManyArgs} args - Arguments to create many S07_rapport_maladie_infectieuses.
     * @example
     * // Create many S07_rapport_maladie_infectieuses
     * const s07_rapport_maladie_infectieuse = await prisma.s07_rapport_maladie_infectieuse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s07_rapport_maladie_infectieuseCreateManyArgs>(args?: Prisma.SelectSubset<T, s07_rapport_maladie_infectieuseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S07_rapport_maladie_infectieuses and returns the data saved in the database.
     * @param {s07_rapport_maladie_infectieuseCreateManyAndReturnArgs} args - Arguments to create many S07_rapport_maladie_infectieuses.
     * @example
     * // Create many S07_rapport_maladie_infectieuses
     * const s07_rapport_maladie_infectieuse = await prisma.s07_rapport_maladie_infectieuse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S07_rapport_maladie_infectieuses and only return the `id`
     * const s07_rapport_maladie_infectieuseWithIdOnly = await prisma.s07_rapport_maladie_infectieuse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s07_rapport_maladie_infectieuseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s07_rapport_maladie_infectieuseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s07_rapport_maladie_infectieusePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S07_rapport_maladie_infectieuse.
     * @param {s07_rapport_maladie_infectieuseDeleteArgs} args - Arguments to delete one S07_rapport_maladie_infectieuse.
     * @example
     * // Delete one S07_rapport_maladie_infectieuse
     * const S07_rapport_maladie_infectieuse = await prisma.s07_rapport_maladie_infectieuse.delete({
     *   where: {
     *     // ... filter to delete one S07_rapport_maladie_infectieuse
     *   }
     * })
     *
     */
    delete<T extends s07_rapport_maladie_infectieuseDeleteArgs>(args: Prisma.SelectSubset<T, s07_rapport_maladie_infectieuseDeleteArgs<ExtArgs>>): Prisma.Prisma__s07_rapport_maladie_infectieuseClient<runtime.Types.Result.GetResult<Prisma.$s07_rapport_maladie_infectieusePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S07_rapport_maladie_infectieuse.
     * @param {s07_rapport_maladie_infectieuseUpdateArgs} args - Arguments to update one S07_rapport_maladie_infectieuse.
     * @example
     * // Update one S07_rapport_maladie_infectieuse
     * const s07_rapport_maladie_infectieuse = await prisma.s07_rapport_maladie_infectieuse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s07_rapport_maladie_infectieuseUpdateArgs>(args: Prisma.SelectSubset<T, s07_rapport_maladie_infectieuseUpdateArgs<ExtArgs>>): Prisma.Prisma__s07_rapport_maladie_infectieuseClient<runtime.Types.Result.GetResult<Prisma.$s07_rapport_maladie_infectieusePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S07_rapport_maladie_infectieuses.
     * @param {s07_rapport_maladie_infectieuseDeleteManyArgs} args - Arguments to filter S07_rapport_maladie_infectieuses to delete.
     * @example
     * // Delete a few S07_rapport_maladie_infectieuses
     * const { count } = await prisma.s07_rapport_maladie_infectieuse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s07_rapport_maladie_infectieuseDeleteManyArgs>(args?: Prisma.SelectSubset<T, s07_rapport_maladie_infectieuseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S07_rapport_maladie_infectieuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s07_rapport_maladie_infectieuseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S07_rapport_maladie_infectieuses
     * const s07_rapport_maladie_infectieuse = await prisma.s07_rapport_maladie_infectieuse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s07_rapport_maladie_infectieuseUpdateManyArgs>(args: Prisma.SelectSubset<T, s07_rapport_maladie_infectieuseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S07_rapport_maladie_infectieuses and returns the data updated in the database.
     * @param {s07_rapport_maladie_infectieuseUpdateManyAndReturnArgs} args - Arguments to update many S07_rapport_maladie_infectieuses.
     * @example
     * // Update many S07_rapport_maladie_infectieuses
     * const s07_rapport_maladie_infectieuse = await prisma.s07_rapport_maladie_infectieuse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S07_rapport_maladie_infectieuses and only return the `id`
     * const s07_rapport_maladie_infectieuseWithIdOnly = await prisma.s07_rapport_maladie_infectieuse.updateManyAndReturn({
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
    updateManyAndReturn<T extends s07_rapport_maladie_infectieuseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s07_rapport_maladie_infectieuseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s07_rapport_maladie_infectieusePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S07_rapport_maladie_infectieuse.
     * @param {s07_rapport_maladie_infectieuseUpsertArgs} args - Arguments to update or create a S07_rapport_maladie_infectieuse.
     * @example
     * // Update or create a S07_rapport_maladie_infectieuse
     * const s07_rapport_maladie_infectieuse = await prisma.s07_rapport_maladie_infectieuse.upsert({
     *   create: {
     *     // ... data to create a S07_rapport_maladie_infectieuse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S07_rapport_maladie_infectieuse we want to update
     *   }
     * })
     */
    upsert<T extends s07_rapport_maladie_infectieuseUpsertArgs>(args: Prisma.SelectSubset<T, s07_rapport_maladie_infectieuseUpsertArgs<ExtArgs>>): Prisma.Prisma__s07_rapport_maladie_infectieuseClient<runtime.Types.Result.GetResult<Prisma.$s07_rapport_maladie_infectieusePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S07_rapport_maladie_infectieuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s07_rapport_maladie_infectieuseCountArgs} args - Arguments to filter S07_rapport_maladie_infectieuses to count.
     * @example
     * // Count the number of S07_rapport_maladie_infectieuses
     * const count = await prisma.s07_rapport_maladie_infectieuse.count({
     *   where: {
     *     // ... the filter for the S07_rapport_maladie_infectieuses we want to count
     *   }
     * })
    **/
    count<T extends s07_rapport_maladie_infectieuseCountArgs>(args?: Prisma.Subset<T, s07_rapport_maladie_infectieuseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S07_rapport_maladie_infectieuseCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S07_rapport_maladie_infectieuse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S07_rapport_maladie_infectieuseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S07_rapport_maladie_infectieuseAggregateArgs>(args: Prisma.Subset<T, S07_rapport_maladie_infectieuseAggregateArgs>): Prisma.PrismaPromise<GetS07_rapport_maladie_infectieuseAggregateType<T>>;
    /**
     * Group by S07_rapport_maladie_infectieuse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s07_rapport_maladie_infectieuseGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s07_rapport_maladie_infectieuseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s07_rapport_maladie_infectieuseGroupByArgs['orderBy'];
    } : {
        orderBy?: s07_rapport_maladie_infectieuseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s07_rapport_maladie_infectieuseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS07_rapport_maladie_infectieuseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s07_rapport_maladie_infectieuse model
     */
    readonly fields: s07_rapport_maladie_infectieuseFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s07_rapport_maladie_infectieuse.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s07_rapport_maladie_infectieuseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rapport<T extends Prisma.r_rapport_prDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_prDefaultArgs<ExtArgs>>): Prisma.Prisma__r_rapport_prClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    maladie_type<T extends Prisma.s07_rapport_maladie_infectieuse$maladie_typeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.s07_rapport_maladie_infectieuse$maladie_typeArgs<ExtArgs>>): Prisma.Prisma__s07_maladie_infectieuse_typeClient<runtime.Types.Result.GetResult<Prisma.$s07_maladie_infectieuse_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the s07_rapport_maladie_infectieuse model
 */
export interface s07_rapport_maladie_infectieuseFieldRefs {
    readonly id: Prisma.FieldRef<"s07_rapport_maladie_infectieuse", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s07_rapport_maladie_infectieuse", 'Int'>;
    readonly maladie_infectieuse_type_id: Prisma.FieldRef<"s07_rapport_maladie_infectieuse", 'Int'>;
    readonly libelle_autre: Prisma.FieldRef<"s07_rapport_maladie_infectieuse", 'String'>;
    readonly details: Prisma.FieldRef<"s07_rapport_maladie_infectieuse", 'String'>;
}
/**
 * s07_rapport_maladie_infectieuse findUnique
 */
export type s07_rapport_maladie_infectieuseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_rapport_maladie_infectieuse
     */
    select?: Prisma.s07_rapport_maladie_infectieuseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_rapport_maladie_infectieuse
     */
    omit?: Prisma.s07_rapport_maladie_infectieuseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_rapport_maladie_infectieuseInclude<ExtArgs> | null;
    /**
     * Filter, which s07_rapport_maladie_infectieuse to fetch.
     */
    where: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput;
};
/**
 * s07_rapport_maladie_infectieuse findUniqueOrThrow
 */
export type s07_rapport_maladie_infectieuseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_rapport_maladie_infectieuse
     */
    select?: Prisma.s07_rapport_maladie_infectieuseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_rapport_maladie_infectieuse
     */
    omit?: Prisma.s07_rapport_maladie_infectieuseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_rapport_maladie_infectieuseInclude<ExtArgs> | null;
    /**
     * Filter, which s07_rapport_maladie_infectieuse to fetch.
     */
    where: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput;
};
/**
 * s07_rapport_maladie_infectieuse findFirst
 */
export type s07_rapport_maladie_infectieuseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_rapport_maladie_infectieuse
     */
    select?: Prisma.s07_rapport_maladie_infectieuseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_rapport_maladie_infectieuse
     */
    omit?: Prisma.s07_rapport_maladie_infectieuseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_rapport_maladie_infectieuseInclude<ExtArgs> | null;
    /**
     * Filter, which s07_rapport_maladie_infectieuse to fetch.
     */
    where?: Prisma.s07_rapport_maladie_infectieuseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s07_rapport_maladie_infectieuses to fetch.
     */
    orderBy?: Prisma.s07_rapport_maladie_infectieuseOrderByWithRelationInput | Prisma.s07_rapport_maladie_infectieuseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s07_rapport_maladie_infectieuses.
     */
    cursor?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s07_rapport_maladie_infectieuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s07_rapport_maladie_infectieuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s07_rapport_maladie_infectieuses.
     */
    distinct?: Prisma.S07_rapport_maladie_infectieuseScalarFieldEnum | Prisma.S07_rapport_maladie_infectieuseScalarFieldEnum[];
};
/**
 * s07_rapport_maladie_infectieuse findFirstOrThrow
 */
export type s07_rapport_maladie_infectieuseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_rapport_maladie_infectieuse
     */
    select?: Prisma.s07_rapport_maladie_infectieuseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_rapport_maladie_infectieuse
     */
    omit?: Prisma.s07_rapport_maladie_infectieuseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_rapport_maladie_infectieuseInclude<ExtArgs> | null;
    /**
     * Filter, which s07_rapport_maladie_infectieuse to fetch.
     */
    where?: Prisma.s07_rapport_maladie_infectieuseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s07_rapport_maladie_infectieuses to fetch.
     */
    orderBy?: Prisma.s07_rapport_maladie_infectieuseOrderByWithRelationInput | Prisma.s07_rapport_maladie_infectieuseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s07_rapport_maladie_infectieuses.
     */
    cursor?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s07_rapport_maladie_infectieuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s07_rapport_maladie_infectieuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s07_rapport_maladie_infectieuses.
     */
    distinct?: Prisma.S07_rapport_maladie_infectieuseScalarFieldEnum | Prisma.S07_rapport_maladie_infectieuseScalarFieldEnum[];
};
/**
 * s07_rapport_maladie_infectieuse findMany
 */
export type s07_rapport_maladie_infectieuseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_rapport_maladie_infectieuse
     */
    select?: Prisma.s07_rapport_maladie_infectieuseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_rapport_maladie_infectieuse
     */
    omit?: Prisma.s07_rapport_maladie_infectieuseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_rapport_maladie_infectieuseInclude<ExtArgs> | null;
    /**
     * Filter, which s07_rapport_maladie_infectieuses to fetch.
     */
    where?: Prisma.s07_rapport_maladie_infectieuseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s07_rapport_maladie_infectieuses to fetch.
     */
    orderBy?: Prisma.s07_rapport_maladie_infectieuseOrderByWithRelationInput | Prisma.s07_rapport_maladie_infectieuseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s07_rapport_maladie_infectieuses.
     */
    cursor?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s07_rapport_maladie_infectieuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s07_rapport_maladie_infectieuses.
     */
    skip?: number;
    distinct?: Prisma.S07_rapport_maladie_infectieuseScalarFieldEnum | Prisma.S07_rapport_maladie_infectieuseScalarFieldEnum[];
};
/**
 * s07_rapport_maladie_infectieuse create
 */
export type s07_rapport_maladie_infectieuseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_rapport_maladie_infectieuse
     */
    select?: Prisma.s07_rapport_maladie_infectieuseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_rapport_maladie_infectieuse
     */
    omit?: Prisma.s07_rapport_maladie_infectieuseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_rapport_maladie_infectieuseInclude<ExtArgs> | null;
    /**
     * The data needed to create a s07_rapport_maladie_infectieuse.
     */
    data: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseCreateInput, Prisma.s07_rapport_maladie_infectieuseUncheckedCreateInput>;
};
/**
 * s07_rapport_maladie_infectieuse createMany
 */
export type s07_rapport_maladie_infectieuseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s07_rapport_maladie_infectieuses.
     */
    data: Prisma.s07_rapport_maladie_infectieuseCreateManyInput | Prisma.s07_rapport_maladie_infectieuseCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s07_rapport_maladie_infectieuse createManyAndReturn
 */
export type s07_rapport_maladie_infectieuseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_rapport_maladie_infectieuse
     */
    select?: Prisma.s07_rapport_maladie_infectieuseSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_rapport_maladie_infectieuse
     */
    omit?: Prisma.s07_rapport_maladie_infectieuseOmit<ExtArgs> | null;
    /**
     * The data used to create many s07_rapport_maladie_infectieuses.
     */
    data: Prisma.s07_rapport_maladie_infectieuseCreateManyInput | Prisma.s07_rapport_maladie_infectieuseCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_rapport_maladie_infectieuseIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s07_rapport_maladie_infectieuse update
 */
export type s07_rapport_maladie_infectieuseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_rapport_maladie_infectieuse
     */
    select?: Prisma.s07_rapport_maladie_infectieuseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_rapport_maladie_infectieuse
     */
    omit?: Prisma.s07_rapport_maladie_infectieuseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_rapport_maladie_infectieuseInclude<ExtArgs> | null;
    /**
     * The data needed to update a s07_rapport_maladie_infectieuse.
     */
    data: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseUpdateInput, Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateInput>;
    /**
     * Choose, which s07_rapport_maladie_infectieuse to update.
     */
    where: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput;
};
/**
 * s07_rapport_maladie_infectieuse updateMany
 */
export type s07_rapport_maladie_infectieuseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s07_rapport_maladie_infectieuses.
     */
    data: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseUpdateManyMutationInput, Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyInput>;
    /**
     * Filter which s07_rapport_maladie_infectieuses to update
     */
    where?: Prisma.s07_rapport_maladie_infectieuseWhereInput;
    /**
     * Limit how many s07_rapport_maladie_infectieuses to update.
     */
    limit?: number;
};
/**
 * s07_rapport_maladie_infectieuse updateManyAndReturn
 */
export type s07_rapport_maladie_infectieuseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_rapport_maladie_infectieuse
     */
    select?: Prisma.s07_rapport_maladie_infectieuseSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_rapport_maladie_infectieuse
     */
    omit?: Prisma.s07_rapport_maladie_infectieuseOmit<ExtArgs> | null;
    /**
     * The data used to update s07_rapport_maladie_infectieuses.
     */
    data: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseUpdateManyMutationInput, Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyInput>;
    /**
     * Filter which s07_rapport_maladie_infectieuses to update
     */
    where?: Prisma.s07_rapport_maladie_infectieuseWhereInput;
    /**
     * Limit how many s07_rapport_maladie_infectieuses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_rapport_maladie_infectieuseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s07_rapport_maladie_infectieuse upsert
 */
export type s07_rapport_maladie_infectieuseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_rapport_maladie_infectieuse
     */
    select?: Prisma.s07_rapport_maladie_infectieuseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_rapport_maladie_infectieuse
     */
    omit?: Prisma.s07_rapport_maladie_infectieuseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_rapport_maladie_infectieuseInclude<ExtArgs> | null;
    /**
     * The filter to search for the s07_rapport_maladie_infectieuse to update in case it exists.
     */
    where: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput;
    /**
     * In case the s07_rapport_maladie_infectieuse found by the `where` argument doesn't exist, create a new s07_rapport_maladie_infectieuse with this data.
     */
    create: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseCreateInput, Prisma.s07_rapport_maladie_infectieuseUncheckedCreateInput>;
    /**
     * In case the s07_rapport_maladie_infectieuse was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s07_rapport_maladie_infectieuseUpdateInput, Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateInput>;
};
/**
 * s07_rapport_maladie_infectieuse delete
 */
export type s07_rapport_maladie_infectieuseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_rapport_maladie_infectieuse
     */
    select?: Prisma.s07_rapport_maladie_infectieuseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_rapport_maladie_infectieuse
     */
    omit?: Prisma.s07_rapport_maladie_infectieuseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_rapport_maladie_infectieuseInclude<ExtArgs> | null;
    /**
     * Filter which s07_rapport_maladie_infectieuse to delete.
     */
    where: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput;
};
/**
 * s07_rapport_maladie_infectieuse deleteMany
 */
export type s07_rapport_maladie_infectieuseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s07_rapport_maladie_infectieuses to delete
     */
    where?: Prisma.s07_rapport_maladie_infectieuseWhereInput;
    /**
     * Limit how many s07_rapport_maladie_infectieuses to delete.
     */
    limit?: number;
};
/**
 * s07_rapport_maladie_infectieuse.maladie_type
 */
export type s07_rapport_maladie_infectieuse$maladie_typeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladie_infectieuse_type
     */
    select?: Prisma.s07_maladie_infectieuse_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladie_infectieuse_type
     */
    omit?: Prisma.s07_maladie_infectieuse_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladie_infectieuse_typeInclude<ExtArgs> | null;
    where?: Prisma.s07_maladie_infectieuse_typeWhereInput;
};
/**
 * s07_rapport_maladie_infectieuse without action
 */
export type s07_rapport_maladie_infectieuseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_rapport_maladie_infectieuse
     */
    select?: Prisma.s07_rapport_maladie_infectieuseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_rapport_maladie_infectieuse
     */
    omit?: Prisma.s07_rapport_maladie_infectieuseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_rapport_maladie_infectieuseInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s07_rapport_maladie_infectieuse.d.ts.map