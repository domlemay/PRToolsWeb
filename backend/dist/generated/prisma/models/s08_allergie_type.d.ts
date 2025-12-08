import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s08_allergie_type
 *
 */
export type s08_allergie_typeModel = runtime.Types.Result.DefaultSelection<Prisma.$s08_allergie_typePayload>;
export type AggregateS08_allergie_type = {
    _count: S08_allergie_typeCountAggregateOutputType | null;
    _avg: S08_allergie_typeAvgAggregateOutputType | null;
    _sum: S08_allergie_typeSumAggregateOutputType | null;
    _min: S08_allergie_typeMinAggregateOutputType | null;
    _max: S08_allergie_typeMaxAggregateOutputType | null;
};
export type S08_allergie_typeAvgAggregateOutputType = {
    id: number | null;
};
export type S08_allergie_typeSumAggregateOutputType = {
    id: number | null;
};
export type S08_allergie_typeMinAggregateOutputType = {
    id: number | null;
    categorie: string | null;
    code: string | null;
    libelle: string | null;
    actif: boolean | null;
};
export type S08_allergie_typeMaxAggregateOutputType = {
    id: number | null;
    categorie: string | null;
    code: string | null;
    libelle: string | null;
    actif: boolean | null;
};
export type S08_allergie_typeCountAggregateOutputType = {
    id: number;
    categorie: number;
    code: number;
    libelle: number;
    actif: number;
    _all: number;
};
export type S08_allergie_typeAvgAggregateInputType = {
    id?: true;
};
export type S08_allergie_typeSumAggregateInputType = {
    id?: true;
};
export type S08_allergie_typeMinAggregateInputType = {
    id?: true;
    categorie?: true;
    code?: true;
    libelle?: true;
    actif?: true;
};
export type S08_allergie_typeMaxAggregateInputType = {
    id?: true;
    categorie?: true;
    code?: true;
    libelle?: true;
    actif?: true;
};
export type S08_allergie_typeCountAggregateInputType = {
    id?: true;
    categorie?: true;
    code?: true;
    libelle?: true;
    actif?: true;
    _all?: true;
};
export type S08_allergie_typeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s08_allergie_type to aggregate.
     */
    where?: Prisma.s08_allergie_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s08_allergie_types to fetch.
     */
    orderBy?: Prisma.s08_allergie_typeOrderByWithRelationInput | Prisma.s08_allergie_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s08_allergie_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s08_allergie_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s08_allergie_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s08_allergie_types
    **/
    _count?: true | S08_allergie_typeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S08_allergie_typeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S08_allergie_typeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S08_allergie_typeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S08_allergie_typeMaxAggregateInputType;
};
export type GetS08_allergie_typeAggregateType<T extends S08_allergie_typeAggregateArgs> = {
    [P in keyof T & keyof AggregateS08_allergie_type]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS08_allergie_type[P]> : Prisma.GetScalarType<T[P], AggregateS08_allergie_type[P]>;
};
export type s08_allergie_typeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s08_allergie_typeWhereInput;
    orderBy?: Prisma.s08_allergie_typeOrderByWithAggregationInput | Prisma.s08_allergie_typeOrderByWithAggregationInput[];
    by: Prisma.S08_allergie_typeScalarFieldEnum[] | Prisma.S08_allergie_typeScalarFieldEnum;
    having?: Prisma.s08_allergie_typeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S08_allergie_typeCountAggregateInputType | true;
    _avg?: S08_allergie_typeAvgAggregateInputType;
    _sum?: S08_allergie_typeSumAggregateInputType;
    _min?: S08_allergie_typeMinAggregateInputType;
    _max?: S08_allergie_typeMaxAggregateInputType;
};
export type S08_allergie_typeGroupByOutputType = {
    id: number;
    categorie: string | null;
    code: string;
    libelle: string;
    actif: boolean | null;
    _count: S08_allergie_typeCountAggregateOutputType | null;
    _avg: S08_allergie_typeAvgAggregateOutputType | null;
    _sum: S08_allergie_typeSumAggregateOutputType | null;
    _min: S08_allergie_typeMinAggregateOutputType | null;
    _max: S08_allergie_typeMaxAggregateOutputType | null;
};
type GetS08_allergie_typeGroupByPayload<T extends s08_allergie_typeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S08_allergie_typeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S08_allergie_typeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S08_allergie_typeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S08_allergie_typeGroupByOutputType[P]>;
}>>;
export type s08_allergie_typeWhereInput = {
    AND?: Prisma.s08_allergie_typeWhereInput | Prisma.s08_allergie_typeWhereInput[];
    OR?: Prisma.s08_allergie_typeWhereInput[];
    NOT?: Prisma.s08_allergie_typeWhereInput | Prisma.s08_allergie_typeWhereInput[];
    id?: Prisma.IntFilter<"s08_allergie_type"> | number;
    categorie?: Prisma.StringNullableFilter<"s08_allergie_type"> | string | null;
    code?: Prisma.StringFilter<"s08_allergie_type"> | string;
    libelle?: Prisma.StringFilter<"s08_allergie_type"> | string;
    actif?: Prisma.BoolNullableFilter<"s08_allergie_type"> | boolean | null;
    rapports?: Prisma.S08_rapport_allergieListRelationFilter;
};
export type s08_allergie_typeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    categorie?: Prisma.SortOrderInput | Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapports?: Prisma.s08_rapport_allergieOrderByRelationAggregateInput;
};
export type s08_allergie_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.s08_allergie_typeWhereInput | Prisma.s08_allergie_typeWhereInput[];
    OR?: Prisma.s08_allergie_typeWhereInput[];
    NOT?: Prisma.s08_allergie_typeWhereInput | Prisma.s08_allergie_typeWhereInput[];
    categorie?: Prisma.StringNullableFilter<"s08_allergie_type"> | string | null;
    code?: Prisma.StringFilter<"s08_allergie_type"> | string;
    libelle?: Prisma.StringFilter<"s08_allergie_type"> | string;
    actif?: Prisma.BoolNullableFilter<"s08_allergie_type"> | boolean | null;
    rapports?: Prisma.S08_rapport_allergieListRelationFilter;
}, "id">;
export type s08_allergie_typeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    categorie?: Prisma.SortOrderInput | Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s08_allergie_typeCountOrderByAggregateInput;
    _avg?: Prisma.s08_allergie_typeAvgOrderByAggregateInput;
    _max?: Prisma.s08_allergie_typeMaxOrderByAggregateInput;
    _min?: Prisma.s08_allergie_typeMinOrderByAggregateInput;
    _sum?: Prisma.s08_allergie_typeSumOrderByAggregateInput;
};
export type s08_allergie_typeScalarWhereWithAggregatesInput = {
    AND?: Prisma.s08_allergie_typeScalarWhereWithAggregatesInput | Prisma.s08_allergie_typeScalarWhereWithAggregatesInput[];
    OR?: Prisma.s08_allergie_typeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s08_allergie_typeScalarWhereWithAggregatesInput | Prisma.s08_allergie_typeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s08_allergie_type"> | number;
    categorie?: Prisma.StringNullableWithAggregatesFilter<"s08_allergie_type"> | string | null;
    code?: Prisma.StringWithAggregatesFilter<"s08_allergie_type"> | string;
    libelle?: Prisma.StringWithAggregatesFilter<"s08_allergie_type"> | string;
    actif?: Prisma.BoolNullableWithAggregatesFilter<"s08_allergie_type"> | boolean | null;
};
export type s08_allergie_typeCreateInput = {
    categorie?: string | null;
    code: string;
    libelle: string;
    actif?: boolean | null;
    rapports?: Prisma.s08_rapport_allergieCreateNestedManyWithoutAllergie_typeInput;
};
export type s08_allergie_typeUncheckedCreateInput = {
    id?: number;
    categorie?: string | null;
    code: string;
    libelle: string;
    actif?: boolean | null;
    rapports?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutAllergie_typeInput;
};
export type s08_allergie_typeUpdateInput = {
    categorie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    rapports?: Prisma.s08_rapport_allergieUpdateManyWithoutAllergie_typeNestedInput;
};
export type s08_allergie_typeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categorie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    rapports?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutAllergie_typeNestedInput;
};
export type s08_allergie_typeCreateManyInput = {
    id?: number;
    categorie?: string | null;
    code: string;
    libelle: string;
    actif?: boolean | null;
};
export type s08_allergie_typeUpdateManyMutationInput = {
    categorie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s08_allergie_typeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categorie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s08_allergie_typeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categorie?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type s08_allergie_typeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type s08_allergie_typeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categorie?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type s08_allergie_typeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categorie?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type s08_allergie_typeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type S08_allergie_typeNullableScalarRelationFilter = {
    is?: Prisma.s08_allergie_typeWhereInput | null;
    isNot?: Prisma.s08_allergie_typeWhereInput | null;
};
export type s08_allergie_typeCreateNestedOneWithoutRapportsInput = {
    create?: Prisma.XOR<Prisma.s08_allergie_typeCreateWithoutRapportsInput, Prisma.s08_allergie_typeUncheckedCreateWithoutRapportsInput>;
    connectOrCreate?: Prisma.s08_allergie_typeCreateOrConnectWithoutRapportsInput;
    connect?: Prisma.s08_allergie_typeWhereUniqueInput;
};
export type s08_allergie_typeUpdateOneWithoutRapportsNestedInput = {
    create?: Prisma.XOR<Prisma.s08_allergie_typeCreateWithoutRapportsInput, Prisma.s08_allergie_typeUncheckedCreateWithoutRapportsInput>;
    connectOrCreate?: Prisma.s08_allergie_typeCreateOrConnectWithoutRapportsInput;
    upsert?: Prisma.s08_allergie_typeUpsertWithoutRapportsInput;
    disconnect?: Prisma.s08_allergie_typeWhereInput | boolean;
    delete?: Prisma.s08_allergie_typeWhereInput | boolean;
    connect?: Prisma.s08_allergie_typeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s08_allergie_typeUpdateToOneWithWhereWithoutRapportsInput, Prisma.s08_allergie_typeUpdateWithoutRapportsInput>, Prisma.s08_allergie_typeUncheckedUpdateWithoutRapportsInput>;
};
export type s08_allergie_typeCreateWithoutRapportsInput = {
    categorie?: string | null;
    code: string;
    libelle: string;
    actif?: boolean | null;
};
export type s08_allergie_typeUncheckedCreateWithoutRapportsInput = {
    id?: number;
    categorie?: string | null;
    code: string;
    libelle: string;
    actif?: boolean | null;
};
export type s08_allergie_typeCreateOrConnectWithoutRapportsInput = {
    where: Prisma.s08_allergie_typeWhereUniqueInput;
    create: Prisma.XOR<Prisma.s08_allergie_typeCreateWithoutRapportsInput, Prisma.s08_allergie_typeUncheckedCreateWithoutRapportsInput>;
};
export type s08_allergie_typeUpsertWithoutRapportsInput = {
    update: Prisma.XOR<Prisma.s08_allergie_typeUpdateWithoutRapportsInput, Prisma.s08_allergie_typeUncheckedUpdateWithoutRapportsInput>;
    create: Prisma.XOR<Prisma.s08_allergie_typeCreateWithoutRapportsInput, Prisma.s08_allergie_typeUncheckedCreateWithoutRapportsInput>;
    where?: Prisma.s08_allergie_typeWhereInput;
};
export type s08_allergie_typeUpdateToOneWithWhereWithoutRapportsInput = {
    where?: Prisma.s08_allergie_typeWhereInput;
    data: Prisma.XOR<Prisma.s08_allergie_typeUpdateWithoutRapportsInput, Prisma.s08_allergie_typeUncheckedUpdateWithoutRapportsInput>;
};
export type s08_allergie_typeUpdateWithoutRapportsInput = {
    categorie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s08_allergie_typeUncheckedUpdateWithoutRapportsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categorie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
/**
 * Count Type S08_allergie_typeCountOutputType
 */
export type S08_allergie_typeCountOutputType = {
    rapports: number;
};
export type S08_allergie_typeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapports?: boolean | S08_allergie_typeCountOutputTypeCountRapportsArgs;
};
/**
 * S08_allergie_typeCountOutputType without action
 */
export type S08_allergie_typeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the S08_allergie_typeCountOutputType
     */
    select?: Prisma.S08_allergie_typeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * S08_allergie_typeCountOutputType without action
 */
export type S08_allergie_typeCountOutputTypeCountRapportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s08_rapport_allergieWhereInput;
};
export type s08_allergie_typeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categorie?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
    rapports?: boolean | Prisma.s08_allergie_type$rapportsArgs<ExtArgs>;
    _count?: boolean | Prisma.S08_allergie_typeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s08_allergie_type"]>;
