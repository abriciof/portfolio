import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { listProjetos, createProjeto } from "./projeto.service";
import { CreateProjetoDto } from "./projeto.type";


const index = async (req: Request, res: Response) => {
    /*
    #swagger.summary = 'Recupera os dados de todos os projetos da base de dados.'
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
    #swagger.summary = 'Adiciona um novo projeto na base de dados.'
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

export default { index, create };

