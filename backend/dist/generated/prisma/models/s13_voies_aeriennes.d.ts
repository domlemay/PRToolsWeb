import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s13_voies_aeriennes
 *
 */
export type s13_voies_aeriennesModel = runtime.Types.Result.DefaultSelection<Prisma.$s13_voies_aeriennesPayload>;
export type AggregateS13_voies_aeriennes = {
    _count: S13_voies_aeriennesCountAggregateOutputType | null;
    _avg: S13_voies_aeriennesAvgAggregateOutputType | null;
    _sum: S13_voies_aeriennesSumAggregateOutputType | null;
    _min: S13_voies_aeriennesMinAggregateOutputType | null;
    _max: S13_voies_aeriennesMaxAggregateOutputType | null;
};
export type S13_voies_aeriennesAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S13_voies_aeriennesSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S13_voies_aeriennesMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    voies_aeriennes_liberees: string | null;
    appareil_succion: string | null;
    masque_poche: string | null;
    canule: string | null;
    canule_type: string | null;
    ballon_ventilatoire: string | null;
};
export type S13_voies_aeriennesMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    voies_aeriennes_liberees: string | null;
    appareil_succion: string | null;
    masque_poche: string | null;
    canule: string | null;
    canule_type: string | null;
    ballon_ventilatoire: string | null;
};
export type S13_voies_aeriennesCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    voies_aeriennes_liberees: number;
    appareil_succion: number;
    masque_poche: number;
    canule: number;
    canule_type: number;
    ballon_ventilatoire: number;
    _all: number;
};
export type S13_voies_aeriennesAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S13_voies_aeriennesSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S13_voies_aeriennesMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    voies_aeriennes_liberees?: true;
    appareil_succion?: true;
    masque_poche?: true;
    canule?: true;
    canule_type?: true;
    ballon_ventilatoire?: true;
};
export type S13_voies_aeriennesMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    voies_aeriennes_liberees?: true;
    appareil_succion?: true;
    masque_poche?: true;
    canule?: true;
    canule_type?: true;
    ballon_ventilatoire?: true;
};
export type S13_voies_aeriennesCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    voies_aeriennes_liberees?: true;
    appareil_succion?: true;
    masque_poche?: true;
    canule?: true;
    canule_type?: true;
    ballon_ventilatoire?: true;
    _all?: true;
};
export type S13_voies_aeriennesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s13_voies_aeriennes to aggregate.
     */
    where?: Prisma.s13_voies_aeriennesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_voies_aeriennes to fetch.
     */
    orderBy?: Prisma.s13_voies_aeriennesOrderByWithRelationInput | Prisma.s13_voies_aeriennesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s13_voies_aeriennesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_voies_aeriennes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_voies_aeriennes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s13_voies_aeriennes
    **/
    _count?: true | S13_voies_aeriennesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S13_voies_aeriennesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S13_voies_aeriennesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S13_voies_aeriennesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S13_voies_aeriennesMaxAggregateInputType;
};
export type GetS13_voies_aeriennesAggregateType<T extends S13_voies_aeriennesAggregateArgs> = {
    [P in keyof T & keyof AggregateS13_voies_aeriennes]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS13_voies_aeriennes[P]> : Prisma.GetScalarType<T[P], AggregateS13_voies_aeriennes[P]>;
};
export type s13_voies_aeriennesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s13_voies_aeriennesWhereInput;
    orderBy?: Prisma.s13_voies_aeriennesOrderByWithAggregationInput | Prisma.s13_voies_aeriennesOrderByWithAggregationInput[];
    by: Prisma.S13_voies_aeriennesScalarFieldEnum[] | Prisma.S13_voies_aeriennesScalarFieldEnum;
    having?: Prisma.s13_voies_aeriennesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S13_voies_aeriennesCountAggregateInputType | true;
    _avg?: S13_voies_aeriennesAvgAggregateInputType;
    _sum?: S13_voies_aeriennesSumAggregateInputType;
    _min?: S13_voies_aeriennesMinAggregateInputType;
    _max?: S13_voies_aeriennesMaxAggregateInputType;
};
export type S13_voies_aeriennesGroupByOutputType = {
    id: number;
    rapport_id: number;
    voies_aeriennes_liberees: string | null;
    appareil_succion: string | null;
    masque_poche: string | null;
    canule: string | null;
    canule_type: string | null;
    ballon_ventilatoire: string | null;
    _count: S13_voies_aeriennesCountAggregateOutputType | null;
    _avg: S13_voies_aeriennesAvgAggregateOutputType | null;
    _sum: S13_voies_aeriennesSumAggregateOutputType | null;
    _min: S13_voies_aeriennesMinAggregateOutputType | null;
    _max: S13_voies_aeriennesMaxAggregateOutputType | null;
};
type GetS13_voies_aeriennesGroupByPayload<T extends s13_voies_aeriennesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S13_voies_aeriennesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S13_voies_aeriennesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S13_voies_aeriennesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S13_voies_aeriennesGroupByOutputType[P]>;
}>>;
export type s13_voies_aeriennesWhereInput = {
    AND?: Prisma.s13_voies_aeriennesWhereInput | Prisma.s13_voies_aeriennesWhereInput[];
    OR?: Prisma.s13_voies_aeriennesWhereInput[];
    NOT?: Prisma.s13_voies_aeriennesWhereInput | Prisma.s13_voies_aeriennesWhereInput[];
    id?: Prisma.IntFilter<"s13_voies_aeriennes"> | number;
    rapport_id?: Prisma.IntFilter<"s13_voies_aeriennes"> | number;
    voies_aeriennes_liberees?: Prisma.StringNullableFilter<"s13_voies_aeriennes"> | string | null;
    appareil_succion?: Prisma.StringNullableFilter<"s13_voies_aeriennes"> | string | null;
    masque_poche?: Prisma.StringNullableFilter<"s13_voies_aeriennes"> | string | null;
    canule?: Prisma.StringNullableFilter<"s13_voies_aeriennes"> | string | null;
    canule_type?: Prisma.StringNullableFilter<"s13_voies_aeriennes"> | string | null;
    ballon_ventilatoire?: Prisma.StringNullableFilter<"s13_voies_aeriennes"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s13_voies_aeriennesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    voies_aeriennes_liberees?: Prisma.SortOrderInput | Prisma.SortOrder;
    appareil_succion?: Prisma.SortOrderInput | Prisma.SortOrder;
    masque_poche?: Prisma.SortOrderInput | Prisma.SortOrder;
    canule?: Prisma.SortOrderInput | Prisma.SortOrder;
    canule_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    ballon_ventilatoire?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s13_voies_aeriennesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id?: number;
    AND?: Prisma.s13_voies_aeriennesWhereInput | Prisma.s13_voies_aeriennesWhereInput[];
    OR?: Prisma.s13_voies_aeriennesWhereInput[];
    NOT?: Prisma.s13_voies_aeriennesWhereInput | Prisma.s13_voies_aeriennesWhereInput[];
    voies_aeriennes_liberees?: Prisma.StringNullableFilter<"s13_voies_aeriennes"> | string | null;
    appareil_succion?: Prisma.StringNullableFilter<"s13_voies_aeriennes"> | string | null;
    masque_poche?: Prisma.StringNullableFilter<"s13_voies_aeriennes"> | string | null;
    canule?: Prisma.StringNullableFilter<"s13_voies_aeriennes"> | string | null;
    canule_type?: Prisma.StringNullableFilter<"s13_voies_aeriennes"> | string | null;
    ballon_ventilatoire?: Prisma.StringNullableFilter<"s13_voies_aeriennes"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id" | "rapport_id">;
export type s13_voies_aeriennesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    voies_aeriennes_liberees?: Prisma.SortOrderInput | Prisma.SortOrder;
    appareil_succion?: Prisma.SortOrderInput | Prisma.SortOrder;
    masque_poche?: Prisma.SortOrderInput | Prisma.SortOrder;
    canule?: Prisma.SortOrderInput | Prisma.SortOrder;
    canule_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    ballon_ventilatoire?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s13_voies_aeriennesCountOrderByAggregateInput;
    _avg?: Prisma.s13_voies_aeriennesAvgOrderByAggregateInput;
    _max?: Prisma.s13_voies_aeriennesMaxOrderByAggregateInput;
    _min?: Prisma.s13_voies_aeriennesMinOrderByAggregateInput;
    _sum?: Prisma.s13_voies_aeriennesSumOrderByAggregateInput;
};
export type s13_voies_aeriennesScalarWhereWithAggregatesInput = {
    AND?: Prisma.s13_voies_aeriennesScalarWhereWithAggregatesInput | Prisma.s13_voies_aeriennesScalarWhereWithAggregatesInput[];
    OR?: Prisma.s13_voies_aeriennesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s13_voies_aeriennesScalarWhereWithAggregatesInput | Prisma.s13_voies_aeriennesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s13_voies_aeriennes"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s13_voies_aeriennes"> | number;
    voies_aeriennes_liberees?: Prisma.StringNullableWithAggregatesFilter<"s13_voies_aeriennes"> | string | null;
    appareil_succion?: Prisma.StringNullableWithAggregatesFilter<"s13_voies_aeriennes"> | string | null;
    masque_poche?: Prisma.StringNullableWithAggregatesFilter<"s13_voies_aeriennes"> | string | null;
    canule?: Prisma.StringNullableWithAggregatesFilter<"s13_voies_aeriennes"> | string | null;
    canule_type?: Prisma.StringNullableWithAggregatesFilter<"s13_voies_aeriennes"> | string | null;
    ballon_ventilatoire?: Prisma.StringNullableWithAggregatesFilter<"s13_voies_aeriennes"> | string | null;
};
export type s13_voies_aeriennesCreateInput = {
    voies_aeriennes_liberees?: string | null;
    appareil_succion?: string | null;
    masque_poche?: string | null;
    canule?: string | null;
    canule_type?: string | null;
    ballon_ventilatoire?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS13_voies_aeriennesInput;
};
export type s13_voies_aeriennesUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    voies_aeriennes_liberees?: string | null;
    appareil_succion?: string | null;
    masque_poche?: string | null;
    canule?: string | null;
    canule_type?: string | null;
    ballon_ventilatoire?: string | null;
};
export type s13_voies_aeriennesUpdateInput = {
    voies_aeriennes_liberees?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appareil_succion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    masque_poche?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canule_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ballon_ventilatoire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS13_voies_aeriennesNestedInput;
};
export type s13_voies_aeriennesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    voies_aeriennes_liberees?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appareil_succion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    masque_poche?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canule_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ballon_ventilatoire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_voies_aeriennesCreateManyInput = {
    id?: number;
    rapport_id: number;
    voies_aeriennes_liberees?: string | null;
    appareil_succion?: string | null;
    masque_poche?: string | null;
    canule?: string | null;
    canule_type?: string | null;
    ballon_ventilatoire?: string | null;
};
export type s13_voies_aeriennesUpdateManyMutationInput = {
    voies_aeriennes_liberees?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appareil_succion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    masque_poche?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canule_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ballon_ventilatoire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_voies_aeriennesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    voies_aeriennes_liberees?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appareil_succion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    masque_poche?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canule_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ballon_ventilatoire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type S13_voies_aeriennesNullableScalarRelationFilter = {
    is?: Prisma.s13_voies_aeriennesWhereInput | null;
    isNot?: Prisma.s13_voies_aeriennesWhereInput | null;
};
export type s13_voies_aeriennesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    voies_aeriennes_liberees?: Prisma.SortOrder;
    appareil_succion?: Prisma.SortOrder;
    masque_poche?: Prisma.SortOrder;
    canule?: Prisma.SortOrder;
    canule_type?: Prisma.SortOrder;
    ballon_ventilatoire?: Prisma.SortOrder;
};
export type s13_voies_aeriennesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s13_voies_aeriennesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    voies_aeriennes_liberees?: Prisma.SortOrder;
    appareil_succion?: Prisma.SortOrder;
    masque_poche?: Prisma.SortOrder;
    canule?: Prisma.SortOrder;
    canule_type?: Prisma.SortOrder;
    ballon_ventilatoire?: Prisma.SortOrder;
};
export type s13_voies_aeriennesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    voies_aeriennes_liberees?: Prisma.SortOrder;
    appareil_succion?: Prisma.SortOrder;
    masque_poche?: Prisma.SortOrder;
    canule?: Prisma.SortOrder;
    canule_type?: Prisma.SortOrder;
    ballon_ventilatoire?: Prisma.SortOrder;
};
export type s13_voies_aeriennesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s13_voies_aeriennesCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s13_voies_aeriennesCreateWithoutRapportInput, Prisma.s13_voies_aeriennesUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_voies_aeriennesCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s13_voies_aeriennesWhereUniqueInput;
};
export type s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s13_voies_aeriennesCreateWithoutRapportInput, Prisma.s13_voies_aeriennesUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_voies_aeriennesCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s13_voies_aeriennesWhereUniqueInput;
};
export type s13_voies_aeriennesUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s13_voies_aeriennesCreateWithoutRapportInput, Prisma.s13_voies_aeriennesUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_voies_aeriennesCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s13_voies_aeriennesUpsertWithoutRapportInput;
    disconnect?: Prisma.s13_voies_aeriennesWhereInput | boolean;
    delete?: Prisma.s13_voies_aeriennesWhereInput | boolean;
    connect?: Prisma.s13_voies_aeriennesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s13_voies_aeriennesUpdateToOneWithWhereWithoutRapportInput, Prisma.s13_voies_aeriennesUpdateWithoutRapportInput>, Prisma.s13_voies_aeriennesUncheckedUpdateWithoutRapportInput>;
};
export type s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s13_voies_aeriennesCreateWithoutRapportInput, Prisma.s13_voies_aeriennesUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_voies_aeriennesCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s13_voies_aeriennesUpsertWithoutRapportInput;
    disconnect?: Prisma.s13_voies_aeriennesWhereInput | boolean;
    delete?: Prisma.s13_voies_aeriennesWhereInput | boolean;
    connect?: Prisma.s13_voies_aeriennesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s13_voies_aeriennesUpdateToOneWithWhereWithoutRapportInput, Prisma.s13_voies_aeriennesUpdateWithoutRapportInput>, Prisma.s13_voies_aeriennesUncheckedUpdateWithoutRapportInput>;
};
export type s13_voies_aeriennesCreateWithoutRapportInput = {
    voies_aeriennes_liberees?: string | null;
    appareil_succion?: string | null;
    masque_poche?: string | null;
    canule?: string | null;
    canule_type?: string | null;
    ballon_ventilatoire?: string | null;
};
export type s13_voies_aeriennesUncheckedCreateWithoutRapportInput = {
    id?: number;
    voies_aeriennes_liberees?: string | null;
    appareil_succion?: string | null;
    masque_poche?: string | null;
    canule?: string | null;
    canule_type?: string | null;
    ballon_ventilatoire?: string | null;
};
export type s13_voies_aeriennesCreateOrConnectWithoutRapportInput = {
    where: Prisma.s13_voies_aeriennesWhereUniqueInput;
    create: Prisma.XOR<Prisma.s13_voies_aeriennesCreateWithoutRapportInput, Prisma.s13_voies_aeriennesUncheckedCreateWithoutRapportInput>;
};
export type s13_voies_aeriennesUpsertWithoutRapportInput = {
    update: Prisma.XOR<Prisma.s13_voies_aeriennesUpdateWithoutRapportInput, Prisma.s13_voies_aeriennesUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s13_voies_aeriennesCreateWithoutRapportInput, Prisma.s13_voies_aeriennesUncheckedCreateWithoutRapportInput>;
    where?: Prisma.s13_voies_aeriennesWhereInput;
};
export type s13_voies_aeriennesUpdateToOneWithWhereWithoutRapportInput = {
    where?: Prisma.s13_voies_aeriennesWhereInput;
    data: Prisma.XOR<Prisma.s13_voies_aeriennesUpdateWithoutRapportInput, Prisma.s13_voies_aeriennesUncheckedUpdateWithoutRapportInput>;
};
export type s13_voies_aeriennesUpdateWithoutRapportInput = {
    voies_aeriennes_liberees?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appareil_succion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    masque_poche?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canule_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ballon_ventilatoire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_voies_aeriennesUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    voies_aeriennes_liberees?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appareil_succion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    masque_poche?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canule?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canule_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ballon_ventilatoire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_voies_aeriennesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    voies_aeriennes_liberees?: boolean;
    appareil_succion?: boolean;
    masque_poche?: boolean;
    canule?: boolean;
    canule_type?: boolean;
    ballon_ventilatoire?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_voies_aeriennes"]>;
export type s13_voies_aeriennesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    voies_aeriennes_liberees?: boolean;
    appareil_succion?: boolean;
    masque_poche?: boolean;
    canule?: boolean;
    canule_type?: boolean;
    ballon_ventilatoire?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_voies_aeriennes"]>;
export type s13_voies_aeriennesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    voies_aeriennes_liberees?: boolean;
    appareil_succion?: boolean;
    masque_poche?: boolean;
    canule?: boolean;
    canule_type?: boolean;
    ballon_ventilatoire?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_voies_aeriennes"]>;
export type s13_voies_aeriennesSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    voies_aeriennes_liberees?: boolean;
    appareil_succion?: boolean;
    masque_poche?: boolean;
    canule?: boolean;
    canule_type?: boolean;
    ballon_ventilatoire?: boolean;
};
export type s13_voies_aeriennesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "voies_aeriennes_liberees" | "appareil_succion" | "masque_poche" | "canule" | "canule_type" | "ballon_ventilatoire", ExtArgs["result"]["s13_voies_aeriennes"]>;
export type s13_voies_aeriennesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s13_voies_aeriennesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s13_voies_aeriennesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s13_voies_aeriennesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s13_voies_aeriennes";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        voies_aeriennes_liberees: string | null;
        appareil_succion: string | null;
        masque_poche: string | null;
        canule: string | null;
        canule_type: string | null;
        ballon_ventilatoire: string | null;
    }, ExtArgs["result"]["s13_voies_aeriennes"]>;
    composites: {};
};
export type s13_voies_aeriennesGetPayload<S extends boolean | null | undefined | s13_voies_aeriennesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s13_voies_aeriennesPayload, S>;
export type s13_voies_aeriennesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s13_voies_aeriennesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S13_voies_aeriennesCountAggregateInputType | true;
};
export interface s13_voies_aeriennesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s13_voies_aeriennes'];
        meta: {
            name: 's13_voies_aeriennes';
        };
    };
    /**
     * Find zero or one S13_voies_aeriennes that matches the filter.
     * @param {s13_voies_aeriennesFindUniqueArgs} args - Arguments to find a S13_voies_aeriennes
     * @example
     * // Get one S13_voies_aeriennes
     * const s13_voies_aeriennes = await prisma.s13_voies_aeriennes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s13_voies_aeriennesFindUniqueArgs>(args: Prisma.SelectSubset<T, s13_voies_aeriennesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s13_voies_aeriennesClient<runtime.Types.Result.GetResult<Prisma.$s13_voies_aeriennesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S13_voies_aeriennes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s13_voies_aeriennesFindUniqueOrThrowArgs} args - Arguments to find a S13_voies_aeriennes
     * @example
     * // Get one S13_voies_aeriennes
     * const s13_voies_aeriennes = await prisma.s13_voies_aeriennes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s13_voies_aeriennesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s13_voies_aeriennesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s13_voies_aeriennesClient<runtime.Types.Result.GetResult<Prisma.$s13_voies_aeriennesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S13_voies_aeriennes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_voies_aeriennesFindFirstArgs} args - Arguments to find a S13_voies_aeriennes
     * @example
     * // Get one S13_voies_aeriennes
     * const s13_voies_aeriennes = await prisma.s13_voies_aeriennes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s13_voies_aeriennesFindFirstArgs>(args?: Prisma.SelectSubset<T, s13_voies_aeriennesFindFirstArgs<ExtArgs>>): Prisma.Prisma__s13_voies_aeriennesClient<runtime.Types.Result.GetResult<Prisma.$s13_voies_aeriennesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S13_voies_aeriennes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_voies_aeriennesFindFirstOrThrowArgs} args - Arguments to find a S13_voies_aeriennes
     * @example
     * // Get one S13_voies_aeriennes
     * const s13_voies_aeriennes = await prisma.s13_voies_aeriennes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s13_voies_aeriennesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s13_voies_aeriennesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s13_voies_aeriennesClient<runtime.Types.Result.GetResult<Prisma.$s13_voies_aeriennesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S13_voies_aeriennes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_voies_aeriennesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S13_voies_aeriennes
     * const s13_voies_aeriennes = await prisma.s13_voies_aeriennes.findMany()
     *
     * // Get first 10 S13_voies_aeriennes
     * const s13_voies_aeriennes = await prisma.s13_voies_aeriennes.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s13_voies_aeriennesWithIdOnly = await prisma.s13_voies_aeriennes.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s13_voies_aeriennesFindManyArgs>(args?: Prisma.SelectSubset<T, s13_voies_aeriennesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_voies_aeriennesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S13_voies_aeriennes.
     * @param {s13_voies_aeriennesCreateArgs} args - Arguments to create a S13_voies_aeriennes.
     * @example
     * // Create one S13_voies_aeriennes
     * const S13_voies_aeriennes = await prisma.s13_voies_aeriennes.create({
     *   data: {
     *     // ... data to create a S13_voies_aeriennes
     *   }
     * })
     *
     */
    create<T extends s13_voies_aeriennesCreateArgs>(args: Prisma.SelectSubset<T, s13_voies_aeriennesCreateArgs<ExtArgs>>): Prisma.Prisma__s13_voies_aeriennesClient<runtime.Types.Result.GetResult<Prisma.$s13_voies_aeriennesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S13_voies_aeriennes.
     * @param {s13_voies_aeriennesCreateManyArgs} args - Arguments to create many S13_voies_aeriennes.
     * @example
     * // Create many S13_voies_aeriennes
     * const s13_voies_aeriennes = await prisma.s13_voies_aeriennes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s13_voies_aeriennesCreateManyArgs>(args?: Prisma.SelectSubset<T, s13_voies_aeriennesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S13_voies_aeriennes and returns the data saved in the database.
     * @param {s13_voies_aeriennesCreateManyAndReturnArgs} args - Arguments to create many S13_voies_aeriennes.
     * @example
     * // Create many S13_voies_aeriennes
     * const s13_voies_aeriennes = await prisma.s13_voies_aeriennes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S13_voies_aeriennes and only return the `id`
     * const s13_voies_aeriennesWithIdOnly = await prisma.s13_voies_aeriennes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s13_voies_aeriennesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s13_voies_aeriennesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_voies_aeriennesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S13_voies_aeriennes.
     * @param {s13_voies_aeriennesDeleteArgs} args - Arguments to delete one S13_voies_aeriennes.
     * @example
     * // Delete one S13_voies_aeriennes
     * const S13_voies_aeriennes = await prisma.s13_voies_aeriennes.delete({
     *   where: {
     *     // ... filter to delete one S13_voies_aeriennes
     *   }
     * })
     *
     */
    delete<T extends s13_voies_aeriennesDeleteArgs>(args: Prisma.SelectSubset<T, s13_voies_aeriennesDeleteArgs<ExtArgs>>): Prisma.Prisma__s13_voies_aeriennesClient<runtime.Types.Result.GetResult<Prisma.$s13_voies_aeriennesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S13_voies_aeriennes.
     * @param {s13_voies_aeriennesUpdateArgs} args - Arguments to update one S13_voies_aeriennes.
     * @example
     * // Update one S13_voies_aeriennes
     * const s13_voies_aeriennes = await prisma.s13_voies_aeriennes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s13_voies_aeriennesUpdateArgs>(args: Prisma.SelectSubset<T, s13_voies_aeriennesUpdateArgs<ExtArgs>>): Prisma.Prisma__s13_voies_aeriennesClient<runtime.Types.Result.GetResult<Prisma.$s13_voies_aeriennesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S13_voies_aeriennes.
     * @param {s13_voies_aeriennesDeleteManyArgs} args - Arguments to filter S13_voies_aeriennes to delete.
     * @example
     * // Delete a few S13_voies_aeriennes
     * const { count } = await prisma.s13_voies_aeriennes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s13_voies_aeriennesDeleteManyArgs>(args?: Prisma.SelectSubset<T, s13_voies_aeriennesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S13_voies_aeriennes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_voies_aeriennesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S13_voies_aeriennes
     * const s13_voies_aeriennes = await prisma.s13_voies_aeriennes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s13_voies_aeriennesUpdateManyArgs>(args: Prisma.SelectSubset<T, s13_voies_aeriennesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S13_voies_aeriennes and returns the data updated in the database.
     * @param {s13_voies_aeriennesUpdateManyAndReturnArgs} args - Arguments to update many S13_voies_aeriennes.
     * @example
     * // Update many S13_voies_aeriennes
     * const s13_voies_aeriennes = await prisma.s13_voies_aeriennes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S13_voies_aeriennes and only return the `id`
     * const s13_voies_aeriennesWithIdOnly = await prisma.s13_voies_aeriennes.updateManyAndReturn({
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
    updateManyAndReturn<T extends s13_voies_aeriennesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s13_voies_aeriennesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_voies_aeriennesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S13_voies_aeriennes.
     * @param {s13_voies_aeriennesUpsertArgs} args - Arguments to update or create a S13_voies_aeriennes.
     * @example
     * // Update or create a S13_voies_aeriennes
     * const s13_voies_aeriennes = await prisma.s13_voies_aeriennes.upsert({
     *   create: {
     *     // ... data to create a S13_voies_aeriennes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S13_voies_aeriennes we want to update
     *   }
     * })
     */
    upsert<T extends s13_voies_aeriennesUpsertArgs>(args: Prisma.SelectSubset<T, s13_voies_aeriennesUpsertArgs<ExtArgs>>): Prisma.Prisma__s13_voies_aeriennesClient<runtime.Types.Result.GetResult<Prisma.$s13_voies_aeriennesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S13_voies_aeriennes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_voies_aeriennesCountArgs} args - Arguments to filter S13_voies_aeriennes to count.
     * @example
     * // Count the number of S13_voies_aeriennes
     * const count = await prisma.s13_voies_aeriennes.count({
     *   where: {
     *     // ... the filter for the S13_voies_aeriennes we want to count
     *   }
     * })
    **/
    count<T extends s13_voies_aeriennesCountArgs>(args?: Prisma.Subset<T, s13_voies_aeriennesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S13_voies_aeriennesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S13_voies_aeriennes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S13_voies_aeriennesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S13_voies_aeriennesAggregateArgs>(args: Prisma.Subset<T, S13_voies_aeriennesAggregateArgs>): Prisma.PrismaPromise<GetS13_voies_aeriennesAggregateType<T>>;
    /**
     * Group by S13_voies_aeriennes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_voies_aeriennesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s13_voies_aeriennesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s13_voies_aeriennesGroupByArgs['orderBy'];
    } : {
        orderBy?: s13_voies_aeriennesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s13_voies_aeriennesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS13_voies_aeriennesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s13_voies_aeriennes model
     */
    readonly fields: s13_voies_aeriennesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s13_voies_aeriennes.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s13_voies_aeriennesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the s13_voies_aeriennes model
 */
export interface s13_voies_aeriennesFieldRefs {
    readonly id: Prisma.FieldRef<"s13_voies_aeriennes", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s13_voies_aeriennes", 'Int'>;
    readonly voies_aeriennes_liberees: Prisma.FieldRef<"s13_voies_aeriennes", 'String'>;
    readonly appareil_succion: Prisma.FieldRef<"s13_voies_aeriennes", 'String'>;
    readonly masque_poche: Prisma.FieldRef<"s13_voies_aeriennes", 'String'>;
    readonly canule: Prisma.FieldRef<"s13_voies_aeriennes", 'String'>;
    readonly canule_type: Prisma.FieldRef<"s13_voies_aeriennes", 'String'>;
    readonly ballon_ventilatoire: Prisma.FieldRef<"s13_voies_aeriennes", 'String'>;
}
/**
 * s13_voies_aeriennes findUnique
 */
export type s13_voies_aeriennesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_voies_aeriennes
     */
    select?: Prisma.s13_voies_aeriennesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_voies_aeriennes
     */
    omit?: Prisma.s13_voies_aeriennesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_voies_aeriennesInclude<ExtArgs> | null;
    /**
     * Filter, which s13_voies_aeriennes to fetch.
     */
    where: Prisma.s13_voies_aeriennesWhereUniqueInput;
};
/**
 * s13_voies_aeriennes findUniqueOrThrow
 */
export type s13_voies_aeriennesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_voies_aeriennes
     */
    select?: Prisma.s13_voies_aeriennesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_voies_aeriennes
     */
    omit?: Prisma.s13_voies_aeriennesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_voies_aeriennesInclude<ExtArgs> | null;
    /**
     * Filter, which s13_voies_aeriennes to fetch.
     */
    where: Prisma.s13_voies_aeriennesWhereUniqueInput;
};
/**
 * s13_voies_aeriennes findFirst
 */
export type s13_voies_aeriennesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_voies_aeriennes
     */
    select?: Prisma.s13_voies_aeriennesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_voies_aeriennes
     */
    omit?: Prisma.s13_voies_aeriennesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_voies_aeriennesInclude<ExtArgs> | null;
    /**
     * Filter, which s13_voies_aeriennes to fetch.
     */
    where?: Prisma.s13_voies_aeriennesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_voies_aeriennes to fetch.
     */
    orderBy?: Prisma.s13_voies_aeriennesOrderByWithRelationInput | Prisma.s13_voies_aeriennesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s13_voies_aeriennes.
     */
    cursor?: Prisma.s13_voies_aeriennesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_voies_aeriennes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_voies_aeriennes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s13_voies_aeriennes.
     */
    distinct?: Prisma.S13_voies_aeriennesScalarFieldEnum | Prisma.S13_voies_aeriennesScalarFieldEnum[];
};
/**
 * s13_voies_aeriennes findFirstOrThrow
 */
export type s13_voies_aeriennesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_voies_aeriennes
     */
    select?: Prisma.s13_voies_aeriennesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_voies_aeriennes
     */
    omit?: Prisma.s13_voies_aeriennesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_voies_aeriennesInclude<ExtArgs> | null;
    /**
     * Filter, which s13_voies_aeriennes to fetch.
     */
    where?: Prisma.s13_voies_aeriennesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_voies_aeriennes to fetch.
     */
    orderBy?: Prisma.s13_voies_aeriennesOrderByWithRelationInput | Prisma.s13_voies_aeriennesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s13_voies_aeriennes.
     */
    cursor?: Prisma.s13_voies_aeriennesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_voies_aeriennes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_voies_aeriennes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s13_voies_aeriennes.
     */
    distinct?: Prisma.S13_voies_aeriennesScalarFieldEnum | Prisma.S13_voies_aeriennesScalarFieldEnum[];
};
/**
 * s13_voies_aeriennes findMany
 */
export type s13_voies_aeriennesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_voies_aeriennes
     */
    select?: Prisma.s13_voies_aeriennesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_voies_aeriennes
     */
    omit?: Prisma.s13_voies_aeriennesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_voies_aeriennesInclude<ExtArgs> | null;
    /**
     * Filter, which s13_voies_aeriennes to fetch.
     */
    where?: Prisma.s13_voies_aeriennesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_voies_aeriennes to fetch.
     */
    orderBy?: Prisma.s13_voies_aeriennesOrderByWithRelationInput | Prisma.s13_voies_aeriennesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s13_voies_aeriennes.
     */
    cursor?: Prisma.s13_voies_aeriennesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_voies_aeriennes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_voies_aeriennes.
     */
    skip?: number;
    distinct?: Prisma.S13_voies_aeriennesScalarFieldEnum | Prisma.S13_voies_aeriennesScalarFieldEnum[];
};
/**
 * s13_voies_aeriennes create
 */
