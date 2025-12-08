import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s10_trauma_constat
 *
 */
export type s10_trauma_constatModel = runtime.Types.Result.DefaultSelection<Prisma.$s10_trauma_constatPayload>;
export type AggregateS10_trauma_constat = {
    _count: S10_trauma_constatCountAggregateOutputType | null;
    _avg: S10_trauma_constatAvgAggregateOutputType | null;
    _sum: S10_trauma_constatSumAggregateOutputType | null;
    _min: S10_trauma_constatMinAggregateOutputType | null;
    _max: S10_trauma_constatMaxAggregateOutputType | null;
};
export type S10_trauma_constatAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    zone_id: number | null;
    lesion_type_id: number | null;
};
export type S10_trauma_constatSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    zone_id: number | null;
    lesion_type_id: number | null;
};
export type S10_trauma_constatMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    zone_id: number | null;
    lesion_type_id: number | null;
    commentaire: string | null;
};
export type S10_trauma_constatMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    zone_id: number | null;
    lesion_type_id: number | null;
    commentaire: string | null;
};
export type S10_trauma_constatCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    zone_id: number;
    lesion_type_id: number;
    commentaire: number;
    _all: number;
};
export type S10_trauma_constatAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
    zone_id?: true;
    lesion_type_id?: true;
};
export type S10_trauma_constatSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
    zone_id?: true;
    lesion_type_id?: true;
};
export type S10_trauma_constatMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    zone_id?: true;
    lesion_type_id?: true;
    commentaire?: true;
};
export type S10_trauma_constatMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    zone_id?: true;
    lesion_type_id?: true;
    commentaire?: true;
};
export type S10_trauma_constatCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    zone_id?: true;
    lesion_type_id?: true;
    commentaire?: true;
    _all?: true;
};
export type S10_trauma_constatAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s10_trauma_constat to aggregate.
     */
    where?: Prisma.s10_trauma_constatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s10_trauma_constats to fetch.
     */
    orderBy?: Prisma.s10_trauma_constatOrderByWithRelationInput | Prisma.s10_trauma_constatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s10_trauma_constatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s10_trauma_constats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s10_trauma_constats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s10_trauma_constats
    **/
    _count?: true | S10_trauma_constatCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S10_trauma_constatAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S10_trauma_constatSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S10_trauma_constatMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S10_trauma_constatMaxAggregateInputType;
};
export type GetS10_trauma_constatAggregateType<T extends S10_trauma_constatAggregateArgs> = {
    [P in keyof T & keyof AggregateS10_trauma_constat]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS10_trauma_constat[P]> : Prisma.GetScalarType<T[P], AggregateS10_trauma_constat[P]>;
};
export type s10_trauma_constatGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s10_trauma_constatWhereInput;
    orderBy?: Prisma.s10_trauma_constatOrderByWithAggregationInput | Prisma.s10_trauma_constatOrderByWithAggregationInput[];
    by: Prisma.S10_trauma_constatScalarFieldEnum[] | Prisma.S10_trauma_constatScalarFieldEnum;
    having?: Prisma.s10_trauma_constatScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S10_trauma_constatCountAggregateInputType | true;
    _avg?: S10_trauma_constatAvgAggregateInputType;
    _sum?: S10_trauma_constatSumAggregateInputType;
    _min?: S10_trauma_constatMinAggregateInputType;
    _max?: S10_trauma_constatMaxAggregateInputType;
};
export type S10_trauma_constatGroupByOutputType = {
    id: number;
    rapport_id: number;
    zone_id: number;
    lesion_type_id: number;
    commentaire: string | null;
    _count: S10_trauma_constatCountAggregateOutputType | null;
    _avg: S10_trauma_constatAvgAggregateOutputType | null;
    _sum: S10_trauma_constatSumAggregateOutputType | null;
    _min: S10_trauma_constatMinAggregateOutputType | null;
    _max: S10_trauma_constatMaxAggregateOutputType | null;
};
type GetS10_trauma_constatGroupByPayload<T extends s10_trauma_constatGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S10_trauma_constatGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S10_trauma_constatGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S10_trauma_constatGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S10_trauma_constatGroupByOutputType[P]>;
}>>;
export type s10_trauma_constatWhereInput = {
    AND?: Prisma.s10_trauma_constatWhereInput | Prisma.s10_trauma_constatWhereInput[];
    OR?: Prisma.s10_trauma_constatWhereInput[];
    NOT?: Prisma.s10_trauma_constatWhereInput | Prisma.s10_trauma_constatWhereInput[];
    id?: Prisma.IntFilter<"s10_trauma_constat"> | number;
    rapport_id?: Prisma.IntFilter<"s10_trauma_constat"> | number;
    zone_id?: Prisma.IntFilter<"s10_trauma_constat"> | number;
    lesion_type_id?: Prisma.IntFilter<"s10_trauma_constat"> | number;
    commentaire?: Prisma.StringNullableFilter<"s10_trauma_constat"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
    zone?: Prisma.XOR<Prisma.S10_trauma_zone_typeScalarRelationFilter, Prisma.s10_trauma_zone_typeWhereInput>;
    lesion_type?: Prisma.XOR<Prisma.S10_trauma_lesion_typeScalarRelationFilter, Prisma.s10_trauma_lesion_typeWhereInput>;
};
export type s10_trauma_constatOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    zone_id?: Prisma.SortOrder;
    lesion_type_id?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
    zone?: Prisma.s10_trauma_zone_typeOrderByWithRelationInput;
    lesion_type?: Prisma.s10_trauma_lesion_typeOrderByWithRelationInput;
};
export type s10_trauma_constatWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id_zone_id_lesion_type_id?: Prisma.s10_trauma_constatRapport_idZone_idLesion_type_idCompoundUniqueInput;
    AND?: Prisma.s10_trauma_constatWhereInput | Prisma.s10_trauma_constatWhereInput[];
    OR?: Prisma.s10_trauma_constatWhereInput[];
    NOT?: Prisma.s10_trauma_constatWhereInput | Prisma.s10_trauma_constatWhereInput[];
    rapport_id?: Prisma.IntFilter<"s10_trauma_constat"> | number;
    zone_id?: Prisma.IntFilter<"s10_trauma_constat"> | number;
    lesion_type_id?: Prisma.IntFilter<"s10_trauma_constat"> | number;
    commentaire?: Prisma.StringNullableFilter<"s10_trauma_constat"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
    zone?: Prisma.XOR<Prisma.S10_trauma_zone_typeScalarRelationFilter, Prisma.s10_trauma_zone_typeWhereInput>;
    lesion_type?: Prisma.XOR<Prisma.S10_trauma_lesion_typeScalarRelationFilter, Prisma.s10_trauma_lesion_typeWhereInput>;
}, "id" | "rapport_id_zone_id_lesion_type_id">;
export type s10_trauma_constatOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    zone_id?: Prisma.SortOrder;
    lesion_type_id?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s10_trauma_constatCountOrderByAggregateInput;
    _avg?: Prisma.s10_trauma_constatAvgOrderByAggregateInput;
    _max?: Prisma.s10_trauma_constatMaxOrderByAggregateInput;
    _min?: Prisma.s10_trauma_constatMinOrderByAggregateInput;
    _sum?: Prisma.s10_trauma_constatSumOrderByAggregateInput;
};
export type s10_trauma_constatScalarWhereWithAggregatesInput = {
    AND?: Prisma.s10_trauma_constatScalarWhereWithAggregatesInput | Prisma.s10_trauma_constatScalarWhereWithAggregatesInput[];
    OR?: Prisma.s10_trauma_constatScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s10_trauma_constatScalarWhereWithAggregatesInput | Prisma.s10_trauma_constatScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s10_trauma_constat"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s10_trauma_constat"> | number;
    zone_id?: Prisma.IntWithAggregatesFilter<"s10_trauma_constat"> | number;
    lesion_type_id?: Prisma.IntWithAggregatesFilter<"s10_trauma_constat"> | number;
    commentaire?: Prisma.StringNullableWithAggregatesFilter<"s10_trauma_constat"> | string | null;
};
export type s10_trauma_constatCreateInput = {
    commentaire?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS10_trauma_constatInput;
    zone: Prisma.s10_trauma_zone_typeCreateNestedOneWithoutConstatsInput;
    lesion_type: Prisma.s10_trauma_lesion_typeCreateNestedOneWithoutConstatsInput;
};
export type s10_trauma_constatUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    zone_id: number;
    lesion_type_id: number;
    commentaire?: string | null;
};
export type s10_trauma_constatUpdateInput = {
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS10_trauma_constatNestedInput;
    zone?: Prisma.s10_trauma_zone_typeUpdateOneRequiredWithoutConstatsNestedInput;
    lesion_type?: Prisma.s10_trauma_lesion_typeUpdateOneRequiredWithoutConstatsNestedInput;
};
export type s10_trauma_constatUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    zone_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesion_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s10_trauma_constatCreateManyInput = {
    id?: number;
    rapport_id: number;
    zone_id: number;
    lesion_type_id: number;
    commentaire?: string | null;
};
export type s10_trauma_constatUpdateManyMutationInput = {
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s10_trauma_constatUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    zone_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesion_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type S10_trauma_constatListRelationFilter = {
    every?: Prisma.s10_trauma_constatWhereInput;
    some?: Prisma.s10_trauma_constatWhereInput;
    none?: Prisma.s10_trauma_constatWhereInput;
};
export type s10_trauma_constatOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type s10_trauma_constatRapport_idZone_idLesion_type_idCompoundUniqueInput = {
    rapport_id: number;
    zone_id: number;
    lesion_type_id: number;
};
export type s10_trauma_constatCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    zone_id?: Prisma.SortOrder;
    lesion_type_id?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
};
export type s10_trauma_constatAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    zone_id?: Prisma.SortOrder;
    lesion_type_id?: Prisma.SortOrder;
};
export type s10_trauma_constatMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    zone_id?: Prisma.SortOrder;
    lesion_type_id?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
};
export type s10_trauma_constatMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    zone_id?: Prisma.SortOrder;
    lesion_type_id?: Prisma.SortOrder;
    commentaire?: Prisma.SortOrder;
};
export type s10_trauma_constatSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    zone_id?: Prisma.SortOrder;
    lesion_type_id?: Prisma.SortOrder;
};
export type s10_trauma_constatCreateNestedManyWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s10_trauma_constatCreateWithoutRapportInput, Prisma.s10_trauma_constatUncheckedCreateWithoutRapportInput> | Prisma.s10_trauma_constatCreateWithoutRapportInput[] | Prisma.s10_trauma_constatUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s10_trauma_constatCreateOrConnectWithoutRapportInput | Prisma.s10_trauma_constatCreateOrConnectWithoutRapportInput[];
    createMany?: Prisma.s10_trauma_constatCreateManyRapportInputEnvelope;
    connect?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
};
export type s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s10_trauma_constatCreateWithoutRapportInput, Prisma.s10_trauma_constatUncheckedCreateWithoutRapportInput> | Prisma.s10_trauma_constatCreateWithoutRapportInput[] | Prisma.s10_trauma_constatUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s10_trauma_constatCreateOrConnectWithoutRapportInput | Prisma.s10_trauma_constatCreateOrConnectWithoutRapportInput[];
    createMany?: Prisma.s10_trauma_constatCreateManyRapportInputEnvelope;
    connect?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
};
export type s10_trauma_constatUpdateManyWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s10_trauma_constatCreateWithoutRapportInput, Prisma.s10_trauma_constatUncheckedCreateWithoutRapportInput> | Prisma.s10_trauma_constatCreateWithoutRapportInput[] | Prisma.s10_trauma_constatUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s10_trauma_constatCreateOrConnectWithoutRapportInput | Prisma.s10_trauma_constatCreateOrConnectWithoutRapportInput[];
    upsert?: Prisma.s10_trauma_constatUpsertWithWhereUniqueWithoutRapportInput | Prisma.s10_trauma_constatUpsertWithWhereUniqueWithoutRapportInput[];
    createMany?: Prisma.s10_trauma_constatCreateManyRapportInputEnvelope;
    set?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    disconnect?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    delete?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    connect?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    update?: Prisma.s10_trauma_constatUpdateWithWhereUniqueWithoutRapportInput | Prisma.s10_trauma_constatUpdateWithWhereUniqueWithoutRapportInput[];
    updateMany?: Prisma.s10_trauma_constatUpdateManyWithWhereWithoutRapportInput | Prisma.s10_trauma_constatUpdateManyWithWhereWithoutRapportInput[];
    deleteMany?: Prisma.s10_trauma_constatScalarWhereInput | Prisma.s10_trauma_constatScalarWhereInput[];
};
export type s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s10_trauma_constatCreateWithoutRapportInput, Prisma.s10_trauma_constatUncheckedCreateWithoutRapportInput> | Prisma.s10_trauma_constatCreateWithoutRapportInput[] | Prisma.s10_trauma_constatUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s10_trauma_constatCreateOrConnectWithoutRapportInput | Prisma.s10_trauma_constatCreateOrConnectWithoutRapportInput[];
    upsert?: Prisma.s10_trauma_constatUpsertWithWhereUniqueWithoutRapportInput | Prisma.s10_trauma_constatUpsertWithWhereUniqueWithoutRapportInput[];
    createMany?: Prisma.s10_trauma_constatCreateManyRapportInputEnvelope;
    set?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    disconnect?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    delete?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    connect?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    update?: Prisma.s10_trauma_constatUpdateWithWhereUniqueWithoutRapportInput | Prisma.s10_trauma_constatUpdateWithWhereUniqueWithoutRapportInput[];
    updateMany?: Prisma.s10_trauma_constatUpdateManyWithWhereWithoutRapportInput | Prisma.s10_trauma_constatUpdateManyWithWhereWithoutRapportInput[];
    deleteMany?: Prisma.s10_trauma_constatScalarWhereInput | Prisma.s10_trauma_constatScalarWhereInput[];
};
export type s10_trauma_constatCreateNestedManyWithoutZoneInput = {
    create?: Prisma.XOR<Prisma.s10_trauma_constatCreateWithoutZoneInput, Prisma.s10_trauma_constatUncheckedCreateWithoutZoneInput> | Prisma.s10_trauma_constatCreateWithoutZoneInput[] | Prisma.s10_trauma_constatUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.s10_trauma_constatCreateOrConnectWithoutZoneInput | Prisma.s10_trauma_constatCreateOrConnectWithoutZoneInput[];
    createMany?: Prisma.s10_trauma_constatCreateManyZoneInputEnvelope;
    connect?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
};
export type s10_trauma_constatUncheckedCreateNestedManyWithoutZoneInput = {
    create?: Prisma.XOR<Prisma.s10_trauma_constatCreateWithoutZoneInput, Prisma.s10_trauma_constatUncheckedCreateWithoutZoneInput> | Prisma.s10_trauma_constatCreateWithoutZoneInput[] | Prisma.s10_trauma_constatUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.s10_trauma_constatCreateOrConnectWithoutZoneInput | Prisma.s10_trauma_constatCreateOrConnectWithoutZoneInput[];
    createMany?: Prisma.s10_trauma_constatCreateManyZoneInputEnvelope;
    connect?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
};
export type s10_trauma_constatUpdateManyWithoutZoneNestedInput = {
    create?: Prisma.XOR<Prisma.s10_trauma_constatCreateWithoutZoneInput, Prisma.s10_trauma_constatUncheckedCreateWithoutZoneInput> | Prisma.s10_trauma_constatCreateWithoutZoneInput[] | Prisma.s10_trauma_constatUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.s10_trauma_constatCreateOrConnectWithoutZoneInput | Prisma.s10_trauma_constatCreateOrConnectWithoutZoneInput[];
    upsert?: Prisma.s10_trauma_constatUpsertWithWhereUniqueWithoutZoneInput | Prisma.s10_trauma_constatUpsertWithWhereUniqueWithoutZoneInput[];
    createMany?: Prisma.s10_trauma_constatCreateManyZoneInputEnvelope;
    set?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    disconnect?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    delete?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    connect?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    update?: Prisma.s10_trauma_constatUpdateWithWhereUniqueWithoutZoneInput | Prisma.s10_trauma_constatUpdateWithWhereUniqueWithoutZoneInput[];
    updateMany?: Prisma.s10_trauma_constatUpdateManyWithWhereWithoutZoneInput | Prisma.s10_trauma_constatUpdateManyWithWhereWithoutZoneInput[];
    deleteMany?: Prisma.s10_trauma_constatScalarWhereInput | Prisma.s10_trauma_constatScalarWhereInput[];
};
export type s10_trauma_constatUncheckedUpdateManyWithoutZoneNestedInput = {
    create?: Prisma.XOR<Prisma.s10_trauma_constatCreateWithoutZoneInput, Prisma.s10_trauma_constatUncheckedCreateWithoutZoneInput> | Prisma.s10_trauma_constatCreateWithoutZoneInput[] | Prisma.s10_trauma_constatUncheckedCreateWithoutZoneInput[];
    connectOrCreate?: Prisma.s10_trauma_constatCreateOrConnectWithoutZoneInput | Prisma.s10_trauma_constatCreateOrConnectWithoutZoneInput[];
    upsert?: Prisma.s10_trauma_constatUpsertWithWhereUniqueWithoutZoneInput | Prisma.s10_trauma_constatUpsertWithWhereUniqueWithoutZoneInput[];
    createMany?: Prisma.s10_trauma_constatCreateManyZoneInputEnvelope;
    set?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    disconnect?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    delete?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    connect?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    update?: Prisma.s10_trauma_constatUpdateWithWhereUniqueWithoutZoneInput | Prisma.s10_trauma_constatUpdateWithWhereUniqueWithoutZoneInput[];
    updateMany?: Prisma.s10_trauma_constatUpdateManyWithWhereWithoutZoneInput | Prisma.s10_trauma_constatUpdateManyWithWhereWithoutZoneInput[];
    deleteMany?: Prisma.s10_trauma_constatScalarWhereInput | Prisma.s10_trauma_constatScalarWhereInput[];
};
export type s10_trauma_constatCreateNestedManyWithoutLesion_typeInput = {
    create?: Prisma.XOR<Prisma.s10_trauma_constatCreateWithoutLesion_typeInput, Prisma.s10_trauma_constatUncheckedCreateWithoutLesion_typeInput> | Prisma.s10_trauma_constatCreateWithoutLesion_typeInput[] | Prisma.s10_trauma_constatUncheckedCreateWithoutLesion_typeInput[];
    connectOrCreate?: Prisma.s10_trauma_constatCreateOrConnectWithoutLesion_typeInput | Prisma.s10_trauma_constatCreateOrConnectWithoutLesion_typeInput[];
    createMany?: Prisma.s10_trauma_constatCreateManyLesion_typeInputEnvelope;
    connect?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
};
export type s10_trauma_constatUncheckedCreateNestedManyWithoutLesion_typeInput = {
    create?: Prisma.XOR<Prisma.s10_trauma_constatCreateWithoutLesion_typeInput, Prisma.s10_trauma_constatUncheckedCreateWithoutLesion_typeInput> | Prisma.s10_trauma_constatCreateWithoutLesion_typeInput[] | Prisma.s10_trauma_constatUncheckedCreateWithoutLesion_typeInput[];
    connectOrCreate?: Prisma.s10_trauma_constatCreateOrConnectWithoutLesion_typeInput | Prisma.s10_trauma_constatCreateOrConnectWithoutLesion_typeInput[];
    createMany?: Prisma.s10_trauma_constatCreateManyLesion_typeInputEnvelope;
    connect?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
};
export type s10_trauma_constatUpdateManyWithoutLesion_typeNestedInput = {
    create?: Prisma.XOR<Prisma.s10_trauma_constatCreateWithoutLesion_typeInput, Prisma.s10_trauma_constatUncheckedCreateWithoutLesion_typeInput> | Prisma.s10_trauma_constatCreateWithoutLesion_typeInput[] | Prisma.s10_trauma_constatUncheckedCreateWithoutLesion_typeInput[];
    connectOrCreate?: Prisma.s10_trauma_constatCreateOrConnectWithoutLesion_typeInput | Prisma.s10_trauma_constatCreateOrConnectWithoutLesion_typeInput[];
    upsert?: Prisma.s10_trauma_constatUpsertWithWhereUniqueWithoutLesion_typeInput | Prisma.s10_trauma_constatUpsertWithWhereUniqueWithoutLesion_typeInput[];
    createMany?: Prisma.s10_trauma_constatCreateManyLesion_typeInputEnvelope;
    set?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    disconnect?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    delete?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    connect?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    update?: Prisma.s10_trauma_constatUpdateWithWhereUniqueWithoutLesion_typeInput | Prisma.s10_trauma_constatUpdateWithWhereUniqueWithoutLesion_typeInput[];
    updateMany?: Prisma.s10_trauma_constatUpdateManyWithWhereWithoutLesion_typeInput | Prisma.s10_trauma_constatUpdateManyWithWhereWithoutLesion_typeInput[];
    deleteMany?: Prisma.s10_trauma_constatScalarWhereInput | Prisma.s10_trauma_constatScalarWhereInput[];
};
export type s10_trauma_constatUncheckedUpdateManyWithoutLesion_typeNestedInput = {
    create?: Prisma.XOR<Prisma.s10_trauma_constatCreateWithoutLesion_typeInput, Prisma.s10_trauma_constatUncheckedCreateWithoutLesion_typeInput> | Prisma.s10_trauma_constatCreateWithoutLesion_typeInput[] | Prisma.s10_trauma_constatUncheckedCreateWithoutLesion_typeInput[];
    connectOrCreate?: Prisma.s10_trauma_constatCreateOrConnectWithoutLesion_typeInput | Prisma.s10_trauma_constatCreateOrConnectWithoutLesion_typeInput[];
    upsert?: Prisma.s10_trauma_constatUpsertWithWhereUniqueWithoutLesion_typeInput | Prisma.s10_trauma_constatUpsertWithWhereUniqueWithoutLesion_typeInput[];
    createMany?: Prisma.s10_trauma_constatCreateManyLesion_typeInputEnvelope;
    set?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    disconnect?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    delete?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    connect?: Prisma.s10_trauma_constatWhereUniqueInput | Prisma.s10_trauma_constatWhereUniqueInput[];
    update?: Prisma.s10_trauma_constatUpdateWithWhereUniqueWithoutLesion_typeInput | Prisma.s10_trauma_constatUpdateWithWhereUniqueWithoutLesion_typeInput[];
    updateMany?: Prisma.s10_trauma_constatUpdateManyWithWhereWithoutLesion_typeInput | Prisma.s10_trauma_constatUpdateManyWithWhereWithoutLesion_typeInput[];
    deleteMany?: Prisma.s10_trauma_constatScalarWhereInput | Prisma.s10_trauma_constatScalarWhereInput[];
};
export type s10_trauma_constatCreateWithoutRapportInput = {
    commentaire?: string | null;
    zone: Prisma.s10_trauma_zone_typeCreateNestedOneWithoutConstatsInput;
    lesion_type: Prisma.s10_trauma_lesion_typeCreateNestedOneWithoutConstatsInput;
};
export type s10_trauma_constatUncheckedCreateWithoutRapportInput = {
    id?: number;
    zone_id: number;
    lesion_type_id: number;
    commentaire?: string | null;
};
export type s10_trauma_constatCreateOrConnectWithoutRapportInput = {
    where: Prisma.s10_trauma_constatWhereUniqueInput;
    create: Prisma.XOR<Prisma.s10_trauma_constatCreateWithoutRapportInput, Prisma.s10_trauma_constatUncheckedCreateWithoutRapportInput>;
};
export type s10_trauma_constatCreateManyRapportInputEnvelope = {
    data: Prisma.s10_trauma_constatCreateManyRapportInput | Prisma.s10_trauma_constatCreateManyRapportInput[];
    skipDuplicates?: boolean;
};
export type s10_trauma_constatUpsertWithWhereUniqueWithoutRapportInput = {
    where: Prisma.s10_trauma_constatWhereUniqueInput;
    update: Prisma.XOR<Prisma.s10_trauma_constatUpdateWithoutRapportInput, Prisma.s10_trauma_constatUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s10_trauma_constatCreateWithoutRapportInput, Prisma.s10_trauma_constatUncheckedCreateWithoutRapportInput>;
};
export type s10_trauma_constatUpdateWithWhereUniqueWithoutRapportInput = {
    where: Prisma.s10_trauma_constatWhereUniqueInput;
    data: Prisma.XOR<Prisma.s10_trauma_constatUpdateWithoutRapportInput, Prisma.s10_trauma_constatUncheckedUpdateWithoutRapportInput>;
};
export type s10_trauma_constatUpdateManyWithWhereWithoutRapportInput = {
    where: Prisma.s10_trauma_constatScalarWhereInput;
    data: Prisma.XOR<Prisma.s10_trauma_constatUpdateManyMutationInput, Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportInput>;
};
export type s10_trauma_constatScalarWhereInput = {
    AND?: Prisma.s10_trauma_constatScalarWhereInput | Prisma.s10_trauma_constatScalarWhereInput[];
    OR?: Prisma.s10_trauma_constatScalarWhereInput[];
    NOT?: Prisma.s10_trauma_constatScalarWhereInput | Prisma.s10_trauma_constatScalarWhereInput[];
    id?: Prisma.IntFilter<"s10_trauma_constat"> | number;
    rapport_id?: Prisma.IntFilter<"s10_trauma_constat"> | number;
    zone_id?: Prisma.IntFilter<"s10_trauma_constat"> | number;
    lesion_type_id?: Prisma.IntFilter<"s10_trauma_constat"> | number;
    commentaire?: Prisma.StringNullableFilter<"s10_trauma_constat"> | string | null;
};
export type s10_trauma_constatCreateWithoutZoneInput = {
    commentaire?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS10_trauma_constatInput;
    lesion_type: Prisma.s10_trauma_lesion_typeCreateNestedOneWithoutConstatsInput;
};
export type s10_trauma_constatUncheckedCreateWithoutZoneInput = {
    id?: number;
    rapport_id: number;
    lesion_type_id: number;
    commentaire?: string | null;
};
export type s10_trauma_constatCreateOrConnectWithoutZoneInput = {
    where: Prisma.s10_trauma_constatWhereUniqueInput;
    create: Prisma.XOR<Prisma.s10_trauma_constatCreateWithoutZoneInput, Prisma.s10_trauma_constatUncheckedCreateWithoutZoneInput>;
};
export type s10_trauma_constatCreateManyZoneInputEnvelope = {
    data: Prisma.s10_trauma_constatCreateManyZoneInput | Prisma.s10_trauma_constatCreateManyZoneInput[];
    skipDuplicates?: boolean;
};
export type s10_trauma_constatUpsertWithWhereUniqueWithoutZoneInput = {
    where: Prisma.s10_trauma_constatWhereUniqueInput;
    update: Prisma.XOR<Prisma.s10_trauma_constatUpdateWithoutZoneInput, Prisma.s10_trauma_constatUncheckedUpdateWithoutZoneInput>;
    create: Prisma.XOR<Prisma.s10_trauma_constatCreateWithoutZoneInput, Prisma.s10_trauma_constatUncheckedCreateWithoutZoneInput>;
};
export type s10_trauma_constatUpdateWithWhereUniqueWithoutZoneInput = {
    where: Prisma.s10_trauma_constatWhereUniqueInput;
    data: Prisma.XOR<Prisma.s10_trauma_constatUpdateWithoutZoneInput, Prisma.s10_trauma_constatUncheckedUpdateWithoutZoneInput>;
};
export type s10_trauma_constatUpdateManyWithWhereWithoutZoneInput = {
    where: Prisma.s10_trauma_constatScalarWhereInput;
    data: Prisma.XOR<Prisma.s10_trauma_constatUpdateManyMutationInput, Prisma.s10_trauma_constatUncheckedUpdateManyWithoutZoneInput>;
};
export type s10_trauma_constatCreateWithoutLesion_typeInput = {
    commentaire?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS10_trauma_constatInput;
    zone: Prisma.s10_trauma_zone_typeCreateNestedOneWithoutConstatsInput;
};
export type s10_trauma_constatUncheckedCreateWithoutLesion_typeInput = {
    id?: number;
    rapport_id: number;
    zone_id: number;
    commentaire?: string | null;
};
export type s10_trauma_constatCreateOrConnectWithoutLesion_typeInput = {
    where: Prisma.s10_trauma_constatWhereUniqueInput;
    create: Prisma.XOR<Prisma.s10_trauma_constatCreateWithoutLesion_typeInput, Prisma.s10_trauma_constatUncheckedCreateWithoutLesion_typeInput>;
};
export type s10_trauma_constatCreateManyLesion_typeInputEnvelope = {
    data: Prisma.s10_trauma_constatCreateManyLesion_typeInput | Prisma.s10_trauma_constatCreateManyLesion_typeInput[];
    skipDuplicates?: boolean;
};
export type s10_trauma_constatUpsertWithWhereUniqueWithoutLesion_typeInput = {
    where: Prisma.s10_trauma_constatWhereUniqueInput;
    update: Prisma.XOR<Prisma.s10_trauma_constatUpdateWithoutLesion_typeInput, Prisma.s10_trauma_constatUncheckedUpdateWithoutLesion_typeInput>;
    create: Prisma.XOR<Prisma.s10_trauma_constatCreateWithoutLesion_typeInput, Prisma.s10_trauma_constatUncheckedCreateWithoutLesion_typeInput>;
};
export type s10_trauma_constatUpdateWithWhereUniqueWithoutLesion_typeInput = {
    where: Prisma.s10_trauma_constatWhereUniqueInput;
    data: Prisma.XOR<Prisma.s10_trauma_constatUpdateWithoutLesion_typeInput, Prisma.s10_trauma_constatUncheckedUpdateWithoutLesion_typeInput>;
};
export type s10_trauma_constatUpdateManyWithWhereWithoutLesion_typeInput = {
    where: Prisma.s10_trauma_constatScalarWhereInput;
    data: Prisma.XOR<Prisma.s10_trauma_constatUpdateManyMutationInput, Prisma.s10_trauma_constatUncheckedUpdateManyWithoutLesion_typeInput>;
};
export type s10_trauma_constatCreateManyRapportInput = {
    id?: number;
    zone_id: number;
    lesion_type_id: number;
    commentaire?: string | null;
};
export type s10_trauma_constatUpdateWithoutRapportInput = {
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zone?: Prisma.s10_trauma_zone_typeUpdateOneRequiredWithoutConstatsNestedInput;
    lesion_type?: Prisma.s10_trauma_lesion_typeUpdateOneRequiredWithoutConstatsNestedInput;
};
export type s10_trauma_constatUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    zone_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesion_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s10_trauma_constatUncheckedUpdateManyWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    zone_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesion_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s10_trauma_constatCreateManyZoneInput = {
    id?: number;
    rapport_id: number;
    lesion_type_id: number;
    commentaire?: string | null;
};
export type s10_trauma_constatUpdateWithoutZoneInput = {
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS10_trauma_constatNestedInput;
    lesion_type?: Prisma.s10_trauma_lesion_typeUpdateOneRequiredWithoutConstatsNestedInput;
};
export type s10_trauma_constatUncheckedUpdateWithoutZoneInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesion_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s10_trauma_constatUncheckedUpdateManyWithoutZoneInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    lesion_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s10_trauma_constatCreateManyLesion_typeInput = {
    id?: number;
    rapport_id: number;
    zone_id: number;
    commentaire?: string | null;
};
export type s10_trauma_constatUpdateWithoutLesion_typeInput = {
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS10_trauma_constatNestedInput;
    zone?: Prisma.s10_trauma_zone_typeUpdateOneRequiredWithoutConstatsNestedInput;
};
export type s10_trauma_constatUncheckedUpdateWithoutLesion_typeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    zone_id?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s10_trauma_constatUncheckedUpdateManyWithoutLesion_typeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    zone_id?: Prisma.IntFieldUpdateOperationsInput | number;
    commentaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s10_trauma_constatSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    zone_id?: boolean;
    lesion_type_id?: boolean;
    commentaire?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    zone?: boolean | Prisma.s10_trauma_zone_typeDefaultArgs<ExtArgs>;
    lesion_type?: boolean | Prisma.s10_trauma_lesion_typeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s10_trauma_constat"]>;
