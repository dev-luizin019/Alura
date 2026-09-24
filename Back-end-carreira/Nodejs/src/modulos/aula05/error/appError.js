export class appError extends Error {

  constructor(status = 400,message, code) {
    super(message);
    this.statusCode = status;
    this.code = code;
    Object.setPrototypeOf(this, new.target.prototype);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
