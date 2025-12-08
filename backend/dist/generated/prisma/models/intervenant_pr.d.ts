import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model intervenant_pr
 *
 */
export type intervenant_prModel = runtime.Types.Result.DefaultSelection<Prisma.$intervenant_prPayload>;
export type AggregateIntervenant_pr = {
    _count: Intervenant_prCountAggregateOutputType | null;
    _avg: Intervenant_prAvgAggregateOutputType | null;
    _sum: Intervenant_prSumAggregateOutputType | null;
    _min: Intervenant_prMinAggregateOutputType | null;
    _max: Intervenant_prMaxAggregateOutputType | null;
};
export type Intervenant_prAvgAggregateOutputType = {
    id: number | null;
};
export type Intervenant_prSumAggregateOutputType = {
    id: number | null;
};
export type Intervenant_prMinAggregateOutputType = {
    id: number | null;
    nom: string | null;
    prenom: string | null;
    email: string | null;
    numero_pr: string | null;
    mot_de_passe: string | null;
    niveau_pr: string | null;
    date_active: Date | null;
    date_inactive: Date | null;
    actif: boolean | null;
    cellulaire: string | null;
};
export type Intervenant_prMaxAggregateOutputType = {
    id: number | null;
    nom: string | null;
    prenom: string | null;
    email: string | null;
    numero_pr: string | null;
    mot_de_passe: string | null;
    niveau_pr: string | null;
    date_active: Date | null;
    date_inactive: Date | null;
    actif: boolean | null;
    cellulaire: string | null;
};
export type Intervenant_prCountAggregateOutputType = {
    id: number;
    nom: number;
    prenom: number;
    email: number;
    numero_pr: number;
    mot_de_passe: number;
    niveau_pr: number;
    date_active: number;
    date_inactive: number;
    actif: number;
    cellulaire: number;
    _all: number;
};
export type Intervenant_prAvgAggregateInputType = {
    id?: true;
};
export type Intervenant_prSumAggregateInputType = {
    id?: true;
};
export type Intervenant_prMinAggregateInputType = {
    id?: true;
    nom?: true;
    prenom?: true;
    email?: true;
    numero_pr?: true;
    mot_de_passe?: true;
    niveau_pr?: true;
    date_active?: true;
    date_inactive?: true;
    actif?: true;
    cellulaire?: true;
};
export type Intervenant_prMaxAggregateInputType = {
    id?: true;
    nom?: true;
    prenom?: true;
    email?: true;
    numero_pr?: true;
    mot_de_passe?: true;
    niveau_pr?: true;
    date_active?: true;
    date_inactive?: true;
    actif?: true;
    cellulaire?: true;
};
export type Intervenant_prCountAggregateInputType = {
    id?: true;
    nom?: true;
    prenom?: true;
    email?: true;
    numero_pr?: true;
    mot_de_passe?: true;
    niveau_pr?: true;
    date_active?: true;
    date_inactive?: true;
    actif?: true;
    cellulaire?: true;
    _all?: true;
};
export type Intervenant_prAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which intervenant_pr to aggregate.
     */
    where?: Prisma.intervenant_prWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of intervenant_prs to fetch.
     */
    orderBy?: Prisma.intervenant_prOrderByWithRelationInput | Prisma.intervenant_prOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.intervenant_prWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` intervenant_prs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` intervenant_prs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned intervenant_prs
    **/
    _count?: true | Intervenant_prCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Intervenant_prAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Intervenant_prSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Intervenant_prMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Intervenant_prMaxAggregateInputType;
};
export type GetIntervenant_prAggregateType<T extends Intervenant_prAggregateArgs> = {
    [P in keyof T & keyof AggregateIntervenant_pr]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIntervenant_pr[P]> : Prisma.GetScalarType<T[P], AggregateIntervenant_pr[P]>;
};
export type intervenant_prGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.intervenant_prWhereInput;
    orderBy?: Prisma.intervenant_prOrderByWithAggregationInput | Prisma.intervenant_prOrderByWithAggregationInput[];
    by: Prisma.Intervenant_prScalarFieldEnum[] | Prisma.Intervenant_prScalarFieldEnum;
    having?: Prisma.intervenant_prScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Intervenant_prCountAggregateInputType | true;
    _avg?: Intervenant_prAvgAggregateInputType;
    _sum?: Intervenant_prSumAggregateInputType;
    _min?: Intervenant_prMinAggregateInputType;
    _max?: Intervenant_prMaxAggregateInputType;
};
export type Intervenant_prGroupByOutputType = {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    numero_pr: string;
    mot_de_passe: string;
    niveau_pr: string;
    date_active: Date;
    date_inactive: Date | null;
    actif: boolean | null;
    cellulaire: string | null;
    _count: Intervenant_prCountAggregateOutputType | null;
    _avg: Intervenant_prAvgAggregateOutputType | null;
    _sum: Intervenant_prSumAggregateOutputType | null;
    _min: Intervenant_prMinAggregateOutputType | null;
    _max: Intervenant_prMaxAggregateOutputType | null;
};
type GetIntervenant_prGroupByPayload<T extends intervenant_prGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Intervenant_prGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Intervenant_prGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Intervenant_prGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Intervenant_prGroupByOutputType[P]>;
}>>;
export type intervenant_prWhereInput = {
    AND?: Prisma.intervenant_prWhereInput | Prisma.intervenant_prWhereInput[];
    OR?: Prisma.intervenant_prWhereInput[];
    NOT?: Prisma.intervenant_prWhereInput | Prisma.intervenant_prWhereInput[];
    id?: Prisma.IntFilter<"intervenant_pr"> | number;
    nom?: Prisma.StringFilter<"intervenant_pr"> | string;
    prenom?: Prisma.StringFilter<"intervenant_pr"> | string;
    email?: Prisma.StringFilter<"intervenant_pr"> | string;
    numero_pr?: Prisma.StringFilter<"intervenant_pr"> | string;
    mot_de_passe?: Prisma.StringFilter<"intervenant_pr"> | string;
    niveau_pr?: Prisma.StringFilter<"intervenant_pr"> | string;
    date_active?: Prisma.DateTimeFilter<"intervenant_pr"> | Date | string;
    date_inactive?: Prisma.DateTimeNullableFilter<"intervenant_pr"> | Date | string | null;
    actif?: Prisma.BoolNullableFilter<"intervenant_pr"> | boolean | null;
    cellulaire?: Prisma.StringNullableFilter<"intervenant_pr"> | string | null;
    r_rapport_pr_intervenant?: Prisma.R_rapport_pr_intervenantListRelationFilter;
};
export type intervenant_prOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    numero_pr?: Prisma.SortOrder;
    mot_de_passe?: Prisma.SortOrder;
    niveau_pr?: Prisma.SortOrder;
    date_active?: Prisma.SortOrder;
    date_inactive?: Prisma.SortOrderInput | Prisma.SortOrder;
    actif?: Prisma.SortOrderInput | Prisma.SortOrder;
    cellulaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantOrderByRelationAggregateInput;
};
export type intervenant_prWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.intervenant_prWhereInput | Prisma.intervenant_prWhereInput[];
    OR?: Prisma.intervenant_prWhereInput[];
    NOT?: Prisma.intervenant_prWhereInput | Prisma.intervenant_prWhereInput[];
    nom?: Prisma.StringFilter<"intervenant_pr"> | string;
    prenom?: Prisma.StringFilter<"intervenant_pr"> | string;
    numero_pr?: Prisma.StringFilter<"intervenant_pr"> | string;
    mot_de_passe?: Prisma.StringFilter<"intervenant_pr"> | string;
    niveau_pr?: Prisma.StringFilter<"intervenant_pr"> | string;
    date_active?: Prisma.DateTimeFilter<"intervenant_pr"> | Date | string;
    date_inactive?: Prisma.DateTimeNullableFilter<"intervenant_pr"> | Date | string | null;
    actif?: Prisma.BoolNullableFilter<"intervenant_pr"> | boolean | null;
    cellulaire?: Prisma.StringNullableFilter<"intervenant_pr"> | string | null;
    r_rapport_pr_intervenant?: Prisma.R_rapport_pr_intervenantListRelationFilter;
}, "id" | "email">;
export type intervenant_prOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    numero_pr?: Prisma.SortOrder;
    mot_de_passe?: Prisma.SortOrder;
    niveau_pr?: Prisma.SortOrder;
    date_active?: Prisma.SortOrder;
    date_inactive?: Prisma.SortOrderInput | Prisma.SortOrder;
    actif?: Prisma.SortOrderInput | Prisma.SortOrder;
    cellulaire?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.intervenant_prCountOrderByAggregateInput;
    _avg?: Prisma.intervenant_prAvgOrderByAggregateInput;
    _max?: Prisma.intervenant_prMaxOrderByAggregateInput;
    _min?: Prisma.intervenant_prMinOrderByAggregateInput;
    _sum?: Prisma.intervenant_prSumOrderByAggregateInput;
};
export type intervenant_prScalarWhereWithAggregatesInput = {
    AND?: Prisma.intervenant_prScalarWhereWithAggregatesInput | Prisma.intervenant_prScalarWhereWithAggregatesInput[];
    OR?: Prisma.intervenant_prScalarWhereWithAggregatesInput[];
    NOT?: Prisma.intervenant_prScalarWhereWithAggregatesInput | Prisma.intervenant_prScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"intervenant_pr"> | number;
    nom?: Prisma.StringWithAggregatesFilter<"intervenant_pr"> | string;
    prenom?: Prisma.StringWithAggregatesFilter<"intervenant_pr"> | string;
    email?: Prisma.StringWithAggregatesFilter<"intervenant_pr"> | string;
    numero_pr?: Prisma.StringWithAggregatesFilter<"intervenant_pr"> | string;
    mot_de_passe?: Prisma.StringWithAggregatesFilter<"intervenant_pr"> | string;
    niveau_pr?: Prisma.StringWithAggregatesFilter<"intervenant_pr"> | string;
    date_active?: Prisma.DateTimeWithAggregatesFilter<"intervenant_pr"> | Date | string;
    date_inactive?: Prisma.DateTimeNullableWithAggregatesFilter<"intervenant_pr"> | Date | string | null;
    actif?: Prisma.BoolNullableWithAggregatesFilter<"intervenant_pr"> | boolean | null;
    cellulaire?: Prisma.StringNullableWithAggregatesFilter<"intervenant_pr"> | string | null;
};
export type intervenant_prCreateInput = {
    nom: string;
    prenom: string;
    email: string;
    numero_pr: string;
    mot_de_passe: string;
    niveau_pr: string;
    date_active: Date | string;
    date_inactive?: Date | string | null;
    actif?: boolean | null;
    cellulaire?: string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutIntervenantInput;
};
export type intervenant_prUncheckedCreateInput = {
    id?: number;
    nom: string;
    prenom: string;
    email: string;
    numero_pr: string;
    mot_de_passe: string;
    niveau_pr: string;
    date_active: Date | string;
    date_inactive?: Date | string | null;
    actif?: boolean | null;
    cellulaire?: string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutIntervenantInput;
};
export type intervenant_prUpdateInput = {
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    numero_pr?: Prisma.StringFieldUpdateOperationsInput | string;
    mot_de_passe?: Prisma.StringFieldUpdateOperationsInput | string;
    niveau_pr?: Prisma.StringFieldUpdateOperationsInput | string;
    date_active?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_inactive?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    cellulaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutIntervenantNestedInput;
};
export type intervenant_prUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    numero_pr?: Prisma.StringFieldUpdateOperationsInput | string;
    mot_de_passe?: Prisma.StringFieldUpdateOperationsInput | string;
    niveau_pr?: Prisma.StringFieldUpdateOperationsInput | string;
    date_active?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_inactive?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    cellulaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutIntervenantNestedInput;
};
export type intervenant_prCreateManyInput = {
    id?: number;
    nom: string;
    prenom: string;
    email: string;
    numero_pr: string;
    mot_de_passe: string;
    niveau_pr: string;
    date_active: Date | string;
    date_inactive?: Date | string | null;
    actif?: boolean | null;
    cellulaire?: string | null;
};
export type intervenant_prUpdateManyMutationInput = {
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    numero_pr?: Prisma.StringFieldUpdateOperationsInput | string;
    mot_de_passe?: Prisma.StringFieldUpdateOperationsInput | string;
    niveau_pr?: Prisma.StringFieldUpdateOperationsInput | string;
    date_active?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_inactive?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    cellulaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type intervenant_prUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    numero_pr?: Prisma.StringFieldUpdateOperationsInput | string;
    mot_de_passe?: Prisma.StringFieldUpdateOperationsInput | string;
    niveau_pr?: Prisma.StringFieldUpdateOperationsInput | string;
    date_active?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_inactive?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    cellulaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type intervenant_prCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    numero_pr?: Prisma.SortOrder;
    mot_de_passe?: Prisma.SortOrder;
    niveau_pr?: Prisma.SortOrder;
    date_active?: Prisma.SortOrder;
    date_inactive?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    cellulaire?: Prisma.SortOrder;
};
export type intervenant_prAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type intervenant_prMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    numero_pr?: Prisma.SortOrder;
    mot_de_passe?: Prisma.SortOrder;
    niveau_pr?: Prisma.SortOrder;
    date_active?: Prisma.SortOrder;
    date_inactive?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    cellulaire?: Prisma.SortOrder;
};
export type intervenant_prMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    numero_pr?: Prisma.SortOrder;
    mot_de_passe?: Prisma.SortOrder;
    niveau_pr?: Prisma.SortOrder;
    date_active?: Prisma.SortOrder;
    date_inactive?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    cellulaire?: Prisma.SortOrder;
};
export type intervenant_prSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type Intervenant_prScalarRelationFilter = {
    is?: Prisma.intervenant_prWhereInput;
    isNot?: Prisma.intervenant_prWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
};
export type intervenant_prCreateNestedOneWithoutR_rapport_pr_intervenantInput = {
    create?: Prisma.XOR<Prisma.intervenant_prCreateWithoutR_rapport_pr_intervenantInput, Prisma.intervenant_prUncheckedCreateWithoutR_rapport_pr_intervenantInput>;
    connectOrCreate?: Prisma.intervenant_prCreateOrConnectWithoutR_rapport_pr_intervenantInput;
    connect?: Prisma.intervenant_prWhereUniqueInput;
};
export type intervenant_prUpdateOneRequiredWithoutR_rapport_pr_intervenantNestedInput = {
    create?: Prisma.XOR<Prisma.intervenant_prCreateWithoutR_rapport_pr_intervenantInput, Prisma.intervenant_prUncheckedCreateWithoutR_rapport_pr_intervenantInput>;
    connectOrCreate?: Prisma.intervenant_prCreateOrConnectWithoutR_rapport_pr_intervenantInput;
    upsert?: Prisma.intervenant_prUpsertWithoutR_rapport_pr_intervenantInput;
    connect?: Prisma.intervenant_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.intervenant_prUpdateToOneWithWhereWithoutR_rapport_pr_intervenantInput, Prisma.intervenant_prUpdateWithoutR_rapport_pr_intervenantInput>, Prisma.intervenant_prUncheckedUpdateWithoutR_rapport_pr_intervenantInput>;
};
export type intervenant_prCreateWithoutR_rapport_pr_intervenantInput = {
    nom: string;
    prenom: string;
    email: string;
    numero_pr: string;
    mot_de_passe: string;
    niveau_pr: string;
    date_active: Date | string;
    date_inactive?: Date | string | null;
    actif?: boolean | null;
    cellulaire?: string | null;
};
export type intervenant_prUncheckedCreateWithoutR_rapport_pr_intervenantInput = {
    id?: number;
    nom: string;
    prenom: string;
    email: string;
    numero_pr: string;
    mot_de_passe: string;
    niveau_pr: string;
    date_active: Date | string;
    date_inactive?: Date | string | null;
    actif?: boolean | null;
    cellulaire?: string | null;
};
export type intervenant_prCreateOrConnectWithoutR_rapport_pr_intervenantInput = {
    where: Prisma.intervenant_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.intervenant_prCreateWithoutR_rapport_pr_intervenantInput, Prisma.intervenant_prUncheckedCreateWithoutR_rapport_pr_intervenantInput>;
};
export type intervenant_prUpsertWithoutR_rapport_pr_intervenantInput = {
    update: Prisma.XOR<Prisma.intervenant_prUpdateWithoutR_rapport_pr_intervenantInput, Prisma.intervenant_prUncheckedUpdateWithoutR_rapport_pr_intervenantInput>;
    create: Prisma.XOR<Prisma.intervenant_prCreateWithoutR_rapport_pr_intervenantInput, Prisma.intervenant_prUncheckedCreateWithoutR_rapport_pr_intervenantInput>;
    where?: Prisma.intervenant_prWhereInput;
};
export type intervenant_prUpdateToOneWithWhereWithoutR_rapport_pr_intervenantInput = {
    where?: Prisma.intervenant_prWhereInput;
    data: Prisma.XOR<Prisma.intervenant_prUpdateWithoutR_rapport_pr_intervenantInput, Prisma.intervenant_prUncheckedUpdateWithoutR_rapport_pr_intervenantInput>;
};
export type intervenant_prUpdateWithoutR_rapport_pr_intervenantInput = {
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    numero_pr?: Prisma.StringFieldUpdateOperationsInput | string;
    mot_de_passe?: Prisma.StringFieldUpdateOperationsInput | string;
    niveau_pr?: Prisma.StringFieldUpdateOperationsInput | string;
    date_active?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_inactive?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    cellulaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type intervenant_prUncheckedUpdateWithoutR_rapport_pr_intervenantInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    numero_pr?: Prisma.StringFieldUpdateOperationsInput | string;
    mot_de_passe?: Prisma.StringFieldUpdateOperationsInput | string;
    niveau_pr?: Prisma.StringFieldUpdateOperationsInput | string;
    date_active?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    date_inactive?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    actif?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    cellulaire?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type Intervenant_prCountOutputType
 */
export type Intervenant_prCountOutputType = {
    r_rapport_pr_intervenant: number;
};
export type Intervenant_prCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    r_rapport_pr_intervenant?: boolean | Intervenant_prCountOutputTypeCountR_rapport_pr_intervenantArgs;
};
/**
 * Intervenant_prCountOutputType without action
 */
