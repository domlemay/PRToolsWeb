import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s11_support_clinique_info
 *
 */
export type s11_support_clinique_infoModel = runtime.Types.Result.DefaultSelection<Prisma.$s11_support_clinique_infoPayload>;
export type AggregateS11_support_clinique_info = {
    _count: S11_support_clinique_infoCountAggregateOutputType | null;
    _avg: S11_support_clinique_infoAvgAggregateOutputType | null;
    _sum: S11_support_clinique_infoSumAggregateOutputType | null;
    _min: S11_support_clinique_infoMinAggregateOutputType | null;
    _max: S11_support_clinique_infoMaxAggregateOutputType | null;
};
export type S11_support_clinique_infoAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S11_support_clinique_infoSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S11_support_clinique_infoMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    sur_les_lieux: string | null;
    a_distance: string | null;
    no_permis: string | null;
    heure_support: Date | null;
};
export type S11_support_clinique_infoMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    sur_les_lieux: string | null;
    a_distance: string | null;
    no_permis: string | null;
    heure_support: Date | null;
};
export type S11_support_clinique_infoCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    sur_les_lieux: number;
    a_distance: number;
    no_permis: number;
    heure_support: number;
    _all: number;
};
export type S11_support_clinique_infoAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S11_support_clinique_infoSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S11_support_clinique_infoMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    sur_les_lieux?: true;
    a_distance?: true;
    no_permis?: true;
    heure_support?: true;
};
export type S11_support_clinique_infoMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    sur_les_lieux?: true;
    a_distance?: true;
    no_permis?: true;
    heure_support?: true;
};
export type S11_support_clinique_infoCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    sur_les_lieux?: true;
    a_distance?: true;
    no_permis?: true;
    heure_support?: true;
    _all?: true;
};
export type S11_support_clinique_infoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s11_support_clinique_info to aggregate.
     */
    where?: Prisma.s11_support_clinique_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s11_support_clinique_infos to fetch.
     */
    orderBy?: Prisma.s11_support_clinique_infoOrderByWithRelationInput | Prisma.s11_support_clinique_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s11_support_clinique_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s11_support_clinique_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s11_support_clinique_infos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s11_support_clinique_infos
    **/
    _count?: true | S11_support_clinique_infoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S11_support_clinique_infoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S11_support_clinique_infoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S11_support_clinique_infoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S11_support_clinique_infoMaxAggregateInputType;
};
export type GetS11_support_clinique_infoAggregateType<T extends S11_support_clinique_infoAggregateArgs> = {
    [P in keyof T & keyof AggregateS11_support_clinique_info]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS11_support_clinique_info[P]> : Prisma.GetScalarType<T[P], AggregateS11_support_clinique_info[P]>;
};
export type s11_support_clinique_infoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s11_support_clinique_infoWhereInput;
    orderBy?: Prisma.s11_support_clinique_infoOrderByWithAggregationInput | Prisma.s11_support_clinique_infoOrderByWithAggregationInput[];
    by: Prisma.S11_support_clinique_infoScalarFieldEnum[] | Prisma.S11_support_clinique_infoScalarFieldEnum;
    having?: Prisma.s11_support_clinique_infoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S11_support_clinique_infoCountAggregateInputType | true;
    _avg?: S11_support_clinique_infoAvgAggregateInputType;
    _sum?: S11_support_clinique_infoSumAggregateInputType;
    _min?: S11_support_clinique_infoMinAggregateInputType;
    _max?: S11_support_clinique_infoMaxAggregateInputType;
};
export type S11_support_clinique_infoGroupByOutputType = {
    id: number;
    rapport_id: number;
    sur_les_lieux: string | null;
    a_distance: string | null;
    no_permis: string | null;
    heure_support: Date | null;
    _count: S11_support_clinique_infoCountAggregateOutputType | null;
    _avg: S11_support_clinique_infoAvgAggregateOutputType | null;
    _sum: S11_support_clinique_infoSumAggregateOutputType | null;
    _min: S11_support_clinique_infoMinAggregateOutputType | null;
    _max: S11_support_clinique_infoMaxAggregateOutputType | null;
};
type GetS11_support_clinique_infoGroupByPayload<T extends s11_support_clinique_infoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S11_support_clinique_infoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S11_support_clinique_infoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S11_support_clinique_infoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S11_support_clinique_infoGroupByOutputType[P]>;
}>>;
export type s11_support_clinique_infoWhereInput = {
    AND?: Prisma.s11_support_clinique_infoWhereInput | Prisma.s11_support_clinique_infoWhereInput[];
    OR?: Prisma.s11_support_clinique_infoWhereInput[];
    NOT?: Prisma.s11_support_clinique_infoWhereInput | Prisma.s11_support_clinique_infoWhereInput[];
    id?: Prisma.IntFilter<"s11_support_clinique_info"> | number;
    rapport_id?: Prisma.IntFilter<"s11_support_clinique_info"> | number;
    sur_les_lieux?: Prisma.StringNullableFilter<"s11_support_clinique_info"> | string | null;
    a_distance?: Prisma.StringNullableFilter<"s11_support_clinique_info"> | string | null;
    no_permis?: Prisma.StringNullableFilter<"s11_support_clinique_info"> | string | null;
    heure_support?: Prisma.DateTimeNullableFilter<"s11_support_clinique_info"> | Date | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s11_support_clinique_infoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    sur_les_lieux?: Prisma.SortOrderInput | Prisma.SortOrder;
    a_distance?: Prisma.SortOrderInput | Prisma.SortOrder;
    no_permis?: Prisma.SortOrderInput | Prisma.SortOrder;
    heure_support?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s11_support_clinique_infoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id?: number;
    AND?: Prisma.s11_support_clinique_infoWhereInput | Prisma.s11_support_clinique_infoWhereInput[];
    OR?: Prisma.s11_support_clinique_infoWhereInput[];
    NOT?: Prisma.s11_support_clinique_infoWhereInput | Prisma.s11_support_clinique_infoWhereInput[];
    sur_les_lieux?: Prisma.StringNullableFilter<"s11_support_clinique_info"> | string | null;
    a_distance?: Prisma.StringNullableFilter<"s11_support_clinique_info"> | string | null;
    no_permis?: Prisma.StringNullableFilter<"s11_support_clinique_info"> | string | null;
    heure_support?: Prisma.DateTimeNullableFilter<"s11_support_clinique_info"> | Date | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id" | "rapport_id">;
export type s11_support_clinique_infoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    sur_les_lieux?: Prisma.SortOrderInput | Prisma.SortOrder;
    a_distance?: Prisma.SortOrderInput | Prisma.SortOrder;
    no_permis?: Prisma.SortOrderInput | Prisma.SortOrder;
    heure_support?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s11_support_clinique_infoCountOrderByAggregateInput;
    _avg?: Prisma.s11_support_clinique_infoAvgOrderByAggregateInput;
    _max?: Prisma.s11_support_clinique_infoMaxOrderByAggregateInput;
    _min?: Prisma.s11_support_clinique_infoMinOrderByAggregateInput;
    _sum?: Prisma.s11_support_clinique_infoSumOrderByAggregateInput;
};
export type s11_support_clinique_infoScalarWhereWithAggregatesInput = {
    AND?: Prisma.s11_support_clinique_infoScalarWhereWithAggregatesInput | Prisma.s11_support_clinique_infoScalarWhereWithAggregatesInput[];
    OR?: Prisma.s11_support_clinique_infoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s11_support_clinique_infoScalarWhereWithAggregatesInput | Prisma.s11_support_clinique_infoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s11_support_clinique_info"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s11_support_clinique_info"> | number;
    sur_les_lieux?: Prisma.StringNullableWithAggregatesFilter<"s11_support_clinique_info"> | string | null;
    a_distance?: Prisma.StringNullableWithAggregatesFilter<"s11_support_clinique_info"> | string | null;
    no_permis?: Prisma.StringNullableWithAggregatesFilter<"s11_support_clinique_info"> | string | null;
    heure_support?: Prisma.DateTimeNullableWithAggregatesFilter<"s11_support_clinique_info"> | Date | string | null;
};
export type s11_support_clinique_infoCreateInput = {
    sur_les_lieux?: string | null;
    a_distance?: string | null;
    no_permis?: string | null;
    heure_support?: Date | string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS11_support_clinique_infoInput;
};
export type s11_support_clinique_infoUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    sur_les_lieux?: string | null;
    a_distance?: string | null;
    no_permis?: string | null;
    heure_support?: Date | string | null;
};
export type s11_support_clinique_infoUpdateInput = {
    sur_les_lieux?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    a_distance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_permis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    heure_support?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS11_support_clinique_infoNestedInput;
};
export type s11_support_clinique_infoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sur_les_lieux?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    a_distance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_permis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    heure_support?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s11_support_clinique_infoCreateManyInput = {
    id?: number;
    rapport_id: number;
    sur_les_lieux?: string | null;
    a_distance?: string | null;
    no_permis?: string | null;
    heure_support?: Date | string | null;
};
export type s11_support_clinique_infoUpdateManyMutationInput = {
    sur_les_lieux?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    a_distance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_permis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    heure_support?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s11_support_clinique_infoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sur_les_lieux?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    a_distance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_permis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    heure_support?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type S11_support_clinique_infoNullableScalarRelationFilter = {
    is?: Prisma.s11_support_clinique_infoWhereInput | null;
    isNot?: Prisma.s11_support_clinique_infoWhereInput | null;
};
export type s11_support_clinique_infoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    sur_les_lieux?: Prisma.SortOrder;
    a_distance?: Prisma.SortOrder;
    no_permis?: Prisma.SortOrder;
    heure_support?: Prisma.SortOrder;
};
export type s11_support_clinique_infoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s11_support_clinique_infoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    sur_les_lieux?: Prisma.SortOrder;
    a_distance?: Prisma.SortOrder;
    no_permis?: Prisma.SortOrder;
    heure_support?: Prisma.SortOrder;
};
export type s11_support_clinique_infoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    sur_les_lieux?: Prisma.SortOrder;
    a_distance?: Prisma.SortOrder;
    no_permis?: Prisma.SortOrder;
    heure_support?: Prisma.SortOrder;
};
export type s11_support_clinique_infoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s11_support_clinique_infoCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s11_support_clinique_infoCreateWithoutRapportInput, Prisma.s11_support_clinique_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s11_support_clinique_infoCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s11_support_clinique_infoWhereUniqueInput;
};
export type s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s11_support_clinique_infoCreateWithoutRapportInput, Prisma.s11_support_clinique_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s11_support_clinique_infoCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s11_support_clinique_infoWhereUniqueInput;
};
export type s11_support_clinique_infoUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s11_support_clinique_infoCreateWithoutRapportInput, Prisma.s11_support_clinique_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s11_support_clinique_infoCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s11_support_clinique_infoUpsertWithoutRapportInput;
    disconnect?: Prisma.s11_support_clinique_infoWhereInput | boolean;
    delete?: Prisma.s11_support_clinique_infoWhereInput | boolean;
    connect?: Prisma.s11_support_clinique_infoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s11_support_clinique_infoUpdateToOneWithWhereWithoutRapportInput, Prisma.s11_support_clinique_infoUpdateWithoutRapportInput>, Prisma.s11_support_clinique_infoUncheckedUpdateWithoutRapportInput>;
};
export type s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s11_support_clinique_infoCreateWithoutRapportInput, Prisma.s11_support_clinique_infoUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s11_support_clinique_infoCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s11_support_clinique_infoUpsertWithoutRapportInput;
    disconnect?: Prisma.s11_support_clinique_infoWhereInput | boolean;
    delete?: Prisma.s11_support_clinique_infoWhereInput | boolean;
    connect?: Prisma.s11_support_clinique_infoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s11_support_clinique_infoUpdateToOneWithWhereWithoutRapportInput, Prisma.s11_support_clinique_infoUpdateWithoutRapportInput>, Prisma.s11_support_clinique_infoUncheckedUpdateWithoutRapportInput>;
};
export type s11_support_clinique_infoCreateWithoutRapportInput = {
    sur_les_lieux?: string | null;
    a_distance?: string | null;
    no_permis?: string | null;
    heure_support?: Date | string | null;
};
export type s11_support_clinique_infoUncheckedCreateWithoutRapportInput = {
    id?: number;
    sur_les_lieux?: string | null;
    a_distance?: string | null;
    no_permis?: string | null;
    heure_support?: Date | string | null;
};
export type s11_support_clinique_infoCreateOrConnectWithoutRapportInput = {
    where: Prisma.s11_support_clinique_infoWhereUniqueInput;
    create: Prisma.XOR<Prisma.s11_support_clinique_infoCreateWithoutRapportInput, Prisma.s11_support_clinique_infoUncheckedCreateWithoutRapportInput>;
};
export type s11_support_clinique_infoUpsertWithoutRapportInput = {
    update: Prisma.XOR<Prisma.s11_support_clinique_infoUpdateWithoutRapportInput, Prisma.s11_support_clinique_infoUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s11_support_clinique_infoCreateWithoutRapportInput, Prisma.s11_support_clinique_infoUncheckedCreateWithoutRapportInput>;
    where?: Prisma.s11_support_clinique_infoWhereInput;
};
export type s11_support_clinique_infoUpdateToOneWithWhereWithoutRapportInput = {
    where?: Prisma.s11_support_clinique_infoWhereInput;
    data: Prisma.XOR<Prisma.s11_support_clinique_infoUpdateWithoutRapportInput, Prisma.s11_support_clinique_infoUncheckedUpdateWithoutRapportInput>;
};
export type s11_support_clinique_infoUpdateWithoutRapportInput = {
    sur_les_lieux?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    a_distance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_permis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    heure_support?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s11_support_clinique_infoUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sur_les_lieux?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    a_distance?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    no_permis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    heure_support?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s11_support_clinique_infoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    sur_les_lieux?: boolean;
    a_distance?: boolean;
    no_permis?: boolean;
    heure_support?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s11_support_clinique_info"]>;
export type s11_support_clinique_infoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    sur_les_lieux?: boolean;
    a_distance?: boolean;
    no_permis?: boolean;
    heure_support?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s11_support_clinique_info"]>;
export type s11_support_clinique_infoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    sur_les_lieux?: boolean;
    a_distance?: boolean;
    no_permis?: boolean;
    heure_support?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s11_support_clinique_info"]>;
export type s11_support_clinique_infoSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    sur_les_lieux?: boolean;
    a_distance?: boolean;
    no_permis?: boolean;
    heure_support?: boolean;
};
export type s11_support_clinique_infoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "sur_les_lieux" | "a_distance" | "no_permis" | "heure_support", ExtArgs["result"]["s11_support_clinique_info"]>;
export type s11_support_clinique_infoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s11_support_clinique_infoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s11_support_clinique_infoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s11_support_clinique_infoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s11_support_clinique_info";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        sur_les_lieux: string | null;
        a_distance: string | null;
        no_permis: string | null;
        heure_support: Date | null;
    }, ExtArgs["result"]["s11_support_clinique_info"]>;
    composites: {};
};
export type s11_support_clinique_infoGetPayload<S extends boolean | null | undefined | s11_support_clinique_infoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s11_support_clinique_infoPayload, S>;
export type s11_support_clinique_infoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s11_support_clinique_infoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S11_support_clinique_infoCountAggregateInputType | true;
};
export interface s11_support_clinique_infoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s11_support_clinique_info'];
        meta: {
            name: 's11_support_clinique_info';
        };
    };
    /**
     * Find zero or one S11_support_clinique_info that matches the filter.
     * @param {s11_support_clinique_infoFindUniqueArgs} args - Arguments to find a S11_support_clinique_info
     * @example
     * // Get one S11_support_clinique_info
     * const s11_support_clinique_info = await prisma.s11_support_clinique_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s11_support_clinique_infoFindUniqueArgs>(args: Prisma.SelectSubset<T, s11_support_clinique_infoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s11_support_clinique_infoClient<runtime.Types.Result.GetResult<Prisma.$s11_support_clinique_infoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S11_support_clinique_info that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s11_support_clinique_infoFindUniqueOrThrowArgs} args - Arguments to find a S11_support_clinique_info
     * @example
     * // Get one S11_support_clinique_info
     * const s11_support_clinique_info = await prisma.s11_support_clinique_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s11_support_clinique_infoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s11_support_clinique_infoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s11_support_clinique_infoClient<runtime.Types.Result.GetResult<Prisma.$s11_support_clinique_infoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S11_support_clinique_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s11_support_clinique_infoFindFirstArgs} args - Arguments to find a S11_support_clinique_info
     * @example
     * // Get one S11_support_clinique_info
     * const s11_support_clinique_info = await prisma.s11_support_clinique_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s11_support_clinique_infoFindFirstArgs>(args?: Prisma.SelectSubset<T, s11_support_clinique_infoFindFirstArgs<ExtArgs>>): Prisma.Prisma__s11_support_clinique_infoClient<runtime.Types.Result.GetResult<Prisma.$s11_support_clinique_infoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S11_support_clinique_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s11_support_clinique_infoFindFirstOrThrowArgs} args - Arguments to find a S11_support_clinique_info
     * @example
     * // Get one S11_support_clinique_info
     * const s11_support_clinique_info = await prisma.s11_support_clinique_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s11_support_clinique_infoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s11_support_clinique_infoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s11_support_clinique_infoClient<runtime.Types.Result.GetResult<Prisma.$s11_support_clinique_infoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S11_support_clinique_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s11_support_clinique_infoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S11_support_clinique_infos
     * const s11_support_clinique_infos = await prisma.s11_support_clinique_info.findMany()
     *
     * // Get first 10 S11_support_clinique_infos
     * const s11_support_clinique_infos = await prisma.s11_support_clinique_info.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s11_support_clinique_infoWithIdOnly = await prisma.s11_support_clinique_info.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s11_support_clinique_infoFindManyArgs>(args?: Prisma.SelectSubset<T, s11_support_clinique_infoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s11_support_clinique_infoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S11_support_clinique_info.
     * @param {s11_support_clinique_infoCreateArgs} args - Arguments to create a S11_support_clinique_info.
     * @example
     * // Create one S11_support_clinique_info
     * const S11_support_clinique_info = await prisma.s11_support_clinique_info.create({
     *   data: {
     *     // ... data to create a S11_support_clinique_info
     *   }
     * })
     *
     */
    create<T extends s11_support_clinique_infoCreateArgs>(args: Prisma.SelectSubset<T, s11_support_clinique_infoCreateArgs<ExtArgs>>): Prisma.Prisma__s11_support_clinique_infoClient<runtime.Types.Result.GetResult<Prisma.$s11_support_clinique_infoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S11_support_clinique_infos.
     * @param {s11_support_clinique_infoCreateManyArgs} args - Arguments to create many S11_support_clinique_infos.
     * @example
     * // Create many S11_support_clinique_infos
     * const s11_support_clinique_info = await prisma.s11_support_clinique_info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s11_support_clinique_infoCreateManyArgs>(args?: Prisma.SelectSubset<T, s11_support_clinique_infoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S11_support_clinique_infos and returns the data saved in the database.
     * @param {s11_support_clinique_infoCreateManyAndReturnArgs} args - Arguments to create many S11_support_clinique_infos.
     * @example
     * // Create many S11_support_clinique_infos
     * const s11_support_clinique_info = await prisma.s11_support_clinique_info.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S11_support_clinique_infos and only return the `id`
     * const s11_support_clinique_infoWithIdOnly = await prisma.s11_support_clinique_info.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s11_support_clinique_infoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s11_support_clinique_infoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s11_support_clinique_infoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S11_support_clinique_info.
     * @param {s11_support_clinique_infoDeleteArgs} args - Arguments to delete one S11_support_clinique_info.
     * @example
     * // Delete one S11_support_clinique_info
     * const S11_support_clinique_info = await prisma.s11_support_clinique_info.delete({
     *   where: {
     *     // ... filter to delete one S11_support_clinique_info
     *   }
     * })
     *
     */
    delete<T extends s11_support_clinique_infoDeleteArgs>(args: Prisma.SelectSubset<T, s11_support_clinique_infoDeleteArgs<ExtArgs>>): Prisma.Prisma__s11_support_clinique_infoClient<runtime.Types.Result.GetResult<Prisma.$s11_support_clinique_infoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S11_support_clinique_info.
     * @param {s11_support_clinique_infoUpdateArgs} args - Arguments to update one S11_support_clinique_info.
     * @example
     * // Update one S11_support_clinique_info
     * const s11_support_clinique_info = await prisma.s11_support_clinique_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s11_support_clinique_infoUpdateArgs>(args: Prisma.SelectSubset<T, s11_support_clinique_infoUpdateArgs<ExtArgs>>): Prisma.Prisma__s11_support_clinique_infoClient<runtime.Types.Result.GetResult<Prisma.$s11_support_clinique_infoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S11_support_clinique_infos.
     * @param {s11_support_clinique_infoDeleteManyArgs} args - Arguments to filter S11_support_clinique_infos to delete.
     * @example
     * // Delete a few S11_support_clinique_infos
     * const { count } = await prisma.s11_support_clinique_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s11_support_clinique_infoDeleteManyArgs>(args?: Prisma.SelectSubset<T, s11_support_clinique_infoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S11_support_clinique_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s11_support_clinique_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S11_support_clinique_infos
     * const s11_support_clinique_info = await prisma.s11_support_clinique_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s11_support_clinique_infoUpdateManyArgs>(args: Prisma.SelectSubset<T, s11_support_clinique_infoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S11_support_clinique_infos and returns the data updated in the database.
     * @param {s11_support_clinique_infoUpdateManyAndReturnArgs} args - Arguments to update many S11_support_clinique_infos.
     * @example
     * // Update many S11_support_clinique_infos
     * const s11_support_clinique_info = await prisma.s11_support_clinique_info.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S11_support_clinique_infos and only return the `id`
     * const s11_support_clinique_infoWithIdOnly = await prisma.s11_support_clinique_info.updateManyAndReturn({
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
    updateManyAndReturn<T extends s11_support_clinique_infoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s11_support_clinique_infoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s11_support_clinique_infoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S11_support_clinique_info.
     * @param {s11_support_clinique_infoUpsertArgs} args - Arguments to update or create a S11_support_clinique_info.
     * @example
     * // Update or create a S11_support_clinique_info
     * const s11_support_clinique_info = await prisma.s11_support_clinique_info.upsert({
     *   create: {
     *     // ... data to create a S11_support_clinique_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S11_support_clinique_info we want to update
     *   }
     * })
     */
    upsert<T extends s11_support_clinique_infoUpsertArgs>(args: Prisma.SelectSubset<T, s11_support_clinique_infoUpsertArgs<ExtArgs>>): Prisma.Prisma__s11_support_clinique_infoClient<runtime.Types.Result.GetResult<Prisma.$s11_support_clinique_infoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S11_support_clinique_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s11_support_clinique_infoCountArgs} args - Arguments to filter S11_support_clinique_infos to count.
     * @example
     * // Count the number of S11_support_clinique_infos
     * const count = await prisma.s11_support_clinique_info.count({
     *   where: {
     *     // ... the filter for the S11_support_clinique_infos we want to count
     *   }
     * })
    **/
    count<T extends s11_support_clinique_infoCountArgs>(args?: Prisma.Subset<T, s11_support_clinique_infoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S11_support_clinique_infoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S11_support_clinique_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S11_support_clinique_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S11_support_clinique_infoAggregateArgs>(args: Prisma.Subset<T, S11_support_clinique_infoAggregateArgs>): Prisma.PrismaPromise<GetS11_support_clinique_infoAggregateType<T>>;
    /**
     * Group by S11_support_clinique_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s11_support_clinique_infoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s11_support_clinique_infoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s11_support_clinique_infoGroupByArgs['orderBy'];
    } : {
        orderBy?: s11_support_clinique_infoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s11_support_clinique_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS11_support_clinique_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s11_support_clinique_info model
     */
    readonly fields: s11_support_clinique_infoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s11_support_clinique_info.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s11_support_clinique_infoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the s11_support_clinique_info model
 */
export interface s11_support_clinique_infoFieldRefs {
    readonly id: Prisma.FieldRef<"s11_support_clinique_info", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s11_support_clinique_info", 'Int'>;
    readonly sur_les_lieux: Prisma.FieldRef<"s11_support_clinique_info", 'String'>;
    readonly a_distance: Prisma.FieldRef<"s11_support_clinique_info", 'String'>;
    readonly no_permis: Prisma.FieldRef<"s11_support_clinique_info", 'String'>;
    readonly heure_support: Prisma.FieldRef<"s11_support_clinique_info", 'DateTime'>;
}
/**
 * s11_support_clinique_info findUnique
 */
export type s11_support_clinique_infoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s11_support_clinique_info
     */
    select?: Prisma.s11_support_clinique_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s11_support_clinique_info
     */
    omit?: Prisma.s11_support_clinique_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s11_support_clinique_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s11_support_clinique_info to fetch.
     */
    where: Prisma.s11_support_clinique_infoWhereUniqueInput;
};
/**
 * s11_support_clinique_info findUniqueOrThrow
 */
export type s11_support_clinique_infoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s11_support_clinique_info
     */
    select?: Prisma.s11_support_clinique_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s11_support_clinique_info
     */
    omit?: Prisma.s11_support_clinique_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s11_support_clinique_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s11_support_clinique_info to fetch.
     */
    where: Prisma.s11_support_clinique_infoWhereUniqueInput;
};
/**
 * s11_support_clinique_info findFirst
 */
export type s11_support_clinique_infoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s11_support_clinique_info
     */
    select?: Prisma.s11_support_clinique_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s11_support_clinique_info
     */
    omit?: Prisma.s11_support_clinique_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s11_support_clinique_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s11_support_clinique_info to fetch.
     */
    where?: Prisma.s11_support_clinique_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s11_support_clinique_infos to fetch.
     */
    orderBy?: Prisma.s11_support_clinique_infoOrderByWithRelationInput | Prisma.s11_support_clinique_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s11_support_clinique_infos.
     */
    cursor?: Prisma.s11_support_clinique_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s11_support_clinique_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s11_support_clinique_infos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s11_support_clinique_infos.
     */
    distinct?: Prisma.S11_support_clinique_infoScalarFieldEnum | Prisma.S11_support_clinique_infoScalarFieldEnum[];
};
/**
 * s11_support_clinique_info findFirstOrThrow
 */
export type s11_support_clinique_infoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s11_support_clinique_info
     */
    select?: Prisma.s11_support_clinique_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s11_support_clinique_info
     */
    omit?: Prisma.s11_support_clinique_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s11_support_clinique_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s11_support_clinique_info to fetch.
     */
    where?: Prisma.s11_support_clinique_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s11_support_clinique_infos to fetch.
     */
    orderBy?: Prisma.s11_support_clinique_infoOrderByWithRelationInput | Prisma.s11_support_clinique_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s11_support_clinique_infos.
     */
    cursor?: Prisma.s11_support_clinique_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s11_support_clinique_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s11_support_clinique_infos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s11_support_clinique_infos.
     */
    distinct?: Prisma.S11_support_clinique_infoScalarFieldEnum | Prisma.S11_support_clinique_infoScalarFieldEnum[];
};
/**
 * s11_support_clinique_info findMany
 */
export type s11_support_clinique_infoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s11_support_clinique_info
     */
    select?: Prisma.s11_support_clinique_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s11_support_clinique_info
     */
    omit?: Prisma.s11_support_clinique_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s11_support_clinique_infoInclude<ExtArgs> | null;
    /**
     * Filter, which s11_support_clinique_infos to fetch.
     */
    where?: Prisma.s11_support_clinique_infoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s11_support_clinique_infos to fetch.
     */
    orderBy?: Prisma.s11_support_clinique_infoOrderByWithRelationInput | Prisma.s11_support_clinique_infoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s11_support_clinique_infos.
     */
    cursor?: Prisma.s11_support_clinique_infoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s11_support_clinique_infos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s11_support_clinique_infos.
     */
    skip?: number;
    distinct?: Prisma.S11_support_clinique_infoScalarFieldEnum | Prisma.S11_support_clinique_infoScalarFieldEnum[];
};
/**
 * s11_support_clinique_info create
 */
