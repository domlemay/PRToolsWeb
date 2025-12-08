import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s05_nature_cas_type
 *
 */
export type s05_nature_cas_typeModel = runtime.Types.Result.DefaultSelection<Prisma.$s05_nature_cas_typePayload>;
export type AggregateS05_nature_cas_type = {
    _count: S05_nature_cas_typeCountAggregateOutputType | null;
    _avg: S05_nature_cas_typeAvgAggregateOutputType | null;
    _sum: S05_nature_cas_typeSumAggregateOutputType | null;
    _min: S05_nature_cas_typeMinAggregateOutputType | null;
    _max: S05_nature_cas_typeMaxAggregateOutputType | null;
};
export type S05_nature_cas_typeAvgAggregateOutputType = {
    id: number | null;
};
export type S05_nature_cas_typeSumAggregateOutputType = {
    id: number | null;
};
export type S05_nature_cas_typeMinAggregateOutputType = {
    id: number | null;
    code: string | null;
    libelle: string | null;
    actif: boolean | null;
};
export type S05_nature_cas_typeMaxAggregateOutputType = {
    id: number | null;
    code: string | null;
    libelle: string | null;
    actif: boolean | null;
};
export type S05_nature_cas_typeCountAggregateOutputType = {
    id: number;
    code: number;
    libelle: number;
    actif: number;
    _all: number;
};
export type S05_nature_cas_typeAvgAggregateInputType = {
    id?: true;
};
export type S05_nature_cas_typeSumAggregateInputType = {
    id?: true;
};
export type S05_nature_cas_typeMinAggregateInputType = {
    id?: true;
    code?: true;
    libelle?: true;
    actif?: true;
};
export type S05_nature_cas_typeMaxAggregateInputType = {
    id?: true;
    code?: true;
    libelle?: true;
    actif?: true;
};
export type S05_nature_cas_typeCountAggregateInputType = {
    id?: true;
    code?: true;
    libelle?: true;
    actif?: true;
    _all?: true;
};
export type S05_nature_cas_typeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s05_nature_cas_type to aggregate.
     */
    where?: Prisma.s05_nature_cas_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s05_nature_cas_types to fetch.
     */
    orderBy?: Prisma.s05_nature_cas_typeOrderByWithRelationInput | Prisma.s05_nature_cas_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s05_nature_cas_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s05_nature_cas_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s05_nature_cas_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s05_nature_cas_types
    **/
    _count?: true | S05_nature_cas_typeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S05_nature_cas_typeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S05_nature_cas_typeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S05_nature_cas_typeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S05_nature_cas_typeMaxAggregateInputType;
};
export type GetS05_nature_cas_typeAggregateType<T extends S05_nature_cas_typeAggregateArgs> = {
    [P in keyof T & keyof AggregateS05_nature_cas_type]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS05_nature_cas_type[P]> : Prisma.GetScalarType<T[P], AggregateS05_nature_cas_type[P]>;
};
export type s05_nature_cas_typeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s05_nature_cas_typeWhereInput;
    orderBy?: Prisma.s05_nature_cas_typeOrderByWithAggregationInput | Prisma.s05_nature_cas_typeOrderByWithAggregationInput[];
    by: Prisma.S05_nature_cas_typeScalarFieldEnum[] | Prisma.S05_nature_cas_typeScalarFieldEnum;
    having?: Prisma.s05_nature_cas_typeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S05_nature_cas_typeCountAggregateInputType | true;
    _avg?: S05_nature_cas_typeAvgAggregateInputType;
    _sum?: S05_nature_cas_typeSumAggregateInputType;
    _min?: S05_nature_cas_typeMinAggregateInputType;
    _max?: S05_nature_cas_typeMaxAggregateInputType;
};
export type S05_nature_cas_typeGroupByOutputType = {
    id: number;
    code: string;
    libelle: string;
    actif: boolean | null;
    _count: S05_nature_cas_typeCountAggregateOutputType | null;
    _avg: S05_nature_cas_typeAvgAggregateOutputType | null;
    _sum: S05_nature_cas_typeSumAggregateOutputType | null;
    _min: S05_nature_cas_typeMinAggregateOutputType | null;
    _max: S05_nature_cas_typeMaxAggregateOutputType | null;
};
type GetS05_nature_cas_typeGroupByPayload<T extends s05_nature_cas_typeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S05_nature_cas_typeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S05_nature_cas_typeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S05_nature_cas_typeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S05_nature_cas_typeGroupByOutputType[P]>;
}>>;
export type s05_nature_cas_typeWhereInput = {
    AND?: Prisma.s05_nature_cas_typeWhereInput | Prisma.s05_nature_cas_typeWhereInput[];
    OR?: Prisma.s05_nature_cas_typeWhereInput[];
    NOT?: Prisma.s05_nature_cas_typeWhereInput | Prisma.s05_nature_cas_typeWhereInput[];
    id?: Prisma.IntFilter<"s05_nature_cas_type"> | number;
    code?: Prisma.StringFilter<"s05_nature_cas_type"> | string;
    libelle?: Prisma.StringFilter<"s05_nature_cas_type"> | string;
    actif?: Prisma.BoolNullableFilter<"s05_nature_cas_type"> | boolean | null;
    rapports?: Prisma.S05_rapport_nature_casListRelationFilter;
};
export type s05_nature_cas_typeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapports?: Prisma.s05_rapport_nature_casOrderByRelationAggregateInput;
};
export type s05_nature_cas_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.s05_nature_cas_typeWhereInput | Prisma.s05_nature_cas_typeWhereInput[];
    OR?: Prisma.s05_nature_cas_typeWhereInput[];
    NOT?: Prisma.s05_nature_cas_typeWhereInput | Prisma.s05_nature_cas_typeWhereInput[];
    code?: Prisma.StringFilter<"s05_nature_cas_type"> | string;
    libelle?: Prisma.StringFilter<"s05_nature_cas_type"> | string;
    actif?: Prisma.BoolNullableFilter<"s05_nature_cas_type"> | boolean | null;
    rapports?: Prisma.S05_rapport_nature_casListRelationFilter;
}, "id">;
export type s05_nature_cas_typeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s05_nature_cas_typeCountOrderByAggregateInput;
    _avg?: Prisma.s05_nature_cas_typeAvgOrderByAggregateInput;
    _max?: Prisma.s05_nature_cas_typeMaxOrderByAggregateInput;
    _min?: Prisma.s05_nature_cas_typeMinOrderByAggregateInput;
    _sum?: Prisma.s05_nature_cas_typeSumOrderByAggregateInput;
};
export type s05_nature_cas_typeScalarWhereWithAggregatesInput = {
    AND?: Prisma.s05_nature_cas_typeScalarWhereWithAggregatesInput | Prisma.s05_nature_cas_typeScalarWhereWithAggregatesInput[];
    OR?: Prisma.s05_nature_cas_typeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s05_nature_cas_typeScalarWhereWithAggregatesInput | Prisma.s05_nature_cas_typeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s05_nature_cas_type"> | number;
    code?: Prisma.StringWithAggregatesFilter<"s05_nature_cas_type"> | string;
    libelle?: Prisma.StringWithAggregatesFilter<"s05_nature_cas_type"> | string;
    actif?: Prisma.BoolNullableWithAggregatesFilter<"s05_nature_cas_type"> | boolean | null;
};
export type s05_nature_cas_typeCreateInput = {
    code: string;
    libelle: string;
    actif?: boolean | null;
    rapports?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutNature_casInput;
};
export type s05_nature_cas_typeUncheckedCreateInput = {
    id?: number;
    code: string;
    libelle: string;
    actif?: boolean | null;
    rapports?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutNature_casInput;
};
export type s05_nature_cas_typeUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    rapports?: Prisma.s05_rapport_nature_casUpdateManyWithoutNature_casNestedInput;
};
export type s05_nature_cas_typeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    rapports?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutNature_casNestedInput;
};
export type s05_nature_cas_typeCreateManyInput = {
    id?: number;
    code: string;
    libelle: string;
    actif?: boolean | null;
};
export type s05_nature_cas_typeUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s05_nature_cas_typeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s05_nature_cas_typeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type s05_nature_cas_typeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type s05_nature_cas_typeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type s05_nature_cas_typeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type s05_nature_cas_typeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type S05_nature_cas_typeScalarRelationFilter = {
    is?: Prisma.s05_nature_cas_typeWhereInput;
    isNot?: Prisma.s05_nature_cas_typeWhereInput;
};
export type s05_nature_cas_typeCreateNestedOneWithoutRapportsInput = {
    create?: Prisma.XOR<Prisma.s05_nature_cas_typeCreateWithoutRapportsInput, Prisma.s05_nature_cas_typeUncheckedCreateWithoutRapportsInput>;
    connectOrCreate?: Prisma.s05_nature_cas_typeCreateOrConnectWithoutRapportsInput;
    connect?: Prisma.s05_nature_cas_typeWhereUniqueInput;
};
export type s05_nature_cas_typeUpdateOneRequiredWithoutRapportsNestedInput = {
    create?: Prisma.XOR<Prisma.s05_nature_cas_typeCreateWithoutRapportsInput, Prisma.s05_nature_cas_typeUncheckedCreateWithoutRapportsInput>;
    connectOrCreate?: Prisma.s05_nature_cas_typeCreateOrConnectWithoutRapportsInput;
    upsert?: Prisma.s05_nature_cas_typeUpsertWithoutRapportsInput;
    connect?: Prisma.s05_nature_cas_typeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s05_nature_cas_typeUpdateToOneWithWhereWithoutRapportsInput, Prisma.s05_nature_cas_typeUpdateWithoutRapportsInput>, Prisma.s05_nature_cas_typeUncheckedUpdateWithoutRapportsInput>;
};
export type s05_nature_cas_typeCreateWithoutRapportsInput = {
    code: string;
    libelle: string;
    actif?: boolean | null;
};
export type s05_nature_cas_typeUncheckedCreateWithoutRapportsInput = {
    id?: number;
    code: string;
    libelle: string;
    actif?: boolean | null;
};
export type s05_nature_cas_typeCreateOrConnectWithoutRapportsInput = {
    where: Prisma.s05_nature_cas_typeWhereUniqueInput;
    create: Prisma.XOR<Prisma.s05_nature_cas_typeCreateWithoutRapportsInput, Prisma.s05_nature_cas_typeUncheckedCreateWithoutRapportsInput>;
};
export type s05_nature_cas_typeUpsertWithoutRapportsInput = {
    update: Prisma.XOR<Prisma.s05_nature_cas_typeUpdateWithoutRapportsInput, Prisma.s05_nature_cas_typeUncheckedUpdateWithoutRapportsInput>;
    create: Prisma.XOR<Prisma.s05_nature_cas_typeCreateWithoutRapportsInput, Prisma.s05_nature_cas_typeUncheckedCreateWithoutRapportsInput>;
    where?: Prisma.s05_nature_cas_typeWhereInput;
};
export type s05_nature_cas_typeUpdateToOneWithWhereWithoutRapportsInput = {
    where?: Prisma.s05_nature_cas_typeWhereInput;
    data: Prisma.XOR<Prisma.s05_nature_cas_typeUpdateWithoutRapportsInput, Prisma.s05_nature_cas_typeUncheckedUpdateWithoutRapportsInput>;
};
export type s05_nature_cas_typeUpdateWithoutRapportsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s05_nature_cas_typeUncheckedUpdateWithoutRapportsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
/**
 * Count Type S05_nature_cas_typeCountOutputType
 */
