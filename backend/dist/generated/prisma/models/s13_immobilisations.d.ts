import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s13_immobilisations
 *
 */
export type s13_immobilisationsModel = runtime.Types.Result.DefaultSelection<Prisma.$s13_immobilisationsPayload>;
export type AggregateS13_immobilisations = {
    _count: S13_immobilisationsCountAggregateOutputType | null;
    _avg: S13_immobilisationsAvgAggregateOutputType | null;
    _sum: S13_immobilisationsSumAggregateOutputType | null;
    _min: S13_immobilisationsMinAggregateOutputType | null;
    _max: S13_immobilisationsMaxAggregateOutputType | null;
};
export type S13_immobilisationsAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S13_immobilisationsSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S13_immobilisationsMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    collet_cervical: string | null;
    collet_taille: string | null;
    matelas_immobilisateur: string | null;
    planche_longue: string | null;
    ked: string | null;
    attelle_fixation: string | null;
};
export type S13_immobilisationsMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    collet_cervical: string | null;
    collet_taille: string | null;
    matelas_immobilisateur: string | null;
    planche_longue: string | null;
    ked: string | null;
    attelle_fixation: string | null;
};
export type S13_immobilisationsCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    collet_cervical: number;
    collet_taille: number;
    matelas_immobilisateur: number;
    planche_longue: number;
    ked: number;
    attelle_fixation: number;
    _all: number;
};
export type S13_immobilisationsAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S13_immobilisationsSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S13_immobilisationsMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    collet_cervical?: true;
    collet_taille?: true;
    matelas_immobilisateur?: true;
    planche_longue?: true;
    ked?: true;
    attelle_fixation?: true;
};
export type S13_immobilisationsMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    collet_cervical?: true;
    collet_taille?: true;
    matelas_immobilisateur?: true;
    planche_longue?: true;
    ked?: true;
    attelle_fixation?: true;
};
export type S13_immobilisationsCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    collet_cervical?: true;
    collet_taille?: true;
    matelas_immobilisateur?: true;
    planche_longue?: true;
    ked?: true;
    attelle_fixation?: true;
    _all?: true;
};
export type S13_immobilisationsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s13_immobilisations to aggregate.
     */
    where?: Prisma.s13_immobilisationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_immobilisations to fetch.
     */
    orderBy?: Prisma.s13_immobilisationsOrderByWithRelationInput | Prisma.s13_immobilisationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s13_immobilisationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_immobilisations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_immobilisations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s13_immobilisations
    **/
    _count?: true | S13_immobilisationsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S13_immobilisationsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S13_immobilisationsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S13_immobilisationsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S13_immobilisationsMaxAggregateInputType;
};
export type GetS13_immobilisationsAggregateType<T extends S13_immobilisationsAggregateArgs> = {
    [P in keyof T & keyof AggregateS13_immobilisations]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS13_immobilisations[P]> : Prisma.GetScalarType<T[P], AggregateS13_immobilisations[P]>;
};
export type s13_immobilisationsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s13_immobilisationsWhereInput;
    orderBy?: Prisma.s13_immobilisationsOrderByWithAggregationInput | Prisma.s13_immobilisationsOrderByWithAggregationInput[];
    by: Prisma.S13_immobilisationsScalarFieldEnum[] | Prisma.S13_immobilisationsScalarFieldEnum;
    having?: Prisma.s13_immobilisationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S13_immobilisationsCountAggregateInputType | true;
    _avg?: S13_immobilisationsAvgAggregateInputType;
    _sum?: S13_immobilisationsSumAggregateInputType;
    _min?: S13_immobilisationsMinAggregateInputType;
    _max?: S13_immobilisationsMaxAggregateInputType;
};
export type S13_immobilisationsGroupByOutputType = {
    id: number;
    rapport_id: number;
    collet_cervical: string | null;
    collet_taille: string | null;
    matelas_immobilisateur: string | null;
    planche_longue: string | null;
    ked: string | null;
    attelle_fixation: string | null;
    _count: S13_immobilisationsCountAggregateOutputType | null;
    _avg: S13_immobilisationsAvgAggregateOutputType | null;
    _sum: S13_immobilisationsSumAggregateOutputType | null;
    _min: S13_immobilisationsMinAggregateOutputType | null;
    _max: S13_immobilisationsMaxAggregateOutputType | null;
};
type GetS13_immobilisationsGroupByPayload<T extends s13_immobilisationsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S13_immobilisationsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S13_immobilisationsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S13_immobilisationsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S13_immobilisationsGroupByOutputType[P]>;
}>>;
export type s13_immobilisationsWhereInput = {
    AND?: Prisma.s13_immobilisationsWhereInput | Prisma.s13_immobilisationsWhereInput[];
    OR?: Prisma.s13_immobilisationsWhereInput[];
    NOT?: Prisma.s13_immobilisationsWhereInput | Prisma.s13_immobilisationsWhereInput[];
    id?: Prisma.IntFilter<"s13_immobilisations"> | number;
    rapport_id?: Prisma.IntFilter<"s13_immobilisations"> | number;
    collet_cervical?: Prisma.StringNullableFilter<"s13_immobilisations"> | string | null;
    collet_taille?: Prisma.StringNullableFilter<"s13_immobilisations"> | string | null;
    matelas_immobilisateur?: Prisma.StringNullableFilter<"s13_immobilisations"> | string | null;
    planche_longue?: Prisma.StringNullableFilter<"s13_immobilisations"> | string | null;
    ked?: Prisma.StringNullableFilter<"s13_immobilisations"> | string | null;
    attelle_fixation?: Prisma.StringNullableFilter<"s13_immobilisations"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s13_immobilisationsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    collet_cervical?: Prisma.SortOrderInput | Prisma.SortOrder;
    collet_taille?: Prisma.SortOrderInput | Prisma.SortOrder;
    matelas_immobilisateur?: Prisma.SortOrderInput | Prisma.SortOrder;
    planche_longue?: Prisma.SortOrderInput | Prisma.SortOrder;
    ked?: Prisma.SortOrderInput | Prisma.SortOrder;
    attelle_fixation?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s13_immobilisationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id?: number;
    AND?: Prisma.s13_immobilisationsWhereInput | Prisma.s13_immobilisationsWhereInput[];
    OR?: Prisma.s13_immobilisationsWhereInput[];
    NOT?: Prisma.s13_immobilisationsWhereInput | Prisma.s13_immobilisationsWhereInput[];
    collet_cervical?: Prisma.StringNullableFilter<"s13_immobilisations"> | string | null;
    collet_taille?: Prisma.StringNullableFilter<"s13_immobilisations"> | string | null;
    matelas_immobilisateur?: Prisma.StringNullableFilter<"s13_immobilisations"> | string | null;
    planche_longue?: Prisma.StringNullableFilter<"s13_immobilisations"> | string | null;
    ked?: Prisma.StringNullableFilter<"s13_immobilisations"> | string | null;
    attelle_fixation?: Prisma.StringNullableFilter<"s13_immobilisations"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id" | "rapport_id">;
export type s13_immobilisationsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    collet_cervical?: Prisma.SortOrderInput | Prisma.SortOrder;
    collet_taille?: Prisma.SortOrderInput | Prisma.SortOrder;
    matelas_immobilisateur?: Prisma.SortOrderInput | Prisma.SortOrder;
    planche_longue?: Prisma.SortOrderInput | Prisma.SortOrder;
    ked?: Prisma.SortOrderInput | Prisma.SortOrder;
    attelle_fixation?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s13_immobilisationsCountOrderByAggregateInput;
    _avg?: Prisma.s13_immobilisationsAvgOrderByAggregateInput;
    _max?: Prisma.s13_immobilisationsMaxOrderByAggregateInput;
    _min?: Prisma.s13_immobilisationsMinOrderByAggregateInput;
    _sum?: Prisma.s13_immobilisationsSumOrderByAggregateInput;
};
export type s13_immobilisationsScalarWhereWithAggregatesInput = {
    AND?: Prisma.s13_immobilisationsScalarWhereWithAggregatesInput | Prisma.s13_immobilisationsScalarWhereWithAggregatesInput[];
    OR?: Prisma.s13_immobilisationsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s13_immobilisationsScalarWhereWithAggregatesInput | Prisma.s13_immobilisationsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s13_immobilisations"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s13_immobilisations"> | number;
    collet_cervical?: Prisma.StringNullableWithAggregatesFilter<"s13_immobilisations"> | string | null;
    collet_taille?: Prisma.StringNullableWithAggregatesFilter<"s13_immobilisations"> | string | null;
    matelas_immobilisateur?: Prisma.StringNullableWithAggregatesFilter<"s13_immobilisations"> | string | null;
    planche_longue?: Prisma.StringNullableWithAggregatesFilter<"s13_immobilisations"> | string | null;
    ked?: Prisma.StringNullableWithAggregatesFilter<"s13_immobilisations"> | string | null;
    attelle_fixation?: Prisma.StringNullableWithAggregatesFilter<"s13_immobilisations"> | string | null;
};
export type s13_immobilisationsCreateInput = {
    collet_cervical?: string | null;
    collet_taille?: string | null;
    matelas_immobilisateur?: string | null;
    planche_longue?: string | null;
    ked?: string | null;
    attelle_fixation?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS13_immobilisationsInput;
};
export type s13_immobilisationsUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    collet_cervical?: string | null;
    collet_taille?: string | null;
    matelas_immobilisateur?: string | null;
    planche_longue?: string | null;
    ked?: string | null;
    attelle_fixation?: string | null;
};
export type s13_immobilisationsUpdateInput = {
    collet_cervical?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collet_taille?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matelas_immobilisateur?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    planche_longue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attelle_fixation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS13_immobilisationsNestedInput;
};
export type s13_immobilisationsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    collet_cervical?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collet_taille?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matelas_immobilisateur?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    planche_longue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attelle_fixation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_immobilisationsCreateManyInput = {
    id?: number;
    rapport_id: number;
    collet_cervical?: string | null;
    collet_taille?: string | null;
    matelas_immobilisateur?: string | null;
    planche_longue?: string | null;
    ked?: string | null;
    attelle_fixation?: string | null;
};
export type s13_immobilisationsUpdateManyMutationInput = {
    collet_cervical?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collet_taille?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matelas_immobilisateur?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    planche_longue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attelle_fixation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_immobilisationsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    collet_cervical?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collet_taille?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matelas_immobilisateur?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    planche_longue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attelle_fixation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type S13_immobilisationsNullableScalarRelationFilter = {
    is?: Prisma.s13_immobilisationsWhereInput | null;
    isNot?: Prisma.s13_immobilisationsWhereInput | null;
};
export type s13_immobilisationsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    collet_cervical?: Prisma.SortOrder;
    collet_taille?: Prisma.SortOrder;
    matelas_immobilisateur?: Prisma.SortOrder;
    planche_longue?: Prisma.SortOrder;
    ked?: Prisma.SortOrder;
    attelle_fixation?: Prisma.SortOrder;
};
export type s13_immobilisationsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s13_immobilisationsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    collet_cervical?: Prisma.SortOrder;
    collet_taille?: Prisma.SortOrder;
    matelas_immobilisateur?: Prisma.SortOrder;
    planche_longue?: Prisma.SortOrder;
    ked?: Prisma.SortOrder;
    attelle_fixation?: Prisma.SortOrder;
};
export type s13_immobilisationsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    collet_cervical?: Prisma.SortOrder;
    collet_taille?: Prisma.SortOrder;
    matelas_immobilisateur?: Prisma.SortOrder;
    planche_longue?: Prisma.SortOrder;
    ked?: Prisma.SortOrder;
    attelle_fixation?: Prisma.SortOrder;
};
export type s13_immobilisationsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s13_immobilisationsCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s13_immobilisationsCreateWithoutRapportInput, Prisma.s13_immobilisationsUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_immobilisationsCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s13_immobilisationsWhereUniqueInput;
};
export type s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s13_immobilisationsCreateWithoutRapportInput, Prisma.s13_immobilisationsUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_immobilisationsCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s13_immobilisationsWhereUniqueInput;
};
export type s13_immobilisationsUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s13_immobilisationsCreateWithoutRapportInput, Prisma.s13_immobilisationsUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_immobilisationsCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s13_immobilisationsUpsertWithoutRapportInput;
    disconnect?: Prisma.s13_immobilisationsWhereInput | boolean;
    delete?: Prisma.s13_immobilisationsWhereInput | boolean;
    connect?: Prisma.s13_immobilisationsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s13_immobilisationsUpdateToOneWithWhereWithoutRapportInput, Prisma.s13_immobilisationsUpdateWithoutRapportInput>, Prisma.s13_immobilisationsUncheckedUpdateWithoutRapportInput>;
};
export type s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s13_immobilisationsCreateWithoutRapportInput, Prisma.s13_immobilisationsUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_immobilisationsCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s13_immobilisationsUpsertWithoutRapportInput;
    disconnect?: Prisma.s13_immobilisationsWhereInput | boolean;
    delete?: Prisma.s13_immobilisationsWhereInput | boolean;
    connect?: Prisma.s13_immobilisationsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s13_immobilisationsUpdateToOneWithWhereWithoutRapportInput, Prisma.s13_immobilisationsUpdateWithoutRapportInput>, Prisma.s13_immobilisationsUncheckedUpdateWithoutRapportInput>;
};
export type s13_immobilisationsCreateWithoutRapportInput = {
    collet_cervical?: string | null;
    collet_taille?: string | null;
    matelas_immobilisateur?: string | null;
    planche_longue?: string | null;
    ked?: string | null;
    attelle_fixation?: string | null;
};
export type s13_immobilisationsUncheckedCreateWithoutRapportInput = {
    id?: number;
    collet_cervical?: string | null;
    collet_taille?: string | null;
    matelas_immobilisateur?: string | null;
    planche_longue?: string | null;
    ked?: string | null;
    attelle_fixation?: string | null;
};
export type s13_immobilisationsCreateOrConnectWithoutRapportInput = {
    where: Prisma.s13_immobilisationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.s13_immobilisationsCreateWithoutRapportInput, Prisma.s13_immobilisationsUncheckedCreateWithoutRapportInput>;
};
export type s13_immobilisationsUpsertWithoutRapportInput = {
    update: Prisma.XOR<Prisma.s13_immobilisationsUpdateWithoutRapportInput, Prisma.s13_immobilisationsUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s13_immobilisationsCreateWithoutRapportInput, Prisma.s13_immobilisationsUncheckedCreateWithoutRapportInput>;
    where?: Prisma.s13_immobilisationsWhereInput;
};
export type s13_immobilisationsUpdateToOneWithWhereWithoutRapportInput = {
    where?: Prisma.s13_immobilisationsWhereInput;
    data: Prisma.XOR<Prisma.s13_immobilisationsUpdateWithoutRapportInput, Prisma.s13_immobilisationsUncheckedUpdateWithoutRapportInput>;
};
export type s13_immobilisationsUpdateWithoutRapportInput = {
    collet_cervical?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collet_taille?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matelas_immobilisateur?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    planche_longue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attelle_fixation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_immobilisationsUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    collet_cervical?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collet_taille?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    matelas_immobilisateur?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    planche_longue?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ked?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    attelle_fixation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_immobilisationsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    collet_cervical?: boolean;
    collet_taille?: boolean;
    matelas_immobilisateur?: boolean;
    planche_longue?: boolean;
    ked?: boolean;
    attelle_fixation?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_immobilisations"]>;
export type s13_immobilisationsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    collet_cervical?: boolean;
    collet_taille?: boolean;
    matelas_immobilisateur?: boolean;
    planche_longue?: boolean;
    ked?: boolean;
    attelle_fixation?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_immobilisations"]>;
export type s13_immobilisationsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    collet_cervical?: boolean;
    collet_taille?: boolean;
    matelas_immobilisateur?: boolean;
    planche_longue?: boolean;
    ked?: boolean;
    attelle_fixation?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_immobilisations"]>;
export type s13_immobilisationsSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    collet_cervical?: boolean;
    collet_taille?: boolean;
    matelas_immobilisateur?: boolean;
    planche_longue?: boolean;
    ked?: boolean;
    attelle_fixation?: boolean;
};
export type s13_immobilisationsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "collet_cervical" | "collet_taille" | "matelas_immobilisateur" | "planche_longue" | "ked" | "attelle_fixation", ExtArgs["result"]["s13_immobilisations"]>;
export type s13_immobilisationsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s13_immobilisationsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s13_immobilisationsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s13_immobilisationsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s13_immobilisations";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        collet_cervical: string | null;
        collet_taille: string | null;
        matelas_immobilisateur: string | null;
        planche_longue: string | null;
        ked: string | null;
        attelle_fixation: string | null;
    }, ExtArgs["result"]["s13_immobilisations"]>;
    composites: {};
};
export type s13_immobilisationsGetPayload<S extends boolean | null | undefined | s13_immobilisationsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s13_immobilisationsPayload, S>;
export type s13_immobilisationsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s13_immobilisationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S13_immobilisationsCountAggregateInputType | true;
};
export interface s13_immobilisationsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s13_immobilisations'];
        meta: {
            name: 's13_immobilisations';
        };
    };
    /**
     * Find zero or one S13_immobilisations that matches the filter.
     * @param {s13_immobilisationsFindUniqueArgs} args - Arguments to find a S13_immobilisations
     * @example
     * // Get one S13_immobilisations
     * const s13_immobilisations = await prisma.s13_immobilisations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s13_immobilisationsFindUniqueArgs>(args: Prisma.SelectSubset<T, s13_immobilisationsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s13_immobilisationsClient<runtime.Types.Result.GetResult<Prisma.$s13_immobilisationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S13_immobilisations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s13_immobilisationsFindUniqueOrThrowArgs} args - Arguments to find a S13_immobilisations
     * @example
     * // Get one S13_immobilisations
     * const s13_immobilisations = await prisma.s13_immobilisations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s13_immobilisationsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s13_immobilisationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s13_immobilisationsClient<runtime.Types.Result.GetResult<Prisma.$s13_immobilisationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S13_immobilisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_immobilisationsFindFirstArgs} args - Arguments to find a S13_immobilisations
     * @example
     * // Get one S13_immobilisations
     * const s13_immobilisations = await prisma.s13_immobilisations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s13_immobilisationsFindFirstArgs>(args?: Prisma.SelectSubset<T, s13_immobilisationsFindFirstArgs<ExtArgs>>): Prisma.Prisma__s13_immobilisationsClient<runtime.Types.Result.GetResult<Prisma.$s13_immobilisationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S13_immobilisations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_immobilisationsFindFirstOrThrowArgs} args - Arguments to find a S13_immobilisations
     * @example
     * // Get one S13_immobilisations
     * const s13_immobilisations = await prisma.s13_immobilisations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s13_immobilisationsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s13_immobilisationsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s13_immobilisationsClient<runtime.Types.Result.GetResult<Prisma.$s13_immobilisationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S13_immobilisations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_immobilisationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S13_immobilisations
     * const s13_immobilisations = await prisma.s13_immobilisations.findMany()
     *
     * // Get first 10 S13_immobilisations
     * const s13_immobilisations = await prisma.s13_immobilisations.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s13_immobilisationsWithIdOnly = await prisma.s13_immobilisations.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s13_immobilisationsFindManyArgs>(args?: Prisma.SelectSubset<T, s13_immobilisationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_immobilisationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S13_immobilisations.
     * @param {s13_immobilisationsCreateArgs} args - Arguments to create a S13_immobilisations.
     * @example
     * // Create one S13_immobilisations
     * const S13_immobilisations = await prisma.s13_immobilisations.create({
     *   data: {
     *     // ... data to create a S13_immobilisations
     *   }
     * })
     *
     */
    create<T extends s13_immobilisationsCreateArgs>(args: Prisma.SelectSubset<T, s13_immobilisationsCreateArgs<ExtArgs>>): Prisma.Prisma__s13_immobilisationsClient<runtime.Types.Result.GetResult<Prisma.$s13_immobilisationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S13_immobilisations.
     * @param {s13_immobilisationsCreateManyArgs} args - Arguments to create many S13_immobilisations.
     * @example
     * // Create many S13_immobilisations
     * const s13_immobilisations = await prisma.s13_immobilisations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s13_immobilisationsCreateManyArgs>(args?: Prisma.SelectSubset<T, s13_immobilisationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S13_immobilisations and returns the data saved in the database.
     * @param {s13_immobilisationsCreateManyAndReturnArgs} args - Arguments to create many S13_immobilisations.
     * @example
     * // Create many S13_immobilisations
     * const s13_immobilisations = await prisma.s13_immobilisations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S13_immobilisations and only return the `id`
     * const s13_immobilisationsWithIdOnly = await prisma.s13_immobilisations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s13_immobilisationsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s13_immobilisationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_immobilisationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S13_immobilisations.
     * @param {s13_immobilisationsDeleteArgs} args - Arguments to delete one S13_immobilisations.
     * @example
     * // Delete one S13_immobilisations
     * const S13_immobilisations = await prisma.s13_immobilisations.delete({
     *   where: {
     *     // ... filter to delete one S13_immobilisations
     *   }
     * })
     *
     */
    delete<T extends s13_immobilisationsDeleteArgs>(args: Prisma.SelectSubset<T, s13_immobilisationsDeleteArgs<ExtArgs>>): Prisma.Prisma__s13_immobilisationsClient<runtime.Types.Result.GetResult<Prisma.$s13_immobilisationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S13_immobilisations.
     * @param {s13_immobilisationsUpdateArgs} args - Arguments to update one S13_immobilisations.
     * @example
     * // Update one S13_immobilisations
     * const s13_immobilisations = await prisma.s13_immobilisations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s13_immobilisationsUpdateArgs>(args: Prisma.SelectSubset<T, s13_immobilisationsUpdateArgs<ExtArgs>>): Prisma.Prisma__s13_immobilisationsClient<runtime.Types.Result.GetResult<Prisma.$s13_immobilisationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S13_immobilisations.
     * @param {s13_immobilisationsDeleteManyArgs} args - Arguments to filter S13_immobilisations to delete.
     * @example
     * // Delete a few S13_immobilisations
     * const { count } = await prisma.s13_immobilisations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s13_immobilisationsDeleteManyArgs>(args?: Prisma.SelectSubset<T, s13_immobilisationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S13_immobilisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_immobilisationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S13_immobilisations
     * const s13_immobilisations = await prisma.s13_immobilisations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s13_immobilisationsUpdateManyArgs>(args: Prisma.SelectSubset<T, s13_immobilisationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S13_immobilisations and returns the data updated in the database.
     * @param {s13_immobilisationsUpdateManyAndReturnArgs} args - Arguments to update many S13_immobilisations.
     * @example
     * // Update many S13_immobilisations
     * const s13_immobilisations = await prisma.s13_immobilisations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S13_immobilisations and only return the `id`
     * const s13_immobilisationsWithIdOnly = await prisma.s13_immobilisations.updateManyAndReturn({
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
    updateManyAndReturn<T extends s13_immobilisationsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s13_immobilisationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_immobilisationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S13_immobilisations.
     * @param {s13_immobilisationsUpsertArgs} args - Arguments to update or create a S13_immobilisations.
     * @example
     * // Update or create a S13_immobilisations
     * const s13_immobilisations = await prisma.s13_immobilisations.upsert({
     *   create: {
     *     // ... data to create a S13_immobilisations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S13_immobilisations we want to update
     *   }
     * })
     */
    upsert<T extends s13_immobilisationsUpsertArgs>(args: Prisma.SelectSubset<T, s13_immobilisationsUpsertArgs<ExtArgs>>): Prisma.Prisma__s13_immobilisationsClient<runtime.Types.Result.GetResult<Prisma.$s13_immobilisationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S13_immobilisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_immobilisationsCountArgs} args - Arguments to filter S13_immobilisations to count.
     * @example
     * // Count the number of S13_immobilisations
     * const count = await prisma.s13_immobilisations.count({
     *   where: {
     *     // ... the filter for the S13_immobilisations we want to count
     *   }
     * })
    **/
    count<T extends s13_immobilisationsCountArgs>(args?: Prisma.Subset<T, s13_immobilisationsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S13_immobilisationsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S13_immobilisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S13_immobilisationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S13_immobilisationsAggregateArgs>(args: Prisma.Subset<T, S13_immobilisationsAggregateArgs>): Prisma.PrismaPromise<GetS13_immobilisationsAggregateType<T>>;
    /**
     * Group by S13_immobilisations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_immobilisationsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s13_immobilisationsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s13_immobilisationsGroupByArgs['orderBy'];
    } : {
        orderBy?: s13_immobilisationsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s13_immobilisationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS13_immobilisationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s13_immobilisations model
     */
    readonly fields: s13_immobilisationsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s13_immobilisations.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s13_immobilisationsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the s13_immobilisations model
 */
export interface s13_immobilisationsFieldRefs {
    readonly id: Prisma.FieldRef<"s13_immobilisations", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s13_immobilisations", 'Int'>;
    readonly collet_cervical: Prisma.FieldRef<"s13_immobilisations", 'String'>;
    readonly collet_taille: Prisma.FieldRef<"s13_immobilisations", 'String'>;
    readonly matelas_immobilisateur: Prisma.FieldRef<"s13_immobilisations", 'String'>;
    readonly planche_longue: Prisma.FieldRef<"s13_immobilisations", 'String'>;
    readonly ked: Prisma.FieldRef<"s13_immobilisations", 'String'>;
    readonly attelle_fixation: Prisma.FieldRef<"s13_immobilisations", 'String'>;
}
/**
 * s13_immobilisations findUnique
 */
export type s13_immobilisationsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_immobilisations
     */
    select?: Prisma.s13_immobilisationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_immobilisations
     */
    omit?: Prisma.s13_immobilisationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_immobilisationsInclude<ExtArgs> | null;
    /**
     * Filter, which s13_immobilisations to fetch.
     */
    where: Prisma.s13_immobilisationsWhereUniqueInput;
};
/**
 * s13_immobilisations findUniqueOrThrow
 */
export type s13_immobilisationsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_immobilisations
     */
    select?: Prisma.s13_immobilisationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_immobilisations
     */
    omit?: Prisma.s13_immobilisationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_immobilisationsInclude<ExtArgs> | null;
    /**
     * Filter, which s13_immobilisations to fetch.
     */
    where: Prisma.s13_immobilisationsWhereUniqueInput;
};
/**
 * s13_immobilisations findFirst
 */
export type s13_immobilisationsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_immobilisations
     */
    select?: Prisma.s13_immobilisationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_immobilisations
     */
    omit?: Prisma.s13_immobilisationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_immobilisationsInclude<ExtArgs> | null;
    /**
     * Filter, which s13_immobilisations to fetch.
     */
    where?: Prisma.s13_immobilisationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_immobilisations to fetch.
     */
    orderBy?: Prisma.s13_immobilisationsOrderByWithRelationInput | Prisma.s13_immobilisationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s13_immobilisations.
     */
    cursor?: Prisma.s13_immobilisationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_immobilisations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_immobilisations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s13_immobilisations.
     */
    distinct?: Prisma.S13_immobilisationsScalarFieldEnum | Prisma.S13_immobilisationsScalarFieldEnum[];
};
/**
 * s13_immobilisations findFirstOrThrow
 */
export type s13_immobilisationsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_immobilisations
     */
    select?: Prisma.s13_immobilisationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_immobilisations
     */
    omit?: Prisma.s13_immobilisationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_immobilisationsInclude<ExtArgs> | null;
    /**
     * Filter, which s13_immobilisations to fetch.
     */
    where?: Prisma.s13_immobilisationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_immobilisations to fetch.
     */
    orderBy?: Prisma.s13_immobilisationsOrderByWithRelationInput | Prisma.s13_immobilisationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s13_immobilisations.
     */
    cursor?: Prisma.s13_immobilisationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_immobilisations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_immobilisations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s13_immobilisations.
     */
    distinct?: Prisma.S13_immobilisationsScalarFieldEnum | Prisma.S13_immobilisationsScalarFieldEnum[];
};
/**
 * s13_immobilisations findMany
 */
export type s13_immobilisationsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_immobilisations
     */
    select?: Prisma.s13_immobilisationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_immobilisations
     */
    omit?: Prisma.s13_immobilisationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_immobilisationsInclude<ExtArgs> | null;
    /**
     * Filter, which s13_immobilisations to fetch.
     */
    where?: Prisma.s13_immobilisationsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_immobilisations to fetch.
     */
    orderBy?: Prisma.s13_immobilisationsOrderByWithRelationInput | Prisma.s13_immobilisationsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s13_immobilisations.
     */
    cursor?: Prisma.s13_immobilisationsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_immobilisations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_immobilisations.
     */
    skip?: number;
    distinct?: Prisma.S13_immobilisationsScalarFieldEnum | Prisma.S13_immobilisationsScalarFieldEnum[];
};
/**
 * s13_immobilisations create
 */
