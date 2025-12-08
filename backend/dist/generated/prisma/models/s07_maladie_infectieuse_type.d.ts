import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s07_maladie_infectieuse_type
 *
 */
export type s07_maladie_infectieuse_typeModel = runtime.Types.Result.DefaultSelection<Prisma.$s07_maladie_infectieuse_typePayload>;
export type AggregateS07_maladie_infectieuse_type = {
    _count: S07_maladie_infectieuse_typeCountAggregateOutputType | null;
    _avg: S07_maladie_infectieuse_typeAvgAggregateOutputType | null;
    _sum: S07_maladie_infectieuse_typeSumAggregateOutputType | null;
    _min: S07_maladie_infectieuse_typeMinAggregateOutputType | null;
    _max: S07_maladie_infectieuse_typeMaxAggregateOutputType | null;
};
export type S07_maladie_infectieuse_typeAvgAggregateOutputType = {
    id: number | null;
};
export type S07_maladie_infectieuse_typeSumAggregateOutputType = {
    id: number | null;
};
export type S07_maladie_infectieuse_typeMinAggregateOutputType = {
    id: number | null;
    categorie: string | null;
    code: string | null;
    libelle: string | null;
    actif: boolean | null;
};
export type S07_maladie_infectieuse_typeMaxAggregateOutputType = {
    id: number | null;
    categorie: string | null;
    code: string | null;
    libelle: string | null;
    actif: boolean | null;
};
export type S07_maladie_infectieuse_typeCountAggregateOutputType = {
    id: number;
    categorie: number;
    code: number;
    libelle: number;
    actif: number;
    _all: number;
};
export type S07_maladie_infectieuse_typeAvgAggregateInputType = {
    id?: true;
};
export type S07_maladie_infectieuse_typeSumAggregateInputType = {
    id?: true;
};
export type S07_maladie_infectieuse_typeMinAggregateInputType = {
    id?: true;
    categorie?: true;
    code?: true;
    libelle?: true;
    actif?: true;
};
export type S07_maladie_infectieuse_typeMaxAggregateInputType = {
    id?: true;
    categorie?: true;
    code?: true;
    libelle?: true;
    actif?: true;
};
export type S07_maladie_infectieuse_typeCountAggregateInputType = {
    id?: true;
    categorie?: true;
    code?: true;
    libelle?: true;
    actif?: true;
    _all?: true;
};
export type S07_maladie_infectieuse_typeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s07_maladie_infectieuse_type to aggregate.
     */
    where?: Prisma.s07_maladie_infectieuse_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s07_maladie_infectieuse_types to fetch.
     */
    orderBy?: Prisma.s07_maladie_infectieuse_typeOrderByWithRelationInput | Prisma.s07_maladie_infectieuse_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s07_maladie_infectieuse_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s07_maladie_infectieuse_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s07_maladie_infectieuse_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s07_maladie_infectieuse_types
    **/
    _count?: true | S07_maladie_infectieuse_typeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S07_maladie_infectieuse_typeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S07_maladie_infectieuse_typeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S07_maladie_infectieuse_typeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S07_maladie_infectieuse_typeMaxAggregateInputType;
};
export type GetS07_maladie_infectieuse_typeAggregateType<T extends S07_maladie_infectieuse_typeAggregateArgs> = {
    [P in keyof T & keyof AggregateS07_maladie_infectieuse_type]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS07_maladie_infectieuse_type[P]> : Prisma.GetScalarType<T[P], AggregateS07_maladie_infectieuse_type[P]>;
};
export type s07_maladie_infectieuse_typeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s07_maladie_infectieuse_typeWhereInput;
    orderBy?: Prisma.s07_maladie_infectieuse_typeOrderByWithAggregationInput | Prisma.s07_maladie_infectieuse_typeOrderByWithAggregationInput[];
    by: Prisma.S07_maladie_infectieuse_typeScalarFieldEnum[] | Prisma.S07_maladie_infectieuse_typeScalarFieldEnum;
    having?: Prisma.s07_maladie_infectieuse_typeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S07_maladie_infectieuse_typeCountAggregateInputType | true;
    _avg?: S07_maladie_infectieuse_typeAvgAggregateInputType;
    _sum?: S07_maladie_infectieuse_typeSumAggregateInputType;
    _min?: S07_maladie_infectieuse_typeMinAggregateInputType;
    _max?: S07_maladie_infectieuse_typeMaxAggregateInputType;
};
export type S07_maladie_infectieuse_typeGroupByOutputType = {
    id: number;
    categorie: string | null;
    code: string;
    libelle: string;
    actif: boolean | null;
    _count: S07_maladie_infectieuse_typeCountAggregateOutputType | null;
    _avg: S07_maladie_infectieuse_typeAvgAggregateOutputType | null;
    _sum: S07_maladie_infectieuse_typeSumAggregateOutputType | null;
    _min: S07_maladie_infectieuse_typeMinAggregateOutputType | null;
    _max: S07_maladie_infectieuse_typeMaxAggregateOutputType | null;
};
type GetS07_maladie_infectieuse_typeGroupByPayload<T extends s07_maladie_infectieuse_typeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S07_maladie_infectieuse_typeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S07_maladie_infectieuse_typeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S07_maladie_infectieuse_typeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S07_maladie_infectieuse_typeGroupByOutputType[P]>;
}>>;
export type s07_maladie_infectieuse_typeWhereInput = {
    AND?: Prisma.s07_maladie_infectieuse_typeWhereInput | Prisma.s07_maladie_infectieuse_typeWhereInput[];
    OR?: Prisma.s07_maladie_infectieuse_typeWhereInput[];
    NOT?: Prisma.s07_maladie_infectieuse_typeWhereInput | Prisma.s07_maladie_infectieuse_typeWhereInput[];
    id?: Prisma.IntFilter<"s07_maladie_infectieuse_type"> | number;
    categorie?: Prisma.StringNullableFilter<"s07_maladie_infectieuse_type"> | string | null;
    code?: Prisma.StringFilter<"s07_maladie_infectieuse_type"> | string;
    libelle?: Prisma.StringFilter<"s07_maladie_infectieuse_type"> | string;
    actif?: Prisma.BoolNullableFilter<"s07_maladie_infectieuse_type"> | boolean | null;
    rapports?: Prisma.S07_rapport_maladie_infectieuseListRelationFilter;
};
export type s07_maladie_infectieuse_typeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    categorie?: Prisma.SortOrderInput | Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapports?: Prisma.s07_rapport_maladie_infectieuseOrderByRelationAggregateInput;
};
export type s07_maladie_infectieuse_typeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.s07_maladie_infectieuse_typeWhereInput | Prisma.s07_maladie_infectieuse_typeWhereInput[];
    OR?: Prisma.s07_maladie_infectieuse_typeWhereInput[];
    NOT?: Prisma.s07_maladie_infectieuse_typeWhereInput | Prisma.s07_maladie_infectieuse_typeWhereInput[];
    categorie?: Prisma.StringNullableFilter<"s07_maladie_infectieuse_type"> | string | null;
    code?: Prisma.StringFilter<"s07_maladie_infectieuse_type"> | string;
    libelle?: Prisma.StringFilter<"s07_maladie_infectieuse_type"> | string;
    actif?: Prisma.BoolNullableFilter<"s07_maladie_infectieuse_type"> | boolean | null;
    rapports?: Prisma.S07_rapport_maladie_infectieuseListRelationFilter;
}, "id">;
export type s07_maladie_infectieuse_typeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    categorie?: Prisma.SortOrderInput | Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s07_maladie_infectieuse_typeCountOrderByAggregateInput;
    _avg?: Prisma.s07_maladie_infectieuse_typeAvgOrderByAggregateInput;
    _max?: Prisma.s07_maladie_infectieuse_typeMaxOrderByAggregateInput;
    _min?: Prisma.s07_maladie_infectieuse_typeMinOrderByAggregateInput;
    _sum?: Prisma.s07_maladie_infectieuse_typeSumOrderByAggregateInput;
};
export type s07_maladie_infectieuse_typeScalarWhereWithAggregatesInput = {
    AND?: Prisma.s07_maladie_infectieuse_typeScalarWhereWithAggregatesInput | Prisma.s07_maladie_infectieuse_typeScalarWhereWithAggregatesInput[];
    OR?: Prisma.s07_maladie_infectieuse_typeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s07_maladie_infectieuse_typeScalarWhereWithAggregatesInput | Prisma.s07_maladie_infectieuse_typeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s07_maladie_infectieuse_type"> | number;
    categorie?: Prisma.StringNullableWithAggregatesFilter<"s07_maladie_infectieuse_type"> | string | null;
    code?: Prisma.StringWithAggregatesFilter<"s07_maladie_infectieuse_type"> | string;
    libelle?: Prisma.StringWithAggregatesFilter<"s07_maladie_infectieuse_type"> | string;
    actif?: Prisma.BoolNullableWithAggregatesFilter<"s07_maladie_infectieuse_type"> | boolean | null;
};
export type s07_maladie_infectieuse_typeCreateInput = {
    categorie?: string | null;
    code: string;
    libelle: string;
    actif?: boolean | null;
    rapports?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutMaladie_typeInput;
};
export type s07_maladie_infectieuse_typeUncheckedCreateInput = {
    id?: number;
    categorie?: string | null;
    code: string;
    libelle: string;
    actif?: boolean | null;
    rapports?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutMaladie_typeInput;
};
export type s07_maladie_infectieuse_typeUpdateInput = {
    categorie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    rapports?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutMaladie_typeNestedInput;
};
export type s07_maladie_infectieuse_typeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categorie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    rapports?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutMaladie_typeNestedInput;
};
export type s07_maladie_infectieuse_typeCreateManyInput = {
    id?: number;
    categorie?: string | null;
    code: string;
    libelle: string;
    actif?: boolean | null;
};
export type s07_maladie_infectieuse_typeUpdateManyMutationInput = {
    categorie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s07_maladie_infectieuse_typeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categorie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s07_maladie_infectieuse_typeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categorie?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type s07_maladie_infectieuse_typeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type s07_maladie_infectieuse_typeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categorie?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type s07_maladie_infectieuse_typeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categorie?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type s07_maladie_infectieuse_typeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type S07_maladie_infectieuse_typeNullableScalarRelationFilter = {
    is?: Prisma.s07_maladie_infectieuse_typeWhereInput | null;
    isNot?: Prisma.s07_maladie_infectieuse_typeWhereInput | null;
};
export type s07_maladie_infectieuse_typeCreateNestedOneWithoutRapportsInput = {
    create?: Prisma.XOR<Prisma.s07_maladie_infectieuse_typeCreateWithoutRapportsInput, Prisma.s07_maladie_infectieuse_typeUncheckedCreateWithoutRapportsInput>;
    connectOrCreate?: Prisma.s07_maladie_infectieuse_typeCreateOrConnectWithoutRapportsInput;
    connect?: Prisma.s07_maladie_infectieuse_typeWhereUniqueInput;
};
export type s07_maladie_infectieuse_typeUpdateOneWithoutRapportsNestedInput = {
    create?: Prisma.XOR<Prisma.s07_maladie_infectieuse_typeCreateWithoutRapportsInput, Prisma.s07_maladie_infectieuse_typeUncheckedCreateWithoutRapportsInput>;
    connectOrCreate?: Prisma.s07_maladie_infectieuse_typeCreateOrConnectWithoutRapportsInput;
    upsert?: Prisma.s07_maladie_infectieuse_typeUpsertWithoutRapportsInput;
    disconnect?: Prisma.s07_maladie_infectieuse_typeWhereInput | boolean;
    delete?: Prisma.s07_maladie_infectieuse_typeWhereInput | boolean;
    connect?: Prisma.s07_maladie_infectieuse_typeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s07_maladie_infectieuse_typeUpdateToOneWithWhereWithoutRapportsInput, Prisma.s07_maladie_infectieuse_typeUpdateWithoutRapportsInput>, Prisma.s07_maladie_infectieuse_typeUncheckedUpdateWithoutRapportsInput>;
};
export type s07_maladie_infectieuse_typeCreateWithoutRapportsInput = {
    categorie?: string | null;
    code: string;
    libelle: string;
    actif?: boolean | null;
};
export type s07_maladie_infectieuse_typeUncheckedCreateWithoutRapportsInput = {
    id?: number;
    categorie?: string | null;
    code: string;
    libelle: string;
    actif?: boolean | null;
};
export type s07_maladie_infectieuse_typeCreateOrConnectWithoutRapportsInput = {
    where: Prisma.s07_maladie_infectieuse_typeWhereUniqueInput;
    create: Prisma.XOR<Prisma.s07_maladie_infectieuse_typeCreateWithoutRapportsInput, Prisma.s07_maladie_infectieuse_typeUncheckedCreateWithoutRapportsInput>;
};
export type s07_maladie_infectieuse_typeUpsertWithoutRapportsInput = {
    update: Prisma.XOR<Prisma.s07_maladie_infectieuse_typeUpdateWithoutRapportsInput, Prisma.s07_maladie_infectieuse_typeUncheckedUpdateWithoutRapportsInput>;
    create: Prisma.XOR<Prisma.s07_maladie_infectieuse_typeCreateWithoutRapportsInput, Prisma.s07_maladie_infectieuse_typeUncheckedCreateWithoutRapportsInput>;
    where?: Prisma.s07_maladie_infectieuse_typeWhereInput;
};
export type s07_maladie_infectieuse_typeUpdateToOneWithWhereWithoutRapportsInput = {
    where?: Prisma.s07_maladie_infectieuse_typeWhereInput;
    data: Prisma.XOR<Prisma.s07_maladie_infectieuse_typeUpdateWithoutRapportsInput, Prisma.s07_maladie_infectieuse_typeUncheckedUpdateWithoutRapportsInput>;
};
export type s07_maladie_infectieuse_typeUpdateWithoutRapportsInput = {
    categorie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type s07_maladie_infectieuse_typeUncheckedUpdateWithoutRapportsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categorie?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
/**
 * Count Type S07_maladie_infectieuse_typeCountOutputType
 */
export type S07_maladie_infectieuse_typeCountOutputType = {
    rapports: number;
};
export type S07_maladie_infectieuse_typeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapports?: boolean | S07_maladie_infectieuse_typeCountOutputTypeCountRapportsArgs;
};
/**
 * S07_maladie_infectieuse_typeCountOutputType without action
 */
export type S07_maladie_infectieuse_typeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the S07_maladie_infectieuse_typeCountOutputType
     */
    select?: Prisma.S07_maladie_infectieuse_typeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * S07_maladie_infectieuse_typeCountOutputType without action
 */
export type S07_maladie_infectieuse_typeCountOutputTypeCountRapportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s07_rapport_maladie_infectieuseWhereInput;
};
export type s07_maladie_infectieuse_typeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categorie?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
    rapports?: boolean | Prisma.s07_maladie_infectieuse_type$rapportsArgs<ExtArgs>;
    _count?: boolean | Prisma.S07_maladie_infectieuse_typeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s07_maladie_infectieuse_type"]>;
