import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s10_trauma_zone_type
 *
 */
export type s10_trauma_zone_typeModel = runtime.Types.Result.DefaultSelection<Prisma.$s10_trauma_zone_typePayload>;
export type AggregateS10_trauma_zone_type = {
    _count: S10_trauma_zone_typeCountAggregateOutputType | null;
    _avg: S10_trauma_zone_typeAvgAggregateOutputType | null;
    _sum: S10_trauma_zone_typeSumAggregateOutputType | null;
    _min: S10_trauma_zone_typeMinAggregateOutputType | null;
    _max: S10_trauma_zone_typeMaxAggregateOutputType | null;
};
export type S10_trauma_zone_typeAvgAggregateOutputType = {
    id: number | null;
};
export type S10_trauma_zone_typeSumAggregateOutputType = {
    id: number | null;
};
export type S10_trauma_zone_typeMinAggregateOutputType = {
    id: number | null;
    code: string | null;
    libelle: string | null;
    actif: boolean | null;
};
export type S10_trauma_zone_typeMaxAggregateOutputType = {
    id: number | null;
    code: string | null;
    libelle: string | null;
    actif: boolean | null;
};
export type S10_trauma_zone_typeCountAggregateOutputType = {
    id: number;
    code: number;
    libelle: number;
    actif: number;
    _all: number;
};
export type S10_trauma_zone_typeAvgAggregateInputType = {
    id?: true;
};
export type S10_trauma_zone_typeSumAggregateInputType = {
    id?: true;
};
export type S10_trauma_zone_typeMinAggregateInputType = {
    id?: true;
    code?: true;
    libelle?: true;
    actif?: true;
};
export type S10_trauma_zone_typeMaxAggregateInputType = {
    id?: true;
    code?: true;
    libelle?: true;
    actif?: true;
};
export type S10_trauma_zone_typeCountAggregateInputType = {
    id?: true;
    code?: true;
    libelle?: true;
    actif?: true;
    _all?: true;
};
export type S10_trauma_zone_typeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s10_trauma_zone_type to aggregate.
     */
    where?: Prisma.s10_trauma_zone_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s10_trauma_zone_types to fetch.
     */
    orderBy?: Prisma.s10_trauma_zone_typeOrderByWithRelationInput | Prisma.s10_trauma_zone_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s10_trauma_zone_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s10_trauma_zone_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s10_trauma_zone_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s10_trauma_zone_types
    **/
    _count?: true | S10_trauma_zone_typeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S10_trauma_zone_typeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S10_trauma_zone_typeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S10_trauma_zone_typeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S10_trauma_zone_typeMaxAggregateInputType;
};
export type GetS10_trauma_zone_typeAggregateType<T extends S10_trauma_zone_typeAggregateArgs> = {
    [P in keyof T & keyof AggregateS10_trauma_zone_type]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS10_trauma_zone_type[P]> : Prisma.GetScalarType<T[P], AggregateS10_trauma_zone_type[P]>;
};
export type s10_trauma_zone_typeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s10_trauma_zone_typeWhereInput;
    orderBy?: Prisma.s10_trauma_zone_typeOrderByWithAggregationInput | Prisma.s10_trauma_zone_typeOrderByWithAggregationInput[];
    by: Prisma.S10_trauma_zone_typeScalarFieldEnum[] | Prisma.S10_trauma_zone_typeScalarFieldEnum;
    having?: Prisma.s10_trauma_zone_typeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S10_trauma_zone_typeCountAggregateInputType | true;
    _avg?: S10_trauma_zone_typeAvgAggregateInputType;
    _sum?: S10_trauma_zone_typeSumAggregateInputType;
    _min?: S10_trauma_zone_typeMinAggregateInputType;
    _max?: S10_trauma_zone_typeMaxAggregateInputType;
};
export type S10_trauma_zone_typeGroupByOutputType = {
    id: number;
    code: string;
    libelle: string;
    actif: boolean | null;
    _count: S10_trauma_zone_typeCountAggregateOutputType | null;
    _avg: S10_trauma_zone_typeAvgAggregateOutputType | null;
    _sum: S10_trauma_zone_typeSumAggregateOutputType | null;
    _min: S10_trauma_zone_typeMinAggregateOutputType | null;
    _max: S10_trauma_zone_typeMaxAggregateOutputType | null;
};
type GetS10_trauma_zone_typeGroupByPayload<T extends s10_trauma_zone_typeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S10_trauma_zone_typeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S10_trauma_zone_typeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S10_trauma_zone_typeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S10_trauma_zone_typeGroupByOutputType[P]>;
}>>;
export type s10_trauma_zone_typeWhereInput = {
    AND?: Prisma.s10_trauma_zone_typeWhereInput | Prisma.s10_trauma_zone_typeWhereInput[];
    OR?: Prisma.s10_trauma_zone_typeWhereInput[];
    NOT?: Prisma.s10_trauma_zone_typeWhereInput | Prisma.s10_trauma_zone_typeWhereInput[];
    id?: Prisma.IntFilter<"s10_trauma_zone_type"> | number;
    code?: Prisma.StringFilter<"s10_trauma_zone_type"> | string;
    libelle?: Prisma.StringFilter<"s10_trauma_zone_type"> | string;
    actif?: Prisma.BoolNullableFilter<"s10_trauma_zone_type"> | boolean | null;
    constats?: Prisma.S10_trauma_constatListRelationFilter;
};
export type s10_trauma_zone_typeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrderInput | Prisma.SortOrder;
    constats?: Prisma.s10_trauma_constatOrderByRelationAggregateInput;
};
export type s10_trauma_zone_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.s10_trauma_zone_typeWhereInput | Prisma.s10_trauma_zone_typeWhereInput[];
    OR?: Prisma.s10_trauma_zone_typeWhereInput[];
    NOT?: Prisma.s10_trauma_zone_typeWhereInput | Prisma.s10_trauma_zone_typeWhereInput[];
    code?: Prisma.StringFilter<"s10_trauma_zone_type"> | string;
    libelle?: Prisma.StringFilter<"s10_trauma_zone_type"> | string;
    actif?: Prisma.BoolNullableFilter<"s10_trauma_zone_type"> | boolean | null;
    constats?: Prisma.S10_trauma_constatListRelationFilter;
}, "id">;
export type s10_trauma_zone_typeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s10_trauma_zone_typeCountOrderByAggregateInput;
    _avg?: Prisma.s10_trauma_zone_typeAvgOrderByAggregateInput;
    _max?: Prisma.s10_trauma_zone_typeMaxOrderByAggregateInput;
    _min?: Prisma.s10_trauma_zone_typeMinOrderByAggregateInput;
    _sum?: Prisma.s10_trauma_zone_typeSumOrderByAggregateInput;
};
export type s10_trauma_zone_typeScalarWhereWithAggregatesInput = {
    AND?: Prisma.s10_trauma_zone_typeScalarWhereWithAggregatesInput | Prisma.s10_trauma_zone_typeScalarWhereWithAggregatesInput[];
    OR?: Prisma.s10_trauma_zone_typeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s10_trauma_zone_typeScalarWhereWithAggregatesInput | Prisma.s10_trauma_zone_typeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s10_trauma_zone_type"> | number;
    code?: Prisma.StringWithAggregatesFilter<"s10_trauma_zone_type"> | string;
    libelle?: Prisma.StringWithAggregatesFilter<"s10_trauma_zone_type"> | string;
    actif?: Prisma.BoolNullableWithAggregatesFilter<"s10_trauma_zone_type"> | boolean | null;
};
export type s10_trauma_zone_typeCreateInput = {
    code: string;
    libelle: string;
    actif?: boolean | null;
    constats?: Prisma.s10_trauma_constatCreateNestedManyWithoutZoneInput;
};
export type s10_trauma_zone_typeUncheckedCreateInput = {
    id?: number;
    code: string;
    libelle: string;
    actif?: boolean | null;
    constats?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutZoneInput;
};
export type s10_trauma_zone_typeUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    constats?: Prisma.s10_trauma_constatUpdateManyWithoutZoneNestedInput;
};
export type s10_trauma_zone_typeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    constats?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutZoneNestedInput;
};
export type s10_trauma_zone_typeCreateManyInput = {
    id?: number;
    code: string;
    libelle: string;
    actif?: boolean | null;
};
export type s10_trauma_zone_typeUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s10_trauma_zone_typeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s10_trauma_zone_typeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type s10_trauma_zone_typeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type s10_trauma_zone_typeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type s10_trauma_zone_typeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type s10_trauma_zone_typeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type S10_trauma_zone_typeScalarRelationFilter = {
    is?: Prisma.s10_trauma_zone_typeWhereInput;
    isNot?: Prisma.s10_trauma_zone_typeWhereInput;
};
export type s10_trauma_zone_typeCreateNestedOneWithoutConstatsInput = {
    create?: Prisma.XOR<Prisma.s10_trauma_zone_typeCreateWithoutConstatsInput, Prisma.s10_trauma_zone_typeUncheckedCreateWithoutConstatsInput>;
    connectOrCreate?: Prisma.s10_trauma_zone_typeCreateOrConnectWithoutConstatsInput;
    connect?: Prisma.s10_trauma_zone_typeWhereUniqueInput;
};
export type s10_trauma_zone_typeUpdateOneRequiredWithoutConstatsNestedInput = {
    create?: Prisma.XOR<Prisma.s10_trauma_zone_typeCreateWithoutConstatsInput, Prisma.s10_trauma_zone_typeUncheckedCreateWithoutConstatsInput>;
    connectOrCreate?: Prisma.s10_trauma_zone_typeCreateOrConnectWithoutConstatsInput;
    upsert?: Prisma.s10_trauma_zone_typeUpsertWithoutConstatsInput;
    connect?: Prisma.s10_trauma_zone_typeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s10_trauma_zone_typeUpdateToOneWithWhereWithoutConstatsInput, Prisma.s10_trauma_zone_typeUpdateWithoutConstatsInput>, Prisma.s10_trauma_zone_typeUncheckedUpdateWithoutConstatsInput>;
};
export type s10_trauma_zone_typeCreateWithoutConstatsInput = {
    code: string;
    libelle: string;
    actif?: boolean | null;
};
export type s10_trauma_zone_typeUncheckedCreateWithoutConstatsInput = {
    id?: number;
    code: string;
    libelle: string;
    actif?: boolean | null;
};
export type s10_trauma_zone_typeCreateOrConnectWithoutConstatsInput = {
    where: Prisma.s10_trauma_zone_typeWhereUniqueInput;
    create: Prisma.XOR<Prisma.s10_trauma_zone_typeCreateWithoutConstatsInput, Prisma.s10_trauma_zone_typeUncheckedCreateWithoutConstatsInput>;
};
export type s10_trauma_zone_typeUpsertWithoutConstatsInput = {
    update: Prisma.XOR<Prisma.s10_trauma_zone_typeUpdateWithoutConstatsInput, Prisma.s10_trauma_zone_typeUncheckedUpdateWithoutConstatsInput>;
    create: Prisma.XOR<Prisma.s10_trauma_zone_typeCreateWithoutConstatsInput, Prisma.s10_trauma_zone_typeUncheckedCreateWithoutConstatsInput>;
    where?: Prisma.s10_trauma_zone_typeWhereInput;
};
export type s10_trauma_zone_typeUpdateToOneWithWhereWithoutConstatsInput = {
    where?: Prisma.s10_trauma_zone_typeWhereInput;
    data: Prisma.XOR<Prisma.s10_trauma_zone_typeUpdateWithoutConstatsInput, Prisma.s10_trauma_zone_typeUncheckedUpdateWithoutConstatsInput>;
};
export type s10_trauma_zone_typeUpdateWithoutConstatsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s10_trauma_zone_typeUncheckedUpdateWithoutConstatsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
/**
 * Count Type S10_trauma_zone_typeCountOutputType
 */
