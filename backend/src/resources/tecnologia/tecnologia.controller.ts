import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { TecnologiaService } from "./tecnologia.service";
import { CreateTecnologiaDto, UpdateTecnologiaDto } from "./tecnologia.type";

const tecnologiaService = new TecnologiaService();

const index = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Recupera os dados de todos as tecnologias.'
    */
    const skip = req.query.skip ? parseInt(req.query.skip?.toString()) : undefined;
    const take = req.query.take ? parseInt(req.query.take?.toString()) : undefined;
    try {
        const produtos = await tecnologiaService.list(skip, take);
        res.status(StatusCodes.OK).json(produtos);
    } catch(err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
};

const create = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Adiciona uma nova tecnologia.'
    #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/CreateTecnologiaDto' }
    }
    #swagger.responses[200] = {
        schema: { $ref: '#/definitions/Tecnologia' }
    } 
    */

    const tecnologia = req.body as CreateTecnologiaDto;
    try {
        const novoTecnologia = await tecnologiaService.create(tecnologia);
        res.status(StatusCodes.CREATED).json(novoTecnologia);
    } catch (err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
};

const update = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Atualiza dados de uma tecnologia específica.'
    #swagger.parameters['id'] = { description: 'ID da tecnologia' }
    #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/UpdateTecnologiaDto' }
    }
    */
    const { id } = req.params;
    const tecnologia = req.body as UpdateTecnologiaDto;
    try {
        const updatedTecnologia = await tecnologiaService.update(id, tecnologia);
        res.status(StatusCodes.NO_CONTENT).json(updatedTecnologia);
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    } 
};

const read = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Recupera uma tecnologia específica.'
    #swagger.parameters['id'] = { description: 'ID da tecnologia' }
    #swagger.responses[200] = {
        schema: { $ref: '#/definitions/Tecnologia' }
    }
    */
    const { id } = req.params;
    try {
        const tecnologia = await tecnologiaService.read(id);
        if(!tecnologia){
            res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND)
        }else{
            res.status(StatusCodes.OK).json(tecnologia);
        }
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
};

const remove = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Torna uma tecnologia inativa.'
    #swagger.parameters['id'] = { description: 'ID da tecnologia' }
    */
    const { id } = req.params;
    try {
        const deletedTecnologia = await tecnologiaService.delete(id);
        if (!deletedTecnologia){
            res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND)
        }else{
            res.status(StatusCodes.NO_CONTENT).json(deletedTecnologia);
        }
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    } 
};

export default { index, create, update, read, remove };

