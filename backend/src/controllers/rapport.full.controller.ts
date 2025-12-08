import type { Request, Response } from 'express';
import prisma from '../prisma/prisma';

// Create a full rapport with many optional sections in one transaction.
// The payload may include either `patient_id` or a `patient` object to create.
// Many section keys are optional; if present we create the corresponding rows.
export const createFullRapport = async (req: Request, res: Response) => {
  const payload = req.body || {};

  try {
    const result = await prisma.$transaction(async (tx: any) => {
      // 1) Ensure patient: use existing or create new
      let patientId: number | null = null;
      if (payload.patient_id && typeof payload.patient_id === 'number') {
        const p = await tx.patient.findUnique({ where: { id: payload.patient_id } });
        if (!p) throw new Error('patient introuvable');
        patientId = payload.patient_id;
      } else if (payload.patient && typeof payload.patient === 'object') {
        const p = await tx.patient.create({ data: payload.patient });
        patientId = p.id;
      } else {
        throw new Error('patient_id ou patient requis');
      }

      // 2) Create main rapport
      const rapport = await tx.r_rapport_pr.create({
        data: {
          patient_id: patientId,
          numero_formulaire_terrain: payload.numero_formulaire_terrain || null,
          code_smpau: payload.code_smpau || 'UNKNOWN',
          no_autor: payload.no_autor || null,
          etat_rapport: payload.etat_rapport || 'brouillon',
          created_at: new Date(),
          updated_at: new Date(),
        }
      });

      const createdId = rapport.id;

      // 3) Intervenants linking
      if (Array.isArray(payload.intervenants) && payload.intervenants.length > 0) {
        const linkData = payload.intervenants.map((i: any) => ({
          rapport_id: createdId,
          intervenant_id: Number(i.id),
          role: i.role || null
        }));
        await tx.r_rapport_pr_intervenant.createMany({ data: linkData, skipDuplicates: true });
      }

      // Helper: create or get type by code/libelle
      const upsertType = async (table: string, item: any) => {
        if (!item) return null;
        if (item.id) return item.id;
        const data: any = {};
        if (item.code) data.code = item.code;
        if (item.libelle) data.libelle = item.libelle;
        if (Object.keys(data).length === 0) return null;
        // dynamic create on tx
        const created = await (tx as any)[table].create({ data });
        return created.id;
      };

      // 4) Sections (create if present)
      if (payload.s01) {
        await tx.s01_prise_en_charge.create({ data: { rapport_id: createdId, date_prise_en_charge: new Date(payload.s01.date_prise_en_charge) } });
      }

      if (payload.s02) {
        await tx.s02_service_pr.create({ data: { rapport_id: createdId, service_pr: payload.s02.service_pr, no_evenement_pr: payload.s02.no_evenement_pr || null } });
      }

      if (payload.s03) {
        await tx.s03_arrivee_usager.create({ data: { rapport_id: createdId, heure_arrivee_usager: payload.s03.heure_arrivee_usager ? new Date(payload.s03.heure_arrivee_usager) : null } });
      }

      if (payload.s04) {
        await tx.s04_approche_initiale.create({ data: { rapport_id: createdId, ...payload.s04 } });
      }

      if (payload.s05) {
        // nature cas items (array)
        if (Array.isArray(payload.s05.natures)) {
          for (const it of payload.s05.natures) {
            let nid = it.id || null;
            if (!nid && (it.code || it.libelle)) nid = await upsertType('s05_nature_cas_type', it);
            if (nid) await tx.s05_rapport_nature_cas.create({ data: { rapport_id: createdId, nature_cas_id: nid } });
          }
        }
        if (payload.s05.info) {
          await tx.s05_nature_cas_info.create({ data: { rapport_id: createdId, nature_cas_autre: payload.s05.info.nature_cas_autre || null } });
        }
      }

      if (payload.s06) {
        if (Array.isArray(payload.s06.antecedents)) {
          for (const it of payload.s06.antecedents) {
            let aid = it.id || null;
            if (!aid && (it.code || it.libelle)) aid = await upsertType('s06_antecedent_type', it);
            if (aid) await tx.s06_rapport_antecedent.create({ data: { rapport_id: createdId, antecedent_id: aid } });
          }
        }
      }

      if (payload.s07) {
        if (payload.s07.info) await tx.s07_maladies_infectieuses_info.create({ data: { rapport_id: createdId, a_maladies_inf: payload.s07.info.a_maladies_inf || false, commentaire: payload.s07.info.commentaire || null } });
        if (Array.isArray(payload.s07.rapports)) {
          for (const it of payload.s07.rapports) {
            let mid = it.maladie_infectieuse_type_id || null;
            if (!mid && (it.code || it.libelle)) mid = await upsertType('s07_maladie_infectieuse_type', it);
            await tx.s07_rapport_maladie_infectieuse.create({ data: { rapport_id: createdId, maladie_infectieuse_type_id: mid, libelle_autre: it.libelle_autre || null, details: it.details || null } });
          }
        }
      }

      if (payload.s08) {
        if (payload.s08.info) await tx.s08_allergies_info.create({ data: { rapport_id: createdId, a_allergies: payload.s08.info.a_allergies || false, commentaire: payload.s08.info.commentaire || null } });
        if (Array.isArray(payload.s08.rapports)) {
          for (const it of payload.s08.rapports) {
            let aid = it.allergie_type_id || null;
            if (!aid && (it.code || it.libelle)) aid = await upsertType('s08_allergie_type', it);
            await tx.s08_rapport_allergie.create({ data: { rapport_id: createdId, allergie_type_id: aid, libelle_autre: it.libelle_autre || null, details: it.details || null } });
          }
        }
      }

      if (payload.s09) {
        if (payload.s09.info) await tx.s09_mecanisme_trauma_info.create({ data: { rapport_id: createdId, ...payload.s09.info } });
        if (Array.isArray(payload.s09.rapports)) {
          for (const it of payload.s09.rapports) {
            let mid = it.mecanisme_trauma_id || null;
            if (!mid && (it.code || it.libelle)) mid = await upsertType('s09_mecanisme_trauma_type', it);
            await tx.s09_rapport_mecanisme_trauma.create({ data: { rapport_id: createdId, mecanisme_trauma_id: mid } });
          }
        }
      }

      if (payload.s10) {
        if (payload.s10.info) await tx.s10_trauma_info.create({ data: { rapport_id: createdId, ...payload.s10.info } });
        if (Array.isArray(payload.s10.constats)) {
          for (const c of payload.s10.constats) {
            let zoneId = c.zone_id || null;
            if (!zoneId && (c.zone_code || c.zone_libelle)) zoneId = await upsertType('s10_trauma_zone_type', { code: c.zone_code, libelle: c.zone_libelle });
            let lesionId = c.lesion_type_id || null;
            if (!lesionId && (c.lesion_code || c.lesion_libelle)) lesionId = await upsertType('s10_trauma_lesion_type', { code: c.lesion_code, libelle: c.lesion_libelle });
            if (zoneId && lesionId) await tx.s10_trauma_constat.create({ data: { rapport_id: createdId, zone_id: zoneId, lesion_type_id: lesionId, commentaire: c.commentaire || null } });
          }
        }
      }

      if (payload.s11) await tx.s11_support_clinique_info.create({ data: { rapport_id: createdId, ...payload.s11 } });

      if (Array.isArray(payload.s12)) {
        for (const sv of payload.s12) await tx.s12_signe_vital.create({ data: { rapport_id: createdId, heure_prise: new Date(sv.heure_prise), respiration_min: sv.respiration_min || null, pouls_min: sv.pouls_min || null, etat_conscience_avpu: sv.etat_conscience_avpu || null, glycemie: sv.glycemie || null, spo2_pct: sv.spo2_pct || null, o2_pct: sv.o2_pct || null, created_at: new Date() } });
      }

      if (payload.s13) {
        if (payload.s13.info) await tx.s13_info.create({ data: { rapport_id: createdId, non_intervention: payload.s13.info.non_intervention || null, commentaire: payload.s13.info.commentaire || null } });
        if (payload.s13.arret_cardiaque) await tx.s13_arret_cardiaque.create({ data: { rapport_id: createdId, ...payload.s13.arret_cardiaque } });
        if (payload.s13.voies_aeriennes) await tx.s13_voies_aeriennes.create({ data: { rapport_id: createdId, ...payload.s13.voies_aeriennes } });
        if (payload.s13.medicaments) await tx.s13_medicaments.create({ data: { rapport_id: createdId, ...payload.s13.medicaments } });
      }

      if (payload.s14) await tx.s14_entreprise_ambulanciere.create({ data: { rapport_id: createdId, ...payload.s14 } });
      if (payload.s15) await tx.s15_autres_renseignements.create({ data: { rapport_id: createdId, ...payload.s15 } });

      return rapport;
    });

    return res.status(201).json({ success: true, rapport: result });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: String(err) });
  }
};

export default { createFullRapport };
