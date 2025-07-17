"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const produto_routes_1 = __importDefault(require("./routes/produto.routes"));
const data_source_1 = require("./database/data-source");
require('dotenv').config();
data_source_1.AppDataSource.initialize()
    .then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use('/produtos', produto_routes_1.default);
    app.listen(process.env.API_PORT, () => {
        console.log("servidor rodando na porta ", process.env.API_PORT);
    });
})
    .catch((error) => {
    console.error("Banco de dados não conectado. ", error);
});
