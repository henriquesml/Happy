import express from "express";
import { getRepository } from "typeorm";

import Orphanage from "./models/Orphanage";

import "./database/connection";

const app = express();

app.use(express.json());

app.post("/orphanages", async (req, res) => {
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
})

app.listen(3333);