export type S10_trauma_zone_typeCountOutputType = {
    constats: number;
};
export type S10_trauma_zone_typeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    constats?: boolean | S10_trauma_zone_typeCountOutputTypeCountConstatsArgs;
};
/**
 * S10_trauma_zone_typeCountOutputType without action
 */
export type S10_trauma_zone_typeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the S10_trauma_zone_typeCountOutputType
     */
    select?: Prisma.S10_trauma_zone_typeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * S10_trauma_zone_typeCountOutputType without action
 */
export type S10_trauma_zone_typeCountOutputTypeCountConstatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s10_trauma_constatWhereInput;
};
export type s10_trauma_zone_typeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
    constats?: boolean | Prisma.s10_trauma_zone_type$constatsArgs<ExtArgs>;
    _count?: boolean | Prisma.S10_trauma_zone_typeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s10_trauma_zone_type"]>;
export type s10_trauma_zone_typeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
}, ExtArgs["result"]["s10_trauma_zone_type"]>;
export type s10_trauma_zone_typeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
}, ExtArgs["result"]["s10_trauma_zone_type"]>;
export type s10_trauma_zone_typeSelectScalar = {
    id?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
};
export type s10_trauma_zone_typeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "libelle" | "actif", ExtArgs["result"]["s10_trauma_zone_type"]>;
export type s10_trauma_zone_typeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    constats?: boolean | Prisma.s10_trauma_zone_type$constatsArgs<ExtArgs>;
    _count?: boolean | Prisma.S10_trauma_zone_typeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type s10_trauma_zone_typeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type s10_trauma_zone_typeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $s10_trauma_zone_typePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s10_trauma_zone_type";
    objects: {
        constats: Prisma.$s10_trauma_constatPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        code: string;
        libelle: string;
        actif: boolean | null;
    }, ExtArgs["result"]["s10_trauma_zone_type"]>;
    composites: {};
};
export type s10_trauma_zone_typeGetPayload<S extends boolean | null | undefined | s10_trauma_zone_typeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s10_trauma_zone_typePayload, S>;
export type s10_trauma_zone_typeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s10_trauma_zone_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S10_trauma_zone_typeCountAggregateInputType | true;
};
export interface s10_trauma_zone_typeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s10_trauma_zone_type'];
        meta: {
            name: 's10_trauma_zone_type';
        };
    };
    /**
     * Find zero or one S10_trauma_zone_type that matches the filter.
     * @param {s10_trauma_zone_typeFindUniqueArgs} args - Arguments to find a S10_trauma_zone_type
     * @example
     * // Get one S10_trauma_zone_type
     * const s10_trauma_zone_type = await prisma.s10_trauma_zone_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s10_trauma_zone_typeFindUniqueArgs>(args: Prisma.SelectSubset<T, s10_trauma_zone_typeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_zone_typeClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_zone_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S10_trauma_zone_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s10_trauma_zone_typeFindUniqueOrThrowArgs} args - Arguments to find a S10_trauma_zone_type
     * @example
     * // Get one S10_trauma_zone_type
     * const s10_trauma_zone_type = await prisma.s10_trauma_zone_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s10_trauma_zone_typeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s10_trauma_zone_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_zone_typeClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_zone_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S10_trauma_zone_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s10_trauma_zone_typeFindFirstArgs} args - Arguments to find a S10_trauma_zone_type
     * @example
     * // Get one S10_trauma_zone_type
     * const s10_trauma_zone_type = await prisma.s10_trauma_zone_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s10_trauma_zone_typeFindFirstArgs>(args?: Prisma.SelectSubset<T, s10_trauma_zone_typeFindFirstArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_zone_typeClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_zone_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S10_trauma_zone_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s10_trauma_zone_typeFindFirstOrThrowArgs} args - Arguments to find a S10_trauma_zone_type
     * @example
     * // Get one S10_trauma_zone_type
     * const s10_trauma_zone_type = await prisma.s10_trauma_zone_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s10_trauma_zone_typeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s10_trauma_zone_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_zone_typeClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_zone_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S10_trauma_zone_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s10_trauma_zone_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S10_trauma_zone_types
     * const s10_trauma_zone_types = await prisma.s10_trauma_zone_type.findMany()
     *
     * // Get first 10 S10_trauma_zone_types
     * const s10_trauma_zone_types = await prisma.s10_trauma_zone_type.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s10_trauma_zone_typeWithIdOnly = await prisma.s10_trauma_zone_type.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s10_trauma_zone_typeFindManyArgs>(args?: Prisma.SelectSubset<T, s10_trauma_zone_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s10_trauma_zone_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S10_trauma_zone_type.
     * @param {s10_trauma_zone_typeCreateArgs} args - Arguments to create a S10_trauma_zone_type.
     * @example
     * // Create one S10_trauma_zone_type
     * const S10_trauma_zone_type = await prisma.s10_trauma_zone_type.create({
     *   data: {
     *     // ... data to create a S10_trauma_zone_type
     *   }
     * })
     *
     */
    create<T extends s10_trauma_zone_typeCreateArgs>(args: Prisma.SelectSubset<T, s10_trauma_zone_typeCreateArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_zone_typeClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_zone_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S10_trauma_zone_types.
     * @param {s10_trauma_zone_typeCreateManyArgs} args - Arguments to create many S10_trauma_zone_types.
     * @example
     * // Create many S10_trauma_zone_types
     * const s10_trauma_zone_type = await prisma.s10_trauma_zone_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s10_trauma_zone_typeCreateManyArgs>(args?: Prisma.SelectSubset<T, s10_trauma_zone_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S10_trauma_zone_types and returns the data saved in the database.
     * @param {s10_trauma_zone_typeCreateManyAndReturnArgs} args - Arguments to create many S10_trauma_zone_types.
     * @example
     * // Create many S10_trauma_zone_types
     * const s10_trauma_zone_type = await prisma.s10_trauma_zone_type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S10_trauma_zone_types and only return the `id`
     * const s10_trauma_zone_typeWithIdOnly = await prisma.s10_trauma_zone_type.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s10_trauma_zone_typeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s10_trauma_zone_typeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s10_trauma_zone_typePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S10_trauma_zone_type.
     * @param {s10_trauma_zone_typeDeleteArgs} args - Arguments to delete one S10_trauma_zone_type.
     * @example
     * // Delete one S10_trauma_zone_type
     * const S10_trauma_zone_type = await prisma.s10_trauma_zone_type.delete({
     *   where: {
     *     // ... filter to delete one S10_trauma_zone_type
     *   }
     * })
     *
     */
    delete<T extends s10_trauma_zone_typeDeleteArgs>(args: Prisma.SelectSubset<T, s10_trauma_zone_typeDeleteArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_zone_typeClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_zone_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S10_trauma_zone_type.
     * @param {s10_trauma_zone_typeUpdateArgs} args - Arguments to update one S10_trauma_zone_type.
     * @example
     * // Update one S10_trauma_zone_type
     * const s10_trauma_zone_type = await prisma.s10_trauma_zone_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s10_trauma_zone_typeUpdateArgs>(args: Prisma.SelectSubset<T, s10_trauma_zone_typeUpdateArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_zone_typeClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_zone_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S10_trauma_zone_types.
     * @param {s10_trauma_zone_typeDeleteManyArgs} args - Arguments to filter S10_trauma_zone_types to delete.
     * @example
     * // Delete a few S10_trauma_zone_types
     * const { count } = await prisma.s10_trauma_zone_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s10_trauma_zone_typeDeleteManyArgs>(args?: Prisma.SelectSubset<T, s10_trauma_zone_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S10_trauma_zone_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s10_trauma_zone_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S10_trauma_zone_types
     * const s10_trauma_zone_type = await prisma.s10_trauma_zone_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s10_trauma_zone_typeUpdateManyArgs>(args: Prisma.SelectSubset<T, s10_trauma_zone_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S10_trauma_zone_types and returns the data updated in the database.
     * @param {s10_trauma_zone_typeUpdateManyAndReturnArgs} args - Arguments to update many S10_trauma_zone_types.
     * @example
     * // Update many S10_trauma_zone_types
     * const s10_trauma_zone_type = await prisma.s10_trauma_zone_type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S10_trauma_zone_types and only return the `id`
     * const s10_trauma_zone_typeWithIdOnly = await prisma.s10_trauma_zone_type.updateManyAndReturn({
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
    updateManyAndReturn<T extends s10_trauma_zone_typeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s10_trauma_zone_typeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s10_trauma_zone_typePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S10_trauma_zone_type.
     * @param {s10_trauma_zone_typeUpsertArgs} args - Arguments to update or create a S10_trauma_zone_type.
     * @example
     * // Update or create a S10_trauma_zone_type
     * const s10_trauma_zone_type = await prisma.s10_trauma_zone_type.upsert({
     *   create: {
     *     // ... data to create a S10_trauma_zone_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S10_trauma_zone_type we want to update
     *   }
     * })
     */
    upsert<T extends s10_trauma_zone_typeUpsertArgs>(args: Prisma.SelectSubset<T, s10_trauma_zone_typeUpsertArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_zone_typeClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_zone_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S10_trauma_zone_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s10_trauma_zone_typeCountArgs} args - Arguments to filter S10_trauma_zone_types to count.
     * @example
     * // Count the number of S10_trauma_zone_types
     * const count = await prisma.s10_trauma_zone_type.count({
     *   where: {
     *     // ... the filter for the S10_trauma_zone_types we want to count
     *   }
     * })
    **/
    count<T extends s10_trauma_zone_typeCountArgs>(args?: Prisma.Subset<T, s10_trauma_zone_typeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S10_trauma_zone_typeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S10_trauma_zone_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S10_trauma_zone_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S10_trauma_zone_typeAggregateArgs>(args: Prisma.Subset<T, S10_trauma_zone_typeAggregateArgs>): Prisma.PrismaPromise<GetS10_trauma_zone_typeAggregateType<T>>;
    /**
     * Group by S10_trauma_zone_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s10_trauma_zone_typeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s10_trauma_zone_typeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s10_trauma_zone_typeGroupByArgs['orderBy'];
    } : {
        orderBy?: s10_trauma_zone_typeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s10_trauma_zone_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS10_trauma_zone_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s10_trauma_zone_type model
     */
    readonly fields: s10_trauma_zone_typeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s10_trauma_zone_type.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s10_trauma_zone_typeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    constats<T extends Prisma.s10_trauma_zone_type$constatsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.s10_trauma_zone_type$constatsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s10_trauma_constatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the s10_trauma_zone_type model
 */
export interface s10_trauma_zone_typeFieldRefs {
    readonly id: Prisma.FieldRef<"s10_trauma_zone_type", 'Int'>;
    readonly code: Prisma.FieldRef<"s10_trauma_zone_type", 'String'>;
    readonly libelle: Prisma.FieldRef<"s10_trauma_zone_type", 'String'>;
    readonly actif: Prisma.FieldRef<"s10_trauma_zone_type", 'Boolean'>;
}
/**
 * s10_trauma_zone_type findUnique
 */
export type s10_trauma_zone_typeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_zone_type
     */
    select?: Prisma.s10_trauma_zone_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_zone_type
     */
    omit?: Prisma.s10_trauma_zone_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_zone_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s10_trauma_zone_type to fetch.
     */
    where: Prisma.s10_trauma_zone_typeWhereUniqueInput;
};
/**
 * s10_trauma_zone_type findUniqueOrThrow
 */
export type s10_trauma_zone_typeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_zone_type
     */
    select?: Prisma.s10_trauma_zone_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_zone_type
     */
    omit?: Prisma.s10_trauma_zone_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_zone_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s10_trauma_zone_type to fetch.
     */
    where: Prisma.s10_trauma_zone_typeWhereUniqueInput;
};
/**
 * s10_trauma_zone_type findFirst
 */
export type s10_trauma_zone_typeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_zone_type
     */
    select?: Prisma.s10_trauma_zone_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_zone_type
     */
    omit?: Prisma.s10_trauma_zone_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_zone_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s10_trauma_zone_type to fetch.
     */
    where?: Prisma.s10_trauma_zone_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s10_trauma_zone_types to fetch.
     */
    orderBy?: Prisma.s10_trauma_zone_typeOrderByWithRelationInput | Prisma.s10_trauma_zone_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s10_trauma_zone_types.
     */
    cursor?: Prisma.s10_trauma_zone_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s10_trauma_zone_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s10_trauma_zone_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s10_trauma_zone_types.
     */
    distinct?: Prisma.S10_trauma_zone_typeScalarFieldEnum | Prisma.S10_trauma_zone_typeScalarFieldEnum[];
};
/**
 * s10_trauma_zone_type findFirstOrThrow
 */
export type s10_trauma_zone_typeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_zone_type
     */
    select?: Prisma.s10_trauma_zone_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_zone_type
     */
    omit?: Prisma.s10_trauma_zone_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_zone_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s10_trauma_zone_type to fetch.
     */
    where?: Prisma.s10_trauma_zone_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s10_trauma_zone_types to fetch.
     */
    orderBy?: Prisma.s10_trauma_zone_typeOrderByWithRelationInput | Prisma.s10_trauma_zone_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s10_trauma_zone_types.
     */
    cursor?: Prisma.s10_trauma_zone_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s10_trauma_zone_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s10_trauma_zone_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s10_trauma_zone_types.
     */
    distinct?: Prisma.S10_trauma_zone_typeScalarFieldEnum | Prisma.S10_trauma_zone_typeScalarFieldEnum[];
};
/**
 * s10_trauma_zone_type findMany
 */
export type s10_trauma_zone_typeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_zone_type
     */
    select?: Prisma.s10_trauma_zone_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_zone_type
     */
    omit?: Prisma.s10_trauma_zone_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_zone_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s10_trauma_zone_types to fetch.
     */
    where?: Prisma.s10_trauma_zone_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s10_trauma_zone_types to fetch.
     */
    orderBy?: Prisma.s10_trauma_zone_typeOrderByWithRelationInput | Prisma.s10_trauma_zone_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s10_trauma_zone_types.
     */
    cursor?: Prisma.s10_trauma_zone_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s10_trauma_zone_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s10_trauma_zone_types.
     */
    skip?: number;
    distinct?: Prisma.S10_trauma_zone_typeScalarFieldEnum | Prisma.S10_trauma_zone_typeScalarFieldEnum[];
};
/**
 * s10_trauma_zone_type create
 */
export type s10_trauma_zone_typeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_zone_type
     */
    select?: Prisma.s10_trauma_zone_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_zone_type
     */
    omit?: Prisma.s10_trauma_zone_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_zone_typeInclude<ExtArgs> | null;
    /**
     * The data needed to create a s10_trauma_zone_type.
     */
    data: Prisma.XOR<Prisma.s10_trauma_zone_typeCreateInput, Prisma.s10_trauma_zone_typeUncheckedCreateInput>;
};
/**
 * s10_trauma_zone_type createMany
 */
export type s10_trauma_zone_typeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s10_trauma_zone_types.
     */
    data: Prisma.s10_trauma_zone_typeCreateManyInput | Prisma.s10_trauma_zone_typeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s10_trauma_zone_type createManyAndReturn
 */
export type s10_trauma_zone_typeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_zone_type
     */
    select?: Prisma.s10_trauma_zone_typeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_zone_type
     */
    omit?: Prisma.s10_trauma_zone_typeOmit<ExtArgs> | null;
    /**
     * The data used to create many s10_trauma_zone_types.
     */
    data: Prisma.s10_trauma_zone_typeCreateManyInput | Prisma.s10_trauma_zone_typeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s10_trauma_zone_type update
 */
export type s10_trauma_zone_typeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_zone_type
     */
    select?: Prisma.s10_trauma_zone_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_zone_type
     */
    omit?: Prisma.s10_trauma_zone_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_zone_typeInclude<ExtArgs> | null;
    /**
     * The data needed to update a s10_trauma_zone_type.
     */
    data: Prisma.XOR<Prisma.s10_trauma_zone_typeUpdateInput, Prisma.s10_trauma_zone_typeUncheckedUpdateInput>;
    /**
     * Choose, which s10_trauma_zone_type to update.
     */
    where: Prisma.s10_trauma_zone_typeWhereUniqueInput;
};
/**
 * s10_trauma_zone_type updateMany
 */
export type s10_trauma_zone_typeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s10_trauma_zone_types.
     */
    data: Prisma.XOR<Prisma.s10_trauma_zone_typeUpdateManyMutationInput, Prisma.s10_trauma_zone_typeUncheckedUpdateManyInput>;
    /**
     * Filter which s10_trauma_zone_types to update
     */
    where?: Prisma.s10_trauma_zone_typeWhereInput;
    /**
     * Limit how many s10_trauma_zone_types to update.
     */
    limit?: number;
};
/**
 * s10_trauma_zone_type updateManyAndReturn
 */
export type s10_trauma_zone_typeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_zone_type
     */
    select?: Prisma.s10_trauma_zone_typeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_zone_type
     */
    omit?: Prisma.s10_trauma_zone_typeOmit<ExtArgs> | null;
    /**
     * The data used to update s10_trauma_zone_types.
     */
    data: Prisma.XOR<Prisma.s10_trauma_zone_typeUpdateManyMutationInput, Prisma.s10_trauma_zone_typeUncheckedUpdateManyInput>;
    /**
     * Filter which s10_trauma_zone_types to update
     */
    where?: Prisma.s10_trauma_zone_typeWhereInput;
    /**
     * Limit how many s10_trauma_zone_types to update.
     */
    limit?: number;
};
/**
 * s10_trauma_zone_type upsert
 */
