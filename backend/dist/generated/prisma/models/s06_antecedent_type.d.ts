import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s06_antecedent_type
 *
 */
export type s06_antecedent_typeModel = runtime.Types.Result.DefaultSelection<Prisma.$s06_antecedent_typePayload>;
export type AggregateS06_antecedent_type = {
    _count: S06_antecedent_typeCountAggregateOutputType | null;
    _avg: S06_antecedent_typeAvgAggregateOutputType | null;
    _sum: S06_antecedent_typeSumAggregateOutputType | null;
    _min: S06_antecedent_typeMinAggregateOutputType | null;
    _max: S06_antecedent_typeMaxAggregateOutputType | null;
};
export type S06_antecedent_typeAvgAggregateOutputType = {
    id: number | null;
};
export type S06_antecedent_typeSumAggregateOutputType = {
    id: number | null;
};
export type S06_antecedent_typeMinAggregateOutputType = {
    id: number | null;
    code: string | null;
    libelle: string | null;
    actif: boolean | null;
};
export type S06_antecedent_typeMaxAggregateOutputType = {
    id: number | null;
    code: string | null;
    libelle: string | null;
    actif: boolean | null;
};
export type S06_antecedent_typeCountAggregateOutputType = {
    id: number;
    code: number;
    libelle: number;
    actif: number;
    _all: number;
};
export type S06_antecedent_typeAvgAggregateInputType = {
    id?: true;
};
export type S06_antecedent_typeSumAggregateInputType = {
    id?: true;
};
export type S06_antecedent_typeMinAggregateInputType = {
    id?: true;
    code?: true;
    libelle?: true;
    actif?: true;
};
export type S06_antecedent_typeMaxAggregateInputType = {
    id?: true;
    code?: true;
    libelle?: true;
    actif?: true;
};
export type S06_antecedent_typeCountAggregateInputType = {
    id?: true;
    code?: true;
    libelle?: true;
    actif?: true;
    _all?: true;
};
export type S06_antecedent_typeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s06_antecedent_type to aggregate.
     */
    where?: Prisma.s06_antecedent_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s06_antecedent_types to fetch.
     */
    orderBy?: Prisma.s06_antecedent_typeOrderByWithRelationInput | Prisma.s06_antecedent_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s06_antecedent_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s06_antecedent_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s06_antecedent_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s06_antecedent_types
    **/
    _count?: true | S06_antecedent_typeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S06_antecedent_typeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S06_antecedent_typeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S06_antecedent_typeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S06_antecedent_typeMaxAggregateInputType;
};
export type GetS06_antecedent_typeAggregateType<T extends S06_antecedent_typeAggregateArgs> = {
    [P in keyof T & keyof AggregateS06_antecedent_type]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS06_antecedent_type[P]> : Prisma.GetScalarType<T[P], AggregateS06_antecedent_type[P]>;
};
export type s06_antecedent_typeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s06_antecedent_typeWhereInput;
    orderBy?: Prisma.s06_antecedent_typeOrderByWithAggregationInput | Prisma.s06_antecedent_typeOrderByWithAggregationInput[];
    by: Prisma.S06_antecedent_typeScalarFieldEnum[] | Prisma.S06_antecedent_typeScalarFieldEnum;
    having?: Prisma.s06_antecedent_typeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S06_antecedent_typeCountAggregateInputType | true;
    _avg?: S06_antecedent_typeAvgAggregateInputType;
    _sum?: S06_antecedent_typeSumAggregateInputType;
    _min?: S06_antecedent_typeMinAggregateInputType;
    _max?: S06_antecedent_typeMaxAggregateInputType;
};
export type S06_antecedent_typeGroupByOutputType = {
    id: number;
    code: string;
    libelle: string;
    actif: boolean | null;
    _count: S06_antecedent_typeCountAggregateOutputType | null;
    _avg: S06_antecedent_typeAvgAggregateOutputType | null;
    _sum: S06_antecedent_typeSumAggregateOutputType | null;
    _min: S06_antecedent_typeMinAggregateOutputType | null;
    _max: S06_antecedent_typeMaxAggregateOutputType | null;
};
type GetS06_antecedent_typeGroupByPayload<T extends s06_antecedent_typeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S06_antecedent_typeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S06_antecedent_typeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S06_antecedent_typeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S06_antecedent_typeGroupByOutputType[P]>;
}>>;
export type s06_antecedent_typeWhereInput = {
    AND?: Prisma.s06_antecedent_typeWhereInput | Prisma.s06_antecedent_typeWhereInput[];
    OR?: Prisma.s06_antecedent_typeWhereInput[];
    NOT?: Prisma.s06_antecedent_typeWhereInput | Prisma.s06_antecedent_typeWhereInput[];
    id?: Prisma.IntFilter<"s06_antecedent_type"> | number;
    code?: Prisma.StringFilter<"s06_antecedent_type"> | string;
    libelle?: Prisma.StringFilter<"s06_antecedent_type"> | string;
    actif?: Prisma.BoolNullableFilter<"s06_antecedent_type"> | boolean | null;
    rapports?: Prisma.S06_rapport_antecedentListRelationFilter;
};
export type s06_antecedent_typeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapports?: Prisma.s06_rapport_antecedentOrderByRelationAggregateInput;
};
export type s06_antecedent_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.s06_antecedent_typeWhereInput | Prisma.s06_antecedent_typeWhereInput[];
    OR?: Prisma.s06_antecedent_typeWhereInput[];
    NOT?: Prisma.s06_antecedent_typeWhereInput | Prisma.s06_antecedent_typeWhereInput[];
    code?: Prisma.StringFilter<"s06_antecedent_type"> | string;
    libelle?: Prisma.StringFilter<"s06_antecedent_type"> | string;
    actif?: Prisma.BoolNullableFilter<"s06_antecedent_type"> | boolean | null;
    rapports?: Prisma.S06_rapport_antecedentListRelationFilter;
}, "id">;
export type s06_antecedent_typeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s06_antecedent_typeCountOrderByAggregateInput;
    _avg?: Prisma.s06_antecedent_typeAvgOrderByAggregateInput;
    _max?: Prisma.s06_antecedent_typeMaxOrderByAggregateInput;
    _min?: Prisma.s06_antecedent_typeMinOrderByAggregateInput;
    _sum?: Prisma.s06_antecedent_typeSumOrderByAggregateInput;
};
export type s06_antecedent_typeScalarWhereWithAggregatesInput = {
    AND?: Prisma.s06_antecedent_typeScalarWhereWithAggregatesInput | Prisma.s06_antecedent_typeScalarWhereWithAggregatesInput[];
    OR?: Prisma.s06_antecedent_typeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s06_antecedent_typeScalarWhereWithAggregatesInput | Prisma.s06_antecedent_typeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s06_antecedent_type"> | number;
    code?: Prisma.StringWithAggregatesFilter<"s06_antecedent_type"> | string;
    libelle?: Prisma.StringWithAggregatesFilter<"s06_antecedent_type"> | string;
    actif?: Prisma.BoolNullableWithAggregatesFilter<"s06_antecedent_type"> | boolean | null;
};
export type s06_antecedent_typeCreateInput = {
    code: string;
    libelle: string;
    actif?: boolean | null;
    rapports?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutAntecedentInput;
};
export type s06_antecedent_typeUncheckedCreateInput = {
    id?: number;
    code: string;
    libelle: string;
    actif?: boolean | null;
    rapports?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutAntecedentInput;
};
export type s06_antecedent_typeUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    rapports?: Prisma.s06_rapport_antecedentUpdateManyWithoutAntecedentNestedInput;
};
export type s06_antecedent_typeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    rapports?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutAntecedentNestedInput;
};
export type s06_antecedent_typeCreateManyInput = {
    id?: number;
    code: string;
    libelle: string;
    actif?: boolean | null;
};
export type s06_antecedent_typeUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s06_antecedent_typeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s06_antecedent_typeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type s06_antecedent_typeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type s06_antecedent_typeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type s06_antecedent_typeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type s06_antecedent_typeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type S06_antecedent_typeScalarRelationFilter = {
    is?: Prisma.s06_antecedent_typeWhereInput;
    isNot?: Prisma.s06_antecedent_typeWhereInput;
};
export type s06_antecedent_typeCreateNestedOneWithoutRapportsInput = {
    create?: Prisma.XOR<Prisma.s06_antecedent_typeCreateWithoutRapportsInput, Prisma.s06_antecedent_typeUncheckedCreateWithoutRapportsInput>;
    connectOrCreate?: Prisma.s06_antecedent_typeCreateOrConnectWithoutRapportsInput;
    connect?: Prisma.s06_antecedent_typeWhereUniqueInput;
};
export type s06_antecedent_typeUpdateOneRequiredWithoutRapportsNestedInput = {
    create?: Prisma.XOR<Prisma.s06_antecedent_typeCreateWithoutRapportsInput, Prisma.s06_antecedent_typeUncheckedCreateWithoutRapportsInput>;
    connectOrCreate?: Prisma.s06_antecedent_typeCreateOrConnectWithoutRapportsInput;
    upsert?: Prisma.s06_antecedent_typeUpsertWithoutRapportsInput;
    connect?: Prisma.s06_antecedent_typeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s06_antecedent_typeUpdateToOneWithWhereWithoutRapportsInput, Prisma.s06_antecedent_typeUpdateWithoutRapportsInput>, Prisma.s06_antecedent_typeUncheckedUpdateWithoutRapportsInput>;
};
export type s06_antecedent_typeCreateWithoutRapportsInput = {
    code: string;
    libelle: string;
    actif?: boolean | null;
};
export type s06_antecedent_typeUncheckedCreateWithoutRapportsInput = {
    id?: number;
    code: string;
    libelle: string;
    actif?: boolean | null;
};
export type s06_antecedent_typeCreateOrConnectWithoutRapportsInput = {
    where: Prisma.s06_antecedent_typeWhereUniqueInput;
    create: Prisma.XOR<Prisma.s06_antecedent_typeCreateWithoutRapportsInput, Prisma.s06_antecedent_typeUncheckedCreateWithoutRapportsInput>;
};
export type s06_antecedent_typeUpsertWithoutRapportsInput = {
    update: Prisma.XOR<Prisma.s06_antecedent_typeUpdateWithoutRapportsInput, Prisma.s06_antecedent_typeUncheckedUpdateWithoutRapportsInput>;
    create: Prisma.XOR<Prisma.s06_antecedent_typeCreateWithoutRapportsInput, Prisma.s06_antecedent_typeUncheckedCreateWithoutRapportsInput>;
    where?: Prisma.s06_antecedent_typeWhereInput;
};
export type s06_antecedent_typeUpdateToOneWithWhereWithoutRapportsInput = {
    where?: Prisma.s06_antecedent_typeWhereInput;
    data: Prisma.XOR<Prisma.s06_antecedent_typeUpdateWithoutRapportsInput, Prisma.s06_antecedent_typeUncheckedUpdateWithoutRapportsInput>;
};
export type s06_antecedent_typeUpdateWithoutRapportsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s06_antecedent_typeUncheckedUpdateWithoutRapportsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
/**
 * Count Type S06_antecedent_typeCountOutputType
 */
