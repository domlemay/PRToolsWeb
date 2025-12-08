import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s01_prise_en_charge
 *
 */
export type s01_prise_en_chargeModel = runtime.Types.Result.DefaultSelection<Prisma.$s01_prise_en_chargePayload>;
export type AggregateS01_prise_en_charge = {
    _count: S01_prise_en_chargeCountAggregateOutputType | null;
    _avg: S01_prise_en_chargeAvgAggregateOutputType | null;
    _sum: S01_prise_en_chargeSumAggregateOutputType | null;
    _min: S01_prise_en_chargeMinAggregateOutputType | null;
    _max: S01_prise_en_chargeMaxAggregateOutputType | null;
};
export type S01_prise_en_chargeAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S01_prise_en_chargeSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S01_prise_en_chargeMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    date_prise_en_charge: Date | null;
};
export type S01_prise_en_chargeMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    date_prise_en_charge: Date | null;
};
export type S01_prise_en_chargeCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    date_prise_en_charge: number;
    _all: number;
};
export type S01_prise_en_chargeAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S01_prise_en_chargeSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S01_prise_en_chargeMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    date_prise_en_charge?: true;
};
export type S01_prise_en_chargeMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    date_prise_en_charge?: true;
};
export type S01_prise_en_chargeCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    date_prise_en_charge?: true;
    _all?: true;
};
export type S01_prise_en_chargeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s01_prise_en_charge to aggregate.
     */
    where?: Prisma.s01_prise_en_chargeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s01_prise_en_charges to fetch.
     */
    orderBy?: Prisma.s01_prise_en_chargeOrderByWithRelationInput | Prisma.s01_prise_en_chargeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s01_prise_en_chargeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s01_prise_en_charges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s01_prise_en_charges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s01_prise_en_charges
    **/
    _count?: true | S01_prise_en_chargeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S01_prise_en_chargeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S01_prise_en_chargeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S01_prise_en_chargeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S01_prise_en_chargeMaxAggregateInputType;
};
export type GetS01_prise_en_chargeAggregateType<T extends S01_prise_en_chargeAggregateArgs> = {
    [P in keyof T & keyof AggregateS01_prise_en_charge]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS01_prise_en_charge[P]> : Prisma.GetScalarType<T[P], AggregateS01_prise_en_charge[P]>;
};
export type s01_prise_en_chargeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s01_prise_en_chargeWhereInput;
    orderBy?: Prisma.s01_prise_en_chargeOrderByWithAggregationInput | Prisma.s01_prise_en_chargeOrderByWithAggregationInput[];
    by: Prisma.S01_prise_en_chargeScalarFieldEnum[] | Prisma.S01_prise_en_chargeScalarFieldEnum;
    having?: Prisma.s01_prise_en_chargeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S01_prise_en_chargeCountAggregateInputType | true;
    _avg?: S01_prise_en_chargeAvgAggregateInputType;
    _sum?: S01_prise_en_chargeSumAggregateInputType;
    _min?: S01_prise_en_chargeMinAggregateInputType;
    _max?: S01_prise_en_chargeMaxAggregateInputType;
};
export type S01_prise_en_chargeGroupByOutputType = {
    id: number;
    rapport_id: number;
    date_prise_en_charge: Date;
    _count: S01_prise_en_chargeCountAggregateOutputType | null;
    _avg: S01_prise_en_chargeAvgAggregateOutputType | null;
    _sum: S01_prise_en_chargeSumAggregateOutputType | null;
    _min: S01_prise_en_chargeMinAggregateOutputType | null;
    _max: S01_prise_en_chargeMaxAggregateOutputType | null;
};
type GetS01_prise_en_chargeGroupByPayload<T extends s01_prise_en_chargeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S01_prise_en_chargeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S01_prise_en_chargeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S01_prise_en_chargeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S01_prise_en_chargeGroupByOutputType[P]>;
}>>;
export type s01_prise_en_chargeWhereInput = {
    AND?: Prisma.s01_prise_en_chargeWhereInput | Prisma.s01_prise_en_chargeWhereInput[];
    OR?: Prisma.s01_prise_en_chargeWhereInput[];
    NOT?: Prisma.s01_prise_en_chargeWhereInput | Prisma.s01_prise_en_chargeWhereInput[];
    id?: Prisma.IntFilter<"s01_prise_en_charge"> | number;
    rapport_id?: Prisma.IntFilter<"s01_prise_en_charge"> | number;
    date_prise_en_charge?: Prisma.DateTimeFilter<"s01_prise_en_charge"> | Date | string;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s01_prise_en_chargeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    date_prise_en_charge?: Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s01_prise_en_chargeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id?: number;
    AND?: Prisma.s01_prise_en_chargeWhereInput | Prisma.s01_prise_en_chargeWhereInput[];
    OR?: Prisma.s01_prise_en_chargeWhereInput[];
    NOT?: Prisma.s01_prise_en_chargeWhereInput | Prisma.s01_prise_en_chargeWhereInput[];
    date_prise_en_charge?: Prisma.DateTimeFilter<"s01_prise_en_charge"> | Date | string;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id" | "rapport_id">;
export type s01_prise_en_chargeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    date_prise_en_charge?: Prisma.SortOrder;
    _count?: Prisma.s01_prise_en_chargeCountOrderByAggregateInput;
    _avg?: Prisma.s01_prise_en_chargeAvgOrderByAggregateInput;
    _max?: Prisma.s01_prise_en_chargeMaxOrderByAggregateInput;
    _min?: Prisma.s01_prise_en_chargeMinOrderByAggregateInput;
    _sum?: Prisma.s01_prise_en_chargeSumOrderByAggregateInput;
};
export type s01_prise_en_chargeScalarWhereWithAggregatesInput = {
    AND?: Prisma.s01_prise_en_chargeScalarWhereWithAggregatesInput | Prisma.s01_prise_en_chargeScalarWhereWithAggregatesInput[];
    OR?: Prisma.s01_prise_en_chargeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s01_prise_en_chargeScalarWhereWithAggregatesInput | Prisma.s01_prise_en_chargeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s01_prise_en_charge"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s01_prise_en_charge"> | number;
    date_prise_en_charge?: Prisma.DateTimeWithAggregatesFilter<"s01_prise_en_charge"> | Date | string;
};
export type s01_prise_en_chargeCreateInput = {
    date_prise_en_charge: Date | string;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS01_prise_en_chargeInput;
};
export type s01_prise_en_chargeUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    date_prise_en_charge: Date | string;
};
export type s01_prise_en_chargeUpdateInput = {
    date_prise_en_charge?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS01_prise_en_chargeNestedInput;
};
export type s01_prise_en_chargeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    date_prise_en_charge?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type s01_prise_en_chargeCreateManyInput = {
    id?: number;
    rapport_id: number;
    date_prise_en_charge: Date | string;
};
export type s01_prise_en_chargeUpdateManyMutationInput = {
    date_prise_en_charge?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type s01_prise_en_chargeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    date_prise_en_charge?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type S01_prise_en_chargeNullableScalarRelationFilter = {
    is?: Prisma.s01_prise_en_chargeWhereInput | null;
    isNot?: Prisma.s01_prise_en_chargeWhereInput | null;
};
export type s01_prise_en_chargeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    date_prise_en_charge?: Prisma.SortOrder;
};
export type s01_prise_en_chargeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s01_prise_en_chargeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    date_prise_en_charge?: Prisma.SortOrder;
};
export type s01_prise_en_chargeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    date_prise_en_charge?: Prisma.SortOrder;
};
export type s01_prise_en_chargeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s01_prise_en_chargeCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s01_prise_en_chargeCreateWithoutRapportInput, Prisma.s01_prise_en_chargeUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s01_prise_en_chargeCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s01_prise_en_chargeWhereUniqueInput;
};
export type s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s01_prise_en_chargeCreateWithoutRapportInput, Prisma.s01_prise_en_chargeUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s01_prise_en_chargeCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s01_prise_en_chargeWhereUniqueInput;
};
export type s01_prise_en_chargeUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s01_prise_en_chargeCreateWithoutRapportInput, Prisma.s01_prise_en_chargeUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s01_prise_en_chargeCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s01_prise_en_chargeUpsertWithoutRapportInput;
    disconnect?: Prisma.s01_prise_en_chargeWhereInput | boolean;
    delete?: Prisma.s01_prise_en_chargeWhereInput | boolean;
    connect?: Prisma.s01_prise_en_chargeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s01_prise_en_chargeUpdateToOneWithWhereWithoutRapportInput, Prisma.s01_prise_en_chargeUpdateWithoutRapportInput>, Prisma.s01_prise_en_chargeUncheckedUpdateWithoutRapportInput>;
};
export type s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s01_prise_en_chargeCreateWithoutRapportInput, Prisma.s01_prise_en_chargeUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s01_prise_en_chargeCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s01_prise_en_chargeUpsertWithoutRapportInput;
    disconnect?: Prisma.s01_prise_en_chargeWhereInput | boolean;
    delete?: Prisma.s01_prise_en_chargeWhereInput | boolean;
    connect?: Prisma.s01_prise_en_chargeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s01_prise_en_chargeUpdateToOneWithWhereWithoutRapportInput, Prisma.s01_prise_en_chargeUpdateWithoutRapportInput>, Prisma.s01_prise_en_chargeUncheckedUpdateWithoutRapportInput>;
};
export type s01_prise_en_chargeCreateWithoutRapportInput = {
    date_prise_en_charge: Date | string;
};
export type s01_prise_en_chargeUncheckedCreateWithoutRapportInput = {
    id?: number;
    date_prise_en_charge: Date | string;
};
export type s01_prise_en_chargeCreateOrConnectWithoutRapportInput = {
    where: Prisma.s01_prise_en_chargeWhereUniqueInput;
    create: Prisma.XOR<Prisma.s01_prise_en_chargeCreateWithoutRapportInput, Prisma.s01_prise_en_chargeUncheckedCreateWithoutRapportInput>;
};
export type s01_prise_en_chargeUpsertWithoutRapportInput = {
    update: Prisma.XOR<Prisma.s01_prise_en_chargeUpdateWithoutRapportInput, Prisma.s01_prise_en_chargeUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s01_prise_en_chargeCreateWithoutRapportInput, Prisma.s01_prise_en_chargeUncheckedCreateWithoutRapportInput>;
    where?: Prisma.s01_prise_en_chargeWhereInput;
};
export type s01_prise_en_chargeUpdateToOneWithWhereWithoutRapportInput = {
    where?: Prisma.s01_prise_en_chargeWhereInput;
    data: Prisma.XOR<Prisma.s01_prise_en_chargeUpdateWithoutRapportInput, Prisma.s01_prise_en_chargeUncheckedUpdateWithoutRapportInput>;
};
export type s01_prise_en_chargeUpdateWithoutRapportInput = {
    date_prise_en_charge?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type s01_prise_en_chargeUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    date_prise_en_charge?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type s01_prise_en_chargeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    date_prise_en_charge?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s01_prise_en_charge"]>;
export type s01_prise_en_chargeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    date_prise_en_charge?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s01_prise_en_charge"]>;
export type s01_prise_en_chargeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    date_prise_en_charge?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s01_prise_en_charge"]>;
export type s01_prise_en_chargeSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    date_prise_en_charge?: boolean;
};
export type s01_prise_en_chargeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "date_prise_en_charge", ExtArgs["result"]["s01_prise_en_charge"]>;
export type s01_prise_en_chargeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s01_prise_en_chargeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s01_prise_en_chargeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s01_prise_en_chargePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s01_prise_en_charge";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        date_prise_en_charge: Date;
    }, ExtArgs["result"]["s01_prise_en_charge"]>;
    composites: {};
};
export type s01_prise_en_chargeGetPayload<S extends boolean | null | undefined | s01_prise_en_chargeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s01_prise_en_chargePayload, S>;
export type s01_prise_en_chargeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s01_prise_en_chargeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S01_prise_en_chargeCountAggregateInputType | true;
};
export interface s01_prise_en_chargeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s01_prise_en_charge'];
        meta: {
            name: 's01_prise_en_charge';
        };
    };
    /**
     * Find zero or one S01_prise_en_charge that matches the filter.
     * @param {s01_prise_en_chargeFindUniqueArgs} args - Arguments to find a S01_prise_en_charge
     * @example
     * // Get one S01_prise_en_charge
     * const s01_prise_en_charge = await prisma.s01_prise_en_charge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s01_prise_en_chargeFindUniqueArgs>(args: Prisma.SelectSubset<T, s01_prise_en_chargeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s01_prise_en_chargeClient<runtime.Types.Result.GetResult<Prisma.$s01_prise_en_chargePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S01_prise_en_charge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s01_prise_en_chargeFindUniqueOrThrowArgs} args - Arguments to find a S01_prise_en_charge
     * @example
     * // Get one S01_prise_en_charge
     * const s01_prise_en_charge = await prisma.s01_prise_en_charge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s01_prise_en_chargeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s01_prise_en_chargeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s01_prise_en_chargeClient<runtime.Types.Result.GetResult<Prisma.$s01_prise_en_chargePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S01_prise_en_charge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s01_prise_en_chargeFindFirstArgs} args - Arguments to find a S01_prise_en_charge
     * @example
     * // Get one S01_prise_en_charge
     * const s01_prise_en_charge = await prisma.s01_prise_en_charge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s01_prise_en_chargeFindFirstArgs>(args?: Prisma.SelectSubset<T, s01_prise_en_chargeFindFirstArgs<ExtArgs>>): Prisma.Prisma__s01_prise_en_chargeClient<runtime.Types.Result.GetResult<Prisma.$s01_prise_en_chargePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S01_prise_en_charge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s01_prise_en_chargeFindFirstOrThrowArgs} args - Arguments to find a S01_prise_en_charge
     * @example
     * // Get one S01_prise_en_charge
     * const s01_prise_en_charge = await prisma.s01_prise_en_charge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s01_prise_en_chargeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s01_prise_en_chargeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s01_prise_en_chargeClient<runtime.Types.Result.GetResult<Prisma.$s01_prise_en_chargePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S01_prise_en_charges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s01_prise_en_chargeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S01_prise_en_charges
     * const s01_prise_en_charges = await prisma.s01_prise_en_charge.findMany()
     *
     * // Get first 10 S01_prise_en_charges
     * const s01_prise_en_charges = await prisma.s01_prise_en_charge.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s01_prise_en_chargeWithIdOnly = await prisma.s01_prise_en_charge.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s01_prise_en_chargeFindManyArgs>(args?: Prisma.SelectSubset<T, s01_prise_en_chargeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s01_prise_en_chargePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S01_prise_en_charge.
     * @param {s01_prise_en_chargeCreateArgs} args - Arguments to create a S01_prise_en_charge.
     * @example
     * // Create one S01_prise_en_charge
     * const S01_prise_en_charge = await prisma.s01_prise_en_charge.create({
     *   data: {
     *     // ... data to create a S01_prise_en_charge
     *   }
     * })
     *
     */
    create<T extends s01_prise_en_chargeCreateArgs>(args: Prisma.SelectSubset<T, s01_prise_en_chargeCreateArgs<ExtArgs>>): Prisma.Prisma__s01_prise_en_chargeClient<runtime.Types.Result.GetResult<Prisma.$s01_prise_en_chargePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S01_prise_en_charges.
     * @param {s01_prise_en_chargeCreateManyArgs} args - Arguments to create many S01_prise_en_charges.
     * @example
     * // Create many S01_prise_en_charges
     * const s01_prise_en_charge = await prisma.s01_prise_en_charge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s01_prise_en_chargeCreateManyArgs>(args?: Prisma.SelectSubset<T, s01_prise_en_chargeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S01_prise_en_charges and returns the data saved in the database.
     * @param {s01_prise_en_chargeCreateManyAndReturnArgs} args - Arguments to create many S01_prise_en_charges.
     * @example
     * // Create many S01_prise_en_charges
     * const s01_prise_en_charge = await prisma.s01_prise_en_charge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S01_prise_en_charges and only return the `id`
     * const s01_prise_en_chargeWithIdOnly = await prisma.s01_prise_en_charge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s01_prise_en_chargeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s01_prise_en_chargeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s01_prise_en_chargePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S01_prise_en_charge.
     * @param {s01_prise_en_chargeDeleteArgs} args - Arguments to delete one S01_prise_en_charge.
     * @example
     * // Delete one S01_prise_en_charge
     * const S01_prise_en_charge = await prisma.s01_prise_en_charge.delete({
     *   where: {
     *     // ... filter to delete one S01_prise_en_charge
     *   }
     * })
     *
     */
    delete<T extends s01_prise_en_chargeDeleteArgs>(args: Prisma.SelectSubset<T, s01_prise_en_chargeDeleteArgs<ExtArgs>>): Prisma.Prisma__s01_prise_en_chargeClient<runtime.Types.Result.GetResult<Prisma.$s01_prise_en_chargePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S01_prise_en_charge.
     * @param {s01_prise_en_chargeUpdateArgs} args - Arguments to update one S01_prise_en_charge.
     * @example
     * // Update one S01_prise_en_charge
     * const s01_prise_en_charge = await prisma.s01_prise_en_charge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s01_prise_en_chargeUpdateArgs>(args: Prisma.SelectSubset<T, s01_prise_en_chargeUpdateArgs<ExtArgs>>): Prisma.Prisma__s01_prise_en_chargeClient<runtime.Types.Result.GetResult<Prisma.$s01_prise_en_chargePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S01_prise_en_charges.
     * @param {s01_prise_en_chargeDeleteManyArgs} args - Arguments to filter S01_prise_en_charges to delete.
     * @example
     * // Delete a few S01_prise_en_charges
     * const { count } = await prisma.s01_prise_en_charge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s01_prise_en_chargeDeleteManyArgs>(args?: Prisma.SelectSubset<T, s01_prise_en_chargeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S01_prise_en_charges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s01_prise_en_chargeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S01_prise_en_charges
     * const s01_prise_en_charge = await prisma.s01_prise_en_charge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s01_prise_en_chargeUpdateManyArgs>(args: Prisma.SelectSubset<T, s01_prise_en_chargeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S01_prise_en_charges and returns the data updated in the database.
     * @param {s01_prise_en_chargeUpdateManyAndReturnArgs} args - Arguments to update many S01_prise_en_charges.
     * @example
     * // Update many S01_prise_en_charges
     * const s01_prise_en_charge = await prisma.s01_prise_en_charge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S01_prise_en_charges and only return the `id`
     * const s01_prise_en_chargeWithIdOnly = await prisma.s01_prise_en_charge.updateManyAndReturn({
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
    updateManyAndReturn<T extends s01_prise_en_chargeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s01_prise_en_chargeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s01_prise_en_chargePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S01_prise_en_charge.
     * @param {s01_prise_en_chargeUpsertArgs} args - Arguments to update or create a S01_prise_en_charge.
     * @example
     * // Update or create a S01_prise_en_charge
     * const s01_prise_en_charge = await prisma.s01_prise_en_charge.upsert({
     *   create: {
     *     // ... data to create a S01_prise_en_charge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S01_prise_en_charge we want to update
     *   }
     * })
     */
    upsert<T extends s01_prise_en_chargeUpsertArgs>(args: Prisma.SelectSubset<T, s01_prise_en_chargeUpsertArgs<ExtArgs>>): Prisma.Prisma__s01_prise_en_chargeClient<runtime.Types.Result.GetResult<Prisma.$s01_prise_en_chargePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S01_prise_en_charges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s01_prise_en_chargeCountArgs} args - Arguments to filter S01_prise_en_charges to count.
     * @example
     * // Count the number of S01_prise_en_charges
     * const count = await prisma.s01_prise_en_charge.count({
     *   where: {
     *     // ... the filter for the S01_prise_en_charges we want to count
     *   }
     * })
    **/
    count<T extends s01_prise_en_chargeCountArgs>(args?: Prisma.Subset<T, s01_prise_en_chargeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S01_prise_en_chargeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S01_prise_en_charge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S01_prise_en_chargeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S01_prise_en_chargeAggregateArgs>(args: Prisma.Subset<T, S01_prise_en_chargeAggregateArgs>): Prisma.PrismaPromise<GetS01_prise_en_chargeAggregateType<T>>;
    /**
     * Group by S01_prise_en_charge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s01_prise_en_chargeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s01_prise_en_chargeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s01_prise_en_chargeGroupByArgs['orderBy'];
    } : {
        orderBy?: s01_prise_en_chargeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s01_prise_en_chargeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS01_prise_en_chargeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s01_prise_en_charge model
     */
    readonly fields: s01_prise_en_chargeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s01_prise_en_charge.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s01_prise_en_chargeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the s01_prise_en_charge model
 */
export interface s01_prise_en_chargeFieldRefs {
    readonly id: Prisma.FieldRef<"s01_prise_en_charge", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s01_prise_en_charge", 'Int'>;
    readonly date_prise_en_charge: Prisma.FieldRef<"s01_prise_en_charge", 'DateTime'>;
}
/**
 * s01_prise_en_charge findUnique
 */
export type s01_prise_en_chargeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s01_prise_en_charge
     */
    select?: Prisma.s01_prise_en_chargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s01_prise_en_charge
     */
    omit?: Prisma.s01_prise_en_chargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s01_prise_en_chargeInclude<ExtArgs> | null;
    /**
     * Filter, which s01_prise_en_charge to fetch.
     */
    where: Prisma.s01_prise_en_chargeWhereUniqueInput;
};
/**
 * s01_prise_en_charge findUniqueOrThrow
 */
export type s01_prise_en_chargeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s01_prise_en_charge
     */
    select?: Prisma.s01_prise_en_chargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s01_prise_en_charge
     */
    omit?: Prisma.s01_prise_en_chargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s01_prise_en_chargeInclude<ExtArgs> | null;
    /**
     * Filter, which s01_prise_en_charge to fetch.
     */
    where: Prisma.s01_prise_en_chargeWhereUniqueInput;
};
/**
 * s01_prise_en_charge findFirst
 */
export type s01_prise_en_chargeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s01_prise_en_charge
     */
    select?: Prisma.s01_prise_en_chargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s01_prise_en_charge
     */
    omit?: Prisma.s01_prise_en_chargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s01_prise_en_chargeInclude<ExtArgs> | null;
    /**
     * Filter, which s01_prise_en_charge to fetch.
     */
    where?: Prisma.s01_prise_en_chargeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s01_prise_en_charges to fetch.
     */
    orderBy?: Prisma.s01_prise_en_chargeOrderByWithRelationInput | Prisma.s01_prise_en_chargeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s01_prise_en_charges.
     */
    cursor?: Prisma.s01_prise_en_chargeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s01_prise_en_charges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s01_prise_en_charges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s01_prise_en_charges.
     */
    distinct?: Prisma.S01_prise_en_chargeScalarFieldEnum | Prisma.S01_prise_en_chargeScalarFieldEnum[];
};
/**
 * s01_prise_en_charge findFirstOrThrow
 */
export type s01_prise_en_chargeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s01_prise_en_charge
     */
    select?: Prisma.s01_prise_en_chargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s01_prise_en_charge
     */
    omit?: Prisma.s01_prise_en_chargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s01_prise_en_chargeInclude<ExtArgs> | null;
    /**
     * Filter, which s01_prise_en_charge to fetch.
     */
    where?: Prisma.s01_prise_en_chargeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s01_prise_en_charges to fetch.
     */
    orderBy?: Prisma.s01_prise_en_chargeOrderByWithRelationInput | Prisma.s01_prise_en_chargeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s01_prise_en_charges.
     */
    cursor?: Prisma.s01_prise_en_chargeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s01_prise_en_charges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s01_prise_en_charges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s01_prise_en_charges.
     */
    distinct?: Prisma.S01_prise_en_chargeScalarFieldEnum | Prisma.S01_prise_en_chargeScalarFieldEnum[];
};
/**
 * s01_prise_en_charge findMany
 */
export type s01_prise_en_chargeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s01_prise_en_charge
     */
    select?: Prisma.s01_prise_en_chargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s01_prise_en_charge
     */
    omit?: Prisma.s01_prise_en_chargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s01_prise_en_chargeInclude<ExtArgs> | null;
    /**
     * Filter, which s01_prise_en_charges to fetch.
     */
    where?: Prisma.s01_prise_en_chargeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s01_prise_en_charges to fetch.
     */
    orderBy?: Prisma.s01_prise_en_chargeOrderByWithRelationInput | Prisma.s01_prise_en_chargeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s01_prise_en_charges.
     */
    cursor?: Prisma.s01_prise_en_chargeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s01_prise_en_charges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s01_prise_en_charges.
     */
    skip?: number;
    distinct?: Prisma.S01_prise_en_chargeScalarFieldEnum | Prisma.S01_prise_en_chargeScalarFieldEnum[];
};
/**
 * s01_prise_en_charge create
 */