export type S05_nature_cas_typeCountOutputType = {
    rapports: number;
};
export type S05_nature_cas_typeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapports?: boolean | S05_nature_cas_typeCountOutputTypeCountRapportsArgs;
};
/**
 * S05_nature_cas_typeCountOutputType without action
 */
export type S05_nature_cas_typeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the S05_nature_cas_typeCountOutputType
     */
    select?: Prisma.S05_nature_cas_typeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * S05_nature_cas_typeCountOutputType without action
 */
export type S05_nature_cas_typeCountOutputTypeCountRapportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s05_rapport_nature_casWhereInput;
};
export type s05_nature_cas_typeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
    rapports?: boolean | Prisma.s05_nature_cas_type$rapportsArgs<ExtArgs>;
    _count?: boolean | Prisma.S05_nature_cas_typeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s05_nature_cas_type"]>;
export type s05_nature_cas_typeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
}, ExtArgs["result"]["s05_nature_cas_type"]>;
export type s05_nature_cas_typeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
}, ExtArgs["result"]["s05_nature_cas_type"]>;
export type s05_nature_cas_typeSelectScalar = {
    id?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
};
export type s05_nature_cas_typeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "libelle" | "actif", ExtArgs["result"]["s05_nature_cas_type"]>;
export type s05_nature_cas_typeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapports?: boolean | Prisma.s05_nature_cas_type$rapportsArgs<ExtArgs>;
    _count?: boolean | Prisma.S05_nature_cas_typeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type s05_nature_cas_typeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type s05_nature_cas_typeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $s05_nature_cas_typePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s05_nature_cas_type";
    objects: {
        rapports: Prisma.$s05_rapport_nature_casPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        code: string;
        libelle: string;
        actif: boolean | null;
    }, ExtArgs["result"]["s05_nature_cas_type"]>;
    composites: {};
};
export type s05_nature_cas_typeGetPayload<S extends boolean | null | undefined | s05_nature_cas_typeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_typePayload, S>;
export type s05_nature_cas_typeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s05_nature_cas_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S05_nature_cas_typeCountAggregateInputType | true;
};
export interface s05_nature_cas_typeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s05_nature_cas_type'];
        meta: {
            name: 's05_nature_cas_type';
        };
    };
    /**
     * Find zero or one S05_nature_cas_type that matches the filter.
     * @param {s05_nature_cas_typeFindUniqueArgs} args - Arguments to find a S05_nature_cas_type
     * @example
     * // Get one S05_nature_cas_type
     * const s05_nature_cas_type = await prisma.s05_nature_cas_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s05_nature_cas_typeFindUniqueArgs>(args: Prisma.SelectSubset<T, s05_nature_cas_typeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s05_nature_cas_typeClient<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S05_nature_cas_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s05_nature_cas_typeFindUniqueOrThrowArgs} args - Arguments to find a S05_nature_cas_type
     * @example
     * // Get one S05_nature_cas_type
     * const s05_nature_cas_type = await prisma.s05_nature_cas_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s05_nature_cas_typeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s05_nature_cas_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s05_nature_cas_typeClient<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S05_nature_cas_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s05_nature_cas_typeFindFirstArgs} args - Arguments to find a S05_nature_cas_type
     * @example
     * // Get one S05_nature_cas_type
     * const s05_nature_cas_type = await prisma.s05_nature_cas_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s05_nature_cas_typeFindFirstArgs>(args?: Prisma.SelectSubset<T, s05_nature_cas_typeFindFirstArgs<ExtArgs>>): Prisma.Prisma__s05_nature_cas_typeClient<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S05_nature_cas_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s05_nature_cas_typeFindFirstOrThrowArgs} args - Arguments to find a S05_nature_cas_type
     * @example
     * // Get one S05_nature_cas_type
     * const s05_nature_cas_type = await prisma.s05_nature_cas_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s05_nature_cas_typeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s05_nature_cas_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s05_nature_cas_typeClient<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S05_nature_cas_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s05_nature_cas_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S05_nature_cas_types
     * const s05_nature_cas_types = await prisma.s05_nature_cas_type.findMany()
     *
     * // Get first 10 S05_nature_cas_types
     * const s05_nature_cas_types = await prisma.s05_nature_cas_type.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s05_nature_cas_typeWithIdOnly = await prisma.s05_nature_cas_type.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s05_nature_cas_typeFindManyArgs>(args?: Prisma.SelectSubset<T, s05_nature_cas_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S05_nature_cas_type.
     * @param {s05_nature_cas_typeCreateArgs} args - Arguments to create a S05_nature_cas_type.
     * @example
     * // Create one S05_nature_cas_type
     * const S05_nature_cas_type = await prisma.s05_nature_cas_type.create({
     *   data: {
     *     // ... data to create a S05_nature_cas_type
     *   }
     * })
     *
     */
    create<T extends s05_nature_cas_typeCreateArgs>(args: Prisma.SelectSubset<T, s05_nature_cas_typeCreateArgs<ExtArgs>>): Prisma.Prisma__s05_nature_cas_typeClient<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S05_nature_cas_types.
     * @param {s05_nature_cas_typeCreateManyArgs} args - Arguments to create many S05_nature_cas_types.
     * @example
     * // Create many S05_nature_cas_types
     * const s05_nature_cas_type = await prisma.s05_nature_cas_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s05_nature_cas_typeCreateManyArgs>(args?: Prisma.SelectSubset<T, s05_nature_cas_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S05_nature_cas_types and returns the data saved in the database.
     * @param {s05_nature_cas_typeCreateManyAndReturnArgs} args - Arguments to create many S05_nature_cas_types.
     * @example
     * // Create many S05_nature_cas_types
     * const s05_nature_cas_type = await prisma.s05_nature_cas_type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S05_nature_cas_types and only return the `id`
     * const s05_nature_cas_typeWithIdOnly = await prisma.s05_nature_cas_type.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s05_nature_cas_typeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s05_nature_cas_typeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_typePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S05_nature_cas_type.
     * @param {s05_nature_cas_typeDeleteArgs} args - Arguments to delete one S05_nature_cas_type.
     * @example
     * // Delete one S05_nature_cas_type
     * const S05_nature_cas_type = await prisma.s05_nature_cas_type.delete({
     *   where: {
     *     // ... filter to delete one S05_nature_cas_type
     *   }
     * })
     *
     */
    delete<T extends s05_nature_cas_typeDeleteArgs>(args: Prisma.SelectSubset<T, s05_nature_cas_typeDeleteArgs<ExtArgs>>): Prisma.Prisma__s05_nature_cas_typeClient<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S05_nature_cas_type.
     * @param {s05_nature_cas_typeUpdateArgs} args - Arguments to update one S05_nature_cas_type.
     * @example
     * // Update one S05_nature_cas_type
     * const s05_nature_cas_type = await prisma.s05_nature_cas_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s05_nature_cas_typeUpdateArgs>(args: Prisma.SelectSubset<T, s05_nature_cas_typeUpdateArgs<ExtArgs>>): Prisma.Prisma__s05_nature_cas_typeClient<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S05_nature_cas_types.
     * @param {s05_nature_cas_typeDeleteManyArgs} args - Arguments to filter S05_nature_cas_types to delete.
     * @example
     * // Delete a few S05_nature_cas_types
     * const { count } = await prisma.s05_nature_cas_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s05_nature_cas_typeDeleteManyArgs>(args?: Prisma.SelectSubset<T, s05_nature_cas_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S05_nature_cas_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s05_nature_cas_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S05_nature_cas_types
     * const s05_nature_cas_type = await prisma.s05_nature_cas_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s05_nature_cas_typeUpdateManyArgs>(args: Prisma.SelectSubset<T, s05_nature_cas_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S05_nature_cas_types and returns the data updated in the database.
     * @param {s05_nature_cas_typeUpdateManyAndReturnArgs} args - Arguments to update many S05_nature_cas_types.
     * @example
     * // Update many S05_nature_cas_types
     * const s05_nature_cas_type = await prisma.s05_nature_cas_type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S05_nature_cas_types and only return the `id`
     * const s05_nature_cas_typeWithIdOnly = await prisma.s05_nature_cas_type.updateManyAndReturn({
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
    updateManyAndReturn<T extends s05_nature_cas_typeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s05_nature_cas_typeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_typePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S05_nature_cas_type.
     * @param {s05_nature_cas_typeUpsertArgs} args - Arguments to update or create a S05_nature_cas_type.
     * @example
     * // Update or create a S05_nature_cas_type
     * const s05_nature_cas_type = await prisma.s05_nature_cas_type.upsert({
     *   create: {
     *     // ... data to create a S05_nature_cas_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S05_nature_cas_type we want to update
     *   }
     * })
     */
    upsert<T extends s05_nature_cas_typeUpsertArgs>(args: Prisma.SelectSubset<T, s05_nature_cas_typeUpsertArgs<ExtArgs>>): Prisma.Prisma__s05_nature_cas_typeClient<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S05_nature_cas_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s05_nature_cas_typeCountArgs} args - Arguments to filter S05_nature_cas_types to count.
     * @example
     * // Count the number of S05_nature_cas_types
     * const count = await prisma.s05_nature_cas_type.count({
     *   where: {
     *     // ... the filter for the S05_nature_cas_types we want to count
     *   }
     * })
    **/
    count<T extends s05_nature_cas_typeCountArgs>(args?: Prisma.Subset<T, s05_nature_cas_typeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S05_nature_cas_typeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S05_nature_cas_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S05_nature_cas_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S05_nature_cas_typeAggregateArgs>(args: Prisma.Subset<T, S05_nature_cas_typeAggregateArgs>): Prisma.PrismaPromise<GetS05_nature_cas_typeAggregateType<T>>;
    /**
     * Group by S05_nature_cas_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s05_nature_cas_typeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s05_nature_cas_typeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s05_nature_cas_typeGroupByArgs['orderBy'];
    } : {
        orderBy?: s05_nature_cas_typeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s05_nature_cas_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS05_nature_cas_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s05_nature_cas_type model
     */
    readonly fields: s05_nature_cas_typeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s05_nature_cas_type.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s05_nature_cas_typeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rapports<T extends Prisma.s05_nature_cas_type$rapportsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.s05_nature_cas_type$rapportsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s05_rapport_nature_casPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the s05_nature_cas_type model
 */
export interface s05_nature_cas_typeFieldRefs {
    readonly id: Prisma.FieldRef<"s05_nature_cas_type", 'Int'>;
    readonly code: Prisma.FieldRef<"s05_nature_cas_type", 'String'>;
    readonly libelle: Prisma.FieldRef<"s05_nature_cas_type", 'String'>;
    readonly actif: Prisma.FieldRef<"s05_nature_cas_type", 'Boolean'>;
}
/**
 * s05_nature_cas_type findUnique
 */
export type s05_nature_cas_typeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_type
     */
    select?: Prisma.s05_nature_cas_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_type
     */
    omit?: Prisma.s05_nature_cas_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s05_nature_cas_type to fetch.
     */
    where: Prisma.s05_nature_cas_typeWhereUniqueInput;
};
/**
 * s05_nature_cas_type findUniqueOrThrow
 */
export type s05_nature_cas_typeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_type
     */
    select?: Prisma.s05_nature_cas_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_type
     */
    omit?: Prisma.s05_nature_cas_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s05_nature_cas_type to fetch.
     */
    where: Prisma.s05_nature_cas_typeWhereUniqueInput;
};
/**
 * s05_nature_cas_type findFirst
 */
export type s05_nature_cas_typeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_type
     */
    select?: Prisma.s05_nature_cas_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_type
     */
    omit?: Prisma.s05_nature_cas_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s05_nature_cas_type to fetch.
     */
    where?: Prisma.s05_nature_cas_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s05_nature_cas_types to fetch.
     */
    orderBy?: Prisma.s05_nature_cas_typeOrderByWithRelationInput | Prisma.s05_nature_cas_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s05_nature_cas_types.
     */
    cursor?: Prisma.s05_nature_cas_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s05_nature_cas_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s05_nature_cas_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s05_nature_cas_types.
     */
    distinct?: Prisma.S05_nature_cas_typeScalarFieldEnum | Prisma.S05_nature_cas_typeScalarFieldEnum[];
};
/**
 * s05_nature_cas_type findFirstOrThrow
 */
export type s05_nature_cas_typeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_type
     */
    select?: Prisma.s05_nature_cas_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_type
     */
    omit?: Prisma.s05_nature_cas_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s05_nature_cas_type to fetch.
     */
    where?: Prisma.s05_nature_cas_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s05_nature_cas_types to fetch.
     */
    orderBy?: Prisma.s05_nature_cas_typeOrderByWithRelationInput | Prisma.s05_nature_cas_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s05_nature_cas_types.
     */
    cursor?: Prisma.s05_nature_cas_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s05_nature_cas_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s05_nature_cas_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s05_nature_cas_types.
     */
    distinct?: Prisma.S05_nature_cas_typeScalarFieldEnum | Prisma.S05_nature_cas_typeScalarFieldEnum[];
};
/**
 * s05_nature_cas_type findMany
 */
export type s05_nature_cas_typeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_type
     */
    select?: Prisma.s05_nature_cas_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_type
     */
    omit?: Prisma.s05_nature_cas_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s05_nature_cas_types to fetch.
     */
    where?: Prisma.s05_nature_cas_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s05_nature_cas_types to fetch.
     */
    orderBy?: Prisma.s05_nature_cas_typeOrderByWithRelationInput | Prisma.s05_nature_cas_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s05_nature_cas_types.
     */
    cursor?: Prisma.s05_nature_cas_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s05_nature_cas_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s05_nature_cas_types.
     */
    skip?: number;
    distinct?: Prisma.S05_nature_cas_typeScalarFieldEnum | Prisma.S05_nature_cas_typeScalarFieldEnum[];
};
/**
 * s05_nature_cas_type create
 */