export type S06_antecedent_typeCountOutputType = {
    rapports: number;
};
export type S06_antecedent_typeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapports?: boolean | S06_antecedent_typeCountOutputTypeCountRapportsArgs;
};
/**
 * S06_antecedent_typeCountOutputType without action
 */
export type S06_antecedent_typeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the S06_antecedent_typeCountOutputType
     */
    select?: Prisma.S06_antecedent_typeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * S06_antecedent_typeCountOutputType without action
 */
export type S06_antecedent_typeCountOutputTypeCountRapportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s06_rapport_antecedentWhereInput;
};
export type s06_antecedent_typeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
    rapports?: boolean | Prisma.s06_antecedent_type$rapportsArgs<ExtArgs>;
    _count?: boolean | Prisma.S06_antecedent_typeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s06_antecedent_type"]>;
export type s06_antecedent_typeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
}, ExtArgs["result"]["s06_antecedent_type"]>;
export type s06_antecedent_typeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
}, ExtArgs["result"]["s06_antecedent_type"]>;
export type s06_antecedent_typeSelectScalar = {
    id?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
};
export type s06_antecedent_typeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "libelle" | "actif", ExtArgs["result"]["s06_antecedent_type"]>;
export type s06_antecedent_typeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapports?: boolean | Prisma.s06_antecedent_type$rapportsArgs<ExtArgs>;
    _count?: boolean | Prisma.S06_antecedent_typeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type s06_antecedent_typeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type s06_antecedent_typeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $s06_antecedent_typePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s06_antecedent_type";
    objects: {
        rapports: Prisma.$s06_rapport_antecedentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        code: string;
        libelle: string;
        actif: boolean | null;
    }, ExtArgs["result"]["s06_antecedent_type"]>;
    composites: {};
};
export type s06_antecedent_typeGetPayload<S extends boolean | null | undefined | s06_antecedent_typeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s06_antecedent_typePayload, S>;
export type s06_antecedent_typeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s06_antecedent_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S06_antecedent_typeCountAggregateInputType | true;
};
export interface s06_antecedent_typeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s06_antecedent_type'];
        meta: {
            name: 's06_antecedent_type';
        };
    };
    /**
     * Find zero or one S06_antecedent_type that matches the filter.
     * @param {s06_antecedent_typeFindUniqueArgs} args - Arguments to find a S06_antecedent_type
     * @example
     * // Get one S06_antecedent_type
     * const s06_antecedent_type = await prisma.s06_antecedent_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s06_antecedent_typeFindUniqueArgs>(args: Prisma.SelectSubset<T, s06_antecedent_typeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s06_antecedent_typeClient<runtime.Types.Result.GetResult<Prisma.$s06_antecedent_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S06_antecedent_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s06_antecedent_typeFindUniqueOrThrowArgs} args - Arguments to find a S06_antecedent_type
     * @example
     * // Get one S06_antecedent_type
     * const s06_antecedent_type = await prisma.s06_antecedent_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s06_antecedent_typeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s06_antecedent_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s06_antecedent_typeClient<runtime.Types.Result.GetResult<Prisma.$s06_antecedent_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S06_antecedent_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s06_antecedent_typeFindFirstArgs} args - Arguments to find a S06_antecedent_type
     * @example
     * // Get one S06_antecedent_type
     * const s06_antecedent_type = await prisma.s06_antecedent_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s06_antecedent_typeFindFirstArgs>(args?: Prisma.SelectSubset<T, s06_antecedent_typeFindFirstArgs<ExtArgs>>): Prisma.Prisma__s06_antecedent_typeClient<runtime.Types.Result.GetResult<Prisma.$s06_antecedent_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S06_antecedent_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s06_antecedent_typeFindFirstOrThrowArgs} args - Arguments to find a S06_antecedent_type
     * @example
     * // Get one S06_antecedent_type
     * const s06_antecedent_type = await prisma.s06_antecedent_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s06_antecedent_typeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s06_antecedent_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s06_antecedent_typeClient<runtime.Types.Result.GetResult<Prisma.$s06_antecedent_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S06_antecedent_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s06_antecedent_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S06_antecedent_types
     * const s06_antecedent_types = await prisma.s06_antecedent_type.findMany()
     *
     * // Get first 10 S06_antecedent_types
     * const s06_antecedent_types = await prisma.s06_antecedent_type.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s06_antecedent_typeWithIdOnly = await prisma.s06_antecedent_type.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s06_antecedent_typeFindManyArgs>(args?: Prisma.SelectSubset<T, s06_antecedent_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s06_antecedent_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S06_antecedent_type.
     * @param {s06_antecedent_typeCreateArgs} args - Arguments to create a S06_antecedent_type.
     * @example
     * // Create one S06_antecedent_type
     * const S06_antecedent_type = await prisma.s06_antecedent_type.create({
     *   data: {
     *     // ... data to create a S06_antecedent_type
     *   }
     * })
     *
     */
    create<T extends s06_antecedent_typeCreateArgs>(args: Prisma.SelectSubset<T, s06_antecedent_typeCreateArgs<ExtArgs>>): Prisma.Prisma__s06_antecedent_typeClient<runtime.Types.Result.GetResult<Prisma.$s06_antecedent_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S06_antecedent_types.
     * @param {s06_antecedent_typeCreateManyArgs} args - Arguments to create many S06_antecedent_types.
     * @example
     * // Create many S06_antecedent_types
     * const s06_antecedent_type = await prisma.s06_antecedent_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s06_antecedent_typeCreateManyArgs>(args?: Prisma.SelectSubset<T, s06_antecedent_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S06_antecedent_types and returns the data saved in the database.
     * @param {s06_antecedent_typeCreateManyAndReturnArgs} args - Arguments to create many S06_antecedent_types.
     * @example
     * // Create many S06_antecedent_types
     * const s06_antecedent_type = await prisma.s06_antecedent_type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S06_antecedent_types and only return the `id`
     * const s06_antecedent_typeWithIdOnly = await prisma.s06_antecedent_type.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s06_antecedent_typeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s06_antecedent_typeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s06_antecedent_typePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S06_antecedent_type.
     * @param {s06_antecedent_typeDeleteArgs} args - Arguments to delete one S06_antecedent_type.
     * @example
     * // Delete one S06_antecedent_type
     * const S06_antecedent_type = await prisma.s06_antecedent_type.delete({
     *   where: {
     *     // ... filter to delete one S06_antecedent_type
     *   }
     * })
     *
     */
    delete<T extends s06_antecedent_typeDeleteArgs>(args: Prisma.SelectSubset<T, s06_antecedent_typeDeleteArgs<ExtArgs>>): Prisma.Prisma__s06_antecedent_typeClient<runtime.Types.Result.GetResult<Prisma.$s06_antecedent_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S06_antecedent_type.
     * @param {s06_antecedent_typeUpdateArgs} args - Arguments to update one S06_antecedent_type.
     * @example
     * // Update one S06_antecedent_type
     * const s06_antecedent_type = await prisma.s06_antecedent_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s06_antecedent_typeUpdateArgs>(args: Prisma.SelectSubset<T, s06_antecedent_typeUpdateArgs<ExtArgs>>): Prisma.Prisma__s06_antecedent_typeClient<runtime.Types.Result.GetResult<Prisma.$s06_antecedent_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S06_antecedent_types.
     * @param {s06_antecedent_typeDeleteManyArgs} args - Arguments to filter S06_antecedent_types to delete.
     * @example
     * // Delete a few S06_antecedent_types
     * const { count } = await prisma.s06_antecedent_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s06_antecedent_typeDeleteManyArgs>(args?: Prisma.SelectSubset<T, s06_antecedent_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S06_antecedent_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s06_antecedent_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S06_antecedent_types
     * const s06_antecedent_type = await prisma.s06_antecedent_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s06_antecedent_typeUpdateManyArgs>(args: Prisma.SelectSubset<T, s06_antecedent_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S06_antecedent_types and returns the data updated in the database.
     * @param {s06_antecedent_typeUpdateManyAndReturnArgs} args - Arguments to update many S06_antecedent_types.
     * @example
     * // Update many S06_antecedent_types
     * const s06_antecedent_type = await prisma.s06_antecedent_type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S06_antecedent_types and only return the `id`
     * const s06_antecedent_typeWithIdOnly = await prisma.s06_antecedent_type.updateManyAndReturn({
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
    updateManyAndReturn<T extends s06_antecedent_typeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s06_antecedent_typeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s06_antecedent_typePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S06_antecedent_type.
     * @param {s06_antecedent_typeUpsertArgs} args - Arguments to update or create a S06_antecedent_type.
     * @example
     * // Update or create a S06_antecedent_type
     * const s06_antecedent_type = await prisma.s06_antecedent_type.upsert({
     *   create: {
     *     // ... data to create a S06_antecedent_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S06_antecedent_type we want to update
     *   }
     * })
     */
    upsert<T extends s06_antecedent_typeUpsertArgs>(args: Prisma.SelectSubset<T, s06_antecedent_typeUpsertArgs<ExtArgs>>): Prisma.Prisma__s06_antecedent_typeClient<runtime.Types.Result.GetResult<Prisma.$s06_antecedent_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S06_antecedent_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s06_antecedent_typeCountArgs} args - Arguments to filter S06_antecedent_types to count.
     * @example
     * // Count the number of S06_antecedent_types
     * const count = await prisma.s06_antecedent_type.count({
     *   where: {
     *     // ... the filter for the S06_antecedent_types we want to count
     *   }
     * })
    **/
    count<T extends s06_antecedent_typeCountArgs>(args?: Prisma.Subset<T, s06_antecedent_typeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S06_antecedent_typeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S06_antecedent_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S06_antecedent_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S06_antecedent_typeAggregateArgs>(args: Prisma.Subset<T, S06_antecedent_typeAggregateArgs>): Prisma.PrismaPromise<GetS06_antecedent_typeAggregateType<T>>;
    /**
     * Group by S06_antecedent_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s06_antecedent_typeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s06_antecedent_typeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s06_antecedent_typeGroupByArgs['orderBy'];
    } : {
        orderBy?: s06_antecedent_typeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s06_antecedent_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS06_antecedent_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s06_antecedent_type model
     */
    readonly fields: s06_antecedent_typeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s06_antecedent_type.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s06_antecedent_typeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rapports<T extends Prisma.s06_antecedent_type$rapportsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.s06_antecedent_type$rapportsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s06_rapport_antecedentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the s06_antecedent_type model
 */
export interface s06_antecedent_typeFieldRefs {
    readonly id: Prisma.FieldRef<"s06_antecedent_type", 'Int'>;
    readonly code: Prisma.FieldRef<"s06_antecedent_type", 'String'>;
    readonly libelle: Prisma.FieldRef<"s06_antecedent_type", 'String'>;
    readonly actif: Prisma.FieldRef<"s06_antecedent_type", 'Boolean'>;
}
/**
 * s06_antecedent_type findUnique
 */
export type s06_antecedent_typeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_antecedent_type
     */
    select?: Prisma.s06_antecedent_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_antecedent_type
     */
    omit?: Prisma.s06_antecedent_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_antecedent_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s06_antecedent_type to fetch.
     */
    where: Prisma.s06_antecedent_typeWhereUniqueInput;
};
/**
 * s06_antecedent_type findUniqueOrThrow
 */
export type s06_antecedent_typeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_antecedent_type
     */
    select?: Prisma.s06_antecedent_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_antecedent_type
     */
    omit?: Prisma.s06_antecedent_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_antecedent_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s06_antecedent_type to fetch.
     */
    where: Prisma.s06_antecedent_typeWhereUniqueInput;
};
/**
 * s06_antecedent_type findFirst
 */
export type s06_antecedent_typeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_antecedent_type
     */
    select?: Prisma.s06_antecedent_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_antecedent_type
     */
    omit?: Prisma.s06_antecedent_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_antecedent_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s06_antecedent_type to fetch.
     */
    where?: Prisma.s06_antecedent_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s06_antecedent_types to fetch.
     */
    orderBy?: Prisma.s06_antecedent_typeOrderByWithRelationInput | Prisma.s06_antecedent_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s06_antecedent_types.
     */
    cursor?: Prisma.s06_antecedent_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s06_antecedent_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s06_antecedent_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s06_antecedent_types.
     */
    distinct?: Prisma.S06_antecedent_typeScalarFieldEnum | Prisma.S06_antecedent_typeScalarFieldEnum[];
};
/**
 * s06_antecedent_type findFirstOrThrow
 */
export type s06_antecedent_typeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_antecedent_type
     */
    select?: Prisma.s06_antecedent_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_antecedent_type
     */
    omit?: Prisma.s06_antecedent_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_antecedent_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s06_antecedent_type to fetch.
     */
    where?: Prisma.s06_antecedent_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s06_antecedent_types to fetch.
     */
    orderBy?: Prisma.s06_antecedent_typeOrderByWithRelationInput | Prisma.s06_antecedent_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s06_antecedent_types.
     */
    cursor?: Prisma.s06_antecedent_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s06_antecedent_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s06_antecedent_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s06_antecedent_types.
     */
    distinct?: Prisma.S06_antecedent_typeScalarFieldEnum | Prisma.S06_antecedent_typeScalarFieldEnum[];
};
/**
 * s06_antecedent_type findMany
 */
export type s06_antecedent_typeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_antecedent_type
     */
    select?: Prisma.s06_antecedent_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_antecedent_type
     */
    omit?: Prisma.s06_antecedent_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_antecedent_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s06_antecedent_types to fetch.
     */
    where?: Prisma.s06_antecedent_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s06_antecedent_types to fetch.
     */
    orderBy?: Prisma.s06_antecedent_typeOrderByWithRelationInput | Prisma.s06_antecedent_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s06_antecedent_types.
     */
    cursor?: Prisma.s06_antecedent_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s06_antecedent_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s06_antecedent_types.
     */
    skip?: number;
    distinct?: Prisma.S06_antecedent_typeScalarFieldEnum | Prisma.S06_antecedent_typeScalarFieldEnum[];
};
/**
 * s06_antecedent_type create
 */
