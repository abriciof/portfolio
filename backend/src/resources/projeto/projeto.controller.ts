import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { 
    listProjetos, 
    createProjeto, 
    updateProjeto, 
    readProjeto, 
    deleteProjeto } from "./projeto.service";
import { CreateProjetoDto, UpdateProjetoDto } from "./projeto.type";


const index = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Recupera os dados de todos os projetos.'
    */
    const skip = req.query.skip ? parseInt(req.query.skip?.toString()) : undefined;
    const take = req.query.take ? parseInt(req.query.take?.toString()) : undefined;
    try {
        const produtos = await listProjetos(skip, take  );
        res.status(StatusCodes.OK).json(produtos);
    } catch(err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
};

const create = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Adiciona um novo projeto.'
    #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/CreateProjetoDto' }
    }
    #swagger.responses[200] = {
        schema: { $ref: '#/definitions/Projeto' }
    } 
    */

    const projeto = req.body as CreateProjetoDto;
    try {
        const novoProjeto = await createProjeto(projeto);
        res.status(StatusCodes.CREATED).json(novoProjeto);
    } catch (err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
};

const update = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Atualiza dados um projeto específico.'
    #swagger.parameters['id'] = { description: 'ID do projeto' }
    #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/UpdateProjetoDto' }
    }
    */
    const { id } = req.params;
    const projeto = req.body as UpdateProjetoDto;
    try {
        const updatedProjeto = await updateProjeto(id, projeto);
        res.status(StatusCodes.NO_CONTENT).json(updatedProjeto);
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    } 
};

const read = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Recupera um projeto específico.'
    #swagger.parameters['id'] = { description: 'ID do projeto' }
    #swagger.responses[200] = {
        schema: { $ref: '#/definitions/Projeto' }
    }
    */
    const { id } = req.params;
    try {
        const projeto = await readProjeto(id);
        res.status(StatusCodes.OK).json(projeto);
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
};

const remove = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Torna um projeto inativo.'
    #swagger.parameters['id'] = { description: 'ID do produto' }
    */
    const { id } = req.params;
    try {
        const deletedProjeto = await deleteProjeto(id);
        res.status(StatusCodes.NO_CONTENT).json(deletedProjeto);
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    } 
};

export default { index, create, update, read, remove };

