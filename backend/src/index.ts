import express, {Request, Response} from "express";
import dotenv from "dotenv";
import routerIndex from "./router/index";
import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../src/swagger-output.json";

dotenv.config();

const app = express();
const router = Router();

const PORT = process.env.PORT ?? 4444;

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(routerIndex);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

