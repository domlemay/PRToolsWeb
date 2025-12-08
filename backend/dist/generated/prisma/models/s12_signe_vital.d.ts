import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s12_signe_vital
 *
 */
export type s12_signe_vitalModel = runtime.Types.Result.DefaultSelection<Prisma.$s12_signe_vitalPayload>;
export type AggregateS12_signe_vital = {
    _count: S12_signe_vitalCountAggregateOutputType | null;
    _avg: S12_signe_vitalAvgAggregateOutputType | null;
    _sum: S12_signe_vitalSumAggregateOutputType | null;
    _min: S12_signe_vitalMinAggregateOutputType | null;
    _max: S12_signe_vitalMaxAggregateOutputType | null;
};
export type S12_signe_vitalAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    respiration_min: number | null;
    pouls_min: number | null;
    glycemie: number | null;
    spo2_pct: number | null;
    o2_pct: number | null;
};
export type S12_signe_vitalSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    respiration_min: number | null;
    pouls_min: number | null;
    glycemie: number | null;
    spo2_pct: number | null;
    o2_pct: number | null;
};
export type S12_signe_vitalMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    heure_prise: Date | null;
    respiration_min: number | null;
    pouls_min: number | null;
    etat_conscience_avpu: string | null;
    glycemie: number | null;
    spo2_pct: number | null;
    o2_pct: number | null;
    created_at: Date | null;
};
export type S12_signe_vitalMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    heure_prise: Date | null;
    respiration_min: number | null;
    pouls_min: number | null;
    etat_conscience_avpu: string | null;
    glycemie: number | null;
    spo2_pct: number | null;
    o2_pct: number | null;
    created_at: Date | null;
};
export type S12_signe_vitalCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    heure_prise: number;
    respiration_min: number;
    pouls_min: number;
    etat_conscience_avpu: number;
    glycemie: number;
    spo2_pct: number;
    o2_pct: number;
    created_at: number;
    _all: number;
};
export type S12_signe_vitalAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
    respiration_min?: true;
    pouls_min?: true;
    glycemie?: true;
    spo2_pct?: true;
    o2_pct?: true;
};
export type S12_signe_vitalSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
    respiration_min?: true;
    pouls_min?: true;
    glycemie?: true;
    spo2_pct?: true;
    o2_pct?: true;
};
export type S12_signe_vitalMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    heure_prise?: true;
    respiration_min?: true;
    pouls_min?: true;
    etat_conscience_avpu?: true;
    glycemie?: true;
    spo2_pct?: true;
    o2_pct?: true;
    created_at?: true;
};
export type S12_signe_vitalMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    heure_prise?: true;
    respiration_min?: true;
    pouls_min?: true;
    etat_conscience_avpu?: true;
    glycemie?: true;
    spo2_pct?: true;
    o2_pct?: true;
    created_at?: true;
};
export type S12_signe_vitalCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    heure_prise?: true;
    respiration_min?: true;
    pouls_min?: true;
    etat_conscience_avpu?: true;
    glycemie?: true;
    spo2_pct?: true;
    o2_pct?: true;
    created_at?: true;
    _all?: true;
};
export type S12_signe_vitalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s12_signe_vital to aggregate.
     */
    where?: Prisma.s12_signe_vitalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s12_signe_vitals to fetch.
     */
    orderBy?: Prisma.s12_signe_vitalOrderByWithRelationInput | Prisma.s12_signe_vitalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s12_signe_vitalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s12_signe_vitals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s12_signe_vitals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s12_signe_vitals
    **/
    _count?: true | S12_signe_vitalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S12_signe_vitalAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S12_signe_vitalSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S12_signe_vitalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S12_signe_vitalMaxAggregateInputType;
};
export type GetS12_signe_vitalAggregateType<T extends S12_signe_vitalAggregateArgs> = {
    [P in keyof T & keyof AggregateS12_signe_vital]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS12_signe_vital[P]> : Prisma.GetScalarType<T[P], AggregateS12_signe_vital[P]>;
};
export type s12_signe_vitalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s12_signe_vitalWhereInput;
    orderBy?: Prisma.s12_signe_vitalOrderByWithAggregationInput | Prisma.s12_signe_vitalOrderByWithAggregationInput[];
    by: Prisma.S12_signe_vitalScalarFieldEnum[] | Prisma.S12_signe_vitalScalarFieldEnum;
    having?: Prisma.s12_signe_vitalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S12_signe_vitalCountAggregateInputType | true;
    _avg?: S12_signe_vitalAvgAggregateInputType;
    _sum?: S12_signe_vitalSumAggregateInputType;
    _min?: S12_signe_vitalMinAggregateInputType;
    _max?: S12_signe_vitalMaxAggregateInputType;
};
export type S12_signe_vitalGroupByOutputType = {
    id: number;
    rapport_id: number;
    heure_prise: Date;
    respiration_min: number | null;
    pouls_min: number | null;
    etat_conscience_avpu: string | null;
    glycemie: number | null;
    spo2_pct: number | null;
    o2_pct: number | null;
    created_at: Date | null;
    _count: S12_signe_vitalCountAggregateOutputType | null;
    _avg: S12_signe_vitalAvgAggregateOutputType | null;
    _sum: S12_signe_vitalSumAggregateOutputType | null;
    _min: S12_signe_vitalMinAggregateOutputType | null;
    _max: S12_signe_vitalMaxAggregateOutputType | null;
};
type GetS12_signe_vitalGroupByPayload<T extends s12_signe_vitalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S12_signe_vitalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S12_signe_vitalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S12_signe_vitalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S12_signe_vitalGroupByOutputType[P]>;
}>>;
export type s12_signe_vitalWhereInput = {
    AND?: Prisma.s12_signe_vitalWhereInput | Prisma.s12_signe_vitalWhereInput[];
    OR?: Prisma.s12_signe_vitalWhereInput[];
    NOT?: Prisma.s12_signe_vitalWhereInput | Prisma.s12_signe_vitalWhereInput[];
    id?: Prisma.IntFilter<"s12_signe_vital"> | number;
    rapport_id?: Prisma.IntFilter<"s12_signe_vital"> | number;
    heure_prise?: Prisma.DateTimeFilter<"s12_signe_vital"> | Date | string;
    respiration_min?: Prisma.IntNullableFilter<"s12_signe_vital"> | number | null;
    pouls_min?: Prisma.IntNullableFilter<"s12_signe_vital"> | number | null;
    etat_conscience_avpu?: Prisma.StringNullableFilter<"s12_signe_vital"> | string | null;
    glycemie?: Prisma.FloatNullableFilter<"s12_signe_vital"> | number | null;
    spo2_pct?: Prisma.IntNullableFilter<"s12_signe_vital"> | number | null;
    o2_pct?: Prisma.IntNullableFilter<"s12_signe_vital"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"s12_signe_vital"> | Date | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s12_signe_vitalOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    heure_prise?: Prisma.SortOrder;
    respiration_min?: Prisma.SortOrderInput | Prisma.SortOrder;
    pouls_min?: Prisma.SortOrderInput | Prisma.SortOrder;
    etat_conscience_avpu?: Prisma.SortOrderInput | Prisma.SortOrder;
    glycemie?: Prisma.SortOrderInput | Prisma.SortOrder;
    spo2_pct?: Prisma.SortOrderInput | Prisma.SortOrder;
    o2_pct?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s12_signe_vitalWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.s12_signe_vitalWhereInput | Prisma.s12_signe_vitalWhereInput[];
    OR?: Prisma.s12_signe_vitalWhereInput[];
    NOT?: Prisma.s12_signe_vitalWhereInput | Prisma.s12_signe_vitalWhereInput[];
    rapport_id?: Prisma.IntFilter<"s12_signe_vital"> | number;
    heure_prise?: Prisma.DateTimeFilter<"s12_signe_vital"> | Date | string;
    respiration_min?: Prisma.IntNullableFilter<"s12_signe_vital"> | number | null;
    pouls_min?: Prisma.IntNullableFilter<"s12_signe_vital"> | number | null;
    etat_conscience_avpu?: Prisma.StringNullableFilter<"s12_signe_vital"> | string | null;
    glycemie?: Prisma.FloatNullableFilter<"s12_signe_vital"> | number | null;
    spo2_pct?: Prisma.IntNullableFilter<"s12_signe_vital"> | number | null;
    o2_pct?: Prisma.IntNullableFilter<"s12_signe_vital"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"s12_signe_vital"> | Date | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id">;
export type s12_signe_vitalOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    heure_prise?: Prisma.SortOrder;
    respiration_min?: Prisma.SortOrderInput | Prisma.SortOrder;
    pouls_min?: Prisma.SortOrderInput | Prisma.SortOrder;
    etat_conscience_avpu?: Prisma.SortOrderInput | Prisma.SortOrder;
    glycemie?: Prisma.SortOrderInput | Prisma.SortOrder;
    spo2_pct?: Prisma.SortOrderInput | Prisma.SortOrder;
    o2_pct?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s12_signe_vitalCountOrderByAggregateInput;
    _avg?: Prisma.s12_signe_vitalAvgOrderByAggregateInput;
    _max?: Prisma.s12_signe_vitalMaxOrderByAggregateInput;
    _min?: Prisma.s12_signe_vitalMinOrderByAggregateInput;
    _sum?: Prisma.s12_signe_vitalSumOrderByAggregateInput;
};
export type s12_signe_vitalScalarWhereWithAggregatesInput = {
    AND?: Prisma.s12_signe_vitalScalarWhereWithAggregatesInput | Prisma.s12_signe_vitalScalarWhereWithAggregatesInput[];
    OR?: Prisma.s12_signe_vitalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s12_signe_vitalScalarWhereWithAggregatesInput | Prisma.s12_signe_vitalScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s12_signe_vital"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s12_signe_vital"> | number;
    heure_prise?: Prisma.DateTimeWithAggregatesFilter<"s12_signe_vital"> | Date | string;
    respiration_min?: Prisma.IntNullableWithAggregatesFilter<"s12_signe_vital"> | number | null;
    pouls_min?: Prisma.IntNullableWithAggregatesFilter<"s12_signe_vital"> | number | null;
    etat_conscience_avpu?: Prisma.StringNullableWithAggregatesFilter<"s12_signe_vital"> | string | null;
    glycemie?: Prisma.FloatNullableWithAggregatesFilter<"s12_signe_vital"> | number | null;
    spo2_pct?: Prisma.IntNullableWithAggregatesFilter<"s12_signe_vital"> | number | null;
    o2_pct?: Prisma.IntNullableWithAggregatesFilter<"s12_signe_vital"> | number | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"s12_signe_vital"> | Date | string | null;
};
export type s12_signe_vitalCreateInput = {
    heure_prise: Date | string;
    respiration_min?: number | null;
    pouls_min?: number | null;
    etat_conscience_avpu?: string | null;
    glycemie?: number | null;
    spo2_pct?: number | null;
    o2_pct?: number | null;
    created_at?: Date | string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS12_signe_vitalInput;
};
export type s12_signe_vitalUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    heure_prise: Date | string;
    respiration_min?: number | null;
    pouls_min?: number | null;
    etat_conscience_avpu?: string | null;
    glycemie?: number | null;
    spo2_pct?: number | null;
    o2_pct?: number | null;
    created_at?: Date | string | null;
};
export type s12_signe_vitalUpdateInput = {
    heure_prise?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respiration_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pouls_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etat_conscience_avpu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glycemie?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    spo2_pct?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    o2_pct?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS12_signe_vitalNestedInput;
};
export type s12_signe_vitalUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    heure_prise?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respiration_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pouls_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etat_conscience_avpu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glycemie?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    spo2_pct?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    o2_pct?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s12_signe_vitalCreateManyInput = {
    id?: number;
    rapport_id: number;
    heure_prise: Date | string;
    respiration_min?: number | null;
    pouls_min?: number | null;
    etat_conscience_avpu?: string | null;
    glycemie?: number | null;
    spo2_pct?: number | null;
    o2_pct?: number | null;
    created_at?: Date | string | null;
};
export type s12_signe_vitalUpdateManyMutationInput = {
    heure_prise?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respiration_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pouls_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etat_conscience_avpu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glycemie?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    spo2_pct?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    o2_pct?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s12_signe_vitalUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    heure_prise?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respiration_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pouls_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etat_conscience_avpu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glycemie?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    spo2_pct?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    o2_pct?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type S12_signe_vitalListRelationFilter = {
    every?: Prisma.s12_signe_vitalWhereInput;
    some?: Prisma.s12_signe_vitalWhereInput;
    none?: Prisma.s12_signe_vitalWhereInput;
};
export type s12_signe_vitalOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type s12_signe_vitalCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    heure_prise?: Prisma.SortOrder;
    respiration_min?: Prisma.SortOrder;
    pouls_min?: Prisma.SortOrder;
    etat_conscience_avpu?: Prisma.SortOrder;
    glycemie?: Prisma.SortOrder;
    spo2_pct?: Prisma.SortOrder;
    o2_pct?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type s12_signe_vitalAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    respiration_min?: Prisma.SortOrder;
    pouls_min?: Prisma.SortOrder;
    glycemie?: Prisma.SortOrder;
    spo2_pct?: Prisma.SortOrder;
    o2_pct?: Prisma.SortOrder;
};
export type s12_signe_vitalMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    heure_prise?: Prisma.SortOrder;
    respiration_min?: Prisma.SortOrder;
    pouls_min?: Prisma.SortOrder;
    etat_conscience_avpu?: Prisma.SortOrder;
    glycemie?: Prisma.SortOrder;
    spo2_pct?: Prisma.SortOrder;
    o2_pct?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type s12_signe_vitalMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    heure_prise?: Prisma.SortOrder;
    respiration_min?: Prisma.SortOrder;
    pouls_min?: Prisma.SortOrder;
    etat_conscience_avpu?: Prisma.SortOrder;
    glycemie?: Prisma.SortOrder;
    spo2_pct?: Prisma.SortOrder;
    o2_pct?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type s12_signe_vitalSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    respiration_min?: Prisma.SortOrder;
    pouls_min?: Prisma.SortOrder;
    glycemie?: Prisma.SortOrder;
    spo2_pct?: Prisma.SortOrder;
    o2_pct?: Prisma.SortOrder;
};
export type s12_signe_vitalCreateNestedManyWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s12_signe_vitalCreateWithoutRapportInput, Prisma.s12_signe_vitalUncheckedCreateWithoutRapportInput> | Prisma.s12_signe_vitalCreateWithoutRapportInput[] | Prisma.s12_signe_vitalUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s12_signe_vitalCreateOrConnectWithoutRapportInput | Prisma.s12_signe_vitalCreateOrConnectWithoutRapportInput[];
    createMany?: Prisma.s12_signe_vitalCreateManyRapportInputEnvelope;
    connect?: Prisma.s12_signe_vitalWhereUniqueInput | Prisma.s12_signe_vitalWhereUniqueInput[];
};
export type s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s12_signe_vitalCreateWithoutRapportInput, Prisma.s12_signe_vitalUncheckedCreateWithoutRapportInput> | Prisma.s12_signe_vitalCreateWithoutRapportInput[] | Prisma.s12_signe_vitalUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s12_signe_vitalCreateOrConnectWithoutRapportInput | Prisma.s12_signe_vitalCreateOrConnectWithoutRapportInput[];
    createMany?: Prisma.s12_signe_vitalCreateManyRapportInputEnvelope;
    connect?: Prisma.s12_signe_vitalWhereUniqueInput | Prisma.s12_signe_vitalWhereUniqueInput[];
};
export type s12_signe_vitalUpdateManyWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s12_signe_vitalCreateWithoutRapportInput, Prisma.s12_signe_vitalUncheckedCreateWithoutRapportInput> | Prisma.s12_signe_vitalCreateWithoutRapportInput[] | Prisma.s12_signe_vitalUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s12_signe_vitalCreateOrConnectWithoutRapportInput | Prisma.s12_signe_vitalCreateOrConnectWithoutRapportInput[];
    upsert?: Prisma.s12_signe_vitalUpsertWithWhereUniqueWithoutRapportInput | Prisma.s12_signe_vitalUpsertWithWhereUniqueWithoutRapportInput[];
    createMany?: Prisma.s12_signe_vitalCreateManyRapportInputEnvelope;
    set?: Prisma.s12_signe_vitalWhereUniqueInput | Prisma.s12_signe_vitalWhereUniqueInput[];
    disconnect?: Prisma.s12_signe_vitalWhereUniqueInput | Prisma.s12_signe_vitalWhereUniqueInput[];
    delete?: Prisma.s12_signe_vitalWhereUniqueInput | Prisma.s12_signe_vitalWhereUniqueInput[];
    connect?: Prisma.s12_signe_vitalWhereUniqueInput | Prisma.s12_signe_vitalWhereUniqueInput[];
    update?: Prisma.s12_signe_vitalUpdateWithWhereUniqueWithoutRapportInput | Prisma.s12_signe_vitalUpdateWithWhereUniqueWithoutRapportInput[];
    updateMany?: Prisma.s12_signe_vitalUpdateManyWithWhereWithoutRapportInput | Prisma.s12_signe_vitalUpdateManyWithWhereWithoutRapportInput[];
    deleteMany?: Prisma.s12_signe_vitalScalarWhereInput | Prisma.s12_signe_vitalScalarWhereInput[];
};
export type s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s12_signe_vitalCreateWithoutRapportInput, Prisma.s12_signe_vitalUncheckedCreateWithoutRapportInput> | Prisma.s12_signe_vitalCreateWithoutRapportInput[] | Prisma.s12_signe_vitalUncheckedCreateWithoutRapportInput[];
    connectOrCreate?: Prisma.s12_signe_vitalCreateOrConnectWithoutRapportInput | Prisma.s12_signe_vitalCreateOrConnectWithoutRapportInput[];
    upsert?: Prisma.s12_signe_vitalUpsertWithWhereUniqueWithoutRapportInput | Prisma.s12_signe_vitalUpsertWithWhereUniqueWithoutRapportInput[];
    createMany?: Prisma.s12_signe_vitalCreateManyRapportInputEnvelope;
    set?: Prisma.s12_signe_vitalWhereUniqueInput | Prisma.s12_signe_vitalWhereUniqueInput[];
    disconnect?: Prisma.s12_signe_vitalWhereUniqueInput | Prisma.s12_signe_vitalWhereUniqueInput[];
    delete?: Prisma.s12_signe_vitalWhereUniqueInput | Prisma.s12_signe_vitalWhereUniqueInput[];
    connect?: Prisma.s12_signe_vitalWhereUniqueInput | Prisma.s12_signe_vitalWhereUniqueInput[];
    update?: Prisma.s12_signe_vitalUpdateWithWhereUniqueWithoutRapportInput | Prisma.s12_signe_vitalUpdateWithWhereUniqueWithoutRapportInput[];
    updateMany?: Prisma.s12_signe_vitalUpdateManyWithWhereWithoutRapportInput | Prisma.s12_signe_vitalUpdateManyWithWhereWithoutRapportInput[];
    deleteMany?: Prisma.s12_signe_vitalScalarWhereInput | Prisma.s12_signe_vitalScalarWhereInput[];
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type s12_signe_vitalCreateWithoutRapportInput = {
    heure_prise: Date | string;
    respiration_min?: number | null;
    pouls_min?: number | null;
    etat_conscience_avpu?: string | null;
    glycemie?: number | null;
    spo2_pct?: number | null;
    o2_pct?: number | null;
    created_at?: Date | string | null;
};
export type s12_signe_vitalUncheckedCreateWithoutRapportInput = {
    id?: number;
    heure_prise: Date | string;
    respiration_min?: number | null;
    pouls_min?: number | null;
    etat_conscience_avpu?: string | null;
    glycemie?: number | null;
    spo2_pct?: number | null;
    o2_pct?: number | null;
    created_at?: Date | string | null;
};
export type s12_signe_vitalCreateOrConnectWithoutRapportInput = {
    where: Prisma.s12_signe_vitalWhereUniqueInput;
    create: Prisma.XOR<Prisma.s12_signe_vitalCreateWithoutRapportInput, Prisma.s12_signe_vitalUncheckedCreateWithoutRapportInput>;
};
export type s12_signe_vitalCreateManyRapportInputEnvelope = {
    data: Prisma.s12_signe_vitalCreateManyRapportInput | Prisma.s12_signe_vitalCreateManyRapportInput[];
    skipDuplicates?: boolean;
};
export type s12_signe_vitalUpsertWithWhereUniqueWithoutRapportInput = {
    where: Prisma.s12_signe_vitalWhereUniqueInput;
    update: Prisma.XOR<Prisma.s12_signe_vitalUpdateWithoutRapportInput, Prisma.s12_signe_vitalUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s12_signe_vitalCreateWithoutRapportInput, Prisma.s12_signe_vitalUncheckedCreateWithoutRapportInput>;
};
export type s12_signe_vitalUpdateWithWhereUniqueWithoutRapportInput = {
    where: Prisma.s12_signe_vitalWhereUniqueInput;
    data: Prisma.XOR<Prisma.s12_signe_vitalUpdateWithoutRapportInput, Prisma.s12_signe_vitalUncheckedUpdateWithoutRapportInput>;
};
export type s12_signe_vitalUpdateManyWithWhereWithoutRapportInput = {
    where: Prisma.s12_signe_vitalScalarWhereInput;
    data: Prisma.XOR<Prisma.s12_signe_vitalUpdateManyMutationInput, Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportInput>;
};
export type s12_signe_vitalScalarWhereInput = {
    AND?: Prisma.s12_signe_vitalScalarWhereInput | Prisma.s12_signe_vitalScalarWhereInput[];
    OR?: Prisma.s12_signe_vitalScalarWhereInput[];
    NOT?: Prisma.s12_signe_vitalScalarWhereInput | Prisma.s12_signe_vitalScalarWhereInput[];
    id?: Prisma.IntFilter<"s12_signe_vital"> | number;
    rapport_id?: Prisma.IntFilter<"s12_signe_vital"> | number;
    heure_prise?: Prisma.DateTimeFilter<"s12_signe_vital"> | Date | string;
    respiration_min?: Prisma.IntNullableFilter<"s12_signe_vital"> | number | null;
    pouls_min?: Prisma.IntNullableFilter<"s12_signe_vital"> | number | null;
    etat_conscience_avpu?: Prisma.StringNullableFilter<"s12_signe_vital"> | string | null;
    glycemie?: Prisma.FloatNullableFilter<"s12_signe_vital"> | number | null;
    spo2_pct?: Prisma.IntNullableFilter<"s12_signe_vital"> | number | null;
    o2_pct?: Prisma.IntNullableFilter<"s12_signe_vital"> | number | null;
    created_at?: Prisma.DateTimeNullableFilter<"s12_signe_vital"> | Date | string | null;
};
export type s12_signe_vitalCreateManyRapportInput = {
    id?: number;
    heure_prise: Date | string;
    respiration_min?: number | null;
    pouls_min?: number | null;
    etat_conscience_avpu?: string | null;
    glycemie?: number | null;
    spo2_pct?: number | null;
    o2_pct?: number | null;
    created_at?: Date | string | null;
};
export type s12_signe_vitalUpdateWithoutRapportInput = {
    heure_prise?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respiration_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pouls_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etat_conscience_avpu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glycemie?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    spo2_pct?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    o2_pct?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s12_signe_vitalUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    heure_prise?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respiration_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pouls_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etat_conscience_avpu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glycemie?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    spo2_pct?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    o2_pct?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s12_signe_vitalUncheckedUpdateManyWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    heure_prise?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    respiration_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pouls_min?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    etat_conscience_avpu?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glycemie?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    spo2_pct?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    o2_pct?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s12_signe_vitalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    heure_prise?: boolean;
    respiration_min?: boolean;
    pouls_min?: boolean;
    etat_conscience_avpu?: boolean;
    glycemie?: boolean;
    spo2_pct?: boolean;
    o2_pct?: boolean;
    created_at?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s12_signe_vital"]>;
export type s12_signe_vitalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    heure_prise?: boolean;
    respiration_min?: boolean;
    pouls_min?: boolean;
    etat_conscience_avpu?: boolean;
    glycemie?: boolean;
    spo2_pct?: boolean;
    o2_pct?: boolean;
    created_at?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s12_signe_vital"]>;
export type s12_signe_vitalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    heure_prise?: boolean;
    respiration_min?: boolean;
    pouls_min?: boolean;
    etat_conscience_avpu?: boolean;
    glycemie?: boolean;
    spo2_pct?: boolean;
    o2_pct?: boolean;
    created_at?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s12_signe_vital"]>;
export type s12_signe_vitalSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    heure_prise?: boolean;
    respiration_min?: boolean;
    pouls_min?: boolean;
    etat_conscience_avpu?: boolean;
    glycemie?: boolean;
    spo2_pct?: boolean;
    o2_pct?: boolean;
    created_at?: boolean;
};
export type s12_signe_vitalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "heure_prise" | "respiration_min" | "pouls_min" | "etat_conscience_avpu" | "glycemie" | "spo2_pct" | "o2_pct" | "created_at", ExtArgs["result"]["s12_signe_vital"]>;
export type s12_signe_vitalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s12_signe_vitalIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s12_signe_vitalIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s12_signe_vitalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s12_signe_vital";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        heure_prise: Date;
        respiration_min: number | null;
        pouls_min: number | null;
        etat_conscience_avpu: string | null;
        glycemie: number | null;
        spo2_pct: number | null;
        o2_pct: number | null;
        created_at: Date | null;
    }, ExtArgs["result"]["s12_signe_vital"]>;
    composites: {};
};
export type s12_signe_vitalGetPayload<S extends boolean | null | undefined | s12_signe_vitalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s12_signe_vitalPayload, S>;
export type s12_signe_vitalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s12_signe_vitalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S12_signe_vitalCountAggregateInputType | true;
};
export interface s12_signe_vitalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s12_signe_vital'];
        meta: {
            name: 's12_signe_vital';
        };
    };
    /**
     * Find zero or one S12_signe_vital that matches the filter.
     * @param {s12_signe_vitalFindUniqueArgs} args - Arguments to find a S12_signe_vital
     * @example
     * // Get one S12_signe_vital
     * const s12_signe_vital = await prisma.s12_signe_vital.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s12_signe_vitalFindUniqueArgs>(args: Prisma.SelectSubset<T, s12_signe_vitalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s12_signe_vitalClient<runtime.Types.Result.GetResult<Prisma.$s12_signe_vitalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S12_signe_vital that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s12_signe_vitalFindUniqueOrThrowArgs} args - Arguments to find a S12_signe_vital
     * @example
     * // Get one S12_signe_vital
     * const s12_signe_vital = await prisma.s12_signe_vital.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s12_signe_vitalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s12_signe_vitalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s12_signe_vitalClient<runtime.Types.Result.GetResult<Prisma.$s12_signe_vitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S12_signe_vital that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s12_signe_vitalFindFirstArgs} args - Arguments to find a S12_signe_vital
     * @example
     * // Get one S12_signe_vital
     * const s12_signe_vital = await prisma.s12_signe_vital.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s12_signe_vitalFindFirstArgs>(args?: Prisma.SelectSubset<T, s12_signe_vitalFindFirstArgs<ExtArgs>>): Prisma.Prisma__s12_signe_vitalClient<runtime.Types.Result.GetResult<Prisma.$s12_signe_vitalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S12_signe_vital that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s12_signe_vitalFindFirstOrThrowArgs} args - Arguments to find a S12_signe_vital
     * @example
     * // Get one S12_signe_vital
     * const s12_signe_vital = await prisma.s12_signe_vital.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s12_signe_vitalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s12_signe_vitalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s12_signe_vitalClient<runtime.Types.Result.GetResult<Prisma.$s12_signe_vitalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S12_signe_vitals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s12_signe_vitalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S12_signe_vitals
     * const s12_signe_vitals = await prisma.s12_signe_vital.findMany()
     *
     * // Get first 10 S12_signe_vitals
     * const s12_signe_vitals = await prisma.s12_signe_vital.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s12_signe_vitalWithIdOnly = await prisma.s12_signe_vital.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s12_signe_vitalFindManyArgs>(args?: Prisma.SelectSubset<T, s12_signe_vitalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s12_signe_vitalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S12_signe_vital.
     * @param {s12_signe_vitalCreateArgs} args - Arguments to create a S12_signe_vital.
     * @example
     * // Create one S12_signe_vital
     * const S12_signe_vital = await prisma.s12_signe_vital.create({
     *   data: {
     *     // ... data to create a S12_signe_vital
     *   }
     * })
     *
     */
    create<T extends s12_signe_vitalCreateArgs>(args: Prisma.SelectSubset<T, s12_signe_vitalCreateArgs<ExtArgs>>): Prisma.Prisma__s12_signe_vitalClient<runtime.Types.Result.GetResult<Prisma.$s12_signe_vitalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S12_signe_vitals.
     * @param {s12_signe_vitalCreateManyArgs} args - Arguments to create many S12_signe_vitals.
     * @example
     * // Create many S12_signe_vitals
     * const s12_signe_vital = await prisma.s12_signe_vital.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s12_signe_vitalCreateManyArgs>(args?: Prisma.SelectSubset<T, s12_signe_vitalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S12_signe_vitals and returns the data saved in the database.
     * @param {s12_signe_vitalCreateManyAndReturnArgs} args - Arguments to create many S12_signe_vitals.
     * @example
     * // Create many S12_signe_vitals
     * const s12_signe_vital = await prisma.s12_signe_vital.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S12_signe_vitals and only return the `id`
     * const s12_signe_vitalWithIdOnly = await prisma.s12_signe_vital.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s12_signe_vitalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s12_signe_vitalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s12_signe_vitalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S12_signe_vital.
     * @param {s12_signe_vitalDeleteArgs} args - Arguments to delete one S12_signe_vital.
     * @example
     * // Delete one S12_signe_vital
     * const S12_signe_vital = await prisma.s12_signe_vital.delete({
     *   where: {
     *     // ... filter to delete one S12_signe_vital
     *   }
     * })
     *
     */
    delete<T extends s12_signe_vitalDeleteArgs>(args: Prisma.SelectSubset<T, s12_signe_vitalDeleteArgs<ExtArgs>>): Prisma.Prisma__s12_signe_vitalClient<runtime.Types.Result.GetResult<Prisma.$s12_signe_vitalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S12_signe_vital.
     * @param {s12_signe_vitalUpdateArgs} args - Arguments to update one S12_signe_vital.
     * @example
     * // Update one S12_signe_vital
     * const s12_signe_vital = await prisma.s12_signe_vital.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s12_signe_vitalUpdateArgs>(args: Prisma.SelectSubset<T, s12_signe_vitalUpdateArgs<ExtArgs>>): Prisma.Prisma__s12_signe_vitalClient<runtime.Types.Result.GetResult<Prisma.$s12_signe_vitalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S12_signe_vitals.
     * @param {s12_signe_vitalDeleteManyArgs} args - Arguments to filter S12_signe_vitals to delete.
     * @example
     * // Delete a few S12_signe_vitals
     * const { count } = await prisma.s12_signe_vital.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s12_signe_vitalDeleteManyArgs>(args?: Prisma.SelectSubset<T, s12_signe_vitalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S12_signe_vitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s12_signe_vitalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S12_signe_vitals
     * const s12_signe_vital = await prisma.s12_signe_vital.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s12_signe_vitalUpdateManyArgs>(args: Prisma.SelectSubset<T, s12_signe_vitalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S12_signe_vitals and returns the data updated in the database.
     * @param {s12_signe_vitalUpdateManyAndReturnArgs} args - Arguments to update many S12_signe_vitals.
     * @example
     * // Update many S12_signe_vitals
     * const s12_signe_vital = await prisma.s12_signe_vital.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S12_signe_vitals and only return the `id`
     * const s12_signe_vitalWithIdOnly = await prisma.s12_signe_vital.updateManyAndReturn({
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
    updateManyAndReturn<T extends s12_signe_vitalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s12_signe_vitalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s12_signe_vitalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S12_signe_vital.
     * @param {s12_signe_vitalUpsertArgs} args - Arguments to update or create a S12_signe_vital.
     * @example
     * // Update or create a S12_signe_vital
     * const s12_signe_vital = await prisma.s12_signe_vital.upsert({
     *   create: {
     *     // ... data to create a S12_signe_vital
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S12_signe_vital we want to update
     *   }
     * })
     */
    upsert<T extends s12_signe_vitalUpsertArgs>(args: Prisma.SelectSubset<T, s12_signe_vitalUpsertArgs<ExtArgs>>): Prisma.Prisma__s12_signe_vitalClient<runtime.Types.Result.GetResult<Prisma.$s12_signe_vitalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S12_signe_vitals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s12_signe_vitalCountArgs} args - Arguments to filter S12_signe_vitals to count.
     * @example
     * // Count the number of S12_signe_vitals
     * const count = await prisma.s12_signe_vital.count({
     *   where: {
     *     // ... the filter for the S12_signe_vitals we want to count
     *   }
     * })
    **/
    count<T extends s12_signe_vitalCountArgs>(args?: Prisma.Subset<T, s12_signe_vitalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S12_signe_vitalCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S12_signe_vital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S12_signe_vitalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S12_signe_vitalAggregateArgs>(args: Prisma.Subset<T, S12_signe_vitalAggregateArgs>): Prisma.PrismaPromise<GetS12_signe_vitalAggregateType<T>>;
    /**
     * Group by S12_signe_vital.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s12_signe_vitalGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s12_signe_vitalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s12_signe_vitalGroupByArgs['orderBy'];
    } : {
        orderBy?: s12_signe_vitalGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s12_signe_vitalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS12_signe_vitalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s12_signe_vital model
     */
    readonly fields: s12_signe_vitalFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s12_signe_vital.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s12_signe_vitalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the s12_signe_vital model
 */
export interface s12_signe_vitalFieldRefs {
    readonly id: Prisma.FieldRef<"s12_signe_vital", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s12_signe_vital", 'Int'>;
    readonly heure_prise: Prisma.FieldRef<"s12_signe_vital", 'DateTime'>;
    readonly respiration_min: Prisma.FieldRef<"s12_signe_vital", 'Int'>;
    readonly pouls_min: Prisma.FieldRef<"s12_signe_vital", 'Int'>;
    readonly etat_conscience_avpu: Prisma.FieldRef<"s12_signe_vital", 'String'>;
    readonly glycemie: Prisma.FieldRef<"s12_signe_vital", 'Float'>;
    readonly spo2_pct: Prisma.FieldRef<"s12_signe_vital", 'Int'>;
    readonly o2_pct: Prisma.FieldRef<"s12_signe_vital", 'Int'>;
    readonly created_at: Prisma.FieldRef<"s12_signe_vital", 'DateTime'>;
}
/**
 * s12_signe_vital findUnique
 */
export type s12_signe_vitalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s12_signe_vital
     */
    select?: Prisma.s12_signe_vitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s12_signe_vital
     */
    omit?: Prisma.s12_signe_vitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s12_signe_vitalInclude<ExtArgs> | null;
    /**
     * Filter, which s12_signe_vital to fetch.
     */
    where: Prisma.s12_signe_vitalWhereUniqueInput;
};
/**
 * s12_signe_vital findUniqueOrThrow
 */
export type s12_signe_vitalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s12_signe_vital
     */
    select?: Prisma.s12_signe_vitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s12_signe_vital
     */
    omit?: Prisma.s12_signe_vitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s12_signe_vitalInclude<ExtArgs> | null;
    /**
     * Filter, which s12_signe_vital to fetch.
     */
    where: Prisma.s12_signe_vitalWhereUniqueInput;
};
/**
 * s12_signe_vital findFirst
 */
export type s12_signe_vitalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s12_signe_vital
     */
    select?: Prisma.s12_signe_vitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s12_signe_vital
     */
    omit?: Prisma.s12_signe_vitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s12_signe_vitalInclude<ExtArgs> | null;
    /**
     * Filter, which s12_signe_vital to fetch.
     */
    where?: Prisma.s12_signe_vitalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s12_signe_vitals to fetch.
     */
    orderBy?: Prisma.s12_signe_vitalOrderByWithRelationInput | Prisma.s12_signe_vitalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s12_signe_vitals.
     */
    cursor?: Prisma.s12_signe_vitalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s12_signe_vitals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s12_signe_vitals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s12_signe_vitals.
     */
    distinct?: Prisma.S12_signe_vitalScalarFieldEnum | Prisma.S12_signe_vitalScalarFieldEnum[];
};
/**
 * s12_signe_vital findFirstOrThrow
 */
export type s12_signe_vitalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s12_signe_vital
     */
    select?: Prisma.s12_signe_vitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s12_signe_vital
     */
    omit?: Prisma.s12_signe_vitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s12_signe_vitalInclude<ExtArgs> | null;
    /**
     * Filter, which s12_signe_vital to fetch.
     */
    where?: Prisma.s12_signe_vitalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s12_signe_vitals to fetch.
     */
    orderBy?: Prisma.s12_signe_vitalOrderByWithRelationInput | Prisma.s12_signe_vitalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s12_signe_vitals.
     */
    cursor?: Prisma.s12_signe_vitalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s12_signe_vitals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s12_signe_vitals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s12_signe_vitals.
     */
    distinct?: Prisma.S12_signe_vitalScalarFieldEnum | Prisma.S12_signe_vitalScalarFieldEnum[];
};
/**
 * s12_signe_vital findMany
 */
export type s12_signe_vitalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s12_signe_vital
     */
    select?: Prisma.s12_signe_vitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s12_signe_vital
     */
    omit?: Prisma.s12_signe_vitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s12_signe_vitalInclude<ExtArgs> | null;
    /**
     * Filter, which s12_signe_vitals to fetch.
     */
    where?: Prisma.s12_signe_vitalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s12_signe_vitals to fetch.
     */
    orderBy?: Prisma.s12_signe_vitalOrderByWithRelationInput | Prisma.s12_signe_vitalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s12_signe_vitals.
     */
    cursor?: Prisma.s12_signe_vitalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s12_signe_vitals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s12_signe_vitals.
     */
    skip?: number;
    distinct?: Prisma.S12_signe_vitalScalarFieldEnum | Prisma.S12_signe_vitalScalarFieldEnum[];
};
/**
 * s12_signe_vital create
 */
