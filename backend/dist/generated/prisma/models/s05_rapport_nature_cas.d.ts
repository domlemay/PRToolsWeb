import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s05_rapport_nature_cas
 *
 */
export type s05_rapport_nature_casModel = runtime.Types.Result.DefaultSelection<Prisma.$s05_rapport_nature_casPayload>;
export type AggregateS05_rapport_nature_cas = {
    _count: S05_rapport_nature_casCountAggregateOutputType | null;
    _avg: S05_rapport_nature_casAvgAggregateOutputType | null;
    _sum: S05_rapport_nature_casSumAggregateOutputType | null;
    _min: S05_rapport_nature_casMinAggregateOutputType | null;
    _max: S05_rapport_nature_casMaxAggregateOutputType | null;
};
export type S05_rapport_nature_casAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    nature_cas_id: number | null;
};
export type S05_rapport_nature_casSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    nature_cas_id: number | null;
};
export type S05_rapport_nature_casMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    nature_cas_id: number | null;
};
export type S05_rapport_nature_casMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    nature_cas_id: number | null;
};
export type S05_rapport_nature_casCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    nature_cas_id: number;
    _all: number;
};
export type S05_rapport_nature_casAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
    nature_cas_id?: true;
};
export type S05_rapport_nature_casSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
    nature_cas_id?: true;
};
export type S05_rapport_nature_casMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    nature_cas_id?: true;
};
export type S05_rapport_nature_casMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    nature_cas_id?: true;
};
export type S05_rapport_nature_casCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    nature_cas_id?: true;
    _all?: true;
};
export type S05_rapport_nature_casAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s05_rapport_nature_cas to aggregate.
     */
    where?: Prisma.s05_rapport_nature_casWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s05_rapport_nature_cas to fetch.
     */
    orderBy?: Prisma.s05_rapport_nature_casOrderByWithRelationInput | Prisma.s05_rapport_nature_casOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s05_rapport_nature_casWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s05_rapport_nature_cas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s05_rapport_nature_cas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s05_rapport_nature_cas
    **/
    _count?: true | S05_rapport_nature_casCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S05_rapport_nature_casAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S05_rapport_nature_casSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S05_rapport_nature_casMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S05_rapport_nature_casMaxAggregateInputType;
};
export type GetS05_rapport_nature_casAggregateType<T extends S05_rapport_nature_casAggregateArgs> = {
    [P in keyof T & keyof AggregateS05_rapport_nature_cas]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS05_rapport_nature_cas[P]> : Prisma.GetScalarType<T[P], AggregateS05_rapport_nature_cas[P]>;
};
export type s05_rapport_nature_casGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s05_rapport_nature_casWhereInput;
    orderBy?: Prisma.s05_rapport_nature_casOrderByWithAggregationInput | Prisma.s05_rapport_nature_casOrderByWithAggregationInput[];
    by: Prisma.S05_rapport_nature_casScalarFieldEnum[] | Prisma.S05_rapport_nature_casScalarFieldEnum;
    having?: Prisma.s05_rapport_nature_casScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S05_rapport_nature_casCountAggregateInputType | true;
    _avg?: S05_rapport_nature_casAvgAggregateInputType;
    _sum?: S05_rapport_nature_casSumAggregateInputType;
    _min?: S05_rapport_nature_casMinAggregateInputType;
    _max?: S05_rapport_nature_casMaxAggregateInputType;
};
export type S05_rapport_nature_casGroupByOutputType = {
    id: number;
    rapport_id: number;
    nature_cas_id: number;
    _count: S05_rapport_nature_casCountAggregateOutputType | null;
    _avg: S05_rapport_nature_casAvgAggregateOutputType | null;
    _sum: S05_rapport_nature_casSumAggregateOutputType | null;
    _min: S05_rapport_nature_casMinAggregateOutputType | null;
    _max: S05_rapport_nature_casMaxAggregateOutputType | null;
};
type GetS05_rapport_nature_casGroupByPayload<T extends s05_rapport_nature_casGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S05_rapport_nature_casGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S05_rapport_nature_casGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S05_rapport_nature_casGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S05_rapport_nature_casGroupByOutputType[P]>;
}>>;
export type s05_rapport_nature_casWhereInput = {
    AND?: Prisma.s05_rapport_nature_casWhereInput | Prisma.s05_rapport_nature_casWhereInput[];
    OR?: Prisma.s05_rapport_nature_casWhereInput[];
    NOT?: Prisma.s05_rapport_nature_casWhereInput | Prisma.s05_rapport_nature_casWhereInput[];
    id?: Prisma.IntFilter<"s05_rapport_nature_cas"> | number;
    rapport_id?: Prisma.IntFilter<"s05_rapport_nature_cas"> | number;
    nature_cas_id?: Prisma.IntFilter<"s05_rapport_nature_cas"> | number;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
    nature_cas?: Prisma.XOR<Prisma.S05_nature_cas_typeScalarRelationFilter, Prisma.s05_nature_cas_typeWhereInput>;
};
export type s05_rapport_nature_casOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    nature_cas_id?: Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
    nature_cas?: Prisma.s05_nature_cas_typeOrderByWithRelationInput;
};
export type s05_rapport_nature_casWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.s05_rapport_nature_casWhereInput | Prisma.s05_rapport_nature_casWhereInput[];
    OR?: Prisma.s05_rapport_nature_casWhereInput[];
    NOT?: Prisma.s05_rapport_nature_casWhereInput | Prisma.s05_rapport_nature_casWhereInput[];
    rapport_id?: Prisma.IntFilter<"s05_rapport_nature_cas"> | number;
    nature_cas_id?: Prisma.IntFilter<"s05_rapport_nature_cas"> | number;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
    nature_cas?: Prisma.XOR<Prisma.S05_nature_cas_typeScalarRelationFilter, Prisma.s05_nature_cas_typeWhereInput>;
}, "id">;
export type s05_rapport_nature_casOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    nature_cas_id?: Prisma.SortOrder;
    _count?: Prisma.s05_rapport_nature_casCountOrderByAggregateInput;
    _avg?: Prisma.s05_rapport_nature_casAvgOrderByAggregateInput;
    _max?: Prisma.s05_rapport_nature_casMaxOrderByAggregateInput;
    _min?: Prisma.s05_rapport_nature_casMinOrderByAggregateInput;
    _sum?: Prisma.s05_rapport_nature_casSumOrderByAggregateInput;
};
export type s05_rapport_nature_casScalarWhereWithAggregatesInput = {
    AND?: Prisma.s05_rapport_nature_casScalarWhereWithAggregatesInput | Prisma.s05_rapport_nature_casScalarWhereWithAggregatesInput[];
    OR?: Prisma.s05_rapport_nature_casScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s05_rapport_nature_casScalarWhereWithAggregatesInput | Prisma.s05_rapport_nature_casScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s05_rapport_nature_cas"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s05_rapport_nature_cas"> | number;
    nature_cas_id?: Prisma.IntWithAggregatesFilter<"s05_rapport_nature_cas"> | number;
};
export type s05_rapport_nature_casCreateInput = {
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS05_rapport_nature_casInput;
    nature_cas: Prisma.s05_nature_cas_typeCreateNestedOneWithoutRapportsInput;
};
export type s05_rapport_nature_casUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    nature_cas_id: number;
};
export type s05_rapport_nature_casUpdateInput = {
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS05_rapport_nature_casNestedInput;
    nature_cas?: Prisma.s05_nature_cas_typeUpdateOneRequiredWithoutRapportsNestedInput;
};
export type s05_rapport_nature_casUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nature_cas_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type s05_rapport_nature_casCreateManyInput = {
    id?: number;
    rapport_id: number;
    nature_cas_id: number;
};
export type s05_rapport_nature_casUpdateManyMutationInput = {};
export type s05_rapport_nature_casUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nature_cas_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type S05_rapport_nature_casListRelationFilter = {
    every?: Prisma.s05_rapport_nature_casWhereInput;
    some?: Prisma.s05_rapport_nature_casWhereInput;
    none?: Prisma.s05_rapport_nature_casWhereInput;
};
export type s05_rapport_nature_casOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type s05_rapport_nature_casCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    nature_cas_id?: Prisma.SortOrder;
};
export type s05_rapport_nature_casAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    nature_cas_id?: Prisma.SortOrder;
};
export type s05_rapport_nature_casMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    nature_cas_id?: Prisma.SortOrder;
};
export type s05_rapport_nature_casMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    nature_cas_id?: Prisma.SortOrder;
};
export type s05_rapport_nature_casSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    nature_cas_id?: Prisma.SortOrder;
};
export type s05_rapport_nature_casCreateNestedManyWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s05_rapport_nature_casCreateWithoutRapportInput, Prisma.s05_rapport_nature_casUncheckedCreateWithoutRapportInput> | Prisma.s05_rapport_nature_casCreateWithoutRapportInput[] | Prisma.s05_rapport_nature_casUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s05_rapport_nature_casCreateOrConnectWithoutRapportInput | Prisma.s05_rapport_nature_casCreateOrConnectWithoutRapportInput[];
    createMany?: Prisma.s05_rapport_nature_casCreateManyRapportInputEnvelope;
    connect?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
};
export type s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s05_rapport_nature_casCreateWithoutRapportInput, Prisma.s05_rapport_nature_casUncheckedCreateWithoutRapportInput> | Prisma.s05_rapport_nature_casCreateWithoutRapportInput[] | Prisma.s05_rapport_nature_casUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s05_rapport_nature_casCreateOrConnectWithoutRapportInput | Prisma.s05_rapport_nature_casCreateOrConnectWithoutRapportInput[];
    createMany?: Prisma.s05_rapport_nature_casCreateManyRapportInputEnvelope;
    connect?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
};
export type s05_rapport_nature_casUpdateManyWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s05_rapport_nature_casCreateWithoutRapportInput, Prisma.s05_rapport_nature_casUncheckedCreateWithoutRapportInput> | Prisma.s05_rapport_nature_casCreateWithoutRapportInput[] | Prisma.s05_rapport_nature_casUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s05_rapport_nature_casCreateOrConnectWithoutRapportInput | Prisma.s05_rapport_nature_casCreateOrConnectWithoutRapportInput[];
    upsert?: Prisma.s05_rapport_nature_casUpsertWithWhereUniqueWithoutRapportInput | Prisma.s05_rapport_nature_casUpsertWithWhereUniqueWithoutRapportInput[];
    createMany?: Prisma.s05_rapport_nature_casCreateManyRapportInputEnvelope;
    set?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
    disconnect?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
    delete?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
    connect?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
    update?: Prisma.s05_rapport_nature_casUpdateWithWhereUniqueWithoutRapportInput | Prisma.s05_rapport_nature_casUpdateWithWhereUniqueWithoutRapportInput[];
    updateMany?: Prisma.s05_rapport_nature_casUpdateManyWithWhereWithoutRapportInput | Prisma.s05_rapport_nature_casUpdateManyWithWhereWithoutRapportInput[];
    deleteMany?: Prisma.s05_rapport_nature_casScalarWhereInput | Prisma.s05_rapport_nature_casScalarWhereInput[];
};
export type s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s05_rapport_nature_casCreateWithoutRapportInput, Prisma.s05_rapport_nature_casUncheckedCreateWithoutRapportInput> | Prisma.s05_rapport_nature_casCreateWithoutRapportInput[] | Prisma.s05_rapport_nature_casUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s05_rapport_nature_casCreateOrConnectWithoutRapportInput | Prisma.s05_rapport_nature_casCreateOrConnectWithoutRapportInput[];
    upsert?: Prisma.s05_rapport_nature_casUpsertWithWhereUniqueWithoutRapportInput | Prisma.s05_rapport_nature_casUpsertWithWhereUniqueWithoutRapportInput[];
    createMany?: Prisma.s05_rapport_nature_casCreateManyRapportInputEnvelope;
    set?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
    disconnect?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
    delete?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
    connect?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
    update?: Prisma.s05_rapport_nature_casUpdateWithWhereUniqueWithoutRapportInput | Prisma.s05_rapport_nature_casUpdateWithWhereUniqueWithoutRapportInput[];
    updateMany?: Prisma.s05_rapport_nature_casUpdateManyWithWhereWithoutRapportInput | Prisma.s05_rapport_nature_casUpdateManyWithWhereWithoutRapportInput[];
    deleteMany?: Prisma.s05_rapport_nature_casScalarWhereInput | Prisma.s05_rapport_nature_casScalarWhereInput[];
};
export type s05_rapport_nature_casCreateNestedManyWithoutNature_casInput = {
    create?: Prisma.XOR<Prisma.s05_rapport_nature_casCreateWithoutNature_casInput, Prisma.s05_rapport_nature_casUncheckedCreateWithoutNature_casInput> | Prisma.s05_rapport_nature_casCreateWithoutNature_casInput[] | Prisma.s05_rapport_nature_casUncheckedCreateWithoutNature_casInput[];
    connectOrCreate?: Prisma.s05_rapport_nature_casCreateOrConnectWithoutNature_casInput | Prisma.s05_rapport_nature_casCreateOrConnectWithoutNature_casInput[];
    createMany?: Prisma.s05_rapport_nature_casCreateManyNature_casInputEnvelope;
    connect?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
};
export type s05_rapport_nature_casUncheckedCreateNestedManyWithoutNature_casInput = {
    create?: Prisma.XOR<Prisma.s05_rapport_nature_casCreateWithoutNature_casInput, Prisma.s05_rapport_nature_casUncheckedCreateWithoutNature_casInput> | Prisma.s05_rapport_nature_casCreateWithoutNature_casInput[] | Prisma.s05_rapport_nature_casUncheckedCreateWithoutNature_casInput[];
    connectOrCreate?: Prisma.s05_rapport_nature_casCreateOrConnectWithoutNature_casInput | Prisma.s05_rapport_nature_casCreateOrConnectWithoutNature_casInput[];
    createMany?: Prisma.s05_rapport_nature_casCreateManyNature_casInputEnvelope;
    connect?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
};
export type s05_rapport_nature_casUpdateManyWithoutNature_casNestedInput = {
    create?: Prisma.XOR<Prisma.s05_rapport_nature_casCreateWithoutNature_casInput, Prisma.s05_rapport_nature_casUncheckedCreateWithoutNature_casInput> | Prisma.s05_rapport_nature_casCreateWithoutNature_casInput[] | Prisma.s05_rapport_nature_casUncheckedCreateWithoutNature_casInput[];
    connectOrCreate?: Prisma.s05_rapport_nature_casCreateOrConnectWithoutNature_casInput | Prisma.s05_rapport_nature_casCreateOrConnectWithoutNature_casInput[];
    upsert?: Prisma.s05_rapport_nature_casUpsertWithWhereUniqueWithoutNature_casInput | Prisma.s05_rapport_nature_casUpsertWithWhereUniqueWithoutNature_casInput[];
    createMany?: Prisma.s05_rapport_nature_casCreateManyNature_casInputEnvelope;
    set?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
    disconnect?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
    delete?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
    connect?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
    update?: Prisma.s05_rapport_nature_casUpdateWithWhereUniqueWithoutNature_casInput | Prisma.s05_rapport_nature_casUpdateWithWhereUniqueWithoutNature_casInput[];
    updateMany?: Prisma.s05_rapport_nature_casUpdateManyWithWhereWithoutNature_casInput | Prisma.s05_rapport_nature_casUpdateManyWithWhereWithoutNature_casInput[];
    deleteMany?: Prisma.s05_rapport_nature_casScalarWhereInput | Prisma.s05_rapport_nature_casScalarWhereInput[];
};
export type s05_rapport_nature_casUncheckedUpdateManyWithoutNature_casNestedInput = {
    create?: Prisma.XOR<Prisma.s05_rapport_nature_casCreateWithoutNature_casInput, Prisma.s05_rapport_nature_casUncheckedCreateWithoutNature_casInput> | Prisma.s05_rapport_nature_casCreateWithoutNature_casInput[] | Prisma.s05_rapport_nature_casUncheckedCreateWithoutNature_casInput[];
    connectOrCreate?: Prisma.s05_rapport_nature_casCreateOrConnectWithoutNature_casInput | Prisma.s05_rapport_nature_casCreateOrConnectWithoutNature_casInput[];
    upsert?: Prisma.s05_rapport_nature_casUpsertWithWhereUniqueWithoutNature_casInput | Prisma.s05_rapport_nature_casUpsertWithWhereUniqueWithoutNature_casInput[];
    createMany?: Prisma.s05_rapport_nature_casCreateManyNature_casInputEnvelope;
    set?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
    disconnect?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
    delete?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
    connect?: Prisma.s05_rapport_nature_casWhereUniqueInput | Prisma.s05_rapport_nature_casWhereUniqueInput[];
    update?: Prisma.s05_rapport_nature_casUpdateWithWhereUniqueWithoutNature_casInput | Prisma.s05_rapport_nature_casUpdateWithWhereUniqueWithoutNature_casInput[];
    updateMany?: Prisma.s05_rapport_nature_casUpdateManyWithWhereWithoutNature_casInput | Prisma.s05_rapport_nature_casUpdateManyWithWhereWithoutNature_casInput[];
    deleteMany?: Prisma.s05_rapport_nature_casScalarWhereInput | Prisma.s05_rapport_nature_casScalarWhereInput[];
};
export type s05_rapport_nature_casCreateWithoutRapportInput = {
    nature_cas: Prisma.s05_nature_cas_typeCreateNestedOneWithoutRapportsInput;
};
export type s05_rapport_nature_casUncheckedCreateWithoutRapportInput = {
    id?: number;
    nature_cas_id: number;
};
export type s05_rapport_nature_casCreateOrConnectWithoutRapportInput = {
    where: Prisma.s05_rapport_nature_casWhereUniqueInput;
    create: Prisma.XOR<Prisma.s05_rapport_nature_casCreateWithoutRapportInput, Prisma.s05_rapport_nature_casUncheckedCreateWithoutRapportInput>;
};
export type s05_rapport_nature_casCreateManyRapportInputEnvelope = {
    data: Prisma.s05_rapport_nature_casCreateManyRapportInput | Prisma.s05_rapport_nature_casCreateManyRapportInput[];
    skipDuplicates?: boolean;
};
export type s05_rapport_nature_casUpsertWithWhereUniqueWithoutRapportInput = {
    where: Prisma.s05_rapport_nature_casWhereUniqueInput;
    update: Prisma.XOR<Prisma.s05_rapport_nature_casUpdateWithoutRapportInput, Prisma.s05_rapport_nature_casUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s05_rapport_nature_casCreateWithoutRapportInput, Prisma.s05_rapport_nature_casUncheckedCreateWithoutRapportInput>;
};
export type s05_rapport_nature_casUpdateWithWhereUniqueWithoutRapportInput = {
    where: Prisma.s05_rapport_nature_casWhereUniqueInput;
    data: Prisma.XOR<Prisma.s05_rapport_nature_casUpdateWithoutRapportInput, Prisma.s05_rapport_nature_casUncheckedUpdateWithoutRapportInput>;
};
export type s05_rapport_nature_casUpdateManyWithWhereWithoutRapportInput = {
    where: Prisma.s05_rapport_nature_casScalarWhereInput;
    data: Prisma.XOR<Prisma.s05_rapport_nature_casUpdateManyMutationInput, Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportInput>;
};
export type s05_rapport_nature_casScalarWhereInput = {
    AND?: Prisma.s05_rapport_nature_casScalarWhereInput | Prisma.s05_rapport_nature_casScalarWhereInput[];
    OR?: Prisma.s05_rapport_nature_casScalarWhereInput[];
    NOT?: Prisma.s05_rapport_nature_casScalarWhereInput | Prisma.s05_rapport_nature_casScalarWhereInput[];
    id?: Prisma.IntFilter<"s05_rapport_nature_cas"> | number;
    rapport_id?: Prisma.IntFilter<"s05_rapport_nature_cas"> | number;
    nature_cas_id?: Prisma.IntFilter<"s05_rapport_nature_cas"> | number;
};
export type s05_rapport_nature_casCreateWithoutNature_casInput = {
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS05_rapport_nature_casInput;
};
export type s05_rapport_nature_casUncheckedCreateWithoutNature_casInput = {
    id?: number;
    rapport_id: number;
};
export type s05_rapport_nature_casCreateOrConnectWithoutNature_casInput = {
    where: Prisma.s05_rapport_nature_casWhereUniqueInput;
    create: Prisma.XOR<Prisma.s05_rapport_nature_casCreateWithoutNature_casInput, Prisma.s05_rapport_nature_casUncheckedCreateWithoutNature_casInput>;
};
export type s05_rapport_nature_casCreateManyNature_casInputEnvelope = {
    data: Prisma.s05_rapport_nature_casCreateManyNature_casInput | Prisma.s05_rapport_nature_casCreateManyNature_casInput[];
    skipDuplicates?: boolean;
};
export type s05_rapport_nature_casUpsertWithWhereUniqueWithoutNature_casInput = {
    where: Prisma.s05_rapport_nature_casWhereUniqueInput;
    update: Prisma.XOR<Prisma.s05_rapport_nature_casUpdateWithoutNature_casInput, Prisma.s05_rapport_nature_casUncheckedUpdateWithoutNature_casInput>;
    create: Prisma.XOR<Prisma.s05_rapport_nature_casCreateWithoutNature_casInput, Prisma.s05_rapport_nature_casUncheckedCreateWithoutNature_casInput>;
};
export type s05_rapport_nature_casUpdateWithWhereUniqueWithoutNature_casInput = {
    where: Prisma.s05_rapport_nature_casWhereUniqueInput;
    data: Prisma.XOR<Prisma.s05_rapport_nature_casUpdateWithoutNature_casInput, Prisma.s05_rapport_nature_casUncheckedUpdateWithoutNature_casInput>;
};
export type s05_rapport_nature_casUpdateManyWithWhereWithoutNature_casInput = {
    where: Prisma.s05_rapport_nature_casScalarWhereInput;
    data: Prisma.XOR<Prisma.s05_rapport_nature_casUpdateManyMutationInput, Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutNature_casInput>;
};
export type s05_rapport_nature_casCreateManyRapportInput = {
    id?: number;
    nature_cas_id: number;
};
export type s05_rapport_nature_casUpdateWithoutRapportInput = {
    nature_cas?: Prisma.s05_nature_cas_typeUpdateOneRequiredWithoutRapportsNestedInput;
};
export type s05_rapport_nature_casUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nature_cas_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type s05_rapport_nature_casUncheckedUpdateManyWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nature_cas_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type s05_rapport_nature_casCreateManyNature_casInput = {
    id?: number;
    rapport_id: number;
};
export type s05_rapport_nature_casUpdateWithoutNature_casInput = {
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS05_rapport_nature_casNestedInput;
};
export type s05_rapport_nature_casUncheckedUpdateWithoutNature_casInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type s05_rapport_nature_casUncheckedUpdateManyWithoutNature_casInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type s05_rapport_nature_casSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    nature_cas_id?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    nature_cas?: boolean | Prisma.s05_nature_cas_typeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s05_rapport_nature_cas"]>;
export type s05_rapport_nature_casSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    nature_cas_id?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    nature_cas?: boolean | Prisma.s05_nature_cas_typeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s05_rapport_nature_cas"]>;
export type s05_rapport_nature_casSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    nature_cas_id?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    nature_cas?: boolean | Prisma.s05_nature_cas_typeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s05_rapport_nature_cas"]>;
export type s05_rapport_nature_casSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    nature_cas_id?: boolean;
};
export type s05_rapport_nature_casOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "nature_cas_id", ExtArgs["result"]["s05_rapport_nature_cas"]>;
export type s05_rapport_nature_casInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    nature_cas?: boolean | Prisma.s05_nature_cas_typeDefaultArgs<ExtArgs>;
};
export type s05_rapport_nature_casIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    nature_cas?: boolean | Prisma.s05_nature_cas_typeDefaultArgs<ExtArgs>;
};
export type s05_rapport_nature_casIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    nature_cas?: boolean | Prisma.s05_nature_cas_typeDefaultArgs<ExtArgs>;
};
export type $s05_rapport_nature_casPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s05_rapport_nature_cas";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
        nature_cas: Prisma.$s05_nature_cas_typePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        nature_cas_id: number;
    }, ExtArgs["result"]["s05_rapport_nature_cas"]>;
    composites: {};
};
export type s05_rapport_nature_casGetPayload<S extends boolean | null | undefined | s05_rapport_nature_casDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s05_rapport_nature_casPayload, S>;
export type s05_rapport_nature_casCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s05_rapport_nature_casFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S05_rapport_nature_casCountAggregateInputType | true;
};
export interface s05_rapport_nature_casDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s05_rapport_nature_cas'];
        meta: {
            name: 's05_rapport_nature_cas';
        };
    };
    /**
     * Find zero or one S05_rapport_nature_cas that matches the filter.
     * @param {s05_rapport_nature_casFindUniqueArgs} args - Arguments to find a S05_rapport_nature_cas
     * @example
     * // Get one S05_rapport_nature_cas
     * const s05_rapport_nature_cas = await prisma.s05_rapport_nature_cas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s05_rapport_nature_casFindUniqueArgs>(args: Prisma.SelectSubset<T, s05_rapport_nature_casFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s05_rapport_nature_casClient<runtime.Types.Result.GetResult<Prisma.$s05_rapport_nature_casPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S05_rapport_nature_cas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s05_rapport_nature_casFindUniqueOrThrowArgs} args - Arguments to find a S05_rapport_nature_cas
     * @example
     * // Get one S05_rapport_nature_cas
     * const s05_rapport_nature_cas = await prisma.s05_rapport_nature_cas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s05_rapport_nature_casFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s05_rapport_nature_casFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s05_rapport_nature_casClient<runtime.Types.Result.GetResult<Prisma.$s05_rapport_nature_casPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S05_rapport_nature_cas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s05_rapport_nature_casFindFirstArgs} args - Arguments to find a S05_rapport_nature_cas
     * @example
     * // Get one S05_rapport_nature_cas
     * const s05_rapport_nature_cas = await prisma.s05_rapport_nature_cas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s05_rapport_nature_casFindFirstArgs>(args?: Prisma.SelectSubset<T, s05_rapport_nature_casFindFirstArgs<ExtArgs>>): Prisma.Prisma__s05_rapport_nature_casClient<runtime.Types.Result.GetResult<Prisma.$s05_rapport_nature_casPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S05_rapport_nature_cas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s05_rapport_nature_casFindFirstOrThrowArgs} args - Arguments to find a S05_rapport_nature_cas
     * @example
     * // Get one S05_rapport_nature_cas
     * const s05_rapport_nature_cas = await prisma.s05_rapport_nature_cas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s05_rapport_nature_casFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s05_rapport_nature_casFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s05_rapport_nature_casClient<runtime.Types.Result.GetResult<Prisma.$s05_rapport_nature_casPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S05_rapport_nature_cas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s05_rapport_nature_casFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S05_rapport_nature_cas
     * const s05_rapport_nature_cas = await prisma.s05_rapport_nature_cas.findMany()
     *
     * // Get first 10 S05_rapport_nature_cas
     * const s05_rapport_nature_cas = await prisma.s05_rapport_nature_cas.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s05_rapport_nature_casWithIdOnly = await prisma.s05_rapport_nature_cas.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s05_rapport_nature_casFindManyArgs>(args?: Prisma.SelectSubset<T, s05_rapport_nature_casFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s05_rapport_nature_casPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S05_rapport_nature_cas.
     * @param {s05_rapport_nature_casCreateArgs} args - Arguments to create a S05_rapport_nature_cas.
     * @example
     * // Create one S05_rapport_nature_cas
     * const S05_rapport_nature_cas = await prisma.s05_rapport_nature_cas.create({
     *   data: {
     *     // ... data to create a S05_rapport_nature_cas
     *   }
     * })
     *
     */
    create<T extends s05_rapport_nature_casCreateArgs>(args: Prisma.SelectSubset<T, s05_rapport_nature_casCreateArgs<ExtArgs>>): Prisma.Prisma__s05_rapport_nature_casClient<runtime.Types.Result.GetResult<Prisma.$s05_rapport_nature_casPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S05_rapport_nature_cas.
     * @param {s05_rapport_nature_casCreateManyArgs} args - Arguments to create many S05_rapport_nature_cas.
     * @example
     * // Create many S05_rapport_nature_cas
     * const s05_rapport_nature_cas = await prisma.s05_rapport_nature_cas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s05_rapport_nature_casCreateManyArgs>(args?: Prisma.SelectSubset<T, s05_rapport_nature_casCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S05_rapport_nature_cas and returns the data saved in the database.
     * @param {s05_rapport_nature_casCreateManyAndReturnArgs} args - Arguments to create many S05_rapport_nature_cas.
     * @example
     * // Create many S05_rapport_nature_cas
     * const s05_rapport_nature_cas = await prisma.s05_rapport_nature_cas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S05_rapport_nature_cas and only return the `id`
     * const s05_rapport_nature_casWithIdOnly = await prisma.s05_rapport_nature_cas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s05_rapport_nature_casCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s05_rapport_nature_casCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s05_rapport_nature_casPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S05_rapport_nature_cas.
     * @param {s05_rapport_nature_casDeleteArgs} args - Arguments to delete one S05_rapport_nature_cas.
     * @example
     * // Delete one S05_rapport_nature_cas
     * const S05_rapport_nature_cas = await prisma.s05_rapport_nature_cas.delete({
     *   where: {
     *     // ... filter to delete one S05_rapport_nature_cas
     *   }
     * })
     *
     */
    delete<T extends s05_rapport_nature_casDeleteArgs>(args: Prisma.SelectSubset<T, s05_rapport_nature_casDeleteArgs<ExtArgs>>): Prisma.Prisma__s05_rapport_nature_casClient<runtime.Types.Result.GetResult<Prisma.$s05_rapport_nature_casPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S05_rapport_nature_cas.
     * @param {s05_rapport_nature_casUpdateArgs} args - Arguments to update one S05_rapport_nature_cas.
     * @example
     * // Update one S05_rapport_nature_cas
     * const s05_rapport_nature_cas = await prisma.s05_rapport_nature_cas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s05_rapport_nature_casUpdateArgs>(args: Prisma.SelectSubset<T, s05_rapport_nature_casUpdateArgs<ExtArgs>>): Prisma.Prisma__s05_rapport_nature_casClient<runtime.Types.Result.GetResult<Prisma.$s05_rapport_nature_casPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S05_rapport_nature_cas.
     * @param {s05_rapport_nature_casDeleteManyArgs} args - Arguments to filter S05_rapport_nature_cas to delete.
     * @example
     * // Delete a few S05_rapport_nature_cas
     * const { count } = await prisma.s05_rapport_nature_cas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s05_rapport_nature_casDeleteManyArgs>(args?: Prisma.SelectSubset<T, s05_rapport_nature_casDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S05_rapport_nature_cas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s05_rapport_nature_casUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S05_rapport_nature_cas
     * const s05_rapport_nature_cas = await prisma.s05_rapport_nature_cas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s05_rapport_nature_casUpdateManyArgs>(args: Prisma.SelectSubset<T, s05_rapport_nature_casUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S05_rapport_nature_cas and returns the data updated in the database.
     * @param {s05_rapport_nature_casUpdateManyAndReturnArgs} args - Arguments to update many S05_rapport_nature_cas.
     * @example
     * // Update many S05_rapport_nature_cas
     * const s05_rapport_nature_cas = await prisma.s05_rapport_nature_cas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S05_rapport_nature_cas and only return the `id`
     * const s05_rapport_nature_casWithIdOnly = await prisma.s05_rapport_nature_cas.updateManyAndReturn({
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
    updateManyAndReturn<T extends s05_rapport_nature_casUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s05_rapport_nature_casUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s05_rapport_nature_casPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S05_rapport_nature_cas.
     * @param {s05_rapport_nature_casUpsertArgs} args - Arguments to update or create a S05_rapport_nature_cas.
     * @example
     * // Update or create a S05_rapport_nature_cas
     * const s05_rapport_nature_cas = await prisma.s05_rapport_nature_cas.upsert({
     *   create: {
     *     // ... data to create a S05_rapport_nature_cas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S05_rapport_nature_cas we want to update
     *   }
     * })
     */
    upsert<T extends s05_rapport_nature_casUpsertArgs>(args: Prisma.SelectSubset<T, s05_rapport_nature_casUpsertArgs<ExtArgs>>): Prisma.Prisma__s05_rapport_nature_casClient<runtime.Types.Result.GetResult<Prisma.$s05_rapport_nature_casPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S05_rapport_nature_cas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s05_rapport_nature_casCountArgs} args - Arguments to filter S05_rapport_nature_cas to count.
     * @example
     * // Count the number of S05_rapport_nature_cas
     * const count = await prisma.s05_rapport_nature_cas.count({
     *   where: {
     *     // ... the filter for the S05_rapport_nature_cas we want to count
     *   }
     * })
    **/
    count<T extends s05_rapport_nature_casCountArgs>(args?: Prisma.Subset<T, s05_rapport_nature_casCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S05_rapport_nature_casCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S05_rapport_nature_cas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S05_rapport_nature_casAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S05_rapport_nature_casAggregateArgs>(args: Prisma.Subset<T, S05_rapport_nature_casAggregateArgs>): Prisma.PrismaPromise<GetS05_rapport_nature_casAggregateType<T>>;
    /**
     * Group by S05_rapport_nature_cas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s05_rapport_nature_casGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s05_rapport_nature_casGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s05_rapport_nature_casGroupByArgs['orderBy'];
    } : {
        orderBy?: s05_rapport_nature_casGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s05_rapport_nature_casGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS05_rapport_nature_casGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s05_rapport_nature_cas model
     */
    readonly fields: s05_rapport_nature_casFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s05_rapport_nature_cas.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s05_rapport_nature_casClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rapport<T extends Prisma.r_rapport_prDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_prDefaultArgs<ExtArgs>>): Prisma.Prisma__r_rapport_prClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    nature_cas<T extends Prisma.s05_nature_cas_typeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.s05_nature_cas_typeDefaultArgs<ExtArgs>>): Prisma.Prisma__s05_nature_cas_typeClient<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the s05_rapport_nature_cas model
 */
export interface s05_rapport_nature_casFieldRefs {
    readonly id: Prisma.FieldRef<"s05_rapport_nature_cas", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s05_rapport_nature_cas", 'Int'>;
    readonly nature_cas_id: Prisma.FieldRef<"s05_rapport_nature_cas", 'Int'>;
}
/**
 * s05_rapport_nature_cas findUnique
 */
export type s05_rapport_nature_casFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_rapport_nature_cas
     */
    select?: Prisma.s05_rapport_nature_casSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_rapport_nature_cas
     */
    omit?: Prisma.s05_rapport_nature_casOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_rapport_nature_casInclude<ExtArgs> | null;
    /**
     * Filter, which s05_rapport_nature_cas to fetch.
     */
    where: Prisma.s05_rapport_nature_casWhereUniqueInput;
};
/**
 * s05_rapport_nature_cas findUniqueOrThrow
 */
export type s05_rapport_nature_casFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_rapport_nature_cas
     */
    select?: Prisma.s05_rapport_nature_casSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_rapport_nature_cas
     */
    omit?: Prisma.s05_rapport_nature_casOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_rapport_nature_casInclude<ExtArgs> | null;
    /**
     * Filter, which s05_rapport_nature_cas to fetch.
     */
    where: Prisma.s05_rapport_nature_casWhereUniqueInput;
};
/**
 * s05_rapport_nature_cas findFirst
 */
export type s05_rapport_nature_casFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_rapport_nature_cas
     */
    select?: Prisma.s05_rapport_nature_casSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_rapport_nature_cas
     */
    omit?: Prisma.s05_rapport_nature_casOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_rapport_nature_casInclude<ExtArgs> | null;
    /**
     * Filter, which s05_rapport_nature_cas to fetch.
     */
    where?: Prisma.s05_rapport_nature_casWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s05_rapport_nature_cas to fetch.
     */
    orderBy?: Prisma.s05_rapport_nature_casOrderByWithRelationInput | Prisma.s05_rapport_nature_casOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s05_rapport_nature_cas.
     */
    cursor?: Prisma.s05_rapport_nature_casWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s05_rapport_nature_cas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s05_rapport_nature_cas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s05_rapport_nature_cas.
     */
    distinct?: Prisma.S05_rapport_nature_casScalarFieldEnum | Prisma.S05_rapport_nature_casScalarFieldEnum[];
};
/**
 * s05_rapport_nature_cas findFirstOrThrow
 */
