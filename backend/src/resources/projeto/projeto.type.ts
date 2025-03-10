import { Projeto } from "@prisma/client";

export type CreateProjetoDto = Pick<Projeto, "titulo" | "descricao" | "ano" >
export type UpdateProjetoDto = Pick<Projeto, "titulo" | "descricao" | "ano" >