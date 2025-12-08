import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s09_rapport_mecanisme_trauma
 *
 */
export type s09_rapport_mecanisme_traumaModel = runtime.Types.Result.DefaultSelection<Prisma.$s09_rapport_mecanisme_traumaPayload>;
export type AggregateS09_rapport_mecanisme_trauma = {
    _count: S09_rapport_mecanisme_traumaCountAggregateOutputType | null;
    _avg: S09_rapport_mecanisme_traumaAvgAggregateOutputType | null;
    _sum: S09_rapport_mecanisme_traumaSumAggregateOutputType | null;
    _min: S09_rapport_mecanisme_traumaMinAggregateOutputType | null;
    _max: S09_rapport_mecanisme_traumaMaxAggregateOutputType | null;
};
export type S09_rapport_mecanisme_traumaAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    mecanisme_trauma_id: number | null;
};
export type S09_rapport_mecanisme_traumaSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    mecanisme_trauma_id: number | null;
};
export type S09_rapport_mecanisme_traumaMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    mecanisme_trauma_id: number | null;
};
export type S09_rapport_mecanisme_traumaMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    mecanisme_trauma_id: number | null;
};
export type S09_rapport_mecanisme_traumaCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    mecanisme_trauma_id: number;
    _all: number;
};
export type S09_rapport_mecanisme_traumaAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
    mecanisme_trauma_id?: true;
};
export type S09_rapport_mecanisme_traumaSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
    mecanisme_trauma_id?: true;
};
export type S09_rapport_mecanisme_traumaMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    mecanisme_trauma_id?: true;
};
export type S09_rapport_mecanisme_traumaMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    mecanisme_trauma_id?: true;
};
export type S09_rapport_mecanisme_traumaCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    mecanisme_trauma_id?: true;
    _all?: true;
};
export type S09_rapport_mecanisme_traumaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s09_rapport_mecanisme_trauma to aggregate.
     */
    where?: Prisma.s09_rapport_mecanisme_traumaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s09_rapport_mecanisme_traumas to fetch.
     */
    orderBy?: Prisma.s09_rapport_mecanisme_traumaOrderByWithRelationInput | Prisma.s09_rapport_mecanisme_traumaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s09_rapport_mecanisme_traumas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s09_rapport_mecanisme_traumas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s09_rapport_mecanisme_traumas
    **/
    _count?: true | S09_rapport_mecanisme_traumaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S09_rapport_mecanisme_traumaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S09_rapport_mecanisme_traumaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S09_rapport_mecanisme_traumaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S09_rapport_mecanisme_traumaMaxAggregateInputType;
};
export type GetS09_rapport_mecanisme_traumaAggregateType<T extends S09_rapport_mecanisme_traumaAggregateArgs> = {
    [P in keyof T & keyof AggregateS09_rapport_mecanisme_trauma]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS09_rapport_mecanisme_trauma[P]> : Prisma.GetScalarType<T[P], AggregateS09_rapport_mecanisme_trauma[P]>;
};
export type s09_rapport_mecanisme_traumaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s09_rapport_mecanisme_traumaWhereInput;
    orderBy?: Prisma.s09_rapport_mecanisme_traumaOrderByWithAggregationInput | Prisma.s09_rapport_mecanisme_traumaOrderByWithAggregationInput[];
    by: Prisma.S09_rapport_mecanisme_traumaScalarFieldEnum[] | Prisma.S09_rapport_mecanisme_traumaScalarFieldEnum;
    having?: Prisma.s09_rapport_mecanisme_traumaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S09_rapport_mecanisme_traumaCountAggregateInputType | true;
    _avg?: S09_rapport_mecanisme_traumaAvgAggregateInputType;
    _sum?: S09_rapport_mecanisme_traumaSumAggregateInputType;
    _min?: S09_rapport_mecanisme_traumaMinAggregateInputType;
    _max?: S09_rapport_mecanisme_traumaMaxAggregateInputType;
};
export type S09_rapport_mecanisme_traumaGroupByOutputType = {
    id: number;
    rapport_id: number;
    mecanisme_trauma_id: number;
    _count: S09_rapport_mecanisme_traumaCountAggregateOutputType | null;
    _avg: S09_rapport_mecanisme_traumaAvgAggregateOutputType | null;
    _sum: S09_rapport_mecanisme_traumaSumAggregateOutputType | null;
    _min: S09_rapport_mecanisme_traumaMinAggregateOutputType | null;
    _max: S09_rapport_mecanisme_traumaMaxAggregateOutputType | null;
};
type GetS09_rapport_mecanisme_traumaGroupByPayload<T extends s09_rapport_mecanisme_traumaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S09_rapport_mecanisme_traumaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S09_rapport_mecanisme_traumaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S09_rapport_mecanisme_traumaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S09_rapport_mecanisme_traumaGroupByOutputType[P]>;
}>>;
export type s09_rapport_mecanisme_traumaWhereInput = {
    AND?: Prisma.s09_rapport_mecanisme_traumaWhereInput | Prisma.s09_rapport_mecanisme_traumaWhereInput[];
    OR?: Prisma.s09_rapport_mecanisme_traumaWhereInput[];
    NOT?: Prisma.s09_rapport_mecanisme_traumaWhereInput | Prisma.s09_rapport_mecanisme_traumaWhereInput[];
    id?: Prisma.IntFilter<"s09_rapport_mecanisme_trauma"> | number;
    rapport_id?: Prisma.IntFilter<"s09_rapport_mecanisme_trauma"> | number;
    mecanisme_trauma_id?: Prisma.IntFilter<"s09_rapport_mecanisme_trauma"> | number;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
    mecanisme?: Prisma.XOR<Prisma.S09_mecanisme_trauma_typeScalarRelationFilter, Prisma.s09_mecanisme_trauma_typeWhereInput>;
};
export type s09_rapport_mecanisme_traumaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    mecanisme_trauma_id?: Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
    mecanisme?: Prisma.s09_mecanisme_trauma_typeOrderByWithRelationInput;
};
export type s09_rapport_mecanisme_traumaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.s09_rapport_mecanisme_traumaWhereInput | Prisma.s09_rapport_mecanisme_traumaWhereInput[];
    OR?: Prisma.s09_rapport_mecanisme_traumaWhereInput[];
    NOT?: Prisma.s09_rapport_mecanisme_traumaWhereInput | Prisma.s09_rapport_mecanisme_traumaWhereInput[];
    rapport_id?: Prisma.IntFilter<"s09_rapport_mecanisme_trauma"> | number;
    mecanisme_trauma_id?: Prisma.IntFilter<"s09_rapport_mecanisme_trauma"> | number;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
    mecanisme?: Prisma.XOR<Prisma.S09_mecanisme_trauma_typeScalarRelationFilter, Prisma.s09_mecanisme_trauma_typeWhereInput>;
}, "id">;
export type s09_rapport_mecanisme_traumaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    mecanisme_trauma_id?: Prisma.SortOrder;
    _count?: Prisma.s09_rapport_mecanisme_traumaCountOrderByAggregateInput;
    _avg?: Prisma.s09_rapport_mecanisme_traumaAvgOrderByAggregateInput;
    _max?: Prisma.s09_rapport_mecanisme_traumaMaxOrderByAggregateInput;
    _min?: Prisma.s09_rapport_mecanisme_traumaMinOrderByAggregateInput;
    _sum?: Prisma.s09_rapport_mecanisme_traumaSumOrderByAggregateInput;
};
export type s09_rapport_mecanisme_traumaScalarWhereWithAggregatesInput = {
    AND?: Prisma.s09_rapport_mecanisme_traumaScalarWhereWithAggregatesInput | Prisma.s09_rapport_mecanisme_traumaScalarWhereWithAggregatesInput[];
    OR?: Prisma.s09_rapport_mecanisme_traumaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s09_rapport_mecanisme_traumaScalarWhereWithAggregatesInput | Prisma.s09_rapport_mecanisme_traumaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s09_rapport_mecanisme_trauma"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s09_rapport_mecanisme_trauma"> | number;
    mecanisme_trauma_id?: Prisma.IntWithAggregatesFilter<"s09_rapport_mecanisme_trauma"> | number;
};
export type s09_rapport_mecanisme_traumaCreateInput = {
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS09_rapport_mecanisme_traumaInput;
    mecanisme: Prisma.s09_mecanisme_trauma_typeCreateNestedOneWithoutRapportsInput;
};
export type s09_rapport_mecanisme_traumaUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    mecanisme_trauma_id: number;
};
export type s09_rapport_mecanisme_traumaUpdateInput = {
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS09_rapport_mecanisme_traumaNestedInput;
    mecanisme?: Prisma.s09_mecanisme_trauma_typeUpdateOneRequiredWithoutRapportsNestedInput;
};
export type s09_rapport_mecanisme_traumaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    mecanisme_trauma_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type s09_rapport_mecanisme_traumaCreateManyInput = {
    id?: number;
    rapport_id: number;
    mecanisme_trauma_id: number;
};
export type s09_rapport_mecanisme_traumaUpdateManyMutationInput = {};
export type s09_rapport_mecanisme_traumaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    mecanisme_trauma_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type S09_rapport_mecanisme_traumaListRelationFilter = {
    every?: Prisma.s09_rapport_mecanisme_traumaWhereInput;
    some?: Prisma.s09_rapport_mecanisme_traumaWhereInput;
    none?: Prisma.s09_rapport_mecanisme_traumaWhereInput;
};
export type s09_rapport_mecanisme_traumaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type s09_rapport_mecanisme_traumaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    mecanisme_trauma_id?: Prisma.SortOrder;
};
export type s09_rapport_mecanisme_traumaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    mecanisme_trauma_id?: Prisma.SortOrder;
};
export type s09_rapport_mecanisme_traumaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    mecanisme_trauma_id?: Prisma.SortOrder;
};
export type s09_rapport_mecanisme_traumaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    mecanisme_trauma_id?: Prisma.SortOrder;
};
export type s09_rapport_mecanisme_traumaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    mecanisme_trauma_id?: Prisma.SortOrder;
};
export type s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaCreateWithoutRapportInput, Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutRapportInput> | Prisma.s09_rapport_mecanisme_traumaCreateWithoutRapportInput[] | Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s09_rapport_mecanisme_traumaCreateOrConnectWithoutRapportInput | Prisma.s09_rapport_mecanisme_traumaCreateOrConnectWithoutRapportInput[];
    createMany?: Prisma.s09_rapport_mecanisme_traumaCreateManyRapportInputEnvelope;
    connect?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
};
export type s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaCreateWithoutRapportInput, Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutRapportInput> | Prisma.s09_rapport_mecanisme_traumaCreateWithoutRapportInput[] | Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s09_rapport_mecanisme_traumaCreateOrConnectWithoutRapportInput | Prisma.s09_rapport_mecanisme_traumaCreateOrConnectWithoutRapportInput[];
    createMany?: Prisma.s09_rapport_mecanisme_traumaCreateManyRapportInputEnvelope;
    connect?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
};
export type s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaCreateWithoutRapportInput, Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutRapportInput> | Prisma.s09_rapport_mecanisme_traumaCreateWithoutRapportInput[] | Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s09_rapport_mecanisme_traumaCreateOrConnectWithoutRapportInput | Prisma.s09_rapport_mecanisme_traumaCreateOrConnectWithoutRapportInput[];
    upsert?: Prisma.s09_rapport_mecanisme_traumaUpsertWithWhereUniqueWithoutRapportInput | Prisma.s09_rapport_mecanisme_traumaUpsertWithWhereUniqueWithoutRapportInput[];
    createMany?: Prisma.s09_rapport_mecanisme_traumaCreateManyRapportInputEnvelope;
    set?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
    disconnect?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
    delete?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
    connect?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
    update?: Prisma.s09_rapport_mecanisme_traumaUpdateWithWhereUniqueWithoutRapportInput | Prisma.s09_rapport_mecanisme_traumaUpdateWithWhereUniqueWithoutRapportInput[];
    updateMany?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithWhereWithoutRapportInput | Prisma.s09_rapport_mecanisme_traumaUpdateManyWithWhereWithoutRapportInput[];
    deleteMany?: Prisma.s09_rapport_mecanisme_traumaScalarWhereInput | Prisma.s09_rapport_mecanisme_traumaScalarWhereInput[];
};
export type s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaCreateWithoutRapportInput, Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutRapportInput> | Prisma.s09_rapport_mecanisme_traumaCreateWithoutRapportInput[] | Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s09_rapport_mecanisme_traumaCreateOrConnectWithoutRapportInput | Prisma.s09_rapport_mecanisme_traumaCreateOrConnectWithoutRapportInput[];
    upsert?: Prisma.s09_rapport_mecanisme_traumaUpsertWithWhereUniqueWithoutRapportInput | Prisma.s09_rapport_mecanisme_traumaUpsertWithWhereUniqueWithoutRapportInput[];
    createMany?: Prisma.s09_rapport_mecanisme_traumaCreateManyRapportInputEnvelope;
    set?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
    disconnect?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
    delete?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
    connect?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
    update?: Prisma.s09_rapport_mecanisme_traumaUpdateWithWhereUniqueWithoutRapportInput | Prisma.s09_rapport_mecanisme_traumaUpdateWithWhereUniqueWithoutRapportInput[];
    updateMany?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithWhereWithoutRapportInput | Prisma.s09_rapport_mecanisme_traumaUpdateManyWithWhereWithoutRapportInput[];
    deleteMany?: Prisma.s09_rapport_mecanisme_traumaScalarWhereInput | Prisma.s09_rapport_mecanisme_traumaScalarWhereInput[];
};
export type s09_rapport_mecanisme_traumaCreateNestedManyWithoutMecanismeInput = {
    create?: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaCreateWithoutMecanismeInput, Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutMecanismeInput> | Prisma.s09_rapport_mecanisme_traumaCreateWithoutMecanismeInput[] | Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutMecanismeInput[];
    connectOrCreate?: Prisma.s09_rapport_mecanisme_traumaCreateOrConnectWithoutMecanismeInput | Prisma.s09_rapport_mecanisme_traumaCreateOrConnectWithoutMecanismeInput[];
    createMany?: Prisma.s09_rapport_mecanisme_traumaCreateManyMecanismeInputEnvelope;
    connect?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
};
export type s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutMecanismeInput = {
    create?: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaCreateWithoutMecanismeInput, Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutMecanismeInput> | Prisma.s09_rapport_mecanisme_traumaCreateWithoutMecanismeInput[] | Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutMecanismeInput[];
    connectOrCreate?: Prisma.s09_rapport_mecanisme_traumaCreateOrConnectWithoutMecanismeInput | Prisma.s09_rapport_mecanisme_traumaCreateOrConnectWithoutMecanismeInput[];
    createMany?: Prisma.s09_rapport_mecanisme_traumaCreateManyMecanismeInputEnvelope;
    connect?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
};
export type s09_rapport_mecanisme_traumaUpdateManyWithoutMecanismeNestedInput = {
    create?: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaCreateWithoutMecanismeInput, Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutMecanismeInput> | Prisma.s09_rapport_mecanisme_traumaCreateWithoutMecanismeInput[] | Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutMecanismeInput[];
    connectOrCreate?: Prisma.s09_rapport_mecanisme_traumaCreateOrConnectWithoutMecanismeInput | Prisma.s09_rapport_mecanisme_traumaCreateOrConnectWithoutMecanismeInput[];
    upsert?: Prisma.s09_rapport_mecanisme_traumaUpsertWithWhereUniqueWithoutMecanismeInput | Prisma.s09_rapport_mecanisme_traumaUpsertWithWhereUniqueWithoutMecanismeInput[];
    createMany?: Prisma.s09_rapport_mecanisme_traumaCreateManyMecanismeInputEnvelope;
    set?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
    disconnect?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
    delete?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
    connect?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
    update?: Prisma.s09_rapport_mecanisme_traumaUpdateWithWhereUniqueWithoutMecanismeInput | Prisma.s09_rapport_mecanisme_traumaUpdateWithWhereUniqueWithoutMecanismeInput[];
    updateMany?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithWhereWithoutMecanismeInput | Prisma.s09_rapport_mecanisme_traumaUpdateManyWithWhereWithoutMecanismeInput[];
    deleteMany?: Prisma.s09_rapport_mecanisme_traumaScalarWhereInput | Prisma.s09_rapport_mecanisme_traumaScalarWhereInput[];
};
export type s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutMecanismeNestedInput = {
    create?: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaCreateWithoutMecanismeInput, Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutMecanismeInput> | Prisma.s09_rapport_mecanisme_traumaCreateWithoutMecanismeInput[] | Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutMecanismeInput[];
    connectOrCreate?: Prisma.s09_rapport_mecanisme_traumaCreateOrConnectWithoutMecanismeInput | Prisma.s09_rapport_mecanisme_traumaCreateOrConnectWithoutMecanismeInput[];
    upsert?: Prisma.s09_rapport_mecanisme_traumaUpsertWithWhereUniqueWithoutMecanismeInput | Prisma.s09_rapport_mecanisme_traumaUpsertWithWhereUniqueWithoutMecanismeInput[];
    createMany?: Prisma.s09_rapport_mecanisme_traumaCreateManyMecanismeInputEnvelope;
    set?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
    disconnect?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
    delete?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
    connect?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput | Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput[];
    update?: Prisma.s09_rapport_mecanisme_traumaUpdateWithWhereUniqueWithoutMecanismeInput | Prisma.s09_rapport_mecanisme_traumaUpdateWithWhereUniqueWithoutMecanismeInput[];
    updateMany?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithWhereWithoutMecanismeInput | Prisma.s09_rapport_mecanisme_traumaUpdateManyWithWhereWithoutMecanismeInput[];
    deleteMany?: Prisma.s09_rapport_mecanisme_traumaScalarWhereInput | Prisma.s09_rapport_mecanisme_traumaScalarWhereInput[];
};
export type s09_rapport_mecanisme_traumaCreateWithoutRapportInput = {
    mecanisme: Prisma.s09_mecanisme_trauma_typeCreateNestedOneWithoutRapportsInput;
};
export type s09_rapport_mecanisme_traumaUncheckedCreateWithoutRapportInput = {
    id?: number;
    mecanisme_trauma_id: number;
};
export type s09_rapport_mecanisme_traumaCreateOrConnectWithoutRapportInput = {
    where: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput;
    create: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaCreateWithoutRapportInput, Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutRapportInput>;
};
export type s09_rapport_mecanisme_traumaCreateManyRapportInputEnvelope = {
    data: Prisma.s09_rapport_mecanisme_traumaCreateManyRapportInput | Prisma.s09_rapport_mecanisme_traumaCreateManyRapportInput[];
    skipDuplicates?: boolean;
};
export type s09_rapport_mecanisme_traumaUpsertWithWhereUniqueWithoutRapportInput = {
    where: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput;
    update: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaUpdateWithoutRapportInput, Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaCreateWithoutRapportInput, Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutRapportInput>;
};
export type s09_rapport_mecanisme_traumaUpdateWithWhereUniqueWithoutRapportInput = {
    where: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput;
    data: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaUpdateWithoutRapportInput, Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateWithoutRapportInput>;
};
export type s09_rapport_mecanisme_traumaUpdateManyWithWhereWithoutRapportInput = {
    where: Prisma.s09_rapport_mecanisme_traumaScalarWhereInput;
    data: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaUpdateManyMutationInput, Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportInput>;
};
export type s09_rapport_mecanisme_traumaScalarWhereInput = {
    AND?: Prisma.s09_rapport_mecanisme_traumaScalarWhereInput | Prisma.s09_rapport_mecanisme_traumaScalarWhereInput[];
    OR?: Prisma.s09_rapport_mecanisme_traumaScalarWhereInput[];
    NOT?: Prisma.s09_rapport_mecanisme_traumaScalarWhereInput | Prisma.s09_rapport_mecanisme_traumaScalarWhereInput[];
    id?: Prisma.IntFilter<"s09_rapport_mecanisme_trauma"> | number;
    rapport_id?: Prisma.IntFilter<"s09_rapport_mecanisme_trauma"> | number;
    mecanisme_trauma_id?: Prisma.IntFilter<"s09_rapport_mecanisme_trauma"> | number;
};
export type s09_rapport_mecanisme_traumaCreateWithoutMecanismeInput = {
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS09_rapport_mecanisme_traumaInput;
};
export type s09_rapport_mecanisme_traumaUncheckedCreateWithoutMecanismeInput = {
    id?: number;
    rapport_id: number;
};
export type s09_rapport_mecanisme_traumaCreateOrConnectWithoutMecanismeInput = {
    where: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput;
    create: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaCreateWithoutMecanismeInput, Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutMecanismeInput>;
};
export type s09_rapport_mecanisme_traumaCreateManyMecanismeInputEnvelope = {
    data: Prisma.s09_rapport_mecanisme_traumaCreateManyMecanismeInput | Prisma.s09_rapport_mecanisme_traumaCreateManyMecanismeInput[];
    skipDuplicates?: boolean;
};
export type s09_rapport_mecanisme_traumaUpsertWithWhereUniqueWithoutMecanismeInput = {
    where: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput;
    update: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaUpdateWithoutMecanismeInput, Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateWithoutMecanismeInput>;
    create: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaCreateWithoutMecanismeInput, Prisma.s09_rapport_mecanisme_traumaUncheckedCreateWithoutMecanismeInput>;
};
export type s09_rapport_mecanisme_traumaUpdateWithWhereUniqueWithoutMecanismeInput = {
    where: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput;
    data: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaUpdateWithoutMecanismeInput, Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateWithoutMecanismeInput>;
};
export type s09_rapport_mecanisme_traumaUpdateManyWithWhereWithoutMecanismeInput = {
    where: Prisma.s09_rapport_mecanisme_traumaScalarWhereInput;
    data: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaUpdateManyMutationInput, Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutMecanismeInput>;
};
export type s09_rapport_mecanisme_traumaCreateManyRapportInput = {
    id?: number;
    mecanisme_trauma_id: number;
};
export type s09_rapport_mecanisme_traumaUpdateWithoutRapportInput = {
    mecanisme?: Prisma.s09_mecanisme_trauma_typeUpdateOneRequiredWithoutRapportsNestedInput;
};
export type s09_rapport_mecanisme_traumaUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mecanisme_trauma_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mecanisme_trauma_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type s09_rapport_mecanisme_traumaCreateManyMecanismeInput = {
    id?: number;
    rapport_id: number;
};
export type s09_rapport_mecanisme_traumaUpdateWithoutMecanismeInput = {
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS09_rapport_mecanisme_traumaNestedInput;
};
export type s09_rapport_mecanisme_traumaUncheckedUpdateWithoutMecanismeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutMecanismeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type s09_rapport_mecanisme_traumaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    mecanisme_trauma_id?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    mecanisme?: boolean | Prisma.s09_mecanisme_trauma_typeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s09_rapport_mecanisme_trauma"]>;
export type s09_rapport_mecanisme_traumaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    mecanisme_trauma_id?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    mecanisme?: boolean | Prisma.s09_mecanisme_trauma_typeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s09_rapport_mecanisme_trauma"]>;
export type s09_rapport_mecanisme_traumaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    mecanisme_trauma_id?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    mecanisme?: boolean | Prisma.s09_mecanisme_trauma_typeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s09_rapport_mecanisme_trauma"]>;
export type s09_rapport_mecanisme_traumaSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    mecanisme_trauma_id?: boolean;
};
export type s09_rapport_mecanisme_traumaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "mecanisme_trauma_id", ExtArgs["result"]["s09_rapport_mecanisme_trauma"]>;
export type s09_rapport_mecanisme_traumaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    mecanisme?: boolean | Prisma.s09_mecanisme_trauma_typeDefaultArgs<ExtArgs>;
};
export type s09_rapport_mecanisme_traumaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    mecanisme?: boolean | Prisma.s09_mecanisme_trauma_typeDefaultArgs<ExtArgs>;
};
export type s09_rapport_mecanisme_traumaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    mecanisme?: boolean | Prisma.s09_mecanisme_trauma_typeDefaultArgs<ExtArgs>;
};
export type $s09_rapport_mecanisme_traumaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s09_rapport_mecanisme_trauma";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
        mecanisme: Prisma.$s09_mecanisme_trauma_typePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        mecanisme_trauma_id: number;
    }, ExtArgs["result"]["s09_rapport_mecanisme_trauma"]>;
    composites: {};
};
export type s09_rapport_mecanisme_traumaGetPayload<S extends boolean | null | undefined | s09_rapport_mecanisme_traumaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s09_rapport_mecanisme_traumaPayload, S>;
export type s09_rapport_mecanisme_traumaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s09_rapport_mecanisme_traumaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S09_rapport_mecanisme_traumaCountAggregateInputType | true;
};
export interface s09_rapport_mecanisme_traumaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s09_rapport_mecanisme_trauma'];
        meta: {
            name: 's09_rapport_mecanisme_trauma';
        };
    };
    /**
     * Find zero or one S09_rapport_mecanisme_trauma that matches the filter.
     * @param {s09_rapport_mecanisme_traumaFindUniqueArgs} args - Arguments to find a S09_rapport_mecanisme_trauma
     * @example
     * // Get one S09_rapport_mecanisme_trauma
     * const s09_rapport_mecanisme_trauma = await prisma.s09_rapport_mecanisme_trauma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s09_rapport_mecanisme_traumaFindUniqueArgs>(args: Prisma.SelectSubset<T, s09_rapport_mecanisme_traumaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s09_rapport_mecanisme_traumaClient<runtime.Types.Result.GetResult<Prisma.$s09_rapport_mecanisme_traumaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S09_rapport_mecanisme_trauma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s09_rapport_mecanisme_traumaFindUniqueOrThrowArgs} args - Arguments to find a S09_rapport_mecanisme_trauma
     * @example
     * // Get one S09_rapport_mecanisme_trauma
     * const s09_rapport_mecanisme_trauma = await prisma.s09_rapport_mecanisme_trauma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s09_rapport_mecanisme_traumaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s09_rapport_mecanisme_traumaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s09_rapport_mecanisme_traumaClient<runtime.Types.Result.GetResult<Prisma.$s09_rapport_mecanisme_traumaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S09_rapport_mecanisme_trauma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s09_rapport_mecanisme_traumaFindFirstArgs} args - Arguments to find a S09_rapport_mecanisme_trauma
     * @example
     * // Get one S09_rapport_mecanisme_trauma
     * const s09_rapport_mecanisme_trauma = await prisma.s09_rapport_mecanisme_trauma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s09_rapport_mecanisme_traumaFindFirstArgs>(args?: Prisma.SelectSubset<T, s09_rapport_mecanisme_traumaFindFirstArgs<ExtArgs>>): Prisma.Prisma__s09_rapport_mecanisme_traumaClient<runtime.Types.Result.GetResult<Prisma.$s09_rapport_mecanisme_traumaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S09_rapport_mecanisme_trauma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s09_rapport_mecanisme_traumaFindFirstOrThrowArgs} args - Arguments to find a S09_rapport_mecanisme_trauma
     * @example
     * // Get one S09_rapport_mecanisme_trauma
     * const s09_rapport_mecanisme_trauma = await prisma.s09_rapport_mecanisme_trauma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s09_rapport_mecanisme_traumaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s09_rapport_mecanisme_traumaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s09_rapport_mecanisme_traumaClient<runtime.Types.Result.GetResult<Prisma.$s09_rapport_mecanisme_traumaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S09_rapport_mecanisme_traumas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s09_rapport_mecanisme_traumaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S09_rapport_mecanisme_traumas
     * const s09_rapport_mecanisme_traumas = await prisma.s09_rapport_mecanisme_trauma.findMany()
     *
     * // Get first 10 S09_rapport_mecanisme_traumas
     * const s09_rapport_mecanisme_traumas = await prisma.s09_rapport_mecanisme_trauma.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s09_rapport_mecanisme_traumaWithIdOnly = await prisma.s09_rapport_mecanisme_trauma.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s09_rapport_mecanisme_traumaFindManyArgs>(args?: Prisma.SelectSubset<T, s09_rapport_mecanisme_traumaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s09_rapport_mecanisme_traumaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S09_rapport_mecanisme_trauma.
     * @param {s09_rapport_mecanisme_traumaCreateArgs} args - Arguments to create a S09_rapport_mecanisme_trauma.
     * @example
     * // Create one S09_rapport_mecanisme_trauma
     * const S09_rapport_mecanisme_trauma = await prisma.s09_rapport_mecanisme_trauma.create({
     *   data: {
     *     // ... data to create a S09_rapport_mecanisme_trauma
     *   }
     * })
     *
     */
    create<T extends s09_rapport_mecanisme_traumaCreateArgs>(args: Prisma.SelectSubset<T, s09_rapport_mecanisme_traumaCreateArgs<ExtArgs>>): Prisma.Prisma__s09_rapport_mecanisme_traumaClient<runtime.Types.Result.GetResult<Prisma.$s09_rapport_mecanisme_traumaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S09_rapport_mecanisme_traumas.
     * @param {s09_rapport_mecanisme_traumaCreateManyArgs} args - Arguments to create many S09_rapport_mecanisme_traumas.
     * @example
     * // Create many S09_rapport_mecanisme_traumas
     * const s09_rapport_mecanisme_trauma = await prisma.s09_rapport_mecanisme_trauma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s09_rapport_mecanisme_traumaCreateManyArgs>(args?: Prisma.SelectSubset<T, s09_rapport_mecanisme_traumaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S09_rapport_mecanisme_traumas and returns the data saved in the database.
     * @param {s09_rapport_mecanisme_traumaCreateManyAndReturnArgs} args - Arguments to create many S09_rapport_mecanisme_traumas.
     * @example
     * // Create many S09_rapport_mecanisme_traumas
     * const s09_rapport_mecanisme_trauma = await prisma.s09_rapport_mecanisme_trauma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S09_rapport_mecanisme_traumas and only return the `id`
     * const s09_rapport_mecanisme_traumaWithIdOnly = await prisma.s09_rapport_mecanisme_trauma.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s09_rapport_mecanisme_traumaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s09_rapport_mecanisme_traumaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s09_rapport_mecanisme_traumaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S09_rapport_mecanisme_trauma.
     * @param {s09_rapport_mecanisme_traumaDeleteArgs} args - Arguments to delete one S09_rapport_mecanisme_trauma.
     * @example
     * // Delete one S09_rapport_mecanisme_trauma
     * const S09_rapport_mecanisme_trauma = await prisma.s09_rapport_mecanisme_trauma.delete({
     *   where: {
     *     // ... filter to delete one S09_rapport_mecanisme_trauma
     *   }
     * })
     *
     */
    delete<T extends s09_rapport_mecanisme_traumaDeleteArgs>(args: Prisma.SelectSubset<T, s09_rapport_mecanisme_traumaDeleteArgs<ExtArgs>>): Prisma.Prisma__s09_rapport_mecanisme_traumaClient<runtime.Types.Result.GetResult<Prisma.$s09_rapport_mecanisme_traumaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S09_rapport_mecanisme_trauma.
     * @param {s09_rapport_mecanisme_traumaUpdateArgs} args - Arguments to update one S09_rapport_mecanisme_trauma.
     * @example
     * // Update one S09_rapport_mecanisme_trauma
     * const s09_rapport_mecanisme_trauma = await prisma.s09_rapport_mecanisme_trauma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s09_rapport_mecanisme_traumaUpdateArgs>(args: Prisma.SelectSubset<T, s09_rapport_mecanisme_traumaUpdateArgs<ExtArgs>>): Prisma.Prisma__s09_rapport_mecanisme_traumaClient<runtime.Types.Result.GetResult<Prisma.$s09_rapport_mecanisme_traumaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S09_rapport_mecanisme_traumas.
     * @param {s09_rapport_mecanisme_traumaDeleteManyArgs} args - Arguments to filter S09_rapport_mecanisme_traumas to delete.
     * @example
     * // Delete a few S09_rapport_mecanisme_traumas
     * const { count } = await prisma.s09_rapport_mecanisme_trauma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s09_rapport_mecanisme_traumaDeleteManyArgs>(args?: Prisma.SelectSubset<T, s09_rapport_mecanisme_traumaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S09_rapport_mecanisme_traumas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s09_rapport_mecanisme_traumaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S09_rapport_mecanisme_traumas
     * const s09_rapport_mecanisme_trauma = await prisma.s09_rapport_mecanisme_trauma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s09_rapport_mecanisme_traumaUpdateManyArgs>(args: Prisma.SelectSubset<T, s09_rapport_mecanisme_traumaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S09_rapport_mecanisme_traumas and returns the data updated in the database.
     * @param {s09_rapport_mecanisme_traumaUpdateManyAndReturnArgs} args - Arguments to update many S09_rapport_mecanisme_traumas.
     * @example
     * // Update many S09_rapport_mecanisme_traumas
     * const s09_rapport_mecanisme_trauma = await prisma.s09_rapport_mecanisme_trauma.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S09_rapport_mecanisme_traumas and only return the `id`
     * const s09_rapport_mecanisme_traumaWithIdOnly = await prisma.s09_rapport_mecanisme_trauma.updateManyAndReturn({
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
    updateManyAndReturn<T extends s09_rapport_mecanisme_traumaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s09_rapport_mecanisme_traumaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s09_rapport_mecanisme_traumaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S09_rapport_mecanisme_trauma.
     * @param {s09_rapport_mecanisme_traumaUpsertArgs} args - Arguments to update or create a S09_rapport_mecanisme_trauma.
     * @example
     * // Update or create a S09_rapport_mecanisme_trauma
     * const s09_rapport_mecanisme_trauma = await prisma.s09_rapport_mecanisme_trauma.upsert({
     *   create: {
     *     // ... data to create a S09_rapport_mecanisme_trauma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S09_rapport_mecanisme_trauma we want to update
     *   }
     * })
     */
    upsert<T extends s09_rapport_mecanisme_traumaUpsertArgs>(args: Prisma.SelectSubset<T, s09_rapport_mecanisme_traumaUpsertArgs<ExtArgs>>): Prisma.Prisma__s09_rapport_mecanisme_traumaClient<runtime.Types.Result.GetResult<Prisma.$s09_rapport_mecanisme_traumaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S09_rapport_mecanisme_traumas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s09_rapport_mecanisme_traumaCountArgs} args - Arguments to filter S09_rapport_mecanisme_traumas to count.
     * @example
     * // Count the number of S09_rapport_mecanisme_traumas
     * const count = await prisma.s09_rapport_mecanisme_trauma.count({
     *   where: {
     *     // ... the filter for the S09_rapport_mecanisme_traumas we want to count
     *   }
     * })
    **/
    count<T extends s09_rapport_mecanisme_traumaCountArgs>(args?: Prisma.Subset<T, s09_rapport_mecanisme_traumaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S09_rapport_mecanisme_traumaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S09_rapport_mecanisme_trauma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S09_rapport_mecanisme_traumaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S09_rapport_mecanisme_traumaAggregateArgs>(args: Prisma.Subset<T, S09_rapport_mecanisme_traumaAggregateArgs>): Prisma.PrismaPromise<GetS09_rapport_mecanisme_traumaAggregateType<T>>;
    /**
     * Group by S09_rapport_mecanisme_trauma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s09_rapport_mecanisme_traumaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s09_rapport_mecanisme_traumaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s09_rapport_mecanisme_traumaGroupByArgs['orderBy'];
    } : {
        orderBy?: s09_rapport_mecanisme_traumaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s09_rapport_mecanisme_traumaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS09_rapport_mecanisme_traumaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s09_rapport_mecanisme_trauma model
     */
    readonly fields: s09_rapport_mecanisme_traumaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s09_rapport_mecanisme_trauma.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s09_rapport_mecanisme_traumaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rapport<T extends Prisma.r_rapport_prDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_prDefaultArgs<ExtArgs>>): Prisma.Prisma__r_rapport_prClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    mecanisme<T extends Prisma.s09_mecanisme_trauma_typeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.s09_mecanisme_trauma_typeDefaultArgs<ExtArgs>>): Prisma.Prisma__s09_mecanisme_trauma_typeClient<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the s09_rapport_mecanisme_trauma model
 */
export interface s09_rapport_mecanisme_traumaFieldRefs {
    readonly id: Prisma.FieldRef<"s09_rapport_mecanisme_trauma", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s09_rapport_mecanisme_trauma", 'Int'>;
    readonly mecanisme_trauma_id: Prisma.FieldRef<"s09_rapport_mecanisme_trauma", 'Int'>;
}
/**
 * s09_rapport_mecanisme_trauma findUnique
 */
export type s09_rapport_mecanisme_traumaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_rapport_mecanisme_trauma
     */
    select?: Prisma.s09_rapport_mecanisme_traumaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_rapport_mecanisme_trauma
     */
    omit?: Prisma.s09_rapport_mecanisme_traumaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_rapport_mecanisme_traumaInclude<ExtArgs> | null;
    /**
     * Filter, which s09_rapport_mecanisme_trauma to fetch.
     */
    where: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput;
};
/**
 * s09_rapport_mecanisme_trauma findUniqueOrThrow
 */
export type s09_rapport_mecanisme_traumaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_rapport_mecanisme_trauma
     */
    select?: Prisma.s09_rapport_mecanisme_traumaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_rapport_mecanisme_trauma
     */
    omit?: Prisma.s09_rapport_mecanisme_traumaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_rapport_mecanisme_traumaInclude<ExtArgs> | null;
    /**
     * Filter, which s09_rapport_mecanisme_trauma to fetch.
     */
    where: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput;
};
/**
 * s09_rapport_mecanisme_trauma findFirst
 */
export type s09_rapport_mecanisme_traumaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_rapport_mecanisme_trauma
     */
    select?: Prisma.s09_rapport_mecanisme_traumaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_rapport_mecanisme_trauma
     */
    omit?: Prisma.s09_rapport_mecanisme_traumaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_rapport_mecanisme_traumaInclude<ExtArgs> | null;
    /**
     * Filter, which s09_rapport_mecanisme_trauma to fetch.
     */
    where?: Prisma.s09_rapport_mecanisme_traumaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s09_rapport_mecanisme_traumas to fetch.
     */
    orderBy?: Prisma.s09_rapport_mecanisme_traumaOrderByWithRelationInput | Prisma.s09_rapport_mecanisme_traumaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s09_rapport_mecanisme_traumas.
     */
    cursor?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s09_rapport_mecanisme_traumas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s09_rapport_mecanisme_traumas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s09_rapport_mecanisme_traumas.
     */
    distinct?: Prisma.S09_rapport_mecanisme_traumaScalarFieldEnum | Prisma.S09_rapport_mecanisme_traumaScalarFieldEnum[];
};
/**
 * s09_rapport_mecanisme_trauma findFirstOrThrow
 */
