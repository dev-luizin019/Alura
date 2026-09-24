import mongoose, { version } from "mongoose";
import { editorSchema } from "./Editor.js";

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: [true, "Titulo do livro é origatório" ]},
  pages: { type: Number },
  price: { type: Number },
  author: { type: String },
  editor: editorSchema
}, {versionKey: false});

// versionKey é uma propriedade do mangoDB de versionamento do schema

// essa const quer dizer que no banco a tabela livros e no projeto
// o schema referente a essa tabela é livroSchema
const livro = mongoose.model("livros", livroSchema)

export default livro;