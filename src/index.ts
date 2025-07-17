import express from "express";
import 'reflect-metadata';
import routeProdutos from './routes/produto.routes'
import routeUser from './routes/usuario.routes'
import routeLogin from './routes/auth.routes'
import { AppDataSource } from "./database/data-source";
require('dotenv').config()
const cors = require('cors')


AppDataSource.initialize()
.then(() => {
        const app = express()
        app.use(express.json())
        //cors deve ser implementado antes de qualquer rota
        const origins = ["http://localhost:4000", "https://dontpad.com"]
        app.use(cors({
            origin: (origin:string, callback: Function) => {
                if(!origin) return callback(null, true)

                if(origins.includes(origin)){
                    return callback(null, true)
                }else{
                    return callback(new Error("Origem não permitida"))
                }
            },
            credentials: true,
            methods: ["GET", "POST", "PUT", "DELETE"],
            allowedHeaders: ["Content-Type", "Authorization"]
        }))
        app.use('/produtos',routeProdutos)
        app.use('/usuarios', routeUser)
        app.use("/login", routeLogin)
        app.listen(process.env.PORT, () => {
            console.log("servidor rodando na porta ",process.env.PORT)
        })
    })
    .catch((error) => {
        console.error("Banco de dados não conectado. ", error)
    })


