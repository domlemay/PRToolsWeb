import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model r_rapport_pr
 *
 */
export type r_rapport_prModel = runtime.Types.Result.DefaultSelection<Prisma.$r_rapport_prPayload>;
export type AggregateR_rapport_pr = {
    _count: R_rapport_prCountAggregateOutputType | null;
    _avg: R_rapport_prAvgAggregateOutputType | null;
    _sum: R_rapport_prSumAggregateOutputType | null;
    _min: R_rapport_prMinAggregateOutputType | null;
    _max: R_rapport_prMaxAggregateOutputType | null;
};
export type R_rapport_prAvgAggregateOutputType = {
    id: number | null;
    patient_id: number | null;
};
export type R_rapport_prSumAggregateOutputType = {
    id: number | null;
    patient_id: number | null;
};
export type R_rapport_prMinAggregateOutputType = {
    id: number | null;
    patient_id: number | null;
    numero_formulaire_terrain: string | null;
    code_smpau: string | null;
    no_autor: string | null;
    etat_rapport: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type R_rapport_prMaxAggregateOutputType = {
    id: number | null;
    patient_id: number | null;
    numero_formulaire_terrain: string | null;
    code_smpau: string | null;
    no_autor: string | null;
    etat_rapport: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type R_rapport_prCountAggregateOutputType = {
    id: number;
    patient_id: number;
    numero_formulaire_terrain: number;
    code_smpau: number;
    no_autor: number;
    etat_rapport: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type R_rapport_prAvgAggregateInputType = {
    id?: true;
    patient_id?: true;
};
export type R_rapport_prSumAggregateInputType = {
    id?: true;
    patient_id?: true;
};
export type R_rapport_prMinAggregateInputType = {
    id?: true;
    patient_id?: true;
    numero_formulaire_terrain?: true;
    code_smpau?: true;
    no_autor?: true;
    etat_rapport?: true;
    created_at?: true;
    updated_at?: true;
};
export type R_rapport_prMaxAggregateInputType = {
    id?: true;
    patient_id?: true;
    numero_formulaire_terrain?: true;
    code_smpau?: true;
    no_autor?: true;
    etat_rapport?: true;
    created_at?: true;
    updated_at?: true;
};
export type R_rapport_prCountAggregateInputType = {
    id?: true;
    patient_id?: true;
    numero_formulaire_terrain?: true;
    code_smpau?: true;
    no_autor?: true;
    etat_rapport?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type R_rapport_prAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which r_rapport_pr to aggregate.
     */
    where?: Prisma.r_rapport_prWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of r_rapport_prs to fetch.
     */
    orderBy?: Prisma.r_rapport_prOrderByWithRelationInput | Prisma.r_rapport_prOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.r_rapport_prWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` r_rapport_prs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` r_rapport_prs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned r_rapport_prs
    **/
    _count?: true | R_rapport_prCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: R_rapport_prAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: R_rapport_prSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: R_rapport_prMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: R_rapport_prMaxAggregateInputType;
};
export type GetR_rapport_prAggregateType<T extends R_rapport_prAggregateArgs> = {
    [P in keyof T & keyof AggregateR_rapport_pr]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateR_rapport_pr[P]> : Prisma.GetScalarType<T[P], AggregateR_rapport_pr[P]>;
};
export type r_rapport_prGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.r_rapport_prWhereInput;
    orderBy?: Prisma.r_rapport_prOrderByWithAggregationInput | Prisma.r_rapport_prOrderByWithAggregationInput[];
    by: Prisma.R_rapport_prScalarFieldEnum[] | Prisma.R_rapport_prScalarFieldEnum;
    having?: Prisma.r_rapport_prScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: R_rapport_prCountAggregateInputType | true;
    _avg?: R_rapport_prAvgAggregateInputType;
    _sum?: R_rapport_prSumAggregateInputType;
    _min?: R_rapport_prMinAggregateInputType;
    _max?: R_rapport_prMaxAggregateInputType;
};
export type R_rapport_prGroupByOutputType = {
    id: number;
    patient_id: number;
    numero_formulaire_terrain: string | null;
    code_smpau: string;
    no_autor: string | null;
    etat_rapport: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: R_rapport_prCountAggregateOutputType | null;
    _avg: R_rapport_prAvgAggregateOutputType | null;
    _sum: R_rapport_prSumAggregateOutputType | null;
    _min: R_rapport_prMinAggregateOutputType | null;
    _max: R_rapport_prMaxAggregateOutputType | null;
};
type GetR_rapport_prGroupByPayload<T extends r_rapport_prGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<R_rapport_prGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof R_rapport_prGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], R_rapport_prGroupByOutputType[P]> : Prisma.GetScalarType<T[P], R_rapport_prGroupByOutputType[P]>;
}>>;
export type r_rapport_prWhereInput = {
    AND?: Prisma.r_rapport_prWhereInput | Prisma.r_rapport_prWhereInput[];
    OR?: Prisma.r_rapport_prWhereInput[];
    NOT?: Prisma.r_rapport_prWhereInput | Prisma.r_rapport_prWhereInput[];
    id?: Prisma.IntFilter<"r_rapport_pr"> | number;
    patient_id?: Prisma.IntFilter<"r_rapport_pr"> | number;
    numero_formulaire_terrain?: Prisma.StringNullableFilter<"r_rapport_pr"> | string | null;
    code_smpau?: Prisma.StringFilter<"r_rapport_pr"> | string;
    no_autor?: Prisma.StringNullableFilter<"r_rapport_pr"> | string | null;
    etat_rapport?: Prisma.StringNullableFilter<"r_rapport_pr"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"r_rapport_pr"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"r_rapport_pr"> | Date | string | null;
    patient?: Prisma.XOR<Prisma.PatientScalarRelationFilter, Prisma.patientWhereInput>;
    r_rapport_pr_intervenant?: Prisma.R_rapport_pr_intervenantListRelationFilter;
    s01_prise_en_charge?: Prisma.XOR<Prisma.S01_prise_en_chargeNullableScalarRelationFilter, Prisma.s01_prise_en_chargeWhereInput> | null;
    s02_service_pr?: Prisma.XOR<Prisma.S02_service_prNullableScalarRelationFilter, Prisma.s02_service_prWhereInput> | null;
    s03_arrivee_usager?: Prisma.XOR<Prisma.S03_arrivee_usagerNullableScalarRelationFilter, Prisma.s03_arrivee_usagerWhereInput> | null;
    s04_approche_initiale?: Prisma.XOR<Prisma.S04_approche_initialeNullableScalarRelationFilter, Prisma.s04_approche_initialeWhereInput> | null;
    s05_rapport_nature_cas?: Prisma.S05_rapport_nature_casListRelationFilter;
    s05_nature_cas_info?: Prisma.XOR<Prisma.S05_nature_cas_infoNullableScalarRelationFilter, Prisma.s05_nature_cas_infoWhereInput> | null;
    s06_rapport_antecedent?: Prisma.S06_rapport_antecedentListRelationFilter;
    s07_maladies_infectieuses_info?: Prisma.XOR<Prisma.S07_maladies_infectieuses_infoNullableScalarRelationFilter, Prisma.s07_maladies_infectieuses_infoWhereInput> | null;
    s07_rapport_maladie_infectieuse?: Prisma.S07_rapport_maladie_infectieuseListRelationFilter;
    s08_allergies_info?: Prisma.XOR<Prisma.S08_allergies_infoNullableScalarRelationFilter, Prisma.s08_allergies_infoWhereInput> | null;
    s08_rapport_allergie?: Prisma.S08_rapport_allergieListRelationFilter;
    s09_rapport_mecanisme_trauma?: Prisma.S09_rapport_mecanisme_traumaListRelationFilter;
    s09_mecanisme_trauma_info?: Prisma.XOR<Prisma.S09_mecanisme_trauma_infoNullableScalarRelationFilter, Prisma.s09_mecanisme_trauma_infoWhereInput> | null;
    s10_trauma_info?: Prisma.XOR<Prisma.S10_trauma_infoNullableScalarRelationFilter, Prisma.s10_trauma_infoWhereInput> | null;
    s10_trauma_constat?: Prisma.S10_trauma_constatListRelationFilter;
    s11_support_clinique_info?: Prisma.XOR<Prisma.S11_support_clinique_infoNullableScalarRelationFilter, Prisma.s11_support_clinique_infoWhereInput> | null;
    s12_signe_vital?: Prisma.S12_signe_vitalListRelationFilter;
    s13_info?: Prisma.XOR<Prisma.S13_infoNullableScalarRelationFilter, Prisma.s13_infoWhereInput> | null;
    s13_arret_cardiaque?: Prisma.XOR<Prisma.S13_arret_cardiaqueNullableScalarRelationFilter, Prisma.s13_arret_cardiaqueWhereInput> | null;
    s13_voies_aeriennes?: Prisma.XOR<Prisma.S13_voies_aeriennesNullableScalarRelationFilter, Prisma.s13_voies_aeriennesWhereInput> | null;
    s13_hemorragies?: Prisma.XOR<Prisma.S13_hemorragiesNullableScalarRelationFilter, Prisma.s13_hemorragiesWhereInput> | null;
    s13_immobilisations?: Prisma.XOR<Prisma.S13_immobilisationsNullableScalarRelationFilter, Prisma.s13_immobilisationsWhereInput> | null;
    s13_accouchement?: Prisma.XOR<Prisma.S13_accouchementNullableScalarRelationFilter, Prisma.s13_accouchementWhereInput> | null;
    s13_medicaments?: Prisma.XOR<Prisma.S13_medicamentsNullableScalarRelationFilter, Prisma.s13_medicamentsWhereInput> | null;
    s14_entreprise_ambulanciere?: Prisma.XOR<Prisma.S14_entreprise_ambulanciereNullableScalarRelationFilter, Prisma.s14_entreprise_ambulanciereWhereInput> | null;
    s15_autres_renseignements?: Prisma.XOR<Prisma.S15_autres_renseignementsNullableScalarRelationFilter, Prisma.s15_autres_renseignementsWhereInput> | null;
};
export type r_rapport_prOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    patient_id?: Prisma.SortOrder;
    numero_formulaire_terrain?: Prisma.SortOrderInput | Prisma.SortOrder;
    code_smpau?: Prisma.SortOrder;
    no_autor?: Prisma.SortOrderInput | Prisma.SortOrder;
    etat_rapport?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    patient?: Prisma.patientOrderByWithRelationInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantOrderByRelationAggregateInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeOrderByWithRelationInput;
    s02_service_pr?: Prisma.s02_service_prOrderByWithRelationInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerOrderByWithRelationInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeOrderByWithRelationInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casOrderByRelationAggregateInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoOrderByWithRelationInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentOrderByRelationAggregateInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoOrderByWithRelationInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseOrderByRelationAggregateInput;
    s08_allergies_info?: Prisma.s08_allergies_infoOrderByWithRelationInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieOrderByRelationAggregateInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaOrderByRelationAggregateInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoOrderByWithRelationInput;
    s10_trauma_info?: Prisma.s10_trauma_infoOrderByWithRelationInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatOrderByRelationAggregateInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoOrderByWithRelationInput;
    s12_signe_vital?: Prisma.s12_signe_vitalOrderByRelationAggregateInput;
    s13_info?: Prisma.s13_infoOrderByWithRelationInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueOrderByWithRelationInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesOrderByWithRelationInput;
    s13_hemorragies?: Prisma.s13_hemorragiesOrderByWithRelationInput;
    s13_immobilisations?: Prisma.s13_immobilisationsOrderByWithRelationInput;
    s13_accouchement?: Prisma.s13_accouchementOrderByWithRelationInput;
    s13_medicaments?: Prisma.s13_medicamentsOrderByWithRelationInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereOrderByWithRelationInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsOrderByWithRelationInput;
};
export type r_rapport_prWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.r_rapport_prWhereInput | Prisma.r_rapport_prWhereInput[];
    OR?: Prisma.r_rapport_prWhereInput[];
    NOT?: Prisma.r_rapport_prWhereInput | Prisma.r_rapport_prWhereInput[];
    patient_id?: Prisma.IntFilter<"r_rapport_pr"> | number;
    numero_formulaire_terrain?: Prisma.StringNullableFilter<"r_rapport_pr"> | string | null;
    code_smpau?: Prisma.StringFilter<"r_rapport_pr"> | string;
    no_autor?: Prisma.StringNullableFilter<"r_rapport_pr"> | string | null;
    etat_rapport?: Prisma.StringNullableFilter<"r_rapport_pr"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"r_rapport_pr"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"r_rapport_pr"> | Date | string | null;
    patient?: Prisma.XOR<Prisma.PatientScalarRelationFilter, Prisma.patientWhereInput>;
    r_rapport_pr_intervenant?: Prisma.R_rapport_pr_intervenantListRelationFilter;
    s01_prise_en_charge?: Prisma.XOR<Prisma.S01_prise_en_chargeNullableScalarRelationFilter, Prisma.s01_prise_en_chargeWhereInput> | null;
    s02_service_pr?: Prisma.XOR<Prisma.S02_service_prNullableScalarRelationFilter, Prisma.s02_service_prWhereInput> | null;
    s03_arrivee_usager?: Prisma.XOR<Prisma.S03_arrivee_usagerNullableScalarRelationFilter, Prisma.s03_arrivee_usagerWhereInput> | null;
    s04_approche_initiale?: Prisma.XOR<Prisma.S04_approche_initialeNullableScalarRelationFilter, Prisma.s04_approche_initialeWhereInput> | null;
    s05_rapport_nature_cas?: Prisma.S05_rapport_nature_casListRelationFilter;
    s05_nature_cas_info?: Prisma.XOR<Prisma.S05_nature_cas_infoNullableScalarRelationFilter, Prisma.s05_nature_cas_infoWhereInput> | null;
    s06_rapport_antecedent?: Prisma.S06_rapport_antecedentListRelationFilter;
    s07_maladies_infectieuses_info?: Prisma.XOR<Prisma.S07_maladies_infectieuses_infoNullableScalarRelationFilter, Prisma.s07_maladies_infectieuses_infoWhereInput> | null;
    s07_rapport_maladie_infectieuse?: Prisma.S07_rapport_maladie_infectieuseListRelationFilter;
    s08_allergies_info?: Prisma.XOR<Prisma.S08_allergies_infoNullableScalarRelationFilter, Prisma.s08_allergies_infoWhereInput> | null;
    s08_rapport_allergie?: Prisma.S08_rapport_allergieListRelationFilter;
    s09_rapport_mecanisme_trauma?: Prisma.S09_rapport_mecanisme_traumaListRelationFilter;
    s09_mecanisme_trauma_info?: Prisma.XOR<Prisma.S09_mecanisme_trauma_infoNullableScalarRelationFilter, Prisma.s09_mecanisme_trauma_infoWhereInput> | null;
    s10_trauma_info?: Prisma.XOR<Prisma.S10_trauma_infoNullableScalarRelationFilter, Prisma.s10_trauma_infoWhereInput> | null;
    s10_trauma_constat?: Prisma.S10_trauma_constatListRelationFilter;
    s11_support_clinique_info?: Prisma.XOR<Prisma.S11_support_clinique_infoNullableScalarRelationFilter, Prisma.s11_support_clinique_infoWhereInput> | null;
    s12_signe_vital?: Prisma.S12_signe_vitalListRelationFilter;
    s13_info?: Prisma.XOR<Prisma.S13_infoNullableScalarRelationFilter, Prisma.s13_infoWhereInput> | null;
    s13_arret_cardiaque?: Prisma.XOR<Prisma.S13_arret_cardiaqueNullableScalarRelationFilter, Prisma.s13_arret_cardiaqueWhereInput> | null;
    s13_voies_aeriennes?: Prisma.XOR<Prisma.S13_voies_aeriennesNullableScalarRelationFilter, Prisma.s13_voies_aeriennesWhereInput> | null;
    s13_hemorragies?: Prisma.XOR<Prisma.S13_hemorragiesNullableScalarRelationFilter, Prisma.s13_hemorragiesWhereInput> | null;
    s13_immobilisations?: Prisma.XOR<Prisma.S13_immobilisationsNullableScalarRelationFilter, Prisma.s13_immobilisationsWhereInput> | null;
    s13_accouchement?: Prisma.XOR<Prisma.S13_accouchementNullableScalarRelationFilter, Prisma.s13_accouchementWhereInput> | null;
    s13_medicaments?: Prisma.XOR<Prisma.S13_medicamentsNullableScalarRelationFilter, Prisma.s13_medicamentsWhereInput> | null;
    s14_entreprise_ambulanciere?: Prisma.XOR<Prisma.S14_entreprise_ambulanciereNullableScalarRelationFilter, Prisma.s14_entreprise_ambulanciereWhereInput> | null;
    s15_autres_renseignements?: Prisma.XOR<Prisma.S15_autres_renseignementsNullableScalarRelationFilter, Prisma.s15_autres_renseignementsWhereInput> | null;
}, "id">;
export type r_rapport_prOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    patient_id?: Prisma.SortOrder;
    numero_formulaire_terrain?: Prisma.SortOrderInput | Prisma.SortOrder;
    code_smpau?: Prisma.SortOrder;
    no_autor?: Prisma.SortOrderInput | Prisma.SortOrder;
    etat_rapport?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.r_rapport_prCountOrderByAggregateInput;
    _avg?: Prisma.r_rapport_prAvgOrderByAggregateInput;
    _max?: Prisma.r_rapport_prMaxOrderByAggregateInput;
    _min?: Prisma.r_rapport_prMinOrderByAggregateInput;
    _sum?: Prisma.r_rapport_prSumOrderByAggregateInput;
};
export type r_rapport_prScalarWhereWithAggregatesInput = {
    AND?: Prisma.r_rapport_prScalarWhereWithAggregatesInput | Prisma.r_rapport_prScalarWhereWithAggregatesInput[];
    OR?: Prisma.r_rapport_prScalarWhereWithAggregatesInput[];
    NOT?: Prisma.r_rapport_prScalarWhereWithAggregatesInput | Prisma.r_rapport_prScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"r_rapport_pr"> | number;
    patient_id?: Prisma.IntWithAggregatesFilter<"r_rapport_pr"> | number;
    numero_formulaire_terrain?: Prisma.StringNullableWithAggregatesFilter<"r_rapport_pr"> | string | null;
    code_smpau?: Prisma.StringWithAggregatesFilter<"r_rapport_pr"> | string;
    no_autor?: Prisma.StringNullableWithAggregatesFilter<"r_rapport_pr"> | string | null;
    etat_rapport?: Prisma.StringNullableWithAggregatesFilter<"r_rapport_pr"> | string | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"r_rapport_pr"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"r_rapport_pr"> | Date | string | null;
};
export type r_rapport_prCreateInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUpdateInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateManyInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type r_rapport_prUpdateManyMutationInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type r_rapport_prUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type R_rapport_prListRelationFilter = {
    every?: Prisma.r_rapport_prWhereInput;
    some?: Prisma.r_rapport_prWhereInput;
    none?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type r_rapport_prCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patient_id?: Prisma.SortOrder;
    numero_formulaire_terrain?: Prisma.SortOrder;
    code_smpau?: Prisma.SortOrder;
    no_autor?: Prisma.SortOrder;
    etat_rapport?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type r_rapport_prAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patient_id?: Prisma.SortOrder;
};
export type r_rapport_prMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patient_id?: Prisma.SortOrder;
    numero_formulaire_terrain?: Prisma.SortOrder;
    code_smpau?: Prisma.SortOrder;
    no_autor?: Prisma.SortOrder;
    etat_rapport?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type r_rapport_prMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patient_id?: Prisma.SortOrder;
    numero_formulaire_terrain?: Prisma.SortOrder;
    code_smpau?: Prisma.SortOrder;
    no_autor?: Prisma.SortOrder;
    etat_rapport?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type r_rapport_prSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    patient_id?: Prisma.SortOrder;
};
export type R_rapport_prScalarRelationFilter = {
    is?: Prisma.r_rapport_prWhereInput;
    isNot?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutPatientInput, Prisma.r_rapport_prUncheckedCreateWithoutPatientInput> | Prisma.r_rapport_prCreateWithoutPatientInput[] | Prisma.r_rapport_prUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutPatientInput | Prisma.r_rapport_prCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.r_rapport_prCreateManyPatientInputEnvelope;
    connect?: Prisma.r_rapport_prWhereUniqueInput | Prisma.r_rapport_prWhereUniqueInput[];
};
export type r_rapport_prUncheckedCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutPatientInput, Prisma.r_rapport_prUncheckedCreateWithoutPatientInput> | Prisma.r_rapport_prCreateWithoutPatientInput[] | Prisma.r_rapport_prUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutPatientInput | Prisma.r_rapport_prCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.r_rapport_prCreateManyPatientInputEnvelope;
    connect?: Prisma.r_rapport_prWhereUniqueInput | Prisma.r_rapport_prWhereUniqueInput[];
};
export type r_rapport_prUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutPatientInput, Prisma.r_rapport_prUncheckedCreateWithoutPatientInput> | Prisma.r_rapport_prCreateWithoutPatientInput[] | Prisma.r_rapport_prUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutPatientInput | Prisma.r_rapport_prCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.r_rapport_prUpsertWithWhereUniqueWithoutPatientInput | Prisma.r_rapport_prUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.r_rapport_prCreateManyPatientInputEnvelope;
    set?: Prisma.r_rapport_prWhereUniqueInput | Prisma.r_rapport_prWhereUniqueInput[];
    disconnect?: Prisma.r_rapport_prWhereUniqueInput | Prisma.r_rapport_prWhereUniqueInput[];
    delete?: Prisma.r_rapport_prWhereUniqueInput | Prisma.r_rapport_prWhereUniqueInput[];
    connect?: Prisma.r_rapport_prWhereUniqueInput | Prisma.r_rapport_prWhereUniqueInput[];
    update?: Prisma.r_rapport_prUpdateWithWhereUniqueWithoutPatientInput | Prisma.r_rapport_prUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.r_rapport_prUpdateManyWithWhereWithoutPatientInput | Prisma.r_rapport_prUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.r_rapport_prScalarWhereInput | Prisma.r_rapport_prScalarWhereInput[];
};
export type r_rapport_prUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutPatientInput, Prisma.r_rapport_prUncheckedCreateWithoutPatientInput> | Prisma.r_rapport_prCreateWithoutPatientInput[] | Prisma.r_rapport_prUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutPatientInput | Prisma.r_rapport_prCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.r_rapport_prUpsertWithWhereUniqueWithoutPatientInput | Prisma.r_rapport_prUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.r_rapport_prCreateManyPatientInputEnvelope;
    set?: Prisma.r_rapport_prWhereUniqueInput | Prisma.r_rapport_prWhereUniqueInput[];
    disconnect?: Prisma.r_rapport_prWhereUniqueInput | Prisma.r_rapport_prWhereUniqueInput[];
    delete?: Prisma.r_rapport_prWhereUniqueInput | Prisma.r_rapport_prWhereUniqueInput[];
    connect?: Prisma.r_rapport_prWhereUniqueInput | Prisma.r_rapport_prWhereUniqueInput[];
    update?: Prisma.r_rapport_prUpdateWithWhereUniqueWithoutPatientInput | Prisma.r_rapport_prUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.r_rapport_prUpdateManyWithWhereWithoutPatientInput | Prisma.r_rapport_prUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.r_rapport_prScalarWhereInput | Prisma.r_rapport_prScalarWhereInput[];
};
export type r_rapport_prCreateNestedOneWithoutR_rapport_pr_intervenantInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutR_rapport_pr_intervenantInput, Prisma.r_rapport_prUncheckedCreateWithoutR_rapport_pr_intervenantInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutR_rapport_pr_intervenantInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutR_rapport_pr_intervenantNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutR_rapport_pr_intervenantInput, Prisma.r_rapport_prUncheckedCreateWithoutR_rapport_pr_intervenantInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutR_rapport_pr_intervenantInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutR_rapport_pr_intervenantInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutR_rapport_pr_intervenantInput, Prisma.r_rapport_prUpdateWithoutR_rapport_pr_intervenantInput>, Prisma.r_rapport_prUncheckedUpdateWithoutR_rapport_pr_intervenantInput>;
};
export type r_rapport_prCreateNestedOneWithoutS01_prise_en_chargeInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS01_prise_en_chargeInput, Prisma.r_rapport_prUncheckedCreateWithoutS01_prise_en_chargeInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS01_prise_en_chargeInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS01_prise_en_chargeNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS01_prise_en_chargeInput, Prisma.r_rapport_prUncheckedCreateWithoutS01_prise_en_chargeInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS01_prise_en_chargeInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS01_prise_en_chargeInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS01_prise_en_chargeInput, Prisma.r_rapport_prUpdateWithoutS01_prise_en_chargeInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS01_prise_en_chargeInput>;
};
export type r_rapport_prCreateNestedOneWithoutS02_service_prInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS02_service_prInput, Prisma.r_rapport_prUncheckedCreateWithoutS02_service_prInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS02_service_prInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS02_service_prNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS02_service_prInput, Prisma.r_rapport_prUncheckedCreateWithoutS02_service_prInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS02_service_prInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS02_service_prInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS02_service_prInput, Prisma.r_rapport_prUpdateWithoutS02_service_prInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS02_service_prInput>;
};
export type r_rapport_prCreateNestedOneWithoutS03_arrivee_usagerInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS03_arrivee_usagerInput, Prisma.r_rapport_prUncheckedCreateWithoutS03_arrivee_usagerInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS03_arrivee_usagerInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS03_arrivee_usagerNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS03_arrivee_usagerInput, Prisma.r_rapport_prUncheckedCreateWithoutS03_arrivee_usagerInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS03_arrivee_usagerInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS03_arrivee_usagerInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS03_arrivee_usagerInput, Prisma.r_rapport_prUpdateWithoutS03_arrivee_usagerInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS03_arrivee_usagerInput>;
};
export type r_rapport_prCreateNestedOneWithoutS04_approche_initialeInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS04_approche_initialeInput, Prisma.r_rapport_prUncheckedCreateWithoutS04_approche_initialeInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS04_approche_initialeInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS04_approche_initialeNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS04_approche_initialeInput, Prisma.r_rapport_prUncheckedCreateWithoutS04_approche_initialeInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS04_approche_initialeInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS04_approche_initialeInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS04_approche_initialeInput, Prisma.r_rapport_prUpdateWithoutS04_approche_initialeInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS04_approche_initialeInput>;
};
export type r_rapport_prCreateNestedOneWithoutS05_rapport_nature_casInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS05_rapport_nature_casInput, Prisma.r_rapport_prUncheckedCreateWithoutS05_rapport_nature_casInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS05_rapport_nature_casInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS05_rapport_nature_casNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS05_rapport_nature_casInput, Prisma.r_rapport_prUncheckedCreateWithoutS05_rapport_nature_casInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS05_rapport_nature_casInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS05_rapport_nature_casInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS05_rapport_nature_casInput, Prisma.r_rapport_prUpdateWithoutS05_rapport_nature_casInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS05_rapport_nature_casInput>;
};
export type r_rapport_prCreateNestedOneWithoutS05_nature_cas_infoInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS05_nature_cas_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS05_nature_cas_infoInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS05_nature_cas_infoInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS05_nature_cas_infoNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS05_nature_cas_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS05_nature_cas_infoInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS05_nature_cas_infoInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS05_nature_cas_infoInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS05_nature_cas_infoInput, Prisma.r_rapport_prUpdateWithoutS05_nature_cas_infoInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS05_nature_cas_infoInput>;
};
export type r_rapport_prCreateNestedOneWithoutS06_rapport_antecedentInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS06_rapport_antecedentInput, Prisma.r_rapport_prUncheckedCreateWithoutS06_rapport_antecedentInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS06_rapport_antecedentInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS06_rapport_antecedentNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS06_rapport_antecedentInput, Prisma.r_rapport_prUncheckedCreateWithoutS06_rapport_antecedentInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS06_rapport_antecedentInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS06_rapport_antecedentInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS06_rapport_antecedentInput, Prisma.r_rapport_prUpdateWithoutS06_rapport_antecedentInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS06_rapport_antecedentInput>;
};
export type r_rapport_prCreateNestedOneWithoutS07_maladies_infectieuses_infoInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS07_maladies_infectieuses_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS07_maladies_infectieuses_infoInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS07_maladies_infectieuses_infoInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS07_maladies_infectieuses_infoNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS07_maladies_infectieuses_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS07_maladies_infectieuses_infoInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS07_maladies_infectieuses_infoInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS07_maladies_infectieuses_infoInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS07_maladies_infectieuses_infoInput, Prisma.r_rapport_prUpdateWithoutS07_maladies_infectieuses_infoInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS07_maladies_infectieuses_infoInput>;
};
export type r_rapport_prCreateNestedOneWithoutS07_rapport_maladie_infectieuseInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS07_rapport_maladie_infectieuseInput, Prisma.r_rapport_prUncheckedCreateWithoutS07_rapport_maladie_infectieuseInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS07_rapport_maladie_infectieuseInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS07_rapport_maladie_infectieuseNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS07_rapport_maladie_infectieuseInput, Prisma.r_rapport_prUncheckedCreateWithoutS07_rapport_maladie_infectieuseInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS07_rapport_maladie_infectieuseInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS07_rapport_maladie_infectieuseInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS07_rapport_maladie_infectieuseInput, Prisma.r_rapport_prUpdateWithoutS07_rapport_maladie_infectieuseInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS07_rapport_maladie_infectieuseInput>;
};
export type r_rapport_prCreateNestedOneWithoutS08_allergies_infoInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS08_allergies_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS08_allergies_infoInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS08_allergies_infoInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS08_allergies_infoNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS08_allergies_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS08_allergies_infoInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS08_allergies_infoInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS08_allergies_infoInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS08_allergies_infoInput, Prisma.r_rapport_prUpdateWithoutS08_allergies_infoInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS08_allergies_infoInput>;
};
export type r_rapport_prCreateNestedOneWithoutS08_rapport_allergieInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS08_rapport_allergieInput, Prisma.r_rapport_prUncheckedCreateWithoutS08_rapport_allergieInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS08_rapport_allergieInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS08_rapport_allergieNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS08_rapport_allergieInput, Prisma.r_rapport_prUncheckedCreateWithoutS08_rapport_allergieInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS08_rapport_allergieInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS08_rapport_allergieInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS08_rapport_allergieInput, Prisma.r_rapport_prUpdateWithoutS08_rapport_allergieInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS08_rapport_allergieInput>;
};
export type r_rapport_prCreateNestedOneWithoutS09_rapport_mecanisme_traumaInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS09_rapport_mecanisme_traumaInput, Prisma.r_rapport_prUncheckedCreateWithoutS09_rapport_mecanisme_traumaInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS09_rapport_mecanisme_traumaInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS09_rapport_mecanisme_traumaNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS09_rapport_mecanisme_traumaInput, Prisma.r_rapport_prUncheckedCreateWithoutS09_rapport_mecanisme_traumaInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS09_rapport_mecanisme_traumaInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS09_rapport_mecanisme_traumaInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS09_rapport_mecanisme_traumaInput, Prisma.r_rapport_prUpdateWithoutS09_rapport_mecanisme_traumaInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS09_rapport_mecanisme_traumaInput>;
};
export type r_rapport_prCreateNestedOneWithoutS09_mecanisme_trauma_infoInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS09_mecanisme_trauma_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS09_mecanisme_trauma_infoInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS09_mecanisme_trauma_infoInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS09_mecanisme_trauma_infoNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS09_mecanisme_trauma_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS09_mecanisme_trauma_infoInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS09_mecanisme_trauma_infoInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS09_mecanisme_trauma_infoInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS09_mecanisme_trauma_infoInput, Prisma.r_rapport_prUpdateWithoutS09_mecanisme_trauma_infoInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS09_mecanisme_trauma_infoInput>;
};
export type r_rapport_prCreateNestedOneWithoutS10_trauma_infoInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS10_trauma_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS10_trauma_infoInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS10_trauma_infoInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS10_trauma_infoNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS10_trauma_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS10_trauma_infoInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS10_trauma_infoInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS10_trauma_infoInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS10_trauma_infoInput, Prisma.r_rapport_prUpdateWithoutS10_trauma_infoInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS10_trauma_infoInput>;
};
export type r_rapport_prCreateNestedOneWithoutS10_trauma_constatInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS10_trauma_constatInput, Prisma.r_rapport_prUncheckedCreateWithoutS10_trauma_constatInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS10_trauma_constatInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS10_trauma_constatNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS10_trauma_constatInput, Prisma.r_rapport_prUncheckedCreateWithoutS10_trauma_constatInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS10_trauma_constatInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS10_trauma_constatInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS10_trauma_constatInput, Prisma.r_rapport_prUpdateWithoutS10_trauma_constatInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS10_trauma_constatInput>;
};
export type r_rapport_prCreateNestedOneWithoutS11_support_clinique_infoInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS11_support_clinique_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS11_support_clinique_infoInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS11_support_clinique_infoInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS11_support_clinique_infoNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS11_support_clinique_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS11_support_clinique_infoInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS11_support_clinique_infoInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS11_support_clinique_infoInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS11_support_clinique_infoInput, Prisma.r_rapport_prUpdateWithoutS11_support_clinique_infoInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS11_support_clinique_infoInput>;
};
export type r_rapport_prCreateNestedOneWithoutS12_signe_vitalInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS12_signe_vitalInput, Prisma.r_rapport_prUncheckedCreateWithoutS12_signe_vitalInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS12_signe_vitalInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS12_signe_vitalNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS12_signe_vitalInput, Prisma.r_rapport_prUncheckedCreateWithoutS12_signe_vitalInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS12_signe_vitalInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS12_signe_vitalInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS12_signe_vitalInput, Prisma.r_rapport_prUpdateWithoutS12_signe_vitalInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS12_signe_vitalInput>;
};
export type r_rapport_prCreateNestedOneWithoutS13_infoInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_infoInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS13_infoInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS13_infoNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_infoInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS13_infoInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS13_infoInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS13_infoInput, Prisma.r_rapport_prUpdateWithoutS13_infoInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS13_infoInput>;
};
export type r_rapport_prCreateNestedOneWithoutS13_arret_cardiaqueInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_arret_cardiaqueInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_arret_cardiaqueInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS13_arret_cardiaqueInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS13_arret_cardiaqueNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_arret_cardiaqueInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_arret_cardiaqueInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS13_arret_cardiaqueInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS13_arret_cardiaqueInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS13_arret_cardiaqueInput, Prisma.r_rapport_prUpdateWithoutS13_arret_cardiaqueInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS13_arret_cardiaqueInput>;
};
export type r_rapport_prCreateNestedOneWithoutS13_voies_aeriennesInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_voies_aeriennesInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_voies_aeriennesInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS13_voies_aeriennesInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS13_voies_aeriennesNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_voies_aeriennesInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_voies_aeriennesInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS13_voies_aeriennesInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS13_voies_aeriennesInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS13_voies_aeriennesInput, Prisma.r_rapport_prUpdateWithoutS13_voies_aeriennesInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS13_voies_aeriennesInput>;
};
export type r_rapport_prCreateNestedOneWithoutS13_hemorragiesInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_hemorragiesInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_hemorragiesInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS13_hemorragiesInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS13_hemorragiesNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_hemorragiesInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_hemorragiesInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS13_hemorragiesInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS13_hemorragiesInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS13_hemorragiesInput, Prisma.r_rapport_prUpdateWithoutS13_hemorragiesInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS13_hemorragiesInput>;
};
export type r_rapport_prCreateNestedOneWithoutS13_immobilisationsInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_immobilisationsInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_immobilisationsInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS13_immobilisationsInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS13_immobilisationsNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_immobilisationsInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_immobilisationsInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS13_immobilisationsInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS13_immobilisationsInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS13_immobilisationsInput, Prisma.r_rapport_prUpdateWithoutS13_immobilisationsInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS13_immobilisationsInput>;
};
export type r_rapport_prCreateNestedOneWithoutS13_accouchementInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_accouchementInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_accouchementInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS13_accouchementInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS13_accouchementNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_accouchementInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_accouchementInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS13_accouchementInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS13_accouchementInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS13_accouchementInput, Prisma.r_rapport_prUpdateWithoutS13_accouchementInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS13_accouchementInput>;
};
export type r_rapport_prCreateNestedOneWithoutS13_medicamentsInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_medicamentsInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_medicamentsInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS13_medicamentsInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS13_medicamentsNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_medicamentsInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_medicamentsInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS13_medicamentsInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS13_medicamentsInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS13_medicamentsInput, Prisma.r_rapport_prUpdateWithoutS13_medicamentsInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS13_medicamentsInput>;
};
export type r_rapport_prCreateNestedOneWithoutS14_entreprise_ambulanciereInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS14_entreprise_ambulanciereInput, Prisma.r_rapport_prUncheckedCreateWithoutS14_entreprise_ambulanciereInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS14_entreprise_ambulanciereInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS14_entreprise_ambulanciereNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS14_entreprise_ambulanciereInput, Prisma.r_rapport_prUncheckedCreateWithoutS14_entreprise_ambulanciereInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS14_entreprise_ambulanciereInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS14_entreprise_ambulanciereInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS14_entreprise_ambulanciereInput, Prisma.r_rapport_prUpdateWithoutS14_entreprise_ambulanciereInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS14_entreprise_ambulanciereInput>;
};
export type r_rapport_prCreateNestedOneWithoutS15_autres_renseignementsInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS15_autres_renseignementsInput, Prisma.r_rapport_prUncheckedCreateWithoutS15_autres_renseignementsInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS15_autres_renseignementsInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
};
export type r_rapport_prUpdateOneRequiredWithoutS15_autres_renseignementsNestedInput = {
    create?: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS15_autres_renseignementsInput, Prisma.r_rapport_prUncheckedCreateWithoutS15_autres_renseignementsInput>;
    connectOrCreate?: Prisma.r_rapport_prCreateOrConnectWithoutS15_autres_renseignementsInput;
    upsert?: Prisma.r_rapport_prUpsertWithoutS15_autres_renseignementsInput;
    connect?: Prisma.r_rapport_prWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.r_rapport_prUpdateToOneWithWhereWithoutS15_autres_renseignementsInput, Prisma.r_rapport_prUpdateWithoutS15_autres_renseignementsInput>, Prisma.r_rapport_prUncheckedUpdateWithoutS15_autres_renseignementsInput>;
};
export type r_rapport_prCreateWithoutPatientInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutPatientInput = {
    id?: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutPatientInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutPatientInput, Prisma.r_rapport_prUncheckedCreateWithoutPatientInput>;
};
export type r_rapport_prCreateManyPatientInputEnvelope = {
    data: Prisma.r_rapport_prCreateManyPatientInput | Prisma.r_rapport_prCreateManyPatientInput[];
    skipDuplicates?: boolean;
};
export type r_rapport_prUpsertWithWhereUniqueWithoutPatientInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutPatientInput, Prisma.r_rapport_prUncheckedUpdateWithoutPatientInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutPatientInput, Prisma.r_rapport_prUncheckedCreateWithoutPatientInput>;
};
export type r_rapport_prUpdateWithWhereUniqueWithoutPatientInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutPatientInput, Prisma.r_rapport_prUncheckedUpdateWithoutPatientInput>;
};
export type r_rapport_prUpdateManyWithWhereWithoutPatientInput = {
    where: Prisma.r_rapport_prScalarWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateManyMutationInput, Prisma.r_rapport_prUncheckedUpdateManyWithoutPatientInput>;
};
export type r_rapport_prScalarWhereInput = {
    AND?: Prisma.r_rapport_prScalarWhereInput | Prisma.r_rapport_prScalarWhereInput[];
    OR?: Prisma.r_rapport_prScalarWhereInput[];
    NOT?: Prisma.r_rapport_prScalarWhereInput | Prisma.r_rapport_prScalarWhereInput[];
    id?: Prisma.IntFilter<"r_rapport_pr"> | number;
    patient_id?: Prisma.IntFilter<"r_rapport_pr"> | number;
    numero_formulaire_terrain?: Prisma.StringNullableFilter<"r_rapport_pr"> | string | null;
    code_smpau?: Prisma.StringFilter<"r_rapport_pr"> | string;
    no_autor?: Prisma.StringNullableFilter<"r_rapport_pr"> | string | null;
    etat_rapport?: Prisma.StringNullableFilter<"r_rapport_pr"> | string | null;
    created_at?: Prisma.DateTimeNullableFilter<"r_rapport_pr"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"r_rapport_pr"> | Date | string | null;
};
export type r_rapport_prCreateWithoutR_rapport_pr_intervenantInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutR_rapport_pr_intervenantInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutR_rapport_pr_intervenantInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutR_rapport_pr_intervenantInput, Prisma.r_rapport_prUncheckedCreateWithoutR_rapport_pr_intervenantInput>;
};
export type r_rapport_prUpsertWithoutR_rapport_pr_intervenantInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutR_rapport_pr_intervenantInput, Prisma.r_rapport_prUncheckedUpdateWithoutR_rapport_pr_intervenantInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutR_rapport_pr_intervenantInput, Prisma.r_rapport_prUncheckedCreateWithoutR_rapport_pr_intervenantInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutR_rapport_pr_intervenantInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutR_rapport_pr_intervenantInput, Prisma.r_rapport_prUncheckedUpdateWithoutR_rapport_pr_intervenantInput>;
};
export type r_rapport_prUpdateWithoutR_rapport_pr_intervenantInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutR_rapport_pr_intervenantInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS01_prise_en_chargeInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS01_prise_en_chargeInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS01_prise_en_chargeInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS01_prise_en_chargeInput, Prisma.r_rapport_prUncheckedCreateWithoutS01_prise_en_chargeInput>;
};
export type r_rapport_prUpsertWithoutS01_prise_en_chargeInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS01_prise_en_chargeInput, Prisma.r_rapport_prUncheckedUpdateWithoutS01_prise_en_chargeInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS01_prise_en_chargeInput, Prisma.r_rapport_prUncheckedCreateWithoutS01_prise_en_chargeInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS01_prise_en_chargeInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS01_prise_en_chargeInput, Prisma.r_rapport_prUncheckedUpdateWithoutS01_prise_en_chargeInput>;
};
export type r_rapport_prUpdateWithoutS01_prise_en_chargeInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS01_prise_en_chargeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS02_service_prInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS02_service_prInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS02_service_prInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS02_service_prInput, Prisma.r_rapport_prUncheckedCreateWithoutS02_service_prInput>;
};
export type r_rapport_prUpsertWithoutS02_service_prInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS02_service_prInput, Prisma.r_rapport_prUncheckedUpdateWithoutS02_service_prInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS02_service_prInput, Prisma.r_rapport_prUncheckedCreateWithoutS02_service_prInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS02_service_prInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS02_service_prInput, Prisma.r_rapport_prUncheckedUpdateWithoutS02_service_prInput>;
};
export type r_rapport_prUpdateWithoutS02_service_prInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS02_service_prInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS03_arrivee_usagerInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS03_arrivee_usagerInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS03_arrivee_usagerInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS03_arrivee_usagerInput, Prisma.r_rapport_prUncheckedCreateWithoutS03_arrivee_usagerInput>;
};
export type r_rapport_prUpsertWithoutS03_arrivee_usagerInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS03_arrivee_usagerInput, Prisma.r_rapport_prUncheckedUpdateWithoutS03_arrivee_usagerInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS03_arrivee_usagerInput, Prisma.r_rapport_prUncheckedCreateWithoutS03_arrivee_usagerInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS03_arrivee_usagerInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS03_arrivee_usagerInput, Prisma.r_rapport_prUncheckedUpdateWithoutS03_arrivee_usagerInput>;
};
export type r_rapport_prUpdateWithoutS03_arrivee_usagerInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS03_arrivee_usagerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS04_approche_initialeInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS04_approche_initialeInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS04_approche_initialeInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS04_approche_initialeInput, Prisma.r_rapport_prUncheckedCreateWithoutS04_approche_initialeInput>;
};
export type r_rapport_prUpsertWithoutS04_approche_initialeInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS04_approche_initialeInput, Prisma.r_rapport_prUncheckedUpdateWithoutS04_approche_initialeInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS04_approche_initialeInput, Prisma.r_rapport_prUncheckedCreateWithoutS04_approche_initialeInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS04_approche_initialeInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS04_approche_initialeInput, Prisma.r_rapport_prUncheckedUpdateWithoutS04_approche_initialeInput>;
};
export type r_rapport_prUpdateWithoutS04_approche_initialeInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS04_approche_initialeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS05_rapport_nature_casInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS05_rapport_nature_casInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS05_rapport_nature_casInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS05_rapport_nature_casInput, Prisma.r_rapport_prUncheckedCreateWithoutS05_rapport_nature_casInput>;
};
export type r_rapport_prUpsertWithoutS05_rapport_nature_casInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS05_rapport_nature_casInput, Prisma.r_rapport_prUncheckedUpdateWithoutS05_rapport_nature_casInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS05_rapport_nature_casInput, Prisma.r_rapport_prUncheckedCreateWithoutS05_rapport_nature_casInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS05_rapport_nature_casInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS05_rapport_nature_casInput, Prisma.r_rapport_prUncheckedUpdateWithoutS05_rapport_nature_casInput>;
};
export type r_rapport_prUpdateWithoutS05_rapport_nature_casInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS05_rapport_nature_casInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS05_nature_cas_infoInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS05_nature_cas_infoInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS05_nature_cas_infoInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS05_nature_cas_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS05_nature_cas_infoInput>;
};
export type r_rapport_prUpsertWithoutS05_nature_cas_infoInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS05_nature_cas_infoInput, Prisma.r_rapport_prUncheckedUpdateWithoutS05_nature_cas_infoInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS05_nature_cas_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS05_nature_cas_infoInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS05_nature_cas_infoInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS05_nature_cas_infoInput, Prisma.r_rapport_prUncheckedUpdateWithoutS05_nature_cas_infoInput>;
};
export type r_rapport_prUpdateWithoutS05_nature_cas_infoInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS05_nature_cas_infoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS06_rapport_antecedentInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS06_rapport_antecedentInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS06_rapport_antecedentInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS06_rapport_antecedentInput, Prisma.r_rapport_prUncheckedCreateWithoutS06_rapport_antecedentInput>;
};
export type r_rapport_prUpsertWithoutS06_rapport_antecedentInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS06_rapport_antecedentInput, Prisma.r_rapport_prUncheckedUpdateWithoutS06_rapport_antecedentInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS06_rapport_antecedentInput, Prisma.r_rapport_prUncheckedCreateWithoutS06_rapport_antecedentInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS06_rapport_antecedentInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS06_rapport_antecedentInput, Prisma.r_rapport_prUncheckedUpdateWithoutS06_rapport_antecedentInput>;
};
export type r_rapport_prUpdateWithoutS06_rapport_antecedentInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS06_rapport_antecedentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS07_maladies_infectieuses_infoInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS07_maladies_infectieuses_infoInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS07_maladies_infectieuses_infoInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS07_maladies_infectieuses_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS07_maladies_infectieuses_infoInput>;
};
export type r_rapport_prUpsertWithoutS07_maladies_infectieuses_infoInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS07_maladies_infectieuses_infoInput, Prisma.r_rapport_prUncheckedUpdateWithoutS07_maladies_infectieuses_infoInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS07_maladies_infectieuses_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS07_maladies_infectieuses_infoInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS07_maladies_infectieuses_infoInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS07_maladies_infectieuses_infoInput, Prisma.r_rapport_prUncheckedUpdateWithoutS07_maladies_infectieuses_infoInput>;
};
export type r_rapport_prUpdateWithoutS07_maladies_infectieuses_infoInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS07_maladies_infectieuses_infoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS07_rapport_maladie_infectieuseInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS07_rapport_maladie_infectieuseInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS07_rapport_maladie_infectieuseInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS07_rapport_maladie_infectieuseInput, Prisma.r_rapport_prUncheckedCreateWithoutS07_rapport_maladie_infectieuseInput>;
};
export type r_rapport_prUpsertWithoutS07_rapport_maladie_infectieuseInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS07_rapport_maladie_infectieuseInput, Prisma.r_rapport_prUncheckedUpdateWithoutS07_rapport_maladie_infectieuseInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS07_rapport_maladie_infectieuseInput, Prisma.r_rapport_prUncheckedCreateWithoutS07_rapport_maladie_infectieuseInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS07_rapport_maladie_infectieuseInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS07_rapport_maladie_infectieuseInput, Prisma.r_rapport_prUncheckedUpdateWithoutS07_rapport_maladie_infectieuseInput>;
};
export type r_rapport_prUpdateWithoutS07_rapport_maladie_infectieuseInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS07_rapport_maladie_infectieuseInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS08_allergies_infoInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS08_allergies_infoInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS08_allergies_infoInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS08_allergies_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS08_allergies_infoInput>;
};
export type r_rapport_prUpsertWithoutS08_allergies_infoInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS08_allergies_infoInput, Prisma.r_rapport_prUncheckedUpdateWithoutS08_allergies_infoInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS08_allergies_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS08_allergies_infoInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS08_allergies_infoInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS08_allergies_infoInput, Prisma.r_rapport_prUncheckedUpdateWithoutS08_allergies_infoInput>;
};
export type r_rapport_prUpdateWithoutS08_allergies_infoInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS08_allergies_infoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS08_rapport_allergieInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS08_rapport_allergieInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS08_rapport_allergieInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS08_rapport_allergieInput, Prisma.r_rapport_prUncheckedCreateWithoutS08_rapport_allergieInput>;
};
export type r_rapport_prUpsertWithoutS08_rapport_allergieInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS08_rapport_allergieInput, Prisma.r_rapport_prUncheckedUpdateWithoutS08_rapport_allergieInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS08_rapport_allergieInput, Prisma.r_rapport_prUncheckedCreateWithoutS08_rapport_allergieInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS08_rapport_allergieInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS08_rapport_allergieInput, Prisma.r_rapport_prUncheckedUpdateWithoutS08_rapport_allergieInput>;
};
export type r_rapport_prUpdateWithoutS08_rapport_allergieInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS08_rapport_allergieInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS09_rapport_mecanisme_traumaInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS09_rapport_mecanisme_traumaInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS09_rapport_mecanisme_traumaInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS09_rapport_mecanisme_traumaInput, Prisma.r_rapport_prUncheckedCreateWithoutS09_rapport_mecanisme_traumaInput>;
};
export type r_rapport_prUpsertWithoutS09_rapport_mecanisme_traumaInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS09_rapport_mecanisme_traumaInput, Prisma.r_rapport_prUncheckedUpdateWithoutS09_rapport_mecanisme_traumaInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS09_rapport_mecanisme_traumaInput, Prisma.r_rapport_prUncheckedCreateWithoutS09_rapport_mecanisme_traumaInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS09_rapport_mecanisme_traumaInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS09_rapport_mecanisme_traumaInput, Prisma.r_rapport_prUncheckedUpdateWithoutS09_rapport_mecanisme_traumaInput>;
};
export type r_rapport_prUpdateWithoutS09_rapport_mecanisme_traumaInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS09_rapport_mecanisme_traumaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS09_mecanisme_trauma_infoInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS09_mecanisme_trauma_infoInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS09_mecanisme_trauma_infoInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS09_mecanisme_trauma_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS09_mecanisme_trauma_infoInput>;
};
export type r_rapport_prUpsertWithoutS09_mecanisme_trauma_infoInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS09_mecanisme_trauma_infoInput, Prisma.r_rapport_prUncheckedUpdateWithoutS09_mecanisme_trauma_infoInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS09_mecanisme_trauma_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS09_mecanisme_trauma_infoInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS09_mecanisme_trauma_infoInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS09_mecanisme_trauma_infoInput, Prisma.r_rapport_prUncheckedUpdateWithoutS09_mecanisme_trauma_infoInput>;
};
export type r_rapport_prUpdateWithoutS09_mecanisme_trauma_infoInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS09_mecanisme_trauma_infoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS10_trauma_infoInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS10_trauma_infoInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS10_trauma_infoInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS10_trauma_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS10_trauma_infoInput>;
};
export type r_rapport_prUpsertWithoutS10_trauma_infoInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS10_trauma_infoInput, Prisma.r_rapport_prUncheckedUpdateWithoutS10_trauma_infoInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS10_trauma_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS10_trauma_infoInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS10_trauma_infoInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS10_trauma_infoInput, Prisma.r_rapport_prUncheckedUpdateWithoutS10_trauma_infoInput>;
};
export type r_rapport_prUpdateWithoutS10_trauma_infoInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS10_trauma_infoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS10_trauma_constatInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS10_trauma_constatInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS10_trauma_constatInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS10_trauma_constatInput, Prisma.r_rapport_prUncheckedCreateWithoutS10_trauma_constatInput>;
};
export type r_rapport_prUpsertWithoutS10_trauma_constatInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS10_trauma_constatInput, Prisma.r_rapport_prUncheckedUpdateWithoutS10_trauma_constatInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS10_trauma_constatInput, Prisma.r_rapport_prUncheckedCreateWithoutS10_trauma_constatInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS10_trauma_constatInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS10_trauma_constatInput, Prisma.r_rapport_prUncheckedUpdateWithoutS10_trauma_constatInput>;
};
export type r_rapport_prUpdateWithoutS10_trauma_constatInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS10_trauma_constatInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS11_support_clinique_infoInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS11_support_clinique_infoInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS11_support_clinique_infoInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS11_support_clinique_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS11_support_clinique_infoInput>;
};
export type r_rapport_prUpsertWithoutS11_support_clinique_infoInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS11_support_clinique_infoInput, Prisma.r_rapport_prUncheckedUpdateWithoutS11_support_clinique_infoInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS11_support_clinique_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS11_support_clinique_infoInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS11_support_clinique_infoInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS11_support_clinique_infoInput, Prisma.r_rapport_prUncheckedUpdateWithoutS11_support_clinique_infoInput>;
};
export type r_rapport_prUpdateWithoutS11_support_clinique_infoInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS11_support_clinique_infoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS12_signe_vitalInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS12_signe_vitalInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS12_signe_vitalInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS12_signe_vitalInput, Prisma.r_rapport_prUncheckedCreateWithoutS12_signe_vitalInput>;
};
export type r_rapport_prUpsertWithoutS12_signe_vitalInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS12_signe_vitalInput, Prisma.r_rapport_prUncheckedUpdateWithoutS12_signe_vitalInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS12_signe_vitalInput, Prisma.r_rapport_prUncheckedCreateWithoutS12_signe_vitalInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS12_signe_vitalInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS12_signe_vitalInput, Prisma.r_rapport_prUncheckedUpdateWithoutS12_signe_vitalInput>;
};
export type r_rapport_prUpdateWithoutS12_signe_vitalInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS12_signe_vitalInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS13_infoInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS13_infoInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS13_infoInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_infoInput>;
};
export type r_rapport_prUpsertWithoutS13_infoInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS13_infoInput, Prisma.r_rapport_prUncheckedUpdateWithoutS13_infoInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_infoInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_infoInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS13_infoInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS13_infoInput, Prisma.r_rapport_prUncheckedUpdateWithoutS13_infoInput>;
};
export type r_rapport_prUpdateWithoutS13_infoInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS13_infoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS13_arret_cardiaqueInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS13_arret_cardiaqueInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS13_arret_cardiaqueInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_arret_cardiaqueInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_arret_cardiaqueInput>;
};
export type r_rapport_prUpsertWithoutS13_arret_cardiaqueInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS13_arret_cardiaqueInput, Prisma.r_rapport_prUncheckedUpdateWithoutS13_arret_cardiaqueInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_arret_cardiaqueInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_arret_cardiaqueInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS13_arret_cardiaqueInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS13_arret_cardiaqueInput, Prisma.r_rapport_prUncheckedUpdateWithoutS13_arret_cardiaqueInput>;
};
export type r_rapport_prUpdateWithoutS13_arret_cardiaqueInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS13_arret_cardiaqueInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS13_voies_aeriennesInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS13_voies_aeriennesInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS13_voies_aeriennesInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_voies_aeriennesInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_voies_aeriennesInput>;
};
export type r_rapport_prUpsertWithoutS13_voies_aeriennesInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS13_voies_aeriennesInput, Prisma.r_rapport_prUncheckedUpdateWithoutS13_voies_aeriennesInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_voies_aeriennesInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_voies_aeriennesInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS13_voies_aeriennesInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS13_voies_aeriennesInput, Prisma.r_rapport_prUncheckedUpdateWithoutS13_voies_aeriennesInput>;
};
export type r_rapport_prUpdateWithoutS13_voies_aeriennesInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS13_voies_aeriennesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS13_hemorragiesInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS13_hemorragiesInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS13_hemorragiesInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_hemorragiesInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_hemorragiesInput>;
};
export type r_rapport_prUpsertWithoutS13_hemorragiesInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS13_hemorragiesInput, Prisma.r_rapport_prUncheckedUpdateWithoutS13_hemorragiesInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_hemorragiesInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_hemorragiesInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS13_hemorragiesInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS13_hemorragiesInput, Prisma.r_rapport_prUncheckedUpdateWithoutS13_hemorragiesInput>;
};
export type r_rapport_prUpdateWithoutS13_hemorragiesInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS13_hemorragiesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS13_immobilisationsInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS13_immobilisationsInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS13_immobilisationsInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_immobilisationsInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_immobilisationsInput>;
};
export type r_rapport_prUpsertWithoutS13_immobilisationsInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS13_immobilisationsInput, Prisma.r_rapport_prUncheckedUpdateWithoutS13_immobilisationsInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_immobilisationsInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_immobilisationsInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS13_immobilisationsInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS13_immobilisationsInput, Prisma.r_rapport_prUncheckedUpdateWithoutS13_immobilisationsInput>;
};
export type r_rapport_prUpdateWithoutS13_immobilisationsInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS13_immobilisationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS13_accouchementInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS13_accouchementInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS13_accouchementInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_accouchementInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_accouchementInput>;
};
export type r_rapport_prUpsertWithoutS13_accouchementInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS13_accouchementInput, Prisma.r_rapport_prUncheckedUpdateWithoutS13_accouchementInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_accouchementInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_accouchementInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS13_accouchementInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS13_accouchementInput, Prisma.r_rapport_prUncheckedUpdateWithoutS13_accouchementInput>;
};
export type r_rapport_prUpdateWithoutS13_accouchementInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS13_accouchementInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS13_medicamentsInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS13_medicamentsInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS13_medicamentsInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_medicamentsInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_medicamentsInput>;
};
export type r_rapport_prUpsertWithoutS13_medicamentsInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS13_medicamentsInput, Prisma.r_rapport_prUncheckedUpdateWithoutS13_medicamentsInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS13_medicamentsInput, Prisma.r_rapport_prUncheckedCreateWithoutS13_medicamentsInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS13_medicamentsInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS13_medicamentsInput, Prisma.r_rapport_prUncheckedUpdateWithoutS13_medicamentsInput>;
};
export type r_rapport_prUpdateWithoutS13_medicamentsInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS13_medicamentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS14_entreprise_ambulanciereInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS14_entreprise_ambulanciereInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS14_entreprise_ambulanciereInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS14_entreprise_ambulanciereInput, Prisma.r_rapport_prUncheckedCreateWithoutS14_entreprise_ambulanciereInput>;
};
export type r_rapport_prUpsertWithoutS14_entreprise_ambulanciereInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS14_entreprise_ambulanciereInput, Prisma.r_rapport_prUncheckedUpdateWithoutS14_entreprise_ambulanciereInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS14_entreprise_ambulanciereInput, Prisma.r_rapport_prUncheckedCreateWithoutS14_entreprise_ambulanciereInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS14_entreprise_ambulanciereInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS14_entreprise_ambulanciereInput, Prisma.r_rapport_prUncheckedUpdateWithoutS14_entreprise_ambulanciereInput>;
};
export type r_rapport_prUpdateWithoutS14_entreprise_ambulanciereInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS14_entreprise_ambulanciereInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateWithoutS15_autres_renseignementsInput = {
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    patient: Prisma.patientCreateNestedOneWithoutR_rapport_prInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prUncheckedCreateWithoutS15_autres_renseignementsInput = {
    id?: number;
    patient_id: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedCreateNestedManyWithoutRapportInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedCreateNestedOneWithoutRapportInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedCreateNestedOneWithoutRapportInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedCreateNestedOneWithoutRapportInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedCreateNestedOneWithoutRapportInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedCreateNestedManyWithoutRapportInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedCreateNestedOneWithoutRapportInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedCreateNestedManyWithoutRapportInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedCreateNestedOneWithoutRapportInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedCreateNestedManyWithoutRapportInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedCreateNestedOneWithoutRapportInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedCreateNestedManyWithoutRapportInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedCreateNestedManyWithoutRapportInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedCreateNestedOneWithoutRapportInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedCreateNestedManyWithoutRapportInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedCreateNestedOneWithoutRapportInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedCreateNestedManyWithoutRapportInput;
    s13_info?: Prisma.s13_infoUncheckedCreateNestedOneWithoutRapportInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedCreateNestedOneWithoutRapportInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedCreateNestedOneWithoutRapportInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedCreateNestedOneWithoutRapportInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedCreateNestedOneWithoutRapportInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedCreateNestedOneWithoutRapportInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedCreateNestedOneWithoutRapportInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedCreateNestedOneWithoutRapportInput;
};
export type r_rapport_prCreateOrConnectWithoutS15_autres_renseignementsInput = {
    where: Prisma.r_rapport_prWhereUniqueInput;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS15_autres_renseignementsInput, Prisma.r_rapport_prUncheckedCreateWithoutS15_autres_renseignementsInput>;
};
export type r_rapport_prUpsertWithoutS15_autres_renseignementsInput = {
    update: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS15_autres_renseignementsInput, Prisma.r_rapport_prUncheckedUpdateWithoutS15_autres_renseignementsInput>;
    create: Prisma.XOR<Prisma.r_rapport_prCreateWithoutS15_autres_renseignementsInput, Prisma.r_rapport_prUncheckedCreateWithoutS15_autres_renseignementsInput>;
    where?: Prisma.r_rapport_prWhereInput;
};
export type r_rapport_prUpdateToOneWithWhereWithoutS15_autres_renseignementsInput = {
    where?: Prisma.r_rapport_prWhereInput;
    data: Prisma.XOR<Prisma.r_rapport_prUpdateWithoutS15_autres_renseignementsInput, Prisma.r_rapport_prUncheckedUpdateWithoutS15_autres_renseignementsInput>;
};
export type r_rapport_prUpdateWithoutS15_autres_renseignementsInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    patient?: Prisma.patientUpdateOneRequiredWithoutR_rapport_prNestedInput;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutS15_autres_renseignementsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    patient_id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prCreateManyPatientInput = {
    id?: number;
    numero_formulaire_terrain?: string | null;
    code_smpau: string;
    no_autor?: string | null;
    etat_rapport?: string | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type r_rapport_prUpdateWithoutPatientInput = {
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateWithoutPatientInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    r_rapport_pr_intervenant?: Prisma.r_rapport_pr_intervenantUncheckedUpdateManyWithoutRapportNestedInput;
    s01_prise_en_charge?: Prisma.s01_prise_en_chargeUncheckedUpdateOneWithoutRapportNestedInput;
    s02_service_pr?: Prisma.s02_service_prUncheckedUpdateOneWithoutRapportNestedInput;
    s03_arrivee_usager?: Prisma.s03_arrivee_usagerUncheckedUpdateOneWithoutRapportNestedInput;
    s04_approche_initiale?: Prisma.s04_approche_initialeUncheckedUpdateOneWithoutRapportNestedInput;
    s05_rapport_nature_cas?: Prisma.s05_rapport_nature_casUncheckedUpdateManyWithoutRapportNestedInput;
    s05_nature_cas_info?: Prisma.s05_nature_cas_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s06_rapport_antecedent?: Prisma.s06_rapport_antecedentUncheckedUpdateManyWithoutRapportNestedInput;
    s07_maladies_infectieuses_info?: Prisma.s07_maladies_infectieuses_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s07_rapport_maladie_infectieuse?: Prisma.s07_rapport_maladie_infectieuseUncheckedUpdateManyWithoutRapportNestedInput;
    s08_allergies_info?: Prisma.s08_allergies_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s08_rapport_allergie?: Prisma.s08_rapport_allergieUncheckedUpdateManyWithoutRapportNestedInput;
    s09_rapport_mecanisme_trauma?: Prisma.s09_rapport_mecanisme_traumaUncheckedUpdateManyWithoutRapportNestedInput;
    s09_mecanisme_trauma_info?: Prisma.s09_mecanisme_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_info?: Prisma.s10_trauma_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s10_trauma_constat?: Prisma.s10_trauma_constatUncheckedUpdateManyWithoutRapportNestedInput;
    s11_support_clinique_info?: Prisma.s11_support_clinique_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s12_signe_vital?: Prisma.s12_signe_vitalUncheckedUpdateManyWithoutRapportNestedInput;
    s13_info?: Prisma.s13_infoUncheckedUpdateOneWithoutRapportNestedInput;
    s13_arret_cardiaque?: Prisma.s13_arret_cardiaqueUncheckedUpdateOneWithoutRapportNestedInput;
    s13_voies_aeriennes?: Prisma.s13_voies_aeriennesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_hemorragies?: Prisma.s13_hemorragiesUncheckedUpdateOneWithoutRapportNestedInput;
    s13_immobilisations?: Prisma.s13_immobilisationsUncheckedUpdateOneWithoutRapportNestedInput;
    s13_accouchement?: Prisma.s13_accouchementUncheckedUpdateOneWithoutRapportNestedInput;
    s13_medicaments?: Prisma.s13_medicamentsUncheckedUpdateOneWithoutRapportNestedInput;
    s14_entreprise_ambulanciere?: Prisma.s14_entreprise_ambulanciereUncheckedUpdateOneWithoutRapportNestedInput;
    s15_autres_renseignements?: Prisma.s15_autres_renseignementsUncheckedUpdateOneWithoutRapportNestedInput;
};
export type r_rapport_prUncheckedUpdateManyWithoutPatientInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_formulaire_terrain?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code_smpau?: Prisma.StringFieldUpdateOperationsInput | string;
    no_autor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    etat_rapport?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type R_rapport_prCountOutputType
 */
export type R_rapport_prCountOutputType = {
    r_rapport_pr_intervenant: number;
    s05_rapport_nature_cas: number;
    s06_rapport_antecedent: number;
    s07_rapport_maladie_infectieuse: number;
    s08_rapport_allergie: number;
    s09_rapport_mecanisme_trauma: number;
    s10_trauma_constat: number;
    s12_signe_vital: number;
};
export type R_rapport_prCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    r_rapport_pr_intervenant?: boolean | R_rapport_prCountOutputTypeCountR_rapport_pr_intervenantArgs;
    s05_rapport_nature_cas?: boolean | R_rapport_prCountOutputTypeCountS05_rapport_nature_casArgs;
    s06_rapport_antecedent?: boolean | R_rapport_prCountOutputTypeCountS06_rapport_antecedentArgs;
    s07_rapport_maladie_infectieuse?: boolean | R_rapport_prCountOutputTypeCountS07_rapport_maladie_infectieuseArgs;
    s08_rapport_allergie?: boolean | R_rapport_prCountOutputTypeCountS08_rapport_allergieArgs;
    s09_rapport_mecanisme_trauma?: boolean | R_rapport_prCountOutputTypeCountS09_rapport_mecanisme_traumaArgs;
    s10_trauma_constat?: boolean | R_rapport_prCountOutputTypeCountS10_trauma_constatArgs;
    s12_signe_vital?: boolean | R_rapport_prCountOutputTypeCountS12_signe_vitalArgs;
};
/**
 * R_rapport_prCountOutputType without action
 */
export type R_rapport_prCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the R_rapport_prCountOutputType
     */
    select?: Prisma.R_rapport_prCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * R_rapport_prCountOutputType without action
 */
export type R_rapport_prCountOutputTypeCountR_rapport_pr_intervenantArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.r_rapport_pr_intervenantWhereInput;
};
/**
 * R_rapport_prCountOutputType without action
 */
