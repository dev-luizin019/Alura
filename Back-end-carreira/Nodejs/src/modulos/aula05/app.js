import connect from "../../config/db.connect.js";
import chalk from "chalk";
import express from "express"
import booksRoutes from "./routes/bookRoutes.js"
import editorRoutes from "./routes/editorRoutes.js"
import { errorHandler } from "./error/errorMiddleware.js";
import { notFound } from "./error/notFoundMiddleware.js";

const conection = await connect();

conection.on('error', (erro)=>{
    console.log(chalk.red("erro de conexão", erro));
})

const app = express()
app.use(express.json())

app.use(booksRoutes)
app.use(editorRoutes)

app.use(notFound)

app.use(errorHandler)
export default app