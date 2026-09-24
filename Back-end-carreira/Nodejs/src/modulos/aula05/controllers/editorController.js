import mongoose from "mongoose";
import { editor } from "../models/Editor.js";
import { appError } from "../error/appError.js";

const Editor = editor;

export class EditorController {
  static async getAllEditor(req, res, next) {
    try {
      const editors = await Editor.find({});

      if (editors.length === 0) {
        return next(new appError(401, "Nenhum editor encontrado!"));
      }

      res.status(201).json(editors);
    } catch (error) {
      next(error);
    }
  }
  static async saveEditor(req, res, next) {
    const newEditor = req.body;

    try {
      const editor = await Editor.create(newEditor);

      if (!editor) {
        return next(new appError(500, "Erro ao salvar editor"));
      }

      res.status(200).json(editor);
    } catch (error) {
      return next(error);
    }
  }
  static async getEditorById(req, res, next) {
    try {
      const id = req.params.id;

      if (!id) {
        return next(new appError(500, "Preencha o id"));
      }

      const editor = await getEditor(id);

      if (!editor) {
        return next(new appError(404, "Editor não encontrado"));
      }
      res.status(200).json(editor);
    } catch (error) {
      if (error instanceof mongoose.Error.CastError) {
        return next(
          new appError(400, "Os requisitos de busca estão incorretos"),
        );
      }
      return next();
    }
  }
  static async updateEditor(req, res, next) {
    try {
      const id = req.params.id;
      const newEditor = req.body;

      if (!id) {
        return next(new appError(500, "Preencha o id"));
      }

      const editor = await getEditor(id);

      if (!editor) {
        res;
        return next(new appError(404, "editor não encontrado"));
      }
      const updade = await Editor.findByIdAndUpdate(id, newEditor, {
        new: true,
      });

      res.status(200).json(updade);
    } catch (error) {
      return next(error);
    }
  }
  static async deleteEditor(req, res, next) {
    try {
      const id = req.params.id;

      if (!id) {
        return next(new appError(500, "Preencha o id"));
      }

      const editor = await getEditor(id);

      if (!editor) {
        return next(new appError(404, "editor não encontrado"));
      }
      const delEditor = await Editor.findByIdAndDelete(id);

      res.status(200).json(delEditor);
    } catch (error) {
      return next(error);
    }
  }
}

async function getEditor(id) {
  const editor = await Editor.findById(id);
  return editor;
}