export type R_rapport_prCountOutputTypeCountS05_rapport_nature_casArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s05_rapport_nature_casWhereInput;
};
/**
 * R_rapport_prCountOutputType without action
 */
export type R_rapport_prCountOutputTypeCountS06_rapport_antecedentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s06_rapport_antecedentWhereInput;
};
/**
 * R_rapport_prCountOutputType without action
 */
export type R_rapport_prCountOutputTypeCountS07_rapport_maladie_infectieuseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s07_rapport_maladie_infectieuseWhereInput;
};
/**
 * R_rapport_prCountOutputType without action
 */
export type R_rapport_prCountOutputTypeCountS08_rapport_allergieArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s08_rapport_allergieWhereInput;
};
/**
 * R_rapport_prCountOutputType without action
 */
export type R_rapport_prCountOutputTypeCountS09_rapport_mecanisme_traumaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s09_rapport_mecanisme_traumaWhereInput;
};
/**
 * R_rapport_prCountOutputType without action
 */
export type R_rapport_prCountOutputTypeCountS10_trauma_constatArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s10_trauma_constatWhereInput;
};
/**
 * R_rapport_prCountOutputType without action
 */
export type R_rapport_prCountOutputTypeCountS12_signe_vitalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.s12_signe_vitalWhereInput;
};
export type r_rapport_prSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patient_id?: boolean;
    numero_formulaire_terrain?: boolean;
    code_smpau?: boolean;
    no_autor?: boolean;
    etat_rapport?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    patient?: boolean | Prisma.patientDefaultArgs<ExtArgs>;
    r_rapport_pr_intervenant?: boolean | Prisma.r_rapport_pr$r_rapport_pr_intervenantArgs<ExtArgs>;
    s01_prise_en_charge?: boolean | Prisma.r_rapport_pr$s01_prise_en_chargeArgs<ExtArgs>;
    s02_service_pr?: boolean | Prisma.r_rapport_pr$s02_service_prArgs<ExtArgs>;
    s03_arrivee_usager?: boolean | Prisma.r_rapport_pr$s03_arrivee_usagerArgs<ExtArgs>;
    s04_approche_initiale?: boolean | Prisma.r_rapport_pr$s04_approche_initialeArgs<ExtArgs>;
    s05_rapport_nature_cas?: boolean | Prisma.r_rapport_pr$s05_rapport_nature_casArgs<ExtArgs>;
    s05_nature_cas_info?: boolean | Prisma.r_rapport_pr$s05_nature_cas_infoArgs<ExtArgs>;
    s06_rapport_antecedent?: boolean | Prisma.r_rapport_pr$s06_rapport_antecedentArgs<ExtArgs>;
    s07_maladies_infectieuses_info?: boolean | Prisma.r_rapport_pr$s07_maladies_infectieuses_infoArgs<ExtArgs>;
    s07_rapport_maladie_infectieuse?: boolean | Prisma.r_rapport_pr$s07_rapport_maladie_infectieuseArgs<ExtArgs>;
    s08_allergies_info?: boolean | Prisma.r_rapport_pr$s08_allergies_infoArgs<ExtArgs>;
    s08_rapport_allergie?: boolean | Prisma.r_rapport_pr$s08_rapport_allergieArgs<ExtArgs>;
    s09_rapport_mecanisme_trauma?: boolean | Prisma.r_rapport_pr$s09_rapport_mecanisme_traumaArgs<ExtArgs>;
    s09_mecanisme_trauma_info?: boolean | Prisma.r_rapport_pr$s09_mecanisme_trauma_infoArgs<ExtArgs>;
    s10_trauma_info?: boolean | Prisma.r_rapport_pr$s10_trauma_infoArgs<ExtArgs>;
    s10_trauma_constat?: boolean | Prisma.r_rapport_pr$s10_trauma_constatArgs<ExtArgs>;
    s11_support_clinique_info?: boolean | Prisma.r_rapport_pr$s11_support_clinique_infoArgs<ExtArgs>;
    s12_signe_vital?: boolean | Prisma.r_rapport_pr$s12_signe_vitalArgs<ExtArgs>;
    s13_info?: boolean | Prisma.r_rapport_pr$s13_infoArgs<ExtArgs>;
    s13_arret_cardiaque?: boolean | Prisma.r_rapport_pr$s13_arret_cardiaqueArgs<ExtArgs>;
    s13_voies_aeriennes?: boolean | Prisma.r_rapport_pr$s13_voies_aeriennesArgs<ExtArgs>;
    s13_hemorragies?: boolean | Prisma.r_rapport_pr$s13_hemorragiesArgs<ExtArgs>;
    s13_immobilisations?: boolean | Prisma.r_rapport_pr$s13_immobilisationsArgs<ExtArgs>;
    s13_accouchement?: boolean | Prisma.r_rapport_pr$s13_accouchementArgs<ExtArgs>;
    s13_medicaments?: boolean | Prisma.r_rapport_pr$s13_medicamentsArgs<ExtArgs>;
    s14_entreprise_ambulanciere?: boolean | Prisma.r_rapport_pr$s14_entreprise_ambulanciereArgs<ExtArgs>;
    s15_autres_renseignements?: boolean | Prisma.r_rapport_pr$s15_autres_renseignementsArgs<ExtArgs>;
    _count?: boolean | Prisma.R_rapport_prCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["r_rapport_pr"]>;
