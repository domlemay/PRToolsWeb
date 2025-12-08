import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model r_rapport_pr_intervenant
 *
 */
export type r_rapport_pr_intervenantModel = runtime.Types.Result.DefaultSelection<Prisma.$r_rapport_pr_intervenantPayload>;
export type AggregateR_rapport_pr_intervenant = {
    _count: R_rapport_pr_intervenantCountAggregateOutputType | null;
    _avg: R_rapport_pr_intervenantAvgAggregateOutputType | null;
    _sum: R_rapport_pr_intervenantSumAggregateOutputType | null;
    _min: R_rapport_pr_intervenantMinAggregateOutputType | null;
    _max: R_rapport_pr_intervenantMaxAggregateOutputType | null;
};
export type R_rapport_pr_intervenantAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    intervenant_id: number | null;
};
export type R_rapport_pr_intervenantSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    intervenant_id: number | null;
};
export type R_rapport_pr_intervenantMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    intervenant_id: number | null;
    role: string | null;
};
export type R_rapport_pr_intervenantMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    intervenant_id: number | null;
    role: string | null;
};
export type R_rapport_pr_intervenantCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    intervenant_id: number;
    role: number;
    _all: number;
};
export type R_rapport_pr_intervenantAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
    intervenant_id?: true;
};
export type R_rapport_pr_intervenantSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
    intervenant_id?: true;
};
export type R_rapport_pr_intervenantMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    intervenant_id?: true;
    role?: true;
};
export type R_rapport_pr_intervenantMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    intervenant_id?: true;
    role?: true;
};
export type R_rapport_pr_intervenantCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    intervenant_id?: true;
    role?: true;
    _all?: true;
};
export type R_rapport_pr_intervenantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which r_rapport_pr_intervenant to aggregate.
     */
    where?: Prisma.r_rapport_pr_intervenantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of r_rapport_pr_intervenants to fetch.
     */
    orderBy?: Prisma.r_rapport_pr_intervenantOrderByWithRelationInput | Prisma.r_rapport_pr_intervenantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.r_rapport_pr_intervenantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` r_rapport_pr_intervenants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` r_rapport_pr_intervenants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned r_rapport_pr_intervenants
    **/
    _count?: true | R_rapport_pr_intervenantCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: R_rapport_pr_intervenantAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: R_rapport_pr_intervenantSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: R_rapport_pr_intervenantMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: R_rapport_pr_intervenantMaxAggregateInputType;
};
export type GetR_rapport_pr_intervenantAggregateType<T extends R_rapport_pr_intervenantAggregateArgs> = {
    [P in keyof T & keyof AggregateR_rapport_pr_intervenant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateR_rapport_pr_intervenant[P]> : Prisma.GetScalarType<T[P], AggregateR_rapport_pr_intervenant[P]>;
};
export type r_rapport_pr_intervenantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.r_rapport_pr_intervenantWhereInput;
    orderBy?: Prisma.r_rapport_pr_intervenantOrderByWithAggregationInput | Prisma.r_rapport_pr_intervenantOrderByWithAggregationInput[];
    by: Prisma.R_rapport_pr_intervenantScalarFieldEnum[] | Prisma.R_rapport_pr_intervenantScalarFieldEnum;
    having?: Prisma.r_rapport_pr_intervenantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: R_rapport_pr_intervenantCountAggregateInputType | true;
    _avg?: R_rapport_pr_intervenantAvgAggregateInputType;
    _sum?: R_rapport_pr_intervenantSumAggregateInputType;
    _min?: R_rapport_pr_intervenantMinAggregateInputType;
    _max?: R_rapport_pr_intervenantMaxAggregateInputType;
};
export type R_rapport_pr_intervenantGroupByOutputType = {
    id: number;
    rapport_id: number;
    intervenant_id: number;
    role: string | null;
    _count: R_rapport_pr_intervenantCountAggregateOutputType | null;
    _avg: R_rapport_pr_intervenantAvgAggregateOutputType | null;
    _sum: R_rapport_pr_intervenantSumAggregateOutputType | null;
    _min: R_rapport_pr_intervenantMinAggregateOutputType | null;
    _max: R_rapport_pr_intervenantMaxAggregateOutputType | null;
};
type GetR_rapport_pr_intervenantGroupByPayload<T extends r_rapport_pr_intervenantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<R_rapport_pr_intervenantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof R_rapport_pr_intervenantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], R_rapport_pr_intervenantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], R_rapport_pr_intervenantGroupByOutputType[P]>;
}>>;
export type r_rapport_pr_intervenantWhereInput = {
    AND?: Prisma.r_rapport_pr_intervenantWhereInput | Prisma.r_rapport_pr_intervenantWhereInput[];
    OR?: Prisma.r_rapport_pr_intervenantWhereInput[];
    NOT?: Prisma.r_rapport_pr_intervenantWhereInput | Prisma.r_rapport_pr_intervenantWhereInput[];
    id?: Prisma.IntFilter<"r_rapport_pr_intervenant"> | number;
    rapport_id?: Prisma.IntFilter<"r_rapport_pr_intervenant"> | number;
    intervenant_id?: Prisma.IntFilter<"r_rapport_pr_intervenant"> | number;
    role?: Prisma.StringNullableFilter<"r_rapport_pr_intervenant"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
    intervenant?: Prisma.XOR<Prisma.Intervenant_prScalarRelationFilter, Prisma.intervenant_prWhereInput>;
};
export type r_rapport_pr_intervenantOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    intervenant_id?: Prisma.SortOrder;
    role?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
    intervenant?: Prisma.intervenant_prOrderByWithRelationInput;
};
export type r_rapport_pr_intervenantWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id_intervenant_id?: Prisma.r_rapport_pr_intervenantRapport_idIntervenant_idCompoundUniqueInput;
    AND?: Prisma.r_rapport_pr_intervenantWhereInput | Prisma.r_rapport_pr_intervenantWhereInput[];
    OR?: Prisma.r_rapport_pr_intervenantWhereInput[];
    NOT?: Prisma.r_rapport_pr_intervenantWhereInput | Prisma.r_rapport_pr_intervenantWhereInput[];
    rapport_id?: Prisma.IntFilter<"r_rapport_pr_intervenant"> | number;
    intervenant_id?: Prisma.IntFilter<"r_rapport_pr_intervenant"> | number;
    role?: Prisma.StringNullableFilter<"r_rapport_pr_intervenant"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
    intervenant?: Prisma.XOR<Prisma.Intervenant_prScalarRelationFilter, Prisma.intervenant_prWhereInput>;
}, "id" | "rapport_id_intervenant_id">;
export type r_rapport_pr_intervenantOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    intervenant_id?: Prisma.SortOrder;
    role?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.r_rapport_pr_intervenantCountOrderByAggregateInput;
    _avg?: Prisma.r_rapport_pr_intervenantAvgOrderByAggregateInput;
    _max?: Prisma.r_rapport_pr_intervenantMaxOrderByAggregateInput;
    _min?: Prisma.r_rapport_pr_intervenantMinOrderByAggregateInput;
    _sum?: Prisma.r_rapport_pr_intervenantSumOrderByAggregateInput;
};
export type r_rapport_pr_intervenantScalarWhereWithAggregatesInput = {
    AND?: Prisma.r_rapport_pr_intervenantScalarWhereWithAggregatesInput | Prisma.r_rapport_pr_intervenantScalarWhereWithAggregatesInput[];
    OR?: Prisma.r_rapport_pr_intervenantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.r_rapport_pr_intervenantScalarWhereWithAggregatesInput | Prisma.r_rapport_pr_intervenantScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"r_rapport_pr_intervenant"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"r_rapport_pr_intervenant"> | number;
    intervenant_id?: Prisma.IntWithAggregatesFilter<"r_rapport_pr_intervenant"> | number;
    role?: Prisma.StringNullableWithAggregatesFilter<"r_rapport_pr_intervenant"> | string | null;
};
export type r_rapport_pr_intervenantCreateInput = {
    role?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutR_rapport_pr_intervenantInput;
    intervenant: Prisma.intervenant_prCreateNestedOneWithoutR_rapport_pr_intervenantInput;
};
export type r_rapport_pr_intervenantUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    intervenant_id: number;
    role?: string | null;
};
export type r_rapport_pr_intervenantUpdateInput = {
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutR_rapport_pr_intervenantNestedInput;
    intervenant?: Prisma.intervenant_prUpdateOneRequiredWithoutR_rapport_pr_intervenantNestedInput;
};
export type r_rapport_pr_intervenantUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    intervenant_id?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type r_rapport_pr_intervenantCreateManyInput = {
    id?: number;
    rapport_id: number;
    intervenant_id: number;
    role?: string | null;
};
export type r_rapport_pr_intervenantUpdateManyMutationInput = {
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type r_rapport_pr_intervenantUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    intervenant_id?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type R_rapport_pr_intervenantListRelationFilter = {
    every?: Prisma.r_rapport_pr_intervenantWhereInput;
    some?: Prisma.r_rapport_pr_intervenantWhereInput;
    none?: Prisma.r_rapport_pr_intervenantWhereInput;
};
export type r_rapport_pr_intervenantOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type r_rapport_pr_intervenantRapport_idIntervenant_idCompoundUniqueInput = {
    rapport_id: number;
    intervenant_id: number;
};
export type r_rapport_pr_intervenantCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    intervenant_id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
};
export type r_rapport_pr_intervenantAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    intervenant_id?: Prisma.SortOrder;
};
export type r_rapport_pr_intervenantMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    intervenant_id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
};
export type r_rapport_pr_intervenantMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    intervenant_id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
};
export type r_rapport_pr_intervenantSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    intervenant_id?: Prisma.SortOrder;
};
export type r_rapport_pr_intervenantCreateNestedManyWithoutIntervenantInput = {
    create?: Prisma.XOR<Prisma.r_rapport_pr_intervenantCreateWithoutIntervenantInput, Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutIntervenantInput> | Prisma.r_rapport_pr_intervenantCreateWithoutIntervenantInput[] | Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutIntervenantInput[];
    connectOrCreate?: Prisma.r_rapport_pr_intervenantCreateOrConnectWithoutIntervenantInput | Prisma.r_rapport_pr_intervenantCreateOrConnectWithoutIntervenantInput[];
    createMany?: Prisma.r_rapport_pr_intervenantCreateManyIntervenantInputEnvelope;
    connect?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
};
export type r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutIntervenantInput = {
    create?: Prisma.XOR<Prisma.r_rapport_pr_intervenantCreateWithoutIntervenantInput, Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutIntervenantInput> | Prisma.r_rapport_pr_intervenantCreateWithoutIntervenantInput[] | Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutIntervenantInput[];
    connectOrCreate?: Prisma.r_rapport_pr_intervenantCreateOrConnectWithoutIntervenantInput | Prisma.r_rapport_pr_intervenantCreateOrConnectWithoutIntervenantInput[];
    createMany?: Prisma.r_rapport_pr_intervenantCreateManyIntervenantInputEnvelope;
    connect?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
};
export type r_rapport_pr_intervenantUpdateManyWithoutIntervenantNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_pr_intervenantCreateWithoutIntervenantInput, Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutIntervenantInput> | Prisma.r_rapport_pr_intervenantCreateWithoutIntervenantInput[] | Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutIntervenantInput[];
    connectOrCreate?: Prisma.r_rapport_pr_intervenantCreateOrConnectWithoutIntervenantInput | Prisma.r_rapport_pr_intervenantCreateOrConnectWithoutIntervenantInput[];
    upsert?: Prisma.r_rapport_pr_intervenantUpsertWithWhereUniqueWithoutIntervenantInput | Prisma.r_rapport_pr_intervenantUpsertWithWhereUniqueWithoutIntervenantInput[];
    createMany?: Prisma.r_rapport_pr_intervenantCreateManyIntervenantInputEnvelope;
    set?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
    disconnect?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
    delete?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
    connect?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
    update?: Prisma.r_rapport_pr_intervenantUpdateWithWhereUniqueWithoutIntervenantInput | Prisma.r_rapport_pr_intervenantUpdateWithWhereUniqueWithoutIntervenantInput[];
    updateMany?: Prisma.r_rapport_pr_intervenantUpdateManyWithWhereWithoutIntervenantInput | Prisma.r_rapport_pr_intervenantUpdateManyWithWhereWithoutIntervenantInput[];
    deleteMany?: Prisma.r_rapport_pr_intervenantScalarWhereInput | Prisma.r_rapport_pr_intervenantScalarWhereInput[];
};
export type r_rapport_pr_intervenantUncheckedUpdateManyWithoutIntervenantNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_pr_intervenantCreateWithoutIntervenantInput, Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutIntervenantInput> | Prisma.r_rapport_pr_intervenantCreateWithoutIntervenantInput[] | Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutIntervenantInput[];
    connectOrCreate?: Prisma.r_rapport_pr_intervenantCreateOrConnectWithoutIntervenantInput | Prisma.r_rapport_pr_intervenantCreateOrConnectWithoutIntervenantInput[];
    upsert?: Prisma.r_rapport_pr_intervenantUpsertWithWhereUniqueWithoutIntervenantInput | Prisma.r_rapport_pr_intervenantUpsertWithWhereUniqueWithoutIntervenantInput[];
    createMany?: Prisma.r_rapport_pr_intervenantCreateManyIntervenantInputEnvelope;
    set?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
    disconnect?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
    delete?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
    connect?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
    update?: Prisma.r_rapport_pr_intervenantUpdateWithWhereUniqueWithoutIntervenantInput | Prisma.r_rapport_pr_intervenantUpdateWithWhereUniqueWithoutIntervenantInput[];
    updateMany?: Prisma.r_rapport_pr_intervenantUpdateManyWithWhereWithoutIntervenantInput | Prisma.r_rapport_pr_intervenantUpdateManyWithWhereWithoutIntervenantInput[];
    deleteMany?: Prisma.r_rapport_pr_intervenantScalarWhereInput | Prisma.r_rapport_pr_intervenantScalarWhereInput[];
};
export type r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.r_rapport_pr_intervenantCreateWithoutRapportInput, Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutRapportInput> | Prisma.r_rapport_pr_intervenantCreateWithoutRapportInput[] | Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.r_rapport_pr_intervenantCreateOrConnectWithoutRapportInput | Prisma.r_rapport_pr_intervenantCreateOrConnectWithoutRapportInput[];
    createMany?: Prisma.r_rapport_pr_intervenantCreateManyRapportInputEnvelope;
    connect?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
};
export type r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.r_rapport_pr_intervenantCreateWithoutRapportInput, Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutRapportInput> | Prisma.r_rapport_pr_intervenantCreateWithoutRapportInput[] | Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.r_rapport_pr_intervenantCreateOrConnectWithoutRapportInput | Prisma.r_rapport_pr_intervenantCreateOrConnectWithoutRapportInput[];
    createMany?: Prisma.r_rapport_pr_intervenantCreateManyRapportInputEnvelope;
    connect?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
};
export type r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_pr_intervenantCreateWithoutRapportInput, Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutRapportInput> | Prisma.r_rapport_pr_intervenantCreateWithoutRapportInput[] | Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.r_rapport_pr_intervenantCreateOrConnectWithoutRapportInput | Prisma.r_rapport_pr_intervenantCreateOrConnectWithoutRapportInput[];
    upsert?: Prisma.r_rapport_pr_intervenantUpsertWithWhereUniqueWithoutRapportInput | Prisma.r_rapport_pr_intervenantUpsertWithWhereUniqueWithoutRapportInput[];
    createMany?: Prisma.r_rapport_pr_intervenantCreateManyRapportInputEnvelope;
    set?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
    disconnect?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
    delete?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
    connect?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
    update?: Prisma.r_rapport_pr_intervenantUpdateWithWhereUniqueWithoutRapportInput | Prisma.r_rapport_pr_intervenantUpdateWithWhereUniqueWithoutRapportInput[];
    updateMany?: Prisma.r_rapport_pr_intervenantUpdateManyWithWhereWithoutRapportInput | Prisma.r_rapport_pr_intervenantUpdateManyWithWhereWithoutRapportInput[];
    deleteMany?: Prisma.r_rapport_pr_intervenantScalarWhereInput | Prisma.r_rapport_pr_intervenantScalarWhereInput[];
};
export type r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_pr_intervenantCreateWithoutRapportInput, Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutRapportInput> | Prisma.r_rapport_pr_intervenantCreateWithoutRapportInput[] | Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.r_rapport_pr_intervenantCreateOrConnectWithoutRapportInput | Prisma.r_rapport_pr_intervenantCreateOrConnectWithoutRapportInput[];
    upsert?: Prisma.r_rapport_pr_intervenantUpsertWithWhereUniqueWithoutRapportInput | Prisma.r_rapport_pr_intervenantUpsertWithWhereUniqueWithoutRapportInput[];
    createMany?: Prisma.r_rapport_pr_intervenantCreateManyRapportInputEnvelope;
    set?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
    disconnect?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
    delete?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
    connect?: Prisma.r_rapport_pr_intervenantWhereUniqueInput | Prisma.r_rapport_pr_intervenantWhereUniqueInput[];
    update?: Prisma.r_rapport_pr_intervenantUpdateWithWhereUniqueWithoutRapportInput | Prisma.r_rapport_pr_intervenantUpdateWithWhereUniqueWithoutRapportInput[];
    updateMany?: Prisma.r_rapport_pr_intervenantUpdateManyWithWhereWithoutRapportInput | Prisma.r_rapport_pr_intervenantUpdateManyWithWhereWithoutRapportInput[];
    deleteMany?: Prisma.r_rapport_pr_intervenantScalarWhereInput | Prisma.r_rapport_pr_intervenantScalarWhereInput[];
};
export type r_rapport_pr_intervenantCreateWithoutIntervenantInput = {
    role?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutR_rapport_pr_intervenantInput;
};
export type r_rapport_pr_intervenantUncheckedCreateWithoutIntervenantInput = {
    id?: number;
    rapport_id: number;
    role?: string | null;
};
export type r_rapport_pr_intervenantCreateOrConnectWithoutIntervenantInput = {
    where: Prisma.r_rapport_pr_intervenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_pr_intervenantCreateWithoutIntervenantInput, Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutIntervenantInput>;
};
export type r_rapport_pr_intervenantCreateManyIntervenantInputEnvelope = {
    data: Prisma.r_rapport_pr_intervenantCreateManyIntervenantInput | Prisma.r_rapport_pr_intervenantCreateManyIntervenantInput[];
    skipDuplicates?: boolean;
};
export type r_rapport_pr_intervenantUpsertWithWhereUniqueWithoutIntervenantInput = {
    where: Prisma.r_rapport_pr_intervenantWhereUniqueInput;
    update: Prisma.XOR<Prisma.r_rapport_pr_intervenantUpdateWithoutIntervenantInput, Prisma.r_rapport_pr_intervenantUncheckedUpdateWithoutIntervenantInput>;
    create: Prisma.XOR<Prisma.r_rapport_pr_intervenantCreateWithoutIntervenantInput, Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutIntervenantInput>;
};
export type r_rapport_pr_intervenantUpdateWithWhereUniqueWithoutIntervenantInput = {
    where: Prisma.r_rapport_pr_intervenantWhereUniqueInput;
    data: Prisma.XOR<Prisma.r_rapport_pr_intervenantUpdateWithoutIntervenantInput, Prisma.r_rapport_pr_intervenantUncheckedUpdateWithoutIntervenantInput>;
};
export type r_rapport_pr_intervenantUpdateManyWithWhereWithoutIntervenantInput = {
    where: Prisma.r_rapport_pr_intervenantScalarWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_pr_intervenantUpdateManyMutationInput, Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutIntervenantInput>;
};
export type r_rapport_pr_intervenantScalarWhereInput = {
    AND?: Prisma.r_rapport_pr_intervenantScalarWhereInput | Prisma.r_rapport_pr_intervenantScalarWhereInput[];
    OR?: Prisma.r_rapport_pr_intervenantScalarWhereInput[];
    NOT?: Prisma.r_rapport_pr_intervenantScalarWhereInput | Prisma.r_rapport_pr_intervenantScalarWhereInput[];
    id?: Prisma.IntFilter<"r_rapport_pr_intervenant"> | number;
    rapport_id?: Prisma.IntFilter<"r_rapport_pr_intervenant"> | number;
    intervenant_id?: Prisma.IntFilter<"r_rapport_pr_intervenant"> | number;
    role?: Prisma.StringNullableFilter<"r_rapport_pr_intervenant"> | string | null;
};
export type r_rapport_pr_intervenantCreateWithoutRapportInput = {
    role?: string | null;
    intervenant: Prisma.intervenant_prCreateNestedOneWithoutR_rapport_pr_intervenantInput;
};
export type r_rapport_pr_intervenantUncheckedCreateWithoutRapportInput = {
    id?: number;
    intervenant_id: number;
    role?: string | null;
};
export type r_rapport_pr_intervenantCreateOrConnectWithoutRapportInput = {
    where: Prisma.r_rapport_pr_intervenantWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_pr_intervenantCreateWithoutRapportInput, Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutRapportInput>;
};
export type r_rapport_pr_intervenantCreateManyRapportInputEnvelope = {
    data: Prisma.r_rapport_pr_intervenantCreateManyRapportInput | Prisma.r_rapport_pr_intervenantCreateManyRapportInput[];
    skipDuplicates?: boolean;
};
export type r_rapport_pr_intervenantUpsertWithWhereUniqueWithoutRapportInput = {
    where: Prisma.r_rapport_pr_intervenantWhereUniqueInput;
    update: Prisma.XOR<Prisma.r_rapport_pr_intervenantUpdateWithoutRapportInput, Prisma.r_rapport_pr_intervenantUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.r_rapport_pr_intervenantCreateWithoutRapportInput, Prisma.r_rapport_pr_intervenantUncheckedCreateWithoutRapportInput>;
};
export type r_rapport_pr_intervenantUpdateWithWhereUniqueWithoutRapportInput = {
    where: Prisma.r_rapport_pr_intervenantWhereUniqueInput;
    data: Prisma.XOR<Prisma.r_rapport_pr_intervenantUpdateWithoutRapportInput, Prisma.r_rapport_pr_intervenantUncheckedUpdateWithoutRapportInput>;
};
export type r_rapport_pr_intervenantUpdateManyWithWhereWithoutRapportInput = {
    where: Prisma.r_rapport_pr_intervenantScalarWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_pr_intervenantUpdateManyMutationInput, Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportInput>;
};
export type r_rapport_pr_intervenantCreateManyIntervenantInput = {
    id?: number;
    rapport_id: number;
    role?: string | null;
};
export type r_rapport_pr_intervenantUpdateWithoutIntervenantInput = {
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutR_rapport_pr_intervenantNestedInput;
};
export type r_rapport_pr_intervenantUncheckedUpdateWithoutIntervenantInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type r_rapport_pr_intervenantUncheckedUpdateManyWithoutIntervenantInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type r_rapport_pr_intervenantCreateManyRapportInput = {
    id?: number;
    intervenant_id: number;
    role?: string | null;
};
export type r_rapport_pr_intervenantUpdateWithoutRapportInput = {
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    intervenant?: Prisma.intervenant_prUpdateOneRequiredWithoutR_rapport_pr_intervenantNestedInput;
};
export type r_rapport_pr_intervenantUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    intervenant_id?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    intervenant_id?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type r_rapport_pr_intervenantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    intervenant_id?: boolean;
    role?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    intervenant?: boolean | Prisma.intervenant_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["r_rapport_pr_intervenant"]>;
