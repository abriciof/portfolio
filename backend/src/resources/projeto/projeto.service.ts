import { Projeto } from "@prisma/client";
import { CreateProjetoDto, UpdateProjetoDto } from "./projeto.type";
import { BaseService } from "../../services/base.service";

export class ProjetoService extends BaseService<Projeto, CreateProjetoDto, UpdateProjetoDto> {
    constructor() {
        super("projeto");
    }
}