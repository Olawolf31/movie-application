import { body } from "express-validator";

export const validateMovie = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 1, max: 50 })
    .withMessage("Title must be between 1 and 50 characters"),
  body("genre").trim().notEmpty().withMessage("Genre is required"),
  body("description").trim().notEmpty().withMessage("Description is required"),
  body("rating").trim().notEmpty().withMessage("Rating is required"),
  body("year").trim().notEmpty().withMessage("year is required"),
];
