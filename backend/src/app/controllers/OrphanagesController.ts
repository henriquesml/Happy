import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Orphanage } from "../models";

class OrphanagesController {
  async create(req: Request, res: Response) {
    const orphanageRepository = getRepository(Orphanage)
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    } = req.body;
  
    const orphanage = orphanageRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    })
  
    await orphanageRepository.save(orphanage);
  
    return res.status(201).json(orphanage)
  }
}

export default new OrphanagesController
