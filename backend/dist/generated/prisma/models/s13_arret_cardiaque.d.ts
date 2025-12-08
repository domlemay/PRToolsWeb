import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model s13_arret_cardiaque
 *
 */
export type s13_arret_cardiaqueModel = runtime.Types.Result.DefaultSelection<Prisma.$s13_arret_cardiaquePayload>;
export type AggregateS13_arret_cardiaque = {
    _count: S13_arret_cardiaqueCountAggregateOutputType | null;
    _avg: S13_arret_cardiaqueAvgAggregateOutputType | null;
    _sum: S13_arret_cardiaqueSumAggregateOutputType | null;
    _min: S13_arret_cardiaqueMinAggregateOutputType | null;
    _max: S13_arret_cardiaqueMaxAggregateOutputType | null;
};
export type S13_arret_cardiaqueAvgAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    dea_temoin_nb_chocs: number | null;
    dea_pr_nb_chocs: number | null;
};
export type S13_arret_cardiaqueSumAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    dea_temoin_nb_chocs: number | null;
    dea_pr_nb_chocs: number | null;
};
export type S13_arret_cardiaqueMinAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    temoin_effondrement: string | null;
    temoin_effondrement_type: string | null;
    temoin_effondrement_heure: Date | null;
    rcr_temoin: string | null;
    dea_temoin: string | null;
    dea_temoin_nb_chocs: number | null;
    rcr_pr_debut_heure: Date | null;
    dea_pr: string | null;
    dea_pr_nb_chocs: number | null;
    retour_pouls_avant_tap: string | null;
};
export type S13_arret_cardiaqueMaxAggregateOutputType = {
    id: number | null;
    rapport_id: number | null;
    temoin_effondrement: string | null;
    temoin_effondrement_type: string | null;
    temoin_effondrement_heure: Date | null;
    rcr_temoin: string | null;
    dea_temoin: string | null;
    dea_temoin_nb_chocs: number | null;
    rcr_pr_debut_heure: Date | null;
    dea_pr: string | null;
    dea_pr_nb_chocs: number | null;
    retour_pouls_avant_tap: string | null;
};
export type S13_arret_cardiaqueCountAggregateOutputType = {
    id: number;
    rapport_id: number;
    temoin_effondrement: number;
    temoin_effondrement_type: number;
    temoin_effondrement_heure: number;
    rcr_temoin: number;
    dea_temoin: number;
    dea_temoin_nb_chocs: number;
    rcr_pr_debut_heure: number;
    dea_pr: number;
    dea_pr_nb_chocs: number;
    retour_pouls_avant_tap: number;
    _all: number;
};
export type S13_arret_cardiaqueAvgAggregateInputType = {
    id?: true;
    rapport_id?: true;
    dea_temoin_nb_chocs?: true;
    dea_pr_nb_chocs?: true;
};
export type S13_arret_cardiaqueSumAggregateInputType = {
    id?: true;
    rapport_id?: true;
    dea_temoin_nb_chocs?: true;
    dea_pr_nb_chocs?: true;
};
export type S13_arret_cardiaqueMinAggregateInputType = {
    id?: true;
    rapport_id?: true;
    temoin_effondrement?: true;
    temoin_effondrement_type?: true;
    temoin_effondrement_heure?: true;
    rcr_temoin?: true;
    dea_temoin?: true;
    dea_temoin_nb_chocs?: true;
    rcr_pr_debut_heure?: true;
    dea_pr?: true;
    dea_pr_nb_chocs?: true;
    retour_pouls_avant_tap?: true;
};
export type S13_arret_cardiaqueMaxAggregateInputType = {
    id?: true;
    rapport_id?: true;
    temoin_effondrement?: true;
    temoin_effondrement_type?: true;
    temoin_effondrement_heure?: true;
    rcr_temoin?: true;
    dea_temoin?: true;
    dea_temoin_nb_chocs?: true;
    rcr_pr_debut_heure?: true;
    dea_pr?: true;
    dea_pr_nb_chocs?: true;
    retour_pouls_avant_tap?: true;
};
export type S13_arret_cardiaqueCountAggregateInputType = {
    id?: true;
    rapport_id?: true;
    temoin_effondrement?: true;
    temoin_effondrement_type?: true;
    temoin_effondrement_heure?: true;
    rcr_temoin?: true;
    dea_temoin?: true;
    dea_temoin_nb_chocs?: true;
    rcr_pr_debut_heure?: true;
    dea_pr?: true;
    dea_pr_nb_chocs?: true;
    retour_pouls_avant_tap?: true;
    _all?: true;
};
export type S13_arret_cardiaqueAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s13_arret_cardiaque to aggregate.
     */
    where?: Prisma.s13_arret_cardiaqueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_arret_cardiaques to fetch.
     */
    orderBy?: Prisma.s13_arret_cardiaqueOrderByWithRelationInput | Prisma.s13_arret_cardiaqueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.s13_arret_cardiaqueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_arret_cardiaques from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_arret_cardiaques.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned s13_arret_cardiaques
    **/
    _count?: true | S13_arret_cardiaqueCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: S13_arret_cardiaqueAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: S13_arret_cardiaqueSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: S13_arret_cardiaqueMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: S13_arret_cardiaqueMaxAggregateInputType;
};
export type GetS13_arret_cardiaqueAggregateType<T extends S13_arret_cardiaqueAggregateArgs> = {
    [P in keyof T & keyof AggregateS13_arret_cardiaque]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateS13_arret_cardiaque[P]> : Prisma.GetScalarType<T[P], AggregateS13_arret_cardiaque[P]>;
};
export type s13_arret_cardiaqueGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s13_arret_cardiaqueWhereInput;
    orderBy?: Prisma.s13_arret_cardiaqueOrderByWithAggregationInput | Prisma.s13_arret_cardiaqueOrderByWithAggregationInput[];
    by: Prisma.S13_arret_cardiaqueScalarFieldEnum[] | Prisma.S13_arret_cardiaqueScalarFieldEnum;
    having?: Prisma.s13_arret_cardiaqueScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: S13_arret_cardiaqueCountAggregateInputType | true;
    _avg?: S13_arret_cardiaqueAvgAggregateInputType;
    _sum?: S13_arret_cardiaqueSumAggregateInputType;
    _min?: S13_arret_cardiaqueMinAggregateInputType;
    _max?: S13_arret_cardiaqueMaxAggregateInputType;
};
export type S13_arret_cardiaqueGroupByOutputType = {
    id: number;
    rapport_id: number;
    temoin_effondrement: string | null;
    temoin_effondrement_type: string | null;
    temoin_effondrement_heure: Date | null;
    rcr_temoin: string | null;
    dea_temoin: string | null;
    dea_temoin_nb_chocs: number | null;
    rcr_pr_debut_heure: Date | null;
    dea_pr: string | null;
    dea_pr_nb_chocs: number | null;
    retour_pouls_avant_tap: string | null;
    _count: S13_arret_cardiaqueCountAggregateOutputType | null;
    _avg: S13_arret_cardiaqueAvgAggregateOutputType | null;
    _sum: S13_arret_cardiaqueSumAggregateOutputType | null;
    _min: S13_arret_cardiaqueMinAggregateOutputType | null;
    _max: S13_arret_cardiaqueMaxAggregateOutputType | null;
};
type GetS13_arret_cardiaqueGroupByPayload<T extends s13_arret_cardiaqueGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<S13_arret_cardiaqueGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof S13_arret_cardiaqueGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], S13_arret_cardiaqueGroupByOutputType[P]> : Prisma.GetScalarType<T[P], S13_arret_cardiaqueGroupByOutputType[P]>;
}>>;
export type s13_arret_cardiaqueWhereInput = {
    AND?: Prisma.s13_arret_cardiaqueWhereInput | Prisma.s13_arret_cardiaqueWhereInput[];
    OR?: Prisma.s13_arret_cardiaqueWhereInput[];
    NOT?: Prisma.s13_arret_cardiaqueWhereInput | Prisma.s13_arret_cardiaqueWhereInput[];
    id?: Prisma.IntFilter<"s13_arret_cardiaque"> | number;
    rapport_id?: Prisma.IntFilter<"s13_arret_cardiaque"> | number;
    temoin_effondrement?: Prisma.StringNullableFilter<"s13_arret_cardiaque"> | string | null;
    temoin_effondrement_type?: Prisma.StringNullableFilter<"s13_arret_cardiaque"> | string | null;
    temoin_effondrement_heure?: Prisma.DateTimeNullableFilter<"s13_arret_cardiaque"> | Date | string | null;
    rcr_temoin?: Prisma.StringNullableFilter<"s13_arret_cardiaque"> | string | null;
    dea_temoin?: Prisma.StringNullableFilter<"s13_arret_cardiaque"> | string | null;
    dea_temoin_nb_chocs?: Prisma.IntNullableFilter<"s13_arret_cardiaque"> | number | null;
    rcr_pr_debut_heure?: Prisma.DateTimeNullableFilter<"s13_arret_cardiaque"> | Date | string | null;
    dea_pr?: Prisma.StringNullableFilter<"s13_arret_cardiaque"> | string | null;
    dea_pr_nb_chocs?: Prisma.IntNullableFilter<"s13_arret_cardiaque"> | number | null;
    retour_pouls_avant_tap?: Prisma.StringNullableFilter<"s13_arret_cardiaque"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
};
export type s13_arret_cardiaqueOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    temoin_effondrement?: Prisma.SortOrderInput | Prisma.SortOrder;
    temoin_effondrement_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    temoin_effondrement_heure?: Prisma.SortOrderInput | Prisma.SortOrder;
    rcr_temoin?: Prisma.SortOrderInput | Prisma.SortOrder;
    dea_temoin?: Prisma.SortOrderInput | Prisma.SortOrder;
    dea_temoin_nb_chocs?: Prisma.SortOrderInput | Prisma.SortOrder;
    rcr_pr_debut_heure?: Prisma.SortOrderInput | Prisma.SortOrder;
    dea_pr?: Prisma.SortOrderInput | Prisma.SortOrder;
    dea_pr_nb_chocs?: Prisma.SortOrderInput | Prisma.SortOrder;
    retour_pouls_avant_tap?: Prisma.SortOrderInput | Prisma.SortOrder;
    rapport?: Prisma.r_rapport_prOrderByWithRelationInput;
};
export type s13_arret_cardiaqueWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    rapport_id?: number;
    AND?: Prisma.s13_arret_cardiaqueWhereInput | Prisma.s13_arret_cardiaqueWhereInput[];
    OR?: Prisma.s13_arret_cardiaqueWhereInput[];
    NOT?: Prisma.s13_arret_cardiaqueWhereInput | Prisma.s13_arret_cardiaqueWhereInput[];
    temoin_effondrement?: Prisma.StringNullableFilter<"s13_arret_cardiaque"> | string | null;
    temoin_effondrement_type?: Prisma.StringNullableFilter<"s13_arret_cardiaque"> | string | null;
    temoin_effondrement_heure?: Prisma.DateTimeNullableFilter<"s13_arret_cardiaque"> | Date | string | null;
    rcr_temoin?: Prisma.StringNullableFilter<"s13_arret_cardiaque"> | string | null;
    dea_temoin?: Prisma.StringNullableFilter<"s13_arret_cardiaque"> | string | null;
    dea_temoin_nb_chocs?: Prisma.IntNullableFilter<"s13_arret_cardiaque"> | number | null;
    rcr_pr_debut_heure?: Prisma.DateTimeNullableFilter<"s13_arret_cardiaque"> | Date | string | null;
    dea_pr?: Prisma.StringNullableFilter<"s13_arret_cardiaque"> | string | null;
    dea_pr_nb_chocs?: Prisma.IntNullableFilter<"s13_arret_cardiaque"> | number | null;
    retour_pouls_avant_tap?: Prisma.StringNullableFilter<"s13_arret_cardiaque"> | string | null;
    rapport?: Prisma.XOR<Prisma.R_rapport_prScalarRelationFilter, Prisma.r_rapport_prWhereInput>;
}, "id" | "rapport_id">;
export type s13_arret_cardiaqueOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    temoin_effondrement?: Prisma.SortOrderInput | Prisma.SortOrder;
    temoin_effondrement_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    temoin_effondrement_heure?: Prisma.SortOrderInput | Prisma.SortOrder;
    rcr_temoin?: Prisma.SortOrderInput | Prisma.SortOrder;
    dea_temoin?: Prisma.SortOrderInput | Prisma.SortOrder;
    dea_temoin_nb_chocs?: Prisma.SortOrderInput | Prisma.SortOrder;
    rcr_pr_debut_heure?: Prisma.SortOrderInput | Prisma.SortOrder;
    dea_pr?: Prisma.SortOrderInput | Prisma.SortOrder;
    dea_pr_nb_chocs?: Prisma.SortOrderInput | Prisma.SortOrder;
    retour_pouls_avant_tap?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.s13_arret_cardiaqueCountOrderByAggregateInput;
    _avg?: Prisma.s13_arret_cardiaqueAvgOrderByAggregateInput;
    _max?: Prisma.s13_arret_cardiaqueMaxOrderByAggregateInput;
    _min?: Prisma.s13_arret_cardiaqueMinOrderByAggregateInput;
    _sum?: Prisma.s13_arret_cardiaqueSumOrderByAggregateInput;
};
export type s13_arret_cardiaqueScalarWhereWithAggregatesInput = {
    AND?: Prisma.s13_arret_cardiaqueScalarWhereWithAggregatesInput | Prisma.s13_arret_cardiaqueScalarWhereWithAggregatesInput[];
    OR?: Prisma.s13_arret_cardiaqueScalarWhereWithAggregatesInput[];
    NOT?: Prisma.s13_arret_cardiaqueScalarWhereWithAggregatesInput | Prisma.s13_arret_cardiaqueScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"s13_arret_cardiaque"> | number;
    rapport_id?: Prisma.IntWithAggregatesFilter<"s13_arret_cardiaque"> | number;
    temoin_effondrement?: Prisma.StringNullableWithAggregatesFilter<"s13_arret_cardiaque"> | string | null;
    temoin_effondrement_type?: Prisma.StringNullableWithAggregatesFilter<"s13_arret_cardiaque"> | string | null;
    temoin_effondrement_heure?: Prisma.DateTimeNullableWithAggregatesFilter<"s13_arret_cardiaque"> | Date | string | null;
    rcr_temoin?: Prisma.StringNullableWithAggregatesFilter<"s13_arret_cardiaque"> | string | null;
    dea_temoin?: Prisma.StringNullableWithAggregatesFilter<"s13_arret_cardiaque"> | string | null;
    dea_temoin_nb_chocs?: Prisma.IntNullableWithAggregatesFilter<"s13_arret_cardiaque"> | number | null;
    rcr_pr_debut_heure?: Prisma.DateTimeNullableWithAggregatesFilter<"s13_arret_cardiaque"> | Date | string | null;
    dea_pr?: Prisma.StringNullableWithAggregatesFilter<"s13_arret_cardiaque"> | string | null;
    dea_pr_nb_chocs?: Prisma.IntNullableWithAggregatesFilter<"s13_arret_cardiaque"> | number | null;
    retour_pouls_avant_tap?: Prisma.StringNullableWithAggregatesFilter<"s13_arret_cardiaque"> | string | null;
};
export type s13_arret_cardiaqueCreateInput = {
    temoin_effondrement?: string | null;
    temoin_effondrement_type?: string | null;
    temoin_effondrement_heure?: Date | string | null;
    rcr_temoin?: string | null;
    dea_temoin?: string | null;
    dea_temoin_nb_chocs?: number | null;
    rcr_pr_debut_heure?: Date | string | null;
    dea_pr?: string | null;
    dea_pr_nb_chocs?: number | null;
    retour_pouls_avant_tap?: string | null;
    rapport: Prisma.r_rapport_prCreateNestedOneWithoutS13_arret_cardiaqueInput;
};
export type s13_arret_cardiaqueUncheckedCreateInput = {
    id?: number;
    rapport_id: number;
    temoin_effondrement?: string | null;
    temoin_effondrement_type?: string | null;
    temoin_effondrement_heure?: Date | string | null;
    rcr_temoin?: string | null;
    dea_temoin?: string | null;
    dea_temoin_nb_chocs?: number | null;
    rcr_pr_debut_heure?: Date | string | null;
    dea_pr?: string | null;
    dea_pr_nb_chocs?: number | null;
    retour_pouls_avant_tap?: string | null;
};
export type s13_arret_cardiaqueUpdateInput = {
    temoin_effondrement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temoin_effondrement_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temoin_effondrement_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rcr_temoin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dea_temoin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dea_temoin_nb_chocs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rcr_pr_debut_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dea_pr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dea_pr_nb_chocs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    retour_pouls_avant_tap?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rapport?: Prisma.r_rapport_prUpdateOneRequiredWithoutS13_arret_cardiaqueNestedInput;
};
export type s13_arret_cardiaqueUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    temoin_effondrement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temoin_effondrement_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temoin_effondrement_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rcr_temoin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dea_temoin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dea_temoin_nb_chocs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rcr_pr_debut_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dea_pr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dea_pr_nb_chocs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    retour_pouls_avant_tap?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_arret_cardiaqueCreateManyInput = {
    id?: number;
    rapport_id: number;
    temoin_effondrement?: string | null;
    temoin_effondrement_type?: string | null;
    temoin_effondrement_heure?: Date | string | null;
    rcr_temoin?: string | null;
    dea_temoin?: string | null;
    dea_temoin_nb_chocs?: number | null;
    rcr_pr_debut_heure?: Date | string | null;
    dea_pr?: string | null;
    dea_pr_nb_chocs?: number | null;
    retour_pouls_avant_tap?: string | null;
};
export type s13_arret_cardiaqueUpdateManyMutationInput = {
    temoin_effondrement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temoin_effondrement_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temoin_effondrement_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rcr_temoin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dea_temoin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dea_temoin_nb_chocs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rcr_pr_debut_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dea_pr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dea_pr_nb_chocs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    retour_pouls_avant_tap?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_arret_cardiaqueUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rapport_id?: Prisma.IntFieldUpdateOperationsInput | number;
    temoin_effondrement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temoin_effondrement_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temoin_effondrement_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rcr_temoin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dea_temoin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dea_temoin_nb_chocs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rcr_pr_debut_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dea_pr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dea_pr_nb_chocs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    retour_pouls_avant_tap?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type S13_arret_cardiaqueNullableScalarRelationFilter = {
    is?: Prisma.s13_arret_cardiaqueWhereInput | null;
    isNot?: Prisma.s13_arret_cardiaqueWhereInput | null;
};
export type s13_arret_cardiaqueCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    temoin_effondrement?: Prisma.SortOrder;
    temoin_effondrement_type?: Prisma.SortOrder;
    temoin_effondrement_heure?: Prisma.SortOrder;
    rcr_temoin?: Prisma.SortOrder;
    dea_temoin?: Prisma.SortOrder;
    dea_temoin_nb_chocs?: Prisma.SortOrder;
    rcr_pr_debut_heure?: Prisma.SortOrder;
    dea_pr?: Prisma.SortOrder;
    dea_pr_nb_chocs?: Prisma.SortOrder;
    retour_pouls_avant_tap?: Prisma.SortOrder;
};
export type s13_arret_cardiaqueAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    dea_temoin_nb_chocs?: Prisma.SortOrder;
    dea_pr_nb_chocs?: Prisma.SortOrder;
};
export type s13_arret_cardiaqueMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    temoin_effondrement?: Prisma.SortOrder;
    temoin_effondrement_type?: Prisma.SortOrder;
    temoin_effondrement_heure?: Prisma.SortOrder;
    rcr_temoin?: Prisma.SortOrder;
    dea_temoin?: Prisma.SortOrder;
    dea_temoin_nb_chocs?: Prisma.SortOrder;
    rcr_pr_debut_heure?: Prisma.SortOrder;
    dea_pr?: Prisma.SortOrder;
    dea_pr_nb_chocs?: Prisma.SortOrder;
    retour_pouls_avant_tap?: Prisma.SortOrder;
};
export type s13_arret_cardiaqueMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    temoin_effondrement?: Prisma.SortOrder;
    temoin_effondrement_type?: Prisma.SortOrder;
    temoin_effondrement_heure?: Prisma.SortOrder;
    rcr_temoin?: Prisma.SortOrder;
    dea_temoin?: Prisma.SortOrder;
    dea_temoin_nb_chocs?: Prisma.SortOrder;
    rcr_pr_debut_heure?: Prisma.SortOrder;
    dea_pr?: Prisma.SortOrder;
    dea_pr_nb_chocs?: Prisma.SortOrder;
    retour_pouls_avant_tap?: Prisma.SortOrder;
};
export type s13_arret_cardiaqueSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rapport_id?: Prisma.SortOrder;
    dea_temoin_nb_chocs?: Prisma.SortOrder;
    dea_pr_nb_chocs?: Prisma.SortOrder;
};
export type s13_arret_cardiaqueCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s13_arret_cardiaqueCreateWithoutRapportInput, Prisma.s13_arret_cardiaqueUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_arret_cardiaqueCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s13_arret_cardiaqueWhereUniqueInput;
};
export type s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput = {
    create?: Prisma.XOR<Prisma.s13_arret_cardiaqueCreateWithoutRapportInput, Prisma.s13_arret_cardiaqueUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_arret_cardiaqueCreateOrConnectWithoutRapportInput;
    connect?: Prisma.s13_arret_cardiaqueWhereUniqueInput;
};
export type s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s13_arret_cardiaqueCreateWithoutRapportInput, Prisma.s13_arret_cardiaqueUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_arret_cardiaqueCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s13_arret_cardiaqueUpsertWithoutRapportInput;
    disconnect?: Prisma.s13_arret_cardiaqueWhereInput | boolean;
    delete?: Prisma.s13_arret_cardiaqueWhereInput | boolean;
    connect?: Prisma.s13_arret_cardiaqueWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s13_arret_cardiaqueUpdateToOneWithWhereWithoutRapportInput, Prisma.s13_arret_cardiaqueUpdateWithoutRapportInput>, Prisma.s13_arret_cardiaqueUncheckedUpdateWithoutRapportInput>;
};
export type s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput = {
    create?: Prisma.XOR<Prisma.s13_arret_cardiaqueCreateWithoutRapportInput, Prisma.s13_arret_cardiaqueUncheckedCreateWithoutRapportInput>;
    connectOrCreate?: Prisma.s13_arret_cardiaqueCreateOrConnectWithoutRapportInput;
    upsert?: Prisma.s13_arret_cardiaqueUpsertWithoutRapportInput;
    disconnect?: Prisma.s13_arret_cardiaqueWhereInput | boolean;
    delete?: Prisma.s13_arret_cardiaqueWhereInput | boolean;
    connect?: Prisma.s13_arret_cardiaqueWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.s13_arret_cardiaqueUpdateToOneWithWhereWithoutRapportInput, Prisma.s13_arret_cardiaqueUpdateWithoutRapportInput>, Prisma.s13_arret_cardiaqueUncheckedUpdateWithoutRapportInput>;
};
export type s13_arret_cardiaqueCreateWithoutRapportInput = {
    temoin_effondrement?: string | null;
    temoin_effondrement_type?: string | null;
    temoin_effondrement_heure?: Date | string | null;
    rcr_temoin?: string | null;
    dea_temoin?: string | null;
    dea_temoin_nb_chocs?: number | null;
    rcr_pr_debut_heure?: Date | string | null;
    dea_pr?: string | null;
    dea_pr_nb_chocs?: number | null;
    retour_pouls_avant_tap?: string | null;
};
export type s13_arret_cardiaqueUncheckedCreateWithoutRapportInput = {
    id?: number;
    temoin_effondrement?: string | null;
    temoin_effondrement_type?: string | null;
    temoin_effondrement_heure?: Date | string | null;
    rcr_temoin?: string | null;
    dea_temoin?: string | null;
    dea_temoin_nb_chocs?: number | null;
    rcr_pr_debut_heure?: Date | string | null;
    dea_pr?: string | null;
    dea_pr_nb_chocs?: number | null;
    retour_pouls_avant_tap?: string | null;
};
export type s13_arret_cardiaqueCreateOrConnectWithoutRapportInput = {
    where: Prisma.s13_arret_cardiaqueWhereUniqueInput;
    create: Prisma.XOR<Prisma.s13_arret_cardiaqueCreateWithoutRapportInput, Prisma.s13_arret_cardiaqueUncheckedCreateWithoutRapportInput>;
};
export type s13_arret_cardiaqueUpsertWithoutRapportInput = {
    update: Prisma.XOR<Prisma.s13_arret_cardiaqueUpdateWithoutRapportInput, Prisma.s13_arret_cardiaqueUncheckedUpdateWithoutRapportInput>;
    create: Prisma.XOR<Prisma.s13_arret_cardiaqueCreateWithoutRapportInput, Prisma.s13_arret_cardiaqueUncheckedCreateWithoutRapportInput>;
    where?: Prisma.s13_arret_cardiaqueWhereInput;
};
export type s13_arret_cardiaqueUpdateToOneWithWhereWithoutRapportInput = {
    where?: Prisma.s13_arret_cardiaqueWhereInput;
    data: Prisma.XOR<Prisma.s13_arret_cardiaqueUpdateWithoutRapportInput, Prisma.s13_arret_cardiaqueUncheckedUpdateWithoutRapportInput>;
};
export type s13_arret_cardiaqueUpdateWithoutRapportInput = {
    temoin_effondrement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temoin_effondrement_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temoin_effondrement_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rcr_temoin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dea_temoin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dea_temoin_nb_chocs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rcr_pr_debut_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dea_pr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dea_pr_nb_chocs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    retour_pouls_avant_tap?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_arret_cardiaqueUncheckedUpdateWithoutRapportInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    temoin_effondrement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temoin_effondrement_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    temoin_effondrement_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rcr_temoin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dea_temoin?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dea_temoin_nb_chocs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rcr_pr_debut_heure?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dea_pr?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    dea_pr_nb_chocs?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    retour_pouls_avant_tap?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type s13_arret_cardiaqueSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    temoin_effondrement?: boolean;
    temoin_effondrement_type?: boolean;
    temoin_effondrement_heure?: boolean;
    rcr_temoin?: boolean;
    dea_temoin?: boolean;
    dea_temoin_nb_chocs?: boolean;
    rcr_pr_debut_heure?: boolean;
    dea_pr?: boolean;
    dea_pr_nb_chocs?: boolean;
    retour_pouls_avant_tap?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_arret_cardiaque"]>;
export type s13_arret_cardiaqueSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    temoin_effondrement?: boolean;
    temoin_effondrement_type?: boolean;
    temoin_effondrement_heure?: boolean;
    rcr_temoin?: boolean;
    dea_temoin?: boolean;
    dea_temoin_nb_chocs?: boolean;
    rcr_pr_debut_heure?: boolean;
    dea_pr?: boolean;
    dea_pr_nb_chocs?: boolean;
    retour_pouls_avant_tap?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_arret_cardiaque"]>;
export type s13_arret_cardiaqueSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    rapport_id?: boolean;
    temoin_effondrement?: boolean;
    temoin_effondrement_type?: boolean;
    temoin_effondrement_heure?: boolean;
    rcr_temoin?: boolean;
    dea_temoin?: boolean;
    dea_temoin_nb_chocs?: boolean;
    rcr_pr_debut_heure?: boolean;
    dea_pr?: boolean;
    dea_pr_nb_chocs?: boolean;
    retour_pouls_avant_tap?: boolean;
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["s13_arret_cardiaque"]>;
export type s13_arret_cardiaqueSelectScalar = {
    id?: boolean;
    rapport_id?: boolean;
    temoin_effondrement?: boolean;
    temoin_effondrement_type?: boolean;
    temoin_effondrement_heure?: boolean;
    rcr_temoin?: boolean;
    dea_temoin?: boolean;
    dea_temoin_nb_chocs?: boolean;
    rcr_pr_debut_heure?: boolean;
    dea_pr?: boolean;
    dea_pr_nb_chocs?: boolean;
    retour_pouls_avant_tap?: boolean;
};
export type s13_arret_cardiaqueOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "rapport_id" | "temoin_effondrement" | "temoin_effondrement_type" | "temoin_effondrement_heure" | "rcr_temoin" | "dea_temoin" | "dea_temoin_nb_chocs" | "rcr_pr_debut_heure" | "dea_pr" | "dea_pr_nb_chocs" | "retour_pouls_avant_tap", ExtArgs["result"]["s13_arret_cardiaque"]>;
export type s13_arret_cardiaqueInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s13_arret_cardiaqueIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type s13_arret_cardiaqueIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rapport?: boolean | Prisma.r_rapport_prDefaultArgs<ExtArgs>;
};
export type $s13_arret_cardiaquePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "s13_arret_cardiaque";
    objects: {
        rapport: Prisma.$r_rapport_prPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        rapport_id: number;
        temoin_effondrement: string | null;
        temoin_effondrement_type: string | null;
        temoin_effondrement_heure: Date | null;
        rcr_temoin: string | null;
        dea_temoin: string | null;
        dea_temoin_nb_chocs: number | null;
        rcr_pr_debut_heure: Date | null;
        dea_pr: string | null;
        dea_pr_nb_chocs: number | null;
        retour_pouls_avant_tap: string | null;
    }, ExtArgs["result"]["s13_arret_cardiaque"]>;
    composites: {};
};
export type s13_arret_cardiaqueGetPayload<S extends boolean | null | undefined | s13_arret_cardiaqueDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$s13_arret_cardiaquePayload, S>;
export type s13_arret_cardiaqueCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<s13_arret_cardiaqueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: S13_arret_cardiaqueCountAggregateInputType | true;
};
export interface s13_arret_cardiaqueDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['s13_arret_cardiaque'];
        meta: {
            name: 's13_arret_cardiaque';
        };
    };
    /**
     * Find zero or one S13_arret_cardiaque that matches the filter.
     * @param {s13_arret_cardiaqueFindUniqueArgs} args - Arguments to find a S13_arret_cardiaque
     * @example
     * // Get one S13_arret_cardiaque
     * const s13_arret_cardiaque = await prisma.s13_arret_cardiaque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends s13_arret_cardiaqueFindUniqueArgs>(args: Prisma.SelectSubset<T, s13_arret_cardiaqueFindUniqueArgs<ExtArgs>>): Prisma.Prisma__s13_arret_cardiaqueClient<runtime.Types.Result.GetResult<Prisma.$s13_arret_cardiaquePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one S13_arret_cardiaque that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {s13_arret_cardiaqueFindUniqueOrThrowArgs} args - Arguments to find a S13_arret_cardiaque
     * @example
     * // Get one S13_arret_cardiaque
     * const s13_arret_cardiaque = await prisma.s13_arret_cardiaque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends s13_arret_cardiaqueFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, s13_arret_cardiaqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__s13_arret_cardiaqueClient<runtime.Types.Result.GetResult<Prisma.$s13_arret_cardiaquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S13_arret_cardiaque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_arret_cardiaqueFindFirstArgs} args - Arguments to find a S13_arret_cardiaque
     * @example
     * // Get one S13_arret_cardiaque
     * const s13_arret_cardiaque = await prisma.s13_arret_cardiaque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends s13_arret_cardiaqueFindFirstArgs>(args?: Prisma.SelectSubset<T, s13_arret_cardiaqueFindFirstArgs<ExtArgs>>): Prisma.Prisma__s13_arret_cardiaqueClient<runtime.Types.Result.GetResult<Prisma.$s13_arret_cardiaquePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first S13_arret_cardiaque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_arret_cardiaqueFindFirstOrThrowArgs} args - Arguments to find a S13_arret_cardiaque
     * @example
     * // Get one S13_arret_cardiaque
     * const s13_arret_cardiaque = await prisma.s13_arret_cardiaque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends s13_arret_cardiaqueFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, s13_arret_cardiaqueFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__s13_arret_cardiaqueClient<runtime.Types.Result.GetResult<Prisma.$s13_arret_cardiaquePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more S13_arret_cardiaques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_arret_cardiaqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all S13_arret_cardiaques
     * const s13_arret_cardiaques = await prisma.s13_arret_cardiaque.findMany()
     *
     * // Get first 10 S13_arret_cardiaques
     * const s13_arret_cardiaques = await prisma.s13_arret_cardiaque.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const s13_arret_cardiaqueWithIdOnly = await prisma.s13_arret_cardiaque.findMany({ select: { id: true } })
     *
     */
    findMany<T extends s13_arret_cardiaqueFindManyArgs>(args?: Prisma.SelectSubset<T, s13_arret_cardiaqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_arret_cardiaquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a S13_arret_cardiaque.
     * @param {s13_arret_cardiaqueCreateArgs} args - Arguments to create a S13_arret_cardiaque.
     * @example
     * // Create one S13_arret_cardiaque
     * const S13_arret_cardiaque = await prisma.s13_arret_cardiaque.create({
     *   data: {
     *     // ... data to create a S13_arret_cardiaque
     *   }
     * })
     *
     */
    create<T extends s13_arret_cardiaqueCreateArgs>(args: Prisma.SelectSubset<T, s13_arret_cardiaqueCreateArgs<ExtArgs>>): Prisma.Prisma__s13_arret_cardiaqueClient<runtime.Types.Result.GetResult<Prisma.$s13_arret_cardiaquePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many S13_arret_cardiaques.
     * @param {s13_arret_cardiaqueCreateManyArgs} args - Arguments to create many S13_arret_cardiaques.
     * @example
     * // Create many S13_arret_cardiaques
     * const s13_arret_cardiaque = await prisma.s13_arret_cardiaque.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends s13_arret_cardiaqueCreateManyArgs>(args?: Prisma.SelectSubset<T, s13_arret_cardiaqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many S13_arret_cardiaques and returns the data saved in the database.
     * @param {s13_arret_cardiaqueCreateManyAndReturnArgs} args - Arguments to create many S13_arret_cardiaques.
     * @example
     * // Create many S13_arret_cardiaques
     * const s13_arret_cardiaque = await prisma.s13_arret_cardiaque.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many S13_arret_cardiaques and only return the `id`
     * const s13_arret_cardiaqueWithIdOnly = await prisma.s13_arret_cardiaque.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends s13_arret_cardiaqueCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, s13_arret_cardiaqueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_arret_cardiaquePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a S13_arret_cardiaque.
     * @param {s13_arret_cardiaqueDeleteArgs} args - Arguments to delete one S13_arret_cardiaque.
     * @example
     * // Delete one S13_arret_cardiaque
     * const S13_arret_cardiaque = await prisma.s13_arret_cardiaque.delete({
     *   where: {
     *     // ... filter to delete one S13_arret_cardiaque
     *   }
     * })
     *
     */
    delete<T extends s13_arret_cardiaqueDeleteArgs>(args: Prisma.SelectSubset<T, s13_arret_cardiaqueDeleteArgs<ExtArgs>>): Prisma.Prisma__s13_arret_cardiaqueClient<runtime.Types.Result.GetResult<Prisma.$s13_arret_cardiaquePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one S13_arret_cardiaque.
     * @param {s13_arret_cardiaqueUpdateArgs} args - Arguments to update one S13_arret_cardiaque.
     * @example
     * // Update one S13_arret_cardiaque
     * const s13_arret_cardiaque = await prisma.s13_arret_cardiaque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends s13_arret_cardiaqueUpdateArgs>(args: Prisma.SelectSubset<T, s13_arret_cardiaqueUpdateArgs<ExtArgs>>): Prisma.Prisma__s13_arret_cardiaqueClient<runtime.Types.Result.GetResult<Prisma.$s13_arret_cardiaquePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more S13_arret_cardiaques.
     * @param {s13_arret_cardiaqueDeleteManyArgs} args - Arguments to filter S13_arret_cardiaques to delete.
     * @example
     * // Delete a few S13_arret_cardiaques
     * const { count } = await prisma.s13_arret_cardiaque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends s13_arret_cardiaqueDeleteManyArgs>(args?: Prisma.SelectSubset<T, s13_arret_cardiaqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S13_arret_cardiaques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_arret_cardiaqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many S13_arret_cardiaques
     * const s13_arret_cardiaque = await prisma.s13_arret_cardiaque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends s13_arret_cardiaqueUpdateManyArgs>(args: Prisma.SelectSubset<T, s13_arret_cardiaqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more S13_arret_cardiaques and returns the data updated in the database.
     * @param {s13_arret_cardiaqueUpdateManyAndReturnArgs} args - Arguments to update many S13_arret_cardiaques.
     * @example
     * // Update many S13_arret_cardiaques
     * const s13_arret_cardiaque = await prisma.s13_arret_cardiaque.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more S13_arret_cardiaques and only return the `id`
     * const s13_arret_cardiaqueWithIdOnly = await prisma.s13_arret_cardiaque.updateManyAndReturn({
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
    updateManyAndReturn<T extends s13_arret_cardiaqueUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, s13_arret_cardiaqueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s13_arret_cardiaquePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one S13_arret_cardiaque.
     * @param {s13_arret_cardiaqueUpsertArgs} args - Arguments to update or create a S13_arret_cardiaque.
     * @example
     * // Update or create a S13_arret_cardiaque
     * const s13_arret_cardiaque = await prisma.s13_arret_cardiaque.upsert({
     *   create: {
     *     // ... data to create a S13_arret_cardiaque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the S13_arret_cardiaque we want to update
     *   }
     * })
     */
    upsert<T extends s13_arret_cardiaqueUpsertArgs>(args: Prisma.SelectSubset<T, s13_arret_cardiaqueUpsertArgs<ExtArgs>>): Prisma.Prisma__s13_arret_cardiaqueClient<runtime.Types.Result.GetResult<Prisma.$s13_arret_cardiaquePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of S13_arret_cardiaques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_arret_cardiaqueCountArgs} args - Arguments to filter S13_arret_cardiaques to count.
     * @example
     * // Count the number of S13_arret_cardiaques
     * const count = await prisma.s13_arret_cardiaque.count({
     *   where: {
     *     // ... the filter for the S13_arret_cardiaques we want to count
     *   }
     * })
    **/
    count<T extends s13_arret_cardiaqueCountArgs>(args?: Prisma.Subset<T, s13_arret_cardiaqueCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], S13_arret_cardiaqueCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a S13_arret_cardiaque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {S13_arret_cardiaqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends S13_arret_cardiaqueAggregateArgs>(args: Prisma.Subset<T, S13_arret_cardiaqueAggregateArgs>): Prisma.PrismaPromise<GetS13_arret_cardiaqueAggregateType<T>>;
    /**
     * Group by S13_arret_cardiaque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {s13_arret_cardiaqueGroupByArgs} args - Group by arguments.
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
    groupBy<T extends s13_arret_cardiaqueGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: s13_arret_cardiaqueGroupByArgs['orderBy'];
    } : {
        orderBy?: s13_arret_cardiaqueGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, s13_arret_cardiaqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetS13_arret_cardiaqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the s13_arret_cardiaque model
     */
    readonly fields: s13_arret_cardiaqueFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for s13_arret_cardiaque.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__s13_arret_cardiaqueClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the s13_arret_cardiaque model
 */
export interface s13_arret_cardiaqueFieldRefs {
    readonly id: Prisma.FieldRef<"s13_arret_cardiaque", 'Int'>;
    readonly rapport_id: Prisma.FieldRef<"s13_arret_cardiaque", 'Int'>;
    readonly temoin_effondrement: Prisma.FieldRef<"s13_arret_cardiaque", 'String'>;
    readonly temoin_effondrement_type: Prisma.FieldRef<"s13_arret_cardiaque", 'String'>;
    readonly temoin_effondrement_heure: Prisma.FieldRef<"s13_arret_cardiaque", 'DateTime'>;
    readonly rcr_temoin: Prisma.FieldRef<"s13_arret_cardiaque", 'String'>;
    readonly dea_temoin: Prisma.FieldRef<"s13_arret_cardiaque", 'String'>;
    readonly dea_temoin_nb_chocs: Prisma.FieldRef<"s13_arret_cardiaque", 'Int'>;
    readonly rcr_pr_debut_heure: Prisma.FieldRef<"s13_arret_cardiaque", 'DateTime'>;
    readonly dea_pr: Prisma.FieldRef<"s13_arret_cardiaque", 'String'>;
    readonly dea_pr_nb_chocs: Prisma.FieldRef<"s13_arret_cardiaque", 'Int'>;
    readonly retour_pouls_avant_tap: Prisma.FieldRef<"s13_arret_cardiaque", 'String'>;
}
/**
 * s13_arret_cardiaque findUnique
 */
export type s13_arret_cardiaqueFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_arret_cardiaque
     */
    select?: Prisma.s13_arret_cardiaqueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_arret_cardiaque
     */
    omit?: Prisma.s13_arret_cardiaqueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_arret_cardiaqueInclude<ExtArgs> | null;
    /**
     * Filter, which s13_arret_cardiaque to fetch.
     */
    where: Prisma.s13_arret_cardiaqueWhereUniqueInput;
};
/**
 * s13_arret_cardiaque findUniqueOrThrow
 */
export type s13_arret_cardiaqueFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_arret_cardiaque
     */
    select?: Prisma.s13_arret_cardiaqueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_arret_cardiaque
     */
    omit?: Prisma.s13_arret_cardiaqueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_arret_cardiaqueInclude<ExtArgs> | null;
    /**
     * Filter, which s13_arret_cardiaque to fetch.
     */
    where: Prisma.s13_arret_cardiaqueWhereUniqueInput;
};
/**
 * s13_arret_cardiaque findFirst
 */
export type s13_arret_cardiaqueFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_arret_cardiaque
     */
    select?: Prisma.s13_arret_cardiaqueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_arret_cardiaque
     */
    omit?: Prisma.s13_arret_cardiaqueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_arret_cardiaqueInclude<ExtArgs> | null;
    /**
     * Filter, which s13_arret_cardiaque to fetch.
     */
    where?: Prisma.s13_arret_cardiaqueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_arret_cardiaques to fetch.
     */
    orderBy?: Prisma.s13_arret_cardiaqueOrderByWithRelationInput | Prisma.s13_arret_cardiaqueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s13_arret_cardiaques.
     */
    cursor?: Prisma.s13_arret_cardiaqueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_arret_cardiaques from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_arret_cardiaques.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s13_arret_cardiaques.
     */
    distinct?: Prisma.S13_arret_cardiaqueScalarFieldEnum | Prisma.S13_arret_cardiaqueScalarFieldEnum[];
};
/**
 * s13_arret_cardiaque findFirstOrThrow
 */
export type s13_arret_cardiaqueFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_arret_cardiaque
     */
    select?: Prisma.s13_arret_cardiaqueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_arret_cardiaque
     */
    omit?: Prisma.s13_arret_cardiaqueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_arret_cardiaqueInclude<ExtArgs> | null;
    /**
     * Filter, which s13_arret_cardiaque to fetch.
     */
    where?: Prisma.s13_arret_cardiaqueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_arret_cardiaques to fetch.
     */
    orderBy?: Prisma.s13_arret_cardiaqueOrderByWithRelationInput | Prisma.s13_arret_cardiaqueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for s13_arret_cardiaques.
     */
    cursor?: Prisma.s13_arret_cardiaqueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_arret_cardiaques from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_arret_cardiaques.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of s13_arret_cardiaques.
     */
    distinct?: Prisma.S13_arret_cardiaqueScalarFieldEnum | Prisma.S13_arret_cardiaqueScalarFieldEnum[];
};
/**
 * s13_arret_cardiaque findMany
 */
export type s13_arret_cardiaqueFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_arret_cardiaque
     */
    select?: Prisma.s13_arret_cardiaqueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_arret_cardiaque
     */
    omit?: Prisma.s13_arret_cardiaqueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_arret_cardiaqueInclude<ExtArgs> | null;
    /**
     * Filter, which s13_arret_cardiaques to fetch.
     */
    where?: Prisma.s13_arret_cardiaqueWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of s13_arret_cardiaques to fetch.
     */
    orderBy?: Prisma.s13_arret_cardiaqueOrderByWithRelationInput | Prisma.s13_arret_cardiaqueOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing s13_arret_cardiaques.
     */
    cursor?: Prisma.s13_arret_cardiaqueWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` s13_arret_cardiaques from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` s13_arret_cardiaques.
     */
    skip?: number;
    distinct?: Prisma.S13_arret_cardiaqueScalarFieldEnum | Prisma.S13_arret_cardiaqueScalarFieldEnum[];
};
/**
 * s13_arret_cardiaque create
 */
export type s13_arret_cardiaqueCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_arret_cardiaque
     */
    select?: Prisma.s13_arret_cardiaqueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_arret_cardiaque
     */
    omit?: Prisma.s13_arret_cardiaqueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_arret_cardiaqueInclude<ExtArgs> | null;
    /**
     * The data needed to create a s13_arret_cardiaque.
     */
    data: Prisma.XOR<Prisma.s13_arret_cardiaqueCreateInput, Prisma.s13_arret_cardiaqueUncheckedCreateInput>;
};
/**
 * s13_arret_cardiaque createMany
 */
