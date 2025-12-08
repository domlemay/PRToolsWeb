import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s09_mecanisme_trauma_type
 *
 */
export type s09_mecanisme_trauma_typeModel = runtime.Types.Result.DefaultSelection<Prisma.$s09_mecanisme_trauma_typePayload>;
export type AggregateS09_mecanisme_trauma_type = {
    _count: S09_mecanisme_trauma_typeCountAggregateOutputType | null;
    _avg: S09_mecanisme_trauma_typeAvgAggregateOutputType | null;
    _sum: S09_mecanisme_trauma_typeSumAggregateOutputType | null;
    _min: S09_mecanisme_trauma_typeMinAggregateOutputType | null;
    _max: S09_mecanisme_trauma_typeMaxAggregateOutputType | null;
};
export type S09_mecanisme_trauma_typeAvgAggregateOutputType = {
    id: number | null;
};
export type S09_mecanisme_trauma_typeSumAggregateOutputType = {
    id: number | null;
};
export type S09_mecanisme_trauma_typeMinAggregateOutputType = {
    id: number | null;
    code: string | null;
    libelle: string | null;
    actif: boolean | null;
};
export type S09_mecanisme_trauma_typeMaxAggregateOutputType = {
    id: number | null;
    code: string | null;
    libelle: string | null;
    actif: boolean | null;
};
export type S09_mecanisme_trauma_typeCountAggregateOutputType = {
    id: number;
    code: number;
    libelle: number;
    actif: number;
    _all: number;
};
export type S09_mecanisme_trauma_typeAvgAggregateInputType = {
    id?: true;
};
export type S09_mecanisme_trauma_typeSumAggregateInputType = {
    id?: true;
};
export type S09_mecanisme_trauma_typeMinAggregateInputType = {
    id?: true;
    code?: true;
    libelle?: true;
    actif?: true;
};
export type S09_mecanisme_trauma_typeMaxAggregateInputType = {
    id?: true;
    code?: true;
    libelle?: true;
    actif?: true;
};
export type S09_mecanisme_trauma_typeCountAggregateInputType = {
    id?: true;
    code?: true;
    libelle?: true;
    actif?: true;
    _all?: true;
};
export type S09_mecanisme_trauma_typeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s09_mecanisme_trauma_type to aggregate.
     */
    where?: Prisma.s09_mecanisme_trauma_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s09_mecanisme_trauma_types to fetch.
     */
    orderBy?: Prisma.s09_mecanisme_trauma_typeOrderByWithRelationInput | Prisma.s09_mecanisme_trauma_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s09_mecanisme_trauma_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s09_mecanisme_trauma_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s09_mecanisme_trauma_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s09_mecanisme_trauma_types
    **/
    _count?: true | S09_mecanisme_trauma_typeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S09_mecanisme_trauma_typeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S09_mecanisme_trauma_typeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S09_mecanisme_trauma_typeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S09_mecanisme_trauma_typeMaxAggregateInputType;
};
export type GetS09_mecanisme_trauma_typeAggregateType<T extends S09_mecanisme_trauma_typeAggregateArgs> = {
    [P in keyof T & keyof AggregateS09_mecanisme_trauma_type]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS09_mecanisme_trauma_type[P]> : Prisma.GetScalarType<T[P], AggregateS09_mecanisme_trauma_type[P]>;
};
export type s09_mecanisme_trauma_typeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s09_mecanisme_trauma_typeWhereInput;
    orderBy?: Prisma.s09_mecanisme_trauma_typeOrderByWithAggregationInput | Prisma.s09_mecanisme_trauma_typeOrderByWithAggregationInput[];
    by: Prisma.S09_mecanisme_trauma_typeScalarFieldEnum[] | Prisma.S09_mecanisme_trauma_typeScalarFieldEnum;
    having?: Prisma.s09_mecanisme_trauma_typeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S09_mecanisme_trauma_typeCountAggregateInputType | true;
    _avg?: S09_mecanisme_trauma_typeAvgAggregateInputType;
    _sum?: S09_mecanisme_trauma_typeSumAggregateInputType;
    _min?: S09_mecanisme_trauma_typeMinAggregateInputType;
    _max?: S09_mecanisme_trauma_typeMaxAggregateInputType;
};
export type S09_mecanisme_trauma_typeGroupByOutputType = {
    id: number;
    code: string;
    libelle: string;
    actif: boolean | null;
    _count: S09_mecanisme_trauma_typeCountAggregateOutputType | null;
    _avg: S09_mecanisme_trauma_typeAvgAggregateOutputType | null;
    _sum: S09_mecanisme_trauma_typeSumAggregateOutputType | null;
    _min: S09_mecanisme_trauma_typeMinAggregateOutputType | null;
    _max: S09_mecanisme_trauma_typeMaxAggregateOutputType | null;
};
type GetS09_mecanisme_trauma_typeGroupByPayload<T extends s09_mecanisme_trauma_typeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S09_mecanisme_trauma_typeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S09_mecanisme_trauma_typeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S09_mecanisme_trauma_typeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S09_mecanisme_trauma_typeGroupByOutputType[P]>;
}>>;
export type s09_mecanisme_trauma_typeWhereInput = {
    AND?: Prisma.s09_mecanisme_trauma_typeWhereInput | Prisma.s09_mecanisme_trauma_typeWhereInput[];
    OR?: Prisma.s09_mecanisme_trauma_typeWhereInput[];
    NOT?: Prisma.s09_mecanisme_trauma_typeWhereInput | Prisma.s09_mecanisme_trauma_typeWhereInput[];
    id?: Prisma.IntFilter<"s09_mecanisme_trauma_type"> | number;
    code?: Prisma.StringFilter<"s09_mecanisme_trauma_type"> | string;
    libelle?: Prisma.StringFilter<"s09_mecanisme_trauma_type"> | string;
    actif?: Prisma.BoolNullableFilter<"s09_mecanisme_trauma_type"> | boolean | null;
    rapports?: Prisma.S09_rapport_mecanisme_traumaListRelationFilter;
};
export type s09_mecanisme_trauma_typeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapports?: Prisma.s09_rapport_mecanisme_traumaOrderByRelationAggregateInput;
};
export type s09_mecanisme_trauma_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.s09_mecanisme_trauma_typeWhereInput | Prisma.s09_mecanisme_trauma_typeWhereInput[];
    OR?: Prisma.s09_mecanisme_trauma_typeWhereInput[];
    NOT?: Prisma.s09_mecanisme_trauma_typeWhereInput | Prisma.s09_mecanisme_trauma_typeWhereInput[];
    code?: Prisma.StringFilter<"s09_mecanisme_trauma_type"> | string;
    libelle?: Prisma.StringFilter<"s09_mecanisme_trauma_type"> | string;
    actif?: Prisma.BoolNullableFilter<"s09_mecanisme_trauma_type"> | boolean | null;
    rapports?: Prisma.S09_rapport_mecanisme_traumaListRelationFilter;
}, "id">;
export type s09_mecanisme_trauma_typeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s09_mecanisme_trauma_typeCountOrderByAggregateInput;
    _avg?: Prisma.s09_mecanisme_trauma_typeAvgOrderByAggregateInput;
    _max?: Prisma.s09_mecanisme_trauma_typeMaxOrderByAggregateInput;
    _min?: Prisma.s09_mecanisme_trauma_typeMinOrderByAggregateInput;
    _sum?: Prisma.s09_mecanisme_trauma_typeSumOrderByAggregateInput;
};
export type s09_mecanisme_trauma_typeScalarWhereWithAggregatesInput = {
    AND?: Prisma.s09_mecanisme_trauma_typeScalarWhereWithAggregatesInput | Prisma.s09_mecanisme_trauma_typeScalarWhereWithAggregatesInput[];
    OR?: Prisma.s09_mecanisme_trauma_typeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s09_mecanisme_trauma_typeScalarWhereWithAggregatesInput | Prisma.s09_mecanisme_trauma_typeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s09_mecanisme_trauma_type"> | number;
    code?: Prisma.StringWithAggregatesFilter<"s09_mecanisme_trauma_type"> | string;
    libelle?: Prisma.StringWithAggregatesFilter<"s09_mecanisme_trauma_type"> | string;
    actif?: Prisma.BoolNullableWithAggregatesFilter<"s09_mecanisme_trauma_type"> | boolean | null;
};
export type s09_mecanisme_trauma_typeCreateInput = {
    code: string;
    libelle: string;
    actif?: boolean | null;
    rapports?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutMecanismeInput;
};
export type s09_mecanisme_trauma_typeUncheckedCreateInput = {
    id?: number;
    code: string;
    libelle: string;
    actif?: boolean | null;
    rapports?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutMecanismeInput;
};
export type s09_mecanisme_trauma_typeUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    rapports?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutMecanismeNestedInput;
};
export type s09_mecanisme_trauma_typeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    rapports?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutMecanismeNestedInput;
};
export type s09_mecanisme_trauma_typeCreateManyInput = {
    id?: number;
    code: string;
    libelle: string;
    actif?: boolean | null;
};
export type s09_mecanisme_trauma_typeUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s09_mecanisme_trauma_typeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s09_mecanisme_trauma_typeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type s09_mecanisme_trauma_typeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type s09_mecanisme_trauma_typeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type s09_mecanisme_trauma_typeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type s09_mecanisme_trauma_typeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type S09_mecanisme_trauma_typeScalarRelationFilter = {
    is?: Prisma.s09_mecanisme_trauma_typeWhereInput;
    isNot?: Prisma.s09_mecanisme_trauma_typeWhereInput;
};
export type s09_mecanisme_trauma_typeCreateNestedOneWithoutRapportsInput = {
    create?: Prisma.XOR<Prisma.s09_mecanisme_trauma_typeCreateWithoutRapportsInput, Prisma.s09_mecanisme_trauma_typeUncheckedCreateWithoutRapportsInput>;
    connectOrCreate?: Prisma.s09_mecanisme_trauma_typeCreateOrConnectWithoutRapportsInput;
    connect?: Prisma.s09_mecanisme_trauma_typeWhereUniqueInput;
};
export type s09_mecanisme_trauma_typeUpdateOneRequiredWithoutRapportsNestedInput = {
    create?: Prisma.XOR<Prisma.s09_mecanisme_trauma_typeCreateWithoutRapportsInput, Prisma.s09_mecanisme_trauma_typeUncheckedCreateWithoutRapportsInput>;
    connectOrCreate?: Prisma.s09_mecanisme_trauma_typeCreateOrConnectWithoutRapportsInput;
    upsert?: Prisma.s09_mecanisme_trauma_typeUpsertWithoutRapportsInput;
    connect?: Prisma.s09_mecanisme_trauma_typeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s09_mecanisme_trauma_typeUpdateToOneWithWhereWithoutRapportsInput, Prisma.s09_mecanisme_trauma_typeUpdateWithoutRapportsInput>, Prisma.s09_mecanisme_trauma_typeUncheckedUpdateWithoutRapportsInput>;
};
export type s09_mecanisme_trauma_typeCreateWithoutRapportsInput = {
    code: string;
    libelle: string;
    actif?: boolean | null;
};
export type s09_mecanisme_trauma_typeUncheckedCreateWithoutRapportsInput = {
    id?: number;
    code: string;
    libelle: string;
    actif?: boolean | null;
};
export type s09_mecanisme_trauma_typeCreateOrConnectWithoutRapportsInput = {
    where: Prisma.s09_mecanisme_trauma_typeWhereUniqueInput;
    create: Prisma.XOR<Prisma.s09_mecanisme_trauma_typeCreateWithoutRapportsInput, Prisma.s09_mecanisme_trauma_typeUncheckedCreateWithoutRapportsInput>;
};
export type s09_mecanisme_trauma_typeUpsertWithoutRapportsInput = {
    update: Prisma.XOR<Prisma.s09_mecanisme_trauma_typeUpdateWithoutRapportsInput, Prisma.s09_mecanisme_trauma_typeUncheckedUpdateWithoutRapportsInput>;
    create: Prisma.XOR<Prisma.s09_mecanisme_trauma_typeCreateWithoutRapportsInput, Prisma.s09_mecanisme_trauma_typeUncheckedCreateWithoutRapportsInput>;
    where?: Prisma.s09_mecanisme_trauma_typeWhereInput;
};
export type s09_mecanisme_trauma_typeUpdateToOneWithWhereWithoutRapportsInput = {
    where?: Prisma.s09_mecanisme_trauma_typeWhereInput;
    data: Prisma.XOR<Prisma.s09_mecanisme_trauma_typeUpdateWithoutRapportsInput, Prisma.s09_mecanisme_trauma_typeUncheckedUpdateWithoutRapportsInput>;
};
export type s09_mecanisme_trauma_typeUpdateWithoutRapportsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s09_mecanisme_trauma_typeUncheckedUpdateWithoutRapportsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
/**
 * Count Type S09_mecanisme_trauma_typeCountOutputType
 */
