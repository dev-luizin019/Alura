import connect from "../../config/db.connect.js";
import chalk from "chalk";
import express from "express"
const conection = await connect();

conection.on('error', (erro)=>{
    console.log(chalk.red("erro de conexão", erro));
})

const app = express()
app.use(express.json())

export default app