export type s05_nature_cas_typeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_type
     */
    select?: Prisma.s05_nature_cas_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_type
     */
    omit?: Prisma.s05_nature_cas_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_typeInclude<ExtArgs> | null;
    /**
     * The data needed to create a s05_nature_cas_type.
     */
    data: Prisma.XOR<Prisma.s05_nature_cas_typeCreateInput, Prisma.s05_nature_cas_typeUncheckedCreateInput>;
};
/**
 * s05_nature_cas_type createMany
 */
export type s05_nature_cas_typeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s05_nature_cas_types.
     */
    data: Prisma.s05_nature_cas_typeCreateManyInput | Prisma.s05_nature_cas_typeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s05_nature_cas_type createManyAndReturn
 */
export type s05_nature_cas_typeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_type
     */
    select?: Prisma.s05_nature_cas_typeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_type
     */
    omit?: Prisma.s05_nature_cas_typeOmit<ExtArgs> | null;
    /**
     * The data used to create many s05_nature_cas_types.
     */
    data: Prisma.s05_nature_cas_typeCreateManyInput | Prisma.s05_nature_cas_typeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s05_nature_cas_type update
 */
export type s05_nature_cas_typeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_type
     */
    select?: Prisma.s05_nature_cas_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_type
     */
    omit?: Prisma.s05_nature_cas_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_typeInclude<ExtArgs> | null;
    /**
     * The data needed to update a s05_nature_cas_type.
     */
    data: Prisma.XOR<Prisma.s05_nature_cas_typeUpdateInput, Prisma.s05_nature_cas_typeUncheckedUpdateInput>;
    /**
     * Choose, which s05_nature_cas_type to update.
     */
    where: Prisma.s05_nature_cas_typeWhereUniqueInput;
};
/**
 * s05_nature_cas_type updateMany
 */