export type s01_prise_en_chargeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s01_prise_en_charge
     */
    select?: Prisma.s01_prise_en_chargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s01_prise_en_charge
     */
    omit?: Prisma.s01_prise_en_chargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s01_prise_en_chargeInclude<ExtArgs> | null;
    /**
     * The data needed to create a s01_prise_en_charge.
     */
    data: Prisma.XOR<Prisma.s01_prise_en_chargeCreateInput, Prisma.s01_prise_en_chargeUncheckedCreateInput>;
};
/**
 * s01_prise_en_charge createMany
 */
export type s01_prise_en_chargeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s01_prise_en_charges.
     */
    data: Prisma.s01_prise_en_chargeCreateManyInput | Prisma.s01_prise_en_chargeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s01_prise_en_charge createManyAndReturn
 */
export type s01_prise_en_chargeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s01_prise_en_charge
     */
    select?: Prisma.s01_prise_en_chargeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s01_prise_en_charge
     */
    omit?: Prisma.s01_prise_en_chargeOmit<ExtArgs> | null;
    /**
     * The data used to create many s01_prise_en_charges.
     */
    data: Prisma.s01_prise_en_chargeCreateManyInput | Prisma.s01_prise_en_chargeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s01_prise_en_chargeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s01_prise_en_charge update
 */
export type s01_prise_en_chargeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s01_prise_en_charge
     */
    select?: Prisma.s01_prise_en_chargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s01_prise_en_charge
     */
    omit?: Prisma.s01_prise_en_chargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s01_prise_en_chargeInclude<ExtArgs> | null;
    /**
     * The data needed to update a s01_prise_en_charge.
     */
    data: Prisma.XOR<Prisma.s01_prise_en_chargeUpdateInput, Prisma.s01_prise_en_chargeUncheckedUpdateInput>;
    /**
     * Choose, which s01_prise_en_charge to update.
     */
    where: Prisma.s01_prise_en_chargeWhereUniqueInput;
};
/**
 * s01_prise_en_charge updateMany
 */
