import { PrismaClient, Projeto } from "@prisma/client";
import { CreateProjetoDto, UpdateProjetoDto } from "./projeto.type";

const prisma = new PrismaClient();

export const listProjetos = async (skip?: number, take?: number): Promise<Projeto[]> => {
    return await prisma.projeto.findMany({skip, take, where: {ativo: true}});
};

export const createProjeto = async (projeto: CreateProjetoDto): Promise<Projeto> => {
    return await prisma.projeto.create({ data: projeto });
};

export const updateProjeto = async (id: string, projeto: UpdateProjetoDto): Promise<Projeto> => {
    return await prisma.projeto.update({ data: projeto, where: {id} });
}

export const readProjeto = async (id: string): Promise<Projeto | null> => {
    return await prisma.projeto.findUnique({ where: {id} });
};

export const deleteProjeto = async(id: string): Promise<Projeto> => {
    return await prisma.projeto.update({ data: {ativo: false} , where: {id} });
}