export type s07_maladie_infectieuse_typeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categorie?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
}, ExtArgs["result"]["s07_maladie_infectieuse_type"]>;
export type s07_maladie_infectieuse_typeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categorie?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
}, ExtArgs["result"]["s07_maladie_infectieuse_type"]>;
export type s07_maladie_infectieuse_typeSelectScalar = {
    id?: boolean;
    categorie?: boolean;
    code?: boolean;
    libelle?: boolean;
    actif?: boolean;
};
export type s07_maladie_infectieuse_typeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "categorie" | "code" | "libelle" | "actif", ExtArgs["result"]["s07_maladie_infectieuse_type"]>;
export type s07_maladie_infectieuse_typeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapports?: boolean | Prisma.s07_maladie_infectieuse_type$rapportsArgs<ExtArgs>;
    _count?: boolean | Prisma.S07_maladie_infectieuse_typeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type s07_maladie_infectieuse_typeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type s07_maladie_infectieuse_typeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $s07_maladie_infectieuse_typePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s07_maladie_infectieuse_type";
    objects: {
        rapports: Prisma.$s07_rapport_maladie_infectieusePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        categorie: string | null;
        code: string;
        libelle: string;
        actif: boolean | null;
    }, ExtArgs["result"]["s07_maladie_infectieuse_type"]>;
    composites: {};
};
export type s07_maladie_infectieuse_typeGetPayload<S extends boolean | null | undefined | s07_maladie_infectieuse_typeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s07_maladie_infectieuse_typePayload, S>;
export type s07_maladie_infectieuse_typeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s07_maladie_infectieuse_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S07_maladie_infectieuse_typeCountAggregateInputType | true;
};
export interface s07_maladie_infectieuse_typeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s07_maladie_infectieuse_type'];
        meta: {
            name: 's07_maladie_infectieuse_type';
        };
    };
    /**
     * Find zero or one S07_maladie_infectieuse_type that matches the filter.
     * @param {s07_maladie_infectieuse_typeFindUniqueArgs} args - Arguments to find a S07_maladie_infectieuse_type
     * @example
     * // Get one S07_maladie_infectieuse_type
     * const s07_maladie_infectieuse_type = await prisma.s07_maladie_infectieuse_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s07_maladie_infectieuse_typeFindUniqueArgs>(args: Prisma.SelectSubset<T, s07_maladie_infectieuse_typeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s07_maladie_infectieuse_typeClient<runtime.Types.Result.GetResult<Prisma.$s07_maladie_infectieuse_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S07_maladie_infectieuse_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s07_maladie_infectieuse_typeFindUniqueOrThrowArgs} args - Arguments to find a S07_maladie_infectieuse_type
     * @example
     * // Get one S07_maladie_infectieuse_type
     * const s07_maladie_infectieuse_type = await prisma.s07_maladie_infectieuse_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s07_maladie_infectieuse_typeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s07_maladie_infectieuse_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s07_maladie_infectieuse_typeClient<runtime.Types.Result.GetResult<Prisma.$s07_maladie_infectieuse_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S07_maladie_infectieuse_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s07_maladie_infectieuse_typeFindFirstArgs} args - Arguments to find a S07_maladie_infectieuse_type
     * @example
     * // Get one S07_maladie_infectieuse_type
     * const s07_maladie_infectieuse_type = await prisma.s07_maladie_infectieuse_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s07_maladie_infectieuse_typeFindFirstArgs>(args?: Prisma.SelectSubset<T, s07_maladie_infectieuse_typeFindFirstArgs<ExtArgs>>): Prisma.Prisma__s07_maladie_infectieuse_typeClient<runtime.Types.Result.GetResult<Prisma.$s07_maladie_infectieuse_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S07_maladie_infectieuse_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s07_maladie_infectieuse_typeFindFirstOrThrowArgs} args - Arguments to find a S07_maladie_infectieuse_type
     * @example
     * // Get one S07_maladie_infectieuse_type
     * const s07_maladie_infectieuse_type = await prisma.s07_maladie_infectieuse_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s07_maladie_infectieuse_typeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s07_maladie_infectieuse_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s07_maladie_infectieuse_typeClient<runtime.Types.Result.GetResult<Prisma.$s07_maladie_infectieuse_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S07_maladie_infectieuse_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s07_maladie_infectieuse_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S07_maladie_infectieuse_types
     * const s07_maladie_infectieuse_types = await prisma.s07_maladie_infectieuse_type.findMany()
     *
     * // Get first 10 S07_maladie_infectieuse_types
     * const s07_maladie_infectieuse_types = await prisma.s07_maladie_infectieuse_type.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s07_maladie_infectieuse_typeWithIdOnly = await prisma.s07_maladie_infectieuse_type.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s07_maladie_infectieuse_typeFindManyArgs>(args?: Prisma.SelectSubset<T, s07_maladie_infectieuse_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s07_maladie_infectieuse_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S07_maladie_infectieuse_type.
     * @param {s07_maladie_infectieuse_typeCreateArgs} args - Arguments to create a S07_maladie_infectieuse_type.
     * @example
     * // Create one S07_maladie_infectieuse_type
     * const S07_maladie_infectieuse_type = await prisma.s07_maladie_infectieuse_type.create({
     *   data: {
     *     // ... data to create a S07_maladie_infectieuse_type
     *   }
     * })
     *
     */
    create<T extends s07_maladie_infectieuse_typeCreateArgs>(args: Prisma.SelectSubset<T, s07_maladie_infectieuse_typeCreateArgs<ExtArgs>>): Prisma.Prisma__s07_maladie_infectieuse_typeClient<runtime.Types.Result.GetResult<Prisma.$s07_maladie_infectieuse_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S07_maladie_infectieuse_types.
     * @param {s07_maladie_infectieuse_typeCreateManyArgs} args - Arguments to create many S07_maladie_infectieuse_types.
     * @example
     * // Create many S07_maladie_infectieuse_types
     * const s07_maladie_infectieuse_type = await prisma.s07_maladie_infectieuse_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s07_maladie_infectieuse_typeCreateManyArgs>(args?: Prisma.SelectSubset<T, s07_maladie_infectieuse_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S07_maladie_infectieuse_types and returns the data saved in the database.
     * @param {s07_maladie_infectieuse_typeCreateManyAndReturnArgs} args - Arguments to create many S07_maladie_infectieuse_types.
     * @example
     * // Create many S07_maladie_infectieuse_types
     * const s07_maladie_infectieuse_type = await prisma.s07_maladie_infectieuse_type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S07_maladie_infectieuse_types and only return the `id`
     * const s07_maladie_infectieuse_typeWithIdOnly = await prisma.s07_maladie_infectieuse_type.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s07_maladie_infectieuse_typeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s07_maladie_infectieuse_typeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s07_maladie_infectieuse_typePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S07_maladie_infectieuse_type.
     * @param {s07_maladie_infectieuse_typeDeleteArgs} args - Arguments to delete one S07_maladie_infectieuse_type.
     * @example
     * // Delete one S07_maladie_infectieuse_type
     * const S07_maladie_infectieuse_type = await prisma.s07_maladie_infectieuse_type.delete({
     *   where: {
     *     // ... filter to delete one S07_maladie_infectieuse_type
     *   }
     * })
     *
     */
    delete<T extends s07_maladie_infectieuse_typeDeleteArgs>(args: Prisma.SelectSubset<T, s07_maladie_infectieuse_typeDeleteArgs<ExtArgs>>): Prisma.Prisma__s07_maladie_infectieuse_typeClient<runtime.Types.Result.GetResult<Prisma.$s07_maladie_infectieuse_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S07_maladie_infectieuse_type.
     * @param {s07_maladie_infectieuse_typeUpdateArgs} args - Arguments to update one S07_maladie_infectieuse_type.
     * @example
     * // Update one S07_maladie_infectieuse_type
     * const s07_maladie_infectieuse_type = await prisma.s07_maladie_infectieuse_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s07_maladie_infectieuse_typeUpdateArgs>(args: Prisma.SelectSubset<T, s07_maladie_infectieuse_typeUpdateArgs<ExtArgs>>): Prisma.Prisma__s07_maladie_infectieuse_typeClient<runtime.Types.Result.GetResult<Prisma.$s07_maladie_infectieuse_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S07_maladie_infectieuse_types.
     * @param {s07_maladie_infectieuse_typeDeleteManyArgs} args - Arguments to filter S07_maladie_infectieuse_types to delete.
     * @example
     * // Delete a few S07_maladie_infectieuse_types
     * const { count } = await prisma.s07_maladie_infectieuse_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s07_maladie_infectieuse_typeDeleteManyArgs>(args?: Prisma.SelectSubset<T, s07_maladie_infectieuse_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S07_maladie_infectieuse_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s07_maladie_infectieuse_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S07_maladie_infectieuse_types
     * const s07_maladie_infectieuse_type = await prisma.s07_maladie_infectieuse_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s07_maladie_infectieuse_typeUpdateManyArgs>(args: Prisma.SelectSubset<T, s07_maladie_infectieuse_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S07_maladie_infectieuse_types and returns the data updated in the database.
     * @param {s07_maladie_infectieuse_typeUpdateManyAndReturnArgs} args - Arguments to update many S07_maladie_infectieuse_types.
     * @example
     * // Update many S07_maladie_infectieuse_types
     * const s07_maladie_infectieuse_type = await prisma.s07_maladie_infectieuse_type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S07_maladie_infectieuse_types and only return the `id`
     * const s07_maladie_infectieuse_typeWithIdOnly = await prisma.s07_maladie_infectieuse_type.updateManyAndReturn({
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
    updateManyAndReturn<T extends s07_maladie_infectieuse_typeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s07_maladie_infectieuse_typeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s07_maladie_infectieuse_typePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S07_maladie_infectieuse_type.
     * @param {s07_maladie_infectieuse_typeUpsertArgs} args - Arguments to update or create a S07_maladie_infectieuse_type.
     * @example
     * // Update or create a S07_maladie_infectieuse_type
     * const s07_maladie_infectieuse_type = await prisma.s07_maladie_infectieuse_type.upsert({
     *   create: {
     *     // ... data to create a S07_maladie_infectieuse_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S07_maladie_infectieuse_type we want to update
     *   }
     * })
     */
    upsert<T extends s07_maladie_infectieuse_typeUpsertArgs>(args: Prisma.SelectSubset<T, s07_maladie_infectieuse_typeUpsertArgs<ExtArgs>>): Prisma.Prisma__s07_maladie_infectieuse_typeClient<runtime.Types.Result.GetResult<Prisma.$s07_maladie_infectieuse_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S07_maladie_infectieuse_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s07_maladie_infectieuse_typeCountArgs} args - Arguments to filter S07_maladie_infectieuse_types to count.
     * @example
     * // Count the number of S07_maladie_infectieuse_types
     * const count = await prisma.s07_maladie_infectieuse_type.count({
     *   where: {
     *     // ... the filter for the S07_maladie_infectieuse_types we want to count
     *   }
     * })
    **/
    count<T extends s07_maladie_infectieuse_typeCountArgs>(args?: Prisma.Subset<T, s07_maladie_infectieuse_typeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S07_maladie_infectieuse_typeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S07_maladie_infectieuse_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S07_maladie_infectieuse_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S07_maladie_infectieuse_typeAggregateArgs>(args: Prisma.Subset<T, S07_maladie_infectieuse_typeAggregateArgs>): Prisma.PrismaPromise<GetS07_maladie_infectieuse_typeAggregateType<T>>;
    /**
     * Group by S07_maladie_infectieuse_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s07_maladie_infectieuse_typeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s07_maladie_infectieuse_typeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s07_maladie_infectieuse_typeGroupByArgs['orderBy'];
    } : {
        orderBy?: s07_maladie_infectieuse_typeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s07_maladie_infectieuse_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS07_maladie_infectieuse_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s07_maladie_infectieuse_type model
     */
    readonly fields: s07_maladie_infectieuse_typeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s07_maladie_infectieuse_type.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s07_maladie_infectieuse_typeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rapports<T extends Prisma.s07_maladie_infectieuse_type$rapportsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.s07_maladie_infectieuse_type$rapportsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s07_rapport_maladie_infectieusePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the s07_maladie_infectieuse_type model
 */
export interface s07_maladie_infectieuse_typeFieldRefs {
    readonly id: Prisma.FieldRef<"s07_maladie_infectieuse_type", 'Int'>;
    readonly categorie: Prisma.FieldRef<"s07_maladie_infectieuse_type", 'String'>;
    readonly code: Prisma.FieldRef<"s07_maladie_infectieuse_type", 'String'>;
    readonly libelle: Prisma.FieldRef<"s07_maladie_infectieuse_type", 'String'>;
    readonly actif: Prisma.FieldRef<"s07_maladie_infectieuse_type", 'Boolean'>;
}
/**
 * s07_maladie_infectieuse_type findUnique
 */
export type s07_maladie_infectieuse_typeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladie_infectieuse_type
     */
    select?: Prisma.s07_maladie_infectieuse_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladie_infectieuse_type
     */
    omit?: Prisma.s07_maladie_infectieuse_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladie_infectieuse_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s07_maladie_infectieuse_type to fetch.
     */
    where: Prisma.s07_maladie_infectieuse_typeWhereUniqueInput;
};
/**
 * s07_maladie_infectieuse_type findUniqueOrThrow
 */
export type s07_maladie_infectieuse_typeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladie_infectieuse_type
     */
    select?: Prisma.s07_maladie_infectieuse_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladie_infectieuse_type
     */
    omit?: Prisma.s07_maladie_infectieuse_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladie_infectieuse_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s07_maladie_infectieuse_type to fetch.
     */
    where: Prisma.s07_maladie_infectieuse_typeWhereUniqueInput;
};
/**
 * s07_maladie_infectieuse_type findFirst
 */
export type s07_maladie_infectieuse_typeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladie_infectieuse_type
     */
    select?: Prisma.s07_maladie_infectieuse_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladie_infectieuse_type
     */
    omit?: Prisma.s07_maladie_infectieuse_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladie_infectieuse_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s07_maladie_infectieuse_type to fetch.
     */
    where?: Prisma.s07_maladie_infectieuse_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s07_maladie_infectieuse_types to fetch.
     */
    orderBy?: Prisma.s07_maladie_infectieuse_typeOrderByWithRelationInput | Prisma.s07_maladie_infectieuse_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s07_maladie_infectieuse_types.
     */
    cursor?: Prisma.s07_maladie_infectieuse_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s07_maladie_infectieuse_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s07_maladie_infectieuse_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s07_maladie_infectieuse_types.
     */
    distinct?: Prisma.S07_maladie_infectieuse_typeScalarFieldEnum | Prisma.S07_maladie_infectieuse_typeScalarFieldEnum[];
};
/**
 * s07_maladie_infectieuse_type findFirstOrThrow
 */
export type s07_maladie_infectieuse_typeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladie_infectieuse_type
     */
    select?: Prisma.s07_maladie_infectieuse_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladie_infectieuse_type
     */
    omit?: Prisma.s07_maladie_infectieuse_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladie_infectieuse_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s07_maladie_infectieuse_type to fetch.
     */
    where?: Prisma.s07_maladie_infectieuse_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s07_maladie_infectieuse_types to fetch.
     */
    orderBy?: Prisma.s07_maladie_infectieuse_typeOrderByWithRelationInput | Prisma.s07_maladie_infectieuse_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s07_maladie_infectieuse_types.
     */
    cursor?: Prisma.s07_maladie_infectieuse_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s07_maladie_infectieuse_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s07_maladie_infectieuse_types.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s07_maladie_infectieuse_types.
     */
    distinct?: Prisma.S07_maladie_infectieuse_typeScalarFieldEnum | Prisma.S07_maladie_infectieuse_typeScalarFieldEnum[];
};
/**
 * s07_maladie_infectieuse_type findMany
 */
export type s07_maladie_infectieuse_typeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladie_infectieuse_type
     */
    select?: Prisma.s07_maladie_infectieuse_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladie_infectieuse_type
     */
    omit?: Prisma.s07_maladie_infectieuse_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladie_infectieuse_typeInclude<ExtArgs> | null;
    /**
     * Filter, which s07_maladie_infectieuse_types to fetch.
     */
    where?: Prisma.s07_maladie_infectieuse_typeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s07_maladie_infectieuse_types to fetch.
     */
    orderBy?: Prisma.s07_maladie_infectieuse_typeOrderByWithRelationInput | Prisma.s07_maladie_infectieuse_typeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s07_maladie_infectieuse_types.
     */
    cursor?: Prisma.s07_maladie_infectieuse_typeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s07_maladie_infectieuse_types from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s07_maladie_infectieuse_types.
     */
    skip?: number;
    distinct?: Prisma.S07_maladie_infectieuse_typeScalarFieldEnum | Prisma.S07_maladie_infectieuse_typeScalarFieldEnum[];
};
/**
 * s07_maladie_infectieuse_type create
 */
