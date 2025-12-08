import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s06_rapport_antecedent
 *
 */
export type s06_rapport_antecedentModel = runtime.Types.Result.DefaultSelection<Prisma.$s06_rapport_antecedentPayload>;
export type AggregateS06_rapport_antecedent = {
    _count: S06_rapport_antecedentCountAggregateOutputType | null;
    _avg: S06_rapport_antecedentAvgAggregateOutputType | null;
    _sum: S06_rapport_antecedentSumAggregateOutputType | null;
    _min: S06_rapport_antecedentMinAggregateOutputType | null;
    _max: S06_rapport_antecedentMaxAggregateOutputType | null;
};
export type S06_rapport_antecedentAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    antecedent_id: number | null;
};
export type S06_rapport_antecedentSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    antecedent_id: number | null;
};
export type S06_rapport_antecedentMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    antecedent_id: number | null;
};
export type S06_rapport_antecedentMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    antecedent_id: number | null;
};
export type S06_rapport_antecedentCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    antecedent_id: number;
    _all: number;
};
export type S06_rapport_antecedentAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
    antecedent_id?: true;
};
export type S06_rapport_antecedentSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
    antecedent_id?: true;
};
export type S06_rapport_antecedentMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    antecedent_id?: true;
};
export type S06_rapport_antecedentMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    antecedent_id?: true;
};
export type S06_rapport_antecedentCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    antecedent_id?: true;
    _all?: true;
};
export type S06_rapport_antecedentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s06_rapport_antecedent to aggregate.
     */
    where?: Prisma.s06_rapport_antecedentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s06_rapport_antecedents to fetch.
     */
    orderBy?: Prisma.s06_rapport_antecedentOrderByWithRelationInput | Prisma.s06_rapport_antecedentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s06_rapport_antecedentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s06_rapport_antecedents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s06_rapport_antecedents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s06_rapport_antecedents
    **/
    _count?: true | S06_rapport_antecedentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S06_rapport_antecedentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S06_rapport_antecedentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S06_rapport_antecedentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S06_rapport_antecedentMaxAggregateInputType;
};
export type GetS06_rapport_antecedentAggregateType<T extends S06_rapport_antecedentAggregateArgs> = {
    [P in keyof T & keyof AggregateS06_rapport_antecedent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS06_rapport_antecedent[P]> : Prisma.GetScalarType<T[P], AggregateS06_rapport_antecedent[P]>;
};
export type s06_rapport_antecedentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s06_rapport_antecedentWhereInput;
    orderBy?: Prisma.s06_rapport_antecedentOrderByWithAggregationInput | Prisma.s06_rapport_antecedentOrderByWithAggregationInput[];
    by: Prisma.S06_rapport_antecedentScalarFieldEnum[] | Prisma.S06_rapport_antecedentScalarFieldEnum;
    having?: Prisma.s06_rapport_antecedentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S06_rapport_antecedentCountAggregateInputType | true;
    _avg?: S06_rapport_antecedentAvgAggregateInputType;
    _sum?: S06_rapport_antecedentSumAggregateInputType;
    _min?: S06_rapport_antecedentMinAggregateInputType;
    _max?: S06_rapport_antecedentMaxAggregateInputType;
};
export type S06_rapport_antecedentGroupByOutputType = {
    id: number;
    rapport_id: number;
    antecedent_id: number;
    _count: S06_rapport_antecedentCountAggregateOutputType | null;
    _avg: S06_rapport_antecedentAvgAggregateOutputType | null;
    _sum: S06_rapport_antecedentSumAggregateOutputType | null;
    _min: S06_rapport_antecedentMinAggregateOutputType | null;
    _max: S06_rapport_antecedentMaxAggregateOutputType | null;
};
type GetS06_rapport_antecedentGroupByPayload<T extends s06_rapport_antecedentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S06_rapport_antecedentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S06_rapport_antecedentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S06_rapport_antecedentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S06_rapport_antecedentGroupByOutputType[P]>;
}>>;
export type s06_rapport_antecedentWhereInput = {
    AND?: Prisma.s06_rapport_antecedentWhereInput | Prisma.s06_rapport_antecedentWhereInput[];
    OR?: Prisma.s06_rapport_antecedentWhereInput[];
    NOT?: Prisma.s06_rapport_antecedentWhereInput | Prisma.s06_rapport_antecedentWhereInput[];
    id?: Prisma.IntFilter<"s06_rapport_antecedent"> | number;
    rapport_id?: Prisma.IntFilter<"s06_rapport_antecedent"> | number;
    antecedent_id?: Prisma.IntFilter<"s06_rapport_antecedent"> | number;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
    antecedent?: Prisma.XOR<Prisma.S06_antecedent_typeScalarRelationFilter, Prisma.s06_antecedent_typeWhereInput>;
};
export type s06_rapport_antecedentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    antecedent_id?: Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
    antecedent?: Prisma.s06_antecedent_typeOrderByWithRelationInput;
};
export type s06_rapport_antecedentWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.s06_rapport_antecedentWhereInput | Prisma.s06_rapport_antecedentWhereInput[];
    OR?: Prisma.s06_rapport_antecedentWhereInput[];
    NOT?: Prisma.s06_rapport_antecedentWhereInput | Prisma.s06_rapport_antecedentWhereInput[];
    rapport_id?: Prisma.IntFilter<"s06_rapport_antecedent"> | number;
    antecedent_id?: Prisma.IntFilter<"s06_rapport_antecedent"> | number;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
    antecedent?: Prisma.XOR<Prisma.S06_antecedent_typeScalarRelationFilter, Prisma.s06_antecedent_typeWhereInput>;
}, "id">;
export type s06_rapport_antecedentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    antecedent_id?: Prisma.SortOrder;
    _count?: Prisma.s06_rapport_antecedentCountOrderByAggregateInput;
    _avg?: Prisma.s06_rapport_antecedentAvgOrderByAggregateInput;
    _max?: Prisma.s06_rapport_antecedentMaxOrderByAggregateInput;
    _min?: Prisma.s06_rapport_antecedentMinOrderByAggregateInput;
    _sum?: Prisma.s06_rapport_antecedentSumOrderByAggregateInput;
};
export type s06_rapport_antecedentScalarWhereWithAggregatesInput = {
    AND?: Prisma.s06_rapport_antecedentScalarWhereWithAggregatesInput | Prisma.s06_rapport_antecedentScalarWhereWithAggregatesInput[];
    OR?: Prisma.s06_rapport_antecedentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s06_rapport_antecedentScalarWhereWithAggregatesInput | Prisma.s06_rapport_antecedentScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s06_rapport_antecedent"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s06_rapport_antecedent"> | number;
    antecedent_id?: Prisma.IntWithAggregatesFilter<"s06_rapport_antecedent"> | number;
};
export type s06_rapport_antecedentCreateInput = {
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS06_rapport_antecedentInput;
    antecedent: Prisma.s06_antecedent_typeCreateNestedOneWithoutRapportsInput;
};
export type s06_rapport_antecedentUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    antecedent_id: number;
};
export type s06_rapport_antecedentUpdateInput = {
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS06_rapport_antecedentNestedInput;
    antecedent?: Prisma.s06_antecedent_typeUpdateOneRequiredWithoutRapportsNestedInput;
};
export type s06_rapport_antecedentUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    antecedent_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type s06_rapport_antecedentCreateManyInput = {
    id?: number;
    rapport_id: number;
    antecedent_id: number;
};
export type s06_rapport_antecedentUpdateManyMutationInput = {};
export type s06_rapport_antecedentUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    antecedent_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type S06_rapport_antecedentListRelationFilter = {
    every?: Prisma.s06_rapport_antecedentWhereInput;
    some?: Prisma.s06_rapport_antecedentWhereInput;
    none?: Prisma.s06_rapport_antecedentWhereInput;
};
export type s06_rapport_antecedentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type s06_rapport_antecedentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    antecedent_id?: Prisma.SortOrder;
};
export type s06_rapport_antecedentAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    antecedent_id?: Prisma.SortOrder;
};
export type s06_rapport_antecedentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    antecedent_id?: Prisma.SortOrder;
};
export type s06_rapport_antecedentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    antecedent_id?: Prisma.SortOrder;
};
export type s06_rapport_antecedentSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    antecedent_id?: Prisma.SortOrder;
};
export type s06_rapport_antecedentCreateNestedManyWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s06_rapport_antecedentCreateWithoutRapportInput, Prisma.s06_rapport_antecedentUncheckedCreateWithoutRapportInput> | Prisma.s06_rapport_antecedentCreateWithoutRapportInput[] | Prisma.s06_rapport_antecedentUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s06_rapport_antecedentCreateOrConnectWithoutRapportInput | Prisma.s06_rapport_antecedentCreateOrConnectWithoutRapportInput[];
    createMany?: Prisma.s06_rapport_antecedentCreateManyRapportInputEnvelope;
    connect?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
};
export type s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s06_rapport_antecedentCreateWithoutRapportInput, Prisma.s06_rapport_antecedentUncheckedCreateWithoutRapportInput> | Prisma.s06_rapport_antecedentCreateWithoutRapportInput[] | Prisma.s06_rapport_antecedentUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s06_rapport_antecedentCreateOrConnectWithoutRapportInput | Prisma.s06_rapport_antecedentCreateOrConnectWithoutRapportInput[];
    createMany?: Prisma.s06_rapport_antecedentCreateManyRapportInputEnvelope;
    connect?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
};
export type s06_rapport_antecedentUpdateManyWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s06_rapport_antecedentCreateWithoutRapportInput, Prisma.s06_rapport_antecedentUncheckedCreateWithoutRapportInput> | Prisma.s06_rapport_antecedentCreateWithoutRapportInput[] | Prisma.s06_rapport_antecedentUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s06_rapport_antecedentCreateOrConnectWithoutRapportInput | Prisma.s06_rapport_antecedentCreateOrConnectWithoutRapportInput[];
    upsert?: Prisma.s06_rapport_antecedentUpsertWithWhereUniqueWithoutRapportInput | Prisma.s06_rapport_antecedentUpsertWithWhereUniqueWithoutRapportInput[];
    createMany?: Prisma.s06_rapport_antecedentCreateManyRapportInputEnvelope;
    set?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
    disconnect?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
    delete?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
    connect?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
    update?: Prisma.s06_rapport_antecedentUpdateWithWhereUniqueWithoutRapportInput | Prisma.s06_rapport_antecedentUpdateWithWhereUniqueWithoutRapportInput[];
    updateMany?: Prisma.s06_rapport_antecedentUpdateManyWithWhereWithoutRapportInput | Prisma.s06_rapport_antecedentUpdateManyWithWhereWithoutRapportInput[];
    deleteMany?: Prisma.s06_rapport_antecedentScalarWhereInput | Prisma.s06_rapport_antecedentScalarWhereInput[];
};
export type s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s06_rapport_antecedentCreateWithoutRapportInput, Prisma.s06_rapport_antecedentUncheckedCreateWithoutRapportInput> | Prisma.s06_rapport_antecedentCreateWithoutRapportInput[] | Prisma.s06_rapport_antecedentUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s06_rapport_antecedentCreateOrConnectWithoutRapportInput | Prisma.s06_rapport_antecedentCreateOrConnectWithoutRapportInput[];
    upsert?: Prisma.s06_rapport_antecedentUpsertWithWhereUniqueWithoutRapportInput | Prisma.s06_rapport_antecedentUpsertWithWhereUniqueWithoutRapportInput[];
    createMany?: Prisma.s06_rapport_antecedentCreateManyRapportInputEnvelope;
    set?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
    disconnect?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
    delete?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
    connect?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
    update?: Prisma.s06_rapport_antecedentUpdateWithWhereUniqueWithoutRapportInput | Prisma.s06_rapport_antecedentUpdateWithWhereUniqueWithoutRapportInput[];
    updateMany?: Prisma.s06_rapport_antecedentUpdateManyWithWhereWithoutRapportInput | Prisma.s06_rapport_antecedentUpdateManyWithWhereWithoutRapportInput[];
    deleteMany?: Prisma.s06_rapport_antecedentScalarWhereInput | Prisma.s06_rapport_antecedentScalarWhereInput[];
};
export type s06_rapport_antecedentCreateNestedManyWithoutAntecedentInput = {
    create?: Prisma.XOR<Prisma.s06_rapport_antecedentCreateWithoutAntecedentInput, Prisma.s06_rapport_antecedentUncheckedCreateWithoutAntecedentInput> | Prisma.s06_rapport_antecedentCreateWithoutAntecedentInput[] | Prisma.s06_rapport_antecedentUncheckedCreateWithoutAntecedentInput[];
    connectOrCreate?: Prisma.s06_rapport_antecedentCreateOrConnectWithoutAntecedentInput | Prisma.s06_rapport_antecedentCreateOrConnectWithoutAntecedentInput[];
    createMany?: Prisma.s06_rapport_antecedentCreateManyAntecedentInputEnvelope;
    connect?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
};
export type s06_rapport_antecedentUncheckedCreateNestedManyWithoutAntecedentInput = {
    create?: Prisma.XOR<Prisma.s06_rapport_antecedentCreateWithoutAntecedentInput, Prisma.s06_rapport_antecedentUncheckedCreateWithoutAntecedentInput> | Prisma.s06_rapport_antecedentCreateWithoutAntecedentInput[] | Prisma.s06_rapport_antecedentUncheckedCreateWithoutAntecedentInput[];
    connectOrCreate?: Prisma.s06_rapport_antecedentCreateOrConnectWithoutAntecedentInput | Prisma.s06_rapport_antecedentCreateOrConnectWithoutAntecedentInput[];
    createMany?: Prisma.s06_rapport_antecedentCreateManyAntecedentInputEnvelope;
    connect?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
};
export type s06_rapport_antecedentUpdateManyWithoutAntecedentNestedInput = {
    create?: Prisma.XOR<Prisma.s06_rapport_antecedentCreateWithoutAntecedentInput, Prisma.s06_rapport_antecedentUncheckedCreateWithoutAntecedentInput> | Prisma.s06_rapport_antecedentCreateWithoutAntecedentInput[] | Prisma.s06_rapport_antecedentUncheckedCreateWithoutAntecedentInput[];
    connectOrCreate?: Prisma.s06_rapport_antecedentCreateOrConnectWithoutAntecedentInput | Prisma.s06_rapport_antecedentCreateOrConnectWithoutAntecedentInput[];
    upsert?: Prisma.s06_rapport_antecedentUpsertWithWhereUniqueWithoutAntecedentInput | Prisma.s06_rapport_antecedentUpsertWithWhereUniqueWithoutAntecedentInput[];
    createMany?: Prisma.s06_rapport_antecedentCreateManyAntecedentInputEnvelope;
    set?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
    disconnect?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
    delete?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
    connect?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
    update?: Prisma.s06_rapport_antecedentUpdateWithWhereUniqueWithoutAntecedentInput | Prisma.s06_rapport_antecedentUpdateWithWhereUniqueWithoutAntecedentInput[];
    updateMany?: Prisma.s06_rapport_antecedentUpdateManyWithWhereWithoutAntecedentInput | Prisma.s06_rapport_antecedentUpdateManyWithWhereWithoutAntecedentInput[];
    deleteMany?: Prisma.s06_rapport_antecedentScalarWhereInput | Prisma.s06_rapport_antecedentScalarWhereInput[];
};
export type s06_rapport_antecedentUncheckedUpdateManyWithoutAntecedentNestedInput = {
    create?: Prisma.XOR<Prisma.s06_rapport_antecedentCreateWithoutAntecedentInput, Prisma.s06_rapport_antecedentUncheckedCreateWithoutAntecedentInput> | Prisma.s06_rapport_antecedentCreateWithoutAntecedentInput[] | Prisma.s06_rapport_antecedentUncheckedCreateWithoutAntecedentInput[];
    connectOrCreate?: Prisma.s06_rapport_antecedentCreateOrConnectWithoutAntecedentInput | Prisma.s06_rapport_antecedentCreateOrConnectWithoutAntecedentInput[];
    upsert?: Prisma.s06_rapport_antecedentUpsertWithWhereUniqueWithoutAntecedentInput | Prisma.s06_rapport_antecedentUpsertWithWhereUniqueWithoutAntecedentInput[];
    createMany?: Prisma.s06_rapport_antecedentCreateManyAntecedentInputEnvelope;
    set?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
    disconnect?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
    delete?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
    connect?: Prisma.s06_rapport_antecedentWhereUniqueInput | Prisma.s06_rapport_antecedentWhereUniqueInput[];
    update?: Prisma.s06_rapport_antecedentUpdateWithWhereUniqueWithoutAntecedentInput | Prisma.s06_rapport_antecedentUpdateWithWhereUniqueWithoutAntecedentInput[];
    updateMany?: Prisma.s06_rapport_antecedentUpdateManyWithWhereWithoutAntecedentInput | Prisma.s06_rapport_antecedentUpdateManyWithWhereWithoutAntecedentInput[];
    deleteMany?: Prisma.s06_rapport_antecedentScalarWhereInput | Prisma.s06_rapport_antecedentScalarWhereInput[];
};
export type s06_rapport_antecedentCreateWithoutRapportInput = {
    antecedent: Prisma.s06_antecedent_typeCreateNestedOneWithoutRapportsInput;
};
export type s06_rapport_antecedentUncheckedCreateWithoutRapportInput = {
    id?: number;
    antecedent_id: number;
};
export type s06_rapport_antecedentCreateOrConnectWithoutRapportInput = {
    where: Prisma.s06_rapport_antecedentWhereUniqueInput;
    create: Prisma.XOR<Prisma.s06_rapport_antecedentCreateWithoutRapportInput, Prisma.s06_rapport_antecedentUncheckedCreateWithoutRapportInput>;
};
export type s06_rapport_antecedentCreateManyRapportInputEnvelope = {
    data: Prisma.s06_rapport_antecedentCreateManyRapportInput | Prisma.s06_rapport_antecedentCreateManyRapportInput[];
    skipDuplicates?: boolean;
};
export type s06_rapport_antecedentUpsertWithWhereUniqueWithoutRapportInput = {
    where: Prisma.s06_rapport_antecedentWhereUniqueInput;
    update: Prisma.XOR<Prisma.s06_rapport_antecedentUpdateWithoutRapportInput, Prisma.s06_rapport_antecedentUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s06_rapport_antecedentCreateWithoutRapportInput, Prisma.s06_rapport_antecedentUncheckedCreateWithoutRapportInput>;
};
export type s06_rapport_antecedentUpdateWithWhereUniqueWithoutRapportInput = {
    where: Prisma.s06_rapport_antecedentWhereUniqueInput;
    data: Prisma.XOR<Prisma.s06_rapport_antecedentUpdateWithoutRapportInput, Prisma.s06_rapport_antecedentUncheckedUpdateWithoutRapportInput>;
};
export type s06_rapport_antecedentUpdateManyWithWhereWithoutRapportInput = {
    where: Prisma.s06_rapport_antecedentScalarWhereInput;
    data: Prisma.XOR<Prisma.s06_rapport_antecedentUpdateManyMutationInput, Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportInput>;
};
export type s06_rapport_antecedentScalarWhereInput = {
    AND?: Prisma.s06_rapport_antecedentScalarWhereInput | Prisma.s06_rapport_antecedentScalarWhereInput[];
    OR?: Prisma.s06_rapport_antecedentScalarWhereInput[];
    NOT?: Prisma.s06_rapport_antecedentScalarWhereInput | Prisma.s06_rapport_antecedentScalarWhereInput[];
    id?: Prisma.IntFilter<"s06_rapport_antecedent"> | number;
    rapport_id?: Prisma.IntFilter<"s06_rapport_antecedent"> | number;
    antecedent_id?: Prisma.IntFilter<"s06_rapport_antecedent"> | number;
};
export type s06_rapport_antecedentCreateWithoutAntecedentInput = {
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS06_rapport_antecedentInput;
};
export type s06_rapport_antecedentUncheckedCreateWithoutAntecedentInput = {
    id?: number;
    rapport_id: number;
};
export type s06_rapport_antecedentCreateOrConnectWithoutAntecedentInput = {
    where: Prisma.s06_rapport_antecedentWhereUniqueInput;
    create: Prisma.XOR<Prisma.s06_rapport_antecedentCreateWithoutAntecedentInput, Prisma.s06_rapport_antecedentUncheckedCreateWithoutAntecedentInput>;
};
export type s06_rapport_antecedentCreateManyAntecedentInputEnvelope = {
    data: Prisma.s06_rapport_antecedentCreateManyAntecedentInput | Prisma.s06_rapport_antecedentCreateManyAntecedentInput[];
    skipDuplicates?: boolean;
};
export type s06_rapport_antecedentUpsertWithWhereUniqueWithoutAntecedentInput = {
    where: Prisma.s06_rapport_antecedentWhereUniqueInput;
    update: Prisma.XOR<Prisma.s06_rapport_antecedentUpdateWithoutAntecedentInput, Prisma.s06_rapport_antecedentUncheckedUpdateWithoutAntecedentInput>;
    create: Prisma.XOR<Prisma.s06_rapport_antecedentCreateWithoutAntecedentInput, Prisma.s06_rapport_antecedentUncheckedCreateWithoutAntecedentInput>;
};
export type s06_rapport_antecedentUpdateWithWhereUniqueWithoutAntecedentInput = {
    where: Prisma.s06_rapport_antecedentWhereUniqueInput;
    data: Prisma.XOR<Prisma.s06_rapport_antecedentUpdateWithoutAntecedentInput, Prisma.s06_rapport_antecedentUncheckedUpdateWithoutAntecedentInput>;
};
export type s06_rapport_antecedentUpdateManyWithWhereWithoutAntecedentInput = {
    where: Prisma.s06_rapport_antecedentScalarWhereInput;
    data: Prisma.XOR<Prisma.s06_rapport_antecedentUpdateManyMutationInput, Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutAntecedentInput>;
};
export type s06_rapport_antecedentCreateManyRapportInput = {
    id?: number;
    antecedent_id: number;
};
export type s06_rapport_antecedentUpdateWithoutRapportInput = {
    antecedent?: Prisma.s06_antecedent_typeUpdateOneRequiredWithoutRapportsNestedInput;
};
export type s06_rapport_antecedentUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    antecedent_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type s06_rapport_antecedentUncheckedUpdateManyWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    antecedent_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type s06_rapport_antecedentCreateManyAntecedentInput = {
    id?: number;
    rapport_id: number;
};
export type s06_rapport_antecedentUpdateWithoutAntecedentInput = {
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS06_rapport_antecedentNestedInput;
};
export type s06_rapport_antecedentUncheckedUpdateWithoutAntecedentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type s06_rapport_antecedentUncheckedUpdateManyWithoutAntecedentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type s06_rapport_antecedentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    antecedent_id?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    antecedent?: boolean | Prisma.s06_antecedent_typeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s06_rapport_antecedent"]>;
export type s06_rapport_antecedentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    antecedent_id?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    antecedent?: boolean | Prisma.s06_antecedent_typeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s06_rapport_antecedent"]>;
export type s06_rapport_antecedentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    antecedent_id?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    antecedent?: boolean | Prisma.s06_antecedent_typeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s06_rapport_antecedent"]>;
export type s06_rapport_antecedentSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    antecedent_id?: boolean;
};
export type s06_rapport_antecedentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "antecedent_id", ExtArgs["result"]["s06_rapport_antecedent"]>;
export type s06_rapport_antecedentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    antecedent?: boolean | Prisma.s06_antecedent_typeDefaultArgs<ExtArgs>;
};
export type s06_rapport_antecedentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    antecedent?: boolean | Prisma.s06_antecedent_typeDefaultArgs<ExtArgs>;
};
export type s06_rapport_antecedentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    antecedent?: boolean | Prisma.s06_antecedent_typeDefaultArgs<ExtArgs>;
};
export type $s06_rapport_antecedentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s06_rapport_antecedent";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
        antecedent: Prisma.$s06_antecedent_typePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        antecedent_id: number;
    }, ExtArgs["result"]["s06_rapport_antecedent"]>;
    composites: {};
};
export type s06_rapport_antecedentGetPayload<S extends boolean | null | undefined | s06_rapport_antecedentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s06_rapport_antecedentPayload, S>;
export type s06_rapport_antecedentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s06_rapport_antecedentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S06_rapport_antecedentCountAggregateInputType | true;
};
export interface s06_rapport_antecedentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s06_rapport_antecedent'];
        meta: {
            name: 's06_rapport_antecedent';
        };
    };
    /**
     * Find zero or one S06_rapport_antecedent that matches the filter.
     * @param {s06_rapport_antecedentFindUniqueArgs} args - Arguments to find a S06_rapport_antecedent
     * @example
     * // Get one S06_rapport_antecedent
     * const s06_rapport_antecedent = await prisma.s06_rapport_antecedent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s06_rapport_antecedentFindUniqueArgs>(args: Prisma.SelectSubset<T, s06_rapport_antecedentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s06_rapport_antecedentClient<runtime.Types.Result.GetResult<Prisma.$s06_rapport_antecedentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S06_rapport_antecedent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s06_rapport_antecedentFindUniqueOrThrowArgs} args - Arguments to find a S06_rapport_antecedent
     * @example
     * // Get one S06_rapport_antecedent
     * const s06_rapport_antecedent = await prisma.s06_rapport_antecedent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s06_rapport_antecedentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s06_rapport_antecedentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s06_rapport_antecedentClient<runtime.Types.Result.GetResult<Prisma.$s06_rapport_antecedentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S06_rapport_antecedent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s06_rapport_antecedentFindFirstArgs} args - Arguments to find a S06_rapport_antecedent
     * @example
     * // Get one S06_rapport_antecedent
     * const s06_rapport_antecedent = await prisma.s06_rapport_antecedent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s06_rapport_antecedentFindFirstArgs>(args?: Prisma.SelectSubset<T, s06_rapport_antecedentFindFirstArgs<ExtArgs>>): Prisma.Prisma__s06_rapport_antecedentClient<runtime.Types.Result.GetResult<Prisma.$s06_rapport_antecedentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S06_rapport_antecedent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s06_rapport_antecedentFindFirstOrThrowArgs} args - Arguments to find a S06_rapport_antecedent
     * @example
     * // Get one S06_rapport_antecedent
     * const s06_rapport_antecedent = await prisma.s06_rapport_antecedent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s06_rapport_antecedentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s06_rapport_antecedentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s06_rapport_antecedentClient<runtime.Types.Result.GetResult<Prisma.$s06_rapport_antecedentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S06_rapport_antecedents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s06_rapport_antecedentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S06_rapport_antecedents
     * const s06_rapport_antecedents = await prisma.s06_rapport_antecedent.findMany()
     *
     * // Get first 10 S06_rapport_antecedents
     * const s06_rapport_antecedents = await prisma.s06_rapport_antecedent.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s06_rapport_antecedentWithIdOnly = await prisma.s06_rapport_antecedent.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s06_rapport_antecedentFindManyArgs>(args?: Prisma.SelectSubset<T, s06_rapport_antecedentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s06_rapport_antecedentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S06_rapport_antecedent.
     * @param {s06_rapport_antecedentCreateArgs} args - Arguments to create a S06_rapport_antecedent.
     * @example
     * // Create one S06_rapport_antecedent
     * const S06_rapport_antecedent = await prisma.s06_rapport_antecedent.create({
     *   data: {
     *     // ... data to create a S06_rapport_antecedent
     *   }
     * })
     *
     */
    create<T extends s06_rapport_antecedentCreateArgs>(args: Prisma.SelectSubset<T, s06_rapport_antecedentCreateArgs<ExtArgs>>): Prisma.Prisma__s06_rapport_antecedentClient<runtime.Types.Result.GetResult<Prisma.$s06_rapport_antecedentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S06_rapport_antecedents.
     * @param {s06_rapport_antecedentCreateManyArgs} args - Arguments to create many S06_rapport_antecedents.
     * @example
     * // Create many S06_rapport_antecedents
     * const s06_rapport_antecedent = await prisma.s06_rapport_antecedent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s06_rapport_antecedentCreateManyArgs>(args?: Prisma.SelectSubset<T, s06_rapport_antecedentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S06_rapport_antecedents and returns the data saved in the database.
     * @param {s06_rapport_antecedentCreateManyAndReturnArgs} args - Arguments to create many S06_rapport_antecedents.
     * @example
     * // Create many S06_rapport_antecedents
     * const s06_rapport_antecedent = await prisma.s06_rapport_antecedent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S06_rapport_antecedents and only return the `id`
     * const s06_rapport_antecedentWithIdOnly = await prisma.s06_rapport_antecedent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s06_rapport_antecedentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s06_rapport_antecedentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s06_rapport_antecedentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S06_rapport_antecedent.
     * @param {s06_rapport_antecedentDeleteArgs} args - Arguments to delete one S06_rapport_antecedent.
     * @example
     * // Delete one S06_rapport_antecedent
     * const S06_rapport_antecedent = await prisma.s06_rapport_antecedent.delete({
     *   where: {
     *     // ... filter to delete one S06_rapport_antecedent
     *   }
     * })
     *
     */
    delete<T extends s06_rapport_antecedentDeleteArgs>(args: Prisma.SelectSubset<T, s06_rapport_antecedentDeleteArgs<ExtArgs>>): Prisma.Prisma__s06_rapport_antecedentClient<runtime.Types.Result.GetResult<Prisma.$s06_rapport_antecedentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S06_rapport_antecedent.
     * @param {s06_rapport_antecedentUpdateArgs} args - Arguments to update one S06_rapport_antecedent.
     * @example
     * // Update one S06_rapport_antecedent
     * const s06_rapport_antecedent = await prisma.s06_rapport_antecedent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s06_rapport_antecedentUpdateArgs>(args: Prisma.SelectSubset<T, s06_rapport_antecedentUpdateArgs<ExtArgs>>): Prisma.Prisma__s06_rapport_antecedentClient<runtime.Types.Result.GetResult<Prisma.$s06_rapport_antecedentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S06_rapport_antecedents.
     * @param {s06_rapport_antecedentDeleteManyArgs} args - Arguments to filter S06_rapport_antecedents to delete.
     * @example
     * // Delete a few S06_rapport_antecedents
     * const { count } = await prisma.s06_rapport_antecedent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s06_rapport_antecedentDeleteManyArgs>(args?: Prisma.SelectSubset<T, s06_rapport_antecedentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S06_rapport_antecedents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s06_rapport_antecedentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S06_rapport_antecedents
     * const s06_rapport_antecedent = await prisma.s06_rapport_antecedent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s06_rapport_antecedentUpdateManyArgs>(args: Prisma.SelectSubset<T, s06_rapport_antecedentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S06_rapport_antecedents and returns the data updated in the database.
     * @param {s06_rapport_antecedentUpdateManyAndReturnArgs} args - Arguments to update many S06_rapport_antecedents.
     * @example
     * // Update many S06_rapport_antecedents
     * const s06_rapport_antecedent = await prisma.s06_rapport_antecedent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S06_rapport_antecedents and only return the `id`
     * const s06_rapport_antecedentWithIdOnly = await prisma.s06_rapport_antecedent.updateManyAndReturn({
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
    updateManyAndReturn<T extends s06_rapport_antecedentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s06_rapport_antecedentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s06_rapport_antecedentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S06_rapport_antecedent.
     * @param {s06_rapport_antecedentUpsertArgs} args - Arguments to update or create a S06_rapport_antecedent.
     * @example
     * // Update or create a S06_rapport_antecedent
     * const s06_rapport_antecedent = await prisma.s06_rapport_antecedent.upsert({
     *   create: {
     *     // ... data to create a S06_rapport_antecedent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S06_rapport_antecedent we want to update
     *   }
     * })
     */
    upsert<T extends s06_rapport_antecedentUpsertArgs>(args: Prisma.SelectSubset<T, s06_rapport_antecedentUpsertArgs<ExtArgs>>): Prisma.Prisma__s06_rapport_antecedentClient<runtime.Types.Result.GetResult<Prisma.$s06_rapport_antecedentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S06_rapport_antecedents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s06_rapport_antecedentCountArgs} args - Arguments to filter S06_rapport_antecedents to count.
     * @example
     * // Count the number of S06_rapport_antecedents
     * const count = await prisma.s06_rapport_antecedent.count({
     *   where: {
     *     // ... the filter for the S06_rapport_antecedents we want to count
     *   }
     * })
    **/
    count<T extends s06_rapport_antecedentCountArgs>(args?: Prisma.Subset<T, s06_rapport_antecedentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S06_rapport_antecedentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S06_rapport_antecedent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S06_rapport_antecedentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S06_rapport_antecedentAggregateArgs>(args: Prisma.Subset<T, S06_rapport_antecedentAggregateArgs>): Prisma.PrismaPromise<GetS06_rapport_antecedentAggregateType<T>>;
    /**
     * Group by S06_rapport_antecedent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s06_rapport_antecedentGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s06_rapport_antecedentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s06_rapport_antecedentGroupByArgs['orderBy'];
    } : {
        orderBy?: s06_rapport_antecedentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s06_rapport_antecedentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS06_rapport_antecedentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s06_rapport_antecedent model
     */
    readonly fields: s06_rapport_antecedentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s06_rapport_antecedent.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s06_rapport_antecedentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rapport<T extends Prisma.r_rapport_prDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_prDefaultArgs<ExtArgs>>): Prisma.Prisma__r_rapport_prClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    antecedent<T extends Prisma.s06_antecedent_typeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.s06_antecedent_typeDefaultArgs<ExtArgs>>): Prisma.Prisma__s06_antecedent_typeClient<runtime.Types.Result.GetResult<Prisma.$s06_antecedent_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the s06_rapport_antecedent model
 */
export interface s06_rapport_antecedentFieldRefs {
    readonly id: Prisma.FieldRef<"s06_rapport_antecedent", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s06_rapport_antecedent", 'Int'>;
    readonly antecedent_id: Prisma.FieldRef<"s06_rapport_antecedent", 'Int'>;
}
/**
 * s06_rapport_antecedent findUnique
 */
export type s06_rapport_antecedentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_rapport_antecedent
     */
    select?: Prisma.s06_rapport_antecedentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_rapport_antecedent
     */
    omit?: Prisma.s06_rapport_antecedentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_rapport_antecedentInclude<ExtArgs> | null;
    /**
     * Filter, which s06_rapport_antecedent to fetch.
     */
    where: Prisma.s06_rapport_antecedentWhereUniqueInput;
};
/**
 * s06_rapport_antecedent findUniqueOrThrow
 */
export type s06_rapport_antecedentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_rapport_antecedent
     */
    select?: Prisma.s06_rapport_antecedentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_rapport_antecedent
     */
    omit?: Prisma.s06_rapport_antecedentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_rapport_antecedentInclude<ExtArgs> | null;
    /**
     * Filter, which s06_rapport_antecedent to fetch.
     */
    where: Prisma.s06_rapport_antecedentWhereUniqueInput;
};
/**
 * s06_rapport_antecedent findFirst
 */
export type s06_rapport_antecedentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_rapport_antecedent
     */
    select?: Prisma.s06_rapport_antecedentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_rapport_antecedent
     */
    omit?: Prisma.s06_rapport_antecedentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_rapport_antecedentInclude<ExtArgs> | null;
    /**
     * Filter, which s06_rapport_antecedent to fetch.
     */
    where?: Prisma.s06_rapport_antecedentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s06_rapport_antecedents to fetch.
     */
    orderBy?: Prisma.s06_rapport_antecedentOrderByWithRelationInput | Prisma.s06_rapport_antecedentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s06_rapport_antecedents.
     */
    cursor?: Prisma.s06_rapport_antecedentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s06_rapport_antecedents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s06_rapport_antecedents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s06_rapport_antecedents.
     */
    distinct?: Prisma.S06_rapport_antecedentScalarFieldEnum | Prisma.S06_rapport_antecedentScalarFieldEnum[];
};
/**
 * s06_rapport_antecedent findFirstOrThrow
 */