export type Intervenant_prCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Intervenant_prCountOutputType
     */
    select?: Prisma.Intervenant_prCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Intervenant_prCountOutputType without action
 */
export type Intervenant_prCountOutputTypeCountR_rapport_pr_intervenantArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.r_rapport_pr_intervenantWhereInput;
};
export type intervenant_prSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    prenom?: boolean;
    email?: boolean;
    numero_pr?: boolean;
    mot_de_passe?: boolean;
    niveau_pr?: boolean;
    date_active?: boolean;
    date_inactive?: boolean;
    actif?: boolean;
    cellulaire?: boolean;
    r_rapport_pr_intervenant?: boolean | Prisma.intervenant_pr$r_rapport_pr_intervenantArgs<ExtArgs>;
    _count?: boolean | Prisma.Intervenant_prCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["intervenant_pr"]>;
export type intervenant_prSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    prenom?: boolean;
    email?: boolean;
    numero_pr?: boolean;
    mot_de_passe?: boolean;
    niveau_pr?: boolean;
    date_active?: boolean;
    date_inactive?: boolean;
    actif?: boolean;
    cellulaire?: boolean;
}, ExtArgs["result"]["intervenant_pr"]>;
export type intervenant_prSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    prenom?: boolean;
    email?: boolean;
    numero_pr?: boolean;
    mot_de_passe?: boolean;
    niveau_pr?: boolean;
    date_active?: boolean;
    date_inactive?: boolean;
    actif?: boolean;
    cellulaire?: boolean;
}, ExtArgs["result"]["intervenant_pr"]>;
export type intervenant_prSelectScalar = {
    id?: boolean;
    nom?: boolean;
    prenom?: boolean;
    email?: boolean;
    numero_pr?: boolean;
    mot_de_passe?: boolean;
    niveau_pr?: boolean;
    date_active?: boolean;
    date_inactive?: boolean;
    actif?: boolean;
    cellulaire?: boolean;
};
export type intervenant_prOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "prenom" | "email" | "numero_pr" | "mot_de_passe" | "niveau_pr" | "date_active" | "date_inactive" | "actif" | "cellulaire", ExtArgs["result"]["intervenant_pr"]>;
export type intervenant_prInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    r_rapport_pr_intervenant?: boolean | Prisma.intervenant_pr$r_rapport_pr_intervenantArgs<ExtArgs>;
    _count?: boolean | Prisma.Intervenant_prCountOutputTypeDefaultArgs<ExtArgs>;
};
export type intervenant_prIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type intervenant_prIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $intervenant_prPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "intervenant_pr";
    objects: {
        r_rapport_pr_intervenant: Prisma.$r_rapport_pr_intervenantPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nom: string;
        prenom: string;
        email: string;
        numero_pr: string;
        mot_de_passe: string;
        niveau_pr: string;
        date_active: Date;
        date_inactive: Date | null;
        actif: boolean | null;
        cellulaire: string | null;
    }, ExtArgs["result"]["intervenant_pr"]>;
    composites: {};
};
export type intervenant_prGetPayload<S extends boolean | null | undefined | intervenant_prDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$intervenant_prPayload, S>;
export type intervenant_prCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<intervenant_prFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Intervenant_prCountAggregateInputType | true;
};
export interface intervenant_prDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['intervenant_pr'];
        meta: {
            name: 'intervenant_pr';
        };
    };
    /**
     * Find zero or one Intervenant_pr that matches the filter.
     * @param {intervenant_prFindUniqueArgs} args - Arguments to find a Intervenant_pr
     * @example
     * // Get one Intervenant_pr
     * const intervenant_pr = await prisma.intervenant_pr.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends intervenant_prFindUniqueArgs>(args: Prisma.SelectSubset<T, intervenant_prFindUniqueArgs<ExtArgs>>): Prisma.Prisma__intervenant_prClient<runtime.Types.Result.GetResult<Prisma.$intervenant_prPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Intervenant_pr that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {intervenant_prFindUniqueOrThrowArgs} args - Arguments to find a Intervenant_pr
     * @example
     * // Get one Intervenant_pr
     * const intervenant_pr = await prisma.intervenant_pr.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends intervenant_prFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, intervenant_prFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__intervenant_prClient<runtime.Types.Result.GetResult<Prisma.$intervenant_prPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Intervenant_pr that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intervenant_prFindFirstArgs} args - Arguments to find a Intervenant_pr
     * @example
     * // Get one Intervenant_pr
     * const intervenant_pr = await prisma.intervenant_pr.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends intervenant_prFindFirstArgs>(args?: Prisma.SelectSubset<T, intervenant_prFindFirstArgs<ExtArgs>>): Prisma.Prisma__intervenant_prClient<runtime.Types.Result.GetResult<Prisma.$intervenant_prPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Intervenant_pr that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intervenant_prFindFirstOrThrowArgs} args - Arguments to find a Intervenant_pr
     * @example
     * // Get one Intervenant_pr
     * const intervenant_pr = await prisma.intervenant_pr.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends intervenant_prFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, intervenant_prFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__intervenant_prClient<runtime.Types.Result.GetResult<Prisma.$intervenant_prPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Intervenant_prs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intervenant_prFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Intervenant_prs
     * const intervenant_prs = await prisma.intervenant_pr.findMany()
     *
     * // Get first 10 Intervenant_prs
     * const intervenant_prs = await prisma.intervenant_pr.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const intervenant_prWithIdOnly = await prisma.intervenant_pr.findMany({ select: { id: true } })
     *
     */
    findMany<T extends intervenant_prFindManyArgs>(args?: Prisma.SelectSubset<T, intervenant_prFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$intervenant_prPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Intervenant_pr.
     * @param {intervenant_prCreateArgs} args - Arguments to create a Intervenant_pr.
     * @example
     * // Create one Intervenant_pr
     * const Intervenant_pr = await prisma.intervenant_pr.create({
     *   data: {
     *     // ... data to create a Intervenant_pr
     *   }
     * })
     *
     */
    create<T extends intervenant_prCreateArgs>(args: Prisma.SelectSubset<T, intervenant_prCreateArgs<ExtArgs>>): Prisma.Prisma__intervenant_prClient<runtime.Types.Result.GetResult<Prisma.$intervenant_prPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Intervenant_prs.
     * @param {intervenant_prCreateManyArgs} args - Arguments to create many Intervenant_prs.
     * @example
     * // Create many Intervenant_prs
     * const intervenant_pr = await prisma.intervenant_pr.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends intervenant_prCreateManyArgs>(args?: Prisma.SelectSubset<T, intervenant_prCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Intervenant_prs and returns the data saved in the database.
     * @param {intervenant_prCreateManyAndReturnArgs} args - Arguments to create many Intervenant_prs.
     * @example
     * // Create many Intervenant_prs
     * const intervenant_pr = await prisma.intervenant_pr.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Intervenant_prs and only return the `id`
     * const intervenant_prWithIdOnly = await prisma.intervenant_pr.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends intervenant_prCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, intervenant_prCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$intervenant_prPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Intervenant_pr.
     * @param {intervenant_prDeleteArgs} args - Arguments to delete one Intervenant_pr.
     * @example
     * // Delete one Intervenant_pr
     * const Intervenant_pr = await prisma.intervenant_pr.delete({
     *   where: {
     *     // ... filter to delete one Intervenant_pr
     *   }
     * })
     *
     */
    delete<T extends intervenant_prDeleteArgs>(args: Prisma.SelectSubset<T, intervenant_prDeleteArgs<ExtArgs>>): Prisma.Prisma__intervenant_prClient<runtime.Types.Result.GetResult<Prisma.$intervenant_prPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Intervenant_pr.
     * @param {intervenant_prUpdateArgs} args - Arguments to update one Intervenant_pr.
     * @example
     * // Update one Intervenant_pr
     * const intervenant_pr = await prisma.intervenant_pr.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends intervenant_prUpdateArgs>(args: Prisma.SelectSubset<T, intervenant_prUpdateArgs<ExtArgs>>): Prisma.Prisma__intervenant_prClient<runtime.Types.Result.GetResult<Prisma.$intervenant_prPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Intervenant_prs.
     * @param {intervenant_prDeleteManyArgs} args - Arguments to filter Intervenant_prs to delete.
     * @example
     * // Delete a few Intervenant_prs
     * const { count } = await prisma.intervenant_pr.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends intervenant_prDeleteManyArgs>(args?: Prisma.SelectSubset<T, intervenant_prDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Intervenant_prs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intervenant_prUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Intervenant_prs
     * const intervenant_pr = await prisma.intervenant_pr.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends intervenant_prUpdateManyArgs>(args: Prisma.SelectSubset<T, intervenant_prUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Intervenant_prs and returns the data updated in the database.
     * @param {intervenant_prUpdateManyAndReturnArgs} args - Arguments to update many Intervenant_prs.
     * @example
     * // Update many Intervenant_prs
     * const intervenant_pr = await prisma.intervenant_pr.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Intervenant_prs and only return the `id`
     * const intervenant_prWithIdOnly = await prisma.intervenant_pr.updateManyAndReturn({
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
    updateManyAndReturn<T extends intervenant_prUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, intervenant_prUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$intervenant_prPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Intervenant_pr.
     * @param {intervenant_prUpsertArgs} args - Arguments to update or create a Intervenant_pr.
     * @example
     * // Update or create a Intervenant_pr
     * const intervenant_pr = await prisma.intervenant_pr.upsert({
     *   create: {
     *     // ... data to create a Intervenant_pr
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Intervenant_pr we want to update
     *   }
     * })
     */
    upsert<T extends intervenant_prUpsertArgs>(args: Prisma.SelectSubset<T, intervenant_prUpsertArgs<ExtArgs>>): Prisma.Prisma__intervenant_prClient<runtime.Types.Result.GetResult<Prisma.$intervenant_prPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Intervenant_prs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intervenant_prCountArgs} args - Arguments to filter Intervenant_prs to count.
     * @example
     * // Count the number of Intervenant_prs
     * const count = await prisma.intervenant_pr.count({
     *   where: {
     *     // ... the filter for the Intervenant_prs we want to count
     *   }
     * })
    **/
    count<T extends intervenant_prCountArgs>(args?: Prisma.Subset<T, intervenant_prCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Intervenant_prCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Intervenant_pr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Intervenant_prAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Intervenant_prAggregateArgs>(args: Prisma.Subset<T, Intervenant_prAggregateArgs>): Prisma.PrismaPromise<GetIntervenant_prAggregateType<T>>;
    /**
     * Group by Intervenant_pr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intervenant_prGroupByArgs} args - Group by arguments.
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
    groupBy<T extends intervenant_prGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: intervenant_prGroupByArgs['orderBy'];
    } : {
        orderBy?: intervenant_prGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, intervenant_prGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntervenant_prGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the intervenant_pr model
     */
    readonly fields: intervenant_prFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for intervenant_pr.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__intervenant_prClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    r_rapport_pr_intervenant<T extends Prisma.intervenant_pr$r_rapport_pr_intervenantArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.intervenant_pr$r_rapport_pr_intervenantArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$r_rapport_pr_intervenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the intervenant_pr model
 */
export interface intervenant_prFieldRefs {
    readonly id: Prisma.FieldRef<"intervenant_pr", 'Int'>;
    readonly nom: Prisma.FieldRef<"intervenant_pr", 'String'>;
    readonly prenom: Prisma.FieldRef<"intervenant_pr", 'String'>;
    readonly email: Prisma.FieldRef<"intervenant_pr", 'String'>;
    readonly numero_pr: Prisma.FieldRef<"intervenant_pr", 'String'>;
    readonly mot_de_passe: Prisma.FieldRef<"intervenant_pr", 'String'>;
    readonly niveau_pr: Prisma.FieldRef<"intervenant_pr", 'String'>;
    readonly date_active: Prisma.FieldRef<"intervenant_pr", 'DateTime'>;
    readonly date_inactive: Prisma.FieldRef<"intervenant_pr", 'DateTime'>;
    readonly actif: Prisma.FieldRef<"intervenant_pr", 'Boolean'>;
    readonly cellulaire: Prisma.FieldRef<"intervenant_pr", 'String'>;
}
/**
 * intervenant_pr findUnique
 */
export type intervenant_prFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intervenant_pr
     */
    select?: Prisma.intervenant_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the intervenant_pr
     */
    omit?: Prisma.intervenant_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.intervenant_prInclude<ExtArgs> | null;
    /**
     * Filter, which intervenant_pr to fetch.
     */
    where: Prisma.intervenant_prWhereUniqueInput;
};
/**
 * intervenant_pr findUniqueOrThrow
 */
export type intervenant_prFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intervenant_pr
     */
    select?: Prisma.intervenant_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the intervenant_pr
     */
    omit?: Prisma.intervenant_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.intervenant_prInclude<ExtArgs> | null;
    /**
     * Filter, which intervenant_pr to fetch.
     */
    where: Prisma.intervenant_prWhereUniqueInput;
};
/**
 * intervenant_pr findFirst
 */
export type intervenant_prFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intervenant_pr
     */
    select?: Prisma.intervenant_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the intervenant_pr
     */
    omit?: Prisma.intervenant_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.intervenant_prInclude<ExtArgs> | null;
    /**
     * Filter, which intervenant_pr to fetch.
     */
    where?: Prisma.intervenant_prWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of intervenant_prs to fetch.
     */
    orderBy?: Prisma.intervenant_prOrderByWithRelationInput | Prisma.intervenant_prOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for intervenant_prs.
     */
    cursor?: Prisma.intervenant_prWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` intervenant_prs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` intervenant_prs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of intervenant_prs.
     */
    distinct?: Prisma.Intervenant_prScalarFieldEnum | Prisma.Intervenant_prScalarFieldEnum[];
};
/**
 * intervenant_pr findFirstOrThrow
 */
export type intervenant_prFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intervenant_pr
     */
    select?: Prisma.intervenant_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the intervenant_pr
     */
    omit?: Prisma.intervenant_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.intervenant_prInclude<ExtArgs> | null;
    /**
     * Filter, which intervenant_pr to fetch.
     */
    where?: Prisma.intervenant_prWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of intervenant_prs to fetch.
     */
    orderBy?: Prisma.intervenant_prOrderByWithRelationInput | Prisma.intervenant_prOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for intervenant_prs.
     */
    cursor?: Prisma.intervenant_prWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` intervenant_prs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` intervenant_prs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of intervenant_prs.
     */
    distinct?: Prisma.Intervenant_prScalarFieldEnum | Prisma.Intervenant_prScalarFieldEnum[];
};
/**
 * intervenant_pr findMany
 */
export type intervenant_prFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intervenant_pr
     */
    select?: Prisma.intervenant_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the intervenant_pr
     */
    omit?: Prisma.intervenant_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.intervenant_prInclude<ExtArgs> | null;
    /**
     * Filter, which intervenant_prs to fetch.
     */
    where?: Prisma.intervenant_prWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of intervenant_prs to fetch.
     */
    orderBy?: Prisma.intervenant_prOrderByWithRelationInput | Prisma.intervenant_prOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing intervenant_prs.
     */
    cursor?: Prisma.intervenant_prWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` intervenant_prs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` intervenant_prs.
     */
    skip?: number;
    distinct?: Prisma.Intervenant_prScalarFieldEnum | Prisma.Intervenant_prScalarFieldEnum[];
};
/**
 * intervenant_pr create
 */
export type intervenant_prCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intervenant_pr
     */
    select?: Prisma.intervenant_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the intervenant_pr
     */
    omit?: Prisma.intervenant_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.intervenant_prInclude<ExtArgs> | null;
    /**
     * The data needed to create a intervenant_pr.
     */
    data: Prisma.XOR<Prisma.intervenant_prCreateInput, Prisma.intervenant_prUncheckedCreateInput>;
};
/**
 * intervenant_pr createMany
 */