export type s07_maladie_infectieuse_typeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladie_infectieuse_type
     */
    select?: Prisma.s07_maladie_infectieuse_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladie_infectieuse_type
     */
    omit?: Prisma.s07_maladie_infectieuse_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladie_infectieuse_typeInclude<ExtArgs> | null;
    /**
     * The data needed to create a s07_maladie_infectieuse_type.
     */
    data: Prisma.XOR<Prisma.s07_maladie_infectieuse_typeCreateInput, Prisma.s07_maladie_infectieuse_typeUncheckedCreateInput>;
};
/**
 * s07_maladie_infectieuse_type createMany
 */
export type s07_maladie_infectieuse_typeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s07_maladie_infectieuse_types.
     */
    data: Prisma.s07_maladie_infectieuse_typeCreateManyInput | Prisma.s07_maladie_infectieuse_typeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s07_maladie_infectieuse_type createManyAndReturn
 */
export type s07_maladie_infectieuse_typeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladie_infectieuse_type
     */
    select?: Prisma.s07_maladie_infectieuse_typeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladie_infectieuse_type
     */
    omit?: Prisma.s07_maladie_infectieuse_typeOmit<ExtArgs> | null;
    /**
     * The data used to create many s07_maladie_infectieuse_types.
     */
    data: Prisma.s07_maladie_infectieuse_typeCreateManyInput | Prisma.s07_maladie_infectieuse_typeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s07_maladie_infectieuse_type update
 */
