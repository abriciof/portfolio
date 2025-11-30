import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";

dotenv.config();

const doc = {
    info: {
        title: "API do Portfólio - Fabrício Guimarães",
        description: "Documentação da API",
        autor: "Fabrício Guimarães",
        email: "fdcg@icomp.ufam.edu.br"
    },
    host: `${process.env.HOST}:${process.env.PORT}`,
    definitions: {
        Projeto: {
            id: "8a2053de-5d92-4c43-97c0-c9b2b0d56703",
            titulo: "Aplicação Mobile",
            descricao: "Criação de um aplicativo de Serviços de um Hotel",
            ano: 2021,
            ativo: true,
            createdAt: "2021-11-07T19:27:15.645Z",
            updatedAt: "2021-11-07T19:27:15.645Z"
        },
        CreateProjetoDto: {
            titulo: "Aplicação Mobile",
            descricao: "Criação de um aplicativo de Serviços de um Hotel",
            ano: 2021
        },
        UpdateProjetoDto: {
            titulo: "Aplicação Mobile",
            descricao: "Criação de um aplicativo de Serviços de um Hotel",
            ano: 2021
        },
        Tecnologia: {
            id: "8a2053de-5d92-4c43-97c0-c9b2b0d56703",
            nome: ".NET",
            versao: "8.0",
            ativo: true,
            createdAt: "2021-11-07T19:27:15.645Z",
            updatedAt: "2021-11-07T19:27:15.645Z"
        },
        CreateTecnologiaDto: {
            nome: ".NET",
            versao: "8.0"
        },
        UpdateTecnologiaDto: {
            nome: ".NET",
            versao: "8.0"
        },
        LinguagemProgramacao: {
            id: "8a2053de-5d92-4c43-97c0-c9b2b0d56703",
            nome: "Python",
            versao: "3.12",
            ativo: true,
            createdAt: "2021-11-07T19:27:15.645Z",
            updatedAt: "2021-11-07T19:27:15.645Z"
        },
        CreateLinguagemProgramacaoDto: {
            nome: "Python",
            versao: "3.12"
        },
        UpdateLinguagemProgramacaoDto: {
            nome: "Python",
            versao: "3.12"
        },
        AreaConhecimento: {
            id: "8a2053de-5d92-4c43-97c0-c9b2b0d56703",
            nome: "CI/CD",
            versao: "3.12",
            ativo: true,
            createdAt: "2021-11-07T19:27:15.645Z",
            updatedAt: "2021-11-07T19:27:15.645Z"
        },
        CreateAreaConhecimentoDto: {
            nome: "CI/CD",
            versao: "3.12"
        },
        UpdateAreaConhecimentoDto: {
            nome: "CI/CD",
            versao: "3.12"
        }
    }
};

const outputFile = "./swagger-output.json";
const routes = ["./src/router/index.ts"];

swaggerAutogen()(outputFile, routes, doc);