export type r_rapport_pr_intervenantSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    intervenant_id?: boolean;
    role?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    intervenant?: boolean | Prisma.intervenant_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["r_rapport_pr_intervenant"]>;
export type r_rapport_pr_intervenantSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    intervenant_id?: boolean;
    role?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    intervenant?: boolean | Prisma.intervenant_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["r_rapport_pr_intervenant"]>;
export type r_rapport_pr_intervenantSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    intervenant_id?: boolean;
    role?: boolean;
};
export type r_rapport_pr_intervenantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "intervenant_id" | "role", ExtArgs["result"]["r_rapport_pr_intervenant"]>;
export type r_rapport_pr_intervenantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    intervenant?: boolean | Prisma.intervenant_prDefaultArgs<ExtArgs>;
};
export type r_rapport_pr_intervenantIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    intervenant?: boolean | Prisma.intervenant_prDefaultArgs<ExtArgs>;
};
export type r_rapport_pr_intervenantIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    intervenant?: boolean | Prisma.intervenant_prDefaultArgs<ExtArgs>;
};
export type $r_rapport_pr_intervenantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "r_rapport_pr_intervenant";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
        intervenant: Prisma.$intervenant_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        intervenant_id: number;
        role: string | null;
    }, ExtArgs["result"]["r_rapport_pr_intervenant"]>;
    composites: {};
};
export type r_rapport_pr_intervenantGetPayload<S extends boolean | null | undefined | r_rapport_pr_intervenantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$r_rapport_pr_intervenantPayload, S>;
export type r_rapport_pr_intervenantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<r_rapport_pr_intervenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: R_rapport_pr_intervenantCountAggregateInputType | true;
};
export interface r_rapport_pr_intervenantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['r_rapport_pr_intervenant'];
        meta: {
            name: 'r_rapport_pr_intervenant';
        };
    };
    /**
     * Find zero or one R_rapport_pr_intervenant that matches the filter.
     * @param {r_rapport_pr_intervenantFindUniqueArgs} args - Arguments to find a R_rapport_pr_intervenant
     * @example
     * // Get one R_rapport_pr_intervenant
     * const r_rapport_pr_intervenant = await prisma.r_rapport_pr_intervenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends r_rapport_pr_intervenantFindUniqueArgs>(args: Prisma.SelectSubset<T, r_rapport_pr_intervenantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__r_rapport_pr_intervenantClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_pr_intervenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one R_rapport_pr_intervenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {r_rapport_pr_intervenantFindUniqueOrThrowArgs} args - Arguments to find a R_rapport_pr_intervenant
     * @example
     * // Get one R_rapport_pr_intervenant
     * const r_rapport_pr_intervenant = await prisma.r_rapport_pr_intervenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends r_rapport_pr_intervenantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, r_rapport_pr_intervenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__r_rapport_pr_intervenantClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_pr_intervenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first R_rapport_pr_intervenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {r_rapport_pr_intervenantFindFirstArgs} args - Arguments to find a R_rapport_pr_intervenant
     * @example
     * // Get one R_rapport_pr_intervenant
     * const r_rapport_pr_intervenant = await prisma.r_rapport_pr_intervenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends r_rapport_pr_intervenantFindFirstArgs>(args?: Prisma.SelectSubset<T, r_rapport_pr_intervenantFindFirstArgs<ExtArgs>>): Prisma.Prisma__r_rapport_pr_intervenantClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_pr_intervenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first R_rapport_pr_intervenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {r_rapport_pr_intervenantFindFirstOrThrowArgs} args - Arguments to find a R_rapport_pr_intervenant
     * @example
     * // Get one R_rapport_pr_intervenant
     * const r_rapport_pr_intervenant = await prisma.r_rapport_pr_intervenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends r_rapport_pr_intervenantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, r_rapport_pr_intervenantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__r_rapport_pr_intervenantClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_pr_intervenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more R_rapport_pr_intervenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {r_rapport_pr_intervenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all R_rapport_pr_intervenants
     * const r_rapport_pr_intervenants = await prisma.r_rapport_pr_intervenant.findMany()
     *
     * // Get first 10 R_rapport_pr_intervenants
     * const r_rapport_pr_intervenants = await prisma.r_rapport_pr_intervenant.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const r_rapport_pr_intervenantWithIdOnly = await prisma.r_rapport_pr_intervenant.findMany({ select: { id: true } })
     *
     */
    findMany<T extends r_rapport_pr_intervenantFindManyArgs>(args?: Prisma.SelectSubset<T, r_rapport_pr_intervenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$r_rapport_pr_intervenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a R_rapport_pr_intervenant.
     * @param {r_rapport_pr_intervenantCreateArgs} args - Arguments to create a R_rapport_pr_intervenant.
     * @example
     * // Create one R_rapport_pr_intervenant
     * const R_rapport_pr_intervenant = await prisma.r_rapport_pr_intervenant.create({
     *   data: {
     *     // ... data to create a R_rapport_pr_intervenant
     *   }
     * })
     *
     */
    create<T extends r_rapport_pr_intervenantCreateArgs>(args: Prisma.SelectSubset<T, r_rapport_pr_intervenantCreateArgs<ExtArgs>>): Prisma.Prisma__r_rapport_pr_intervenantClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_pr_intervenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many R_rapport_pr_intervenants.
     * @param {r_rapport_pr_intervenantCreateManyArgs} args - Arguments to create many R_rapport_pr_intervenants.
     * @example
     * // Create many R_rapport_pr_intervenants
     * const r_rapport_pr_intervenant = await prisma.r_rapport_pr_intervenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends r_rapport_pr_intervenantCreateManyArgs>(args?: Prisma.SelectSubset<T, r_rapport_pr_intervenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many R_rapport_pr_intervenants and returns the data saved in the database.
     * @param {r_rapport_pr_intervenantCreateManyAndReturnArgs} args - Arguments to create many R_rapport_pr_intervenants.
     * @example
     * // Create many R_rapport_pr_intervenants
     * const r_rapport_pr_intervenant = await prisma.r_rapport_pr_intervenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many R_rapport_pr_intervenants and only return the `id`
     * const r_rapport_pr_intervenantWithIdOnly = await prisma.r_rapport_pr_intervenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends r_rapport_pr_intervenantCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, r_rapport_pr_intervenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$r_rapport_pr_intervenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a R_rapport_pr_intervenant.
     * @param {r_rapport_pr_intervenantDeleteArgs} args - Arguments to delete one R_rapport_pr_intervenant.
     * @example
     * // Delete one R_rapport_pr_intervenant
     * const R_rapport_pr_intervenant = await prisma.r_rapport_pr_intervenant.delete({
     *   where: {
     *     // ... filter to delete one R_rapport_pr_intervenant
     *   }
     * })
     *
     */
    delete<T extends r_rapport_pr_intervenantDeleteArgs>(args: Prisma.SelectSubset<T, r_rapport_pr_intervenantDeleteArgs<ExtArgs>>): Prisma.Prisma__r_rapport_pr_intervenantClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_pr_intervenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one R_rapport_pr_intervenant.
     * @param {r_rapport_pr_intervenantUpdateArgs} args - Arguments to update one R_rapport_pr_intervenant.
     * @example
     * // Update one R_rapport_pr_intervenant
     * const r_rapport_pr_intervenant = await prisma.r_rapport_pr_intervenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends r_rapport_pr_intervenantUpdateArgs>(args: Prisma.SelectSubset<T, r_rapport_pr_intervenantUpdateArgs<ExtArgs>>): Prisma.Prisma__r_rapport_pr_intervenantClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_pr_intervenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more R_rapport_pr_intervenants.
     * @param {r_rapport_pr_intervenantDeleteManyArgs} args - Arguments to filter R_rapport_pr_intervenants to delete.
     * @example
     * // Delete a few R_rapport_pr_intervenants
     * const { count } = await prisma.r_rapport_pr_intervenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends r_rapport_pr_intervenantDeleteManyArgs>(args?: Prisma.SelectSubset<T, r_rapport_pr_intervenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more R_rapport_pr_intervenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {r_rapport_pr_intervenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many R_rapport_pr_intervenants
     * const r_rapport_pr_intervenant = await prisma.r_rapport_pr_intervenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends r_rapport_pr_intervenantUpdateManyArgs>(args: Prisma.SelectSubset<T, r_rapport_pr_intervenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more R_rapport_pr_intervenants and returns the data updated in the database.
     * @param {r_rapport_pr_intervenantUpdateManyAndReturnArgs} args - Arguments to update many R_rapport_pr_intervenants.
     * @example
     * // Update many R_rapport_pr_intervenants
     * const r_rapport_pr_intervenant = await prisma.r_rapport_pr_intervenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more R_rapport_pr_intervenants and only return the `id`
     * const r_rapport_pr_intervenantWithIdOnly = await prisma.r_rapport_pr_intervenant.updateManyAndReturn({
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
    updateManyAndReturn<T extends r_rapport_pr_intervenantUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, r_rapport_pr_intervenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$r_rapport_pr_intervenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one R_rapport_pr_intervenant.
     * @param {r_rapport_pr_intervenantUpsertArgs} args - Arguments to update or create a R_rapport_pr_intervenant.
     * @example
     * // Update or create a R_rapport_pr_intervenant
     * const r_rapport_pr_intervenant = await prisma.r_rapport_pr_intervenant.upsert({
     *   create: {
     *     // ... data to create a R_rapport_pr_intervenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the R_rapport_pr_intervenant we want to update
     *   }
     * })
     */
    upsert<T extends r_rapport_pr_intervenantUpsertArgs>(args: Prisma.SelectSubset<T, r_rapport_pr_intervenantUpsertArgs<ExtArgs>>): Prisma.Prisma__r_rapport_pr_intervenantClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_pr_intervenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of R_rapport_pr_intervenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {r_rapport_pr_intervenantCountArgs} args - Arguments to filter R_rapport_pr_intervenants to count.
     * @example
     * // Count the number of R_rapport_pr_intervenants
     * const count = await prisma.r_rapport_pr_intervenant.count({
     *   where: {
     *     // ... the filter for the R_rapport_pr_intervenants we want to count
     *   }
     * })
    **/
    count<T extends r_rapport_pr_intervenantCountArgs>(args?: Prisma.Subset<T, r_rapport_pr_intervenantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], R_rapport_pr_intervenantCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a R_rapport_pr_intervenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {R_rapport_pr_intervenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends R_rapport_pr_intervenantAggregateArgs>(args: Prisma.Subset<T, R_rapport_pr_intervenantAggregateArgs>): Prisma.PrismaPromise<GetR_rapport_pr_intervenantAggregateType<T>>;
    /**
     * Group by R_rapport_pr_intervenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {r_rapport_pr_intervenantGroupByArgs} args - Group by arguments.
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
    groupBy<T extends r_rapport_pr_intervenantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: r_rapport_pr_intervenantGroupByArgs['orderBy'];
    } : {
        orderBy?: r_rapport_pr_intervenantGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, r_rapport_pr_intervenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetR_rapport_pr_intervenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the r_rapport_pr_intervenant model
     */
    readonly fields: r_rapport_pr_intervenantFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for r_rapport_pr_intervenant.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__r_rapport_pr_intervenantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rapport<T extends Prisma.r_rapport_prDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_prDefaultArgs<ExtArgs>>): Prisma.Prisma__r_rapport_prClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    intervenant<T extends Prisma.intervenant_prDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.intervenant_prDefaultArgs<ExtArgs>>): Prisma.Prisma__intervenant_prClient<runtime.Types.Result.GetResult<Prisma.$intervenant_prPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the r_rapport_pr_intervenant model
 */
export interface r_rapport_pr_intervenantFieldRefs {
    readonly id: Prisma.FieldRef<"r_rapport_pr_intervenant", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"r_rapport_pr_intervenant", 'Int'>;
    readonly intervenant_id: Prisma.FieldRef<"r_rapport_pr_intervenant", 'Int'>;
    readonly role: Prisma.FieldRef<"r_rapport_pr_intervenant", 'String'>;
}
/**
 * r_rapport_pr_intervenant findUnique
 */
export type r_rapport_pr_intervenantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr_intervenant
     */
    select?: Prisma.r_rapport_pr_intervenantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr_intervenant
     */
    omit?: Prisma.r_rapport_pr_intervenantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_pr_intervenantInclude<ExtArgs> | null;
    /**
     * Filter, which r_rapport_pr_intervenant to fetch.
     */
    where: Prisma.r_rapport_pr_intervenantWhereUniqueInput;
};
/**
 * r_rapport_pr_intervenant findUniqueOrThrow
 */
export type r_rapport_pr_intervenantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr_intervenant
     */
    select?: Prisma.r_rapport_pr_intervenantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr_intervenant
     */
    omit?: Prisma.r_rapport_pr_intervenantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_pr_intervenantInclude<ExtArgs> | null;
    /**
     * Filter, which r_rapport_pr_intervenant to fetch.
     */
    where: Prisma.r_rapport_pr_intervenantWhereUniqueInput;
};
/**
 * r_rapport_pr_intervenant findFirst
 */
export type r_rapport_pr_intervenantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr_intervenant
     */
    select?: Prisma.r_rapport_pr_intervenantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr_intervenant
     */
    omit?: Prisma.r_rapport_pr_intervenantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_pr_intervenantInclude<ExtArgs> | null;
    /**
     * Filter, which r_rapport_pr_intervenant to fetch.
     */
    where?: Prisma.r_rapport_pr_intervenantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of r_rapport_pr_intervenants to fetch.
     */
    orderBy?: Prisma.r_rapport_pr_intervenantOrderByWithRelationInput | Prisma.r_rapport_pr_intervenantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for r_rapport_pr_intervenants.
     */
    cursor?: Prisma.r_rapport_pr_intervenantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` r_rapport_pr_intervenants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` r_rapport_pr_intervenants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of r_rapport_pr_intervenants.
     */
    distinct?: Prisma.R_rapport_pr_intervenantScalarFieldEnum | Prisma.R_rapport_pr_intervenantScalarFieldEnum[];
};
/**
 * r_rapport_pr_intervenant findFirstOrThrow
 */
export type r_rapport_pr_intervenantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr_intervenant
     */
    select?: Prisma.r_rapport_pr_intervenantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr_intervenant
     */
    omit?: Prisma.r_rapport_pr_intervenantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_pr_intervenantInclude<ExtArgs> | null;
    /**
     * Filter, which r_rapport_pr_intervenant to fetch.
     */
    where?: Prisma.r_rapport_pr_intervenantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of r_rapport_pr_intervenants to fetch.
     */
    orderBy?: Prisma.r_rapport_pr_intervenantOrderByWithRelationInput | Prisma.r_rapport_pr_intervenantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for r_rapport_pr_intervenants.
     */
    cursor?: Prisma.r_rapport_pr_intervenantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` r_rapport_pr_intervenants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` r_rapport_pr_intervenants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of r_rapport_pr_intervenants.
     */
    distinct?: Prisma.R_rapport_pr_intervenantScalarFieldEnum | Prisma.R_rapport_pr_intervenantScalarFieldEnum[];
};
/**
 * r_rapport_pr_intervenant findMany
 */
export type r_rapport_pr_intervenantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr_intervenant
     */
    select?: Prisma.r_rapport_pr_intervenantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr_intervenant
     */
    omit?: Prisma.r_rapport_pr_intervenantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_pr_intervenantInclude<ExtArgs> | null;
    /**
     * Filter, which r_rapport_pr_intervenants to fetch.
     */
    where?: Prisma.r_rapport_pr_intervenantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of r_rapport_pr_intervenants to fetch.
     */
    orderBy?: Prisma.r_rapport_pr_intervenantOrderByWithRelationInput | Prisma.r_rapport_pr_intervenantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing r_rapport_pr_intervenants.
     */
    cursor?: Prisma.r_rapport_pr_intervenantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` r_rapport_pr_intervenants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` r_rapport_pr_intervenants.
     */
    skip?: number;
    distinct?: Prisma.R_rapport_pr_intervenantScalarFieldEnum | Prisma.R_rapport_pr_intervenantScalarFieldEnum[];
};
/**
 * r_rapport_pr_intervenant create
 */
export type r_rapport_pr_intervenantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr_intervenant
     */
    select?: Prisma.r_rapport_pr_intervenantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr_intervenant
     */
    omit?: Prisma.r_rapport_pr_intervenantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_pr_intervenantInclude<ExtArgs> | null;
    /**
     * The data needed to create a r_rapport_pr_intervenant.
     */
    data: Prisma.XOR<Prisma.r_rapport_pr_intervenantCreateInput, Prisma.r_rapport_pr_intervenantUncheckedCreateInput>;
};
/**
 * r_rapport_pr_intervenant createMany
 */