export type s13_voies_aeriennesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_voies_aeriennes
     */
    select?: Prisma.s13_voies_aeriennesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_voies_aeriennes
     */
    omit?: Prisma.s13_voies_aeriennesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_voies_aeriennesInclude<ExtArgs> | null;
    /**
     * The data needed to create a s13_voies_aeriennes.
     */
    data: Prisma.XOR<Prisma.s13_voies_aeriennesCreateInput, Prisma.s13_voies_aeriennesUncheckedCreateInput>;
};
/**
 * s13_voies_aeriennes createMany
 */
export type s13_voies_aeriennesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s13_voies_aeriennes.
     */
    data: Prisma.s13_voies_aeriennesCreateManyInput | Prisma.s13_voies_aeriennesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s13_voies_aeriennes createManyAndReturn
 */
export type s13_voies_aeriennesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_voies_aeriennes
     */
    select?: Prisma.s13_voies_aeriennesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_voies_aeriennes
     */
    omit?: Prisma.s13_voies_aeriennesOmit<ExtArgs> | null;
    /**
     * The data used to create many s13_voies_aeriennes.
     */
    data: Prisma.s13_voies_aeriennesCreateManyInput | Prisma.s13_voies_aeriennesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_voies_aeriennesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s13_voies_aeriennes update
 */
