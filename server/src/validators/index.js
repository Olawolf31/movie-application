import { validationResult } from "express-validator";
import pkg from 'http-errors';

const { createError } = pkg;

const validate = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new createError(422, errors.array()[0].msg);
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default validate;
