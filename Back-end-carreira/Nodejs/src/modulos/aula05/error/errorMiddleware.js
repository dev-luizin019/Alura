import mongoose from "mongoose";
import { appError } from "./appError.js";
import { notFound } from "./notFoundMiddleware.js";

export const errorHandler = (error, req, res, next) => {
  if (error instanceof appError) {
    return res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
    });
  }

  if (error instanceof mongoose.Error.ValidationError) {
    const message = Object.values(error.errors).map((err) => err.message);

    return res.status(400).json({message: message});
  }

//   if (error instanceof notFound) {
//     return res.status(error.statusCode).json({
//       status: error.status,
//       messagem: error.message,
//     });
//   }

  console.error(error);

  return res.status(500).send({ message: "Erro interno do servidor" });
};
