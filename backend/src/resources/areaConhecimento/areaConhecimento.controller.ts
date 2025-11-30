import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { AreaConhecimentoService } from "./areaConhecimento.service";
import { CreateAreaConhecimentoDto, UpdateAreaConhecimentoDto } from "./areaConhecimento.type";

const areaConhecimentoService = new AreaConhecimentoService();

const index = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Recupera os dados de todos as áreas de conhecimento.'
    */
    const skip = req.query.skip ? parseInt(req.query.skip?.toString()) : undefined;
    const take = req.query.take ? parseInt(req.query.take?.toString()) : undefined;
    try {
        const areasConhecimento = await areaConhecimentoService.list(skip, take);
        res.status(StatusCodes.OK).json(areasConhecimento);
    } catch(err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
};

const create = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Adiciona uma nova área de conhecimento.'
    #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/CreateAreaConhecimentoDto' }
    }
    #swagger.responses[200] = {
        schema: { $ref: '#/definitions/AreaConhecimento' }
    } 
    */

    const areaConhecimento = req.body as CreateAreaConhecimentoDto;
    try {
        const novoAreaConhecimento = await areaConhecimentoService.create(areaConhecimento);
        res.status(StatusCodes.CREATED).json(novoAreaConhecimento);
    } catch (err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
};

const update = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Atualiza dados de uma área de conhecimento específica.'
    #swagger.parameters['id'] = { description: 'ID da área de conhecimento' }
    #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/UpdateAreaConhecimentoDto' }
    }
    */
    const { id } = req.params;
    const areaConhecimento = req.body as UpdateAreaConhecimentoDto;
    try {
        const updatedAreaConhecimento = await areaConhecimentoService.update(id, areaConhecimento);
        res.status(StatusCodes.NO_CONTENT).json(updatedAreaConhecimento);
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    } 
};

const read = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Recupera uma área de conhecimento específica.'
    #swagger.parameters['id'] = { description: 'ID da área de conhecimento' }
    #swagger.responses[200] = {
        schema: { $ref: '#/definitions/AreaConhecimento' }
    }
    */
    const { id } = req.params;
    try {
        const areaConhecimento = await areaConhecimentoService.read(id);
        if(!areaConhecimento){
            res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND)
        }else{
            res.status(StatusCodes.OK).json(areaConhecimento);
        }
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
};

const remove = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Torna uma área de conhecimento inativa.'
    #swagger.parameters['id'] = { description: 'ID da área de conhecimento' }
    */
    const { id } = req.params;
    try {
        const deletedAreaConhecimento = await areaConhecimentoService.delete(id);
        if(!deletedAreaConhecimento){
            res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND)
        }else{
            res.status(StatusCodes.NO_CONTENT).json(deletedAreaConhecimento);
        }
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    } 
};

export default { index, create, update, read, remove };