export type r_rapport_pr_intervenantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many r_rapport_pr_intervenants.
     */
    data: Prisma.r_rapport_pr_intervenantCreateManyInput | Prisma.r_rapport_pr_intervenantCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * r_rapport_pr_intervenant createManyAndReturn
 */
export type r_rapport_pr_intervenantCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr_intervenant
     */
    select?: Prisma.r_rapport_pr_intervenantSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr_intervenant
     */
    omit?: Prisma.r_rapport_pr_intervenantOmit<ExtArgs> | null;
    /**
     * The data used to create many r_rapport_pr_intervenants.
     */
    data: Prisma.r_rapport_pr_intervenantCreateManyInput | Prisma.r_rapport_pr_intervenantCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_pr_intervenantIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * r_rapport_pr_intervenant update
 */
export type r_rapport_pr_intervenantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr_intervenant
     */
    select?: Prisma.r_rapport_pr_intervenantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr_intervenant
     */
    omit?: Prisma.r_rapport_pr_intervenantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_pr_intervenantInclude<ExtArgs> | null;
    /**
     * The data needed to update a r_rapport_pr_intervenant.
     */
    data: Prisma.XOR<Prisma.r_rapport_pr_intervenantUpdateInput, Prisma.r_rapport_pr_intervenantUncheckedUpdateInput>;
    /**
     * Choose, which r_rapport_pr_intervenant to update.
     */
    where: Prisma.r_rapport_pr_intervenantWhereUniqueInput;
};
/**
 * r_rapport_pr_intervenant updateMany
 */