export type intervenant_prCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many intervenant_prs.
     */
    data: Prisma.intervenant_prCreateManyInput | Prisma.intervenant_prCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * intervenant_pr createManyAndReturn
 */
export type intervenant_prCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intervenant_pr
     */
    select?: Prisma.intervenant_prSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the intervenant_pr
     */
    omit?: Prisma.intervenant_prOmit<ExtArgs> | null;
    /**
     * The data used to create many intervenant_prs.
     */
    data: Prisma.intervenant_prCreateManyInput | Prisma.intervenant_prCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * intervenant_pr update
 */
export type intervenant_prUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intervenant_pr
     */
    select?: Prisma.intervenant_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the intervenant_pr
     */
    omit?: Prisma.intervenant_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.intervenant_prInclude<ExtArgs> | null;
    /**
     * The data needed to update a intervenant_pr.
     */
    data: Prisma.XOR<Prisma.intervenant_prUpdateInput, Prisma.intervenant_prUncheckedUpdateInput>;
    /**
     * Choose, which intervenant_pr to update.
     */
    where: Prisma.intervenant_prWhereUniqueInput;
};
/**
 * intervenant_pr updateMany
 */
export type intervenant_prUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update intervenant_prs.
     */
    data: Prisma.XOR<Prisma.intervenant_prUpdateManyMutationInput, Prisma.intervenant_prUncheckedUpdateManyInput>;
    /**
     * Filter which intervenant_prs to update
     */
    where?: Prisma.intervenant_prWhereInput;
    /**
     * Limit how many intervenant_prs to update.
     */
    limit?: number;
};
/**
 * intervenant_pr updateManyAndReturn
 */