export type s06_rapport_antecedentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_rapport_antecedent
     */
    select?: Prisma.s06_rapport_antecedentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_rapport_antecedent
     */
    omit?: Prisma.s06_rapport_antecedentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_rapport_antecedentInclude<ExtArgs> | null;
    /**
     * Filter, which s06_rapport_antecedent to fetch.
     */
    where?: Prisma.s06_rapport_antecedentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s06_rapport_antecedents to fetch.
     */
    orderBy?: Prisma.s06_rapport_antecedentOrderByWithRelationInput | Prisma.s06_rapport_antecedentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s06_rapport_antecedents.
     */
    cursor?: Prisma.s06_rapport_antecedentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s06_rapport_antecedents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s06_rapport_antecedents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s06_rapport_antecedents.
     */
    distinct?: Prisma.S06_rapport_antecedentScalarFieldEnum | Prisma.S06_rapport_antecedentScalarFieldEnum[];
};
/**
 * s06_rapport_antecedent findMany
 */
export type s06_rapport_antecedentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_rapport_antecedent
     */
    select?: Prisma.s06_rapport_antecedentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_rapport_antecedent
     */
    omit?: Prisma.s06_rapport_antecedentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_rapport_antecedentInclude<ExtArgs> | null;
    /**
     * Filter, which s06_rapport_antecedents to fetch.
     */
    where?: Prisma.s06_rapport_antecedentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s06_rapport_antecedents to fetch.
     */
    orderBy?: Prisma.s06_rapport_antecedentOrderByWithRelationInput | Prisma.s06_rapport_antecedentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s06_rapport_antecedents.
     */
    cursor?: Prisma.s06_rapport_antecedentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s06_rapport_antecedents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s06_rapport_antecedents.
     */
    skip?: number;
    distinct?: Prisma.S06_rapport_antecedentScalarFieldEnum | Prisma.S06_rapport_antecedentScalarFieldEnum[];
};
/**
 * s06_rapport_antecedent create
 */
