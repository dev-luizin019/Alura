import mongoose, { version } from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.type.ObjectId },
  title: { type: String, required: true },
  page: { type: Number },
  author: { type: String },
  price: { type: Number },
}, {versionKey: false});

// versionKey é uma propriedade do mangoDB de versionamento do schema

// essa const quer dizer que no banco a tabela livros e no projeto
// o schema referente a essa tabela é livroSchema
const livro = mongoose.model("livros", livroSchema)

export default livro;