export type s05_rapport_nature_casFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_rapport_nature_cas
     */
    select?: Prisma.s05_rapport_nature_casSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_rapport_nature_cas
     */
    omit?: Prisma.s05_rapport_nature_casOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_rapport_nature_casInclude<ExtArgs> | null;
    /**
     * Filter, which s05_rapport_nature_cas to fetch.
     */
    where?: Prisma.s05_rapport_nature_casWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s05_rapport_nature_cas to fetch.
     */
    orderBy?: Prisma.s05_rapport_nature_casOrderByWithRelationInput | Prisma.s05_rapport_nature_casOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s05_rapport_nature_cas.
     */
    cursor?: Prisma.s05_rapport_nature_casWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s05_rapport_nature_cas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s05_rapport_nature_cas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s05_rapport_nature_cas.
     */
    distinct?: Prisma.S05_rapport_nature_casScalarFieldEnum | Prisma.S05_rapport_nature_casScalarFieldEnum[];
};
/**
 * s05_rapport_nature_cas findMany
 */
export type s05_rapport_nature_casFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_rapport_nature_cas
     */
    select?: Prisma.s05_rapport_nature_casSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_rapport_nature_cas
     */
    omit?: Prisma.s05_rapport_nature_casOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_rapport_nature_casInclude<ExtArgs> | null;
    /**
     * Filter, which s05_rapport_nature_cas to fetch.
     */
    where?: Prisma.s05_rapport_nature_casWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s05_rapport_nature_cas to fetch.
     */
    orderBy?: Prisma.s05_rapport_nature_casOrderByWithRelationInput | Prisma.s05_rapport_nature_casOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s05_rapport_nature_cas.
     */
    cursor?: Prisma.s05_rapport_nature_casWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s05_rapport_nature_cas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s05_rapport_nature_cas.
     */
    skip?: number;
    distinct?: Prisma.S05_rapport_nature_casScalarFieldEnum | Prisma.S05_rapport_nature_casScalarFieldEnum[];
};
/**
 * s05_rapport_nature_cas create
 */
