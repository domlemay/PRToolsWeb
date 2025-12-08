import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s08_rapport_allergie
 *
 */
export type s08_rapport_allergieModel = runtime.Types.Result.DefaultSelection<Prisma.$s08_rapport_allergiePayload>;
export type AggregateS08_rapport_allergie = {
    _count: S08_rapport_allergieCountAggregateOutputType | null;
    _avg: S08_rapport_allergieAvgAggregateOutputType | null;
    _sum: S08_rapport_allergieSumAggregateOutputType | null;
    _min: S08_rapport_allergieMinAggregateOutputType | null;
    _max: S08_rapport_allergieMaxAggregateOutputType | null;
};
export type S08_rapport_allergieAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    allergie_type_id: number | null;
};
export type S08_rapport_allergieSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    allergie_type_id: number | null;
};
export type S08_rapport_allergieMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    allergie_type_id: number | null;
    libelle_autre: string | null;
    details: string | null;
};
export type S08_rapport_allergieMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    allergie_type_id: number | null;
    libelle_autre: string | null;
    details: string | null;
};
export type S08_rapport_allergieCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    allergie_type_id: number;
    libelle_autre: number;
    details: number;
    _all: number;
};
export type S08_rapport_allergieAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
    allergie_type_id?: true;
};
export type S08_rapport_allergieSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
    allergie_type_id?: true;
};
export type S08_rapport_allergieMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    allergie_type_id?: true;
    libelle_autre?: true;
    details?: true;
};
export type S08_rapport_allergieMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    allergie_type_id?: true;
    libelle_autre?: true;
    details?: true;
};
export type S08_rapport_allergieCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    allergie_type_id?: true;
    libelle_autre?: true;
    details?: true;
    _all?: true;
};
export type S08_rapport_allergieAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s08_rapport_allergie to aggregate.
     */
    where?: Prisma.s08_rapport_allergieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s08_rapport_allergies to fetch.
     */
    orderBy?: Prisma.s08_rapport_allergieOrderByWithRelationInput | Prisma.s08_rapport_allergieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s08_rapport_allergieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s08_rapport_allergies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s08_rapport_allergies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s08_rapport_allergies
    **/
    _count?: true | S08_rapport_allergieCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S08_rapport_allergieAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S08_rapport_allergieSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S08_rapport_allergieMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S08_rapport_allergieMaxAggregateInputType;
};
export type GetS08_rapport_allergieAggregateType<T extends S08_rapport_allergieAggregateArgs> = {
    [P in keyof T & keyof AggregateS08_rapport_allergie]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS08_rapport_allergie[P]> : Prisma.GetScalarType<T[P], AggregateS08_rapport_allergie[P]>;
};
export type s08_rapport_allergieGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s08_rapport_allergieWhereInput;
    orderBy?: Prisma.s08_rapport_allergieOrderByWithAggregationInput | Prisma.s08_rapport_allergieOrderByWithAggregationInput[];
    by: Prisma.S08_rapport_allergieScalarFieldEnum[] | Prisma.S08_rapport_allergieScalarFieldEnum;
    having?: Prisma.s08_rapport_allergieScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S08_rapport_allergieCountAggregateInputType | true;
    _avg?: S08_rapport_allergieAvgAggregateInputType;
    _sum?: S08_rapport_allergieSumAggregateInputType;
    _min?: S08_rapport_allergieMinAggregateInputType;
    _max?: S08_rapport_allergieMaxAggregateInputType;
};
export type S08_rapport_allergieGroupByOutputType = {
    id: number;
    rapport_id: number;
    allergie_type_id: number | null;
    libelle_autre: string | null;
    details: string | null;
    _count: S08_rapport_allergieCountAggregateOutputType | null;
    _avg: S08_rapport_allergieAvgAggregateOutputType | null;
    _sum: S08_rapport_allergieSumAggregateOutputType | null;
    _min: S08_rapport_allergieMinAggregateOutputType | null;
    _max: S08_rapport_allergieMaxAggregateOutputType | null;
};
type GetS08_rapport_allergieGroupByPayload<T extends s08_rapport_allergieGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S08_rapport_allergieGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S08_rapport_allergieGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S08_rapport_allergieGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S08_rapport_allergieGroupByOutputType[P]>;
}>>;
export type s08_rapport_allergieWhereInput = {
    AND?: Prisma.s08_rapport_allergieWhereInput | Prisma.s08_rapport_allergieWhereInput[];
    OR?: Prisma.s08_rapport_allergieWhereInput[];
    NOT?: Prisma.s08_rapport_allergieWhereInput | Prisma.s08_rapport_allergieWhereInput[];
    id?: Prisma.IntFilter<"s08_rapport_allergie"> | number;
    rapport_id?: Prisma.IntFilter<"s08_rapport_allergie"> | number;
    allergie_type_id?: Prisma.IntNullableFilter<"s08_rapport_allergie"> | number | null;
    libelle_autre?: Prisma.StringNullableFilter<"s08_rapport_allergie"> | string | null;
    details?: Prisma.StringNullableFilter<"s08_rapport_allergie"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
    allergie_type?: Prisma.XOR<Prisma.S08_allergie_typeNullableScalarRelationFilter, Prisma.s08_allergie_typeWhereInput> | null;
};
export type s08_rapport_allergieOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    allergie_type_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    libelle_autre?: Prisma.SortOrderInput | Prisma.SortOrder;
    details?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
    allergie_type?: Prisma.s08_allergie_typeOrderByWithRelationInput;
};
export type s08_rapport_allergieWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.s08_rapport_allergieWhereInput | Prisma.s08_rapport_allergieWhereInput[];
    OR?: Prisma.s08_rapport_allergieWhereInput[];
    NOT?: Prisma.s08_rapport_allergieWhereInput | Prisma.s08_rapport_allergieWhereInput[];
    rapport_id?: Prisma.IntFilter<"s08_rapport_allergie"> | number;
    allergie_type_id?: Prisma.IntNullableFilter<"s08_rapport_allergie"> | number | null;
    libelle_autre?: Prisma.StringNullableFilter<"s08_rapport_allergie"> | string | null;
    details?: Prisma.StringNullableFilter<"s08_rapport_allergie"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
    allergie_type?: Prisma.XOR<Prisma.S08_allergie_typeNullableScalarRelationFilter, Prisma.s08_allergie_typeWhereInput> | null;
}, "id">;
export type s08_rapport_allergieOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    allergie_type_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    libelle_autre?: Prisma.SortOrderInput | Prisma.SortOrder;
    details?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s08_rapport_allergieCountOrderByAggregateInput;
    _avg?: Prisma.s08_rapport_allergieAvgOrderByAggregateInput;
    _max?: Prisma.s08_rapport_allergieMaxOrderByAggregateInput;
    _min?: Prisma.s08_rapport_allergieMinOrderByAggregateInput;
    _sum?: Prisma.s08_rapport_allergieSumOrderByAggregateInput;
};
export type s08_rapport_allergieScalarWhereWithAggregatesInput = {
    AND?: Prisma.s08_rapport_allergieScalarWhereWithAggregatesInput | Prisma.s08_rapport_allergieScalarWhereWithAggregatesInput[];
    OR?: Prisma.s08_rapport_allergieScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s08_rapport_allergieScalarWhereWithAggregatesInput | Prisma.s08_rapport_allergieScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s08_rapport_allergie"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s08_rapport_allergie"> | number;
    allergie_type_id?: Prisma.IntNullableWithAggregatesFilter<"s08_rapport_allergie"> | number | null;
    libelle_autre?: Prisma.StringNullableWithAggregatesFilter<"s08_rapport_allergie"> | string | null;
    details?: Prisma.StringNullableWithAggregatesFilter<"s08_rapport_allergie"> | string | null;
};
export type s08_rapport_allergieCreateInput = {
    libelle_autre?: string | null;
    details?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS08_rapport_allergieInput;
    allergie_type?: Prisma.s08_allergie_typeCreateNestedOneWithoutRapportsInput;
};
export type s08_rapport_allergieUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    allergie_type_id?: number | null;
    libelle_autre?: string | null;
    details?: string | null;
};
export type s08_rapport_allergieUpdateInput = {
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS08_rapport_allergieNestedInput;
    allergie_type?: Prisma.s08_allergie_typeUpdateOneWithoutRapportsNestedInput;
};
export type s08_rapport_allergieUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    allergie_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s08_rapport_allergieCreateManyInput = {
    id?: number;
    rapport_id: number;
    allergie_type_id?: number | null;
    libelle_autre?: string | null;
    details?: string | null;
};
export type s08_rapport_allergieUpdateManyMutationInput = {
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s08_rapport_allergieUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    allergie_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type S08_rapport_allergieListRelationFilter = {
    every?: Prisma.s08_rapport_allergieWhereInput;
    some?: Prisma.s08_rapport_allergieWhereInput;
    none?: Prisma.s08_rapport_allergieWhereInput;
};
export type s08_rapport_allergieOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type s08_rapport_allergieCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    allergie_type_id?: Prisma.SortOrder;
    libelle_autre?: Prisma.SortOrder;
    details?: Prisma.SortOrder;
};
export type s08_rapport_allergieAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    allergie_type_id?: Prisma.SortOrder;
};
export type s08_rapport_allergieMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    allergie_type_id?: Prisma.SortOrder;
    libelle_autre?: Prisma.SortOrder;
    details?: Prisma.SortOrder;
};
export type s08_rapport_allergieMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    allergie_type_id?: Prisma.SortOrder;
    libelle_autre?: Prisma.SortOrder;
    details?: Prisma.SortOrder;
};
export type s08_rapport_allergieSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    allergie_type_id?: Prisma.SortOrder;
};
export type s08_rapport_allergieCreateNestedManyWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s08_rapport_allergieCreateWithoutRapportInput, Prisma.s08_rapport_allergieUncheckedCreateWithoutRapportInput> | Prisma.s08_rapport_allergieCreateWithoutRapportInput[] | Prisma.s08_rapport_allergieUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s08_rapport_allergieCreateOrConnectWithoutRapportInput | Prisma.s08_rapport_allergieCreateOrConnectWithoutRapportInput[];
    createMany?: Prisma.s08_rapport_allergieCreateManyRapportInputEnvelope;
    connect?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
};
export type s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s08_rapport_allergieCreateWithoutRapportInput, Prisma.s08_rapport_allergieUncheckedCreateWithoutRapportInput> | Prisma.s08_rapport_allergieCreateWithoutRapportInput[] | Prisma.s08_rapport_allergieUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s08_rapport_allergieCreateOrConnectWithoutRapportInput | Prisma.s08_rapport_allergieCreateOrConnectWithoutRapportInput[];
    createMany?: Prisma.s08_rapport_allergieCreateManyRapportInputEnvelope;
    connect?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
};
export type s08_rapport_allergieUpdateManyWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s08_rapport_allergieCreateWithoutRapportInput, Prisma.s08_rapport_allergieUncheckedCreateWithoutRapportInput> | Prisma.s08_rapport_allergieCreateWithoutRapportInput[] | Prisma.s08_rapport_allergieUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s08_rapport_allergieCreateOrConnectWithoutRapportInput | Prisma.s08_rapport_allergieCreateOrConnectWithoutRapportInput[];
    upsert?: Prisma.s08_rapport_allergieUpsertWithWhereUniqueWithoutRapportInput | Prisma.s08_rapport_allergieUpsertWithWhereUniqueWithoutRapportInput[];
    createMany?: Prisma.s08_rapport_allergieCreateManyRapportInputEnvelope;
    set?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
    disconnect?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
    delete?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
    connect?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
    update?: Prisma.s08_rapport_allergieUpdateWithWhereUniqueWithoutRapportInput | Prisma.s08_rapport_allergieUpdateWithWhereUniqueWithoutRapportInput[];
    updateMany?: Prisma.s08_rapport_allergieUpdateManyWithWhereWithoutRapportInput | Prisma.s08_rapport_allergieUpdateManyWithWhereWithoutRapportInput[];
    deleteMany?: Prisma.s08_rapport_allergieScalarWhereInput | Prisma.s08_rapport_allergieScalarWhereInput[];
};
export type s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s08_rapport_allergieCreateWithoutRapportInput, Prisma.s08_rapport_allergieUncheckedCreateWithoutRapportInput> | Prisma.s08_rapport_allergieCreateWithoutRapportInput[] | Prisma.s08_rapport_allergieUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s08_rapport_allergieCreateOrConnectWithoutRapportInput | Prisma.s08_rapport_allergieCreateOrConnectWithoutRapportInput[];
    upsert?: Prisma.s08_rapport_allergieUpsertWithWhereUniqueWithoutRapportInput | Prisma.s08_rapport_allergieUpsertWithWhereUniqueWithoutRapportInput[];
    createMany?: Prisma.s08_rapport_allergieCreateManyRapportInputEnvelope;
    set?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
    disconnect?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
    delete?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
    connect?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
    update?: Prisma.s08_rapport_allergieUpdateWithWhereUniqueWithoutRapportInput | Prisma.s08_rapport_allergieUpdateWithWhereUniqueWithoutRapportInput[];
    updateMany?: Prisma.s08_rapport_allergieUpdateManyWithWhereWithoutRapportInput | Prisma.s08_rapport_allergieUpdateManyWithWhereWithoutRapportInput[];
    deleteMany?: Prisma.s08_rapport_allergieScalarWhereInput | Prisma.s08_rapport_allergieScalarWhereInput[];
};
export type s08_rapport_allergieCreateNestedManyWithoutAllergie_typeInput = {
    create?: Prisma.XOR<Prisma.s08_rapport_allergieCreateWithoutAllergie_typeInput, Prisma.s08_rapport_allergieUncheckedCreateWithoutAllergie_typeInput> | Prisma.s08_rapport_allergieCreateWithoutAllergie_typeInput[] | Prisma.s08_rapport_allergieUncheckedCreateWithoutAllergie_typeInput[];
    connectOrCreate?: Prisma.s08_rapport_allergieCreateOrConnectWithoutAllergie_typeInput | Prisma.s08_rapport_allergieCreateOrConnectWithoutAllergie_typeInput[];
    createMany?: Prisma.s08_rapport_allergieCreateManyAllergie_typeInputEnvelope;
    connect?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
};
export type s08_rapport_allergieUncheckedCreateNestedManyWithoutAllergie_typeInput = {
    create?: Prisma.XOR<Prisma.s08_rapport_allergieCreateWithoutAllergie_typeInput, Prisma.s08_rapport_allergieUncheckedCreateWithoutAllergie_typeInput> | Prisma.s08_rapport_allergieCreateWithoutAllergie_typeInput[] | Prisma.s08_rapport_allergieUncheckedCreateWithoutAllergie_typeInput[];
    connectOrCreate?: Prisma.s08_rapport_allergieCreateOrConnectWithoutAllergie_typeInput | Prisma.s08_rapport_allergieCreateOrConnectWithoutAllergie_typeInput[];
    createMany?: Prisma.s08_rapport_allergieCreateManyAllergie_typeInputEnvelope;
    connect?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
};
export type s08_rapport_allergieUpdateManyWithoutAllergie_typeNestedInput = {
    create?: Prisma.XOR<Prisma.s08_rapport_allergieCreateWithoutAllergie_typeInput, Prisma.s08_rapport_allergieUncheckedCreateWithoutAllergie_typeInput> | Prisma.s08_rapport_allergieCreateWithoutAllergie_typeInput[] | Prisma.s08_rapport_allergieUncheckedCreateWithoutAllergie_typeInput[];
    connectOrCreate?: Prisma.s08_rapport_allergieCreateOrConnectWithoutAllergie_typeInput | Prisma.s08_rapport_allergieCreateOrConnectWithoutAllergie_typeInput[];
    upsert?: Prisma.s08_rapport_allergieUpsertWithWhereUniqueWithoutAllergie_typeInput | Prisma.s08_rapport_allergieUpsertWithWhereUniqueWithoutAllergie_typeInput[];
    createMany?: Prisma.s08_rapport_allergieCreateManyAllergie_typeInputEnvelope;
    set?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
    disconnect?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
    delete?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
    connect?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
    update?: Prisma.s08_rapport_allergieUpdateWithWhereUniqueWithoutAllergie_typeInput | Prisma.s08_rapport_allergieUpdateWithWhereUniqueWithoutAllergie_typeInput[];
    updateMany?: Prisma.s08_rapport_allergieUpdateManyWithWhereWithoutAllergie_typeInput | Prisma.s08_rapport_allergieUpdateManyWithWhereWithoutAllergie_typeInput[];
    deleteMany?: Prisma.s08_rapport_allergieScalarWhereInput | Prisma.s08_rapport_allergieScalarWhereInput[];
};
export type s08_rapport_allergieUncheckedUpdateManyWithoutAllergie_typeNestedInput = {
    create?: Prisma.XOR<Prisma.s08_rapport_allergieCreateWithoutAllergie_typeInput, Prisma.s08_rapport_allergieUncheckedCreateWithoutAllergie_typeInput> | Prisma.s08_rapport_allergieCreateWithoutAllergie_typeInput[] | Prisma.s08_rapport_allergieUncheckedCreateWithoutAllergie_typeInput[];
    connectOrCreate?: Prisma.s08_rapport_allergieCreateOrConnectWithoutAllergie_typeInput | Prisma.s08_rapport_allergieCreateOrConnectWithoutAllergie_typeInput[];
    upsert?: Prisma.s08_rapport_allergieUpsertWithWhereUniqueWithoutAllergie_typeInput | Prisma.s08_rapport_allergieUpsertWithWhereUniqueWithoutAllergie_typeInput[];
    createMany?: Prisma.s08_rapport_allergieCreateManyAllergie_typeInputEnvelope;
    set?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
    disconnect?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
    delete?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
    connect?: Prisma.s08_rapport_allergieWhereUniqueInput | Prisma.s08_rapport_allergieWhereUniqueInput[];
    update?: Prisma.s08_rapport_allergieUpdateWithWhereUniqueWithoutAllergie_typeInput | Prisma.s08_rapport_allergieUpdateWithWhereUniqueWithoutAllergie_typeInput[];
    updateMany?: Prisma.s08_rapport_allergieUpdateManyWithWhereWithoutAllergie_typeInput | Prisma.s08_rapport_allergieUpdateManyWithWhereWithoutAllergie_typeInput[];
    deleteMany?: Prisma.s08_rapport_allergieScalarWhereInput | Prisma.s08_rapport_allergieScalarWhereInput[];
};
export type s08_rapport_allergieCreateWithoutRapportInput = {
    libelle_autre?: string | null;
    details?: string | null;
    allergie_type?: Prisma.s08_allergie_typeCreateNestedOneWithoutRapportsInput;
};
export type s08_rapport_allergieUncheckedCreateWithoutRapportInput = {
    id?: number;
    allergie_type_id?: number | null;
    libelle_autre?: string | null;
    details?: string | null;
};
export type s08_rapport_allergieCreateOrConnectWithoutRapportInput = {
    where: Prisma.s08_rapport_allergieWhereUniqueInput;
    create: Prisma.XOR<Prisma.s08_rapport_allergieCreateWithoutRapportInput, Prisma.s08_rapport_allergieUncheckedCreateWithoutRapportInput>;
};
export type s08_rapport_allergieCreateManyRapportInputEnvelope = {
    data: Prisma.s08_rapport_allergieCreateManyRapportInput | Prisma.s08_rapport_allergieCreateManyRapportInput[];
    skipDuplicates?: boolean;
};
export type s08_rapport_allergieUpsertWithWhereUniqueWithoutRapportInput = {
    where: Prisma.s08_rapport_allergieWhereUniqueInput;
    update: Prisma.XOR<Prisma.s08_rapport_allergieUpdateWithoutRapportInput, Prisma.s08_rapport_allergieUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s08_rapport_allergieCreateWithoutRapportInput, Prisma.s08_rapport_allergieUncheckedCreateWithoutRapportInput>;
};
export type s08_rapport_allergieUpdateWithWhereUniqueWithoutRapportInput = {
    where: Prisma.s08_rapport_allergieWhereUniqueInput;
    data: Prisma.XOR<Prisma.s08_rapport_allergieUpdateWithoutRapportInput, Prisma.s08_rapport_allergieUncheckedUpdateWithoutRapportInput>;
};
export type s08_rapport_allergieUpdateManyWithWhereWithoutRapportInput = {
    where: Prisma.s08_rapport_allergieScalarWhereInput;
    data: Prisma.XOR<Prisma.s08_rapport_allergieUpdateManyMutationInput, Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportInput>;
};
export type s08_rapport_allergieScalarWhereInput = {
    AND?: Prisma.s08_rapport_allergieScalarWhereInput | Prisma.s08_rapport_allergieScalarWhereInput[];
    OR?: Prisma.s08_rapport_allergieScalarWhereInput[];
    NOT?: Prisma.s08_rapport_allergieScalarWhereInput | Prisma.s08_rapport_allergieScalarWhereInput[];
    id?: Prisma.IntFilter<"s08_rapport_allergie"> | number;
    rapport_id?: Prisma.IntFilter<"s08_rapport_allergie"> | number;
    allergie_type_id?: Prisma.IntNullableFilter<"s08_rapport_allergie"> | number | null;
    libelle_autre?: Prisma.StringNullableFilter<"s08_rapport_allergie"> | string | null;
    details?: Prisma.StringNullableFilter<"s08_rapport_allergie"> | string | null;
};
export type s08_rapport_allergieCreateWithoutAllergie_typeInput = {
    libelle_autre?: string | null;
    details?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS08_rapport_allergieInput;
};
export type s08_rapport_allergieUncheckedCreateWithoutAllergie_typeInput = {
    id?: number;
    rapport_id: number;
    libelle_autre?: string | null;
    details?: string | null;
};
export type s08_rapport_allergieCreateOrConnectWithoutAllergie_typeInput = {
    where: Prisma.s08_rapport_allergieWhereUniqueInput;
    create: Prisma.XOR<Prisma.s08_rapport_allergieCreateWithoutAllergie_typeInput, Prisma.s08_rapport_allergieUncheckedCreateWithoutAllergie_typeInput>;
};
export type s08_rapport_allergieCreateManyAllergie_typeInputEnvelope = {
    data: Prisma.s08_rapport_allergieCreateManyAllergie_typeInput | Prisma.s08_rapport_allergieCreateManyAllergie_typeInput[];
    skipDuplicates?: boolean;
};
export type s08_rapport_allergieUpsertWithWhereUniqueWithoutAllergie_typeInput = {
    where: Prisma.s08_rapport_allergieWhereUniqueInput;
    update: Prisma.XOR<Prisma.s08_rapport_allergieUpdateWithoutAllergie_typeInput, Prisma.s08_rapport_allergieUncheckedUpdateWithoutAllergie_typeInput>;
    create: Prisma.XOR<Prisma.s08_rapport_allergieCreateWithoutAllergie_typeInput, Prisma.s08_rapport_allergieUncheckedCreateWithoutAllergie_typeInput>;
};
export type s08_rapport_allergieUpdateWithWhereUniqueWithoutAllergie_typeInput = {
    where: Prisma.s08_rapport_allergieWhereUniqueInput;
    data: Prisma.XOR<Prisma.s08_rapport_allergieUpdateWithoutAllergie_typeInput, Prisma.s08_rapport_allergieUncheckedUpdateWithoutAllergie_typeInput>;
};
export type s08_rapport_allergieUpdateManyWithWhereWithoutAllergie_typeInput = {
    where: Prisma.s08_rapport_allergieScalarWhereInput;
    data: Prisma.XOR<Prisma.s08_rapport_allergieUpdateManyMutationInput, Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutAllergie_typeInput>;
};
export type s08_rapport_allergieCreateManyRapportInput = {
    id?: number;
    allergie_type_id?: number | null;
    libelle_autre?: string | null;
    details?: string | null;
};
export type s08_rapport_allergieUpdateWithoutRapportInput = {
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    allergie_type?: Prisma.s08_allergie_typeUpdateOneWithoutRapportsNestedInput;
};
export type s08_rapport_allergieUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    allergie_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s08_rapport_allergieUncheckedUpdateManyWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    allergie_type_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s08_rapport_allergieCreateManyAllergie_typeInput = {
    id?: number;
    rapport_id: number;
    libelle_autre?: string | null;
    details?: string | null;
};
export type s08_rapport_allergieUpdateWithoutAllergie_typeInput = {
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS08_rapport_allergieNestedInput;
};
export type s08_rapport_allergieUncheckedUpdateWithoutAllergie_typeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s08_rapport_allergieUncheckedUpdateManyWithoutAllergie_typeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    libelle_autre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    details?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s08_rapport_allergieSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    allergie_type_id?: boolean;
    libelle_autre?: boolean;
    details?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    allergie_type?: boolean | Prisma.s08_rapport_allergie$allergie_typeArgs<ExtArgs>;
}, ExtArgs["result"]["s08_rapport_allergie"]>;
export type s08_rapport_allergieSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    allergie_type_id?: boolean;
    libelle_autre?: boolean;
    details?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    allergie_type?: boolean | Prisma.s08_rapport_allergie$allergie_typeArgs<ExtArgs>;
}, ExtArgs["result"]["s08_rapport_allergie"]>;
export type s08_rapport_allergieSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    allergie_type_id?: boolean;
    libelle_autre?: boolean;
    details?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    allergie_type?: boolean | Prisma.s08_rapport_allergie$allergie_typeArgs<ExtArgs>;
}, ExtArgs["result"]["s08_rapport_allergie"]>;
export type s08_rapport_allergieSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    allergie_type_id?: boolean;
    libelle_autre?: boolean;
    details?: boolean;
};
export type s08_rapport_allergieOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "allergie_type_id" | "libelle_autre" | "details", ExtArgs["result"]["s08_rapport_allergie"]>;
export type s08_rapport_allergieInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    allergie_type?: boolean | Prisma.s08_rapport_allergie$allergie_typeArgs<ExtArgs>;
};
export type s08_rapport_allergieIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    allergie_type?: boolean | Prisma.s08_rapport_allergie$allergie_typeArgs<ExtArgs>;
};
export type s08_rapport_allergieIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
    allergie_type?: boolean | Prisma.s08_rapport_allergie$allergie_typeArgs<ExtArgs>;
};
export type $s08_rapport_allergiePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s08_rapport_allergie";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
        allergie_type: Prisma.$s08_allergie_typePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        allergie_type_id: number | null;
        libelle_autre: string | null;
        details: string | null;
    }, ExtArgs["result"]["s08_rapport_allergie"]>;
    composites: {};
};
export type s08_rapport_allergieGetPayload<S extends boolean | null | undefined | s08_rapport_allergieDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s08_rapport_allergiePayload, S>;
export type s08_rapport_allergieCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s08_rapport_allergieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S08_rapport_allergieCountAggregateInputType | true;
};
export interface s08_rapport_allergieDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s08_rapport_allergie'];
        meta: {
            name: 's08_rapport_allergie';
        };
    };
    /**
     * Find zero or one S08_rapport_allergie that matches the filter.
     * @param {s08_rapport_allergieFindUniqueArgs} args - Arguments to find a S08_rapport_allergie
     * @example
     * // Get one S08_rapport_allergie
     * const s08_rapport_allergie = await prisma.s08_rapport_allergie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s08_rapport_allergieFindUniqueArgs>(args: Prisma.SelectSubset<T, s08_rapport_allergieFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s08_rapport_allergieClient<runtime.Types.Result.GetResult<Prisma.$s08_rapport_allergiePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S08_rapport_allergie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s08_rapport_allergieFindUniqueOrThrowArgs} args - Arguments to find a S08_rapport_allergie
     * @example
     * // Get one S08_rapport_allergie
     * const s08_rapport_allergie = await prisma.s08_rapport_allergie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s08_rapport_allergieFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s08_rapport_allergieFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s08_rapport_allergieClient<runtime.Types.Result.GetResult<Prisma.$s08_rapport_allergiePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S08_rapport_allergie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s08_rapport_allergieFindFirstArgs} args - Arguments to find a S08_rapport_allergie
     * @example
     * // Get one S08_rapport_allergie
     * const s08_rapport_allergie = await prisma.s08_rapport_allergie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s08_rapport_allergieFindFirstArgs>(args?: Prisma.SelectSubset<T, s08_rapport_allergieFindFirstArgs<ExtArgs>>): Prisma.Prisma__s08_rapport_allergieClient<runtime.Types.Result.GetResult<Prisma.$s08_rapport_allergiePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S08_rapport_allergie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s08_rapport_allergieFindFirstOrThrowArgs} args - Arguments to find a S08_rapport_allergie
     * @example
     * // Get one S08_rapport_allergie
     * const s08_rapport_allergie = await prisma.s08_rapport_allergie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s08_rapport_allergieFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s08_rapport_allergieFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s08_rapport_allergieClient<runtime.Types.Result.GetResult<Prisma.$s08_rapport_allergiePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S08_rapport_allergies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s08_rapport_allergieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S08_rapport_allergies
     * const s08_rapport_allergies = await prisma.s08_rapport_allergie.findMany()
     *
     * // Get first 10 S08_rapport_allergies
     * const s08_rapport_allergies = await prisma.s08_rapport_allergie.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s08_rapport_allergieWithIdOnly = await prisma.s08_rapport_allergie.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s08_rapport_allergieFindManyArgs>(args?: Prisma.SelectSubset<T, s08_rapport_allergieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s08_rapport_allergiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S08_rapport_allergie.
     * @param {s08_rapport_allergieCreateArgs} args - Arguments to create a S08_rapport_allergie.
     * @example
     * // Create one S08_rapport_allergie
     * const S08_rapport_allergie = await prisma.s08_rapport_allergie.create({
     *   data: {
     *     // ... data to create a S08_rapport_allergie
     *   }
     * })
     *
     */
    create<T extends s08_rapport_allergieCreateArgs>(args: Prisma.SelectSubset<T, s08_rapport_allergieCreateArgs<ExtArgs>>): Prisma.Prisma__s08_rapport_allergieClient<runtime.Types.Result.GetResult<Prisma.$s08_rapport_allergiePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S08_rapport_allergies.
     * @param {s08_rapport_allergieCreateManyArgs} args - Arguments to create many S08_rapport_allergies.
     * @example
     * // Create many S08_rapport_allergies
     * const s08_rapport_allergie = await prisma.s08_rapport_allergie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s08_rapport_allergieCreateManyArgs>(args?: Prisma.SelectSubset<T, s08_rapport_allergieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S08_rapport_allergies and returns the data saved in the database.
     * @param {s08_rapport_allergieCreateManyAndReturnArgs} args - Arguments to create many S08_rapport_allergies.
     * @example
     * // Create many S08_rapport_allergies
     * const s08_rapport_allergie = await prisma.s08_rapport_allergie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S08_rapport_allergies and only return the `id`
     * const s08_rapport_allergieWithIdOnly = await prisma.s08_rapport_allergie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s08_rapport_allergieCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s08_rapport_allergieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s08_rapport_allergiePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S08_rapport_allergie.
     * @param {s08_rapport_allergieDeleteArgs} args - Arguments to delete one S08_rapport_allergie.
     * @example
     * // Delete one S08_rapport_allergie
     * const S08_rapport_allergie = await prisma.s08_rapport_allergie.delete({
     *   where: {
     *     // ... filter to delete one S08_rapport_allergie
     *   }
     * })
     *
     */
    delete<T extends s08_rapport_allergieDeleteArgs>(args: Prisma.SelectSubset<T, s08_rapport_allergieDeleteArgs<ExtArgs>>): Prisma.Prisma__s08_rapport_allergieClient<runtime.Types.Result.GetResult<Prisma.$s08_rapport_allergiePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S08_rapport_allergie.
     * @param {s08_rapport_allergieUpdateArgs} args - Arguments to update one S08_rapport_allergie.
     * @example
     * // Update one S08_rapport_allergie
     * const s08_rapport_allergie = await prisma.s08_rapport_allergie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s08_rapport_allergieUpdateArgs>(args: Prisma.SelectSubset<T, s08_rapport_allergieUpdateArgs<ExtArgs>>): Prisma.Prisma__s08_rapport_allergieClient<runtime.Types.Result.GetResult<Prisma.$s08_rapport_allergiePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S08_rapport_allergies.
     * @param {s08_rapport_allergieDeleteManyArgs} args - Arguments to filter S08_rapport_allergies to delete.
     * @example
     * // Delete a few S08_rapport_allergies
     * const { count } = await prisma.s08_rapport_allergie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s08_rapport_allergieDeleteManyArgs>(args?: Prisma.SelectSubset<T, s08_rapport_allergieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S08_rapport_allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s08_rapport_allergieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S08_rapport_allergies
     * const s08_rapport_allergie = await prisma.s08_rapport_allergie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s08_rapport_allergieUpdateManyArgs>(args: Prisma.SelectSubset<T, s08_rapport_allergieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S08_rapport_allergies and returns the data updated in the database.
     * @param {s08_rapport_allergieUpdateManyAndReturnArgs} args - Arguments to update many S08_rapport_allergies.
     * @example
     * // Update many S08_rapport_allergies
     * const s08_rapport_allergie = await prisma.s08_rapport_allergie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S08_rapport_allergies and only return the `id`
     * const s08_rapport_allergieWithIdOnly = await prisma.s08_rapport_allergie.updateManyAndReturn({
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
    updateManyAndReturn<T extends s08_rapport_allergieUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s08_rapport_allergieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s08_rapport_allergiePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S08_rapport_allergie.
     * @param {s08_rapport_allergieUpsertArgs} args - Arguments to update or create a S08_rapport_allergie.
     * @example
     * // Update or create a S08_rapport_allergie
     * const s08_rapport_allergie = await prisma.s08_rapport_allergie.upsert({
     *   create: {
     *     // ... data to create a S08_rapport_allergie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S08_rapport_allergie we want to update
     *   }
     * })
     */
    upsert<T extends s08_rapport_allergieUpsertArgs>(args: Prisma.SelectSubset<T, s08_rapport_allergieUpsertArgs<ExtArgs>>): Prisma.Prisma__s08_rapport_allergieClient<runtime.Types.Result.GetResult<Prisma.$s08_rapport_allergiePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S08_rapport_allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s08_rapport_allergieCountArgs} args - Arguments to filter S08_rapport_allergies to count.
     * @example
     * // Count the number of S08_rapport_allergies
     * const count = await prisma.s08_rapport_allergie.count({
     *   where: {
     *     // ... the filter for the S08_rapport_allergies we want to count
     *   }
     * })
    **/
    count<T extends s08_rapport_allergieCountArgs>(args?: Prisma.Subset<T, s08_rapport_allergieCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S08_rapport_allergieCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S08_rapport_allergie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S08_rapport_allergieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S08_rapport_allergieAggregateArgs>(args: Prisma.Subset<T, S08_rapport_allergieAggregateArgs>): Prisma.PrismaPromise<GetS08_rapport_allergieAggregateType<T>>;
    /**
     * Group by S08_rapport_allergie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s08_rapport_allergieGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s08_rapport_allergieGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s08_rapport_allergieGroupByArgs['orderBy'];
    } : {
        orderBy?: s08_rapport_allergieGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s08_rapport_allergieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS08_rapport_allergieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s08_rapport_allergie model
     */
    readonly fields: s08_rapport_allergieFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s08_rapport_allergie.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s08_rapport_allergieClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rapport<T extends Prisma.r_rapport_prDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_prDefaultArgs<ExtArgs>>): Prisma.Prisma__r_rapport_prClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    allergie_type<T extends Prisma.s08_rapport_allergie$allergie_typeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.s08_rapport_allergie$allergie_typeArgs<ExtArgs>>): Prisma.Prisma__s08_allergie_typeClient<runtime.Types.Result.GetResult<Prisma.$s08_allergie_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the s08_rapport_allergie model
 */
export interface s08_rapport_allergieFieldRefs {
    readonly id: Prisma.FieldRef<"s08_rapport_allergie", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s08_rapport_allergie", 'Int'>;
    readonly allergie_type_id: Prisma.FieldRef<"s08_rapport_allergie", 'Int'>;
    readonly libelle_autre: Prisma.FieldRef<"s08_rapport_allergie", 'String'>;
    readonly details: Prisma.FieldRef<"s08_rapport_allergie", 'String'>;
}
/**
 * s08_rapport_allergie findUnique
 */
export type s08_rapport_allergieFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_rapport_allergie
     */
    select?: Prisma.s08_rapport_allergieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_rapport_allergie
     */
    omit?: Prisma.s08_rapport_allergieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_rapport_allergieInclude<ExtArgs> | null;
    /**
     * Filter, which s08_rapport_allergie to fetch.
     */
    where: Prisma.s08_rapport_allergieWhereUniqueInput;
};
/**
 * s08_rapport_allergie findUniqueOrThrow
 */
export type s08_rapport_allergieFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_rapport_allergie
     */
    select?: Prisma.s08_rapport_allergieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_rapport_allergie
     */
    omit?: Prisma.s08_rapport_allergieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_rapport_allergieInclude<ExtArgs> | null;
    /**
     * Filter, which s08_rapport_allergie to fetch.
     */
    where: Prisma.s08_rapport_allergieWhereUniqueInput;
};
/**
 * s08_rapport_allergie findFirst
 */
export type s08_rapport_allergieFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_rapport_allergie
     */
    select?: Prisma.s08_rapport_allergieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_rapport_allergie
     */
    omit?: Prisma.s08_rapport_allergieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_rapport_allergieInclude<ExtArgs> | null;
    /**
     * Filter, which s08_rapport_allergie to fetch.
     */
    where?: Prisma.s08_rapport_allergieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s08_rapport_allergies to fetch.
     */
    orderBy?: Prisma.s08_rapport_allergieOrderByWithRelationInput | Prisma.s08_rapport_allergieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s08_rapport_allergies.
     */
    cursor?: Prisma.s08_rapport_allergieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s08_rapport_allergies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s08_rapport_allergies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s08_rapport_allergies.
     */
    distinct?: Prisma.S08_rapport_allergieScalarFieldEnum | Prisma.S08_rapport_allergieScalarFieldEnum[];
};
/**
 * s08_rapport_allergie findFirstOrThrow
 */
