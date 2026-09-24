import { appError } from "../error/appError.js";
import { editor } from "../models/Editor.js";
import livro from "../models/Livro.js";

export class LivrosController {
  static async getAllBooks(req, res, next) {
    try {
      const books = await livro.find({});

      if (!books) {
        return next(new appError(400, "Nenhum livro encontrado!"));
      }

      res.status(201).json(books);
    } catch (error) {
      return next(error);
    }
  }
  static async saveBook(req, res, next) {
    const body = req.body;
    try {
      const findEditor = await editor.findById(body.iditorId);

      if (!findEditor) {
        return next(new appError(404, "Editora não encontada"));
      }

      const completeBook = { ...body, editor: { ...findEditor } };

      const book = await livro.create(completeBook);

      if (!book) {
        return next(new appError(500, "Erro ao salvar livro"));
      }
      res.status(200).json(book);
    } catch (error) {
      return next(error);
    }
  }
  static async getBookById(req, res) {
    try {
      const id = req.params.id;

      if (!id) {
        return next(new appError(500, "Preencha o id"));
      }

      const book = await getBook(id);

      if (!book) {
        return next(new appError(404, "Livro não encontrado"));
      }
      res.status(200).json(book);
    } catch (error) {
      return next();
    }
  }
  static async updateBook(req, res, next) {
    try {
      const id = req.params.id;
      const newBook = req.body;

      if (!id) {
        return next(new appError(500, "Preencha o id"));
      }

      const book = await getBook(id);

      if (!book) {
        return next(new appError(404, "Livro não encontrado"));
      }
      const updade = await livro.findByIdAndUpdate(id, newBook, { new: true });

      res.status(200).json(updade);
    } catch (error) {
      return next();
    }
  }
  static async deleteBook(req, res, next) {
    try {
      const id = req.params.id;

      if (!id) {
        return next(new appError(500, "Preencha o id"));
      }

      const book = await getBook(id);

      if (!book) {
        return next(new appError(404, "Livro não encontrado"));
      }
      const delBook = await livro.findByIdAndDelete(id);

      res.status(200).json(delBook);
    } catch (error) {
      return next(error);
    }
  }
  static async getByAuthor(req, res, next) {
    try {
      const { author, price } = req.query;

      const query = {};
      if (author) query.author = author;
      if (price) query.price = Number(price);

      const books = await livro.find(query);

      if (books.length === 0) {
        return next(new appError(404, "Nenhum livro encontrado"));
      }

      res.status(200).json(books);
    } catch (error) {
      return next(error);
    }
  }
}

async function getBook(id) {
  const book = await livro.findById(id);
  return book;
}