export type s10_trauma_constatSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    zone_id?: boolean;
    lesion_type_id?: boolean;
    commentaire?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    zone?: boolean | Prisma.s10_trauma_zone_typeDefaultArgs<ExtArgs>;
    lesion_type?: boolean | Prisma.s10_trauma_lesion_typeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s10_trauma_constat"]>;
export type s10_trauma_constatSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    zone_id?: boolean;
    lesion_type_id?: boolean;
    commentaire?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    zone?: boolean | Prisma.s10_trauma_zone_typeDefaultArgs<ExtArgs>;
    lesion_type?: boolean | Prisma.s10_trauma_lesion_typeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s10_trauma_constat"]>;
export type s10_trauma_constatSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    zone_id?: boolean;
    lesion_type_id?: boolean;
    commentaire?: boolean;
};
export type s10_trauma_constatOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "zone_id" | "lesion_type_id" | "commentaire", ExtArgs["result"]["s10_trauma_constat"]>;
export type s10_trauma_constatInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    zone?: boolean | Prisma.s10_trauma_zone_typeDefaultArgs<ExtArgs>;
    lesion_type?: boolean | Prisma.s10_trauma_lesion_typeDefaultArgs<ExtArgs>;
};
export type s10_trauma_constatIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    zone?: boolean | Prisma.s10_trauma_zone_typeDefaultArgs<ExtArgs>;
    lesion_type?: boolean | Prisma.s10_trauma_lesion_typeDefaultArgs<ExtArgs>;
};
export type s10_trauma_constatIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    zone?: boolean | Prisma.s10_trauma_zone_typeDefaultArgs<ExtArgs>;
    lesion_type?: boolean | Prisma.s10_trauma_lesion_typeDefaultArgs<ExtArgs>;
};
export type $s10_trauma_constatPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s10_trauma_constat";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
        zone: Prisma.$s10_trauma_zone_typePayload<ExtArgs>;
        lesion_type: Prisma.$s10_trauma_lesion_typePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        zone_id: number;
        lesion_type_id: number;
        commentaire: string | null;
    }, ExtArgs["result"]["s10_trauma_constat"]>;
    composites: {};
};
export type s10_trauma_constatGetPayload<S extends boolean | null | undefined | s10_trauma_constatDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s10_trauma_constatPayload, S>;
export type s10_trauma_constatCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s10_trauma_constatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S10_trauma_constatCountAggregateInputType | true;
};
export interface s10_trauma_constatDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s10_trauma_constat'];
        meta: {
            name: 's10_trauma_constat';
        };
    };
    /**
     * Find zero or one S10_trauma_constat that matches the filter.
     * @param {s10_trauma_constatFindUniqueArgs} args - Arguments to find a S10_trauma_constat
     * @example
     * // Get one S10_trauma_constat
     * const s10_trauma_constat = await prisma.s10_trauma_constat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s10_trauma_constatFindUniqueArgs>(args: Prisma.SelectSubset<T, s10_trauma_constatFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_constatClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_constatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S10_trauma_constat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s10_trauma_constatFindUniqueOrThrowArgs} args - Arguments to find a S10_trauma_constat
     * @example
     * // Get one S10_trauma_constat
     * const s10_trauma_constat = await prisma.s10_trauma_constat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s10_trauma_constatFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s10_trauma_constatFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_constatClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_constatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S10_trauma_constat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s10_trauma_constatFindFirstArgs} args - Arguments to find a S10_trauma_constat
     * @example
     * // Get one S10_trauma_constat
     * const s10_trauma_constat = await prisma.s10_trauma_constat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s10_trauma_constatFindFirstArgs>(args?: Prisma.SelectSubset<T, s10_trauma_constatFindFirstArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_constatClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_constatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S10_trauma_constat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s10_trauma_constatFindFirstOrThrowArgs} args - Arguments to find a S10_trauma_constat
     * @example
     * // Get one S10_trauma_constat
     * const s10_trauma_constat = await prisma.s10_trauma_constat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s10_trauma_constatFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s10_trauma_constatFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_constatClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_constatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S10_trauma_constats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s10_trauma_constatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S10_trauma_constats
     * const s10_trauma_constats = await prisma.s10_trauma_constat.findMany()
     *
     * // Get first 10 S10_trauma_constats
     * const s10_trauma_constats = await prisma.s10_trauma_constat.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s10_trauma_constatWithIdOnly = await prisma.s10_trauma_constat.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s10_trauma_constatFindManyArgs>(args?: Prisma.SelectSubset<T, s10_trauma_constatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s10_trauma_constatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S10_trauma_constat.
     * @param {s10_trauma_constatCreateArgs} args - Arguments to create a S10_trauma_constat.
     * @example
     * // Create one S10_trauma_constat
     * const S10_trauma_constat = await prisma.s10_trauma_constat.create({
     *   data: {
     *     // ... data to create a S10_trauma_constat
     *   }
     * })
     *
     */
    create<T extends s10_trauma_constatCreateArgs>(args: Prisma.SelectSubset<T, s10_trauma_constatCreateArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_constatClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_constatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S10_trauma_constats.
     * @param {s10_trauma_constatCreateManyArgs} args - Arguments to create many S10_trauma_constats.
     * @example
     * // Create many S10_trauma_constats
     * const s10_trauma_constat = await prisma.s10_trauma_constat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s10_trauma_constatCreateManyArgs>(args?: Prisma.SelectSubset<T, s10_trauma_constatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S10_trauma_constats and returns the data saved in the database.
     * @param {s10_trauma_constatCreateManyAndReturnArgs} args - Arguments to create many S10_trauma_constats.
     * @example
     * // Create many S10_trauma_constats
     * const s10_trauma_constat = await prisma.s10_trauma_constat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S10_trauma_constats and only return the `id`
     * const s10_trauma_constatWithIdOnly = await prisma.s10_trauma_constat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s10_trauma_constatCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s10_trauma_constatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s10_trauma_constatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S10_trauma_constat.
     * @param {s10_trauma_constatDeleteArgs} args - Arguments to delete one S10_trauma_constat.
     * @example
     * // Delete one S10_trauma_constat
     * const S10_trauma_constat = await prisma.s10_trauma_constat.delete({
     *   where: {
     *     // ... filter to delete one S10_trauma_constat
     *   }
     * })
     *
     */
    delete<T extends s10_trauma_constatDeleteArgs>(args: Prisma.SelectSubset<T, s10_trauma_constatDeleteArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_constatClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_constatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S10_trauma_constat.
     * @param {s10_trauma_constatUpdateArgs} args - Arguments to update one S10_trauma_constat.
     * @example
     * // Update one S10_trauma_constat
     * const s10_trauma_constat = await prisma.s10_trauma_constat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s10_trauma_constatUpdateArgs>(args: Prisma.SelectSubset<T, s10_trauma_constatUpdateArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_constatClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_constatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S10_trauma_constats.
     * @param {s10_trauma_constatDeleteManyArgs} args - Arguments to filter S10_trauma_constats to delete.
     * @example
     * // Delete a few S10_trauma_constats
     * const { count } = await prisma.s10_trauma_constat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s10_trauma_constatDeleteManyArgs>(args?: Prisma.SelectSubset<T, s10_trauma_constatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S10_trauma_constats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s10_trauma_constatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S10_trauma_constats
     * const s10_trauma_constat = await prisma.s10_trauma_constat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s10_trauma_constatUpdateManyArgs>(args: Prisma.SelectSubset<T, s10_trauma_constatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S10_trauma_constats and returns the data updated in the database.
     * @param {s10_trauma_constatUpdateManyAndReturnArgs} args - Arguments to update many S10_trauma_constats.
     * @example
     * // Update many S10_trauma_constats
     * const s10_trauma_constat = await prisma.s10_trauma_constat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S10_trauma_constats and only return the `id`
     * const s10_trauma_constatWithIdOnly = await prisma.s10_trauma_constat.updateManyAndReturn({
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
    updateManyAndReturn<T extends s10_trauma_constatUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s10_trauma_constatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s10_trauma_constatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S10_trauma_constat.
     * @param {s10_trauma_constatUpsertArgs} args - Arguments to update or create a S10_trauma_constat.
     * @example
     * // Update or create a S10_trauma_constat
     * const s10_trauma_constat = await prisma.s10_trauma_constat.upsert({
     *   create: {
     *     // ... data to create a S10_trauma_constat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S10_trauma_constat we want to update
     *   }
     * })
     */
    upsert<T extends s10_trauma_constatUpsertArgs>(args: Prisma.SelectSubset<T, s10_trauma_constatUpsertArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_constatClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_constatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S10_trauma_constats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s10_trauma_constatCountArgs} args - Arguments to filter S10_trauma_constats to count.
     * @example
     * // Count the number of S10_trauma_constats
     * const count = await prisma.s10_trauma_constat.count({
     *   where: {
     *     // ... the filter for the S10_trauma_constats we want to count
     *   }
     * })
    **/
    count<T extends s10_trauma_constatCountArgs>(args?: Prisma.Subset<T, s10_trauma_constatCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S10_trauma_constatCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S10_trauma_constat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S10_trauma_constatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S10_trauma_constatAggregateArgs>(args: Prisma.Subset<T, S10_trauma_constatAggregateArgs>): Prisma.PrismaPromise<GetS10_trauma_constatAggregateType<T>>;
    /**
     * Group by S10_trauma_constat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s10_trauma_constatGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s10_trauma_constatGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s10_trauma_constatGroupByArgs['orderBy'];
    } : {
        orderBy?: s10_trauma_constatGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s10_trauma_constatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS10_trauma_constatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s10_trauma_constat model
     */
    readonly fields: s10_trauma_constatFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s10_trauma_constat.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s10_trauma_constatClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rapport<T extends Prisma.r_rapport_prDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_prDefaultArgs<ExtArgs>>): Prisma.Prisma__r_rapport_prClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    zone<T extends Prisma.s10_trauma_zone_typeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.s10_trauma_zone_typeDefaultArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_zone_typeClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_zone_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lesion_type<T extends Prisma.s10_trauma_lesion_typeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.s10_trauma_lesion_typeDefaultArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_lesion_typeClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_lesion_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the s10_trauma_constat model
 */
export interface s10_trauma_constatFieldRefs {
    readonly id: Prisma.FieldRef<"s10_trauma_constat", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s10_trauma_constat", 'Int'>;
    readonly zone_id: Prisma.FieldRef<"s10_trauma_constat", 'Int'>;
    readonly lesion_type_id: Prisma.FieldRef<"s10_trauma_constat", 'Int'>;
    readonly commentaire: Prisma.FieldRef<"s10_trauma_constat", 'String'>;
}
/**
 * s10_trauma_constat findUnique
 */
export type s10_trauma_constatFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_constat
     */
    select?: Prisma.s10_trauma_constatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_constat
     */
    omit?: Prisma.s10_trauma_constatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_constatInclude<ExtArgs> | null;
    /**
     * Filter, which s10_trauma_constat to fetch.
     */
    where: Prisma.s10_trauma_constatWhereUniqueInput;
};
/**
 * s10_trauma_constat findUniqueOrThrow
 */
export type s10_trauma_constatFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_constat
     */
    select?: Prisma.s10_trauma_constatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_constat
     */
    omit?: Prisma.s10_trauma_constatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_constatInclude<ExtArgs> | null;
    /**
     * Filter, which s10_trauma_constat to fetch.
     */
    where: Prisma.s10_trauma_constatWhereUniqueInput;
};
/**
 * s10_trauma_constat findFirst
 */
export type s10_trauma_constatFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_constat
     */
    select?: Prisma.s10_trauma_constatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_constat
     */
    omit?: Prisma.s10_trauma_constatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_constatInclude<ExtArgs> | null;
    /**
     * Filter, which s10_trauma_constat to fetch.
     */
    where?: Prisma.s10_trauma_constatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s10_trauma_constats to fetch.
     */
    orderBy?: Prisma.s10_trauma_constatOrderByWithRelationInput | Prisma.s10_trauma_constatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s10_trauma_constats.
     */
    cursor?: Prisma.s10_trauma_constatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s10_trauma_constats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s10_trauma_constats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s10_trauma_constats.
     */
    distinct?: Prisma.S10_trauma_constatScalarFieldEnum | Prisma.S10_trauma_constatScalarFieldEnum[];
};
/**
 * s10_trauma_constat findFirstOrThrow
 */
export type s10_trauma_constatFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_constat
     */
    select?: Prisma.s10_trauma_constatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_constat
     */
    omit?: Prisma.s10_trauma_constatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_constatInclude<ExtArgs> | null;
    /**
     * Filter, which s10_trauma_constat to fetch.
     */
    where?: Prisma.s10_trauma_constatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s10_trauma_constats to fetch.
     */
    orderBy?: Prisma.s10_trauma_constatOrderByWithRelationInput | Prisma.s10_trauma_constatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s10_trauma_constats.
     */
    cursor?: Prisma.s10_trauma_constatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s10_trauma_constats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s10_trauma_constats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s10_trauma_constats.
     */
    distinct?: Prisma.S10_trauma_constatScalarFieldEnum | Prisma.S10_trauma_constatScalarFieldEnum[];
};
/**
 * s10_trauma_constat findMany
 */
export type s10_trauma_constatFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_constat
     */
    select?: Prisma.s10_trauma_constatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_constat
     */
    omit?: Prisma.s10_trauma_constatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_constatInclude<ExtArgs> | null;
    /**
     * Filter, which s10_trauma_constats to fetch.
     */
    where?: Prisma.s10_trauma_constatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s10_trauma_constats to fetch.
     */
    orderBy?: Prisma.s10_trauma_constatOrderByWithRelationInput | Prisma.s10_trauma_constatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s10_trauma_constats.
     */
    cursor?: Prisma.s10_trauma_constatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s10_trauma_constats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s10_trauma_constats.
     */
    skip?: number;
    distinct?: Prisma.S10_trauma_constatScalarFieldEnum | Prisma.S10_trauma_constatScalarFieldEnum[];
};
/**
 * s10_trauma_constat create
 */
export type s10_trauma_constatCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_constat
     */
    select?: Prisma.s10_trauma_constatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_constat
     */
    omit?: Prisma.s10_trauma_constatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_constatInclude<ExtArgs> | null;
    /**
     * The data needed to create a s10_trauma_constat.
     */
    data: Prisma.XOR<Prisma.s10_trauma_constatCreateInput, Prisma.s10_trauma_constatUncheckedCreateInput>;
};
/**
 * s10_trauma_constat createMany
 */
export type s10_trauma_constatCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s10_trauma_constats.
     */
    data: Prisma.s10_trauma_constatCreateManyInput | Prisma.s10_trauma_constatCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s10_trauma_constat createManyAndReturn
 */
export type s10_trauma_constatCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_constat
     */
    select?: Prisma.s10_trauma_constatSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_constat
     */
    omit?: Prisma.s10_trauma_constatOmit<ExtArgs> | null;
    /**
     * The data used to create many s10_trauma_constats.
     */
    data: Prisma.s10_trauma_constatCreateManyInput | Prisma.s10_trauma_constatCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_constatIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s10_trauma_constat update
 */
export type s10_trauma_constatUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_constat
     */
    select?: Prisma.s10_trauma_constatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_constat
     */
    omit?: Prisma.s10_trauma_constatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_constatInclude<ExtArgs> | null;
    /**
     * The data needed to update a s10_trauma_constat.
     */
    data: Prisma.XOR<Prisma.s10_trauma_constatUpdateInput, Prisma.s10_trauma_constatUncheckedUpdateInput>;
    /**
     * Choose, which s10_trauma_constat to update.
     */
    where: Prisma.s10_trauma_constatWhereUniqueInput;
};
/**
 * s10_trauma_constat updateMany
 */
export type s10_trauma_constatUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s10_trauma_constats.
     */
    data: Prisma.XOR<Prisma.s10_trauma_constatUpdateManyMutationInput, Prisma.s10_trauma_constatUncheckedUpdateManyInput>;
    /**
     * Filter which s10_trauma_constats to update
     */
    where?: Prisma.s10_trauma_constatWhereInput;
    /**
     * Limit how many s10_trauma_constats to update.
     */
    limit?: number;
};
/**
 * s10_trauma_constat updateManyAndReturn
 */