export type s06_antecedent_typeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_antecedent_type
     */
    select?: Prisma.s06_antecedent_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_antecedent_type
     */
    omit?: Prisma.s06_antecedent_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_antecedent_typeInclude<ExtArgs> | null;
    /**
     * The data needed to create a s06_antecedent_type.
     */
    data: Prisma.XOR<Prisma.s06_antecedent_typeCreateInput, Prisma.s06_antecedent_typeUncheckedCreateInput>;
};
/**
 * s06_antecedent_type createMany
 */
export type s06_antecedent_typeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s06_antecedent_types.
     */
    data: Prisma.s06_antecedent_typeCreateManyInput | Prisma.s06_antecedent_typeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s06_antecedent_type createManyAndReturn
 */
export type s06_antecedent_typeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_antecedent_type
     */
    select?: Prisma.s06_antecedent_typeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_antecedent_type
     */
    omit?: Prisma.s06_antecedent_typeOmit<ExtArgs> | null;
    /**
     * The data used to create many s06_antecedent_types.
     */
    data: Prisma.s06_antecedent_typeCreateManyInput | Prisma.s06_antecedent_typeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s06_antecedent_type update
 */
export type s06_antecedent_typeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_antecedent_type
     */
    select?: Prisma.s06_antecedent_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_antecedent_type
     */
    omit?: Prisma.s06_antecedent_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_antecedent_typeInclude<ExtArgs> | null;
    /**
     * The data needed to update a s06_antecedent_type.
     */
    data: Prisma.XOR<Prisma.s06_antecedent_typeUpdateInput, Prisma.s06_antecedent_typeUncheckedUpdateInput>;
    /**
     * Choose, which s06_antecedent_type to update.
     */
    where: Prisma.s06_antecedent_typeWhereUniqueInput;
};
/**
 * s06_antecedent_type updateMany
 */
