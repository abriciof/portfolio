import {Router} from "express";
import projetoRouter from "../resources/projeto/projeto.router";
import tecnologiaRouter from "../resources/tecnologia/tecnologia.router";
import linguagemProgramacaoRouter from "../resources/linguagemProgramacao/linguagemProgramacao.router"
import areaConhecimentoRouter from "../resources/areaConhecimento/areaConhecimento.router"

const router = Router();

router.use("/projeto",
// #swagger.tags = ['Projeto']
projetoRouter);

router.use("/tecnologia",
// #swagger.tags = ['Tecnologia']
tecnologiaRouter);

router.use("/linguagemprogramacao",
// #swagger.tags = ['Linguagem de Programação']
linguagemProgramacaoRouter);

router.use("/areaconhecimento",
// #swagger.tags = ['Área de Conhecimento']
areaConhecimentoRouter);

export default router;