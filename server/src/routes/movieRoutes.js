import express from "express";
import { addNewMovie, listAllMovie } from "../controllers/movieController.js";
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

movieRouter.get("/", listAllMovie)

export default movieRouter;
