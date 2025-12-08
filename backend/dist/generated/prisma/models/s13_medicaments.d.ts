import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s13_medicaments
 *
 */
export type s13_medicamentsModel = runtime.Types.Result.DefaultSelection<Prisma.$s13_medicamentsPayload>;
export type AggregateS13_medicaments = {
    _count: S13_medicamentsCountAggregateOutputType | null;
    _avg: S13_medicamentsAvgAggregateOutputType | null;
    _sum: S13_medicamentsSumAggregateOutputType | null;
    _min: S13_medicamentsMinAggregateOutputType | null;
    _max: S13_medicamentsMaxAggregateOutputType | null;
};
export type S13_medicamentsAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S13_medicamentsSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
};
export type S13_medicamentsMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    nitro_prise: string | null;
    nitro_heure_dose1: Date | null;
    nitro_heure_dose2: Date | null;
    epinephrine_03_prise: string | null;
    epinephrine_03_heure_dose1: Date | null;
    epinephrine_03_heure_dose2: Date | null;
    epinephrine_015_prise: string | null;
    epinephrine_015_heure_dose1: Date | null;
    epinephrine_015_heure_dose2: Date | null;
    glucose_prise: string | null;
    glucose_heure_dose1: Date | null;
    glucose_heure_dose2: Date | null;
    glucagon_prise: string | null;
    glucagon_heure: Date | null;
    naloxone_prise: string | null;
    naloxone_heure_dose1: Date | null;
    naloxone_heure_dose2: Date | null;
};
export type S13_medicamentsMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    nitro_prise: string | null;
    nitro_heure_dose1: Date | null;
    nitro_heure_dose2: Date | null;
    epinephrine_03_prise: string | null;
    epinephrine_03_heure_dose1: Date | null;
    epinephrine_03_heure_dose2: Date | null;
    epinephrine_015_prise: string | null;
    epinephrine_015_heure_dose1: Date | null;
    epinephrine_015_heure_dose2: Date | null;
    glucose_prise: string | null;
    glucose_heure_dose1: Date | null;
    glucose_heure_dose2: Date | null;
    glucagon_prise: string | null;
    glucagon_heure: Date | null;
    naloxone_prise: string | null;
    naloxone_heure_dose1: Date | null;
    naloxone_heure_dose2: Date | null;
};
export type S13_medicamentsCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    nitro_prise: number;
    nitro_heure_dose1: number;
    nitro_heure_dose2: number;
    epinephrine_03_prise: number;
    epinephrine_03_heure_dose1: number;
    epinephrine_03_heure_dose2: number;
    epinephrine_015_prise: number;
    epinephrine_015_heure_dose1: number;
    epinephrine_015_heure_dose2: number;
    glucose_prise: number;
    glucose_heure_dose1: number;
    glucose_heure_dose2: number;
    glucagon_prise: number;
    glucagon_heure: number;
    naloxone_prise: number;
    naloxone_heure_dose1: number;
    naloxone_heure_dose2: number;
    _all: number;
};
export type S13_medicamentsAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S13_medicamentsSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
};
export type S13_medicamentsMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    nitro_prise?: true;
    nitro_heure_dose1?: true;
    nitro_heure_dose2?: true;
    epinephrine_03_prise?: true;
    epinephrine_03_heure_dose1?: true;
    epinephrine_03_heure_dose2?: true;
    epinephrine_015_prise?: true;
    epinephrine_015_heure_dose1?: true;
    epinephrine_015_heure_dose2?: true;
    glucose_prise?: true;
    glucose_heure_dose1?: true;
    glucose_heure_dose2?: true;
    glucagon_prise?: true;
    glucagon_heure?: true;
    naloxone_prise?: true;
    naloxone_heure_dose1?: true;
    naloxone_heure_dose2?: true;
};
export type S13_medicamentsMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    nitro_prise?: true;
    nitro_heure_dose1?: true;
    nitro_heure_dose2?: true;
    epinephrine_03_prise?: true;
    epinephrine_03_heure_dose1?: true;
    epinephrine_03_heure_dose2?: true;
    epinephrine_015_prise?: true;
    epinephrine_015_heure_dose1?: true;
    epinephrine_015_heure_dose2?: true;
    glucose_prise?: true;
    glucose_heure_dose1?: true;
    glucose_heure_dose2?: true;
    glucagon_prise?: true;
    glucagon_heure?: true;
    naloxone_prise?: true;
    naloxone_heure_dose1?: true;
    naloxone_heure_dose2?: true;
};
export type S13_medicamentsCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    nitro_prise?: true;
    nitro_heure_dose1?: true;
    nitro_heure_dose2?: true;
    epinephrine_03_prise?: true;
    epinephrine_03_heure_dose1?: true;
    epinephrine_03_heure_dose2?: true;
    epinephrine_015_prise?: true;
    epinephrine_015_heure_dose1?: true;
    epinephrine_015_heure_dose2?: true;
    glucose_prise?: true;
    glucose_heure_dose1?: true;
    glucose_heure_dose2?: true;
    glucagon_prise?: true;
    glucagon_heure?: true;
    naloxone_prise?: true;
    naloxone_heure_dose1?: true;
    naloxone_heure_dose2?: true;
    _all?: true;
};
export type S13_medicamentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s13_medicaments to aggregate.
     */
    where?: Prisma.s13_medicamentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_medicaments to fetch.
     */
    orderBy?: Prisma.s13_medicamentsOrderByWithRelationInput | Prisma.s13_medicamentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s13_medicamentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_medicaments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_medicaments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s13_medicaments
    **/
    _count?: true | S13_medicamentsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S13_medicamentsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S13_medicamentsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S13_medicamentsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S13_medicamentsMaxAggregateInputType;
};
export type GetS13_medicamentsAggregateType<T extends S13_medicamentsAggregateArgs> = {
    [P in keyof T & keyof AggregateS13_medicaments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS13_medicaments[P]> : Prisma.GetScalarType<T[P], AggregateS13_medicaments[P]>;
};
export type s13_medicamentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s13_medicamentsWhereInput;
    orderBy?: Prisma.s13_medicamentsOrderByWithAggregationInput | Prisma.s13_medicamentsOrderByWithAggregationInput[];
    by: Prisma.S13_medicamentsScalarFieldEnum[] | Prisma.S13_medicamentsScalarFieldEnum;
    having?: Prisma.s13_medicamentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S13_medicamentsCountAggregateInputType | true;
    _avg?: S13_medicamentsAvgAggregateInputType;
    _sum?: S13_medicamentsSumAggregateInputType;
    _min?: S13_medicamentsMinAggregateInputType;
    _max?: S13_medicamentsMaxAggregateInputType;
};
export type S13_medicamentsGroupByOutputType = {
    id: number;
    rapport_id: number;
    nitro_prise: string | null;
    nitro_heure_dose1: Date | null;
    nitro_heure_dose2: Date | null;
    epinephrine_03_prise: string | null;
    epinephrine_03_heure_dose1: Date | null;
    epinephrine_03_heure_dose2: Date | null;
    epinephrine_015_prise: string | null;
    epinephrine_015_heure_dose1: Date | null;
    epinephrine_015_heure_dose2: Date | null;
    glucose_prise: string | null;
    glucose_heure_dose1: Date | null;
    glucose_heure_dose2: Date | null;
    glucagon_prise: string | null;
    glucagon_heure: Date | null;
    naloxone_prise: string | null;
    naloxone_heure_dose1: Date | null;
    naloxone_heure_dose2: Date | null;
    _count: S13_medicamentsCountAggregateOutputType | null;
    _avg: S13_medicamentsAvgAggregateOutputType | null;
    _sum: S13_medicamentsSumAggregateOutputType | null;
    _min: S13_medicamentsMinAggregateOutputType | null;
    _max: S13_medicamentsMaxAggregateOutputType | null;
};
type GetS13_medicamentsGroupByPayload<T extends s13_medicamentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S13_medicamentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S13_medicamentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S13_medicamentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S13_medicamentsGroupByOutputType[P]>;
}>>;
export type s13_medicamentsWhereInput = {
    AND?: Prisma.s13_medicamentsWhereInput | Prisma.s13_medicamentsWhereInput[];
    OR?: Prisma.s13_medicamentsWhereInput[];
    NOT?: Prisma.s13_medicamentsWhereInput | Prisma.s13_medicamentsWhereInput[];
    id?: Prisma.IntFilter<"s13_medicaments"> | number;
    rapport_id?: Prisma.IntFilter<"s13_medicaments"> | number;
    nitro_prise?: Prisma.StringNullableFilter<"s13_medicaments"> | string | null;
    nitro_heure_dose1?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    nitro_heure_dose2?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    epinephrine_03_prise?: Prisma.StringNullableFilter<"s13_medicaments"> | string | null;
    epinephrine_03_heure_dose1?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    epinephrine_03_heure_dose2?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    epinephrine_015_prise?: Prisma.StringNullableFilter<"s13_medicaments"> | string | null;
    epinephrine_015_heure_dose1?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    epinephrine_015_heure_dose2?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    glucose_prise?: Prisma.StringNullableFilter<"s13_medicaments"> | string | null;
    glucose_heure_dose1?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    glucose_heure_dose2?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    glucagon_prise?: Prisma.StringNullableFilter<"s13_medicaments"> | string | null;
    glucagon_heure?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    naloxone_prise?: Prisma.StringNullableFilter<"s13_medicaments"> | string | null;
    naloxone_heure_dose1?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    naloxone_heure_dose2?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s13_medicamentsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    nitro_prise?: Prisma.SortOrderInput | Prisma.SortOrder;
    nitro_heure_dose1?: Prisma.SortOrderInput | Prisma.SortOrder;
    nitro_heure_dose2?: Prisma.SortOrderInput | Prisma.SortOrder;
    epinephrine_03_prise?: Prisma.SortOrderInput | Prisma.SortOrder;
    epinephrine_03_heure_dose1?: Prisma.SortOrderInput | Prisma.SortOrder;
    epinephrine_03_heure_dose2?: Prisma.SortOrderInput | Prisma.SortOrder;
    epinephrine_015_prise?: Prisma.SortOrderInput | Prisma.SortOrder;
    epinephrine_015_heure_dose1?: Prisma.SortOrderInput | Prisma.SortOrder;
    epinephrine_015_heure_dose2?: Prisma.SortOrderInput | Prisma.SortOrder;
    glucose_prise?: Prisma.SortOrderInput | Prisma.SortOrder;
    glucose_heure_dose1?: Prisma.SortOrderInput | Prisma.SortOrder;
    glucose_heure_dose2?: Prisma.SortOrderInput | Prisma.SortOrder;
    glucagon_prise?: Prisma.SortOrderInput | Prisma.SortOrder;
    glucagon_heure?: Prisma.SortOrderInput | Prisma.SortOrder;
    naloxone_prise?: Prisma.SortOrderInput | Prisma.SortOrder;
    naloxone_heure_dose1?: Prisma.SortOrderInput | Prisma.SortOrder;
    naloxone_heure_dose2?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s13_medicamentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id?: number;
    AND?: Prisma.s13_medicamentsWhereInput | Prisma.s13_medicamentsWhereInput[];
    OR?: Prisma.s13_medicamentsWhereInput[];
    NOT?: Prisma.s13_medicamentsWhereInput | Prisma.s13_medicamentsWhereInput[];
    nitro_prise?: Prisma.StringNullableFilter<"s13_medicaments"> | string | null;
    nitro_heure_dose1?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    nitro_heure_dose2?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    epinephrine_03_prise?: Prisma.StringNullableFilter<"s13_medicaments"> | string | null;
    epinephrine_03_heure_dose1?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    epinephrine_03_heure_dose2?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    epinephrine_015_prise?: Prisma.StringNullableFilter<"s13_medicaments"> | string | null;
    epinephrine_015_heure_dose1?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    epinephrine_015_heure_dose2?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    glucose_prise?: Prisma.StringNullableFilter<"s13_medicaments"> | string | null;
    glucose_heure_dose1?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    glucose_heure_dose2?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    glucagon_prise?: Prisma.StringNullableFilter<"s13_medicaments"> | string | null;
    glucagon_heure?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    naloxone_prise?: Prisma.StringNullableFilter<"s13_medicaments"> | string | null;
    naloxone_heure_dose1?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    naloxone_heure_dose2?: Prisma.DateTimeNullableFilter<"s13_medicaments"> | Date | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id" | "rapport_id">;
export type s13_medicamentsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    nitro_prise?: Prisma.SortOrderInput | Prisma.SortOrder;
    nitro_heure_dose1?: Prisma.SortOrderInput | Prisma.SortOrder;
    nitro_heure_dose2?: Prisma.SortOrderInput | Prisma.SortOrder;
    epinephrine_03_prise?: Prisma.SortOrderInput | Prisma.SortOrder;
    epinephrine_03_heure_dose1?: Prisma.SortOrderInput | Prisma.SortOrder;
    epinephrine_03_heure_dose2?: Prisma.SortOrderInput | Prisma.SortOrder;
    epinephrine_015_prise?: Prisma.SortOrderInput | Prisma.SortOrder;
    epinephrine_015_heure_dose1?: Prisma.SortOrderInput | Prisma.SortOrder;
    epinephrine_015_heure_dose2?: Prisma.SortOrderInput | Prisma.SortOrder;
    glucose_prise?: Prisma.SortOrderInput | Prisma.SortOrder;
    glucose_heure_dose1?: Prisma.SortOrderInput | Prisma.SortOrder;
    glucose_heure_dose2?: Prisma.SortOrderInput | Prisma.SortOrder;
    glucagon_prise?: Prisma.SortOrderInput | Prisma.SortOrder;
    glucagon_heure?: Prisma.SortOrderInput | Prisma.SortOrder;
    naloxone_prise?: Prisma.SortOrderInput | Prisma.SortOrder;
    naloxone_heure_dose1?: Prisma.SortOrderInput | Prisma.SortOrder;
    naloxone_heure_dose2?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s13_medicamentsCountOrderByAggregateInput;
    _avg?: Prisma.s13_medicamentsAvgOrderByAggregateInput;
    _max?: Prisma.s13_medicamentsMaxOrderByAggregateInput;
    _min?: Prisma.s13_medicamentsMinOrderByAggregateInput;
    _sum?: Prisma.s13_medicamentsSumOrderByAggregateInput;
};
export type s13_medicamentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.s13_medicamentsScalarWhereWithAggregatesInput | Prisma.s13_medicamentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.s13_medicamentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s13_medicamentsScalarWhereWithAggregatesInput | Prisma.s13_medicamentsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s13_medicaments"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s13_medicaments"> | number;
    nitro_prise?: Prisma.StringNullableWithAggregatesFilter<"s13_medicaments"> | string | null;
    nitro_heure_dose1?: Prisma.DateTimeNullableWithAggregatesFilter<"s13_medicaments"> | Date | string | null;
    nitro_heure_dose2?: Prisma.DateTimeNullableWithAggregatesFilter<"s13_medicaments"> | Date | string | null;
    epinephrine_03_prise?: Prisma.StringNullableWithAggregatesFilter<"s13_medicaments"> | string | null;
    epinephrine_03_heure_dose1?: Prisma.DateTimeNullableWithAggregatesFilter<"s13_medicaments"> | Date | string | null;
    epinephrine_03_heure_dose2?: Prisma.DateTimeNullableWithAggregatesFilter<"s13_medicaments"> | Date | string | null;
    epinephrine_015_prise?: Prisma.StringNullableWithAggregatesFilter<"s13_medicaments"> | string | null;
    epinephrine_015_heure_dose1?: Prisma.DateTimeNullableWithAggregatesFilter<"s13_medicaments"> | Date | string | null;
    epinephrine_015_heure_dose2?: Prisma.DateTimeNullableWithAggregatesFilter<"s13_medicaments"> | Date | string | null;
    glucose_prise?: Prisma.StringNullableWithAggregatesFilter<"s13_medicaments"> | string | null;
    glucose_heure_dose1?: Prisma.DateTimeNullableWithAggregatesFilter<"s13_medicaments"> | Date | string | null;
    glucose_heure_dose2?: Prisma.DateTimeNullableWithAggregatesFilter<"s13_medicaments"> | Date | string | null;
    glucagon_prise?: Prisma.StringNullableWithAggregatesFilter<"s13_medicaments"> | string | null;
    glucagon_heure?: Prisma.DateTimeNullableWithAggregatesFilter<"s13_medicaments"> | Date | string | null;
    naloxone_prise?: Prisma.StringNullableWithAggregatesFilter<"s13_medicaments"> | string | null;
    naloxone_heure_dose1?: Prisma.DateTimeNullableWithAggregatesFilter<"s13_medicaments"> | Date | string | null;
    naloxone_heure_dose2?: Prisma.DateTimeNullableWithAggregatesFilter<"s13_medicaments"> | Date | string | null;
};
export type s13_medicamentsCreateInput = {
    nitro_prise?: string | null;
    nitro_heure_dose1?: Date | string | null;
    nitro_heure_dose2?: Date | string | null;
    epinephrine_03_prise?: string | null;
    epinephrine_03_heure_dose1?: Date | string | null;
    epinephrine_03_heure_dose2?: Date | string | null;
    epinephrine_015_prise?: string | null;
    epinephrine_015_heure_dose1?: Date | string | null;
    epinephrine_015_heure_dose2?: Date | string | null;
    glucose_prise?: string | null;
    glucose_heure_dose1?: Date | string | null;
    glucose_heure_dose2?: Date | string | null;
    glucagon_prise?: string | null;
    glucagon_heure?: Date | string | null;
    naloxone_prise?: string | null;
    naloxone_heure_dose1?: Date | string | null;
    naloxone_heure_dose2?: Date | string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS13_medicamentsInput;
};
export type s13_medicamentsUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    nitro_prise?: string | null;
    nitro_heure_dose1?: Date | string | null;
    nitro_heure_dose2?: Date | string | null;
    epinephrine_03_prise?: string | null;
    epinephrine_03_heure_dose1?: Date | string | null;
    epinephrine_03_heure_dose2?: Date | string | null;
    epinephrine_015_prise?: string | null;
    epinephrine_015_heure_dose1?: Date | string | null;
    epinephrine_015_heure_dose2?: Date | string | null;
    glucose_prise?: string | null;
    glucose_heure_dose1?: Date | string | null;
    glucose_heure_dose2?: Date | string | null;
    glucagon_prise?: string | null;
    glucagon_heure?: Date | string | null;
    naloxone_prise?: string | null;
    naloxone_heure_dose1?: Date | string | null;
    naloxone_heure_dose2?: Date | string | null;
};
export type s13_medicamentsUpdateInput = {
    nitro_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nitro_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nitro_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_03_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    epinephrine_03_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_03_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_015_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    epinephrine_015_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_015_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    glucose_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glucose_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    glucose_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    glucagon_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glucagon_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    naloxone_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    naloxone_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    naloxone_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS13_medicamentsNestedInput;
};
export type s13_medicamentsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nitro_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nitro_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nitro_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_03_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    epinephrine_03_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_03_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_015_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    epinephrine_015_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_015_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    glucose_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glucose_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    glucose_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    glucagon_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glucagon_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    naloxone_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    naloxone_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    naloxone_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s13_medicamentsCreateManyInput = {
    id?: number;
    rapport_id: number;
    nitro_prise?: string | null;
    nitro_heure_dose1?: Date | string | null;
    nitro_heure_dose2?: Date | string | null;
    epinephrine_03_prise?: string | null;
    epinephrine_03_heure_dose1?: Date | string | null;
    epinephrine_03_heure_dose2?: Date | string | null;
    epinephrine_015_prise?: string | null;
    epinephrine_015_heure_dose1?: Date | string | null;
    epinephrine_015_heure_dose2?: Date | string | null;
    glucose_prise?: string | null;
    glucose_heure_dose1?: Date | string | null;
    glucose_heure_dose2?: Date | string | null;
    glucagon_prise?: string | null;
    glucagon_heure?: Date | string | null;
    naloxone_prise?: string | null;
    naloxone_heure_dose1?: Date | string | null;
    naloxone_heure_dose2?: Date | string | null;
};
export type s13_medicamentsUpdateManyMutationInput = {
    nitro_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nitro_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nitro_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_03_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    epinephrine_03_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_03_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_015_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    epinephrine_015_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_015_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    glucose_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glucose_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    glucose_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    glucagon_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glucagon_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    naloxone_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    naloxone_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    naloxone_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s13_medicamentsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    nitro_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nitro_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nitro_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_03_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    epinephrine_03_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_03_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_015_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    epinephrine_015_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_015_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    glucose_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glucose_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    glucose_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    glucagon_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glucagon_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    naloxone_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    naloxone_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    naloxone_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type S13_medicamentsNullableScalarRelationFilter = {
    is?: Prisma.s13_medicamentsWhereInput | null;
    isNot?: Prisma.s13_medicamentsWhereInput | null;
};
export type s13_medicamentsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    nitro_prise?: Prisma.SortOrder;
    nitro_heure_dose1?: Prisma.SortOrder;
    nitro_heure_dose2?: Prisma.SortOrder;
    epinephrine_03_prise?: Prisma.SortOrder;
    epinephrine_03_heure_dose1?: Prisma.SortOrder;
    epinephrine_03_heure_dose2?: Prisma.SortOrder;
    epinephrine_015_prise?: Prisma.SortOrder;
    epinephrine_015_heure_dose1?: Prisma.SortOrder;
    epinephrine_015_heure_dose2?: Prisma.SortOrder;
    glucose_prise?: Prisma.SortOrder;
    glucose_heure_dose1?: Prisma.SortOrder;
    glucose_heure_dose2?: Prisma.SortOrder;
    glucagon_prise?: Prisma.SortOrder;
    glucagon_heure?: Prisma.SortOrder;
    naloxone_prise?: Prisma.SortOrder;
    naloxone_heure_dose1?: Prisma.SortOrder;
    naloxone_heure_dose2?: Prisma.SortOrder;
};
export type s13_medicamentsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s13_medicamentsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    nitro_prise?: Prisma.SortOrder;
    nitro_heure_dose1?: Prisma.SortOrder;
    nitro_heure_dose2?: Prisma.SortOrder;
    epinephrine_03_prise?: Prisma.SortOrder;
    epinephrine_03_heure_dose1?: Prisma.SortOrder;
    epinephrine_03_heure_dose2?: Prisma.SortOrder;
    epinephrine_015_prise?: Prisma.SortOrder;
    epinephrine_015_heure_dose1?: Prisma.SortOrder;
    epinephrine_015_heure_dose2?: Prisma.SortOrder;
    glucose_prise?: Prisma.SortOrder;
    glucose_heure_dose1?: Prisma.SortOrder;
    glucose_heure_dose2?: Prisma.SortOrder;
    glucagon_prise?: Prisma.SortOrder;
    glucagon_heure?: Prisma.SortOrder;
    naloxone_prise?: Prisma.SortOrder;
    naloxone_heure_dose1?: Prisma.SortOrder;
    naloxone_heure_dose2?: Prisma.SortOrder;
};
export type s13_medicamentsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    nitro_prise?: Prisma.SortOrder;
    nitro_heure_dose1?: Prisma.SortOrder;
    nitro_heure_dose2?: Prisma.SortOrder;
    epinephrine_03_prise?: Prisma.SortOrder;
    epinephrine_03_heure_dose1?: Prisma.SortOrder;
    epinephrine_03_heure_dose2?: Prisma.SortOrder;
    epinephrine_015_prise?: Prisma.SortOrder;
    epinephrine_015_heure_dose1?: Prisma.SortOrder;
    epinephrine_015_heure_dose2?: Prisma.SortOrder;
    glucose_prise?: Prisma.SortOrder;
    glucose_heure_dose1?: Prisma.SortOrder;
    glucose_heure_dose2?: Prisma.SortOrder;
    glucagon_prise?: Prisma.SortOrder;
    glucagon_heure?: Prisma.SortOrder;
    naloxone_prise?: Prisma.SortOrder;
    naloxone_heure_dose1?: Prisma.SortOrder;
    naloxone_heure_dose2?: Prisma.SortOrder;
};
export type s13_medicamentsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
};
export type s13_medicamentsCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s13_medicamentsCreateWithoutRapportInput, Prisma.s13_medicamentsUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_medicamentsCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s13_medicamentsWhereUniqueInput;
};
export type s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s13_medicamentsCreateWithoutRapportInput, Prisma.s13_medicamentsUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_medicamentsCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s13_medicamentsWhereUniqueInput;
};
export type s13_medicamentsUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s13_medicamentsCreateWithoutRapportInput, Prisma.s13_medicamentsUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_medicamentsCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s13_medicamentsUpsertWithoutRapportInput;
    disconnect?: Prisma.s13_medicamentsWhereInput | boolean;
    delete?: Prisma.s13_medicamentsWhereInput | boolean;
    connect?: Prisma.s13_medicamentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s13_medicamentsUpdateToOneWithWhereWithoutRapportInput, Prisma.s13_medicamentsUpdateWithoutRapportInput>, Prisma.s13_medicamentsUncheckedUpdateWithoutRapportInput>;
};
export type s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s13_medicamentsCreateWithoutRapportInput, Prisma.s13_medicamentsUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_medicamentsCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s13_medicamentsUpsertWithoutRapportInput;
    disconnect?: Prisma.s13_medicamentsWhereInput | boolean;
    delete?: Prisma.s13_medicamentsWhereInput | boolean;
    connect?: Prisma.s13_medicamentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s13_medicamentsUpdateToOneWithWhereWithoutRapportInput, Prisma.s13_medicamentsUpdateWithoutRapportInput>, Prisma.s13_medicamentsUncheckedUpdateWithoutRapportInput>;
};
export type s13_medicamentsCreateWithoutRapportInput = {
    nitro_prise?: string | null;
    nitro_heure_dose1?: Date | string | null;
    nitro_heure_dose2?: Date | string | null;
    epinephrine_03_prise?: string | null;
    epinephrine_03_heure_dose1?: Date | string | null;
    epinephrine_03_heure_dose2?: Date | string | null;
    epinephrine_015_prise?: string | null;
    epinephrine_015_heure_dose1?: Date | string | null;
    epinephrine_015_heure_dose2?: Date | string | null;
    glucose_prise?: string | null;
    glucose_heure_dose1?: Date | string | null;
    glucose_heure_dose2?: Date | string | null;
    glucagon_prise?: string | null;
    glucagon_heure?: Date | string | null;
    naloxone_prise?: string | null;
    naloxone_heure_dose1?: Date | string | null;
    naloxone_heure_dose2?: Date | string | null;
};
export type s13_medicamentsUncheckedCreateWithoutRapportInput = {
    id?: number;
    nitro_prise?: string | null;
    nitro_heure_dose1?: Date | string | null;
    nitro_heure_dose2?: Date | string | null;
    epinephrine_03_prise?: string | null;
    epinephrine_03_heure_dose1?: Date | string | null;
    epinephrine_03_heure_dose2?: Date | string | null;
    epinephrine_015_prise?: string | null;
    epinephrine_015_heure_dose1?: Date | string | null;
    epinephrine_015_heure_dose2?: Date | string | null;
    glucose_prise?: string | null;
    glucose_heure_dose1?: Date | string | null;
    glucose_heure_dose2?: Date | string | null;
    glucagon_prise?: string | null;
    glucagon_heure?: Date | string | null;
    naloxone_prise?: string | null;
    naloxone_heure_dose1?: Date | string | null;
    naloxone_heure_dose2?: Date | string | null;
};
export type s13_medicamentsCreateOrConnectWithoutRapportInput = {
    where: Prisma.s13_medicamentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.s13_medicamentsCreateWithoutRapportInput, Prisma.s13_medicamentsUncheckedCreateWithoutRapportInput>;
};
export type s13_medicamentsUpsertWithoutRapportInput = {
    update: Prisma.XOR<Prisma.s13_medicamentsUpdateWithoutRapportInput, Prisma.s13_medicamentsUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s13_medicamentsCreateWithoutRapportInput, Prisma.s13_medicamentsUncheckedCreateWithoutRapportInput>;
    where?: Prisma.s13_medicamentsWhereInput;
};
export type s13_medicamentsUpdateToOneWithWhereWithoutRapportInput = {
    where?: Prisma.s13_medicamentsWhereInput;
    data: Prisma.XOR<Prisma.s13_medicamentsUpdateWithoutRapportInput, Prisma.s13_medicamentsUncheckedUpdateWithoutRapportInput>;
};
export type s13_medicamentsUpdateWithoutRapportInput = {
    nitro_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nitro_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nitro_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_03_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    epinephrine_03_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_03_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_015_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    epinephrine_015_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_015_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    glucose_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glucose_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    glucose_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    glucagon_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glucagon_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    naloxone_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    naloxone_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    naloxone_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s13_medicamentsUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nitro_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nitro_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    nitro_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_03_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    epinephrine_03_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_03_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_015_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    epinephrine_015_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    epinephrine_015_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    glucose_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glucose_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    glucose_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    glucagon_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    glucagon_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    naloxone_prise?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    naloxone_heure_dose1?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    naloxone_heure_dose2?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type s13_medicamentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    nitro_prise?: boolean;
    nitro_heure_dose1?: boolean;
    nitro_heure_dose2?: boolean;
    epinephrine_03_prise?: boolean;
    epinephrine_03_heure_dose1?: boolean;
    epinephrine_03_heure_dose2?: boolean;
    epinephrine_015_prise?: boolean;
    epinephrine_015_heure_dose1?: boolean;
    epinephrine_015_heure_dose2?: boolean;
    glucose_prise?: boolean;
    glucose_heure_dose1?: boolean;
    glucose_heure_dose2?: boolean;
    glucagon_prise?: boolean;
    glucagon_heure?: boolean;
    naloxone_prise?: boolean;
    naloxone_heure_dose1?: boolean;
    naloxone_heure_dose2?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_medicaments"]>;
export type s13_medicamentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    nitro_prise?: boolean;
    nitro_heure_dose1?: boolean;
    nitro_heure_dose2?: boolean;
    epinephrine_03_prise?: boolean;
    epinephrine_03_heure_dose1?: boolean;
    epinephrine_03_heure_dose2?: boolean;
    epinephrine_015_prise?: boolean;
    epinephrine_015_heure_dose1?: boolean;
    epinephrine_015_heure_dose2?: boolean;
    glucose_prise?: boolean;
    glucose_heure_dose1?: boolean;
    glucose_heure_dose2?: boolean;
    glucagon_prise?: boolean;
    glucagon_heure?: boolean;
    naloxone_prise?: boolean;
    naloxone_heure_dose1?: boolean;
    naloxone_heure_dose2?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_medicaments"]>;
export type s13_medicamentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    nitro_prise?: boolean;
    nitro_heure_dose1?: boolean;
    nitro_heure_dose2?: boolean;
    epinephrine_03_prise?: boolean;
    epinephrine_03_heure_dose1?: boolean;
    epinephrine_03_heure_dose2?: boolean;
    epinephrine_015_prise?: boolean;
    epinephrine_015_heure_dose1?: boolean;
    epinephrine_015_heure_dose2?: boolean;
    glucose_prise?: boolean;
    glucose_heure_dose1?: boolean;
    glucose_heure_dose2?: boolean;
    glucagon_prise?: boolean;
    glucagon_heure?: boolean;
    naloxone_prise?: boolean;
    naloxone_heure_dose1?: boolean;
    naloxone_heure_dose2?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_medicaments"]>;
export type s13_medicamentsSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    nitro_prise?: boolean;
    nitro_heure_dose1?: boolean;
    nitro_heure_dose2?: boolean;
    epinephrine_03_prise?: boolean;
    epinephrine_03_heure_dose1?: boolean;
    epinephrine_03_heure_dose2?: boolean;
    epinephrine_015_prise?: boolean;
    epinephrine_015_heure_dose1?: boolean;
    epinephrine_015_heure_dose2?: boolean;
    glucose_prise?: boolean;
    glucose_heure_dose1?: boolean;
    glucose_heure_dose2?: boolean;
    glucagon_prise?: boolean;
    glucagon_heure?: boolean;
    naloxone_prise?: boolean;
    naloxone_heure_dose1?: boolean;
    naloxone_heure_dose2?: boolean;
};
export type s13_medicamentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "nitro_prise" | "nitro_heure_dose1" | "nitro_heure_dose2" | "epinephrine_03_prise" | "epinephrine_03_heure_dose1" | "epinephrine_03_heure_dose2" | "epinephrine_015_prise" | "epinephrine_015_heure_dose1" | "epinephrine_015_heure_dose2" | "glucose_prise" | "glucose_heure_dose1" | "glucose_heure_dose2" | "glucagon_prise" | "glucagon_heure" | "naloxone_prise" | "naloxone_heure_dose1" | "naloxone_heure_dose2", ExtArgs["result"]["s13_medicaments"]>;
export type s13_medicamentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s13_medicamentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s13_medicamentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s13_medicamentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s13_medicaments";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        nitro_prise: string | null;
        nitro_heure_dose1: Date | null;
        nitro_heure_dose2: Date | null;
        epinephrine_03_prise: string | null;
        epinephrine_03_heure_dose1: Date | null;
        epinephrine_03_heure_dose2: Date | null;
        epinephrine_015_prise: string | null;
        epinephrine_015_heure_dose1: Date | null;
        epinephrine_015_heure_dose2: Date | null;
        glucose_prise: string | null;
        glucose_heure_dose1: Date | null;
        glucose_heure_dose2: Date | null;
        glucagon_prise: string | null;
        glucagon_heure: Date | null;
        naloxone_prise: string | null;
        naloxone_heure_dose1: Date | null;
        naloxone_heure_dose2: Date | null;
    }, ExtArgs["result"]["s13_medicaments"]>;
    composites: {};
};
export type s13_medicamentsGetPayload<S extends boolean | null | undefined | s13_medicamentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s13_medicamentsPayload, S>;
export type s13_medicamentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s13_medicamentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S13_medicamentsCountAggregateInputType | true;
};
export interface s13_medicamentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s13_medicaments'];
        meta: {
            name: 's13_medicaments';
        };
    };
    /**
     * Find zero or one S13_medicaments that matches the filter.
     * @param {s13_medicamentsFindUniqueArgs} args - Arguments to find a S13_medicaments
     * @example
     * // Get one S13_medicaments
     * const s13_medicaments = await prisma.s13_medicaments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s13_medicamentsFindUniqueArgs>(args: Prisma.SelectSubset<T, s13_medicamentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s13_medicamentsClient<runtime.Types.Result.GetResult<Prisma.$s13_medicamentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S13_medicaments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s13_medicamentsFindUniqueOrThrowArgs} args - Arguments to find a S13_medicaments
     * @example
     * // Get one S13_medicaments
     * const s13_medicaments = await prisma.s13_medicaments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s13_medicamentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s13_medicamentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s13_medicamentsClient<runtime.Types.Result.GetResult<Prisma.$s13_medicamentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S13_medicaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_medicamentsFindFirstArgs} args - Arguments to find a S13_medicaments
     * @example
     * // Get one S13_medicaments
     * const s13_medicaments = await prisma.s13_medicaments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s13_medicamentsFindFirstArgs>(args?: Prisma.SelectSubset<T, s13_medicamentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__s13_medicamentsClient<runtime.Types.Result.GetResult<Prisma.$s13_medicamentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S13_medicaments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_medicamentsFindFirstOrThrowArgs} args - Arguments to find a S13_medicaments
     * @example
     * // Get one S13_medicaments
     * const s13_medicaments = await prisma.s13_medicaments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s13_medicamentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s13_medicamentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s13_medicamentsClient<runtime.Types.Result.GetResult<Prisma.$s13_medicamentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S13_medicaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_medicamentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S13_medicaments
     * const s13_medicaments = await prisma.s13_medicaments.findMany()
     *
     * // Get first 10 S13_medicaments
     * const s13_medicaments = await prisma.s13_medicaments.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s13_medicamentsWithIdOnly = await prisma.s13_medicaments.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s13_medicamentsFindManyArgs>(args?: Prisma.SelectSubset<T, s13_medicamentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_medicamentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S13_medicaments.
     * @param {s13_medicamentsCreateArgs} args - Arguments to create a S13_medicaments.
     * @example
     * // Create one S13_medicaments
     * const S13_medicaments = await prisma.s13_medicaments.create({
     *   data: {
     *     // ... data to create a S13_medicaments
     *   }
     * })
     *
     */
    create<T extends s13_medicamentsCreateArgs>(args: Prisma.SelectSubset<T, s13_medicamentsCreateArgs<ExtArgs>>): Prisma.Prisma__s13_medicamentsClient<runtime.Types.Result.GetResult<Prisma.$s13_medicamentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S13_medicaments.
     * @param {s13_medicamentsCreateManyArgs} args - Arguments to create many S13_medicaments.
     * @example
     * // Create many S13_medicaments
     * const s13_medicaments = await prisma.s13_medicaments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s13_medicamentsCreateManyArgs>(args?: Prisma.SelectSubset<T, s13_medicamentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S13_medicaments and returns the data saved in the database.
     * @param {s13_medicamentsCreateManyAndReturnArgs} args - Arguments to create many S13_medicaments.
     * @example
     * // Create many S13_medicaments
     * const s13_medicaments = await prisma.s13_medicaments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S13_medicaments and only return the `id`
     * const s13_medicamentsWithIdOnly = await prisma.s13_medicaments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s13_medicamentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s13_medicamentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_medicamentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S13_medicaments.
     * @param {s13_medicamentsDeleteArgs} args - Arguments to delete one S13_medicaments.
     * @example
     * // Delete one S13_medicaments
     * const S13_medicaments = await prisma.s13_medicaments.delete({
     *   where: {
     *     // ... filter to delete one S13_medicaments
     *   }
     * })
     *
     */
    delete<T extends s13_medicamentsDeleteArgs>(args: Prisma.SelectSubset<T, s13_medicamentsDeleteArgs<ExtArgs>>): Prisma.Prisma__s13_medicamentsClient<runtime.Types.Result.GetResult<Prisma.$s13_medicamentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S13_medicaments.
     * @param {s13_medicamentsUpdateArgs} args - Arguments to update one S13_medicaments.
     * @example
     * // Update one S13_medicaments
     * const s13_medicaments = await prisma.s13_medicaments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s13_medicamentsUpdateArgs>(args: Prisma.SelectSubset<T, s13_medicamentsUpdateArgs<ExtArgs>>): Prisma.Prisma__s13_medicamentsClient<runtime.Types.Result.GetResult<Prisma.$s13_medicamentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S13_medicaments.
     * @param {s13_medicamentsDeleteManyArgs} args - Arguments to filter S13_medicaments to delete.
     * @example
     * // Delete a few S13_medicaments
     * const { count } = await prisma.s13_medicaments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s13_medicamentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, s13_medicamentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S13_medicaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_medicamentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S13_medicaments
     * const s13_medicaments = await prisma.s13_medicaments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s13_medicamentsUpdateManyArgs>(args: Prisma.SelectSubset<T, s13_medicamentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S13_medicaments and returns the data updated in the database.
     * @param {s13_medicamentsUpdateManyAndReturnArgs} args - Arguments to update many S13_medicaments.
     * @example
     * // Update many S13_medicaments
     * const s13_medicaments = await prisma.s13_medicaments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S13_medicaments and only return the `id`
     * const s13_medicamentsWithIdOnly = await prisma.s13_medicaments.updateManyAndReturn({
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
    updateManyAndReturn<T extends s13_medicamentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s13_medicamentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_medicamentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S13_medicaments.
     * @param {s13_medicamentsUpsertArgs} args - Arguments to update or create a S13_medicaments.
     * @example
     * // Update or create a S13_medicaments
     * const s13_medicaments = await prisma.s13_medicaments.upsert({
     *   create: {
     *     // ... data to create a S13_medicaments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S13_medicaments we want to update
     *   }
     * })
     */
    upsert<T extends s13_medicamentsUpsertArgs>(args: Prisma.SelectSubset<T, s13_medicamentsUpsertArgs<ExtArgs>>): Prisma.Prisma__s13_medicamentsClient<runtime.Types.Result.GetResult<Prisma.$s13_medicamentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S13_medicaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_medicamentsCountArgs} args - Arguments to filter S13_medicaments to count.
     * @example
     * // Count the number of S13_medicaments
     * const count = await prisma.s13_medicaments.count({
     *   where: {
     *     // ... the filter for the S13_medicaments we want to count
     *   }
     * })
    **/
    count<T extends s13_medicamentsCountArgs>(args?: Prisma.Subset<T, s13_medicamentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S13_medicamentsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S13_medicaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S13_medicamentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S13_medicamentsAggregateArgs>(args: Prisma.Subset<T, S13_medicamentsAggregateArgs>): Prisma.PrismaPromise<GetS13_medicamentsAggregateType<T>>;
    /**
     * Group by S13_medicaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_medicamentsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s13_medicamentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s13_medicamentsGroupByArgs['orderBy'];
    } : {
        orderBy?: s13_medicamentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s13_medicamentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS13_medicamentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s13_medicaments model
     */
    readonly fields: s13_medicamentsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s13_medicaments.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s13_medicamentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the s13_medicaments model
 */
export interface s13_medicamentsFieldRefs {
    readonly id: Prisma.FieldRef<"s13_medicaments", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s13_medicaments", 'Int'>;
    readonly nitro_prise: Prisma.FieldRef<"s13_medicaments", 'String'>;
    readonly nitro_heure_dose1: Prisma.FieldRef<"s13_medicaments", 'DateTime'>;
    readonly nitro_heure_dose2: Prisma.FieldRef<"s13_medicaments", 'DateTime'>;
    readonly epinephrine_03_prise: Prisma.FieldRef<"s13_medicaments", 'String'>;
    readonly epinephrine_03_heure_dose1: Prisma.FieldRef<"s13_medicaments", 'DateTime'>;
    readonly epinephrine_03_heure_dose2: Prisma.FieldRef<"s13_medicaments", 'DateTime'>;
    readonly epinephrine_015_prise: Prisma.FieldRef<"s13_medicaments", 'String'>;
    readonly epinephrine_015_heure_dose1: Prisma.FieldRef<"s13_medicaments", 'DateTime'>;
    readonly epinephrine_015_heure_dose2: Prisma.FieldRef<"s13_medicaments", 'DateTime'>;
    readonly glucose_prise: Prisma.FieldRef<"s13_medicaments", 'String'>;
    readonly glucose_heure_dose1: Prisma.FieldRef<"s13_medicaments", 'DateTime'>;
    readonly glucose_heure_dose2: Prisma.FieldRef<"s13_medicaments", 'DateTime'>;
    readonly glucagon_prise: Prisma.FieldRef<"s13_medicaments", 'String'>;
    readonly glucagon_heure: Prisma.FieldRef<"s13_medicaments", 'DateTime'>;
    readonly naloxone_prise: Prisma.FieldRef<"s13_medicaments", 'String'>;
    readonly naloxone_heure_dose1: Prisma.FieldRef<"s13_medicaments", 'DateTime'>;
    readonly naloxone_heure_dose2: Prisma.FieldRef<"s13_medicaments", 'DateTime'>;
}
/**
 * s13_medicaments findUnique
 */
export type s13_medicamentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_medicaments
     */
    select?: Prisma.s13_medicamentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_medicaments
     */
    omit?: Prisma.s13_medicamentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_medicamentsInclude<ExtArgs> | null;
    /**
     * Filter, which s13_medicaments to fetch.
     */
    where: Prisma.s13_medicamentsWhereUniqueInput;
};
/**
 * s13_medicaments findUniqueOrThrow
 */
export type s13_medicamentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_medicaments
     */
    select?: Prisma.s13_medicamentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_medicaments
     */
    omit?: Prisma.s13_medicamentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_medicamentsInclude<ExtArgs> | null;
    /**
     * Filter, which s13_medicaments to fetch.
     */
    where: Prisma.s13_medicamentsWhereUniqueInput;
};
/**
 * s13_medicaments findFirst
 */
export type s13_medicamentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_medicaments
     */
    select?: Prisma.s13_medicamentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_medicaments
     */
    omit?: Prisma.s13_medicamentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_medicamentsInclude<ExtArgs> | null;
    /**
     * Filter, which s13_medicaments to fetch.
     */
    where?: Prisma.s13_medicamentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_medicaments to fetch.
     */
    orderBy?: Prisma.s13_medicamentsOrderByWithRelationInput | Prisma.s13_medicamentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s13_medicaments.
     */
    cursor?: Prisma.s13_medicamentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_medicaments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_medicaments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s13_medicaments.
     */
    distinct?: Prisma.S13_medicamentsScalarFieldEnum | Prisma.S13_medicamentsScalarFieldEnum[];
};
/**
 * s13_medicaments findFirstOrThrow
 */
export type s13_medicamentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_medicaments
     */
    select?: Prisma.s13_medicamentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_medicaments
     */
    omit?: Prisma.s13_medicamentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_medicamentsInclude<ExtArgs> | null;
    /**
     * Filter, which s13_medicaments to fetch.
     */
    where?: Prisma.s13_medicamentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_medicaments to fetch.
     */
    orderBy?: Prisma.s13_medicamentsOrderByWithRelationInput | Prisma.s13_medicamentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s13_medicaments.
     */
    cursor?: Prisma.s13_medicamentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_medicaments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_medicaments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s13_medicaments.
     */
    distinct?: Prisma.S13_medicamentsScalarFieldEnum | Prisma.S13_medicamentsScalarFieldEnum[];
};
/**
 * s13_medicaments findMany
 */