export type s10_trauma_constatUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_constat
     */
    select?: Prisma.s10_trauma_constatSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_constat
     */
    omit?: Prisma.s10_trauma_constatOmit<ExtArgs> | null;
    /**
     * The data used to update s10_trauma_constats.
     */
    data: Prisma.XOR<Prisma.s10_trauma_constatUpdateManyMutationInput, Prisma.s10_trauma_constatUncheckedUpdateManyInput>;
    /**
     * Filter which s10_trauma_constats to update
     */
    where?: Prisma.s10_trauma_constatWhereInput;
    /**
     * Limit how many s10_trauma_constats to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_constatIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s10_trauma_constat upsert
 */
export type s10_trauma_constatUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_constat
     */
    select?: Prisma.s10_trauma_constatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_constat
     */
    omit?: Prisma.s10_trauma_constatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_constatInclude<ExtArgs> | null;
    /**
     * The filter to search for the s10_trauma_constat to update in case it exists.
     */
    where: Prisma.s10_trauma_constatWhereUniqueInput;
    /**
     * In case the s10_trauma_constat found by the `where` argument doesn't exist, create a new s10_trauma_constat with this data.
     */
    create: Prisma.XOR<Prisma.s10_trauma_constatCreateInput, Prisma.s10_trauma_constatUncheckedCreateInput>;
    /**
     * In case the s10_trauma_constat was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s10_trauma_constatUpdateInput, Prisma.s10_trauma_constatUncheckedUpdateInput>;
};
/**
 * s10_trauma_constat delete
 */
export type s10_trauma_constatDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_constat
     */
    select?: Prisma.s10_trauma_constatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_constat
     */
    omit?: Prisma.s10_trauma_constatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_constatInclude<ExtArgs> | null;
    /**
     * Filter which s10_trauma_constat to delete.
     */
    where: Prisma.s10_trauma_constatWhereUniqueInput;
};
/**
 * s10_trauma_constat deleteMany
 */
export type s10_trauma_constatDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s10_trauma_constats to delete
     */
    where?: Prisma.s10_trauma_constatWhereInput;
    /**
     * Limit how many s10_trauma_constats to delete.
     */
    limit?: number;
};
/**
 * s10_trauma_constat without action
 */
export type s10_trauma_constatDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_constat
     */
    select?: Prisma.s10_trauma_constatSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_constat
     */
    omit?: Prisma.s10_trauma_constatOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_constatInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s10_trauma_constat.d.ts.map