export type s01_prise_en_chargeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s01_prise_en_charges.
     */
    data: Prisma.XOR<Prisma.s01_prise_en_chargeUpdateManyMutationInput, Prisma.s01_prise_en_chargeUncheckedUpdateManyInput>;
    /**
     * Filter which s01_prise_en_charges to update
     */
    where?: Prisma.s01_prise_en_chargeWhereInput;
    /**
     * Limit how many s01_prise_en_charges to update.
     */
    limit?: number;
};
/**
 * s01_prise_en_charge updateManyAndReturn
 */
export type s01_prise_en_chargeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s01_prise_en_charge
     */
    select?: Prisma.s01_prise_en_chargeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s01_prise_en_charge
     */
    omit?: Prisma.s01_prise_en_chargeOmit<ExtArgs> | null;
    /**
     * The data used to update s01_prise_en_charges.
     */
    data: Prisma.XOR<Prisma.s01_prise_en_chargeUpdateManyMutationInput, Prisma.s01_prise_en_chargeUncheckedUpdateManyInput>;
    /**
     * Filter which s01_prise_en_charges to update
     */
    where?: Prisma.s01_prise_en_chargeWhereInput;
    /**
     * Limit how many s01_prise_en_charges to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s01_prise_en_chargeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s01_prise_en_charge upsert
 */