export type s09_rapport_mecanisme_traumaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_rapport_mecanisme_trauma
     */
    select?: Prisma.s09_rapport_mecanisme_traumaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_rapport_mecanisme_trauma
     */
    omit?: Prisma.s09_rapport_mecanisme_traumaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_rapport_mecanisme_traumaInclude<ExtArgs> | null;
    /**
     * Filter, which s09_rapport_mecanisme_trauma to fetch.
     */
    where?: Prisma.s09_rapport_mecanisme_traumaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s09_rapport_mecanisme_traumas to fetch.
     */
    orderBy?: Prisma.s09_rapport_mecanisme_traumaOrderByWithRelationInput | Prisma.s09_rapport_mecanisme_traumaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s09_rapport_mecanisme_traumas.
     */
    cursor?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s09_rapport_mecanisme_traumas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s09_rapport_mecanisme_traumas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s09_rapport_mecanisme_traumas.
     */
    distinct?: Prisma.S09_rapport_mecanisme_traumaScalarFieldEnum | Prisma.S09_rapport_mecanisme_traumaScalarFieldEnum[];
};
/**
 * s09_rapport_mecanisme_trauma findMany
 */
export type s09_rapport_mecanisme_traumaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_rapport_mecanisme_trauma
     */
    select?: Prisma.s09_rapport_mecanisme_traumaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_rapport_mecanisme_trauma
     */
    omit?: Prisma.s09_rapport_mecanisme_traumaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_rapport_mecanisme_traumaInclude<ExtArgs> | null;
    /**
     * Filter, which s09_rapport_mecanisme_traumas to fetch.
     */
    where?: Prisma.s09_rapport_mecanisme_traumaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s09_rapport_mecanisme_traumas to fetch.
     */
    orderBy?: Prisma.s09_rapport_mecanisme_traumaOrderByWithRelationInput | Prisma.s09_rapport_mecanisme_traumaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s09_rapport_mecanisme_traumas.
     */
    cursor?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s09_rapport_mecanisme_traumas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s09_rapport_mecanisme_traumas.
     */
    skip?: number;
    distinct?: Prisma.S09_rapport_mecanisme_traumaScalarFieldEnum | Prisma.S09_rapport_mecanisme_traumaScalarFieldEnum[];
};
/**
 * s09_rapport_mecanisme_trauma create
 */
