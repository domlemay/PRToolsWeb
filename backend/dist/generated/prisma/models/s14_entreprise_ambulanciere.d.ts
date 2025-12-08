import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s14_entreprise_ambulanciere
 *
 */
export type s14_entreprise_ambulanciereModel = runtime.Types.Result.DefaultSelection<Prisma.$s14_entreprise_ambulancierePayload>;
export type AggregateS14_entreprise_ambulanciere = {
    _count: S14_entreprise_ambulanciereCountAggregateOutputType | null;
    _avg: S14_entreprise_ambulanciereAvgAggregateOutputType | null;
    _sum: S14_entreprise_ambulanciereSumAggregateOutputType | null;
    _min: S14_entreprise_ambulanciereMinAggregateOutputType | null;
    _max: S14_entreprise_ambulanciereMaxAggregateOutputType | null;
};
export type S14_entreprise_ambulanciereAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S14_entreprise_ambulanciereSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S14_entreprise_ambulanciereMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    entreprise_ambulanciere_nom: string | null;
    entreprise_ambulanciere_no: string | null;
    pr_accompagnant: boolean | null;
};
export type S14_entreprise_ambulanciereMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    entreprise_ambulanciere_nom: string | null;
    entreprise_ambulanciere_no: string | null;
    pr_accompagnant: boolean | null;
};
export type S14_entreprise_ambulanciereCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    entreprise_ambulanciere_nom: number;
    entreprise_ambulanciere_no: number;
    pr_accompagnant: number;
    _all: number;
};
export type S14_entreprise_ambulanciereAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S14_entreprise_ambulanciereSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S14_entreprise_ambulanciereMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    entreprise_ambulanciere_nom?: true;
    entreprise_ambulanciere_no?: true;
    pr_accompagnant?: true;
};
export type S14_entreprise_ambulanciereMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    entreprise_ambulanciere_nom?: true;
    entreprise_ambulanciere_no?: true;
    pr_accompagnant?: true;
};
export type S14_entreprise_ambulanciereCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    entreprise_ambulanciere_nom?: true;
    entreprise_ambulanciere_no?: true;
    pr_accompagnant?: true;
    _all?: true;
};
export type S14_entreprise_ambulanciereAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s14_entreprise_ambulanciere to aggregate.
     */
    where?: Prisma.s14_entreprise_ambulanciereWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s14_entreprise_ambulancieres to fetch.
     */
    orderBy?: Prisma.s14_entreprise_ambulanciereOrderByWithRelationInput | Prisma.s14_entreprise_ambulanciereOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s14_entreprise_ambulanciereWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s14_entreprise_ambulancieres from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s14_entreprise_ambulancieres.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s14_entreprise_ambulancieres
    **/
    _count?: true | S14_entreprise_ambulanciereCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S14_entreprise_ambulanciereAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S14_entreprise_ambulanciereSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S14_entreprise_ambulanciereMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S14_entreprise_ambulanciereMaxAggregateInputType;
};
export type GetS14_entreprise_ambulanciereAggregateType<T extends S14_entreprise_ambulanciereAggregateArgs> = {
    [P in keyof T & keyof AggregateS14_entreprise_ambulanciere]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS14_entreprise_ambulanciere[P]> : Prisma.GetScalarType<T[P], AggregateS14_entreprise_ambulanciere[P]>;
};
export type s14_entreprise_ambulanciereGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s14_entreprise_ambulanciereWhereInput;
    orderBy?: Prisma.s14_entreprise_ambulanciereOrderByWithAggregationInput | Prisma.s14_entreprise_ambulanciereOrderByWithAggregationInput[];
    by: Prisma.S14_entreprise_ambulanciereScalarFieldEnum[] | Prisma.S14_entreprise_ambulanciereScalarFieldEnum;
    having?: Prisma.s14_entreprise_ambulanciereScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S14_entreprise_ambulanciereCountAggregateInputType | true;
    _avg?: S14_entreprise_ambulanciereAvgAggregateInputType;
    _sum?: S14_entreprise_ambulanciereSumAggregateInputType;
    _min?: S14_entreprise_ambulanciereMinAggregateInputType;
    _max?: S14_entreprise_ambulanciereMaxAggregateInputType;
};
export type S14_entreprise_ambulanciereGroupByOutputType = {
    id: number;
    rapport_id: number;
    entreprise_ambulanciere_nom: string | null;
    entreprise_ambulanciere_no: string | null;
    pr_accompagnant: boolean | null;
    _count: S14_entreprise_ambulanciereCountAggregateOutputType | null;
    _avg: S14_entreprise_ambulanciereAvgAggregateOutputType | null;
    _sum: S14_entreprise_ambulanciereSumAggregateOutputType | null;
    _min: S14_entreprise_ambulanciereMinAggregateOutputType | null;
    _max: S14_entreprise_ambulanciereMaxAggregateOutputType | null;
};
type GetS14_entreprise_ambulanciereGroupByPayload<T extends s14_entreprise_ambulanciereGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S14_entreprise_ambulanciereGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S14_entreprise_ambulanciereGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S14_entreprise_ambulanciereGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S14_entreprise_ambulanciereGroupByOutputType[P]>;
}>>;
export type s14_entreprise_ambulanciereWhereInput = {
    AND?: Prisma.s14_entreprise_ambulanciereWhereInput | Prisma.s14_entreprise_ambulanciereWhereInput[];
    OR?: Prisma.s14_entreprise_ambulanciereWhereInput[];
    NOT?: Prisma.s14_entreprise_ambulanciereWhereInput | Prisma.s14_entreprise_ambulanciereWhereInput[];
    id?: Prisma.IntFilter<"s14_entreprise_ambulanciere"> | number;
    rapport_id?: Prisma.IntFilter<"s14_entreprise_ambulanciere"> | number;
    entreprise_ambulanciere_nom?: Prisma.StringNullableFilter<"s14_entreprise_ambulanciere"> | string | null;
    entreprise_ambulanciere_no?: Prisma.StringNullableFilter<"s14_entreprise_ambulanciere"> | string | null;
    pr_accompagnant?: Prisma.BoolNullableFilter<"s14_entreprise_ambulanciere"> | boolean | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s14_entreprise_ambulanciereOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    entreprise_ambulanciere_nom?: Prisma.SortOrderInput | Prisma.SortOrder;
    entreprise_ambulanciere_no?: Prisma.SortOrderInput | Prisma.SortOrder;
    pr_accompagnant?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s14_entreprise_ambulanciereWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id?: number;
    AND?: Prisma.s14_entreprise_ambulanciereWhereInput | Prisma.s14_entreprise_ambulanciereWhereInput[];
    OR?: Prisma.s14_entreprise_ambulanciereWhereInput[];
    NOT?: Prisma.s14_entreprise_ambulanciereWhereInput | Prisma.s14_entreprise_ambulanciereWhereInput[];
    entreprise_ambulanciere_nom?: Prisma.StringNullableFilter<"s14_entreprise_ambulanciere"> | string | null;
    entreprise_ambulanciere_no?: Prisma.StringNullableFilter<"s14_entreprise_ambulanciere"> | string | null;
    pr_accompagnant?: Prisma.BoolNullableFilter<"s14_entreprise_ambulanciere"> | boolean | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id" | "rapport_id">;
export type s14_entreprise_ambulanciereOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    entreprise_ambulanciere_nom?: Prisma.SortOrderInput | Prisma.SortOrder;
    entreprise_ambulanciere_no?: Prisma.SortOrderInput | Prisma.SortOrder;
    pr_accompagnant?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s14_entreprise_ambulanciereCountOrderByAggregateInput;
    _avg?: Prisma.s14_entreprise_ambulanciereAvgOrderByAggregateInput;
    _max?: Prisma.s14_entreprise_ambulanciereMaxOrderByAggregateInput;
    _min?: Prisma.s14_entreprise_ambulanciereMinOrderByAggregateInput;
    _sum?: Prisma.s14_entreprise_ambulanciereSumOrderByAggregateInput;
};
export type s14_entreprise_ambulanciereScalarWhereWithAggregatesInput = {
    AND?: Prisma.s14_entreprise_ambulanciereScalarWhereWithAggregatesInput | Prisma.s14_entreprise_ambulanciereScalarWhereWithAggregatesInput[];
    OR?: Prisma.s14_entreprise_ambulanciereScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s14_entreprise_ambulanciereScalarWhereWithAggregatesInput | Prisma.s14_entreprise_ambulanciereScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s14_entreprise_ambulanciere"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s14_entreprise_ambulanciere"> | number;
    entreprise_ambulanciere_nom?: Prisma.StringNullableWithAggregatesFilter<"s14_entreprise_ambulanciere"> | string | null;
    entreprise_ambulanciere_no?: Prisma.StringNullableWithAggregatesFilter<"s14_entreprise_ambulanciere"> | string | null;
    pr_accompagnant?: Prisma.BoolNullableWithAggregatesFilter<"s14_entreprise_ambulanciere"> | boolean | null;
};
export type s14_entreprise_ambulanciereCreateInput = {
    entreprise_ambulanciere_nom?: string | null;
    entreprise_ambulanciere_no?: string | null;
    pr_accompagnant?: boolean | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS14_entreprise_ambulanciereInput;
};
export type s14_entreprise_ambulanciereUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    entreprise_ambulanciere_nom?: string | null;
    entreprise_ambulanciere_no?: string | null;
    pr_accompagnant?: boolean | null;
};
export type s14_entreprise_ambulanciereUpdateInput = {
    entreprise_ambulanciere_nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entreprise_ambulanciere_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pr_accompagnant?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS14_entreprise_ambulanciereNestedInput;
};
export type s14_entreprise_ambulanciereUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    entreprise_ambulanciere_nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entreprise_ambulanciere_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pr_accompagnant?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s14_entreprise_ambulanciereCreateManyInput = {
    id?: number;
    rapport_id: number;
    entreprise_ambulanciere_nom?: string | null;
    entreprise_ambulanciere_no?: string | null;
    pr_accompagnant?: boolean | null;
};
export type s14_entreprise_ambulanciereUpdateManyMutationInput = {
    entreprise_ambulanciere_nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entreprise_ambulanciere_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pr_accompagnant?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s14_entreprise_ambulanciereUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    entreprise_ambulanciere_nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entreprise_ambulanciere_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pr_accompagnant?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type S14_entreprise_ambulanciereNullableScalarRelationFilter = {
    is?: Prisma.s14_entreprise_ambulanciereWhereInput | null;
    isNot?: Prisma.s14_entreprise_ambulanciereWhereInput | null;
};
export type s14_entreprise_ambulanciereCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    entreprise_ambulanciere_nom?: Prisma.SortOrder;
    entreprise_ambulanciere_no?: Prisma.SortOrder;
    pr_accompagnant?: Prisma.SortOrder;
};
export type s14_entreprise_ambulanciereAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s14_entreprise_ambulanciereMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    entreprise_ambulanciere_nom?: Prisma.SortOrder;
    entreprise_ambulanciere_no?: Prisma.SortOrder;
    pr_accompagnant?: Prisma.SortOrder;
};
export type s14_entreprise_ambulanciereMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    entreprise_ambulanciere_nom?: Prisma.SortOrder;
    entreprise_ambulanciere_no?: Prisma.SortOrder;
    pr_accompagnant?: Prisma.SortOrder;
};
export type s14_entreprise_ambulanciereSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s14_entreprise_ambulanciereCreateWithoutRapportInput, Prisma.s14_entreprise_ambulanciereUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s14_entreprise_ambulanciereCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s14_entreprise_ambulanciereWhereUniqueInput;
};
export type s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s14_entreprise_ambulanciereCreateWithoutRapportInput, Prisma.s14_entreprise_ambulanciereUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s14_entreprise_ambulanciereCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s14_entreprise_ambulanciereWhereUniqueInput;
};
export type s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s14_entreprise_ambulanciereCreateWithoutRapportInput, Prisma.s14_entreprise_ambulanciereUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s14_entreprise_ambulanciereCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s14_entreprise_ambulanciereUpsertWithoutRapportInput;
    disconnect?: Prisma.s14_entreprise_ambulanciereWhereInput | boolean;
    delete?: Prisma.s14_entreprise_ambulanciereWhereInput | boolean;
    connect?: Prisma.s14_entreprise_ambulanciereWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s14_entreprise_ambulanciereUpdateToOneWithWhereWithoutRapportInput, Prisma.s14_entreprise_ambulanciereUpdateWithoutRapportInput>, Prisma.s14_entreprise_ambulanciereUncheckedUpdateWithoutRapportInput>;
};
export type s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s14_entreprise_ambulanciereCreateWithoutRapportInput, Prisma.s14_entreprise_ambulanciereUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s14_entreprise_ambulanciereCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s14_entreprise_ambulanciereUpsertWithoutRapportInput;
    disconnect?: Prisma.s14_entreprise_ambulanciereWhereInput | boolean;
    delete?: Prisma.s14_entreprise_ambulanciereWhereInput | boolean;
    connect?: Prisma.s14_entreprise_ambulanciereWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s14_entreprise_ambulanciereUpdateToOneWithWhereWithoutRapportInput, Prisma.s14_entreprise_ambulanciereUpdateWithoutRapportInput>, Prisma.s14_entreprise_ambulanciereUncheckedUpdateWithoutRapportInput>;
};
export type s14_entreprise_ambulanciereCreateWithoutRapportInput = {
    entreprise_ambulanciere_nom?: string | null;
    entreprise_ambulanciere_no?: string | null;
    pr_accompagnant?: boolean | null;
};
export type s14_entreprise_ambulanciereUncheckedCreateWithoutRapportInput = {
    id?: number;
    entreprise_ambulanciere_nom?: string | null;
    entreprise_ambulanciere_no?: string | null;
    pr_accompagnant?: boolean | null;
};
export type s14_entreprise_ambulanciereCreateOrConnectWithoutRapportInput = {
    where: Prisma.s14_entreprise_ambulanciereWhereUniqueInput;
    create: Prisma.XOR<Prisma.s14_entreprise_ambulanciereCreateWithoutRapportInput, Prisma.s14_entreprise_ambulanciereUncheckedCreateWithoutRapportInput>;
};
export type s14_entreprise_ambulanciereUpsertWithoutRapportInput = {
    update: Prisma.XOR<Prisma.s14_entreprise_ambulanciereUpdateWithoutRapportInput, Prisma.s14_entreprise_ambulanciereUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s14_entreprise_ambulanciereCreateWithoutRapportInput, Prisma.s14_entreprise_ambulanciereUncheckedCreateWithoutRapportInput>;
    where?: Prisma.s14_entreprise_ambulanciereWhereInput;
};
export type s14_entreprise_ambulanciereUpdateToOneWithWhereWithoutRapportInput = {
    where?: Prisma.s14_entreprise_ambulanciereWhereInput;
    data: Prisma.XOR<Prisma.s14_entreprise_ambulanciereUpdateWithoutRapportInput, Prisma.s14_entreprise_ambulanciereUncheckedUpdateWithoutRapportInput>;
};
export type s14_entreprise_ambulanciereUpdateWithoutRapportInput = {
    entreprise_ambulanciere_nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entreprise_ambulanciere_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pr_accompagnant?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s14_entreprise_ambulanciereUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    entreprise_ambulanciere_nom?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entreprise_ambulanciere_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pr_accompagnant?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s14_entreprise_ambulanciereSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    entreprise_ambulanciere_nom?: boolean;
    entreprise_ambulanciere_no?: boolean;
    pr_accompagnant?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s14_entreprise_ambulanciere"]>;
export type s14_entreprise_ambulanciereSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    entreprise_ambulanciere_nom?: boolean;
    entreprise_ambulanciere_no?: boolean;
    pr_accompagnant?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s14_entreprise_ambulanciere"]>;
export type s14_entreprise_ambulanciereSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    entreprise_ambulanciere_nom?: boolean;
    entreprise_ambulanciere_no?: boolean;
    pr_accompagnant?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s14_entreprise_ambulanciere"]>;
export type s14_entreprise_ambulanciereSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    entreprise_ambulanciere_nom?: boolean;
    entreprise_ambulanciere_no?: boolean;
    pr_accompagnant?: boolean;
};
export type s14_entreprise_ambulanciereOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "entreprise_ambulanciere_nom" | "entreprise_ambulanciere_no" | "pr_accompagnant", ExtArgs["result"]["s14_entreprise_ambulanciere"]>;
export type s14_entreprise_ambulanciereInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s14_entreprise_ambulanciereIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s14_entreprise_ambulanciereIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s14_entreprise_ambulancierePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s14_entreprise_ambulanciere";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        entreprise_ambulanciere_nom: string | null;
        entreprise_ambulanciere_no: string | null;
        pr_accompagnant: boolean | null;
    }, ExtArgs["result"]["s14_entreprise_ambulanciere"]>;
    composites: {};
};
export type s14_entreprise_ambulanciereGetPayload<S extends boolean | null | undefined | s14_entreprise_ambulanciereDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s14_entreprise_ambulancierePayload, S>;
export type s14_entreprise_ambulanciereCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s14_entreprise_ambulanciereFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S14_entreprise_ambulanciereCountAggregateInputType | true;
};
export interface s14_entreprise_ambulanciereDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s14_entreprise_ambulanciere'];
        meta: {
            name: 's14_entreprise_ambulanciere';
        };
    };
    /**
     * Find zero or one S14_entreprise_ambulanciere that matches the filter.
     * @param {s14_entreprise_ambulanciereFindUniqueArgs} args - Arguments to find a S14_entreprise_ambulanciere
     * @example
     * // Get one S14_entreprise_ambulanciere
     * const s14_entreprise_ambulanciere = await prisma.s14_entreprise_ambulanciere.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s14_entreprise_ambulanciereFindUniqueArgs>(args: Prisma.SelectSubset<T, s14_entreprise_ambulanciereFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s14_entreprise_ambulanciereClient<runtime.Types.Result.GetResult<Prisma.$s14_entreprise_ambulancierePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S14_entreprise_ambulanciere that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s14_entreprise_ambulanciereFindUniqueOrThrowArgs} args - Arguments to find a S14_entreprise_ambulanciere
     * @example
     * // Get one S14_entreprise_ambulanciere
     * const s14_entreprise_ambulanciere = await prisma.s14_entreprise_ambulanciere.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s14_entreprise_ambulanciereFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s14_entreprise_ambulanciereFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s14_entreprise_ambulanciereClient<runtime.Types.Result.GetResult<Prisma.$s14_entreprise_ambulancierePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S14_entreprise_ambulanciere that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s14_entreprise_ambulanciereFindFirstArgs} args - Arguments to find a S14_entreprise_ambulanciere
     * @example
     * // Get one S14_entreprise_ambulanciere
     * const s14_entreprise_ambulanciere = await prisma.s14_entreprise_ambulanciere.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s14_entreprise_ambulanciereFindFirstArgs>(args?: Prisma.SelectSubset<T, s14_entreprise_ambulanciereFindFirstArgs<ExtArgs>>): Prisma.Prisma__s14_entreprise_ambulanciereClient<runtime.Types.Result.GetResult<Prisma.$s14_entreprise_ambulancierePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S14_entreprise_ambulanciere that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s14_entreprise_ambulanciereFindFirstOrThrowArgs} args - Arguments to find a S14_entreprise_ambulanciere
     * @example
     * // Get one S14_entreprise_ambulanciere
     * const s14_entreprise_ambulanciere = await prisma.s14_entreprise_ambulanciere.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s14_entreprise_ambulanciereFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s14_entreprise_ambulanciereFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s14_entreprise_ambulanciereClient<runtime.Types.Result.GetResult<Prisma.$s14_entreprise_ambulancierePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S14_entreprise_ambulancieres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s14_entreprise_ambulanciereFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S14_entreprise_ambulancieres
     * const s14_entreprise_ambulancieres = await prisma.s14_entreprise_ambulanciere.findMany()
     *
     * // Get first 10 S14_entreprise_ambulancieres
     * const s14_entreprise_ambulancieres = await prisma.s14_entreprise_ambulanciere.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s14_entreprise_ambulanciereWithIdOnly = await prisma.s14_entreprise_ambulanciere.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s14_entreprise_ambulanciereFindManyArgs>(args?: Prisma.SelectSubset<T, s14_entreprise_ambulanciereFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s14_entreprise_ambulancierePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S14_entreprise_ambulanciere.
     * @param {s14_entreprise_ambulanciereCreateArgs} args - Arguments to create a S14_entreprise_ambulanciere.
     * @example
     * // Create one S14_entreprise_ambulanciere
     * const S14_entreprise_ambulanciere = await prisma.s14_entreprise_ambulanciere.create({
     *   data: {
     *     // ... data to create a S14_entreprise_ambulanciere
     *   }
     * })
     *
     */
    create<T extends s14_entreprise_ambulanciereCreateArgs>(args: Prisma.SelectSubset<T, s14_entreprise_ambulanciereCreateArgs<ExtArgs>>): Prisma.Prisma__s14_entreprise_ambulanciereClient<runtime.Types.Result.GetResult<Prisma.$s14_entreprise_ambulancierePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S14_entreprise_ambulancieres.
     * @param {s14_entreprise_ambulanciereCreateManyArgs} args - Arguments to create many S14_entreprise_ambulancieres.
     * @example
     * // Create many S14_entreprise_ambulancieres
     * const s14_entreprise_ambulanciere = await prisma.s14_entreprise_ambulanciere.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s14_entreprise_ambulanciereCreateManyArgs>(args?: Prisma.SelectSubset<T, s14_entreprise_ambulanciereCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S14_entreprise_ambulancieres and returns the data saved in the database.
     * @param {s14_entreprise_ambulanciereCreateManyAndReturnArgs} args - Arguments to create many S14_entreprise_ambulancieres.
     * @example
     * // Create many S14_entreprise_ambulancieres
     * const s14_entreprise_ambulanciere = await prisma.s14_entreprise_ambulanciere.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S14_entreprise_ambulancieres and only return the `id`
     * const s14_entreprise_ambulanciereWithIdOnly = await prisma.s14_entreprise_ambulanciere.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s14_entreprise_ambulanciereCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s14_entreprise_ambulanciereCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s14_entreprise_ambulancierePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S14_entreprise_ambulanciere.
     * @param {s14_entreprise_ambulanciereDeleteArgs} args - Arguments to delete one S14_entreprise_ambulanciere.
     * @example
     * // Delete one S14_entreprise_ambulanciere
     * const S14_entreprise_ambulanciere = await prisma.s14_entreprise_ambulanciere.delete({
     *   where: {
     *     // ... filter to delete one S14_entreprise_ambulanciere
     *   }
     * })
     *
     */
    delete<T extends s14_entreprise_ambulanciereDeleteArgs>(args: Prisma.SelectSubset<T, s14_entreprise_ambulanciereDeleteArgs<ExtArgs>>): Prisma.Prisma__s14_entreprise_ambulanciereClient<runtime.Types.Result.GetResult<Prisma.$s14_entreprise_ambulancierePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S14_entreprise_ambulanciere.
     * @param {s14_entreprise_ambulanciereUpdateArgs} args - Arguments to update one S14_entreprise_ambulanciere.
     * @example
     * // Update one S14_entreprise_ambulanciere
     * const s14_entreprise_ambulanciere = await prisma.s14_entreprise_ambulanciere.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s14_entreprise_ambulanciereUpdateArgs>(args: Prisma.SelectSubset<T, s14_entreprise_ambulanciereUpdateArgs<ExtArgs>>): Prisma.Prisma__s14_entreprise_ambulanciereClient<runtime.Types.Result.GetResult<Prisma.$s14_entreprise_ambulancierePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S14_entreprise_ambulancieres.
     * @param {s14_entreprise_ambulanciereDeleteManyArgs} args - Arguments to filter S14_entreprise_ambulancieres to delete.
     * @example
     * // Delete a few S14_entreprise_ambulancieres
     * const { count } = await prisma.s14_entreprise_ambulanciere.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s14_entreprise_ambulanciereDeleteManyArgs>(args?: Prisma.SelectSubset<T, s14_entreprise_ambulanciereDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S14_entreprise_ambulancieres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s14_entreprise_ambulanciereUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S14_entreprise_ambulancieres
     * const s14_entreprise_ambulanciere = await prisma.s14_entreprise_ambulanciere.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s14_entreprise_ambulanciereUpdateManyArgs>(args: Prisma.SelectSubset<T, s14_entreprise_ambulanciereUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S14_entreprise_ambulancieres and returns the data updated in the database.
     * @param {s14_entreprise_ambulanciereUpdateManyAndReturnArgs} args - Arguments to update many S14_entreprise_ambulancieres.
     * @example
     * // Update many S14_entreprise_ambulancieres
     * const s14_entreprise_ambulanciere = await prisma.s14_entreprise_ambulanciere.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S14_entreprise_ambulancieres and only return the `id`
     * const s14_entreprise_ambulanciereWithIdOnly = await prisma.s14_entreprise_ambulanciere.updateManyAndReturn({
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
    updateManyAndReturn<T extends s14_entreprise_ambulanciereUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s14_entreprise_ambulanciereUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s14_entreprise_ambulancierePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S14_entreprise_ambulanciere.
     * @param {s14_entreprise_ambulanciereUpsertArgs} args - Arguments to update or create a S14_entreprise_ambulanciere.
     * @example
     * // Update or create a S14_entreprise_ambulanciere
     * const s14_entreprise_ambulanciere = await prisma.s14_entreprise_ambulanciere.upsert({
     *   create: {
     *     // ... data to create a S14_entreprise_ambulanciere
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S14_entreprise_ambulanciere we want to update
     *   }
     * })
     */
    upsert<T extends s14_entreprise_ambulanciereUpsertArgs>(args: Prisma.SelectSubset<T, s14_entreprise_ambulanciereUpsertArgs<ExtArgs>>): Prisma.Prisma__s14_entreprise_ambulanciereClient<runtime.Types.Result.GetResult<Prisma.$s14_entreprise_ambulancierePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S14_entreprise_ambulancieres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s14_entreprise_ambulanciereCountArgs} args - Arguments to filter S14_entreprise_ambulancieres to count.
     * @example
     * // Count the number of S14_entreprise_ambulancieres
     * const count = await prisma.s14_entreprise_ambulanciere.count({
     *   where: {
     *     // ... the filter for the S14_entreprise_ambulancieres we want to count
     *   }
     * })
    **/
    count<T extends s14_entreprise_ambulanciereCountArgs>(args?: Prisma.Subset<T, s14_entreprise_ambulanciereCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S14_entreprise_ambulanciereCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S14_entreprise_ambulanciere.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S14_entreprise_ambulanciereAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S14_entreprise_ambulanciereAggregateArgs>(args: Prisma.Subset<T, S14_entreprise_ambulanciereAggregateArgs>): Prisma.PrismaPromise<GetS14_entreprise_ambulanciereAggregateType<T>>;
    /**
     * Group by S14_entreprise_ambulanciere.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s14_entreprise_ambulanciereGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s14_entreprise_ambulanciereGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s14_entreprise_ambulanciereGroupByArgs['orderBy'];
    } : {
        orderBy?: s14_entreprise_ambulanciereGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s14_entreprise_ambulanciereGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS14_entreprise_ambulanciereGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s14_entreprise_ambulanciere model
     */
    readonly fields: s14_entreprise_ambulanciereFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s14_entreprise_ambulanciere.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s14_entreprise_ambulanciereClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the s14_entreprise_ambulanciere model
 */
export interface s14_entreprise_ambulanciereFieldRefs {
    readonly id: Prisma.FieldRef<"s14_entreprise_ambulanciere", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s14_entreprise_ambulanciere", 'Int'>;
    readonly entreprise_ambulanciere_nom: Prisma.FieldRef<"s14_entreprise_ambulanciere", 'String'>;
    readonly entreprise_ambulanciere_no: Prisma.FieldRef<"s14_entreprise_ambulanciere", 'String'>;
    readonly pr_accompagnant: Prisma.FieldRef<"s14_entreprise_ambulanciere", 'Boolean'>;
}
/**
 * s14_entreprise_ambulanciere findUnique
 */
export type s14_entreprise_ambulanciereFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s14_entreprise_ambulanciere
     */
    select?: Prisma.s14_entreprise_ambulanciereSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s14_entreprise_ambulanciere
     */
    omit?: Prisma.s14_entreprise_ambulanciereOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s14_entreprise_ambulanciereInclude<ExtArgs> | null;
    /**
     * Filter, which s14_entreprise_ambulanciere to fetch.
     */
    where: Prisma.s14_entreprise_ambulanciereWhereUniqueInput;
};
/**
 * s14_entreprise_ambulanciere findUniqueOrThrow
 */
export type s14_entreprise_ambulanciereFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s14_entreprise_ambulanciere
     */
    select?: Prisma.s14_entreprise_ambulanciereSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s14_entreprise_ambulanciere
     */
    omit?: Prisma.s14_entreprise_ambulanciereOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s14_entreprise_ambulanciereInclude<ExtArgs> | null;
    /**
     * Filter, which s14_entreprise_ambulanciere to fetch.
     */
    where: Prisma.s14_entreprise_ambulanciereWhereUniqueInput;
};
/**
 * s14_entreprise_ambulanciere findFirst
 */
export type s14_entreprise_ambulanciereFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s14_entreprise_ambulanciere
     */
    select?: Prisma.s14_entreprise_ambulanciereSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s14_entreprise_ambulanciere
     */
    omit?: Prisma.s14_entreprise_ambulanciereOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s14_entreprise_ambulanciereInclude<ExtArgs> | null;
    /**
     * Filter, which s14_entreprise_ambulanciere to fetch.
     */
    where?: Prisma.s14_entreprise_ambulanciereWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s14_entreprise_ambulancieres to fetch.
     */
    orderBy?: Prisma.s14_entreprise_ambulanciereOrderByWithRelationInput | Prisma.s14_entreprise_ambulanciereOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s14_entreprise_ambulancieres.
     */
    cursor?: Prisma.s14_entreprise_ambulanciereWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s14_entreprise_ambulancieres from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s14_entreprise_ambulancieres.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s14_entreprise_ambulancieres.
     */
    distinct?: Prisma.S14_entreprise_ambulanciereScalarFieldEnum | Prisma.S14_entreprise_ambulanciereScalarFieldEnum[];
};
/**
 * s14_entreprise_ambulanciere findFirstOrThrow
 */
export type s14_entreprise_ambulanciereFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s14_entreprise_ambulanciere
     */
    select?: Prisma.s14_entreprise_ambulanciereSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s14_entreprise_ambulanciere
     */
    omit?: Prisma.s14_entreprise_ambulanciereOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s14_entreprise_ambulanciereInclude<ExtArgs> | null;
    /**
     * Filter, which s14_entreprise_ambulanciere to fetch.
     */
    where?: Prisma.s14_entreprise_ambulanciereWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s14_entreprise_ambulancieres to fetch.
     */
    orderBy?: Prisma.s14_entreprise_ambulanciereOrderByWithRelationInput | Prisma.s14_entreprise_ambulanciereOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s14_entreprise_ambulancieres.
     */
    cursor?: Prisma.s14_entreprise_ambulanciereWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s14_entreprise_ambulancieres from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s14_entreprise_ambulancieres.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s14_entreprise_ambulancieres.
     */
    distinct?: Prisma.S14_entreprise_ambulanciereScalarFieldEnum | Prisma.S14_entreprise_ambulanciereScalarFieldEnum[];
};
/**
 * s14_entreprise_ambulanciere findMany
 */
export type s14_entreprise_ambulanciereFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s14_entreprise_ambulanciere
     */
    select?: Prisma.s14_entreprise_ambulanciereSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s14_entreprise_ambulanciere
     */
    omit?: Prisma.s14_entreprise_ambulanciereOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s14_entreprise_ambulanciereInclude<ExtArgs> | null;
    /**
     * Filter, which s14_entreprise_ambulancieres to fetch.
     */
    where?: Prisma.s14_entreprise_ambulanciereWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s14_entreprise_ambulancieres to fetch.
     */
    orderBy?: Prisma.s14_entreprise_ambulanciereOrderByWithRelationInput | Prisma.s14_entreprise_ambulanciereOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s14_entreprise_ambulancieres.
     */
    cursor?: Prisma.s14_entreprise_ambulanciereWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s14_entreprise_ambulancieres from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s14_entreprise_ambulancieres.
     */
    skip?: number;
    distinct?: Prisma.S14_entreprise_ambulanciereScalarFieldEnum | Prisma.S14_entreprise_ambulanciereScalarFieldEnum[];
};
/**
 * s14_entreprise_ambulanciere create
 */