export type s12_signe_vitalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s12_signe_vital
     */
    select?: Prisma.s12_signe_vitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s12_signe_vital
     */
    omit?: Prisma.s12_signe_vitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s12_signe_vitalInclude<ExtArgs> | null;
    /**
     * The data needed to create a s12_signe_vital.
     */
    data: Prisma.XOR<Prisma.s12_signe_vitalCreateInput, Prisma.s12_signe_vitalUncheckedCreateInput>;
};
/**
 * s12_signe_vital createMany
 */
export type s12_signe_vitalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s12_signe_vitals.
     */
    data: Prisma.s12_signe_vitalCreateManyInput | Prisma.s12_signe_vitalCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s12_signe_vital createManyAndReturn
 */
export type s12_signe_vitalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s12_signe_vital
     */
    select?: Prisma.s12_signe_vitalSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s12_signe_vital
     */
    omit?: Prisma.s12_signe_vitalOmit<ExtArgs> | null;
    /**
     * The data used to create many s12_signe_vitals.
     */
    data: Prisma.s12_signe_vitalCreateManyInput | Prisma.s12_signe_vitalCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s12_signe_vitalIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s12_signe_vital update
 */
export type s12_signe_vitalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s12_signe_vital
     */
    select?: Prisma.s12_signe_vitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s12_signe_vital
     */
    omit?: Prisma.s12_signe_vitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s12_signe_vitalInclude<ExtArgs> | null;
    /**
     * The data needed to update a s12_signe_vital.
     */
    data: Prisma.XOR<Prisma.s12_signe_vitalUpdateInput, Prisma.s12_signe_vitalUncheckedUpdateInput>;
    /**
     * Choose, which s12_signe_vital to update.
     */
    where: Prisma.s12_signe_vitalWhereUniqueInput;
};
/**
 * s12_signe_vital updateMany
 */