export type s11_support_clinique_infoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s11_support_clinique_info
     */
    select?: Prisma.s11_support_clinique_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s11_support_clinique_info
     */
    omit?: Prisma.s11_support_clinique_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s11_support_clinique_infoInclude<ExtArgs> | null;
    /**
     * The data needed to create a s11_support_clinique_info.
     */
    data: Prisma.XOR<Prisma.s11_support_clinique_infoCreateInput, Prisma.s11_support_clinique_infoUncheckedCreateInput>;
};
/**
 * s11_support_clinique_info createMany
 */
export type s11_support_clinique_infoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s11_support_clinique_infos.
     */
    data: Prisma.s11_support_clinique_infoCreateManyInput | Prisma.s11_support_clinique_infoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s11_support_clinique_info createManyAndReturn
 */
export type s11_support_clinique_infoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s11_support_clinique_info
     */
    select?: Prisma.s11_support_clinique_infoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s11_support_clinique_info
     */
    omit?: Prisma.s11_support_clinique_infoOmit<ExtArgs> | null;
    /**
     * The data used to create many s11_support_clinique_infos.
     */
    data: Prisma.s11_support_clinique_infoCreateManyInput | Prisma.s11_support_clinique_infoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s11_support_clinique_infoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s11_support_clinique_info update
 */
export type s11_support_clinique_infoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s11_support_clinique_info
     */
    select?: Prisma.s11_support_clinique_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s11_support_clinique_info
     */
    omit?: Prisma.s11_support_clinique_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s11_support_clinique_infoInclude<ExtArgs> | null;
    /**
     * The data needed to update a s11_support_clinique_info.
     */
    data: Prisma.XOR<Prisma.s11_support_clinique_infoUpdateInput, Prisma.s11_support_clinique_infoUncheckedUpdateInput>;
    /**
     * Choose, which s11_support_clinique_info to update.
     */
    where: Prisma.s11_support_clinique_infoWhereUniqueInput;
};
/**
 * s11_support_clinique_info updateMany
 */