export type S09_mecanisme_trauma_typeCountOutputType = {
    rapports: number;
};
export type S09_mecanisme_trauma_typeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapports?: boolean | S09_mecanisme_trauma_typeCountOutputTypeCountRapportsArgs;
};
/**
 * S09_mecanisme_trauma_typeCountOutputType without action
 */
export type S09_mecanisme_trauma_typeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the S09_mecanisme_trauma_typeCountOutputType
     */
    select?: Prisma.S09_mecanisme_trauma_typeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * S09_mecanisme_trauma_typeCountOutputType without action
 */
export type S09_mecanisme_trauma_typeCountOutputTypeCountRapportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s09_rapport_mecanisme_traumaWhereInput;
};
export type s09_mecanisme_trauma_typeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
    rapports?: boolean | Prisma.s09_mecanisme_trauma_type$rapportsArgs<ExtArgs>;
    _count?: boolean | Prisma.S09_mecanisme_trauma_typeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s09_mecanisme_trauma_type"]>;
export type s09_mecanisme_trauma_typeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
}, ExtArgs["result"]["s09_mecanisme_trauma_type"]>;
export type s09_mecanisme_trauma_typeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
}, ExtArgs["result"]["s09_mecanisme_trauma_type"]>;
export type s09_mecanisme_trauma_typeSelectScalar = {
    id?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
};
export type s09_mecanisme_trauma_typeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "libelle" | "actif", ExtArgs["result"]["s09_mecanisme_trauma_type"]>;
export type s09_mecanisme_trauma_typeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapports?: boolean | Prisma.s09_mecanisme_trauma_type$rapportsArgs<ExtArgs>;
    _count?: boolean | Prisma.S09_mecanisme_trauma_typeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type s09_mecanisme_trauma_typeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type s09_mecanisme_trauma_typeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $s09_mecanisme_trauma_typePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s09_mecanisme_trauma_type";
    objects: {
        rapports: Prisma.$s09_rapport_mecanisme_traumaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        code: string;
        libelle: string;
        actif: boolean | null;
    }, ExtArgs["result"]["s09_mecanisme_trauma_type"]>;
    composites: {};
};
export type s09_mecanisme_trauma_typeGetPayload<S extends boolean | null | undefined | s09_mecanisme_trauma_typeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_typePayload, S>;
export type s09_mecanisme_trauma_typeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s09_mecanisme_trauma_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S09_mecanisme_trauma_typeCountAggregateInputType | true;
};
export interface s09_mecanisme_trauma_typeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s09_mecanisme_trauma_type'];
        meta: {
            name: 's09_mecanisme_trauma_type';
        };
    };
    /**
     * Find zero or one S09_mecanisme_trauma_type that matches the filter.
     * @param {s09_mecanisme_trauma_typeFindUniqueArgs} args - Arguments to find a S09_mecanisme_trauma_type
     * @example
     * // Get one S09_mecanisme_trauma_type
     * const s09_mecanisme_trauma_type = await prisma.s09_mecanisme_trauma_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s09_mecanisme_trauma_typeFindUniqueArgs>(args: Prisma.SelectSubset<T, s09_mecanisme_trauma_typeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s09_mecanisme_trauma_typeClient<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S09_mecanisme_trauma_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s09_mecanisme_trauma_typeFindUniqueOrThrowArgs} args - Arguments to find a S09_mecanisme_trauma_type
     * @example
     * // Get one S09_mecanisme_trauma_type
     * const s09_mecanisme_trauma_type = await prisma.s09_mecanisme_trauma_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s09_mecanisme_trauma_typeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s09_mecanisme_trauma_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s09_mecanisme_trauma_typeClient<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S09_mecanisme_trauma_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s09_mecanisme_trauma_typeFindFirstArgs} args - Arguments to find a S09_mecanisme_trauma_type
     * @example
     * // Get one S09_mecanisme_trauma_type
     * const s09_mecanisme_trauma_type = await prisma.s09_mecanisme_trauma_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s09_mecanisme_trauma_typeFindFirstArgs>(args?: Prisma.SelectSubset<T, s09_mecanisme_trauma_typeFindFirstArgs<ExtArgs>>): Prisma.Prisma__s09_mecanisme_trauma_typeClient<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S09_mecanisme_trauma_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s09_mecanisme_trauma_typeFindFirstOrThrowArgs} args - Arguments to find a S09_mecanisme_trauma_type
     * @example
     * // Get one S09_mecanisme_trauma_type
     * const s09_mecanisme_trauma_type = await prisma.s09_mecanisme_trauma_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s09_mecanisme_trauma_typeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s09_mecanisme_trauma_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s09_mecanisme_trauma_typeClient<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S09_mecanisme_trauma_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s09_mecanisme_trauma_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S09_mecanisme_trauma_types
     * const s09_mecanisme_trauma_types = await prisma.s09_mecanisme_trauma_type.findMany()
     *
     * // Get first 10 S09_mecanisme_trauma_types
     * const s09_mecanisme_trauma_types = await prisma.s09_mecanisme_trauma_type.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s09_mecanisme_trauma_typeWithIdOnly = await prisma.s09_mecanisme_trauma_type.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s09_mecanisme_trauma_typeFindManyArgs>(args?: Prisma.SelectSubset<T, s09_mecanisme_trauma_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S09_mecanisme_trauma_type.
     * @param {s09_mecanisme_trauma_typeCreateArgs} args - Arguments to create a S09_mecanisme_trauma_type.
     * @example
     * // Create one S09_mecanisme_trauma_type
     * const S09_mecanisme_trauma_type = await prisma.s09_mecanisme_trauma_type.create({
     *   data: {
     *     // ... data to create a S09_mecanisme_trauma_type
     *   }
     * })
     *
     */
    create<T extends s09_mecanisme_trauma_typeCreateArgs>(args: Prisma.SelectSubset<T, s09_mecanisme_trauma_typeCreateArgs<ExtArgs>>): Prisma.Prisma__s09_mecanisme_trauma_typeClient<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S09_mecanisme_trauma_types.
     * @param {s09_mecanisme_trauma_typeCreateManyArgs} args - Arguments to create many S09_mecanisme_trauma_types.
     * @example
     * // Create many S09_mecanisme_trauma_types
     * const s09_mecanisme_trauma_type = await prisma.s09_mecanisme_trauma_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s09_mecanisme_trauma_typeCreateManyArgs>(args?: Prisma.SelectSubset<T, s09_mecanisme_trauma_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S09_mecanisme_trauma_types and returns the data saved in the database.
     * @param {s09_mecanisme_trauma_typeCreateManyAndReturnArgs} args - Arguments to create many S09_mecanisme_trauma_types.
     * @example
     * // Create many S09_mecanisme_trauma_types
     * const s09_mecanisme_trauma_type = await prisma.s09_mecanisme_trauma_type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S09_mecanisme_trauma_types and only return the `id`
     * const s09_mecanisme_trauma_typeWithIdOnly = await prisma.s09_mecanisme_trauma_type.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s09_mecanisme_trauma_typeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s09_mecanisme_trauma_typeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_typePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S09_mecanisme_trauma_type.
     * @param {s09_mecanisme_trauma_typeDeleteArgs} args - Arguments to delete one S09_mecanisme_trauma_type.
     * @example
     * // Delete one S09_mecanisme_trauma_type
     * const S09_mecanisme_trauma_type = await prisma.s09_mecanisme_trauma_type.delete({
     *   where: {
     *     // ... filter to delete one S09_mecanisme_trauma_type
     *   }
     * })
     *
     */
    delete<T extends s09_mecanisme_trauma_typeDeleteArgs>(args: Prisma.SelectSubset<T, s09_mecanisme_trauma_typeDeleteArgs<ExtArgs>>): Prisma.Prisma__s09_mecanisme_trauma_typeClient<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S09_mecanisme_trauma_type.
     * @param {s09_mecanisme_trauma_typeUpdateArgs} args - Arguments to update one S09_mecanisme_trauma_type.
     * @example
     * // Update one S09_mecanisme_trauma_type
     * const s09_mecanisme_trauma_type = await prisma.s09_mecanisme_trauma_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s09_mecanisme_trauma_typeUpdateArgs>(args: Prisma.SelectSubset<T, s09_mecanisme_trauma_typeUpdateArgs<ExtArgs>>): Prisma.Prisma__s09_mecanisme_trauma_typeClient<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S09_mecanisme_trauma_types.
     * @param {s09_mecanisme_trauma_typeDeleteManyArgs} args - Arguments to filter S09_mecanisme_trauma_types to delete.
     * @example
     * // Delete a few S09_mecanisme_trauma_types
     * const { count } = await prisma.s09_mecanisme_trauma_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s09_mecanisme_trauma_typeDeleteManyArgs>(args?: Prisma.SelectSubset<T, s09_mecanisme_trauma_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S09_mecanisme_trauma_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s09_mecanisme_trauma_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S09_mecanisme_trauma_types
     * const s09_mecanisme_trauma_type = await prisma.s09_mecanisme_trauma_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s09_mecanisme_trauma_typeUpdateManyArgs>(args: Prisma.SelectSubset<T, s09_mecanisme_trauma_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S09_mecanisme_trauma_types and returns the data updated in the database.
     * @param {s09_mecanisme_trauma_typeUpdateManyAndReturnArgs} args - Arguments to update many S09_mecanisme_trauma_types.
     * @example
     * // Update many S09_mecanisme_trauma_types
     * const s09_mecanisme_trauma_type = await prisma.s09_mecanisme_trauma_type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S09_mecanisme_trauma_types and only return the `id`
     * const s09_mecanisme_trauma_typeWithIdOnly = await prisma.s09_mecanisme_trauma_type.updateManyAndReturn({
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
    updateManyAndReturn<T extends s09_mecanisme_trauma_typeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s09_mecanisme_trauma_typeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_typePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S09_mecanisme_trauma_type.
     * @param {s09_mecanisme_trauma_typeUpsertArgs} args - Arguments to update or create a S09_mecanisme_trauma_type.
     * @example
     * // Update or create a S09_mecanisme_trauma_type
     * const s09_mecanisme_trauma_type = await prisma.s09_mecanisme_trauma_type.upsert({
     *   create: {
     *     // ... data to create a S09_mecanisme_trauma_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S09_mecanisme_trauma_type we want to update
     *   }
     * })
     */
    upsert<T extends s09_mecanisme_trauma_typeUpsertArgs>(args: Prisma.SelectSubset<T, s09_mecanisme_trauma_typeUpsertArgs<ExtArgs>>): Prisma.Prisma__s09_mecanisme_trauma_typeClient<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S09_mecanisme_trauma_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s09_mecanisme_trauma_typeCountArgs} args - Arguments to filter S09_mecanisme_trauma_types to count.
     * @example
     * // Count the number of S09_mecanisme_trauma_types
     * const count = await prisma.s09_mecanisme_trauma_type.count({
     *   where: {
     *     // ... the filter for the S09_mecanisme_trauma_types we want to count
     *   }
     * })
    **/
    count<T extends s09_mecanisme_trauma_typeCountArgs>(args?: Prisma.Subset<T, s09_mecanisme_trauma_typeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S09_mecanisme_trauma_typeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S09_mecanisme_trauma_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S09_mecanisme_trauma_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S09_mecanisme_trauma_typeAggregateArgs>(args: Prisma.Subset<T, S09_mecanisme_trauma_typeAggregateArgs>): Prisma.PrismaPromise<GetS09_mecanisme_trauma_typeAggregateType<T>>;
    /**
     * Group by S09_mecanisme_trauma_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s09_mecanisme_trauma_typeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s09_mecanisme_trauma_typeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s09_mecanisme_trauma_typeGroupByArgs['orderBy'];
    } : {
        orderBy?: s09_mecanisme_trauma_typeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s09_mecanisme_trauma_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS09_mecanisme_trauma_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s09_mecanisme_trauma_type model
     */
    readonly fields: s09_mecanisme_trauma_typeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s09_mecanisme_trauma_type.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s09_mecanisme_trauma_typeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rapports<T extends Prisma.s09_mecanisme_trauma_type$rapportsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.s09_mecanisme_trauma_type$rapportsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s09_rapport_mecanisme_traumaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the s09_mecanisme_trauma_type model
 */
export interface s09_mecanisme_trauma_typeFieldRefs {
    readonly id: Prisma.FieldRef<"s09_mecanisme_trauma_type", 'Int'>;
    readonly code: Prisma.FieldRef<"s09_mecanisme_trauma_type", 'String'>;
    readonly libelle: Prisma.FieldRef<"s09_mecanisme_trauma_type", 'String'>;
    readonly actif: Prisma.FieldRef<"s09_mecanisme_trauma_type", 'Boolean'>;
}
/**
 * s09_mecanisme_trauma_type findUnique
 */
export type s09_mecanisme_trauma_typeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_type
     */
    select?: Prisma.s09_mecanisme_trauma_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_type
     */
    omit?: Prisma.s09_mecanisme_trauma_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s09_mecanisme_trauma_type to fetch.
     */
    where: Prisma.s09_mecanisme_trauma_typeWhereUniqueInput;
};
/**
 * s09_mecanisme_trauma_type findUniqueOrThrow
 */
export type s09_mecanisme_trauma_typeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_type
     */
    select?: Prisma.s09_mecanisme_trauma_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_type
     */
    omit?: Prisma.s09_mecanisme_trauma_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s09_mecanisme_trauma_type to fetch.
     */
    where: Prisma.s09_mecanisme_trauma_typeWhereUniqueInput;
};
/**
 * s09_mecanisme_trauma_type findFirst
 */
export type s09_mecanisme_trauma_typeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_type
     */
    select?: Prisma.s09_mecanisme_trauma_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_type
     */
    omit?: Prisma.s09_mecanisme_trauma_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s09_mecanisme_trauma_type to fetch.
     */
    where?: Prisma.s09_mecanisme_trauma_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s09_mecanisme_trauma_types to fetch.
     */
    orderBy?: Prisma.s09_mecanisme_trauma_typeOrderByWithRelationInput | Prisma.s09_mecanisme_trauma_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s09_mecanisme_trauma_types.
     */
    cursor?: Prisma.s09_mecanisme_trauma_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s09_mecanisme_trauma_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s09_mecanisme_trauma_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s09_mecanisme_trauma_types.
     */
    distinct?: Prisma.S09_mecanisme_trauma_typeScalarFieldEnum | Prisma.S09_mecanisme_trauma_typeScalarFieldEnum[];
};
/**
 * s09_mecanisme_trauma_type findFirstOrThrow
 */
export type s09_mecanisme_trauma_typeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_type
     */
    select?: Prisma.s09_mecanisme_trauma_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_type
     */
    omit?: Prisma.s09_mecanisme_trauma_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s09_mecanisme_trauma_type to fetch.
     */
    where?: Prisma.s09_mecanisme_trauma_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s09_mecanisme_trauma_types to fetch.
     */
    orderBy?: Prisma.s09_mecanisme_trauma_typeOrderByWithRelationInput | Prisma.s09_mecanisme_trauma_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s09_mecanisme_trauma_types.
     */
    cursor?: Prisma.s09_mecanisme_trauma_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s09_mecanisme_trauma_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s09_mecanisme_trauma_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s09_mecanisme_trauma_types.
     */
    distinct?: Prisma.S09_mecanisme_trauma_typeScalarFieldEnum | Prisma.S09_mecanisme_trauma_typeScalarFieldEnum[];
};
/**
 * s09_mecanisme_trauma_type findMany
 */
export type s09_mecanisme_trauma_typeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_type
     */
    select?: Prisma.s09_mecanisme_trauma_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_type
     */
    omit?: Prisma.s09_mecanisme_trauma_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s09_mecanisme_trauma_types to fetch.
     */
    where?: Prisma.s09_mecanisme_trauma_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s09_mecanisme_trauma_types to fetch.
     */
    orderBy?: Prisma.s09_mecanisme_trauma_typeOrderByWithRelationInput | Prisma.s09_mecanisme_trauma_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s09_mecanisme_trauma_types.
     */
    cursor?: Prisma.s09_mecanisme_trauma_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s09_mecanisme_trauma_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s09_mecanisme_trauma_types.
     */
    skip?: number;
    distinct?: Prisma.S09_mecanisme_trauma_typeScalarFieldEnum | Prisma.S09_mecanisme_trauma_typeScalarFieldEnum[];
};
/**
 * s09_mecanisme_trauma_type create
 */