export type s13_arret_cardiaqueCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many s13_arret_cardiaques.
     */
    data: Prisma.s13_arret_cardiaqueCreateManyInput | Prisma.s13_arret_cardiaqueCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * s13_arret_cardiaque createManyAndReturn
 */
export type s13_arret_cardiaqueCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_arret_cardiaque
     */
    select?: Prisma.s13_arret_cardiaqueSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_arret_cardiaque
     */
    omit?: Prisma.s13_arret_cardiaqueOmit<ExtArgs> | null;
    /**
     * The data used to create many s13_arret_cardiaques.
     */
    data: Prisma.s13_arret_cardiaqueCreateManyInput | Prisma.s13_arret_cardiaqueCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_arret_cardiaqueIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * s13_arret_cardiaque update
 */
export type s13_arret_cardiaqueUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_arret_cardiaque
     */
    select?: Prisma.s13_arret_cardiaqueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_arret_cardiaque
     */
    omit?: Prisma.s13_arret_cardiaqueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_arret_cardiaqueInclude<ExtArgs> | null;
    /**
     * The data needed to update a s13_arret_cardiaque.
     */
    data: Prisma.XOR<Prisma.s13_arret_cardiaqueUpdateInput, Prisma.s13_arret_cardiaqueUncheckedUpdateInput>;
    /**
     * Choose, which s13_arret_cardiaque to update.
     */
    where: Prisma.s13_arret_cardiaqueWhereUniqueInput;
};
/**
 * s13_arret_cardiaque updateMany
 */