export type s11_support_clinique_infoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s11_support_clinique_infos.
     */
    data: Prisma.XOR<Prisma.s11_support_clinique_infoUpdateManyMutationInput, Prisma.s11_support_clinique_infoUncheckedUpdateManyInput>;
    /**
     * Filter which s11_support_clinique_infos to update
     */
    where?: Prisma.s11_support_clinique_infoWhereInput;
    /**
     * Limit how many s11_support_clinique_infos to update.
     */
    limit?: number;
};
/**
 * s11_support_clinique_info updateManyAndReturn
 */
export type s11_support_clinique_infoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s11_support_clinique_info
     */
    select?: Prisma.s11_support_clinique_infoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s11_support_clinique_info
     */
    omit?: Prisma.s11_support_clinique_infoOmit<ExtArgs> | null;
    /**
     * The data used to update s11_support_clinique_infos.
     */
    data: Prisma.XOR<Prisma.s11_support_clinique_infoUpdateManyMutationInput, Prisma.s11_support_clinique_infoUncheckedUpdateManyInput>;
    /**
     * Filter which s11_support_clinique_infos to update
     */
    where?: Prisma.s11_support_clinique_infoWhereInput;
    /**
     * Limit how many s11_support_clinique_infos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s11_support_clinique_infoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s11_support_clinique_info upsert
 */