export type s06_rapport_antecedentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_rapport_antecedent
     */
    select?: Prisma.s06_rapport_antecedentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_rapport_antecedent
     */
    omit?: Prisma.s06_rapport_antecedentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_rapport_antecedentInclude<ExtArgs> | null;
    /**
     * The data needed to create a s06_rapport_antecedent.
     */
    data: Prisma.XOR<Prisma.s06_rapport_antecedentCreateInput, Prisma.s06_rapport_antecedentUncheckedCreateInput>;
};
/**
 * s06_rapport_antecedent createMany
 */
export type s06_rapport_antecedentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s06_rapport_antecedents.
     */
    data: Prisma.s06_rapport_antecedentCreateManyInput | Prisma.s06_rapport_antecedentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s06_rapport_antecedent createManyAndReturn
 */
export type s06_rapport_antecedentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_rapport_antecedent
     */
    select?: Prisma.s06_rapport_antecedentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_rapport_antecedent
     */
    omit?: Prisma.s06_rapport_antecedentOmit<ExtArgs> | null;
    /**
     * The data used to create many s06_rapport_antecedents.
     */
    data: Prisma.s06_rapport_antecedentCreateManyInput | Prisma.s06_rapport_antecedentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_rapport_antecedentIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s06_rapport_antecedent update
 */