export type s07_maladie_infectieuse_typeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladie_infectieuse_type
     */
    select?: Prisma.s07_maladie_infectieuse_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladie_infectieuse_type
     */
    omit?: Prisma.s07_maladie_infectieuse_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladie_infectieuse_typeInclude<ExtArgs> | null;
    /**
     * The data needed to update a s07_maladie_infectieuse_type.
     */
    data: Prisma.XOR<Prisma.s07_maladie_infectieuse_typeUpdateInput, Prisma.s07_maladie_infectieuse_typeUncheckedUpdateInput>;
    /**
     * Choose, which s07_maladie_infectieuse_type to update.
     */
    where: Prisma.s07_maladie_infectieuse_typeWhereUniqueInput;
};
/**
 * s07_maladie_infectieuse_type updateMany
 */
export type s07_maladie_infectieuse_typeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s07_maladie_infectieuse_types.
     */
    data: Prisma.XOR<Prisma.s07_maladie_infectieuse_typeUpdateManyMutationInput, Prisma.s07_maladie_infectieuse_typeUncheckedUpdateManyInput>;
    /**
     * Filter which s07_maladie_infectieuse_types to update
     */
    where?: Prisma.s07_maladie_infectieuse_typeWhereInput;
    /**
     * Limit how many s07_maladie_infectieuse_types to update.
     */
    limit?: number;
};
/**
 * s07_maladie_infectieuse_type updateManyAndReturn
 */