export type s05_nature_cas_typeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s05_nature_cas_types.
     */
    data: Prisma.XOR<Prisma.s05_nature_cas_typeUpdateManyMutationInput, Prisma.s05_nature_cas_typeUncheckedUpdateManyInput>;
    /**
     * Filter which s05_nature_cas_types to update
     */
    where?: Prisma.s05_nature_cas_typeWhereInput;
    /**
     * Limit how many s05_nature_cas_types to update.
     */
    limit?: number;
};
/**
 * s05_nature_cas_type updateManyAndReturn
 */
export type s05_nature_cas_typeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_type
     */
    select?: Prisma.s05_nature_cas_typeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_type
     */
    omit?: Prisma.s05_nature_cas_typeOmit<ExtArgs> | null;
    /**
     * The data used to update s05_nature_cas_types.
     */
    data: Prisma.XOR<Prisma.s05_nature_cas_typeUpdateManyMutationInput, Prisma.s05_nature_cas_typeUncheckedUpdateManyInput>;
    /**
     * Filter which s05_nature_cas_types to update
     */
    where?: Prisma.s05_nature_cas_typeWhereInput;
    /**
     * Limit how many s05_nature_cas_types to update.
     */
    limit?: number;
};
/**
 * s05_nature_cas_type upsert
 */
export type s05_nature_cas_typeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_type
     */
    select?: Prisma.s05_nature_cas_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_type
     */
    omit?: Prisma.s05_nature_cas_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_typeInclude<ExtArgs> | null;
    /**
     * The filter to search for the s05_nature_cas_type to update in case it exists.
     */
    where: Prisma.s05_nature_cas_typeWhereUniqueInput;
    /**
     * In case the s05_nature_cas_type found by the `where` argument doesn't exist, create a new s05_nature_cas_type with this data.
     */
    create: Prisma.XOR<Prisma.s05_nature_cas_typeCreateInput, Prisma.s05_nature_cas_typeUncheckedCreateInput>;
    /**
     * In case the s05_nature_cas_type was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s05_nature_cas_typeUpdateInput, Prisma.s05_nature_cas_typeUncheckedUpdateInput>;
};
/**
 * s05_nature_cas_type delete
 */
