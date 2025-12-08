import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s04_approche_initiale
 *
 */
export type s04_approche_initialeModel = runtime.Types.Result.DefaultSelection<Prisma.$s04_approche_initialePayload>;
export type AggregateS04_approche_initiale = {
    _count: S04_approche_initialeCountAggregateOutputType | null;
    _avg: S04_approche_initialeAvgAggregateOutputType | null;
    _sum: S04_approche_initialeSumAggregateOutputType | null;
    _min: S04_approche_initialeMinAggregateOutputType | null;
    _max: S04_approche_initialeMaxAggregateOutputType | null;
};
export type S04_approche_initialeAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S04_approche_initialeSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S04_approche_initialeMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    etat_conscience: string | null;
    voies_respiratoires: string | null;
    respiration: string | null;
    pouls_presence: boolean | null;
    pouls_localisation: string | null;
    niveau_conscience: string | null;
    oriente: boolean | null;
};
export type S04_approche_initialeMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    etat_conscience: string | null;
    voies_respiratoires: string | null;
    respiration: string | null;
    pouls_presence: boolean | null;
    pouls_localisation: string | null;
    niveau_conscience: string | null;
    oriente: boolean | null;
};
export type S04_approche_initialeCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    etat_conscience: number;
    voies_respiratoires: number;
    respiration: number;
    pouls_presence: number;
    pouls_localisation: number;
    niveau_conscience: number;
    oriente: number;
    _all: number;
};
export type S04_approche_initialeAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S04_approche_initialeSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S04_approche_initialeMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    etat_conscience?: true;
    voies_respiratoires?: true;
    respiration?: true;
    pouls_presence?: true;
    pouls_localisation?: true;
    niveau_conscience?: true;
    oriente?: true;
};
export type S04_approche_initialeMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    etat_conscience?: true;
    voies_respiratoires?: true;
    respiration?: true;
    pouls_presence?: true;
    pouls_localisation?: true;
    niveau_conscience?: true;
    oriente?: true;
};
export type S04_approche_initialeCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    etat_conscience?: true;
    voies_respiratoires?: true;
    respiration?: true;
    pouls_presence?: true;
    pouls_localisation?: true;
    niveau_conscience?: true;
    oriente?: true;
    _all?: true;
};
export type S04_approche_initialeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s04_approche_initiale to aggregate.
     */
    where?: Prisma.s04_approche_initialeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s04_approche_initiales to fetch.
     */
    orderBy?: Prisma.s04_approche_initialeOrderByWithRelationInput | Prisma.s04_approche_initialeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s04_approche_initialeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s04_approche_initiales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s04_approche_initiales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s04_approche_initiales
    **/
    _count?: true | S04_approche_initialeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S04_approche_initialeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S04_approche_initialeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S04_approche_initialeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S04_approche_initialeMaxAggregateInputType;
};
export type GetS04_approche_initialeAggregateType<T extends S04_approche_initialeAggregateArgs> = {
    [P in keyof T & keyof AggregateS04_approche_initiale]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS04_approche_initiale[P]> : Prisma.GetScalarType<T[P], AggregateS04_approche_initiale[P]>;
};
export type s04_approche_initialeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s04_approche_initialeWhereInput;
    orderBy?: Prisma.s04_approche_initialeOrderByWithAggregationInput | Prisma.s04_approche_initialeOrderByWithAggregationInput[];
    by: Prisma.S04_approche_initialeScalarFieldEnum[] | Prisma.S04_approche_initialeScalarFieldEnum;
    having?: Prisma.s04_approche_initialeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S04_approche_initialeCountAggregateInputType | true;
    _avg?: S04_approche_initialeAvgAggregateInputType;
    _sum?: S04_approche_initialeSumAggregateInputType;
    _min?: S04_approche_initialeMinAggregateInputType;
    _max?: S04_approche_initialeMaxAggregateInputType;
};
export type S04_approche_initialeGroupByOutputType = {
    id: number;
    rapport_id: number;
    etat_conscience: string | null;
    voies_respiratoires: string | null;
    respiration: string | null;
    pouls_presence: boolean | null;
    pouls_localisation: string | null;
    niveau_conscience: string | null;
    oriente: boolean | null;
    _count: S04_approche_initialeCountAggregateOutputType | null;
    _avg: S04_approche_initialeAvgAggregateOutputType | null;
    _sum: S04_approche_initialeSumAggregateOutputType | null;
    _min: S04_approche_initialeMinAggregateOutputType | null;
    _max: S04_approche_initialeMaxAggregateOutputType | null;
};
type GetS04_approche_initialeGroupByPayload<T extends s04_approche_initialeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S04_approche_initialeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S04_approche_initialeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S04_approche_initialeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S04_approche_initialeGroupByOutputType[P]>;
}>>;
export type s04_approche_initialeWhereInput = {
    AND?: Prisma.s04_approche_initialeWhereInput | Prisma.s04_approche_initialeWhereInput[];
    OR?: Prisma.s04_approche_initialeWhereInput[];
    NOT?: Prisma.s04_approche_initialeWhereInput | Prisma.s04_approche_initialeWhereInput[];
    id?: Prisma.IntFilter<"s04_approche_initiale"> | number;
    rapport_id?: Prisma.IntFilter<"s04_approche_initiale"> | number;
    etat_conscience?: Prisma.StringNullableFilter<"s04_approche_initiale"> | string | null;
    voies_respiratoires?: Prisma.StringNullableFilter<"s04_approche_initiale"> | string | null;
    respiration?: Prisma.StringNullableFilter<"s04_approche_initiale"> | string | null;
    pouls_presence?: Prisma.BoolNullableFilter<"s04_approche_initiale"> | boolean | null;
    pouls_localisation?: Prisma.StringNullableFilter<"s04_approche_initiale"> | string | null;
    niveau_conscience?: Prisma.StringNullableFilter<"s04_approche_initiale"> | string | null;
    oriente?: Prisma.BoolNullableFilter<"s04_approche_initiale"> | boolean | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s04_approche_initialeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    etat_conscience?: Prisma.SortOrderInput | Prisma.SortOrder;
    voies_respiratoires?: Prisma.SortOrderInput | Prisma.SortOrder;
    respiration?: Prisma.SortOrderInput | Prisma.SortOrder;
    pouls_presence?: Prisma.SortOrderInput | Prisma.SortOrder;
    pouls_localisation?: Prisma.SortOrderInput | Prisma.SortOrder;
    niveau_conscience?: Prisma.SortOrderInput | Prisma.SortOrder;
    oriente?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s04_approche_initialeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id?: number;
    AND?: Prisma.s04_approche_initialeWhereInput | Prisma.s04_approche_initialeWhereInput[];
    OR?: Prisma.s04_approche_initialeWhereInput[];
    NOT?: Prisma.s04_approche_initialeWhereInput | Prisma.s04_approche_initialeWhereInput[];
    etat_conscience?: Prisma.StringNullableFilter<"s04_approche_initiale"> | string | null;
    voies_respiratoires?: Prisma.StringNullableFilter<"s04_approche_initiale"> | string | null;
    respiration?: Prisma.StringNullableFilter<"s04_approche_initiale"> | string | null;
    pouls_presence?: Prisma.BoolNullableFilter<"s04_approche_initiale"> | boolean | null;
    pouls_localisation?: Prisma.StringNullableFilter<"s04_approche_initiale"> | string | null;
    niveau_conscience?: Prisma.StringNullableFilter<"s04_approche_initiale"> | string | null;
    oriente?: Prisma.BoolNullableFilter<"s04_approche_initiale"> | boolean | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id" | "rapport_id">;
export type s04_approche_initialeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    etat_conscience?: Prisma.SortOrderInput | Prisma.SortOrder;
    voies_respiratoires?: Prisma.SortOrderInput | Prisma.SortOrder;
    respiration?: Prisma.SortOrderInput | Prisma.SortOrder;
    pouls_presence?: Prisma.SortOrderInput | Prisma.SortOrder;
    pouls_localisation?: Prisma.SortOrderInput | Prisma.SortOrder;
    niveau_conscience?: Prisma.SortOrderInput | Prisma.SortOrder;
    oriente?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s04_approche_initialeCountOrderByAggregateInput;
    _avg?: Prisma.s04_approche_initialeAvgOrderByAggregateInput;
    _max?: Prisma.s04_approche_initialeMaxOrderByAggregateInput;
    _min?: Prisma.s04_approche_initialeMinOrderByAggregateInput;
    _sum?: Prisma.s04_approche_initialeSumOrderByAggregateInput;
};
export type s04_approche_initialeScalarWhereWithAggregatesInput = {
    AND?: Prisma.s04_approche_initialeScalarWhereWithAggregatesInput | Prisma.s04_approche_initialeScalarWhereWithAggregatesInput[];
    OR?: Prisma.s04_approche_initialeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s04_approche_initialeScalarWhereWithAggregatesInput | Prisma.s04_approche_initialeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s04_approche_initiale"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s04_approche_initiale"> | number;
    etat_conscience?: Prisma.StringNullableWithAggregatesFilter<"s04_approche_initiale"> | string | null;
    voies_respiratoires?: Prisma.StringNullableWithAggregatesFilter<"s04_approche_initiale"> | string | null;
    respiration?: Prisma.StringNullableWithAggregatesFilter<"s04_approche_initiale"> | string | null;
    pouls_presence?: Prisma.BoolNullableWithAggregatesFilter<"s04_approche_initiale"> | boolean | null;
    pouls_localisation?: Prisma.StringNullableWithAggregatesFilter<"s04_approche_initiale"> | string | null;
    niveau_conscience?: Prisma.StringNullableWithAggregatesFilter<"s04_approche_initiale"> | string | null;
    oriente?: Prisma.BoolNullableWithAggregatesFilter<"s04_approche_initiale"> | boolean | null;
};
export type s04_approche_initialeCreateInput = {
    etat_conscience?: string | null;
    voies_respiratoires?: string | null;
    respiration?: string | null;
    pouls_presence?: boolean | null;
    pouls_localisation?: string | null;
    niveau_conscience?: string | null;
    oriente?: boolean | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS04_approche_initialeInput;
};
export type s04_approche_initialeUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    etat_conscience?: string | null;
    voies_respiratoires?: string | null;
    respiration?: string | null;
    pouls_presence?: boolean | null;
    pouls_localisation?: string | null;
    niveau_conscience?: string | null;
    oriente?: boolean | null;
};
export type s04_approche_initialeUpdateInput = {
    etat_conscience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voies_respiratoires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    respiration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pouls_presence?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pouls_localisation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    niveau_conscience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oriente?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS04_approche_initialeNestedInput;
};
export type s04_approche_initialeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    etat_conscience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voies_respiratoires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    respiration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pouls_presence?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pouls_localisation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    niveau_conscience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oriente?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s04_approche_initialeCreateManyInput = {
    id?: number;
    rapport_id: number;
    etat_conscience?: string | null;
    voies_respiratoires?: string | null;
    respiration?: string | null;
    pouls_presence?: boolean | null;
    pouls_localisation?: string | null;
    niveau_conscience?: string | null;
    oriente?: boolean | null;
};
export type s04_approche_initialeUpdateManyMutationInput = {
    etat_conscience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voies_respiratoires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    respiration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pouls_presence?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pouls_localisation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    niveau_conscience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oriente?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s04_approche_initialeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    etat_conscience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voies_respiratoires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    respiration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pouls_presence?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pouls_localisation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    niveau_conscience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oriente?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type S04_approche_initialeNullableScalarRelationFilter = {
    is?: Prisma.s04_approche_initialeWhereInput | null;
    isNot?: Prisma.s04_approche_initialeWhereInput | null;
};
export type s04_approche_initialeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    etat_conscience?: Prisma.SortOrder;
    voies_respiratoires?: Prisma.SortOrder;
    respiration?: Prisma.SortOrder;
    pouls_presence?: Prisma.SortOrder;
    pouls_localisation?: Prisma.SortOrder;
    niveau_conscience?: Prisma.SortOrder;
    oriente?: Prisma.SortOrder;
};
export type s04_approche_initialeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s04_approche_initialeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    etat_conscience?: Prisma.SortOrder;
    voies_respiratoires?: Prisma.SortOrder;
    respiration?: Prisma.SortOrder;
    pouls_presence?: Prisma.SortOrder;
    pouls_localisation?: Prisma.SortOrder;
    niveau_conscience?: Prisma.SortOrder;
    oriente?: Prisma.SortOrder;
};
export type s04_approche_initialeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    etat_conscience?: Prisma.SortOrder;
    voies_respiratoires?: Prisma.SortOrder;
    respiration?: Prisma.SortOrder;
    pouls_presence?: Prisma.SortOrder;
    pouls_localisation?: Prisma.SortOrder;
    niveau_conscience?: Prisma.SortOrder;
    oriente?: Prisma.SortOrder;
};
export type s04_approche_initialeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s04_approche_initialeCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s04_approche_initialeCreateWithoutRapportInput, Prisma.s04_approche_initialeUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s04_approche_initialeCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s04_approche_initialeWhereUniqueInput;
};
export type s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s04_approche_initialeCreateWithoutRapportInput, Prisma.s04_approche_initialeUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s04_approche_initialeCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s04_approche_initialeWhereUniqueInput;
};
export type s04_approche_initialeUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s04_approche_initialeCreateWithoutRapportInput, Prisma.s04_approche_initialeUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s04_approche_initialeCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s04_approche_initialeUpsertWithoutRapportInput;
    disconnect?: Prisma.s04_approche_initialeWhereInput | boolean;
    delete?: Prisma.s04_approche_initialeWhereInput | boolean;
    connect?: Prisma.s04_approche_initialeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s04_approche_initialeUpdateToOneWithWhereWithoutRapportInput, Prisma.s04_approche_initialeUpdateWithoutRapportInput>, Prisma.s04_approche_initialeUncheckedUpdateWithoutRapportInput>;
};
export type s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s04_approche_initialeCreateWithoutRapportInput, Prisma.s04_approche_initialeUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s04_approche_initialeCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s04_approche_initialeUpsertWithoutRapportInput;
    disconnect?: Prisma.s04_approche_initialeWhereInput | boolean;
    delete?: Prisma.s04_approche_initialeWhereInput | boolean;
    connect?: Prisma.s04_approche_initialeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s04_approche_initialeUpdateToOneWithWhereWithoutRapportInput, Prisma.s04_approche_initialeUpdateWithoutRapportInput>, Prisma.s04_approche_initialeUncheckedUpdateWithoutRapportInput>;
};
export type s04_approche_initialeCreateWithoutRapportInput = {
    etat_conscience?: string | null;
    voies_respiratoires?: string | null;
    respiration?: string | null;
    pouls_presence?: boolean | null;
    pouls_localisation?: string | null;
    niveau_conscience?: string | null;
    oriente?: boolean | null;
};
export type s04_approche_initialeUncheckedCreateWithoutRapportInput = {
    id?: number;
    etat_conscience?: string | null;
    voies_respiratoires?: string | null;
    respiration?: string | null;
    pouls_presence?: boolean | null;
    pouls_localisation?: string | null;
    niveau_conscience?: string | null;
    oriente?: boolean | null;
};
export type s04_approche_initialeCreateOrConnectWithoutRapportInput = {
    where: Prisma.s04_approche_initialeWhereUniqueInput;
    create: Prisma.XOR<Prisma.s04_approche_initialeCreateWithoutRapportInput, Prisma.s04_approche_initialeUncheckedCreateWithoutRapportInput>;
};
export type s04_approche_initialeUpsertWithoutRapportInput = {
    update: Prisma.XOR<Prisma.s04_approche_initialeUpdateWithoutRapportInput, Prisma.s04_approche_initialeUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s04_approche_initialeCreateWithoutRapportInput, Prisma.s04_approche_initialeUncheckedCreateWithoutRapportInput>;
    where?: Prisma.s04_approche_initialeWhereInput;
};
export type s04_approche_initialeUpdateToOneWithWhereWithoutRapportInput = {
    where?: Prisma.s04_approche_initialeWhereInput;
    data: Prisma.XOR<Prisma.s04_approche_initialeUpdateWithoutRapportInput, Prisma.s04_approche_initialeUncheckedUpdateWithoutRapportInput>;
};
export type s04_approche_initialeUpdateWithoutRapportInput = {
    etat_conscience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voies_respiratoires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    respiration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pouls_presence?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pouls_localisation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    niveau_conscience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oriente?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s04_approche_initialeUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    etat_conscience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    voies_respiratoires?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    respiration?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pouls_presence?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    pouls_localisation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    niveau_conscience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    oriente?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s04_approche_initialeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    etat_conscience?: boolean;
    voies_respiratoires?: boolean;
    respiration?: boolean;
    pouls_presence?: boolean;
    pouls_localisation?: boolean;
    niveau_conscience?: boolean;
    oriente?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s04_approche_initiale"]>;
export type s04_approche_initialeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    etat_conscience?: boolean;
    voies_respiratoires?: boolean;
    respiration?: boolean;
    pouls_presence?: boolean;
    pouls_localisation?: boolean;
    niveau_conscience?: boolean;
    oriente?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s04_approche_initiale"]>;
export type s04_approche_initialeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    etat_conscience?: boolean;
    voies_respiratoires?: boolean;
    respiration?: boolean;
    pouls_presence?: boolean;
    pouls_localisation?: boolean;
    niveau_conscience?: boolean;
    oriente?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s04_approche_initiale"]>;
export type s04_approche_initialeSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    etat_conscience?: boolean;
    voies_respiratoires?: boolean;
    respiration?: boolean;
    pouls_presence?: boolean;
    pouls_localisation?: boolean;
    niveau_conscience?: boolean;
    oriente?: boolean;
};
export type s04_approche_initialeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "etat_conscience" | "voies_respiratoires" | "respiration" | "pouls_presence" | "pouls_localisation" | "niveau_conscience" | "oriente", ExtArgs["result"]["s04_approche_initiale"]>;
export type s04_approche_initialeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s04_approche_initialeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s04_approche_initialeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s04_approche_initialePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s04_approche_initiale";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        etat_conscience: string | null;
        voies_respiratoires: string | null;
        respiration: string | null;
        pouls_presence: boolean | null;
        pouls_localisation: string | null;
        niveau_conscience: string | null;
        oriente: boolean | null;
    }, ExtArgs["result"]["s04_approche_initiale"]>;
    composites: {};
};
export type s04_approche_initialeGetPayload<S extends boolean | null | undefined | s04_approche_initialeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s04_approche_initialePayload, S>;
export type s04_approche_initialeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s04_approche_initialeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S04_approche_initialeCountAggregateInputType | true;
};
export interface s04_approche_initialeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s04_approche_initiale'];
        meta: {
            name: 's04_approche_initiale';
        };
    };
    /**
     * Find zero or one S04_approche_initiale that matches the filter.
     * @param {s04_approche_initialeFindUniqueArgs} args - Arguments to find a S04_approche_initiale
     * @example
     * // Get one S04_approche_initiale
     * const s04_approche_initiale = await prisma.s04_approche_initiale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s04_approche_initialeFindUniqueArgs>(args: Prisma.SelectSubset<T, s04_approche_initialeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s04_approche_initialeClient<runtime.Types.Result.GetResult<Prisma.$s04_approche_initialePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S04_approche_initiale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s04_approche_initialeFindUniqueOrThrowArgs} args - Arguments to find a S04_approche_initiale
     * @example
     * // Get one S04_approche_initiale
     * const s04_approche_initiale = await prisma.s04_approche_initiale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s04_approche_initialeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s04_approche_initialeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s04_approche_initialeClient<runtime.Types.Result.GetResult<Prisma.$s04_approche_initialePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S04_approche_initiale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s04_approche_initialeFindFirstArgs} args - Arguments to find a S04_approche_initiale
     * @example
     * // Get one S04_approche_initiale
     * const s04_approche_initiale = await prisma.s04_approche_initiale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s04_approche_initialeFindFirstArgs>(args?: Prisma.SelectSubset<T, s04_approche_initialeFindFirstArgs<ExtArgs>>): Prisma.Prisma__s04_approche_initialeClient<runtime.Types.Result.GetResult<Prisma.$s04_approche_initialePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S04_approche_initiale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s04_approche_initialeFindFirstOrThrowArgs} args - Arguments to find a S04_approche_initiale
     * @example
     * // Get one S04_approche_initiale
     * const s04_approche_initiale = await prisma.s04_approche_initiale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s04_approche_initialeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s04_approche_initialeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s04_approche_initialeClient<runtime.Types.Result.GetResult<Prisma.$s04_approche_initialePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S04_approche_initiales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s04_approche_initialeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S04_approche_initiales
     * const s04_approche_initiales = await prisma.s04_approche_initiale.findMany()
     *
     * // Get first 10 S04_approche_initiales
     * const s04_approche_initiales = await prisma.s04_approche_initiale.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s04_approche_initialeWithIdOnly = await prisma.s04_approche_initiale.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s04_approche_initialeFindManyArgs>(args?: Prisma.SelectSubset<T, s04_approche_initialeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s04_approche_initialePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S04_approche_initiale.
     * @param {s04_approche_initialeCreateArgs} args - Arguments to create a S04_approche_initiale.
     * @example
     * // Create one S04_approche_initiale
     * const S04_approche_initiale = await prisma.s04_approche_initiale.create({
     *   data: {
     *     // ... data to create a S04_approche_initiale
     *   }
     * })
     *
     */
    create<T extends s04_approche_initialeCreateArgs>(args: Prisma.SelectSubset<T, s04_approche_initialeCreateArgs<ExtArgs>>): Prisma.Prisma__s04_approche_initialeClient<runtime.Types.Result.GetResult<Prisma.$s04_approche_initialePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S04_approche_initiales.
     * @param {s04_approche_initialeCreateManyArgs} args - Arguments to create many S04_approche_initiales.
     * @example
     * // Create many S04_approche_initiales
     * const s04_approche_initiale = await prisma.s04_approche_initiale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s04_approche_initialeCreateManyArgs>(args?: Prisma.SelectSubset<T, s04_approche_initialeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S04_approche_initiales and returns the data saved in the database.
     * @param {s04_approche_initialeCreateManyAndReturnArgs} args - Arguments to create many S04_approche_initiales.
     * @example
     * // Create many S04_approche_initiales
     * const s04_approche_initiale = await prisma.s04_approche_initiale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S04_approche_initiales and only return the `id`
     * const s04_approche_initialeWithIdOnly = await prisma.s04_approche_initiale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s04_approche_initialeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s04_approche_initialeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s04_approche_initialePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S04_approche_initiale.
     * @param {s04_approche_initialeDeleteArgs} args - Arguments to delete one S04_approche_initiale.
     * @example
     * // Delete one S04_approche_initiale
     * const S04_approche_initiale = await prisma.s04_approche_initiale.delete({
     *   where: {
     *     // ... filter to delete one S04_approche_initiale
     *   }
     * })
     *
     */
    delete<T extends s04_approche_initialeDeleteArgs>(args: Prisma.SelectSubset<T, s04_approche_initialeDeleteArgs<ExtArgs>>): Prisma.Prisma__s04_approche_initialeClient<runtime.Types.Result.GetResult<Prisma.$s04_approche_initialePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S04_approche_initiale.
     * @param {s04_approche_initialeUpdateArgs} args - Arguments to update one S04_approche_initiale.
     * @example
     * // Update one S04_approche_initiale
     * const s04_approche_initiale = await prisma.s04_approche_initiale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s04_approche_initialeUpdateArgs>(args: Prisma.SelectSubset<T, s04_approche_initialeUpdateArgs<ExtArgs>>): Prisma.Prisma__s04_approche_initialeClient<runtime.Types.Result.GetResult<Prisma.$s04_approche_initialePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S04_approche_initiales.
     * @param {s04_approche_initialeDeleteManyArgs} args - Arguments to filter S04_approche_initiales to delete.
     * @example
     * // Delete a few S04_approche_initiales
     * const { count } = await prisma.s04_approche_initiale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s04_approche_initialeDeleteManyArgs>(args?: Prisma.SelectSubset<T, s04_approche_initialeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S04_approche_initiales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s04_approche_initialeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S04_approche_initiales
     * const s04_approche_initiale = await prisma.s04_approche_initiale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s04_approche_initialeUpdateManyArgs>(args: Prisma.SelectSubset<T, s04_approche_initialeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S04_approche_initiales and returns the data updated in the database.
     * @param {s04_approche_initialeUpdateManyAndReturnArgs} args - Arguments to update many S04_approche_initiales.
     * @example
     * // Update many S04_approche_initiales
     * const s04_approche_initiale = await prisma.s04_approche_initiale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S04_approche_initiales and only return the `id`
     * const s04_approche_initialeWithIdOnly = await prisma.s04_approche_initiale.updateManyAndReturn({
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
    updateManyAndReturn<T extends s04_approche_initialeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s04_approche_initialeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s04_approche_initialePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S04_approche_initiale.
     * @param {s04_approche_initialeUpsertArgs} args - Arguments to update or create a S04_approche_initiale.
     * @example
     * // Update or create a S04_approche_initiale
     * const s04_approche_initiale = await prisma.s04_approche_initiale.upsert({
     *   create: {
     *     // ... data to create a S04_approche_initiale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S04_approche_initiale we want to update
     *   }
     * })
     */
    upsert<T extends s04_approche_initialeUpsertArgs>(args: Prisma.SelectSubset<T, s04_approche_initialeUpsertArgs<ExtArgs>>): Prisma.Prisma__s04_approche_initialeClient<runtime.Types.Result.GetResult<Prisma.$s04_approche_initialePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S04_approche_initiales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s04_approche_initialeCountArgs} args - Arguments to filter S04_approche_initiales to count.
     * @example
     * // Count the number of S04_approche_initiales
     * const count = await prisma.s04_approche_initiale.count({
     *   where: {
     *     // ... the filter for the S04_approche_initiales we want to count
     *   }
     * })
    **/
    count<T extends s04_approche_initialeCountArgs>(args?: Prisma.Subset<T, s04_approche_initialeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S04_approche_initialeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S04_approche_initiale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S04_approche_initialeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S04_approche_initialeAggregateArgs>(args: Prisma.Subset<T, S04_approche_initialeAggregateArgs>): Prisma.PrismaPromise<GetS04_approche_initialeAggregateType<T>>;
    /**
     * Group by S04_approche_initiale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s04_approche_initialeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s04_approche_initialeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s04_approche_initialeGroupByArgs['orderBy'];
    } : {
        orderBy?: s04_approche_initialeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s04_approche_initialeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS04_approche_initialeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s04_approche_initiale model
     */
    readonly fields: s04_approche_initialeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s04_approche_initiale.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s04_approche_initialeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the s04_approche_initiale model
 */
export interface s04_approche_initialeFieldRefs {
    readonly id: Prisma.FieldRef<"s04_approche_initiale", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s04_approche_initiale", 'Int'>;
    readonly etat_conscience: Prisma.FieldRef<"s04_approche_initiale", 'String'>;
    readonly voies_respiratoires: Prisma.FieldRef<"s04_approche_initiale", 'String'>;
    readonly respiration: Prisma.FieldRef<"s04_approche_initiale", 'String'>;
    readonly pouls_presence: Prisma.FieldRef<"s04_approche_initiale", 'Boolean'>;
    readonly pouls_localisation: Prisma.FieldRef<"s04_approche_initiale", 'String'>;
    readonly niveau_conscience: Prisma.FieldRef<"s04_approche_initiale", 'String'>;
    readonly oriente: Prisma.FieldRef<"s04_approche_initiale", 'Boolean'>;
}
/**
 * s04_approche_initiale findUnique
 */
export type s04_approche_initialeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s04_approche_initiale
     */
    select?: Prisma.s04_approche_initialeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s04_approche_initiale
     */
    omit?: Prisma.s04_approche_initialeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s04_approche_initialeInclude<ExtArgs> | null;
    /**
     * Filter, which s04_approche_initiale to fetch.
     */
    where: Prisma.s04_approche_initialeWhereUniqueInput;
};
/**
 * s04_approche_initiale findUniqueOrThrow
 */
export type s04_approche_initialeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s04_approche_initiale
     */
    select?: Prisma.s04_approche_initialeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s04_approche_initiale
     */
    omit?: Prisma.s04_approche_initialeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s04_approche_initialeInclude<ExtArgs> | null;
    /**
     * Filter, which s04_approche_initiale to fetch.
     */
    where: Prisma.s04_approche_initialeWhereUniqueInput;
};
/**
 * s04_approche_initiale findFirst
 */
export type s04_approche_initialeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s04_approche_initiale
     */
    select?: Prisma.s04_approche_initialeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s04_approche_initiale
     */
    omit?: Prisma.s04_approche_initialeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s04_approche_initialeInclude<ExtArgs> | null;
    /**
     * Filter, which s04_approche_initiale to fetch.
     */
    where?: Prisma.s04_approche_initialeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s04_approche_initiales to fetch.
     */
    orderBy?: Prisma.s04_approche_initialeOrderByWithRelationInput | Prisma.s04_approche_initialeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s04_approche_initiales.
     */
    cursor?: Prisma.s04_approche_initialeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s04_approche_initiales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s04_approche_initiales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s04_approche_initiales.
     */
    distinct?: Prisma.S04_approche_initialeScalarFieldEnum | Prisma.S04_approche_initialeScalarFieldEnum[];
};
/**
 * s04_approche_initiale findFirstOrThrow
 */
export type s04_approche_initialeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s04_approche_initiale
     */
    select?: Prisma.s04_approche_initialeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s04_approche_initiale
     */
    omit?: Prisma.s04_approche_initialeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s04_approche_initialeInclude<ExtArgs> | null;
    /**
     * Filter, which s04_approche_initiale to fetch.
     */
    where?: Prisma.s04_approche_initialeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s04_approche_initiales to fetch.
     */
    orderBy?: Prisma.s04_approche_initialeOrderByWithRelationInput | Prisma.s04_approche_initialeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s04_approche_initiales.
     */
    cursor?: Prisma.s04_approche_initialeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s04_approche_initiales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s04_approche_initiales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s04_approche_initiales.
     */
    distinct?: Prisma.S04_approche_initialeScalarFieldEnum | Prisma.S04_approche_initialeScalarFieldEnum[];
};
/**
 * s04_approche_initiale findMany
 */
export type s04_approche_initialeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s04_approche_initiale
     */
    select?: Prisma.s04_approche_initialeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s04_approche_initiale
     */
    omit?: Prisma.s04_approche_initialeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s04_approche_initialeInclude<ExtArgs> | null;
    /**
     * Filter, which s04_approche_initiales to fetch.
     */
    where?: Prisma.s04_approche_initialeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s04_approche_initiales to fetch.
     */
    orderBy?: Prisma.s04_approche_initialeOrderByWithRelationInput | Prisma.s04_approche_initialeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s04_approche_initiales.
     */
    cursor?: Prisma.s04_approche_initialeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s04_approche_initiales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s04_approche_initiales.
     */
    skip?: number;
    distinct?: Prisma.S04_approche_initialeScalarFieldEnum | Prisma.S04_approche_initialeScalarFieldEnum[];
};
/**
 * s04_approche_initiale create
 */