export type s13_medicamentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_medicaments
     */
    select?: Prisma.s13_medicamentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_medicaments
     */
    omit?: Prisma.s13_medicamentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_medicamentsInclude<ExtArgs> | null;
    /**
     * Filter, which s13_medicaments to fetch.
     */
    where?: Prisma.s13_medicamentsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_medicaments to fetch.
     */
    orderBy?: Prisma.s13_medicamentsOrderByWithRelationInput | Prisma.s13_medicamentsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s13_medicaments.
     */
    cursor?: Prisma.s13_medicamentsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_medicaments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_medicaments.
     */
    skip?: number;
    distinct?: Prisma.S13_medicamentsScalarFieldEnum | Prisma.S13_medicamentsScalarFieldEnum[];
};
/**
 * s13_medicaments create
 */
export type s13_medicamentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_medicaments
     */
    select?: Prisma.s13_medicamentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_medicaments
     */
    omit?: Prisma.s13_medicamentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_medicamentsInclude<ExtArgs> | null;
    /**
     * The data needed to create a s13_medicaments.
     */
    data: Prisma.XOR<Prisma.s13_medicamentsCreateInput, Prisma.s13_medicamentsUncheckedCreateInput>;
};
/**
 * s13_medicaments createMany
 */
export type s13_medicamentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s13_medicaments.
     */
    data: Prisma.s13_medicamentsCreateManyInput | Prisma.s13_medicamentsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s13_medicaments createManyAndReturn
 */