export type s13_voies_aeriennesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_voies_aeriennes
     */
    select?: Prisma.s13_voies_aeriennesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_voies_aeriennes
     */
    omit?: Prisma.s13_voies_aeriennesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_voies_aeriennesInclude<ExtArgs> | null;
    /**
     * The data needed to update a s13_voies_aeriennes.
     */
    data: Prisma.XOR<Prisma.s13_voies_aeriennesUpdateInput, Prisma.s13_voies_aeriennesUncheckedUpdateInput>;
    /**
     * Choose, which s13_voies_aeriennes to update.
     */
    where: Prisma.s13_voies_aeriennesWhereUniqueInput;
};
/**
 * s13_voies_aeriennes updateMany
 */
export type s13_voies_aeriennesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s13_voies_aeriennes.
     */
    data: Prisma.XOR<Prisma.s13_voies_aeriennesUpdateManyMutationInput, Prisma.s13_voies_aeriennesUncheckedUpdateManyInput>;
    /**
     * Filter which s13_voies_aeriennes to update
     */
    where?: Prisma.s13_voies_aeriennesWhereInput;
    /**
     * Limit how many s13_voies_aeriennes to update.
     */
    limit?: number;
};
/**
 * s13_voies_aeriennes updateManyAndReturn
 */
export type s13_voies_aeriennesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_voies_aeriennes
     */
    select?: Prisma.s13_voies_aeriennesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_voies_aeriennes
     */
    omit?: Prisma.s13_voies_aeriennesOmit<ExtArgs> | null;
    /**
     * The data used to update s13_voies_aeriennes.
     */
    data: Prisma.XOR<Prisma.s13_voies_aeriennesUpdateManyMutationInput, Prisma.s13_voies_aeriennesUncheckedUpdateManyInput>;
    /**
     * Filter which s13_voies_aeriennes to update
     */
    where?: Prisma.s13_voies_aeriennesWhereInput;
    /**
     * Limit how many s13_voies_aeriennes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_voies_aeriennesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s13_voies_aeriennes upsert
 */