export type s05_rapport_nature_casCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_rapport_nature_cas
     */
    select?: Prisma.s05_rapport_nature_casSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_rapport_nature_cas
     */
    omit?: Prisma.s05_rapport_nature_casOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_rapport_nature_casInclude<ExtArgs> | null;
    /**
     * The data needed to create a s05_rapport_nature_cas.
     */
    data: Prisma.XOR<Prisma.s05_rapport_nature_casCreateInput, Prisma.s05_rapport_nature_casUncheckedCreateInput>;
};
/**
 * s05_rapport_nature_cas createMany
 */
export type s05_rapport_nature_casCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s05_rapport_nature_cas.
     */
    data: Prisma.s05_rapport_nature_casCreateManyInput | Prisma.s05_rapport_nature_casCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s05_rapport_nature_cas createManyAndReturn
 */
export type s05_rapport_nature_casCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_rapport_nature_cas
     */
    select?: Prisma.s05_rapport_nature_casSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_rapport_nature_cas
     */
    omit?: Prisma.s05_rapport_nature_casOmit<ExtArgs> | null;
    /**
     * The data used to create many s05_rapport_nature_cas.
     */
    data: Prisma.s05_rapport_nature_casCreateManyInput | Prisma.s05_rapport_nature_casCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_rapport_nature_casIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s05_rapport_nature_cas update
 */