export type s08_rapport_allergieFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_rapport_allergie
     */
    select?: Prisma.s08_rapport_allergieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_rapport_allergie
     */
    omit?: Prisma.s08_rapport_allergieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_rapport_allergieInclude<ExtArgs> | null;
    /**
     * Filter, which s08_rapport_allergie to fetch.
     */
    where?: Prisma.s08_rapport_allergieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s08_rapport_allergies to fetch.
     */
    orderBy?: Prisma.s08_rapport_allergieOrderByWithRelationInput | Prisma.s08_rapport_allergieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s08_rapport_allergies.
     */
    cursor?: Prisma.s08_rapport_allergieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s08_rapport_allergies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s08_rapport_allergies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s08_rapport_allergies.
     */
    distinct?: Prisma.S08_rapport_allergieScalarFieldEnum | Prisma.S08_rapport_allergieScalarFieldEnum[];
};
/**
 * s08_rapport_allergie findMany
 */
export type s08_rapport_allergieFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_rapport_allergie
     */
    select?: Prisma.s08_rapport_allergieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_rapport_allergie
     */
    omit?: Prisma.s08_rapport_allergieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_rapport_allergieInclude<ExtArgs> | null;
    /**
     * Filter, which s08_rapport_allergies to fetch.
     */
    where?: Prisma.s08_rapport_allergieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s08_rapport_allergies to fetch.
     */
    orderBy?: Prisma.s08_rapport_allergieOrderByWithRelationInput | Prisma.s08_rapport_allergieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s08_rapport_allergies.
     */
    cursor?: Prisma.s08_rapport_allergieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s08_rapport_allergies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s08_rapport_allergies.
     */
    skip?: number;
    distinct?: Prisma.S08_rapport_allergieScalarFieldEnum | Prisma.S08_rapport_allergieScalarFieldEnum[];
};
/**
 * s08_rapport_allergie create
 */