export type s13_immobilisationsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_immobilisations
     */
    select?: Prisma.s13_immobilisationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_immobilisations
     */
    omit?: Prisma.s13_immobilisationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_immobilisationsInclude<ExtArgs> | null;
    /**
     * The data needed to create a s13_immobilisations.
     */
    data: Prisma.XOR<Prisma.s13_immobilisationsCreateInput, Prisma.s13_immobilisationsUncheckedCreateInput>;
};
/**
 * s13_immobilisations createMany
 */
export type s13_immobilisationsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s13_immobilisations.
     */
    data: Prisma.s13_immobilisationsCreateManyInput | Prisma.s13_immobilisationsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s13_immobilisations createManyAndReturn
 */
export type s13_immobilisationsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_immobilisations
     */
    select?: Prisma.s13_immobilisationsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_immobilisations
     */
    omit?: Prisma.s13_immobilisationsOmit<ExtArgs> | null;
    /**
     * The data used to create many s13_immobilisations.
     */
    data: Prisma.s13_immobilisationsCreateManyInput | Prisma.s13_immobilisationsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_immobilisationsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s13_immobilisations update
 */
export type s13_immobilisationsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_immobilisations
     */
    select?: Prisma.s13_immobilisationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_immobilisations
     */
    omit?: Prisma.s13_immobilisationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_immobilisationsInclude<ExtArgs> | null;
    /**
     * The data needed to update a s13_immobilisations.
     */
    data: Prisma.XOR<Prisma.s13_immobilisationsUpdateInput, Prisma.s13_immobilisationsUncheckedUpdateInput>;
    /**
     * Choose, which s13_immobilisations to update.
     */
    where: Prisma.s13_immobilisationsWhereUniqueInput;
};
/**
 * s13_immobilisations updateMany
 */
