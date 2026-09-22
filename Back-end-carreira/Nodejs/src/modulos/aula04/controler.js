import books from "./data.js";

class BooksController {
  static getAllBooks(req, res) {
    res.status(200).json(books);
  }
  static saveBook(req, res) {
    const { id, title } = req.body;

    const newBook = {
      id,
      title,
    };
    books.push(newBook);

    res.status(201).json(books);
  }
  static getBookById(req, res) {
    const { id } = req.params;

    const book = bookExist(id);

    if (!book) {
      res.status(200).send({ message: "Livro não encontrado" });
      return;
    }

    res.status(200).json(book);
  }
  static updateBook(req, res) {
    const { id } = req.params;

    const { newTitle } = req.body;

    const book = bookExist(id);

    if (!book) {
      res.status(200).send({ message: "Livro não encontrado" });
      return;
    }

    book.title = newTitle;

    res.status(200).json(books);
  }
  static deleteBook(req, res) {
    const { id } = req.params;

    const book = bookExist(id);

    const bookIndice = books.findIndex((item) => (item.id = Number(id)));

    if (!book) {
      res.status(200).send({ message: "Livro não encontrado" });
      return;
    }
    //a partir da posição index, excluir 1 elemento do array
    books.splice(bookIndice, 1);

    res.status(200).send({ message: "Livro excluido", books });
  }
}

function bookExist(id) {
  return books.find((item) => item.id === Number(id));
}

export default BooksController;