export type s13_medicamentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_medicaments
     */
    select?: Prisma.s13_medicamentsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_medicaments
     */
    omit?: Prisma.s13_medicamentsOmit<ExtArgs> | null;
    /**
     * The data used to create many s13_medicaments.
     */
    data: Prisma.s13_medicamentsCreateManyInput | Prisma.s13_medicamentsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_medicamentsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s13_medicaments update
 */
export type s13_medicamentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_medicaments
     */
    select?: Prisma.s13_medicamentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_medicaments
     */
    omit?: Prisma.s13_medicamentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_medicamentsInclude<ExtArgs> | null;
    /**
     * The data needed to update a s13_medicaments.
     */
    data: Prisma.XOR<Prisma.s13_medicamentsUpdateInput, Prisma.s13_medicamentsUncheckedUpdateInput>;
    /**
     * Choose, which s13_medicaments to update.
     */
    where: Prisma.s13_medicamentsWhereUniqueInput;
};
/**
 * s13_medicaments updateMany
 */
export type s13_medicamentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s13_medicaments.
     */
    data: Prisma.XOR<Prisma.s13_medicamentsUpdateManyMutationInput, Prisma.s13_medicamentsUncheckedUpdateManyInput>;
    /**
     * Filter which s13_medicaments to update
     */
    where?: Prisma.s13_medicamentsWhereInput;
    /**
     * Limit how many s13_medicaments to update.
     */
    limit?: number;
};
/**
 * s13_medicaments updateManyAndReturn
 */
