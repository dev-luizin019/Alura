import mongoose from "mongoose";

const editorSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: [true, "O nome do autor é obrigatório"] },
    country: { type: String },
  },
  { versionKey: false },
);

const editor = mongoose.model("editor", editorSchema);

export {editor, editorSchema}