export type s05_rapport_nature_casUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_rapport_nature_cas
     */
    select?: Prisma.s05_rapport_nature_casSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_rapport_nature_cas
     */
    omit?: Prisma.s05_rapport_nature_casOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_rapport_nature_casInclude<ExtArgs> | null;
    /**
     * The data needed to update a s05_rapport_nature_cas.
     */
    data: Prisma.XOR<Prisma.s05_rapport_nature_casUpdateInput, Prisma.s05_rapport_nature_casUncheckedUpdateInput>;
    /**
     * Choose, which s05_rapport_nature_cas to update.
     */
    where: Prisma.s05_rapport_nature_casWhereUniqueInput;
};
/**
 * s05_rapport_nature_cas updateMany
 */
export type s05_rapport_nature_casUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s05_rapport_nature_cas.
     */
    data: Prisma.XOR<Prisma.s05_rapport_nature_casUpdateManyMutationInput, Prisma.s05_rapport_nature_casUncheckedUpdateManyInput>;
    /**
     * Filter which s05_rapport_nature_cas to update
     */
    where?: Prisma.s05_rapport_nature_casWhereInput;
    /**
     * Limit how many s05_rapport_nature_cas to update.
     */
    limit?: number;
};
/**
 * s05_rapport_nature_cas updateManyAndReturn
 */