export type s09_mecanisme_trauma_typeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_type
     */
    select?: Prisma.s09_mecanisme_trauma_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_type
     */
    omit?: Prisma.s09_mecanisme_trauma_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_typeInclude<ExtArgs> | null;
    /**
     * The data needed to create a s09_mecanisme_trauma_type.
     */
    data: Prisma.XOR<Prisma.s09_mecanisme_trauma_typeCreateInput, Prisma.s09_mecanisme_trauma_typeUncheckedCreateInput>;
};
/**
 * s09_mecanisme_trauma_type createMany
 */
export type s09_mecanisme_trauma_typeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s09_mecanisme_trauma_types.
     */
    data: Prisma.s09_mecanisme_trauma_typeCreateManyInput | Prisma.s09_mecanisme_trauma_typeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s09_mecanisme_trauma_type createManyAndReturn
 */
export type s09_mecanisme_trauma_typeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_type
     */
    select?: Prisma.s09_mecanisme_trauma_typeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_type
     */
    omit?: Prisma.s09_mecanisme_trauma_typeOmit<ExtArgs> | null;
    /**
     * The data used to create many s09_mecanisme_trauma_types.
     */
    data: Prisma.s09_mecanisme_trauma_typeCreateManyInput | Prisma.s09_mecanisme_trauma_typeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s09_mecanisme_trauma_type update
 */