export type r_rapport_prSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patient_id?: boolean;
    numero_formulaire_terrain?: boolean;
    code_smpau?: boolean;
    no_autor?: boolean;
    etat_rapport?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    patient?: boolean | Prisma.patientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["r_rapport_pr"]>;
export type r_rapport_prSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    patient_id?: boolean;
    numero_formulaire_terrain?: boolean;
    code_smpau?: boolean;
    no_autor?: boolean;
    etat_rapport?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    patient?: boolean | Prisma.patientDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["r_rapport_pr"]>;
export type r_rapport_prSelectScalar = {
    id?: boolean;
    patient_id?: boolean;
    numero_formulaire_terrain?: boolean;
    code_smpau?: boolean;
    no_autor?: boolean;
    etat_rapport?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type r_rapport_prOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "patient_id" | "numero_formulaire_terrain" | "code_smpau" | "no_autor" | "etat_rapport" | "created_at" | "updated_at", ExtArgs["result"]["r_rapport_pr"]>;
export type r_rapport_prInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.patientDefaultArgs<ExtArgs>;
    r_rapport_pr_intervenant?: boolean | Prisma.r_rapport_pr$r_rapport_pr_intervenantArgs<ExtArgs>;
    s01_prise_en_charge?: boolean | Prisma.r_rapport_pr$s01_prise_en_chargeArgs<ExtArgs>;
    s02_service_pr?: boolean | Prisma.r_rapport_pr$s02_service_prArgs<ExtArgs>;
    s03_arrivee_usager?: boolean | Prisma.r_rapport_pr$s03_arrivee_usagerArgs<ExtArgs>;
    s04_approche_initiale?: boolean | Prisma.r_rapport_pr$s04_approche_initialeArgs<ExtArgs>;
    s05_rapport_nature_cas?: boolean | Prisma.r_rapport_pr$s05_rapport_nature_casArgs<ExtArgs>;
    s05_nature_cas_info?: boolean | Prisma.r_rapport_pr$s05_nature_cas_infoArgs<ExtArgs>;
    s06_rapport_antecedent?: boolean | Prisma.r_rapport_pr$s06_rapport_antecedentArgs<ExtArgs>;
    s07_maladies_infectieuses_info?: boolean | Prisma.r_rapport_pr$s07_maladies_infectieuses_infoArgs<ExtArgs>;
    s07_rapport_maladie_infectieuse?: boolean | Prisma.r_rapport_pr$s07_rapport_maladie_infectieuseArgs<ExtArgs>;
    s08_allergies_info?: boolean | Prisma.r_rapport_pr$s08_allergies_infoArgs<ExtArgs>;
    s08_rapport_allergie?: boolean | Prisma.r_rapport_pr$s08_rapport_allergieArgs<ExtArgs>;
    s09_rapport_mecanisme_trauma?: boolean | Prisma.r_rapport_pr$s09_rapport_mecanisme_traumaArgs<ExtArgs>;
    s09_mecanisme_trauma_info?: boolean | Prisma.r_rapport_pr$s09_mecanisme_trauma_infoArgs<ExtArgs>;
    s10_trauma_info?: boolean | Prisma.r_rapport_pr$s10_trauma_infoArgs<ExtArgs>;
    s10_trauma_constat?: boolean | Prisma.r_rapport_pr$s10_trauma_constatArgs<ExtArgs>;
    s11_support_clinique_info?: boolean | Prisma.r_rapport_pr$s11_support_clinique_infoArgs<ExtArgs>;
    s12_signe_vital?: boolean | Prisma.r_rapport_pr$s12_signe_vitalArgs<ExtArgs>;
    s13_info?: boolean | Prisma.r_rapport_pr$s13_infoArgs<ExtArgs>;
    s13_arret_cardiaque?: boolean | Prisma.r_rapport_pr$s13_arret_cardiaqueArgs<ExtArgs>;
    s13_voies_aeriennes?: boolean | Prisma.r_rapport_pr$s13_voies_aeriennesArgs<ExtArgs>;
    s13_hemorragies?: boolean | Prisma.r_rapport_pr$s13_hemorragiesArgs<ExtArgs>;
    s13_immobilisations?: boolean | Prisma.r_rapport_pr$s13_immobilisationsArgs<ExtArgs>;
    s13_accouchement?: boolean | Prisma.r_rapport_pr$s13_accouchementArgs<ExtArgs>;
    s13_medicaments?: boolean | Prisma.r_rapport_pr$s13_medicamentsArgs<ExtArgs>;
    s14_entreprise_ambulanciere?: boolean | Prisma.r_rapport_pr$s14_entreprise_ambulanciereArgs<ExtArgs>;
    s15_autres_renseignements?: boolean | Prisma.r_rapport_pr$s15_autres_renseignementsArgs<ExtArgs>;
    _count?: boolean | Prisma.R_rapport_prCountOutputTypeDefaultArgs<ExtArgs>;
};
export type r_rapport_prIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.patientDefaultArgs<ExtArgs>;
};
export type r_rapport_prIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.patientDefaultArgs<ExtArgs>;
};
export type $r_rapport_prPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "r_rapport_pr";
    objects: {
        patient: Prisma.$patientPayload<ExtArgs>;
        r_rapport_pr_intervenant: Prisma.$r_rapport_pr_intervenantPayload<ExtArgs>[];
        s01_prise_en_charge: Prisma.$s01_prise_en_chargePayload<ExtArgs> | null;
        s02_service_pr: Prisma.$s02_service_prPayload<ExtArgs> | null;
        s03_arrivee_usager: Prisma.$s03_arrivee_usagerPayload<ExtArgs> | null;
        s04_approche_initiale: Prisma.$s04_approche_initialePayload<ExtArgs> | null;
        s05_rapport_nature_cas: Prisma.$s05_rapport_nature_casPayload<ExtArgs>[];
        s05_nature_cas_info: Prisma.$s05_nature_cas_infoPayload<ExtArgs> | null;
        s06_rapport_antecedent: Prisma.$s06_rapport_antecedentPayload<ExtArgs>[];
        s07_maladies_infectieuses_info: Prisma.$s07_maladies_infectieuses_infoPayload<ExtArgs> | null;
        s07_rapport_maladie_infectieuse: Prisma.$s07_rapport_maladie_infectieusePayload<ExtArgs>[];
        s08_allergies_info: Prisma.$s08_allergies_infoPayload<ExtArgs> | null;
        s08_rapport_allergie: Prisma.$s08_rapport_allergiePayload<ExtArgs>[];
        s09_rapport_mecanisme_trauma: Prisma.$s09_rapport_mecanisme_traumaPayload<ExtArgs>[];
        s09_mecanisme_trauma_info: Prisma.$s09_mecanisme_trauma_infoPayload<ExtArgs> | null;
        s10_trauma_info: Prisma.$s10_trauma_infoPayload<ExtArgs> | null;
        s10_trauma_constat: Prisma.$s10_trauma_constatPayload<ExtArgs>[];
        s11_support_clinique_info: Prisma.$s11_support_clinique_infoPayload<ExtArgs> | null;
        s12_signe_vital: Prisma.$s12_signe_vitalPayload<ExtArgs>[];
        s13_info: Prisma.$s13_infoPayload<ExtArgs> | null;
        s13_arret_cardiaque: Prisma.$s13_arret_cardiaquePayload<ExtArgs> | null;
        s13_voies_aeriennes: Prisma.$s13_voies_aeriennesPayload<ExtArgs> | null;
        s13_hemorragies: Prisma.$s13_hemorragiesPayload<ExtArgs> | null;
        s13_immobilisations: Prisma.$s13_immobilisationsPayload<ExtArgs> | null;
        s13_accouchement: Prisma.$s13_accouchementPayload<ExtArgs> | null;
        s13_medicaments: Prisma.$s13_medicamentsPayload<ExtArgs> | null;
        s14_entreprise_ambulanciere: Prisma.$s14_entreprise_ambulancierePayload<ExtArgs> | null;
        s15_autres_renseignements: Prisma.$s15_autres_renseignementsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        patient_id: number;
        numero_formulaire_terrain: string | null;
        code_smpau: string;
        no_autor: string | null;
        etat_rapport: string | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["r_rapport_pr"]>;
    composites: {};
};
export type r_rapport_prGetPayload<S extends boolean | null | undefined | r_rapport_prDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload, S>;
export type r_rapport_prCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<r_rapport_prFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: R_rapport_prCountAggregateInputType | true;
};
export interface r_rapport_prDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['r_rapport_pr'];
        meta: {
            name: 'r_rapport_pr';
        };
    };
    /**
     * Find zero or one R_rapport_pr that matches the filter.
     * @param {r_rapport_prFindUniqueArgs} args - Arguments to find a R_rapport_pr
     * @example
     * // Get one R_rapport_pr
     * const r_rapport_pr = await prisma.r_rapport_pr.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends r_rapport_prFindUniqueArgs>(args: Prisma.SelectSubset<T, r_rapport_prFindUniqueArgs<ExtArgs>>): Prisma.Prisma__r_rapport_prClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one R_rapport_pr that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {r_rapport_prFindUniqueOrThrowArgs} args - Arguments to find a R_rapport_pr
     * @example
     * // Get one R_rapport_pr
     * const r_rapport_pr = await prisma.r_rapport_pr.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends r_rapport_prFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, r_rapport_prFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__r_rapport_prClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first R_rapport_pr that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {r_rapport_prFindFirstArgs} args - Arguments to find a R_rapport_pr
     * @example
     * // Get one R_rapport_pr
     * const r_rapport_pr = await prisma.r_rapport_pr.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends r_rapport_prFindFirstArgs>(args?: Prisma.SelectSubset<T, r_rapport_prFindFirstArgs<ExtArgs>>): Prisma.Prisma__r_rapport_prClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first R_rapport_pr that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {r_rapport_prFindFirstOrThrowArgs} args - Arguments to find a R_rapport_pr
     * @example
     * // Get one R_rapport_pr
     * const r_rapport_pr = await prisma.r_rapport_pr.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends r_rapport_prFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, r_rapport_prFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__r_rapport_prClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more R_rapport_prs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {r_rapport_prFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all R_rapport_prs
     * const r_rapport_prs = await prisma.r_rapport_pr.findMany()
     *
     * // Get first 10 R_rapport_prs
     * const r_rapport_prs = await prisma.r_rapport_pr.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const r_rapport_prWithIdOnly = await prisma.r_rapport_pr.findMany({ select: { id: true } })
     *
     */
    findMany<T extends r_rapport_prFindManyArgs>(args?: Prisma.SelectSubset<T, r_rapport_prFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a R_rapport_pr.
     * @param {r_rapport_prCreateArgs} args - Arguments to create a R_rapport_pr.
     * @example
     * // Create one R_rapport_pr
     * const R_rapport_pr = await prisma.r_rapport_pr.create({
     *   data: {
     *     // ... data to create a R_rapport_pr
     *   }
     * })
     *
     */
    create<T extends r_rapport_prCreateArgs>(args: Prisma.SelectSubset<T, r_rapport_prCreateArgs<ExtArgs>>): Prisma.Prisma__r_rapport_prClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many R_rapport_prs.
     * @param {r_rapport_prCreateManyArgs} args - Arguments to create many R_rapport_prs.
     * @example
     * // Create many R_rapport_prs
     * const r_rapport_pr = await prisma.r_rapport_pr.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends r_rapport_prCreateManyArgs>(args?: Prisma.SelectSubset<T, r_rapport_prCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many R_rapport_prs and returns the data saved in the database.
     * @param {r_rapport_prCreateManyAndReturnArgs} args - Arguments to create many R_rapport_prs.
     * @example
     * // Create many R_rapport_prs
     * const r_rapport_pr = await prisma.r_rapport_pr.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many R_rapport_prs and only return the `id`
     * const r_rapport_prWithIdOnly = await prisma.r_rapport_pr.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends r_rapport_prCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, r_rapport_prCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a R_rapport_pr.
     * @param {r_rapport_prDeleteArgs} args - Arguments to delete one R_rapport_pr.
     * @example
     * // Delete one R_rapport_pr
     * const R_rapport_pr = await prisma.r_rapport_pr.delete({
     *   where: {
     *     // ... filter to delete one R_rapport_pr
     *   }
     * })
     *
     */
    delete<T extends r_rapport_prDeleteArgs>(args: Prisma.SelectSubset<T, r_rapport_prDeleteArgs<ExtArgs>>): Prisma.Prisma__r_rapport_prClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one R_rapport_pr.
     * @param {r_rapport_prUpdateArgs} args - Arguments to update one R_rapport_pr.
     * @example
     * // Update one R_rapport_pr
     * const r_rapport_pr = await prisma.r_rapport_pr.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends r_rapport_prUpdateArgs>(args: Prisma.SelectSubset<T, r_rapport_prUpdateArgs<ExtArgs>>): Prisma.Prisma__r_rapport_prClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more R_rapport_prs.
     * @param {r_rapport_prDeleteManyArgs} args - Arguments to filter R_rapport_prs to delete.
     * @example
     * // Delete a few R_rapport_prs
     * const { count } = await prisma.r_rapport_pr.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends r_rapport_prDeleteManyArgs>(args?: Prisma.SelectSubset<T, r_rapport_prDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more R_rapport_prs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {r_rapport_prUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many R_rapport_prs
     * const r_rapport_pr = await prisma.r_rapport_pr.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends r_rapport_prUpdateManyArgs>(args: Prisma.SelectSubset<T, r_rapport_prUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more R_rapport_prs and returns the data updated in the database.
     * @param {r_rapport_prUpdateManyAndReturnArgs} args - Arguments to update many R_rapport_prs.
     * @example
     * // Update many R_rapport_prs
     * const r_rapport_pr = await prisma.r_rapport_pr.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more R_rapport_prs and only return the `id`
     * const r_rapport_prWithIdOnly = await prisma.r_rapport_pr.updateManyAndReturn({
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
    updateManyAndReturn<T extends r_rapport_prUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, r_rapport_prUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one R_rapport_pr.
     * @param {r_rapport_prUpsertArgs} args - Arguments to update or create a R_rapport_pr.
     * @example
     * // Update or create a R_rapport_pr
     * const r_rapport_pr = await prisma.r_rapport_pr.upsert({
     *   create: {
     *     // ... data to create a R_rapport_pr
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the R_rapport_pr we want to update
     *   }
     * })
     */
    upsert<T extends r_rapport_prUpsertArgs>(args: Prisma.SelectSubset<T, r_rapport_prUpsertArgs<ExtArgs>>): Prisma.Prisma__r_rapport_prClient<runtime.Types.Result.GetResult<Prisma.$r_rapport_prPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of R_rapport_prs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {r_rapport_prCountArgs} args - Arguments to filter R_rapport_prs to count.
     * @example
     * // Count the number of R_rapport_prs
     * const count = await prisma.r_rapport_pr.count({
     *   where: {
     *     // ... the filter for the R_rapport_prs we want to count
     *   }
     * })
    **/
    count<T extends r_rapport_prCountArgs>(args?: Prisma.Subset<T, r_rapport_prCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], R_rapport_prCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a R_rapport_pr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {R_rapport_prAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends R_rapport_prAggregateArgs>(args: Prisma.Subset<T, R_rapport_prAggregateArgs>): Prisma.PrismaPromise<GetR_rapport_prAggregateType<T>>;
    /**
     * Group by R_rapport_pr.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {r_rapport_prGroupByArgs} args - Group by arguments.
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
    groupBy<T extends r_rapport_prGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: r_rapport_prGroupByArgs['orderBy'];
    } : {
        orderBy?: r_rapport_prGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, r_rapport_prGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetR_rapport_prGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the r_rapport_pr model
     */
    readonly fields: r_rapport_prFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for r_rapport_pr.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__r_rapport_prClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    patient<T extends Prisma.patientDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.patientDefaultArgs<ExtArgs>>): Prisma.Prisma__patientClient<runtime.Types.Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    r_rapport_pr_intervenant<T extends Prisma.r_rapport_pr$r_rapport_pr_intervenantArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$r_rapport_pr_intervenantArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$r_rapport_pr_intervenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    s01_prise_en_charge<T extends Prisma.r_rapport_pr$s01_prise_en_chargeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s01_prise_en_chargeArgs<ExtArgs>>): Prisma.Prisma__s01_prise_en_chargeClient<runtime.Types.Result.GetResult<Prisma.$s01_prise_en_chargePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    s02_service_pr<T extends Prisma.r_rapport_pr$s02_service_prArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s02_service_prArgs<ExtArgs>>): Prisma.Prisma__s02_service_prClient<runtime.Types.Result.GetResult<Prisma.$s02_service_prPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    s03_arrivee_usager<T extends Prisma.r_rapport_pr$s03_arrivee_usagerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s03_arrivee_usagerArgs<ExtArgs>>): Prisma.Prisma__s03_arrivee_usagerClient<runtime.Types.Result.GetResult<Prisma.$s03_arrivee_usagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    s04_approche_initiale<T extends Prisma.r_rapport_pr$s04_approche_initialeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s04_approche_initialeArgs<ExtArgs>>): Prisma.Prisma__s04_approche_initialeClient<runtime.Types.Result.GetResult<Prisma.$s04_approche_initialePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    s05_rapport_nature_cas<T extends Prisma.r_rapport_pr$s05_rapport_nature_casArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s05_rapport_nature_casArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s05_rapport_nature_casPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    s05_nature_cas_info<T extends Prisma.r_rapport_pr$s05_nature_cas_infoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s05_nature_cas_infoArgs<ExtArgs>>): Prisma.Prisma__s05_nature_cas_infoClient<runtime.Types.Result.GetResult<Prisma.$s05_nature_cas_infoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    s06_rapport_antecedent<T extends Prisma.r_rapport_pr$s06_rapport_antecedentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s06_rapport_antecedentArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s06_rapport_antecedentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    s07_maladies_infectieuses_info<T extends Prisma.r_rapport_pr$s07_maladies_infectieuses_infoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s07_maladies_infectieuses_infoArgs<ExtArgs>>): Prisma.Prisma__s07_maladies_infectieuses_infoClient<runtime.Types.Result.GetResult<Prisma.$s07_maladies_infectieuses_infoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    s07_rapport_maladie_infectieuse<T extends Prisma.r_rapport_pr$s07_rapport_maladie_infectieuseArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s07_rapport_maladie_infectieuseArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s07_rapport_maladie_infectieusePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    s08_allergies_info<T extends Prisma.r_rapport_pr$s08_allergies_infoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s08_allergies_infoArgs<ExtArgs>>): Prisma.Prisma__s08_allergies_infoClient<runtime.Types.Result.GetResult<Prisma.$s08_allergies_infoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    s08_rapport_allergie<T extends Prisma.r_rapport_pr$s08_rapport_allergieArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s08_rapport_allergieArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s08_rapport_allergiePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    s09_rapport_mecanisme_trauma<T extends Prisma.r_rapport_pr$s09_rapport_mecanisme_traumaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s09_rapport_mecanisme_traumaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s09_rapport_mecanisme_traumaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    s09_mecanisme_trauma_info<T extends Prisma.r_rapport_pr$s09_mecanisme_trauma_infoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s09_mecanisme_trauma_infoArgs<ExtArgs>>): Prisma.Prisma__s09_mecanisme_trauma_infoClient<runtime.Types.Result.GetResult<Prisma.$s09_mecanisme_trauma_infoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    s10_trauma_info<T extends Prisma.r_rapport_pr$s10_trauma_infoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s10_trauma_infoArgs<ExtArgs>>): Prisma.Prisma__s10_trauma_infoClient<runtime.Types.Result.GetResult<Prisma.$s10_trauma_infoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    s10_trauma_constat<T extends Prisma.r_rapport_pr$s10_trauma_constatArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s10_trauma_constatArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s10_trauma_constatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    s11_support_clinique_info<T extends Prisma.r_rapport_pr$s11_support_clinique_infoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s11_support_clinique_infoArgs<ExtArgs>>): Prisma.Prisma__s11_support_clinique_infoClient<runtime.Types.Result.GetResult<Prisma.$s11_support_clinique_infoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    s12_signe_vital<T extends Prisma.r_rapport_pr$s12_signe_vitalArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s12_signe_vitalArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$s12_signe_vitalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    s13_info<T extends Prisma.r_rapport_pr$s13_infoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s13_infoArgs<ExtArgs>>): Prisma.Prisma__s13_infoClient<runtime.Types.Result.GetResult<Prisma.$s13_infoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    s13_arret_cardiaque<T extends Prisma.r_rapport_pr$s13_arret_cardiaqueArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s13_arret_cardiaqueArgs<ExtArgs>>): Prisma.Prisma__s13_arret_cardiaqueClient<runtime.Types.Result.GetResult<Prisma.$s13_arret_cardiaquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    s13_voies_aeriennes<T extends Prisma.r_rapport_pr$s13_voies_aeriennesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s13_voies_aeriennesArgs<ExtArgs>>): Prisma.Prisma__s13_voies_aeriennesClient<runtime.Types.Result.GetResult<Prisma.$s13_voies_aeriennesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    s13_hemorragies<T extends Prisma.r_rapport_pr$s13_hemorragiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s13_hemorragiesArgs<ExtArgs>>): Prisma.Prisma__s13_hemorragiesClient<runtime.Types.Result.GetResult<Prisma.$s13_hemorragiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    s13_immobilisations<T extends Prisma.r_rapport_pr$s13_immobilisationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s13_immobilisationsArgs<ExtArgs>>): Prisma.Prisma__s13_immobilisationsClient<runtime.Types.Result.GetResult<Prisma.$s13_immobilisationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    s13_accouchement<T extends Prisma.r_rapport_pr$s13_accouchementArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s13_accouchementArgs<ExtArgs>>): Prisma.Prisma__s13_accouchementClient<runtime.Types.Result.GetResult<Prisma.$s13_accouchementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    s13_medicaments<T extends Prisma.r_rapport_pr$s13_medicamentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s13_medicamentsArgs<ExtArgs>>): Prisma.Prisma__s13_medicamentsClient<runtime.Types.Result.GetResult<Prisma.$s13_medicamentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    s14_entreprise_ambulanciere<T extends Prisma.r_rapport_pr$s14_entreprise_ambulanciereArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s14_entreprise_ambulanciereArgs<ExtArgs>>): Prisma.Prisma__s14_entreprise_ambulanciereClient<runtime.Types.Result.GetResult<Prisma.$s14_entreprise_ambulancierePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    s15_autres_renseignements<T extends Prisma.r_rapport_pr$s15_autres_renseignementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.r_rapport_pr$s15_autres_renseignementsArgs<ExtArgs>>): Prisma.Prisma__s15_autres_renseignementsClient<runtime.Types.Result.GetResult<Prisma.$s15_autres_renseignementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the r_rapport_pr model
 */