export type s13_arret_cardiaqueUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update s13_arret_cardiaques.
     */
    data: Prisma.XOR<Prisma.s13_arret_cardiaqueUpdateManyMutationInput, Prisma.s13_arret_cardiaqueUncheckedUpdateManyInput>;
    /**
     * Filter which s13_arret_cardiaques to update
     */
    where?: Prisma.s13_arret_cardiaqueWhereInput;
    /**
     * Limit how many s13_arret_cardiaques to update.
     */
    limit?: number;
};
/**
 * s13_arret_cardiaque updateManyAndReturn
 */
export type s13_arret_cardiaqueUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_arret_cardiaque
     */
    select?: Prisma.s13_arret_cardiaqueSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_arret_cardiaque
     */
    omit?: Prisma.s13_arret_cardiaqueOmit<ExtArgs> | null;
    /**
     * The data used to update s13_arret_cardiaques.
     */
    data: Prisma.XOR<Prisma.s13_arret_cardiaqueUpdateManyMutationInput, Prisma.s13_arret_cardiaqueUncheckedUpdateManyInput>;
    /**
     * Filter which s13_arret_cardiaques to update
     */
    where?: Prisma.s13_arret_cardiaqueWhereInput;
    /**
     * Limit how many s13_arret_cardiaques to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_arret_cardiaqueIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * s13_arret_cardiaque upsert
 */
