import { AreaConhecimento } from "@prisma/client";
import { CreateAreaConhecimentoDto, UpdateAreaConhecimentoDto } from "./areaConhecimento.type";
import { BaseService } from "../../services/base.service";

export class AreaConhecimentoService extends BaseService<AreaConhecimento, CreateAreaConhecimentoDto, UpdateAreaConhecimentoDto> {
    constructor() {
        super("areaConhecimento");
    }
}