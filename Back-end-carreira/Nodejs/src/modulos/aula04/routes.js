import express from "express";
import BooksController from "./controler.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.status(200).send("Curso de nodeJs");
});

routes.get("/livros", BooksController.getAllBooks);

routes.get("/livros/:id", BooksController.getBookById);

routes.post("/livros", BooksController.saveBook);

routes.put("/livros/:id", BooksController.updateBook);

routes.delete("/livros/:id", BooksController.deleteBook);

export default routes;
