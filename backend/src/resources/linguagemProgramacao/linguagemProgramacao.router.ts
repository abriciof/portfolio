import { Router } from "express";
import linguagemProgramacaoController from "./linguagemProgramacao.controller"

const router = Router();

router.get("/", linguagemProgramacaoController.index);
router.get("/:id", linguagemProgramacaoController.read);
router.post("/", linguagemProgramacaoController.create);
router.put("/:id", linguagemProgramacaoController.update);
router.delete("/:id", linguagemProgramacaoController.remove);

export default router;