export type s10_trauma_zone_typeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_zone_type
     */
    select?: Prisma.s10_trauma_zone_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_zone_type
     */
    omit?: Prisma.s10_trauma_zone_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_zone_typeInclude<ExtArgs> | null;
    /**
     * The filter to search for the s10_trauma_zone_type to update in case it exists.
     */
    where: Prisma.s10_trauma_zone_typeWhereUniqueInput;
    /**
     * In case the s10_trauma_zone_type found by the `where` argument doesn't exist, create a new s10_trauma_zone_type with this data.
     */
    create: Prisma.XOR<Prisma.s10_trauma_zone_typeCreateInput, Prisma.s10_trauma_zone_typeUncheckedCreateInput>;
    /**
     * In case the s10_trauma_zone_type was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s10_trauma_zone_typeUpdateInput, Prisma.s10_trauma_zone_typeUncheckedUpdateInput>;
};
/**
 * s10_trauma_zone_type delete
 */
export type s10_trauma_zone_typeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_zone_type
     */
    select?: Prisma.s10_trauma_zone_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_zone_type
     */
    omit?: Prisma.s10_trauma_zone_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_zone_typeInclude<ExtArgs> | null;
    /**
     * Filter which s10_trauma_zone_type to delete.
     */
    where: Prisma.s10_trauma_zone_typeWhereUniqueInput;
};
/**
 * s10_trauma_zone_type deleteMany
 */
export type s10_trauma_zone_typeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s10_trauma_zone_types to delete
     */
    where?: Prisma.s10_trauma_zone_typeWhereInput;
    /**
     * Limit how many s10_trauma_zone_types to delete.
     */
    limit?: number;
};
/**
 * s10_trauma_zone_type.constats
 */
export type s10_trauma_zone_type$constatsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.s10_trauma_constatWhereInput;
    orderBy?: Prisma.s10_trauma_constatOrderByWithRelationInput | Prisma.s10_trauma_constatOrderByWithRelationInput[];
    cursor?: Prisma.s10_trauma_constatWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.S10_trauma_constatScalarFieldEnum | Prisma.S10_trauma_constatScalarFieldEnum[];
};
/**
 * s10_trauma_zone_type without action
 */
export type s10_trauma_zone_typeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_zone_type
     */
    select?: Prisma.s10_trauma_zone_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_zone_type
     */
    omit?: Prisma.s10_trauma_zone_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_zone_typeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s10_trauma_zone_type.d.ts.map