export type s08_allergie_typeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categorie?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
}, ExtArgs["result"]["s08_allergie_type"]>;
export type s08_allergie_typeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categorie?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
}, ExtArgs["result"]["s08_allergie_type"]>;
export type s08_allergie_typeSelectScalar = {
    id?: boolean;
    categorie?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
};
export type s08_allergie_typeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "categorie" | "code" | "libelle" | "actif", ExtArgs["result"]["s08_allergie_type"]>;
export type s08_allergie_typeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapports?: boolean | Prisma.s08_allergie_type$rapportsArgs<ExtArgs>;
    _count?: boolean | Prisma.S08_allergie_typeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type s08_allergie_typeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type s08_allergie_typeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $s08_allergie_typePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s08_allergie_type";
    objects: {
        rapports: Prisma.$s08_rapport_allergiePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        categorie: string | null;
        code: string;
        libelle: string;
        actif: boolean | null;
    }, ExtArgs["result"]["s08_allergie_type"]>;
    composites: {};
};
export type s08_allergie_typeGetPayload<S extends boolean | null | undefined | s08_allergie_typeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s08_allergie_typePayload, S>;
export type s08_allergie_typeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s08_allergie_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S08_allergie_typeCountAggregateInputType | true;
};
export interface s08_allergie_typeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s08_allergie_type'];
        meta: {
            name: 's08_allergie_type';
        };
    };
    /**
     * Find zero or one S08_allergie_type that matches the filter.
     * @param {s08_allergie_typeFindUniqueArgs} args - Arguments to find a S08_allergie_type
     * @example
     * // Get one S08_allergie_type
     * const s08_allergie_type = await prisma.s08_allergie_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s08_allergie_typeFindUniqueArgs>(args: Prisma.SelectSubset<T, s08_allergie_typeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s08_allergie_typeClient<runtime.Types.Result.GetResult<Prisma.$s08_allergie_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S08_allergie_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s08_allergie_typeFindUniqueOrThrowArgs} args - Arguments to find a S08_allergie_type
     * @example
     * // Get one S08_allergie_type
     * const s08_allergie_type = await prisma.s08_allergie_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s08_allergie_typeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s08_allergie_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s08_allergie_typeClient<runtime.Types.Result.GetResult<Prisma.$s08_allergie_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S08_allergie_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s08_allergie_typeFindFirstArgs} args - Arguments to find a S08_allergie_type
     * @example
     * // Get one S08_allergie_type
     * const s08_allergie_type = await prisma.s08_allergie_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s08_allergie_typeFindFirstArgs>(args?: Prisma.SelectSubset<T, s08_allergie_typeFindFirstArgs<ExtArgs>>): Prisma.Prisma__s08_allergie_typeClient<runtime.Types.Result.GetResult<Prisma.$s08_allergie_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S08_allergie_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s08_allergie_typeFindFirstOrThrowArgs} args - Arguments to find a S08_allergie_type
     * @example
     * // Get one S08_allergie_type
     * const s08_allergie_type = await prisma.s08_allergie_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s08_allergie_typeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s08_allergie_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s08_allergie_typeClient<runtime.Types.Result.GetResult<Prisma.$s08_allergie_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S08_allergie_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s08_allergie_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S08_allergie_types
     * const s08_allergie_types = await prisma.s08_allergie_type.findMany()
     *
     * // Get first 10 S08_allergie_types
     * const s08_allergie_types = await prisma.s08_allergie_type.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s08_allergie_typeWithIdOnly = await prisma.s08_allergie_type.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s08_allergie_typeFindManyArgs>(args?: Prisma.SelectSubset<T, s08_allergie_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s08_allergie_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S08_allergie_type.
     * @param {s08_allergie_typeCreateArgs} args - Arguments to create a S08_allergie_type.
     * @example
     * // Create one S08_allergie_type
     * const S08_allergie_type = await prisma.s08_allergie_type.create({
     *   data: {
     *     // ... data to create a S08_allergie_type
     *   }
     * })
     *
     */
    create<T extends s08_allergie_typeCreateArgs>(args: Prisma.SelectSubset<T, s08_allergie_typeCreateArgs<ExtArgs>>): Prisma.Prisma__s08_allergie_typeClient<runtime.Types.Result.GetResult<Prisma.$s08_allergie_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S08_allergie_types.
     * @param {s08_allergie_typeCreateManyArgs} args - Arguments to create many S08_allergie_types.
     * @example
     * // Create many S08_allergie_types
     * const s08_allergie_type = await prisma.s08_allergie_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s08_allergie_typeCreateManyArgs>(args?: Prisma.SelectSubset<T, s08_allergie_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S08_allergie_types and returns the data saved in the database.
     * @param {s08_allergie_typeCreateManyAndReturnArgs} args - Arguments to create many S08_allergie_types.
     * @example
     * // Create many S08_allergie_types
     * const s08_allergie_type = await prisma.s08_allergie_type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S08_allergie_types and only return the `id`
     * const s08_allergie_typeWithIdOnly = await prisma.s08_allergie_type.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s08_allergie_typeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s08_allergie_typeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s08_allergie_typePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S08_allergie_type.
     * @param {s08_allergie_typeDeleteArgs} args - Arguments to delete one S08_allergie_type.
     * @example
     * // Delete one S08_allergie_type
     * const S08_allergie_type = await prisma.s08_allergie_type.delete({
     *   where: {
     *     // ... filter to delete one S08_allergie_type
     *   }
     * })
     *
     */
    delete<T extends s08_allergie_typeDeleteArgs>(args: Prisma.SelectSubset<T, s08_allergie_typeDeleteArgs<ExtArgs>>): Prisma.Prisma__s08_allergie_typeClient<runtime.Types.Result.GetResult<Prisma.$s08_allergie_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S08_allergie_type.
     * @param {s08_allergie_typeUpdateArgs} args - Arguments to update one S08_allergie_type.
     * @example
     * // Update one S08_allergie_type
     * const s08_allergie_type = await prisma.s08_allergie_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s08_allergie_typeUpdateArgs>(args: Prisma.SelectSubset<T, s08_allergie_typeUpdateArgs<ExtArgs>>): Prisma.Prisma__s08_allergie_typeClient<runtime.Types.Result.GetResult<Prisma.$s08_allergie_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S08_allergie_types.
     * @param {s08_allergie_typeDeleteManyArgs} args - Arguments to filter S08_allergie_types to delete.
     * @example
     * // Delete a few S08_allergie_types
     * const { count } = await prisma.s08_allergie_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s08_allergie_typeDeleteManyArgs>(args?: Prisma.SelectSubset<T, s08_allergie_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S08_allergie_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s08_allergie_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S08_allergie_types
     * const s08_allergie_type = await prisma.s08_allergie_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s08_allergie_typeUpdateManyArgs>(args: Prisma.SelectSubset<T, s08_allergie_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S08_allergie_types and returns the data updated in the database.
     * @param {s08_allergie_typeUpdateManyAndReturnArgs} args - Arguments to update many S08_allergie_types.
     * @example
     * // Update many S08_allergie_types
     * const s08_allergie_type = await prisma.s08_allergie_type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S08_allergie_types and only return the `id`
     * const s08_allergie_typeWithIdOnly = await prisma.s08_allergie_type.updateManyAndReturn({
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
    updateManyAndReturn<T extends s08_allergie_typeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s08_allergie_typeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s08_allergie_typePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S08_allergie_type.
     * @param {s08_allergie_typeUpsertArgs} args - Arguments to update or create a S08_allergie_type.
     * @example
     * // Update or create a S08_allergie_type
     * const s08_allergie_type = await prisma.s08_allergie_type.upsert({
     *   create: {
     *     // ... data to create a S08_allergie_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S08_allergie_type we want to update
     *   }
     * })
     */
    upsert<T extends s08_allergie_typeUpsertArgs>(args: Prisma.SelectSubset<T, s08_allergie_typeUpsertArgs<ExtArgs>>): Prisma.Prisma__s08_allergie_typeClient<runtime.Types.Result.GetResult<Prisma.$s08_allergie_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S08_allergie_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s08_allergie_typeCountArgs} args - Arguments to filter S08_allergie_types to count.
     * @example
     * // Count the number of S08_allergie_types
     * const count = await prisma.s08_allergie_type.count({
     *   where: {
     *     // ... the filter for the S08_allergie_types we want to count
     *   }
     * })
    **/
    count<T extends s08_allergie_typeCountArgs>(args?: Prisma.Subset<T, s08_allergie_typeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S08_allergie_typeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S08_allergie_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S08_allergie_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S08_allergie_typeAggregateArgs>(args: Prisma.Subset<T, S08_allergie_typeAggregateArgs>): Prisma.PrismaPromise<GetS08_allergie_typeAggregateType<T>>;
    /**
     * Group by S08_allergie_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s08_allergie_typeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s08_allergie_typeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s08_allergie_typeGroupByArgs['orderBy'];
    } : {
        orderBy?: s08_allergie_typeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s08_allergie_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS08_allergie_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s08_allergie_type model
     */
    readonly fields: s08_allergie_typeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s08_allergie_type.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s08_allergie_typeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rapports<T extends Prisma.s08_allergie_type$rapportsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.s08_allergie_type$rapportsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s08_rapport_allergiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the s08_allergie_type model
 */
export interface s08_allergie_typeFieldRefs {
    readonly id: Prisma.FieldRef<"s08_allergie_type", 'Int'>;
    readonly categorie: Prisma.FieldRef<"s08_allergie_type", 'String'>;
    readonly code: Prisma.FieldRef<"s08_allergie_type", 'String'>;
    readonly libelle: Prisma.FieldRef<"s08_allergie_type", 'String'>;
    readonly actif: Prisma.FieldRef<"s08_allergie_type", 'Boolean'>;
}
/**
 * s08_allergie_type findUnique
 */
export type s08_allergie_typeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergie_type
     */
    select?: Prisma.s08_allergie_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergie_type
     */
    omit?: Prisma.s08_allergie_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergie_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s08_allergie_type to fetch.
     */
    where: Prisma.s08_allergie_typeWhereUniqueInput;
};
/**
 * s08_allergie_type findUniqueOrThrow
 */
export type s08_allergie_typeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergie_type
     */
    select?: Prisma.s08_allergie_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergie_type
     */
    omit?: Prisma.s08_allergie_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergie_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s08_allergie_type to fetch.
     */
    where: Prisma.s08_allergie_typeWhereUniqueInput;
};
/**
 * s08_allergie_type findFirst
 */
export type s08_allergie_typeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergie_type
     */
    select?: Prisma.s08_allergie_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergie_type
     */
    omit?: Prisma.s08_allergie_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergie_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s08_allergie_type to fetch.
     */
    where?: Prisma.s08_allergie_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s08_allergie_types to fetch.
     */
    orderBy?: Prisma.s08_allergie_typeOrderByWithRelationInput | Prisma.s08_allergie_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s08_allergie_types.
     */
    cursor?: Prisma.s08_allergie_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s08_allergie_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s08_allergie_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s08_allergie_types.
     */
    distinct?: Prisma.S08_allergie_typeScalarFieldEnum | Prisma.S08_allergie_typeScalarFieldEnum[];
};
/**
 * s08_allergie_type findFirstOrThrow
 */
export type s08_allergie_typeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergie_type
     */
    select?: Prisma.s08_allergie_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergie_type
     */
    omit?: Prisma.s08_allergie_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergie_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s08_allergie_type to fetch.
     */
    where?: Prisma.s08_allergie_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s08_allergie_types to fetch.
     */
    orderBy?: Prisma.s08_allergie_typeOrderByWithRelationInput | Prisma.s08_allergie_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s08_allergie_types.
     */
    cursor?: Prisma.s08_allergie_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s08_allergie_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s08_allergie_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s08_allergie_types.
     */
    distinct?: Prisma.S08_allergie_typeScalarFieldEnum | Prisma.S08_allergie_typeScalarFieldEnum[];
};
/**
 * s08_allergie_type findMany
 */
export type s08_allergie_typeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergie_type
     */
    select?: Prisma.s08_allergie_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergie_type
     */
    omit?: Prisma.s08_allergie_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergie_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s08_allergie_types to fetch.
     */
    where?: Prisma.s08_allergie_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s08_allergie_types to fetch.
     */
    orderBy?: Prisma.s08_allergie_typeOrderByWithRelationInput | Prisma.s08_allergie_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s08_allergie_types.
     */
    cursor?: Prisma.s08_allergie_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s08_allergie_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s08_allergie_types.
     */
    skip?: number;
    distinct?: Prisma.S08_allergie_typeScalarFieldEnum | Prisma.S08_allergie_typeScalarFieldEnum[];
};
/**
 * s08_allergie_type create
 */
