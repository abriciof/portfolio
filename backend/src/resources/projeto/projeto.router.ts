import { Router } from "express";
import projetoController from "./projeto.controller"

const router = Router();

router.get("/", projetoController.index);
// router.get("/:id", projetoController.read);
router.post("/", projetoController.create);
// router.put("/:id", projetoController.update);
// router.delete("/:id", projetoController.remove);

export default router;