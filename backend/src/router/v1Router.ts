import {Router} from "express";
import projetoRouter from "../resources/projeto/projeto.router";

const router = Router();

router.use("/projeto",
// #swagger.tags = ['Projeto']
projetoRouter);

export default router;