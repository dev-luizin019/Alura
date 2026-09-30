import express from "express"
import { LivrosController } from "../controllers/bookController.js"
import { paginationMiddleware } from "../middlewares/pagination.middleware.js"

const booksRoutes = express.Router()

booksRoutes.get("/livros", LivrosController.getAllBooks)

booksRoutes.get("/livros/search", LivrosController.getByAuthor)

booksRoutes.get("/livros/filter", paginationMiddleware ,LivrosController.getBookByFilter)

booksRoutes.get("/livros/page", LivrosController.getFromPagintation)

booksRoutes.get("/livros/:id", LivrosController.getBookById)

booksRoutes.post("/livros", LivrosController.saveBook)

booksRoutes.delete("/livros/:id", LivrosController.deleteBook)

booksRoutes.put("/livros/:id", LivrosController.updateBook)

export default booksRoutes