export type s09_mecanisme_trauma_typeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_type
     */
    select?: Prisma.s09_mecanisme_trauma_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_type
     */
    omit?: Prisma.s09_mecanisme_trauma_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_typeInclude<ExtArgs> | null;
    /**
     * The data needed to update a s09_mecanisme_trauma_type.
     */
    data: Prisma.XOR<Prisma.s09_mecanisme_trauma_typeUpdateInput, Prisma.s09_mecanisme_trauma_typeUncheckedUpdateInput>;
    /**
     * Choose, which s09_mecanisme_trauma_type to update.
     */
    where: Prisma.s09_mecanisme_trauma_typeWhereUniqueInput;
};
/**
 * s09_mecanisme_trauma_type updateMany
 */
export type s09_mecanisme_trauma_typeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s09_mecanisme_trauma_types.
     */
    data: Prisma.XOR<Prisma.s09_mecanisme_trauma_typeUpdateManyMutationInput, Prisma.s09_mecanisme_trauma_typeUncheckedUpdateManyInput>;
    /**
     * Filter which s09_mecanisme_trauma_types to update
     */
    where?: Prisma.s09_mecanisme_trauma_typeWhereInput;
    /**
     * Limit how many s09_mecanisme_trauma_types to update.
     */
    limit?: number;
};
/**
 * s09_mecanisme_trauma_type updateManyAndReturn
 */