export type s12_signe_vitalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s12_signe_vitals.
     */
    data: Prisma.XOR<Prisma.s12_signe_vitalUpdateManyMutationInput, Prisma.s12_signe_vitalUncheckedUpdateManyInput>;
    /**
     * Filter which s12_signe_vitals to update
     */
    where?: Prisma.s12_signe_vitalWhereInput;
    /**
     * Limit how many s12_signe_vitals to update.
     */
    limit?: number;
};
/**
 * s12_signe_vital updateManyAndReturn
 */
export type s12_signe_vitalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s12_signe_vital
     */
    select?: Prisma.s12_signe_vitalSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s12_signe_vital
     */
    omit?: Prisma.s12_signe_vitalOmit<ExtArgs> | null;
    /**
     * The data used to update s12_signe_vitals.
     */
    data: Prisma.XOR<Prisma.s12_signe_vitalUpdateManyMutationInput, Prisma.s12_signe_vitalUncheckedUpdateManyInput>;
    /**
     * Filter which s12_signe_vitals to update
     */
    where?: Prisma.s12_signe_vitalWhereInput;
    /**
     * Limit how many s12_signe_vitals to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s12_signe_vitalIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s12_signe_vital upsert
 */
export type s12_signe_vitalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s12_signe_vital
     */
    select?: Prisma.s12_signe_vitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s12_signe_vital
     */
    omit?: Prisma.s12_signe_vitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s12_signe_vitalInclude<ExtArgs> | null;
    /**
     * The filter to search for the s12_signe_vital to update in case it exists.
     */
    where: Prisma.s12_signe_vitalWhereUniqueInput;
    /**
     * In case the s12_signe_vital found by the `where` argument doesn't exist, create a new s12_signe_vital with this data.
     */
    create: Prisma.XOR<Prisma.s12_signe_vitalCreateInput, Prisma.s12_signe_vitalUncheckedCreateInput>;
    /**
     * In case the s12_signe_vital was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s12_signe_vitalUpdateInput, Prisma.s12_signe_vitalUncheckedUpdateInput>;
};
/**
 * s12_signe_vital delete
 */
export type s12_signe_vitalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s12_signe_vital
     */
    select?: Prisma.s12_signe_vitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s12_signe_vital
     */
    omit?: Prisma.s12_signe_vitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s12_signe_vitalInclude<ExtArgs> | null;
    /**
     * Filter which s12_signe_vital to delete.
     */
    where: Prisma.s12_signe_vitalWhereUniqueInput;
};
/**
 * s12_signe_vital deleteMany
 */
export type s12_signe_vitalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s12_signe_vitals to delete
     */
    where?: Prisma.s12_signe_vitalWhereInput;
    /**
     * Limit how many s12_signe_vitals to delete.
     */
    limit?: number;
};
/**
 * s12_signe_vital without action
 */
export type s12_signe_vitalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s12_signe_vital
     */
    select?: Prisma.s12_signe_vitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s12_signe_vital
     */
    omit?: Prisma.s12_signe_vitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s12_signe_vitalInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s12_signe_vital.d.ts.map