export type s09_rapport_mecanisme_traumaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_rapport_mecanisme_trauma
     */
    select?: Prisma.s09_rapport_mecanisme_traumaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_rapport_mecanisme_trauma
     */
    omit?: Prisma.s09_rapport_mecanisme_traumaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_rapport_mecanisme_traumaInclude<ExtArgs> | null;
    /**
     * The data needed to create a s09_rapport_mecanisme_trauma.
     */
    data: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaCreateInput, Prisma.s09_rapport_mecanisme_traumaUncheckedCreateInput>;
};
/**
 * s09_rapport_mecanisme_trauma createMany
 */
export type s09_rapport_mecanisme_traumaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s09_rapport_mecanisme_traumas.
     */
    data: Prisma.s09_rapport_mecanisme_traumaCreateManyInput | Prisma.s09_rapport_mecanisme_traumaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s09_rapport_mecanisme_trauma createManyAndReturn
 */
export type s09_rapport_mecanisme_traumaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_rapport_mecanisme_trauma
     */
    select?: Prisma.s09_rapport_mecanisme_traumaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_rapport_mecanisme_trauma
     */
    omit?: Prisma.s09_rapport_mecanisme_traumaOmit<ExtArgs> | null;
    /**
     * The data used to create many s09_rapport_mecanisme_traumas.
     */
    data: Prisma.s09_rapport_mecanisme_traumaCreateManyInput | Prisma.s09_rapport_mecanisme_traumaCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_rapport_mecanisme_traumaIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s09_rapport_mecanisme_trauma update
 */
