import { PrismaClient } from "@prisma/client";

export interface ICrudService<T, CreateDto, UpdateDto> {
    list(skip?: number, take?: number): Promise<T[]>;
    create(data: CreateDto): Promise<T>;
    update(id: string, data: UpdateDto): Promise<T>;
    read(id: string): Promise<T | null>;
    delete(id: string): Promise<T>;
}

export abstract class BaseService<T, CreateDto, UpdateDto> implements ICrudService<T, CreateDto, UpdateDto> {
    protected prisma: PrismaClient;
    protected model: string;

    constructor(model: string) {
        this.prisma = new PrismaClient();
        this.model = model;
    }

    async list(skip?: number, take?: number): Promise<T[]> {
        // @ts-ignore
        return await this.prisma[this.model].findMany({ skip, take, where: { ativo: true } });
    }

    async create(data: CreateDto): Promise<T> {
        // @ts-ignore
        return await this.prisma[this.model].create({ data });
    }

    async update(id: string, data: UpdateDto): Promise<T> {
        // @ts-ignore
        return await this.prisma[this.model].update({ where: { id }, data });
    }

    async read(id: string): Promise<T | null> {
        // @ts-ignore
        return await this.prisma[this.model].findUnique({ where: { id } });
    }

    async delete(id: string): Promise<T> {
        // @ts-ignore
        return await this.prisma[this.model].update({ where: { id }, data: { ativo: false } });
    }
}