export type s08_rapport_allergieCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_rapport_allergie
     */
    select?: Prisma.s08_rapport_allergieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_rapport_allergie
     */
    omit?: Prisma.s08_rapport_allergieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_rapport_allergieInclude<ExtArgs> | null;
    /**
     * The data needed to create a s08_rapport_allergie.
     */
    data: Prisma.XOR<Prisma.s08_rapport_allergieCreateInput, Prisma.s08_rapport_allergieUncheckedCreateInput>;
};
/**
 * s08_rapport_allergie createMany
 */
export type s08_rapport_allergieCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s08_rapport_allergies.
     */
    data: Prisma.s08_rapport_allergieCreateManyInput | Prisma.s08_rapport_allergieCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s08_rapport_allergie createManyAndReturn
 */
export type s08_rapport_allergieCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_rapport_allergie
     */
    select?: Prisma.s08_rapport_allergieSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_rapport_allergie
     */
    omit?: Prisma.s08_rapport_allergieOmit<ExtArgs> | null;
    /**
     * The data used to create many s08_rapport_allergies.
     */
    data: Prisma.s08_rapport_allergieCreateManyInput | Prisma.s08_rapport_allergieCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_rapport_allergieIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s08_rapport_allergie update
 */
export type s08_rapport_allergieUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_rapport_allergie
     */
    select?: Prisma.s08_rapport_allergieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_rapport_allergie
     */
    omit?: Prisma.s08_rapport_allergieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_rapport_allergieInclude<ExtArgs> | null;
    /**
     * The data needed to update a s08_rapport_allergie.
     */
    data: Prisma.XOR<Prisma.s08_rapport_allergieUpdateInput, Prisma.s08_rapport_allergieUncheckedUpdateInput>;
    /**
     * Choose, which s08_rapport_allergie to update.
     */
    where: Prisma.s08_rapport_allergieWhereUniqueInput;
};
/**
 * s08_rapport_allergie updateMany
 */