export type s09_rapport_mecanisme_traumaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_rapport_mecanisme_trauma
     */
    select?: Prisma.s09_rapport_mecanisme_traumaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_rapport_mecanisme_trauma
     */
    omit?: Prisma.s09_rapport_mecanisme_traumaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_rapport_mecanisme_traumaInclude<ExtArgs> | null;
    /**
     * The data needed to update a s09_rapport_mecanisme_trauma.
     */
    data: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaUpdateInput, Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateInput>;
    /**
     * Choose, which s09_rapport_mecanisme_trauma to update.
     */
    where: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput;
};
/**
 * s09_rapport_mecanisme_trauma updateMany
 */
export type s09_rapport_mecanisme_traumaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s09_rapport_mecanisme_traumas.
     */
    data: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaUpdateManyMutationInput, Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyInput>;
    /**
     * Filter which s09_rapport_mecanisme_traumas to update
     */
    where?: Prisma.s09_rapport_mecanisme_traumaWhereInput;
    /**
     * Limit how many s09_rapport_mecanisme_traumas to update.
     */
    limit?: number;
};
/**
 * s09_rapport_mecanisme_trauma updateManyAndReturn
 */
export type s09_rapport_mecanisme_traumaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_rapport_mecanisme_trauma
     */
    select?: Prisma.s09_rapport_mecanisme_traumaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_rapport_mecanisme_trauma
     */
    omit?: Prisma.s09_rapport_mecanisme_traumaOmit<ExtArgs> | null;
    /**
     * The data used to update s09_rapport_mecanisme_traumas.
     */
    data: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaUpdateManyMutationInput, Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyInput>;
    /**
     * Filter which s09_rapport_mecanisme_traumas to update
     */
    where?: Prisma.s09_rapport_mecanisme_traumaWhereInput;
    /**
     * Limit how many s09_rapport_mecanisme_traumas to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_rapport_mecanisme_traumaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s09_rapport_mecanisme_trauma upsert
 */
