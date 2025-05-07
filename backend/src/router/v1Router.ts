import {Router} from "express";
import projetoRouter from "../resources/projeto/projeto.router";
import tecnologiaRouter from "../resources/tecnologia/tecnologia.router";

const router = Router();

router.use("/projeto",
// #swagger.tags = ['Projeto']
projetoRouter);
router.use("/tecnologia",
// #swagger.tags = ['Tecnologia']
tecnologiaRouter);

export default router;