export type s08_allergie_typeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergie_type
     */
    select?: Prisma.s08_allergie_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergie_type
     */
    omit?: Prisma.s08_allergie_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergie_typeInclude<ExtArgs> | null;
    /**
     * The data needed to create a s08_allergie_type.
     */
    data: Prisma.XOR<Prisma.s08_allergie_typeCreateInput, Prisma.s08_allergie_typeUncheckedCreateInput>;
};
/**
 * s08_allergie_type createMany
 */
export type s08_allergie_typeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s08_allergie_types.
     */
    data: Prisma.s08_allergie_typeCreateManyInput | Prisma.s08_allergie_typeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s08_allergie_type createManyAndReturn
 */
export type s08_allergie_typeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergie_type
     */
    select?: Prisma.s08_allergie_typeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergie_type
     */
    omit?: Prisma.s08_allergie_typeOmit<ExtArgs> | null;
    /**
     * The data used to create many s08_allergie_types.
     */
    data: Prisma.s08_allergie_typeCreateManyInput | Prisma.s08_allergie_typeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s08_allergie_type update
 */
export type s08_allergie_typeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergie_type
     */
    select?: Prisma.s08_allergie_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergie_type
     */
    omit?: Prisma.s08_allergie_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergie_typeInclude<ExtArgs> | null;
    /**
     * The data needed to update a s08_allergie_type.
     */
    data: Prisma.XOR<Prisma.s08_allergie_typeUpdateInput, Prisma.s08_allergie_typeUncheckedUpdateInput>;
    /**
     * Choose, which s08_allergie_type to update.
     */
    where: Prisma.s08_allergie_typeWhereUniqueInput;
};
/**
 * s08_allergie_type updateMany
 */
