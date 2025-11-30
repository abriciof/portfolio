import { LinguagemProgramacao } from "@prisma/client";
import { CreateLinguagemProgramacaoDto, UpdateLinguagemProgramacaoDto } from "./linguagemProgramacao.type";
import { BaseService } from "../../services/base.service";

export class LinguagemProgramacaoService extends BaseService<LinguagemProgramacao, CreateLinguagemProgramacaoDto, UpdateLinguagemProgramacaoDto> {
    constructor() {
        super("linguagemProgramacao");
    }
}