export type s13_medicamentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_medicaments
     */
    select?: Prisma.s13_medicamentsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_medicaments
     */
    omit?: Prisma.s13_medicamentsOmit<ExtArgs> | null;
    /**
     * The data used to update s13_medicaments.
     */
    data: Prisma.XOR<Prisma.s13_medicamentsUpdateManyMutationInput, Prisma.s13_medicamentsUncheckedUpdateManyInput>;
    /**
     * Filter which s13_medicaments to update
     */
    where?: Prisma.s13_medicamentsWhereInput;
    /**
     * Limit how many s13_medicaments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_medicamentsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s13_medicaments upsert
 */
export type s13_medicamentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_medicaments
     */
    select?: Prisma.s13_medicamentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_medicaments
     */
    omit?: Prisma.s13_medicamentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_medicamentsInclude<ExtArgs> | null;
    /**
     * The filter to search for the s13_medicaments to update in case it exists.
     */
    where: Prisma.s13_medicamentsWhereUniqueInput;
    /**
     * In case the s13_medicaments found by the `where` argument doesn't exist, create a new s13_medicaments with this data.
     */
    create: Prisma.XOR<Prisma.s13_medicamentsCreateInput, Prisma.s13_medicamentsUncheckedCreateInput>;
    /**
     * In case the s13_medicaments was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s13_medicamentsUpdateInput, Prisma.s13_medicamentsUncheckedUpdateInput>;
};
/**
 * s13_medicaments delete
 */
export type s13_medicamentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_medicaments
     */
    select?: Prisma.s13_medicamentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_medicaments
     */
    omit?: Prisma.s13_medicamentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_medicamentsInclude<ExtArgs> | null;
    /**
     * Filter which s13_medicaments to delete.
     */
    where: Prisma.s13_medicamentsWhereUniqueInput;
};
/**
 * s13_medicaments deleteMany
 */
export type s13_medicamentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s13_medicaments to delete
     */
    where?: Prisma.s13_medicamentsWhereInput;
    /**
     * Limit how many s13_medicaments to delete.
     */
    limit?: number;
};
/**
 * s13_medicaments without action
 */
export type s13_medicamentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_medicaments
     */
    select?: Prisma.s13_medicamentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_medicaments
     */
    omit?: Prisma.s13_medicamentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_medicamentsInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s13_medicaments.d.ts.map