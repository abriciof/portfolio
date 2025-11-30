import { Router } from "express";
import areaConhecimentoController from "./areaConhecimento.controller"

const router = Router();

router.get("/", areaConhecimentoController.index);
router.get("/:id", areaConhecimentoController.read);
router.post("/", areaConhecimentoController.create);
router.put("/:id", areaConhecimentoController.update);
router.delete("/:id", areaConhecimentoController.remove);

export default router;