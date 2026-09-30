import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    title: {
      type: String,
      required: [true, "Titulo do livro é origatório"],
    },
    pages: {
      type: Number,
      mex: [1000, "Número de páginas máximo é 1000"],
      min: [20, "Número de páginas mínimo é 20"],
      required: [true, "numero de páginas é obrigatório"],
    },
    price: { type: Number },
    author: { type: String },
    editor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "editor",
      required: [true, "Editora é obrigatória"],
    },
    published: {
      type: String,
      requered: [true, "Status do livro obrigatório"],
      enum: {
        values: ["Sim", "Não"],
        message: "Status {VALUE} não disponível",
      },
    },
  },
  { versionKey: false },
);

// versionKey é uma propriedade do mangoDB de versionamento do schema

// essa const quer dizer que no banco a tabela livros e no projeto
// o schema referente a essa tabela é livroSchema
const livro = mongoose.model("livros", livroSchema);

export default livro;
