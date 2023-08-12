import express from "express";
import { addNewMovie } from "../controllers/movieController.js";
import runValidator from "../validators/index.js";
import { validateMovie } from "../validators/movie.js";
import upload from "../middleware/uploadImages.js"

const movieRouter = express.Router();

movieRouter.post(
  "/",
  upload('movies').single('poster'),
  validateMovie,
  runValidator,
  addNewMovie
);

export default movieRouter;