export type s07_maladie_infectieuse_typeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladie_infectieuse_type
     */
    select?: Prisma.s07_maladie_infectieuse_typeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladie_infectieuse_type
     */
    omit?: Prisma.s07_maladie_infectieuse_typeOmit<ExtArgs> | null;
    /**
     * The data used to update s07_maladie_infectieuse_types.
     */
    data: Prisma.XOR<Prisma.s07_maladie_infectieuse_typeUpdateManyMutationInput, Prisma.s07_maladie_infectieuse_typeUncheckedUpdateManyInput>;
    /**
     * Filter which s07_maladie_infectieuse_types to update
     */
    where?: Prisma.s07_maladie_infectieuse_typeWhereInput;
    /**
     * Limit how many s07_maladie_infectieuse_types to update.
     */
    limit?: number;
};
/**
 * s07_maladie_infectieuse_type upsert
 */
export type s07_maladie_infectieuse_typeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladie_infectieuse_type
     */
    select?: Prisma.s07_maladie_infectieuse_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladie_infectieuse_type
     */
    omit?: Prisma.s07_maladie_infectieuse_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladie_infectieuse_typeInclude<ExtArgs> | null;
    /**
     * The filter to search for the s07_maladie_infectieuse_type to update in case it exists.
     */
    where: Prisma.s07_maladie_infectieuse_typeWhereUniqueInput;
    /**
     * In case the s07_maladie_infectieuse_type found by the `where` argument doesn't exist, create a new s07_maladie_infectieuse_type with this data.
     */
    create: Prisma.XOR<Prisma.s07_maladie_infectieuse_typeCreateInput, Prisma.s07_maladie_infectieuse_typeUncheckedCreateInput>;
    /**
     * In case the s07_maladie_infectieuse_type was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s07_maladie_infectieuse_typeUpdateInput, Prisma.s07_maladie_infectieuse_typeUncheckedUpdateInput>;
};
/**
 * s07_maladie_infectieuse_type delete
 */