export type s05_rapport_nature_casUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_rapport_nature_cas
     */
    select?: Prisma.s05_rapport_nature_casSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_rapport_nature_cas
     */
    omit?: Prisma.s05_rapport_nature_casOmit<ExtArgs> | null;
    /**
     * The data used to update s05_rapport_nature_cas.
     */
    data: Prisma.XOR<Prisma.s05_rapport_nature_casUpdateManyMutationInput, Prisma.s05_rapport_nature_casUncheckedUpdateManyInput>;
    /**
     * Filter which s05_rapport_nature_cas to update
     */
    where?: Prisma.s05_rapport_nature_casWhereInput;
    /**
     * Limit how many s05_rapport_nature_cas to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_rapport_nature_casIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s05_rapport_nature_cas upsert
 */
export type s05_rapport_nature_casUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_rapport_nature_cas
     */
    select?: Prisma.s05_rapport_nature_casSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_rapport_nature_cas
     */
    omit?: Prisma.s05_rapport_nature_casOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_rapport_nature_casInclude<ExtArgs> | null;
    /**
     * The filter to search for the s05_rapport_nature_cas to update in case it exists.
     */
    where: Prisma.s05_rapport_nature_casWhereUniqueInput;
    /**
     * In case the s05_rapport_nature_cas found by the `where` argument doesn't exist, create a new s05_rapport_nature_cas with this data.
     */
    create: Prisma.XOR<Prisma.s05_rapport_nature_casCreateInput, Prisma.s05_rapport_nature_casUncheckedCreateInput>;
    /**
     * In case the s05_rapport_nature_cas was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s05_rapport_nature_casUpdateInput, Prisma.s05_rapport_nature_casUncheckedUpdateInput>;
};
/**
 * s05_rapport_nature_cas delete
 */
export type s05_rapport_nature_casDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_rapport_nature_cas
     */
    select?: Prisma.s05_rapport_nature_casSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_rapport_nature_cas
     */
    omit?: Prisma.s05_rapport_nature_casOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_rapport_nature_casInclude<ExtArgs> | null;
    /**
     * Filter which s05_rapport_nature_cas to delete.
     */
    where: Prisma.s05_rapport_nature_casWhereUniqueInput;
};
/**
 * s05_rapport_nature_cas deleteMany
 */
export type s05_rapport_nature_casDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s05_rapport_nature_cas to delete
     */
    where?: Prisma.s05_rapport_nature_casWhereInput;
    /**
     * Limit how many s05_rapport_nature_cas to delete.
     */
    limit?: number;
};
/**
 * s05_rapport_nature_cas without action
 */
export type s05_rapport_nature_casDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_rapport_nature_cas
     */
    select?: Prisma.s05_rapport_nature_casSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_rapport_nature_cas
     */
    omit?: Prisma.s05_rapport_nature_casOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_rapport_nature_casInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s05_rapport_nature_cas.d.ts.map