export interface r_rapport_prFieldRefs {
    readonly id: Prisma.FieldRef<"r_rapport_pr", 'Int'>;
    readonly patient_id: Prisma.FieldRef<"r_rapport_pr", 'Int'>;
    readonly numero_formulaire_terrain: Prisma.FieldRef<"r_rapport_pr", 'String'>;
    readonly code_smpau: Prisma.FieldRef<"r_rapport_pr", 'String'>;
    readonly no_autor: Prisma.FieldRef<"r_rapport_pr", 'String'>;
    readonly etat_rapport: Prisma.FieldRef<"r_rapport_pr", 'String'>;
    readonly created_at: Prisma.FieldRef<"r_rapport_pr", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"r_rapport_pr", 'DateTime'>;
}
/**
 * r_rapport_pr findUnique
 */
export type r_rapport_prFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr
     */
    select?: Prisma.r_rapport_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr
     */
    omit?: Prisma.r_rapport_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_prInclude<ExtArgs> | null;
    /**
     * Filter, which r_rapport_pr to fetch.
     */
    where: Prisma.r_rapport_prWhereUniqueInput;
};
/**
 * r_rapport_pr findUniqueOrThrow
 */
export type r_rapport_prFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr
     */
    select?: Prisma.r_rapport_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr
     */
    omit?: Prisma.r_rapport_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_prInclude<ExtArgs> | null;
    /**
     * Filter, which r_rapport_pr to fetch.
     */
    where: Prisma.r_rapport_prWhereUniqueInput;
};
/**
 * r_rapport_pr findFirst
 */