export type s09_mecanisme_trauma_typeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_type
     */
    select?: Prisma.s09_mecanisme_trauma_typeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_type
     */
    omit?: Prisma.s09_mecanisme_trauma_typeOmit<ExtArgs> | null;
    /**
     * The data used to update s09_mecanisme_trauma_types.
     */
    data: Prisma.XOR<Prisma.s09_mecanisme_trauma_typeUpdateManyMutationInput, Prisma.s09_mecanisme_trauma_typeUncheckedUpdateManyInput>;
    /**
     * Filter which s09_mecanisme_trauma_types to update
     */
    where?: Prisma.s09_mecanisme_trauma_typeWhereInput;
    /**
     * Limit how many s09_mecanisme_trauma_types to update.
     */
    limit?: number;
};
/**
 * s09_mecanisme_trauma_type upsert
 */
export type s09_mecanisme_trauma_typeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_type
     */
    select?: Prisma.s09_mecanisme_trauma_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_type
     */
    omit?: Prisma.s09_mecanisme_trauma_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_typeInclude<ExtArgs> | null;
    /**
     * The filter to search for the s09_mecanisme_trauma_type to update in case it exists.
     */
    where: Prisma.s09_mecanisme_trauma_typeWhereUniqueInput;
    /**
     * In case the s09_mecanisme_trauma_type found by the `where` argument doesn't exist, create a new s09_mecanisme_trauma_type with this data.
     */
    create: Prisma.XOR<Prisma.s09_mecanisme_trauma_typeCreateInput, Prisma.s09_mecanisme_trauma_typeUncheckedCreateInput>;
    /**
     * In case the s09_mecanisme_trauma_type was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s09_mecanisme_trauma_typeUpdateInput, Prisma.s09_mecanisme_trauma_typeUncheckedUpdateInput>;
};
/**
 * s09_mecanisme_trauma_type delete
 */
