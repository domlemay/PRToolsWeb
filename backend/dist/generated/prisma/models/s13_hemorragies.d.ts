import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s13_hemorragies
 *
 */
export type s13_hemorragiesModel = runtime.Types.Result.DefaultSelection<Prisma.$s13_hemorragiesPayload>;
export type AggregateS13_hemorragies = {
    _count: S13_hemorragiesCountAggregateOutputType | null;
    _avg: S13_hemorragiesAvgAggregateOutputType | null;
    _sum: S13_hemorragiesSumAggregateOutputType | null;
    _min: S13_hemorragiesMinAggregateOutputType | null;
    _max: S13_hemorragiesMaxAggregateOutputType | null;
};
export type S13_hemorragiesAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S13_hemorragiesSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S13_hemorragiesMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    pansements: string | null;
    controle_pression: string | null;
    controle_pression_type: string | null;
    garrot: string | null;
    garrot_heure: Date | null;
};
export type S13_hemorragiesMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    pansements: string | null;
    controle_pression: string | null;
    controle_pression_type: string | null;
    garrot: string | null;
    garrot_heure: Date | null;
};
export type S13_hemorragiesCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    pansements: number;
    controle_pression: number;
    controle_pression_type: number;
    garrot: number;
    garrot_heure: number;
    _all: number;
};
export type S13_hemorragiesAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S13_hemorragiesSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S13_hemorragiesMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    pansements?: true;
    controle_pression?: true;
    controle_pression_type?: true;
    garrot?: true;
    garrot_heure?: true;
};
export type S13_hemorragiesMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    pansements?: true;
    controle_pression?: true;
    controle_pression_type?: true;
    garrot?: true;
    garrot_heure?: true;
};
export type S13_hemorragiesCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    pansements?: true;
    controle_pression?: true;
    controle_pression_type?: true;
    garrot?: true;
    garrot_heure?: true;
    _all?: true;
};
export type S13_hemorragiesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s13_hemorragies to aggregate.
     */
    where?: Prisma.s13_hemorragiesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_hemorragies to fetch.
     */
    orderBy?: Prisma.s13_hemorragiesOrderByWithRelationInput | Prisma.s13_hemorragiesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s13_hemorragiesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_hemorragies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_hemorragies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s13_hemorragies
    **/
    _count?: true | S13_hemorragiesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S13_hemorragiesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S13_hemorragiesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S13_hemorragiesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S13_hemorragiesMaxAggregateInputType;
};
export type GetS13_hemorragiesAggregateType<T extends S13_hemorragiesAggregateArgs> = {
    [P in keyof T & keyof AggregateS13_hemorragies]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS13_hemorragies[P]> : Prisma.GetScalarType<T[P], AggregateS13_hemorragies[P]>;
};
export type s13_hemorragiesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s13_hemorragiesWhereInput;
    orderBy?: Prisma.s13_hemorragiesOrderByWithAggregationInput | Prisma.s13_hemorragiesOrderByWithAggregationInput[];
    by: Prisma.S13_hemorragiesScalarFieldEnum[] | Prisma.S13_hemorragiesScalarFieldEnum;
    having?: Prisma.s13_hemorragiesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S13_hemorragiesCountAggregateInputType | true;
    _avg?: S13_hemorragiesAvgAggregateInputType;
    _sum?: S13_hemorragiesSumAggregateInputType;
    _min?: S13_hemorragiesMinAggregateInputType;
    _max?: S13_hemorragiesMaxAggregateInputType;
};
export type S13_hemorragiesGroupByOutputType = {
    id: number;
    rapport_id: number;
    pansements: string | null;
    controle_pression: string | null;
    controle_pression_type: string | null;
    garrot: string | null;
    garrot_heure: Date | null;
    _count: S13_hemorragiesCountAggregateOutputType | null;
    _avg: S13_hemorragiesAvgAggregateOutputType | null;
    _sum: S13_hemorragiesSumAggregateOutputType | null;
    _min: S13_hemorragiesMinAggregateOutputType | null;
    _max: S13_hemorragiesMaxAggregateOutputType | null;
};
type GetS13_hemorragiesGroupByPayload<T extends s13_hemorragiesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S13_hemorragiesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S13_hemorragiesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S13_hemorragiesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S13_hemorragiesGroupByOutputType[P]>;
}>>;
export type s13_hemorragiesWhereInput = {
    AND?: Prisma.s13_hemorragiesWhereInput | Prisma.s13_hemorragiesWhereInput[];
    OR?: Prisma.s13_hemorragiesWhereInput[];
    NOT?: Prisma.s13_hemorragiesWhereInput | Prisma.s13_hemorragiesWhereInput[];
    id?: Prisma.IntFilter<"s13_hemorragies"> | number;
    rapport_id?: Prisma.IntFilter<"s13_hemorragies"> | number;
    pansements?: Prisma.StringNullableFilter<"s13_hemorragies"> | string | null;
    controle_pression?: Prisma.StringNullableFilter<"s13_hemorragies"> | string | null;
    controle_pression_type?: Prisma.StringNullableFilter<"s13_hemorragies"> | string | null;
    garrot?: Prisma.StringNullableFilter<"s13_hemorragies"> | string | null;
    garrot_heure?: Prisma.DateTimeNullableFilter<"s13_hemorragies"> | Date | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s13_hemorragiesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    pansements?: Prisma.SortOrderInput | Prisma.SortOrder;
    controle_pression?: Prisma.SortOrderInput | Prisma.SortOrder;
    controle_pression_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    garrot?: Prisma.SortOrderInput | Prisma.SortOrder;
    garrot_heure?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s13_hemorragiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id?: number;
    AND?: Prisma.s13_hemorragiesWhereInput | Prisma.s13_hemorragiesWhereInput[];
    OR?: Prisma.s13_hemorragiesWhereInput[];
    NOT?: Prisma.s13_hemorragiesWhereInput | Prisma.s13_hemorragiesWhereInput[];
    pansements?: Prisma.StringNullableFilter<"s13_hemorragies"> | string | null;
    controle_pression?: Prisma.StringNullableFilter<"s13_hemorragies"> | string | null;
    controle_pression_type?: Prisma.StringNullableFilter<"s13_hemorragies"> | string | null;
    garrot?: Prisma.StringNullableFilter<"s13_hemorragies"> | string | null;
    garrot_heure?: Prisma.DateTimeNullableFilter<"s13_hemorragies"> | Date | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id" | "rapport_id">;
export type s13_hemorragiesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    pansements?: Prisma.SortOrderInput | Prisma.SortOrder;
    controle_pression?: Prisma.SortOrderInput | Prisma.SortOrder;
    controle_pression_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    garrot?: Prisma.SortOrderInput | Prisma.SortOrder;
    garrot_heure?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s13_hemorragiesCountOrderByAggregateInput;
    _avg?: Prisma.s13_hemorragiesAvgOrderByAggregateInput;
    _max?: Prisma.s13_hemorragiesMaxOrderByAggregateInput;
    _min?: Prisma.s13_hemorragiesMinOrderByAggregateInput;
    _sum?: Prisma.s13_hemorragiesSumOrderByAggregateInput;
};
export type s13_hemorragiesScalarWhereWithAggregatesInput = {
    AND?: Prisma.s13_hemorragiesScalarWhereWithAggregatesInput | Prisma.s13_hemorragiesScalarWhereWithAggregatesInput[];
    OR?: Prisma.s13_hemorragiesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s13_hemorragiesScalarWhereWithAggregatesInput | Prisma.s13_hemorragiesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s13_hemorragies"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s13_hemorragies"> | number;
    pansements?: Prisma.StringNullableWithAggregatesFilter<"s13_hemorragies"> | string | null;
    controle_pression?: Prisma.StringNullableWithAggregatesFilter<"s13_hemorragies"> | string | null;
    controle_pression_type?: Prisma.StringNullableWithAggregatesFilter<"s13_hemorragies"> | string | null;
    garrot?: Prisma.StringNullableWithAggregatesFilter<"s13_hemorragies"> | string | null;
    garrot_heure?: Prisma.DateTimeNullableWithAggregatesFilter<"s13_hemorragies"> | Date | string | null;
};
export type s13_hemorragiesCreateInput = {
    pansements?: string | null;
    controle_pression?: string | null;
    controle_pression_type?: string | null;
    garrot?: string | null;
    garrot_heure?: Date | string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS13_hemorragiesInput;
};
export type s13_hemorragiesUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    pansements?: string | null;
    controle_pression?: string | null;
    controle_pression_type?: string | null;
    garrot?: string | null;
    garrot_heure?: Date | string | null;
};
export type s13_hemorragiesUpdateInput = {
    pansements?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    controle_pression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    controle_pression_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    garrot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    garrot_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS13_hemorragiesNestedInput;
};
export type s13_hemorragiesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    pansements?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    controle_pression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    controle_pression_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    garrot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    garrot_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s13_hemorragiesCreateManyInput = {
    id?: number;
    rapport_id: number;
    pansements?: string | null;
    controle_pression?: string | null;
    controle_pression_type?: string | null;
    garrot?: string | null;
    garrot_heure?: Date | string | null;
};
export type s13_hemorragiesUpdateManyMutationInput = {
    pansements?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    controle_pression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    controle_pression_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    garrot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    garrot_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s13_hemorragiesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    pansements?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    controle_pression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    controle_pression_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    garrot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    garrot_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type S13_hemorragiesNullableScalarRelationFilter = {
    is?: Prisma.s13_hemorragiesWhereInput | null;
    isNot?: Prisma.s13_hemorragiesWhereInput | null;
};
export type s13_hemorragiesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    pansements?: Prisma.SortOrder;
    controle_pression?: Prisma.SortOrder;
    controle_pression_type?: Prisma.SortOrder;
    garrot?: Prisma.SortOrder;
    garrot_heure?: Prisma.SortOrder;
};
export type s13_hemorragiesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s13_hemorragiesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    pansements?: Prisma.SortOrder;
    controle_pression?: Prisma.SortOrder;
    controle_pression_type?: Prisma.SortOrder;
    garrot?: Prisma.SortOrder;
    garrot_heure?: Prisma.SortOrder;
};
export type s13_hemorragiesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    pansements?: Prisma.SortOrder;
    controle_pression?: Prisma.SortOrder;
    controle_pression_type?: Prisma.SortOrder;
    garrot?: Prisma.SortOrder;
    garrot_heure?: Prisma.SortOrder;
};
export type s13_hemorragiesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s13_hemorragiesCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s13_hemorragiesCreateWithoutRapportInput, Prisma.s13_hemorragiesUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_hemorragiesCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s13_hemorragiesWhereUniqueInput;
};
export type s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s13_hemorragiesCreateWithoutRapportInput, Prisma.s13_hemorragiesUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_hemorragiesCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s13_hemorragiesWhereUniqueInput;
};
export type s13_hemorragiesUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s13_hemorragiesCreateWithoutRapportInput, Prisma.s13_hemorragiesUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_hemorragiesCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s13_hemorragiesUpsertWithoutRapportInput;
    disconnect?: Prisma.s13_hemorragiesWhereInput | boolean;
    delete?: Prisma.s13_hemorragiesWhereInput | boolean;
    connect?: Prisma.s13_hemorragiesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s13_hemorragiesUpdateToOneWithWhereWithoutRapportInput, Prisma.s13_hemorragiesUpdateWithoutRapportInput>, Prisma.s13_hemorragiesUncheckedUpdateWithoutRapportInput>;
};
export type s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s13_hemorragiesCreateWithoutRapportInput, Prisma.s13_hemorragiesUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_hemorragiesCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s13_hemorragiesUpsertWithoutRapportInput;
    disconnect?: Prisma.s13_hemorragiesWhereInput | boolean;
    delete?: Prisma.s13_hemorragiesWhereInput | boolean;
    connect?: Prisma.s13_hemorragiesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s13_hemorragiesUpdateToOneWithWhereWithoutRapportInput, Prisma.s13_hemorragiesUpdateWithoutRapportInput>, Prisma.s13_hemorragiesUncheckedUpdateWithoutRapportInput>;
};
export type s13_hemorragiesCreateWithoutRapportInput = {
    pansements?: string | null;
    controle_pression?: string | null;
    controle_pression_type?: string | null;
    garrot?: string | null;
    garrot_heure?: Date | string | null;
};
export type s13_hemorragiesUncheckedCreateWithoutRapportInput = {
    id?: number;
    pansements?: string | null;
    controle_pression?: string | null;
    controle_pression_type?: string | null;
    garrot?: string | null;
    garrot_heure?: Date | string | null;
};
export type s13_hemorragiesCreateOrConnectWithoutRapportInput = {
    where: Prisma.s13_hemorragiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.s13_hemorragiesCreateWithoutRapportInput, Prisma.s13_hemorragiesUncheckedCreateWithoutRapportInput>;
};
export type s13_hemorragiesUpsertWithoutRapportInput = {
    update: Prisma.XOR<Prisma.s13_hemorragiesUpdateWithoutRapportInput, Prisma.s13_hemorragiesUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s13_hemorragiesCreateWithoutRapportInput, Prisma.s13_hemorragiesUncheckedCreateWithoutRapportInput>;
    where?: Prisma.s13_hemorragiesWhereInput;
};
export type s13_hemorragiesUpdateToOneWithWhereWithoutRapportInput = {
    where?: Prisma.s13_hemorragiesWhereInput;
    data: Prisma.XOR<Prisma.s13_hemorragiesUpdateWithoutRapportInput, Prisma.s13_hemorragiesUncheckedUpdateWithoutRapportInput>;
};
export type s13_hemorragiesUpdateWithoutRapportInput = {
    pansements?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    controle_pression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    controle_pression_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    garrot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    garrot_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s13_hemorragiesUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pansements?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    controle_pression?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    controle_pression_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    garrot?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    garrot_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s13_hemorragiesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    pansements?: boolean;
    controle_pression?: boolean;
    controle_pression_type?: boolean;
    garrot?: boolean;
    garrot_heure?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_hemorragies"]>;
export type s13_hemorragiesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    pansements?: boolean;
    controle_pression?: boolean;
    controle_pression_type?: boolean;
    garrot?: boolean;
    garrot_heure?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_hemorragies"]>;
export type s13_hemorragiesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    pansements?: boolean;
    controle_pression?: boolean;
    controle_pression_type?: boolean;
    garrot?: boolean;
    garrot_heure?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_hemorragies"]>;
export type s13_hemorragiesSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    pansements?: boolean;
    controle_pression?: boolean;
    controle_pression_type?: boolean;
    garrot?: boolean;
    garrot_heure?: boolean;
};
export type s13_hemorragiesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "pansements" | "controle_pression" | "controle_pression_type" | "garrot" | "garrot_heure", ExtArgs["result"]["s13_hemorragies"]>;
export type s13_hemorragiesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s13_hemorragiesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s13_hemorragiesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s13_hemorragiesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s13_hemorragies";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        pansements: string | null;
        controle_pression: string | null;
        controle_pression_type: string | null;
        garrot: string | null;
        garrot_heure: Date | null;
    }, ExtArgs["result"]["s13_hemorragies"]>;
    composites: {};
};
export type s13_hemorragiesGetPayload<S extends boolean | null | undefined | s13_hemorragiesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s13_hemorragiesPayload, S>;
export type s13_hemorragiesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s13_hemorragiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S13_hemorragiesCountAggregateInputType | true;
};
export interface s13_hemorragiesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s13_hemorragies'];
        meta: {
            name: 's13_hemorragies';
        };
    };
    /**
     * Find zero or one S13_hemorragies that matches the filter.
     * @param {s13_hemorragiesFindUniqueArgs} args - Arguments to find a S13_hemorragies
     * @example
     * // Get one S13_hemorragies
     * const s13_hemorragies = await prisma.s13_hemorragies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s13_hemorragiesFindUniqueArgs>(args: Prisma.SelectSubset<T, s13_hemorragiesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s13_hemorragiesClient<runtime.Types.Result.GetResult<Prisma.$s13_hemorragiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S13_hemorragies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s13_hemorragiesFindUniqueOrThrowArgs} args - Arguments to find a S13_hemorragies
     * @example
     * // Get one S13_hemorragies
     * const s13_hemorragies = await prisma.s13_hemorragies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s13_hemorragiesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s13_hemorragiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s13_hemorragiesClient<runtime.Types.Result.GetResult<Prisma.$s13_hemorragiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S13_hemorragies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_hemorragiesFindFirstArgs} args - Arguments to find a S13_hemorragies
     * @example
     * // Get one S13_hemorragies
     * const s13_hemorragies = await prisma.s13_hemorragies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s13_hemorragiesFindFirstArgs>(args?: Prisma.SelectSubset<T, s13_hemorragiesFindFirstArgs<ExtArgs>>): Prisma.Prisma__s13_hemorragiesClient<runtime.Types.Result.GetResult<Prisma.$s13_hemorragiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S13_hemorragies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_hemorragiesFindFirstOrThrowArgs} args - Arguments to find a S13_hemorragies
     * @example
     * // Get one S13_hemorragies
     * const s13_hemorragies = await prisma.s13_hemorragies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s13_hemorragiesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s13_hemorragiesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s13_hemorragiesClient<runtime.Types.Result.GetResult<Prisma.$s13_hemorragiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S13_hemorragies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_hemorragiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S13_hemorragies
     * const s13_hemorragies = await prisma.s13_hemorragies.findMany()
     *
     * // Get first 10 S13_hemorragies
     * const s13_hemorragies = await prisma.s13_hemorragies.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s13_hemorragiesWithIdOnly = await prisma.s13_hemorragies.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s13_hemorragiesFindManyArgs>(args?: Prisma.SelectSubset<T, s13_hemorragiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_hemorragiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S13_hemorragies.
     * @param {s13_hemorragiesCreateArgs} args - Arguments to create a S13_hemorragies.
     * @example
     * // Create one S13_hemorragies
     * const S13_hemorragies = await prisma.s13_hemorragies.create({
     *   data: {
     *     // ... data to create a S13_hemorragies
     *   }
     * })
     *
     */
    create<T extends s13_hemorragiesCreateArgs>(args: Prisma.SelectSubset<T, s13_hemorragiesCreateArgs<ExtArgs>>): Prisma.Prisma__s13_hemorragiesClient<runtime.Types.Result.GetResult<Prisma.$s13_hemorragiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S13_hemorragies.
     * @param {s13_hemorragiesCreateManyArgs} args - Arguments to create many S13_hemorragies.
     * @example
     * // Create many S13_hemorragies
     * const s13_hemorragies = await prisma.s13_hemorragies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s13_hemorragiesCreateManyArgs>(args?: Prisma.SelectSubset<T, s13_hemorragiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S13_hemorragies and returns the data saved in the database.
     * @param {s13_hemorragiesCreateManyAndReturnArgs} args - Arguments to create many S13_hemorragies.
     * @example
     * // Create many S13_hemorragies
     * const s13_hemorragies = await prisma.s13_hemorragies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S13_hemorragies and only return the `id`
     * const s13_hemorragiesWithIdOnly = await prisma.s13_hemorragies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s13_hemorragiesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s13_hemorragiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_hemorragiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S13_hemorragies.
     * @param {s13_hemorragiesDeleteArgs} args - Arguments to delete one S13_hemorragies.
     * @example
     * // Delete one S13_hemorragies
     * const S13_hemorragies = await prisma.s13_hemorragies.delete({
     *   where: {
     *     // ... filter to delete one S13_hemorragies
     *   }
     * })
     *
     */
    delete<T extends s13_hemorragiesDeleteArgs>(args: Prisma.SelectSubset<T, s13_hemorragiesDeleteArgs<ExtArgs>>): Prisma.Prisma__s13_hemorragiesClient<runtime.Types.Result.GetResult<Prisma.$s13_hemorragiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S13_hemorragies.
     * @param {s13_hemorragiesUpdateArgs} args - Arguments to update one S13_hemorragies.
     * @example
     * // Update one S13_hemorragies
     * const s13_hemorragies = await prisma.s13_hemorragies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s13_hemorragiesUpdateArgs>(args: Prisma.SelectSubset<T, s13_hemorragiesUpdateArgs<ExtArgs>>): Prisma.Prisma__s13_hemorragiesClient<runtime.Types.Result.GetResult<Prisma.$s13_hemorragiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S13_hemorragies.
     * @param {s13_hemorragiesDeleteManyArgs} args - Arguments to filter S13_hemorragies to delete.
     * @example
     * // Delete a few S13_hemorragies
     * const { count } = await prisma.s13_hemorragies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s13_hemorragiesDeleteManyArgs>(args?: Prisma.SelectSubset<T, s13_hemorragiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S13_hemorragies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_hemorragiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S13_hemorragies
     * const s13_hemorragies = await prisma.s13_hemorragies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s13_hemorragiesUpdateManyArgs>(args: Prisma.SelectSubset<T, s13_hemorragiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S13_hemorragies and returns the data updated in the database.
     * @param {s13_hemorragiesUpdateManyAndReturnArgs} args - Arguments to update many S13_hemorragies.
     * @example
     * // Update many S13_hemorragies
     * const s13_hemorragies = await prisma.s13_hemorragies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S13_hemorragies and only return the `id`
     * const s13_hemorragiesWithIdOnly = await prisma.s13_hemorragies.updateManyAndReturn({
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
    updateManyAndReturn<T extends s13_hemorragiesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s13_hemorragiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_hemorragiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S13_hemorragies.
     * @param {s13_hemorragiesUpsertArgs} args - Arguments to update or create a S13_hemorragies.
     * @example
     * // Update or create a S13_hemorragies
     * const s13_hemorragies = await prisma.s13_hemorragies.upsert({
     *   create: {
     *     // ... data to create a S13_hemorragies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S13_hemorragies we want to update
     *   }
     * })
     */
    upsert<T extends s13_hemorragiesUpsertArgs>(args: Prisma.SelectSubset<T, s13_hemorragiesUpsertArgs<ExtArgs>>): Prisma.Prisma__s13_hemorragiesClient<runtime.Types.Result.GetResult<Prisma.$s13_hemorragiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S13_hemorragies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_hemorragiesCountArgs} args - Arguments to filter S13_hemorragies to count.
     * @example
     * // Count the number of S13_hemorragies
     * const count = await prisma.s13_hemorragies.count({
     *   where: {
     *     // ... the filter for the S13_hemorragies we want to count
     *   }
     * })
    **/
    count<T extends s13_hemorragiesCountArgs>(args?: Prisma.Subset<T, s13_hemorragiesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S13_hemorragiesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S13_hemorragies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S13_hemorragiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S13_hemorragiesAggregateArgs>(args: Prisma.Subset<T, S13_hemorragiesAggregateArgs>): Prisma.PrismaPromise<GetS13_hemorragiesAggregateType<T>>;
    /**
     * Group by S13_hemorragies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_hemorragiesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s13_hemorragiesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s13_hemorragiesGroupByArgs['orderBy'];
    } : {
        orderBy?: s13_hemorragiesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s13_hemorragiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS13_hemorragiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s13_hemorragies model
     */
    readonly fields: s13_hemorragiesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s13_hemorragies.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s13_hemorragiesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the s13_hemorragies model
 */
export interface s13_hemorragiesFieldRefs {
    readonly id: Prisma.FieldRef<"s13_hemorragies", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s13_hemorragies", 'Int'>;
    readonly pansements: Prisma.FieldRef<"s13_hemorragies", 'String'>;
    readonly controle_pression: Prisma.FieldRef<"s13_hemorragies", 'String'>;
    readonly controle_pression_type: Prisma.FieldRef<"s13_hemorragies", 'String'>;
    readonly garrot: Prisma.FieldRef<"s13_hemorragies", 'String'>;
    readonly garrot_heure: Prisma.FieldRef<"s13_hemorragies", 'DateTime'>;
}
/**
 * s13_hemorragies findUnique
 */
export type s13_hemorragiesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_hemorragies
     */
    select?: Prisma.s13_hemorragiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_hemorragies
     */
    omit?: Prisma.s13_hemorragiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_hemorragiesInclude<ExtArgs> | null;
    /**
     * Filter, which s13_hemorragies to fetch.
     */
    where: Prisma.s13_hemorragiesWhereUniqueInput;
};
/**
 * s13_hemorragies findUniqueOrThrow
 */
export type s13_hemorragiesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_hemorragies
     */
    select?: Prisma.s13_hemorragiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_hemorragies
     */
    omit?: Prisma.s13_hemorragiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_hemorragiesInclude<ExtArgs> | null;
    /**
     * Filter, which s13_hemorragies to fetch.
     */
    where: Prisma.s13_hemorragiesWhereUniqueInput;
};
/**
 * s13_hemorragies findFirst
 */
export type s13_hemorragiesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_hemorragies
     */
    select?: Prisma.s13_hemorragiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_hemorragies
     */
    omit?: Prisma.s13_hemorragiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_hemorragiesInclude<ExtArgs> | null;
    /**
     * Filter, which s13_hemorragies to fetch.
     */
    where?: Prisma.s13_hemorragiesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_hemorragies to fetch.
     */
    orderBy?: Prisma.s13_hemorragiesOrderByWithRelationInput | Prisma.s13_hemorragiesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s13_hemorragies.
     */
    cursor?: Prisma.s13_hemorragiesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_hemorragies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_hemorragies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s13_hemorragies.
     */
    distinct?: Prisma.S13_hemorragiesScalarFieldEnum | Prisma.S13_hemorragiesScalarFieldEnum[];
};
/**
 * s13_hemorragies findFirstOrThrow
 */
export type s13_hemorragiesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_hemorragies
     */
    select?: Prisma.s13_hemorragiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_hemorragies
     */
    omit?: Prisma.s13_hemorragiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_hemorragiesInclude<ExtArgs> | null;
    /**
     * Filter, which s13_hemorragies to fetch.
     */
    where?: Prisma.s13_hemorragiesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_hemorragies to fetch.
     */
    orderBy?: Prisma.s13_hemorragiesOrderByWithRelationInput | Prisma.s13_hemorragiesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s13_hemorragies.
     */
    cursor?: Prisma.s13_hemorragiesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_hemorragies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_hemorragies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s13_hemorragies.
     */
    distinct?: Prisma.S13_hemorragiesScalarFieldEnum | Prisma.S13_hemorragiesScalarFieldEnum[];
};
/**
 * s13_hemorragies findMany
 */
export type s13_hemorragiesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_hemorragies
     */
    select?: Prisma.s13_hemorragiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_hemorragies
     */
    omit?: Prisma.s13_hemorragiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_hemorragiesInclude<ExtArgs> | null;
    /**
     * Filter, which s13_hemorragies to fetch.
     */
    where?: Prisma.s13_hemorragiesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_hemorragies to fetch.
     */
    orderBy?: Prisma.s13_hemorragiesOrderByWithRelationInput | Prisma.s13_hemorragiesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s13_hemorragies.
     */
    cursor?: Prisma.s13_hemorragiesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_hemorragies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_hemorragies.
     */
    skip?: number;
    distinct?: Prisma.S13_hemorragiesScalarFieldEnum | Prisma.S13_hemorragiesScalarFieldEnum[];
};
/**
 * s13_hemorragies create
 */