export type s01_prise_en_chargeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s01_prise_en_charge
     */
    select?: Prisma.s01_prise_en_chargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s01_prise_en_charge
     */
    omit?: Prisma.s01_prise_en_chargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s01_prise_en_chargeInclude<ExtArgs> | null;
    /**
     * The filter to search for the s01_prise_en_charge to update in case it exists.
     */
    where: Prisma.s01_prise_en_chargeWhereUniqueInput;
    /**
     * In case the s01_prise_en_charge found by the `where` argument doesn't exist, create a new s01_prise_en_charge with this data.
     */
    create: Prisma.XOR<Prisma.s01_prise_en_chargeCreateInput, Prisma.s01_prise_en_chargeUncheckedCreateInput>;
    /**
     * In case the s01_prise_en_charge was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s01_prise_en_chargeUpdateInput, Prisma.s01_prise_en_chargeUncheckedUpdateInput>;
};
/**
 * s01_prise_en_charge delete
 */
export type s01_prise_en_chargeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s01_prise_en_charge
     */
    select?: Prisma.s01_prise_en_chargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s01_prise_en_charge
     */
    omit?: Prisma.s01_prise_en_chargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s01_prise_en_chargeInclude<ExtArgs> | null;
    /**
     * Filter which s01_prise_en_charge to delete.
     */
    where: Prisma.s01_prise_en_chargeWhereUniqueInput;
};
/**
 * s01_prise_en_charge deleteMany
 */
export type s01_prise_en_chargeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s01_prise_en_charges to delete
     */
    where?: Prisma.s01_prise_en_chargeWhereInput;
    /**
     * Limit how many s01_prise_en_charges to delete.
     */
    limit?: number;
};
/**
 * s01_prise_en_charge without action
 */
export type s01_prise_en_chargeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s01_prise_en_charge
     */
    select?: Prisma.s01_prise_en_chargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s01_prise_en_charge
     */
    omit?: Prisma.s01_prise_en_chargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s01_prise_en_chargeInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s01_prise_en_charge.d.ts.map