export type s07_maladie_infectieuse_typeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladie_infectieuse_type
     */
    select?: Prisma.s07_maladie_infectieuse_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladie_infectieuse_type
     */
    omit?: Prisma.s07_maladie_infectieuse_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladie_infectieuse_typeInclude<ExtArgs> | null;
    /**
     * Filter which s07_maladie_infectieuse_type to delete.
     */
    where: Prisma.s07_maladie_infectieuse_typeWhereUniqueInput;
};
/**
 * s07_maladie_infectieuse_type deleteMany
 */
export type s07_maladie_infectieuse_typeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s07_maladie_infectieuse_types to delete
     */
    where?: Prisma.s07_maladie_infectieuse_typeWhereInput;
    /**
     * Limit how many s07_maladie_infectieuse_types to delete.
     */
    limit?: number;
};
/**
 * s07_maladie_infectieuse_type.rapports
 */
export type s07_maladie_infectieuse_type$rapportsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_rapport_maladie_infectieuse
     */
    select?: Prisma.s07_rapport_maladie_infectieuseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_rapport_maladie_infectieuse
     */
    omit?: Prisma.s07_rapport_maladie_infectieuseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_rapport_maladie_infectieuseInclude<ExtArgs> | null;
    where?: Prisma.s07_rapport_maladie_infectieuseWhereInput;
    orderBy?: Prisma.s07_rapport_maladie_infectieuseOrderByWithRelationInput | Prisma.s07_rapport_maladie_infectieuseOrderByWithRelationInput[];
    cursor?: Prisma.s07_rapport_maladie_infectieuseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.S07_rapport_maladie_infectieuseScalarFieldEnum | Prisma.S07_rapport_maladie_infectieuseScalarFieldEnum[];
};
/**
 * s07_maladie_infectieuse_type without action
 */
export type s07_maladie_infectieuse_typeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladie_infectieuse_type
     */
    select?: Prisma.s07_maladie_infectieuse_typeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladie_infectieuse_type
     */
    omit?: Prisma.s07_maladie_infectieuse_typeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladie_infectieuse_typeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s07_maladie_infectieuse_type.d.ts.map