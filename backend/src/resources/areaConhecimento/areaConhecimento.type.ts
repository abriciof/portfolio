import { AreaConhecimento } from "@prisma/client";

export type CreateAreaConhecimentoDto = Pick<AreaConhecimento, "nome" > & {
    versao?: string;
};

export type UpdateAreaConhecimentoDto = Pick<AreaConhecimento, "nome" > & {
    versao?: string;
};