export type r_rapport_prFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr
     */
    select?: Prisma.r_rapport_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr
     */
    omit?: Prisma.r_rapport_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_prInclude<ExtArgs> | null;
    /**
     * Filter, which r_rapport_pr to fetch.
     */
    where?: Prisma.r_rapport_prWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of r_rapport_prs to fetch.
     */
    orderBy?: Prisma.r_rapport_prOrderByWithRelationInput | Prisma.r_rapport_prOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for r_rapport_prs.
     */
    cursor?: Prisma.r_rapport_prWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` r_rapport_prs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` r_rapport_prs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of r_rapport_prs.
     */
    distinct?: Prisma.R_rapport_prScalarFieldEnum | Prisma.R_rapport_prScalarFieldEnum[];
};
/**
 * r_rapport_pr findFirstOrThrow
 */
export type r_rapport_prFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr
     */
    select?: Prisma.r_rapport_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr
     */
    omit?: Prisma.r_rapport_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_prInclude<ExtArgs> | null;
    /**
     * Filter, which r_rapport_pr to fetch.
     */
    where?: Prisma.r_rapport_prWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of r_rapport_prs to fetch.
     */
    orderBy?: Prisma.r_rapport_prOrderByWithRelationInput | Prisma.r_rapport_prOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for r_rapport_prs.
     */
    cursor?: Prisma.r_rapport_prWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` r_rapport_prs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` r_rapport_prs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of r_rapport_prs.
     */
    distinct?: Prisma.R_rapport_prScalarFieldEnum | Prisma.R_rapport_prScalarFieldEnum[];
};
/**
 * r_rapport_pr findMany
 */