export type s13_arret_cardiaqueUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_arret_cardiaque
     */
    select?: Prisma.s13_arret_cardiaqueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_arret_cardiaque
     */
    omit?: Prisma.s13_arret_cardiaqueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_arret_cardiaqueInclude<ExtArgs> | null;
    /**
     * The filter to search for the s13_arret_cardiaque to update in case it exists.
     */
    where: Prisma.s13_arret_cardiaqueWhereUniqueInput;
    /**
     * In case the s13_arret_cardiaque found by the `where` argument doesn't exist, create a new s13_arret_cardiaque with this data.
     */
    create: Prisma.XOR<Prisma.s13_arret_cardiaqueCreateInput, Prisma.s13_arret_cardiaqueUncheckedCreateInput>;
    /**
     * In case the s13_arret_cardiaque was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.s13_arret_cardiaqueUpdateInput, Prisma.s13_arret_cardiaqueUncheckedUpdateInput>;
};
/**
 * s13_arret_cardiaque delete
 */
export type s13_arret_cardiaqueDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_arret_cardiaque
     */
    select?: Prisma.s13_arret_cardiaqueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_arret_cardiaque
     */
    omit?: Prisma.s13_arret_cardiaqueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_arret_cardiaqueInclude<ExtArgs> | null;
    /**
     * Filter which s13_arret_cardiaque to delete.
     */
    where: Prisma.s13_arret_cardiaqueWhereUniqueInput;
};
/**
 * s13_arret_cardiaque deleteMany
 */
export type s13_arret_cardiaqueDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which s13_arret_cardiaques to delete
     */
    where?: Prisma.s13_arret_cardiaqueWhereInput;
    /**
     * Limit how many s13_arret_cardiaques to delete.
     */
    limit?: number;
};
/**
 * s13_arret_cardiaque without action
 */
export type s13_arret_cardiaqueDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_arret_cardiaque
     */
    select?: Prisma.s13_arret_cardiaqueSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_arret_cardiaque
     */
    omit?: Prisma.s13_arret_cardiaqueOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_arret_cardiaqueInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=s13_arret_cardiaque.d.ts.map