export type s13_hemorragiesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_hemorragies
     */
    select?: Prisma.s13_hemorragiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_hemorragies
     */
    omit?: Prisma.s13_hemorragiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_hemorragiesInclude<ExtArgs> | null;
    /**
     * The data needed to create a s13_hemorragies.
     */
    data: Prisma.XOR<Prisma.s13_hemorragiesCreateInput, Prisma.s13_hemorragiesUncheckedCreateInput>;
};
/**
 * s13_hemorragies createMany
 */
export type s13_hemorragiesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s13_hemorragies.
     */
    data: Prisma.s13_hemorragiesCreateManyInput | Prisma.s13_hemorragiesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s13_hemorragies createManyAndReturn
 */
export type s13_hemorragiesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_hemorragies
     */
    select?: Prisma.s13_hemorragiesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_hemorragies
     */
    omit?: Prisma.s13_hemorragiesOmit<ExtArgs> | null;
    /**
     * The data used to create many s13_hemorragies.
     */
    data: Prisma.s13_hemorragiesCreateManyInput | Prisma.s13_hemorragiesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_hemorragiesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s13_hemorragies update
 */
export type s13_hemorragiesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_hemorragies
     */
    select?: Prisma.s13_hemorragiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_hemorragies
     */
    omit?: Prisma.s13_hemorragiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_hemorragiesInclude<ExtArgs> | null;
    /**
     * The data needed to update a s13_hemorragies.
     */
    data: Prisma.XOR<Prisma.s13_hemorragiesUpdateInput, Prisma.s13_hemorragiesUncheckedUpdateInput>;
    /**
     * Choose, which s13_hemorragies to update.
     */
    where: Prisma.s13_hemorragiesWhereUniqueInput;
};
/**
 * s13_hemorragies updateMany
 */
