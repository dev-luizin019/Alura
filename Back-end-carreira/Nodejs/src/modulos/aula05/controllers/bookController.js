import mongoose from "mongoose";
import { appError } from "../error/appError.js";
import { editor, livro } from "../models/index.js";
import getFilter from "../utils/getFilters.js";

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
      if (author) query.author = { $regex: author, $options: "i" };
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
  static async getBookByFilter(req, res, next) {
    try {
      const { skip, limit, sort, page } = req.pagination;
      const busca = await getFilter(req.query);

      const [resultBooks, totalItens] = await Promise.all([
        livro
          .find(busca)
          .sort(sort)
          .skip(skip)
          .limit(limit)
          .populate("editor")
          .exec(),
        livro.countDocuments(busca),
      ]);

      if (!resultBooks) {
        return next(new appError(404, "Nenhum livro encontrado"));
      }

      res.status(200).json({
        info: {
          totalItens,
          totalPages: Math.ceil(totalItens / limit),
          currentPage: page,
          linesPerPage: limit,
        },
        data: resultBooks,
      });
    } catch (error) {
      next(error);
    }
  }
  static async getFromPagintation(req, res, next) {
    try {
      const {
        limit = 10,
        page = 1,
        ordemField = "title",
        ordem = 1,
      } = req.query;

      if ((limit < 0, page < 0)) {
        next(new appError(500, "Erro de busca"));
      }

      const resultBook = await livro
        .find()
        .sort({ [ordemField]: Number(ordem) })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("editor")
        .exec();
      if (!resultBook) {
        next(new appError(404, "Nenhum livro na lista"));
      }

      res.status(200).json({ message: resultBook });
    } catch (error) {
      next(error);
    }
  }
}

async function getBook(id) {
  const book = await livro.findById(id);
  return book;
}