export type s06_rapport_antecedentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_rapport_antecedent
     */
    select?: Prisma.s06_rapport_antecedentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_rapport_antecedent
     */
    omit?: Prisma.s06_rapport_antecedentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_rapport_antecedentInclude<ExtArgs> | null;
    /**
     * The data needed to update a s06_rapport_antecedent.
     */
    data: Prisma.XOR<Prisma.s06_rapport_antecedentUpdateInput, Prisma.s06_rapport_antecedentUncheckedUpdateInput>;
    /**
     * Choose, which s06_rapport_antecedent to update.
     */
    where: Prisma.s06_rapport_antecedentWhereUniqueInput;
};
/**
 * s06_rapport_antecedent updateMany
 */
export type s06_rapport_antecedentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s06_rapport_antecedents.
     */
    data: Prisma.XOR<Prisma.s06_rapport_antecedentUpdateManyMutationInput, Prisma.s06_rapport_antecedentUncheckedUpdateManyInput>;
    /**
     * Filter which s06_rapport_antecedents to update
     */
    where?: Prisma.s06_rapport_antecedentWhereInput;
    /**
     * Limit how many s06_rapport_antecedents to update.
     */
    limit?: number;
};
/**
 * s06_rapport_antecedent updateManyAndReturn
 */
export type s06_rapport_antecedentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_rapport_antecedent
     */
    select?: Prisma.s06_rapport_antecedentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_rapport_antecedent
     */
    omit?: Prisma.s06_rapport_antecedentOmit<ExtArgs> | null;
    /**
     * The data used to update s06_rapport_antecedents.
     */
    data: Prisma.XOR<Prisma.s06_rapport_antecedentUpdateManyMutationInput, Prisma.s06_rapport_antecedentUncheckedUpdateManyInput>;
    /**
     * Filter which s06_rapport_antecedents to update
     */
    where?: Prisma.s06_rapport_antecedentWhereInput;
    /**
     * Limit how many s06_rapport_antecedents to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_rapport_antecedentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s06_rapport_antecedent upsert
 */