export type s06_antecedent_typeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s06_antecedent_types.
     */
    data: Prisma.XOR<Prisma.s06_antecedent_typeUpdateManyMutationInput, Prisma.s06_antecedent_typeUncheckedUpdateManyInput>;
    /**
     * Filter which s06_antecedent_types to update
     */
    where?: Prisma.s06_antecedent_typeWhereInput;
    /**
     * Limit how many s06_antecedent_types to update.
     */
    limit?: number;
};
/**
 * s06_antecedent_type updateManyAndReturn
 */
export type s06_antecedent_typeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_antecedent_type
     */
    select?: Prisma.s06_antecedent_typeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_antecedent_type
     */
    omit?: Prisma.s06_antecedent_typeOmit<ExtArgs> | null;
    /**
     * The data used to update s06_antecedent_types.
     */
    data: Prisma.XOR<Prisma.s06_antecedent_typeUpdateManyMutationInput, Prisma.s06_antecedent_typeUncheckedUpdateManyInput>;
    /**
     * Filter which s06_antecedent_types to update
     */
    where?: Prisma.s06_antecedent_typeWhereInput;
    /**
     * Limit how many s06_antecedent_types to update.
     */
    limit?: number;
};
/**
 * s06_antecedent_type upsert
 */
export type s06_antecedent_typeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_antecedent_type
     */
    select?: Prisma.s06_antecedent_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_antecedent_type
     */
    omit?: Prisma.s06_antecedent_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_antecedent_typeInclude<ExtArgs> | null;
    /**
     * The filter to search for the s06_antecedent_type to update in case it exists.
     */
    where: Prisma.s06_antecedent_typeWhereUniqueInput;
    /**
     * In case the s06_antecedent_type found by the `where` argument doesn't exist, create a new s06_antecedent_type with this data.
     */
    create: Prisma.XOR<Prisma.s06_antecedent_typeCreateInput, Prisma.s06_antecedent_typeUncheckedCreateInput>;
    /**
     * In case the s06_antecedent_type was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s06_antecedent_typeUpdateInput, Prisma.s06_antecedent_typeUncheckedUpdateInput>;
};
/**
 * s06_antecedent_type delete
 */
