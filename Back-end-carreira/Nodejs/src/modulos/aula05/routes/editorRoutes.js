import express from "express"
import { EditorController } from "../controllers/editorController.js"

const editorRoutes = express.Router()

editorRoutes.get("/editor", EditorController.getAllEditor)

editorRoutes.post("/editor", EditorController.saveEditor)

editorRoutes.get("/editor/:id", EditorController.getEditorById)

editorRoutes.delete("/editor/:id", EditorController.deleteEditor)

editorRoutes.put("/editor/:id", EditorController.updateEditor)

export default editorRoutes