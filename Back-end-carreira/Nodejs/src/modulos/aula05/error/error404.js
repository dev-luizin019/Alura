import { appError } from "./appError.js";

export class error404 extends appError {
  constructor() {
    super(404, "Rota não encontrada");
  }
}