export type s08_rapport_allergieUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s08_rapport_allergies.
     */
    data: Prisma.XOR<Prisma.s08_rapport_allergieUpdateManyMutationInput, Prisma.s08_rapport_allergieUncheckedUpdateManyInput>;
    /**
     * Filter which s08_rapport_allergies to update
     */
    where?: Prisma.s08_rapport_allergieWhereInput;
    /**
     * Limit how many s08_rapport_allergies to update.
     */
    limit?: number;
};
/**
 * s08_rapport_allergie updateManyAndReturn
 */
export type s08_rapport_allergieUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_rapport_allergie
     */
    select?: Prisma.s08_rapport_allergieSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_rapport_allergie
     */
    omit?: Prisma.s08_rapport_allergieOmit<ExtArgs> | null;
    /**
     * The data used to update s08_rapport_allergies.
     */
    data: Prisma.XOR<Prisma.s08_rapport_allergieUpdateManyMutationInput, Prisma.s08_rapport_allergieUncheckedUpdateManyInput>;
    /**
     * Filter which s08_rapport_allergies to update
     */
    where?: Prisma.s08_rapport_allergieWhereInput;
    /**
     * Limit how many s08_rapport_allergies to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_rapport_allergieIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s08_rapport_allergie upsert
 */
export type s08_rapport_allergieUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_rapport_allergie
     */
    select?: Prisma.s08_rapport_allergieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_rapport_allergie
     */
    omit?: Prisma.s08_rapport_allergieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_rapport_allergieInclude<ExtArgs> | null;
    /**
     * The filter to search for the s08_rapport_allergie to update in case it exists.
     */
    where: Prisma.s08_rapport_allergieWhereUniqueInput;
    /**
     * In case the s08_rapport_allergie found by the `where` argument doesn't exist, create a new s08_rapport_allergie with this data.
     */
    create: Prisma.XOR<Prisma.s08_rapport_allergieCreateInput, Prisma.s08_rapport_allergieUncheckedCreateInput>;
    /**
     * In case the s08_rapport_allergie was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s08_rapport_allergieUpdateInput, Prisma.s08_rapport_allergieUncheckedUpdateInput>;
};
/**
 * s08_rapport_allergie delete
 */