export type r_rapport_prFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr
     */
    select?: Prisma.r_rapport_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr
     */
    omit?: Prisma.r_rapport_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_prInclude<ExtArgs> | null;
    /**
     * Filter, which r_rapport_prs to fetch.
     */
    where?: Prisma.r_rapport_prWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of r_rapport_prs to fetch.
     */
    orderBy?: Prisma.r_rapport_prOrderByWithRelationInput | Prisma.r_rapport_prOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing r_rapport_prs.
     */
    cursor?: Prisma.r_rapport_prWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` r_rapport_prs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` r_rapport_prs.
     */
    skip?: number;
    distinct?: Prisma.R_rapport_prScalarFieldEnum | Prisma.R_rapport_prScalarFieldEnum[];
};
/**
 * r_rapport_pr create
 */
export type r_rapport_prCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr
     */
    select?: Prisma.r_rapport_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr
     */
    omit?: Prisma.r_rapport_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_prInclude<ExtArgs> | null;
    /**
     * The data needed to create a r_rapport_pr.
     */
    data: Prisma.XOR<Prisma.r_rapport_prCreateInput, Prisma.r_rapport_prUncheckedCreateInput>;
};
/**
 * r_rapport_pr createMany
 */
export type r_rapport_prCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many r_rapport_prs.
     */
    data: Prisma.r_rapport_prCreateManyInput | Prisma.r_rapport_prCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * r_rapport_pr createManyAndReturn
 */