export type s04_approche_initialeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s04_approche_initiale
     */
    select?: Prisma.s04_approche_initialeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s04_approche_initiale
     */
    omit?: Prisma.s04_approche_initialeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s04_approche_initialeInclude<ExtArgs> | null;
    /**
     * The data needed to create a s04_approche_initiale.
     */
    data: Prisma.XOR<Prisma.s04_approche_initialeCreateInput, Prisma.s04_approche_initialeUncheckedCreateInput>;
};
/**
 * s04_approche_initiale createMany
 */
export type s04_approche_initialeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s04_approche_initiales.
     */
    data: Prisma.s04_approche_initialeCreateManyInput | Prisma.s04_approche_initialeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s04_approche_initiale createManyAndReturn
 */
export type s04_approche_initialeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s04_approche_initiale
     */
    select?: Prisma.s04_approche_initialeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s04_approche_initiale
     */
    omit?: Prisma.s04_approche_initialeOmit<ExtArgs> | null;
    /**
     * The data used to create many s04_approche_initiales.
     */
    data: Prisma.s04_approche_initialeCreateManyInput | Prisma.s04_approche_initialeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s04_approche_initialeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s04_approche_initiale update
 */
export type s04_approche_initialeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s04_approche_initiale
     */
    select?: Prisma.s04_approche_initialeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s04_approche_initiale
     */
    omit?: Prisma.s04_approche_initialeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s04_approche_initialeInclude<ExtArgs> | null;
    /**
     * The data needed to update a s04_approche_initiale.
     */
    data: Prisma.XOR<Prisma.s04_approche_initialeUpdateInput, Prisma.s04_approche_initialeUncheckedUpdateInput>;
    /**
     * Choose, which s04_approche_initiale to update.
     */
    where: Prisma.s04_approche_initialeWhereUniqueInput;
};
/**
 * s04_approche_initiale updateMany
 */