export type s11_support_clinique_infoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s11_support_clinique_info
     */
    select?: Prisma.s11_support_clinique_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s11_support_clinique_info
     */
    omit?: Prisma.s11_support_clinique_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s11_support_clinique_infoInclude<ExtArgs> | null;
    /**
     * The filter to search for the s11_support_clinique_info to update in case it exists.
     */
    where: Prisma.s11_support_clinique_infoWhereUniqueInput;
    /**
     * In case the s11_support_clinique_info found by the `where` argument doesn't exist, create a new s11_support_clinique_info with this data.
     */
    create: Prisma.XOR<Prisma.s11_support_clinique_infoCreateInput, Prisma.s11_support_clinique_infoUncheckedCreateInput>;
    /**
     * In case the s11_support_clinique_info was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s11_support_clinique_infoUpdateInput, Prisma.s11_support_clinique_infoUncheckedUpdateInput>;
};
/**
 * s11_support_clinique_info delete
 */
export type s11_support_clinique_infoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s11_support_clinique_info
     */
    select?: Prisma.s11_support_clinique_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s11_support_clinique_info
     */
    omit?: Prisma.s11_support_clinique_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s11_support_clinique_infoInclude<ExtArgs> | null;
    /**
     * Filter which s11_support_clinique_info to delete.
     */
    where: Prisma.s11_support_clinique_infoWhereUniqueInput;
};
/**
 * s11_support_clinique_info deleteMany
 */
export type s11_support_clinique_infoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s11_support_clinique_infos to delete
     */
    where?: Prisma.s11_support_clinique_infoWhereInput;
    /**
     * Limit how many s11_support_clinique_infos to delete.
     */
    limit?: number;
};
/**
 * s11_support_clinique_info without action
 */
export type s11_support_clinique_infoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s11_support_clinique_info
     */
    select?: Prisma.s11_support_clinique_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s11_support_clinique_info
     */
    omit?: Prisma.s11_support_clinique_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s11_support_clinique_infoInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s11_support_clinique_info.d.ts.map