export type intervenant_prUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intervenant_pr
     */
    select?: Prisma.intervenant_prSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the intervenant_pr
     */
    omit?: Prisma.intervenant_prOmit<ExtArgs> | null;
    /**
     * The data used to update intervenant_prs.
     */
    data: Prisma.XOR<Prisma.intervenant_prUpdateManyMutationInput, Prisma.intervenant_prUncheckedUpdateManyInput>;
    /**
     * Filter which intervenant_prs to update
     */
    where?: Prisma.intervenant_prWhereInput;
    /**
     * Limit how many intervenant_prs to update.
     */
    limit?: number;
};
/**
 * intervenant_pr upsert
 */
export type intervenant_prUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intervenant_pr
     */
    select?: Prisma.intervenant_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the intervenant_pr
     */
    omit?: Prisma.intervenant_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.intervenant_prInclude<ExtArgs> | null;
    /**
     * The filter to search for the intervenant_pr to update in case it exists.
     */
    where: Prisma.intervenant_prWhereUniqueInput;
    /**
     * In case the intervenant_pr found by the `where` argument doesn't exist, create a new intervenant_pr with this data.
     */
    create: Prisma.XOR<Prisma.intervenant_prCreateInput, Prisma.intervenant_prUncheckedCreateInput>;
    /**
     * In case the intervenant_pr was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.intervenant_prUpdateInput, Prisma.intervenant_prUncheckedUpdateInput>;
};
/**
 * intervenant_pr delete
 */