export type r_rapport_pr_intervenantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update r_rapport_pr_intervenants.
     */
    data: Prisma.XOR<Prisma.r_rapport_pr_intervenantUpdateManyMutationInput, Prisma.r_rapport_pr_intervenantUncheckedUpdateManyInput>;
    /**
     * Filter which r_rapport_pr_intervenants to update
     */
    where?: Prisma.r_rapport_pr_intervenantWhereInput;
    /**
     * Limit how many r_rapport_pr_intervenants to update.
     */
    limit?: number;
};
/**
 * r_rapport_pr_intervenant updateManyAndReturn
 */
export type r_rapport_pr_intervenantUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr_intervenant
     */
    select?: Prisma.r_rapport_pr_intervenantSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr_intervenant
     */
    omit?: Prisma.r_rapport_pr_intervenantOmit<ExtArgs> | null;
    /**
     * The data used to update r_rapport_pr_intervenants.
     */
    data: Prisma.XOR<Prisma.r_rapport_pr_intervenantUpdateManyMutationInput, Prisma.r_rapport_pr_intervenantUncheckedUpdateManyInput>;
    /**
     * Filter which r_rapport_pr_intervenants to update
     */
    where?: Prisma.r_rapport_pr_intervenantWhereInput;
    /**
     * Limit how many r_rapport_pr_intervenants to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_pr_intervenantIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * r_rapport_pr_intervenant upsert
 */