export type s13_voies_aeriennesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_voies_aeriennes
     */
    select?: Prisma.s13_voies_aeriennesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_voies_aeriennes
     */
    omit?: Prisma.s13_voies_aeriennesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_voies_aeriennesInclude<ExtArgs> | null;
    /**
     * The filter to search for the s13_voies_aeriennes to update in case it exists.
     */
    where: Prisma.s13_voies_aeriennesWhereUniqueInput;
    /**
     * In case the s13_voies_aeriennes found by the `where` argument doesn't exist, create a new s13_voies_aeriennes with this data.
     */
    create: Prisma.XOR<Prisma.s13_voies_aeriennesCreateInput, Prisma.s13_voies_aeriennesUncheckedCreateInput>;
    /**
     * In case the s13_voies_aeriennes was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s13_voies_aeriennesUpdateInput, Prisma.s13_voies_aeriennesUncheckedUpdateInput>;
};
/**
 * s13_voies_aeriennes delete
 */
export type s13_voies_aeriennesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_voies_aeriennes
     */
    select?: Prisma.s13_voies_aeriennesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_voies_aeriennes
     */
    omit?: Prisma.s13_voies_aeriennesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_voies_aeriennesInclude<ExtArgs> | null;
    /**
     * Filter which s13_voies_aeriennes to delete.
     */
    where: Prisma.s13_voies_aeriennesWhereUniqueInput;
};
/**
 * s13_voies_aeriennes deleteMany
 */
export type s13_voies_aeriennesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s13_voies_aeriennes to delete
     */
    where?: Prisma.s13_voies_aeriennesWhereInput;
    /**
     * Limit how many s13_voies_aeriennes to delete.
     */
    limit?: number;
};
/**
 * s13_voies_aeriennes without action
 */
export type s13_voies_aeriennesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_voies_aeriennes
     */
    select?: Prisma.s13_voies_aeriennesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_voies_aeriennes
     */
    omit?: Prisma.s13_voies_aeriennesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_voies_aeriennesInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s13_voies_aeriennes.d.ts.map