export type s09_mecanisme_trauma_typeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_type
     */
    select?: Prisma.s09_mecanisme_trauma_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_type
     */
    omit?: Prisma.s09_mecanisme_trauma_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_typeInclude<ExtArgs> | null;
    /**
     * Filter which s09_mecanisme_trauma_type to delete.
     */
    where: Prisma.s09_mecanisme_trauma_typeWhereUniqueInput;
};
/**
 * s09_mecanisme_trauma_type deleteMany
 */
export type s09_mecanisme_trauma_typeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s09_mecanisme_trauma_types to delete
     */
    where?: Prisma.s09_mecanisme_trauma_typeWhereInput;
    /**
     * Limit how many s09_mecanisme_trauma_types to delete.
     */
    limit?: number;
};
/**
 * s09_mecanisme_trauma_type.rapports
 */
export type s09_mecanisme_trauma_type$rapportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_rapport_mecanisme_trauma
     */
    select?: Prisma.s09_rapport_mecanisme_traumaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_rapport_mecanisme_trauma
     */
    omit?: Prisma.s09_rapport_mecanisme_traumaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_rapport_mecanisme_traumaInclude<ExtArgs> | null;
    where?: Prisma.s09_rapport_mecanisme_traumaWhereInput;
    orderBy?: Prisma.s09_rapport_mecanisme_traumaOrderByWithRelationInput | Prisma.s09_rapport_mecanisme_traumaOrderByWithRelationInput[];
    cursor?: Prisma.s09_rapport_mecanisme_traumaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.S09_rapport_mecanisme_traumaScalarFieldEnum | Prisma.S09_rapport_mecanisme_traumaScalarFieldEnum[];
};
/**
 * s09_mecanisme_trauma_type without action
 */
export type s09_mecanisme_trauma_typeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_type
     */
    select?: Prisma.s09_mecanisme_trauma_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_type
     */
    omit?: Prisma.s09_mecanisme_trauma_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_typeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s09_mecanisme_trauma_type.d.ts.map