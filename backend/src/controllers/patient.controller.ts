import type { Request, Response } from 'express';
import prisma from '../prisma/prisma';

// Create a new patient
// Expects body: { nom?: string, prenom?: string, annee_naissance?: number, sexe?: string, no_ass?: string, maladie?: string }
export const createPatient = async (req: Request, res: Response) => {
  const { nom, prenom, annee_naissance, sexe, no_ass, maladie } = req.body;

  // Basic validation: at least one identifying field
  if (!nom && !prenom && !no_ass) {
    return res.status(400).json({ message: 'Au moins un champ parmi `nom`, `prenom` ou `no_ass` est requis' });
  }

  try {
    const patient = await prisma.patient.create({
      data: {
        nom: nom || null,
        prenom: prenom || null,
        annee_naissance: typeof annee_naissance === 'number' ? annee_naissance : null,
        sexe: sexe || null,
        no_ass: no_ass || null,
        maladie: maladie || null,
      }
    });

    return res.status(201).json({ success: true, patient });
  } catch (err) {
    return res.status(500).json({ success: false, error: String(err) });
  }
};