export type s09_rapport_mecanisme_traumaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_rapport_mecanisme_trauma
     */
    select?: Prisma.s09_rapport_mecanisme_traumaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_rapport_mecanisme_trauma
     */
    omit?: Prisma.s09_rapport_mecanisme_traumaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_rapport_mecanisme_traumaInclude<ExtArgs> | null;
    /**
     * The filter to search for the s09_rapport_mecanisme_trauma to update in case it exists.
     */
    where: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput;
    /**
     * In case the s09_rapport_mecanisme_trauma found by the `where` argument doesn't exist, create a new s09_rapport_mecanisme_trauma with this data.
     */
    create: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaCreateInput, Prisma.s09_rapport_mecanisme_traumaUncheckedCreateInput>;
    /**
     * In case the s09_rapport_mecanisme_trauma was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s09_rapport_mecanisme_traumaUpdateInput, Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateInput>;
};
/**
 * s09_rapport_mecanisme_trauma delete
 */
export type s09_rapport_mecanisme_traumaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_rapport_mecanisme_trauma
     */
    select?: Prisma.s09_rapport_mecanisme_traumaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_rapport_mecanisme_trauma
     */
    omit?: Prisma.s09_rapport_mecanisme_traumaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_rapport_mecanisme_traumaInclude<ExtArgs> | null;
    /**
     * Filter which s09_rapport_mecanisme_trauma to delete.
     */
    where: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput;
};
/**
 * s09_rapport_mecanisme_trauma deleteMany
 */
export type s09_rapport_mecanisme_traumaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s09_rapport_mecanisme_traumas to delete
     */
    where?: Prisma.s09_rapport_mecanisme_traumaWhereInput;
    /**
     * Limit how many s09_rapport_mecanisme_traumas to delete.
     */
    limit?: number;
};
/**
 * s09_rapport_mecanisme_trauma without action
 */
export type s09_rapport_mecanisme_traumaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_rapport_mecanisme_trauma
     */
    select?: Prisma.s09_rapport_mecanisme_traumaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_rapport_mecanisme_trauma
     */
    omit?: Prisma.s09_rapport_mecanisme_traumaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_rapport_mecanisme_traumaInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s09_rapport_mecanisme_trauma.d.ts.map