export type s08_allergie_typeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s08_allergie_types.
     */
    data: Prisma.XOR<Prisma.s08_allergie_typeUpdateManyMutationInput, Prisma.s08_allergie_typeUncheckedUpdateManyInput>;
    /**
     * Filter which s08_allergie_types to update
     */
    where?: Prisma.s08_allergie_typeWhereInput;
    /**
     * Limit how many s08_allergie_types to update.
     */
    limit?: number;
};
/**
 * s08_allergie_type updateManyAndReturn
 */
export type s08_allergie_typeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergie_type
     */
    select?: Prisma.s08_allergie_typeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergie_type
     */
    omit?: Prisma.s08_allergie_typeOmit<ExtArgs> | null;
    /**
     * The data used to update s08_allergie_types.
     */
    data: Prisma.XOR<Prisma.s08_allergie_typeUpdateManyMutationInput, Prisma.s08_allergie_typeUncheckedUpdateManyInput>;
    /**
     * Filter which s08_allergie_types to update
     */
    where?: Prisma.s08_allergie_typeWhereInput;
    /**
     * Limit how many s08_allergie_types to update.
     */
    limit?: number;
};
/**
 * s08_allergie_type upsert
 */
export type s08_allergie_typeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergie_type
     */
    select?: Prisma.s08_allergie_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergie_type
     */
    omit?: Prisma.s08_allergie_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergie_typeInclude<ExtArgs> | null;
    /**
     * The filter to search for the s08_allergie_type to update in case it exists.
     */
    where: Prisma.s08_allergie_typeWhereUniqueInput;
    /**
     * In case the s08_allergie_type found by the `where` argument doesn't exist, create a new s08_allergie_type with this data.
     */
    create: Prisma.XOR<Prisma.s08_allergie_typeCreateInput, Prisma.s08_allergie_typeUncheckedCreateInput>;
    /**
     * In case the s08_allergie_type was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s08_allergie_typeUpdateInput, Prisma.s08_allergie_typeUncheckedUpdateInput>;
};
/**
 * s08_allergie_type delete
 */