export type s14_entreprise_ambulanciereCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s14_entreprise_ambulanciere
     */
    select?: Prisma.s14_entreprise_ambulanciereSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s14_entreprise_ambulanciere
     */
    omit?: Prisma.s14_entreprise_ambulanciereOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s14_entreprise_ambulanciereInclude<ExtArgs> | null;
    /**
     * The data needed to create a s14_entreprise_ambulanciere.
     */
    data: Prisma.XOR<Prisma.s14_entreprise_ambulanciereCreateInput, Prisma.s14_entreprise_ambulanciereUncheckedCreateInput>;
};
/**
 * s14_entreprise_ambulanciere createMany
 */
export type s14_entreprise_ambulanciereCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s14_entreprise_ambulancieres.
     */
    data: Prisma.s14_entreprise_ambulanciereCreateManyInput | Prisma.s14_entreprise_ambulanciereCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s14_entreprise_ambulanciere createManyAndReturn
 */
export type s14_entreprise_ambulanciereCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s14_entreprise_ambulanciere
     */
    select?: Prisma.s14_entreprise_ambulanciereSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s14_entreprise_ambulanciere
     */
    omit?: Prisma.s14_entreprise_ambulanciereOmit<ExtArgs> | null;
    /**
     * The data used to create many s14_entreprise_ambulancieres.
     */
    data: Prisma.s14_entreprise_ambulanciereCreateManyInput | Prisma.s14_entreprise_ambulanciereCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s14_entreprise_ambulanciereIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s14_entreprise_ambulanciere update
 */
