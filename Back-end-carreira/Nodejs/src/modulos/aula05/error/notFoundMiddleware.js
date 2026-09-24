import { error404 } from "./error404.js";

export const notFound = (req, res, next) => {
  const errorNotFound = new error404();
  next(errorNotFound);
};