export type s08_allergie_typeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergie_type
     */
    select?: Prisma.s08_allergie_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergie_type
     */
    omit?: Prisma.s08_allergie_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergie_typeInclude<ExtArgs> | null;
    /**
     * Filter which s08_allergie_type to delete.
     */
    where: Prisma.s08_allergie_typeWhereUniqueInput;
};
/**
 * s08_allergie_type deleteMany
 */
export type s08_allergie_typeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s08_allergie_types to delete
     */
    where?: Prisma.s08_allergie_typeWhereInput;
    /**
     * Limit how many s08_allergie_types to delete.
     */
    limit?: number;
};
/**
 * s08_allergie_type.rapports
 */
export type s08_allergie_type$rapportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_rapport_allergie
     */
    select?: Prisma.s08_rapport_allergieSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_rapport_allergie
     */
    omit?: Prisma.s08_rapport_allergieOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_rapport_allergieInclude<ExtArgs> | null;
    where?: Prisma.s08_rapport_allergieWhereInput;
    orderBy?: Prisma.s08_rapport_allergieOrderByWithRelationInput | Prisma.s08_rapport_allergieOrderByWithRelationInput[];
    cursor?: Prisma.s08_rapport_allergieWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.S08_rapport_allergieScalarFieldEnum | Prisma.S08_rapport_allergieScalarFieldEnum[];
};
/**
 * s08_allergie_type without action
 */
export type s08_allergie_typeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergie_type
     */
    select?: Prisma.s08_allergie_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergie_type
     */
    omit?: Prisma.s08_allergie_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergie_typeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s08_allergie_type.d.ts.map