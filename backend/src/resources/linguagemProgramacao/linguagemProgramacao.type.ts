import { LinguagemProgramacao } from "@prisma/client";

export type CreateLinguagemProgramacaoDto = Pick<LinguagemProgramacao, "nome" > & {
    versao?: string;
};

export type UpdateLinguagemProgramacaoDto = Pick<LinguagemProgramacao, "nome" > & {
    versao?: string;
};