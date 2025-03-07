import express from 'express'
import { testarConexao } from './db.js'
import bodyParse from 'body-parser'
import cors from 'cors';
import usuarioRoutes from './src/routes/usuarioRoutes.js'
import bodyParser from 'body-parser';

const app = express(); //criar instancia do express

testarConexao()
app.use(cors());
//Uso do body-parser para receber os valores do corpo da requisição json
app.use(bodyParser.json())
//definir as rotas de usuarios importadas no arquivo
app.use(usuarioRoutes)

const porta = 3000
app.listen(porta, () => {
    console.log(`Api rodando na porta http://localhost:${porta}`)
})