export type s05_nature_cas_typeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_type
     */
    select?: Prisma.s05_nature_cas_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_type
     */
    omit?: Prisma.s05_nature_cas_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_typeInclude<ExtArgs> | null;
    /**
     * Filter which s05_nature_cas_type to delete.
     */
    where: Prisma.s05_nature_cas_typeWhereUniqueInput;
};
/**
 * s05_nature_cas_type deleteMany
 */
export type s05_nature_cas_typeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s05_nature_cas_types to delete
     */
    where?: Prisma.s05_nature_cas_typeWhereInput;
    /**
     * Limit how many s05_nature_cas_types to delete.
     */
    limit?: number;
};
/**
 * s05_nature_cas_type.rapports
 */
export type s05_nature_cas_type$rapportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_rapport_nature_cas
     */
    select?: Prisma.s05_rapport_nature_casSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_rapport_nature_cas
     */
    omit?: Prisma.s05_rapport_nature_casOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_rapport_nature_casInclude<ExtArgs> | null;
    where?: Prisma.s05_rapport_nature_casWhereInput;
    orderBy?: Prisma.s05_rapport_nature_casOrderByWithRelationInput | Prisma.s05_rapport_nature_casOrderByWithRelationInput[];
    cursor?: Prisma.s05_rapport_nature_casWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.S05_rapport_nature_casScalarFieldEnum | Prisma.S05_rapport_nature_casScalarFieldEnum[];
};
/**
 * s05_nature_cas_type without action
 */
export type s05_nature_cas_typeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_type
     */
    select?: Prisma.s05_nature_cas_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_type
     */
    omit?: Prisma.s05_nature_cas_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_typeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s05_nature_cas_type.d.ts.map