export type s06_antecedent_typeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_antecedent_type
     */
    select?: Prisma.s06_antecedent_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_antecedent_type
     */
    omit?: Prisma.s06_antecedent_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_antecedent_typeInclude<ExtArgs> | null;
    /**
     * Filter which s06_antecedent_type to delete.
     */
    where: Prisma.s06_antecedent_typeWhereUniqueInput;
};
/**
 * s06_antecedent_type deleteMany
 */
export type s06_antecedent_typeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s06_antecedent_types to delete
     */
    where?: Prisma.s06_antecedent_typeWhereInput;
    /**
     * Limit how many s06_antecedent_types to delete.
     */
    limit?: number;
};
/**
 * s06_antecedent_type.rapports
 */
export type s06_antecedent_type$rapportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_rapport_antecedent
     */
    select?: Prisma.s06_rapport_antecedentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_rapport_antecedent
     */
    omit?: Prisma.s06_rapport_antecedentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_rapport_antecedentInclude<ExtArgs> | null;
    where?: Prisma.s06_rapport_antecedentWhereInput;
    orderBy?: Prisma.s06_rapport_antecedentOrderByWithRelationInput | Prisma.s06_rapport_antecedentOrderByWithRelationInput[];
    cursor?: Prisma.s06_rapport_antecedentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.S06_rapport_antecedentScalarFieldEnum | Prisma.S06_rapport_antecedentScalarFieldEnum[];
};
/**
 * s06_antecedent_type without action
 */
export type s06_antecedent_typeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_antecedent_type
     */
    select?: Prisma.s06_antecedent_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_antecedent_type
     */
    omit?: Prisma.s06_antecedent_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_antecedent_typeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s06_antecedent_type.d.ts.map