export type r_rapport_prCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr
     */
    select?: Prisma.r_rapport_prSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr
     */
    omit?: Prisma.r_rapport_prOmit<ExtArgs> | null;
    /**
     * The data used to create many r_rapport_prs.
     */
    data: Prisma.r_rapport_prCreateManyInput | Prisma.r_rapport_prCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_prIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * r_rapport_pr update
 */
export type r_rapport_prUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr
     */
    select?: Prisma.r_rapport_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr
     */
    omit?: Prisma.r_rapport_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_prInclude<ExtArgs> | null;
    /**
     * The data needed to update a r_rapport_pr.
     */
    data: Prisma.XOR<Prisma.r_rapport_prUpdateInput, Prisma.r_rapport_prUncheckedUpdateInput>;
    /**
     * Choose, which r_rapport_pr to update.
     */
    where: Prisma.r_rapport_prWhereUniqueInput;
};
/**
 * r_rapport_pr updateMany
 */
export type r_rapport_prUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update r_rapport_prs.
     */
    data: Prisma.XOR<Prisma.r_rapport_prUpdateManyMutationInput, Prisma.r_rapport_prUncheckedUpdateManyInput>;
    /**
     * Filter which r_rapport_prs to update
     */
    where?: Prisma.r_rapport_prWhereInput;
    /**
     * Limit how many r_rapport_prs to update.
     */
    limit?: number;
};
/**
 * r_rapport_pr updateManyAndReturn
 */