export type s14_entreprise_ambulanciereUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s14_entreprise_ambulanciere
     */
    select?: Prisma.s14_entreprise_ambulanciereSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s14_entreprise_ambulanciere
     */
    omit?: Prisma.s14_entreprise_ambulanciereOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s14_entreprise_ambulanciereInclude<ExtArgs> | null;
    /**
     * The data needed to update a s14_entreprise_ambulanciere.
     */
    data: Prisma.XOR<Prisma.s14_entreprise_ambulanciereUpdateInput, Prisma.s14_entreprise_ambulanciereUncheckedUpdateInput>;
    /**
     * Choose, which s14_entreprise_ambulanciere to update.
     */
    where: Prisma.s14_entreprise_ambulanciereWhereUniqueInput;
};
/**
 * s14_entreprise_ambulanciere updateMany
 */
export type s14_entreprise_ambulanciereUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s14_entreprise_ambulancieres.
     */
    data: Prisma.XOR<Prisma.s14_entreprise_ambulanciereUpdateManyMutationInput, Prisma.s14_entreprise_ambulanciereUncheckedUpdateManyInput>;
    /**
     * Filter which s14_entreprise_ambulancieres to update
     */
    where?: Prisma.s14_entreprise_ambulanciereWhereInput;
    /**
     * Limit how many s14_entreprise_ambulancieres to update.
     */
    limit?: number;
};
/**
 * s14_entreprise_ambulanciere updateManyAndReturn
 */
