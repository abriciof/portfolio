import { Router } from "express";
import tecnologiaController from "./tecnologia.controller"

const router = Router();

router.get("/", tecnologiaController.index);
router.get("/:id", tecnologiaController.read);
router.post("/", tecnologiaController.create);
router.put("/:id", tecnologiaController.update);
router.delete("/:id", tecnologiaController.remove);

export default router;