export type r_rapport_prUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr
     */
    select?: Prisma.r_rapport_prSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr
     */
    omit?: Prisma.r_rapport_prOmit<ExtArgs> | null;
    /**
     * The data used to update r_rapport_prs.
     */
    data: Prisma.XOR<Prisma.r_rapport_prUpdateManyMutationInput, Prisma.r_rapport_prUncheckedUpdateManyInput>;
    /**
     * Filter which r_rapport_prs to update
     */
    where?: Prisma.r_rapport_prWhereInput;
    /**
     * Limit how many r_rapport_prs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_prIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * r_rapport_pr upsert
 */
export type r_rapport_prUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr
     */
    select?: Prisma.r_rapport_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr
     */
    omit?: Prisma.r_rapport_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_prInclude<ExtArgs> | null;
    /**
     * The filter to search for the r_rapport_pr to update in case it exists.
     */
    where: Prisma.r_rapport_prWhereUniqueInput;
    /**
     * In case the r_rapport_pr found by the `where` argument doesn't exist, create a new r_rapport_pr with this data.
     */
    create: Prisma.XOR<Prisma.r_rapport_prCreateInput, Prisma.r_rapport_prUncheckedCreateInput>;
    /**
     * In case the r_rapport_pr was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.r_rapport_prUpdateInput, Prisma.r_rapport_prUncheckedUpdateInput>;
};
/**
 * r_rapport_pr delete
 */
export type r_rapport_prDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr
     */
    select?: Prisma.r_rapport_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr
     */
    omit?: Prisma.r_rapport_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_prInclude<ExtArgs> | null;
    /**
     * Filter which r_rapport_pr to delete.
     */
    where: Prisma.r_rapport_prWhereUniqueInput;
};
/**
 * r_rapport_pr deleteMany
 */
export type r_rapport_prDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which r_rapport_prs to delete
     */
    where?: Prisma.r_rapport_prWhereInput;
    /**
     * Limit how many r_rapport_prs to delete.
     */
    limit?: number;
};
/**
 * r_rapport_pr.r_rapport_pr_intervenant
 */
export type r_rapport_pr$r_rapport_pr_intervenantArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * r_rapport_pr.s01_prise_en_charge
 */
export type r_rapport_pr$s01_prise_en_chargeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.s01_prise_en_chargeWhereInput;
};
/**
 * r_rapport_pr.s02_service_pr
 */
export type r_rapport_pr$s02_service_prArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s02_service_pr
     */
    select?: Prisma.s02_service_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s02_service_pr
     */
    omit?: Prisma.s02_service_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s02_service_prInclude<ExtArgs> | null;
    where?: Prisma.s02_service_prWhereInput;
};
/**
 * r_rapport_pr.s03_arrivee_usager
 */
export type r_rapport_pr$s03_arrivee_usagerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s03_arrivee_usager
     */
    select?: Prisma.s03_arrivee_usagerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s03_arrivee_usager
     */
    omit?: Prisma.s03_arrivee_usagerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s03_arrivee_usagerInclude<ExtArgs> | null;
    where?: Prisma.s03_arrivee_usagerWhereInput;
};
/**
 * r_rapport_pr.s04_approche_initiale
 */
export type r_rapport_pr$s04_approche_initialeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s04_approche_initiale
     */
    select?: Prisma.s04_approche_initialeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s04_approche_initiale
     */
    omit?: Prisma.s04_approche_initialeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s04_approche_initialeInclude<ExtArgs> | null;
    where?: Prisma.s04_approche_initialeWhereInput;
};
/**
 * r_rapport_pr.s05_rapport_nature_cas
 */
export type r_rapport_pr$s05_rapport_nature_casArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * r_rapport_pr.s05_nature_cas_info
 */
export type r_rapport_pr$s05_nature_cas_infoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s05_nature_cas_info
     */
    select?: Prisma.s05_nature_cas_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s05_nature_cas_info
     */
    omit?: Prisma.s05_nature_cas_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s05_nature_cas_infoInclude<ExtArgs> | null;
    where?: Prisma.s05_nature_cas_infoWhereInput;
};
/**
 * r_rapport_pr.s06_rapport_antecedent
 */
export type r_rapport_pr$s06_rapport_antecedentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s06_rapport_antecedent
     */
    select?: Prisma.s06_rapport_antecedentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s06_rapport_antecedent
     */
    omit?: Prisma.s06_rapport_antecedentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s06_rapport_antecedentInclude<ExtArgs> | null;
    where?: Prisma.s06_rapport_antecedentWhereInput;
    orderBy?: Prisma.s06_rapport_antecedentOrderByWithRelationInput | Prisma.s06_rapport_antecedentOrderByWithRelationInput[];
    cursor?: Prisma.s06_rapport_antecedentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.S06_rapport_antecedentScalarFieldEnum | Prisma.S06_rapport_antecedentScalarFieldEnum[];
};
/**
 * r_rapport_pr.s07_maladies_infectieuses_info
 */
export type r_rapport_pr$s07_maladies_infectieuses_infoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s07_maladies_infectieuses_info
     */
    select?: Prisma.s07_maladies_infectieuses_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s07_maladies_infectieuses_info
     */
    omit?: Prisma.s07_maladies_infectieuses_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s07_maladies_infectieuses_infoInclude<ExtArgs> | null;
    where?: Prisma.s07_maladies_infectieuses_infoWhereInput;
};
/**
 * r_rapport_pr.s07_rapport_maladie_infectieuse
 */
export type r_rapport_pr$s07_rapport_maladie_infectieuseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * r_rapport_pr.s08_allergies_info
 */
export type r_rapport_pr$s08_allergies_infoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s08_allergies_info
     */
    select?: Prisma.s08_allergies_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s08_allergies_info
     */
    omit?: Prisma.s08_allergies_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s08_allergies_infoInclude<ExtArgs> | null;
    where?: Prisma.s08_allergies_infoWhereInput;
};
/**
 * r_rapport_pr.s08_rapport_allergie
 */
export type r_rapport_pr$s08_rapport_allergieArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * r_rapport_pr.s09_rapport_mecanisme_trauma
 */
export type r_rapport_pr$s09_rapport_mecanisme_traumaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * r_rapport_pr.s09_mecanisme_trauma_info
 */
export type r_rapport_pr$s09_mecanisme_trauma_infoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s09_mecanisme_trauma_info
     */
    select?: Prisma.s09_mecanisme_trauma_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s09_mecanisme_trauma_info
     */
    omit?: Prisma.s09_mecanisme_trauma_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s09_mecanisme_trauma_infoInclude<ExtArgs> | null;
    where?: Prisma.s09_mecanisme_trauma_infoWhereInput;
};
/**
 * r_rapport_pr.s10_trauma_info
 */
export type r_rapport_pr$s10_trauma_infoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s10_trauma_info
     */
    select?: Prisma.s10_trauma_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s10_trauma_info
     */
    omit?: Prisma.s10_trauma_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s10_trauma_infoInclude<ExtArgs> | null;
    where?: Prisma.s10_trauma_infoWhereInput;
};
/**
 * r_rapport_pr.s10_trauma_constat
 */
export type r_rapport_pr$s10_trauma_constatArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * r_rapport_pr.s11_support_clinique_info
 */
export type r_rapport_pr$s11_support_clinique_infoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s11_support_clinique_info
     */
    select?: Prisma.s11_support_clinique_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s11_support_clinique_info
     */
    omit?: Prisma.s11_support_clinique_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s11_support_clinique_infoInclude<ExtArgs> | null;
    where?: Prisma.s11_support_clinique_infoWhereInput;
};
/**
 * r_rapport_pr.s12_signe_vital
 */
export type r_rapport_pr$s12_signe_vitalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.s12_signe_vitalWhereInput;
    orderBy?: Prisma.s12_signe_vitalOrderByWithRelationInput | Prisma.s12_signe_vitalOrderByWithRelationInput[];
    cursor?: Prisma.s12_signe_vitalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.S12_signe_vitalScalarFieldEnum | Prisma.S12_signe_vitalScalarFieldEnum[];
};
/**
 * r_rapport_pr.s13_info
 */
export type r_rapport_pr$s13_infoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_info
     */
    select?: Prisma.s13_infoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_info
     */
    omit?: Prisma.s13_infoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_infoInclude<ExtArgs> | null;
    where?: Prisma.s13_infoWhereInput;
};
/**
 * r_rapport_pr.s13_arret_cardiaque
 */
export type r_rapport_pr$s13_arret_cardiaqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.s13_arret_cardiaqueWhereInput;
};
/**
 * r_rapport_pr.s13_voies_aeriennes
 */
export type r_rapport_pr$s13_voies_aeriennesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_voies_aeriennes
     */
    select?: Prisma.s13_voies_aeriennesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_voies_aeriennes
     */
    omit?: Prisma.s13_voies_aeriennesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_voies_aeriennesInclude<ExtArgs> | null;
    where?: Prisma.s13_voies_aeriennesWhereInput;
};
/**
 * r_rapport_pr.s13_hemorragies
 */
export type r_rapport_pr$s13_hemorragiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_hemorragies
     */
    select?: Prisma.s13_hemorragiesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_hemorragies
     */
    omit?: Prisma.s13_hemorragiesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_hemorragiesInclude<ExtArgs> | null;
    where?: Prisma.s13_hemorragiesWhereInput;
};
/**
 * r_rapport_pr.s13_immobilisations
 */
export type r_rapport_pr$s13_immobilisationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_immobilisations
     */
    select?: Prisma.s13_immobilisationsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_immobilisations
     */
    omit?: Prisma.s13_immobilisationsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_immobilisationsInclude<ExtArgs> | null;
    where?: Prisma.s13_immobilisationsWhereInput;
};
/**
 * r_rapport_pr.s13_accouchement
 */
export type r_rapport_pr$s13_accouchementArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s13_accouchement
     */
    select?: Prisma.s13_accouchementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s13_accouchement
     */
    omit?: Prisma.s13_accouchementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s13_accouchementInclude<ExtArgs> | null;
    where?: Prisma.s13_accouchementWhereInput;
};
/**
 * r_rapport_pr.s13_medicaments
 */
export type r_rapport_pr$s13_medicamentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.s13_medicamentsWhereInput;
};
/**
 * r_rapport_pr.s14_entreprise_ambulanciere
 */
export type r_rapport_pr$s14_entreprise_ambulanciereArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s14_entreprise_ambulanciere
     */
    select?: Prisma.s14_entreprise_ambulanciereSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s14_entreprise_ambulanciere
     */
    omit?: Prisma.s14_entreprise_ambulanciereOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s14_entreprise_ambulanciereInclude<ExtArgs> | null;
    where?: Prisma.s14_entreprise_ambulanciereWhereInput;
};
/**
 * r_rapport_pr.s15_autres_renseignements
 */
export type r_rapport_pr$s15_autres_renseignementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the s15_autres_renseignements
     */
    select?: Prisma.s15_autres_renseignementsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the s15_autres_renseignements
     */
    omit?: Prisma.s15_autres_renseignementsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.s15_autres_renseignementsInclude<ExtArgs> | null;
    where?: Prisma.s15_autres_renseignementsWhereInput;
};
/**
 * r_rapport_pr without action
 */
export type r_rapport_prDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the r_rapport_pr
     */
    select?: Prisma.r_rapport_prSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the r_rapport_pr
     */
    omit?: Prisma.r_rapport_prOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.r_rapport_prInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=r_rapport_pr.d.ts.map