export type s14_entreprise_ambulanciereUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s14_entreprise_ambulanciere
     */
    select?: Prisma.s14_entreprise_ambulanciereSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s14_entreprise_ambulanciere
     */
    omit?: Prisma.s14_entreprise_ambulanciereOmit<ExtArgs> | null;
    /**
     * The data used to update s14_entreprise_ambulancieres.
     */
    data: Prisma.XOR<Prisma.s14_entreprise_ambulanciereUpdateManyMutationInput, Prisma.s14_entreprise_ambulanciereUncheckedUpdateManyInput>;
    /**
     * Filter which s14_entreprise_ambulancieres to update
     */
    where?: Prisma.s14_entreprise_ambulanciereWhereInput;
    /**
     * Limit how many s14_entreprise_ambulancieres to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s14_entreprise_ambulanciereIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s14_entreprise_ambulanciere upsert
 */
export type s14_entreprise_ambulanciereUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s14_entreprise_ambulanciere
     */
    select?: Prisma.s14_entreprise_ambulanciereSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s14_entreprise_ambulanciere
     */
    omit?: Prisma.s14_entreprise_ambulanciereOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s14_entreprise_ambulanciereInclude<ExtArgs> | null;
    /**
     * The filter to search for the s14_entreprise_ambulanciere to update in case it exists.
     */
    where: Prisma.s14_entreprise_ambulanciereWhereUniqueInput;
    /**
     * In case the s14_entreprise_ambulanciere found by the `where` argument doesn't exist, create a new s14_entreprise_ambulanciere with this data.
     */
    create: Prisma.XOR<Prisma.s14_entreprise_ambulanciereCreateInput, Prisma.s14_entreprise_ambulanciereUncheckedCreateInput>;
    /**
     * In case the s14_entreprise_ambulanciere was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s14_entreprise_ambulanciereUpdateInput, Prisma.s14_entreprise_ambulanciereUncheckedUpdateInput>;
};
/**
 * s14_entreprise_ambulanciere delete
 */
export type s14_entreprise_ambulanciereDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s14_entreprise_ambulanciere
     */
    select?: Prisma.s14_entreprise_ambulanciereSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s14_entreprise_ambulanciere
     */
    omit?: Prisma.s14_entreprise_ambulanciereOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s14_entreprise_ambulanciereInclude<ExtArgs> | null;
    /**
     * Filter which s14_entreprise_ambulanciere to delete.
     */
    where: Prisma.s14_entreprise_ambulanciereWhereUniqueInput;
};
/**
 * s14_entreprise_ambulanciere deleteMany
 */
export type s14_entreprise_ambulanciereDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s14_entreprise_ambulancieres to delete
     */
    where?: Prisma.s14_entreprise_ambulanciereWhereInput;
    /**
     * Limit how many s14_entreprise_ambulancieres to delete.
     */
    limit?: number;
};
/**
 * s14_entreprise_ambulanciere without action
 */
export type s14_entreprise_ambulanciereDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s14_entreprise_ambulanciere
     */
    select?: Prisma.s14_entreprise_ambulanciereSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s14_entreprise_ambulanciere
     */
    omit?: Prisma.s14_entreprise_ambulanciereOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s14_entreprise_ambulanciereInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s14_entreprise_ambulanciere.d.ts.map