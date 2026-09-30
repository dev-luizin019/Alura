import { editor } from "../models/index.js";

async function getFilter(values) {
  const { author, editorName, price, maxPage, minPage } = values;

  const busca = {};

  // if (editor) busca.editor = editor;
  if (author) busca.author = author;
  if (price) busca.price = Number(price);
  if (minPage || maxPage) busca.pages = {};

  if (minPage) busca.pages.$gte = Number(minPage);
  if (maxPage) busca.pages.$lte = Number(maxPage);

  if (editorName) {
    const findEditor = await editor.findOne({ name: editorName });

    if (findEditor) {
      const editorId = findEditor._id;
      busca.editor = editorId;
    } else {
      busca.editor = new mongoose.Types.ObjectId();
    }
  }

  return busca;
}

export default getFilter;