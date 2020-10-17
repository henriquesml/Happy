import { Router } from "express";
import { OrphanagesController } from "./app/controllers";

const routes = Router();

routes.post("/orphanages", OrphanagesController.create);

export default routes;