export type s04_approche_initialeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s04_approche_initiales.
     */
    data: Prisma.XOR<Prisma.s04_approche_initialeUpdateManyMutationInput, Prisma.s04_approche_initialeUncheckedUpdateManyInput>;
    /**
     * Filter which s04_approche_initiales to update
     */
    where?: Prisma.s04_approche_initialeWhereInput;
    /**
     * Limit how many s04_approche_initiales to update.
     */
    limit?: number;
};
/**
 * s04_approche_initiale updateManyAndReturn
 */
export type s04_approche_initialeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s04_approche_initiale
     */
    select?: Prisma.s04_approche_initialeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s04_approche_initiale
     */
    omit?: Prisma.s04_approche_initialeOmit<ExtArgs> | null;
    /**
     * The data used to update s04_approche_initiales.
     */
    data: Prisma.XOR<Prisma.s04_approche_initialeUpdateManyMutationInput, Prisma.s04_approche_initialeUncheckedUpdateManyInput>;
    /**
     * Filter which s04_approche_initiales to update
     */
    where?: Prisma.s04_approche_initialeWhereInput;
    /**
     * Limit how many s04_approche_initiales to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s04_approche_initialeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s04_approche_initiale upsert
 */
export type s04_approche_initialeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s04_approche_initiale
     */
    select?: Prisma.s04_approche_initialeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s04_approche_initiale
     */
    omit?: Prisma.s04_approche_initialeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s04_approche_initialeInclude<ExtArgs> | null;
    /**
     * The filter to search for the s04_approche_initiale to update in case it exists.
     */
    where: Prisma.s04_approche_initialeWhereUniqueInput;
    /**
     * In case the s04_approche_initiale found by the `where` argument doesn't exist, create a new s04_approche_initiale with this data.
     */
    create: Prisma.XOR<Prisma.s04_approche_initialeCreateInput, Prisma.s04_approche_initialeUncheckedCreateInput>;
    /**
     * In case the s04_approche_initiale was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s04_approche_initialeUpdateInput, Prisma.s04_approche_initialeUncheckedUpdateInput>;
};
/**
 * s04_approche_initiale delete
 */
export type s04_approche_initialeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s04_approche_initiale
     */
    select?: Prisma.s04_approche_initialeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s04_approche_initiale
     */
    omit?: Prisma.s04_approche_initialeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s04_approche_initialeInclude<ExtArgs> | null;
    /**
     * Filter which s04_approche_initiale to delete.
     */
    where: Prisma.s04_approche_initialeWhereUniqueInput;
};
/**
 * s04_approche_initiale deleteMany
 */
export type s04_approche_initialeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s04_approche_initiales to delete
     */
    where?: Prisma.s04_approche_initialeWhereInput;
    /**
     * Limit how many s04_approche_initiales to delete.
     */
    limit?: number;
};
/**
 * s04_approche_initiale without action
 */
export type s04_approche_initialeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s04_approche_initiale
     */
    select?: Prisma.s04_approche_initialeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s04_approche_initiale
     */
    omit?: Prisma.s04_approche_initialeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s04_approche_initialeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s04_approche_initiale.d.ts.map