export type s13_hemorragiesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s13_hemorragies.
     */
    data: Prisma.XOR<Prisma.s13_hemorragiesUpdateManyMutationInput, Prisma.s13_hemorragiesUncheckedUpdateManyInput>;
    /**
     * Filter which s13_hemorragies to update
     */
    where?: Prisma.s13_hemorragiesWhereInput;
    /**
     * Limit how many s13_hemorragies to update.
     */
    limit?: number;
};
/**
 * s13_hemorragies updateManyAndReturn
 */
export type s13_hemorragiesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_hemorragies
     */
    select?: Prisma.s13_hemorragiesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_hemorragies
     */
    omit?: Prisma.s13_hemorragiesOmit<ExtArgs> | null;
    /**
     * The data used to update s13_hemorragies.
     */
    data: Prisma.XOR<Prisma.s13_hemorragiesUpdateManyMutationInput, Prisma.s13_hemorragiesUncheckedUpdateManyInput>;
    /**
     * Filter which s13_hemorragies to update
     */
    where?: Prisma.s13_hemorragiesWhereInput;
    /**
     * Limit how many s13_hemorragies to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_hemorragiesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s13_hemorragies upsert
 */
export type s13_hemorragiesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_hemorragies
     */
    select?: Prisma.s13_hemorragiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_hemorragies
     */
    omit?: Prisma.s13_hemorragiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_hemorragiesInclude<ExtArgs> | null;
    /**
     * The filter to search for the s13_hemorragies to update in case it exists.
     */
    where: Prisma.s13_hemorragiesWhereUniqueInput;
    /**
     * In case the s13_hemorragies found by the `where` argument doesn't exist, create a new s13_hemorragies with this data.
     */
    create: Prisma.XOR<Prisma.s13_hemorragiesCreateInput, Prisma.s13_hemorragiesUncheckedCreateInput>;
    /**
     * In case the s13_hemorragies was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s13_hemorragiesUpdateInput, Prisma.s13_hemorragiesUncheckedUpdateInput>;
};
/**
 * s13_hemorragies delete
 */
export type s13_hemorragiesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_hemorragies
     */
    select?: Prisma.s13_hemorragiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_hemorragies
     */
    omit?: Prisma.s13_hemorragiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_hemorragiesInclude<ExtArgs> | null;
    /**
     * Filter which s13_hemorragies to delete.
     */
    where: Prisma.s13_hemorragiesWhereUniqueInput;
};
/**
 * s13_hemorragies deleteMany
 */
export type s13_hemorragiesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s13_hemorragies to delete
     */
    where?: Prisma.s13_hemorragiesWhereInput;
    /**
     * Limit how many s13_hemorragies to delete.
     */
    limit?: number;
};
/**
 * s13_hemorragies without action
 */
export type s13_hemorragiesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_hemorragies
     */
    select?: Prisma.s13_hemorragiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_hemorragies
     */
    omit?: Prisma.s13_hemorragiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_hemorragiesInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s13_hemorragies.d.ts.map