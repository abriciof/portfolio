import { Tecnologia } from "@prisma/client";
import { CreateTecnologiaDto, UpdateTecnologiaDto } from "./tecnologia.type";
import { BaseService } from "../../services/base.service";

export class TecnologiaService extends BaseService<Tecnologia, CreateTecnologiaDto, UpdateTecnologiaDto> {
    constructor() {
        super("tecnologia");
    }
}