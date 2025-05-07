import { Tecnologia } from "@prisma/client";

export type CreateTecnologiaDto = Pick<Tecnologia, "nome"> & {
    versao?: string;
};

export type UpdateTecnologiaDto = Pick<Tecnologia, "nome"> & {
    versao?: string;
};