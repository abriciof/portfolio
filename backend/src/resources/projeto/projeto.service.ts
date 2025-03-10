import { PrismaClient, Projeto } from "@prisma/client";
import { CreateProjetoDto, UpdateProjetoDto } from "./projeto.type";

const prisma = new PrismaClient();

export const listProjetos = async (skip?: number, take?: number): Promise<Projeto[]> => {
    return await prisma.projeto.findMany({skip, take});
};

export const createProjeto = async (projeto: CreateProjetoDto): Promise<Projeto> => {
    return await prisma.projeto.create({ data: projeto });
};