export type intervenant_prDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intervenant_pr
     */
    select?: Prisma.intervenant_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the intervenant_pr
     */
    omit?: Prisma.intervenant_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.intervenant_prInclude<ExtArgs> | null;
    /**
     * Filter which intervenant_pr to delete.
     */
    where: Prisma.intervenant_prWhereUniqueInput;
};
/**
 * intervenant_pr deleteMany
 */
export type intervenant_prDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which intervenant_prs to delete
     */
    where?: Prisma.intervenant_prWhereInput;
    /**
     * Limit how many intervenant_prs to delete.
     */
    limit?: number;
};
/**
 * intervenant_pr.r_rapport_pr_intervenant
 */
export type intervenant_pr$r_rapport_pr_intervenantArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr_intervenant
     */
    select?: Prisma.r_rapport_pr_intervenantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr_intervenant
     */
    omit?: Prisma.r_rapport_pr_intervenantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_pr_intervenantInclude<ExtArgs> | null;
    where?: Prisma.r_rapport_pr_intervenantWhereInput;
    orderBy?: Prisma.r_rapport_pr_intervenantOrderByWithRelationInput | Prisma.r_rapport_pr_intervenantOrderByWithRelationInput[];
    cursor?: Prisma.r_rapport_pr_intervenantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.R_rapport_pr_intervenantScalarFieldEnum | Prisma.R_rapport_pr_intervenantScalarFieldEnum[];
};
/**
 * intervenant_pr without action
 */
export type intervenant_prDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intervenant_pr
     */
    select?: Prisma.intervenant_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the intervenant_pr
     */
    omit?: Prisma.intervenant_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.intervenant_prInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=intervenant_pr.d.ts.map