export type r_rapport_pr_intervenantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr_intervenant
     */
    select?: Prisma.r_rapport_pr_intervenantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr_intervenant
     */
    omit?: Prisma.r_rapport_pr_intervenantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_pr_intervenantInclude<ExtArgs> | null;
    /**
     * The filter to search for the r_rapport_pr_intervenant to update in case it exists.
     */
    where: Prisma.r_rapport_pr_intervenantWhereUniqueInput;
    /**
     * In case the r_rapport_pr_intervenant found by the `where` argument doesn't exist, create a new r_rapport_pr_intervenant with this data.
     */
    create: Prisma.XOR<Prisma.r_rapport_pr_intervenantCreateInput, Prisma.r_rapport_pr_intervenantUncheckedCreateInput>;
    /**
     * In case the r_rapport_pr_intervenant was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.r_rapport_pr_intervenantUpdateInput, Prisma.r_rapport_pr_intervenantUncheckedUpdateInput>;
};
/**
 * r_rapport_pr_intervenant delete
 */
export type r_rapport_pr_intervenantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr_intervenant
     */
    select?: Prisma.r_rapport_pr_intervenantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr_intervenant
     */
    omit?: Prisma.r_rapport_pr_intervenantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_pr_intervenantInclude<ExtArgs> | null;
    /**
     * Filter which r_rapport_pr_intervenant to delete.
     */
    where: Prisma.r_rapport_pr_intervenantWhereUniqueInput;
};
/**
 * r_rapport_pr_intervenant deleteMany
 */
export type r_rapport_pr_intervenantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which r_rapport_pr_intervenants to delete
     */
    where?: Prisma.r_rapport_pr_intervenantWhereInput;
    /**
     * Limit how many r_rapport_pr_intervenants to delete.
     */
    limit?: number;
};
/**
 * r_rapport_pr_intervenant without action
 */
export type r_rapport_pr_intervenantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr_intervenant
     */
    select?: Prisma.r_rapport_pr_intervenantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr_intervenant
     */
    omit?: Prisma.r_rapport_pr_intervenantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_pr_intervenantInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=r_rapport_pr_intervenant.d.ts.map