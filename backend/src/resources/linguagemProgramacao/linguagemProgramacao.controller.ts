import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { LinguagemProgramacaoService } from "./linguagemProgramacao.service";
import { CreateLinguagemProgramacaoDto, UpdateLinguagemProgramacaoDto } from "./linguagemProgramacao.type";

const linguagemProgramacaoService = new LinguagemProgramacaoService();

const index = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Recupera os dados de todos as linguagens de programação.'
    */
    const skip = req.query.skip ? parseInt(req.query.skip?.toString()) : undefined;
    const take = req.query.take ? parseInt(req.query.take?.toString()) : undefined;
    try {
        const linguagensProgramacao = await linguagemProgramacaoService.list(skip, take);
        res.status(StatusCodes.OK).json(linguagensProgramacao);
    } catch(err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
};

const create = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Adiciona uma nova linguagem de programação.'
    #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/CreateLinguagemProgramacaoDto' }
    }
    #swagger.responses[200] = {
        schema: { $ref: '#/definitions/LinguagemProgramacao' }
    } 
    */

    const linguagemProgramacao = req.body as CreateLinguagemProgramacaoDto;
    try {
        const novoLinguagemProgramacao = await linguagemProgramacaoService.create(linguagemProgramacao);
        res.status(StatusCodes.CREATED).json(novoLinguagemProgramacao);
    } catch (err){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
};

const update = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Atualiza dados de uma linguagem de programação específica.'
    #swagger.parameters['id'] = { description: 'ID da linguagem de programação' }
    #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/UpdateLinguagemProgramacaoDto' }
    }
    */
    const { id } = req.params;
    const linguagemProgramacao = req.body as UpdateLinguagemProgramacaoDto;
    try {
        const updatedLinguagemProgramacao = await linguagemProgramacaoService.update(id, linguagemProgramacao);
        res.status(StatusCodes.NO_CONTENT).json(updatedLinguagemProgramacao);
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    } 
};

const read = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Recupera uma linguagem de programação específica.'
    #swagger.parameters['id'] = { description: 'ID da linguagem de programação' }
    #swagger.responses[200] = {
        schema: { $ref: '#/definitions/LinguagemProgramacao' }
    }
    */
    const { id } = req.params;
    try {
        const linguagemProgramacao = await linguagemProgramacaoService.read(id);
        if(!linguagemProgramacao){
            res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND)
        }else{
            res.status(StatusCodes.OK).json(linguagemProgramacao);
        }
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
};

const remove = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Torna uma linguagem de programação inativa.'
    #swagger.parameters['id'] = { description: 'ID da linguagem de programação' }
    */
    const { id } = req.params;
    try {
        const deletedLinguagemProgramacao = await linguagemProgramacaoService.delete(id);
        if(!deletedLinguagemProgramacao){
            res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND)
        }else{
            res.status(StatusCodes.NO_CONTENT).json(deletedLinguagemProgramacao);
        }
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    } 
};

export default { index, create, update, read, remove };

