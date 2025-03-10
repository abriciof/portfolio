import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";

dotenv.config();

const doc = {
    info: {
        title: "API do Portfólio do Fabrício Guimarães",
        description: "Documentação da API",
    },
    host: `${process.env.HOST}:${process.env.PORT}`,
    definitions: {
        Projeto: {
            id: "8a2053de-5d92-4c43-97c0-c9b2b0d56703",
            titulo: "Aplicação Mobile",
            descricao: "Criação de um aplicativo de Serviços de um Hotel",
            ano: 2021,
            createdAt: "2021-11-07T19:27:15.645Z",
            updatedAt: "2021-11-07T19:27:15.645Z",
        },
        CreateProjetoDto: {
            titulo: "Aplicação Mobile",
            descricao: "Criação de um aplicativo de Serviços de um Hotel",
            ano: 2021
        }
    }
};

const outputFile = "./swagger-output.json";
const routes = ["./src/router/index.ts"];

swaggerAutogen()(outputFile, routes, doc);