export type s06_rapport_antecedentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_rapport_antecedent
     */
    select?: Prisma.s06_rapport_antecedentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_rapport_antecedent
     */
    omit?: Prisma.s06_rapport_antecedentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_rapport_antecedentInclude<ExtArgs> | null;
    /**
     * The filter to search for the s06_rapport_antecedent to update in case it exists.
     */
    where: Prisma.s06_rapport_antecedentWhereUniqueInput;
    /**
     * In case the s06_rapport_antecedent found by the `where` argument doesn't exist, create a new s06_rapport_antecedent with this data.
     */
    create: Prisma.XOR<Prisma.s06_rapport_antecedentCreateInput, Prisma.s06_rapport_antecedentUncheckedCreateInput>;
    /**
     * In case the s06_rapport_antecedent was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s06_rapport_antecedentUpdateInput, Prisma.s06_rapport_antecedentUncheckedUpdateInput>;
};
/**
 * s06_rapport_antecedent delete
 */
export type s06_rapport_antecedentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_rapport_antecedent
     */
    select?: Prisma.s06_rapport_antecedentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_rapport_antecedent
     */
    omit?: Prisma.s06_rapport_antecedentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_rapport_antecedentInclude<ExtArgs> | null;
    /**
     * Filter which s06_rapport_antecedent to delete.
     */
    where: Prisma.s06_rapport_antecedentWhereUniqueInput;
};
/**
 * s06_rapport_antecedent deleteMany
 */
export type s06_rapport_antecedentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s06_rapport_antecedents to delete
     */
    where?: Prisma.s06_rapport_antecedentWhereInput;
    /**
     * Limit how many s06_rapport_antecedents to delete.
     */
    limit?: number;
};
/**
 * s06_rapport_antecedent without action
 */
export type s06_rapport_antecedentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_rapport_antecedent
     */
    select?: Prisma.s06_rapport_antecedentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_rapport_antecedent
     */
    omit?: Prisma.s06_rapport_antecedentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_rapport_antecedentInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s06_rapport_antecedent.d.ts.map