export type s13_immobilisationsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s13_immobilisations.
     */
    data: Prisma.XOR<Prisma.s13_immobilisationsUpdateManyMutationInput, Prisma.s13_immobilisationsUncheckedUpdateManyInput>;
    /**
     * Filter which s13_immobilisations to update
     */
    where?: Prisma.s13_immobilisationsWhereInput;
    /**
     * Limit how many s13_immobilisations to update.
     */
    limit?: number;
};
/**
 * s13_immobilisations updateManyAndReturn
 */
export type s13_immobilisationsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_immobilisations
     */
    select?: Prisma.s13_immobilisationsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_immobilisations
     */
    omit?: Prisma.s13_immobilisationsOmit<ExtArgs> | null;
    /**
     * The data used to update s13_immobilisations.
     */
    data: Prisma.XOR<Prisma.s13_immobilisationsUpdateManyMutationInput, Prisma.s13_immobilisationsUncheckedUpdateManyInput>;
    /**
     * Filter which s13_immobilisations to update
     */
    where?: Prisma.s13_immobilisationsWhereInput;
    /**
     * Limit how many s13_immobilisations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_immobilisationsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s13_immobilisations upsert
 */
export type s13_immobilisationsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_immobilisations
     */
    select?: Prisma.s13_immobilisationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_immobilisations
     */
    omit?: Prisma.s13_immobilisationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_immobilisationsInclude<ExtArgs> | null;
    /**
     * The filter to search for the s13_immobilisations to update in case it exists.
     */
    where: Prisma.s13_immobilisationsWhereUniqueInput;
    /**
     * In case the s13_immobilisations found by the `where` argument doesn't exist, create a new s13_immobilisations with this data.
     */
    create: Prisma.XOR<Prisma.s13_immobilisationsCreateInput, Prisma.s13_immobilisationsUncheckedCreateInput>;
    /**
     * In case the s13_immobilisations was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s13_immobilisationsUpdateInput, Prisma.s13_immobilisationsUncheckedUpdateInput>;
};
/**
 * s13_immobilisations delete
 */
export type s13_immobilisationsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_immobilisations
     */
    select?: Prisma.s13_immobilisationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_immobilisations
     */
    omit?: Prisma.s13_immobilisationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_immobilisationsInclude<ExtArgs> | null;
    /**
     * Filter which s13_immobilisations to delete.
     */
    where: Prisma.s13_immobilisationsWhereUniqueInput;
};
/**
 * s13_immobilisations deleteMany
 */
export type s13_immobilisationsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s13_immobilisations to delete
     */
    where?: Prisma.s13_immobilisationsWhereInput;
    /**
     * Limit how many s13_immobilisations to delete.
     */
    limit?: number;
};
/**
 * s13_immobilisations without action
 */
export type s13_immobilisationsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_immobilisations
     */
    select?: Prisma.s13_immobilisationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_immobilisations
     */
    omit?: Prisma.s13_immobilisationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_immobilisationsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s13_immobilisations.d.ts.map