export type s08_rapport_allergieDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_rapport_allergie
     */
    select?: Prisma.s08_rapport_allergieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_rapport_allergie
     */
    omit?: Prisma.s08_rapport_allergieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_rapport_allergieInclude<ExtArgs> | null;
    /**
     * Filter which s08_rapport_allergie to delete.
     */
    where: Prisma.s08_rapport_allergieWhereUniqueInput;
};
/**
 * s08_rapport_allergie deleteMany
 */
export type s08_rapport_allergieDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s08_rapport_allergies to delete
     */
    where?: Prisma.s08_rapport_allergieWhereInput;
    /**
     * Limit how many s08_rapport_allergies to delete.
     */
    limit?: number;
};
/**
 * s08_rapport_allergie.allergie_type
 */
export type s08_rapport_allergie$allergie_typeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergie_type
     */
    select?: Prisma.s08_allergie_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergie_type
     */
    omit?: Prisma.s08_allergie_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergie_typeInclude<ExtArgs> | null;
    where?: Prisma.s08_allergie_typeWhereInput;
};
/**
 * s08_rapport_allergie without action
 */
export type s08_rapport_allergieDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_rapport_allergie
     */
    select?: Prisma.s08_rapport_allergieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_rapport_allergie
     */
    omit?: Prisma.s08_rapport_allergieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_rapport_allergieInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s08_rapport_allergie.d.ts.map