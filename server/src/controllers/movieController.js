import Movie from "../models/movie.js";
import successResponse from "../utils/responseHandlers";
import pkg from 'http-errors';
import { addNewMovieService } from "../service/movieService.js";

const { createError } = pkg;

export const addNewMovie = async (req, res, next) => {
  try {
    const image = req.file;

    const newMovie = new Movie({
      ...req.body,
      image: image?.filename,
    });

    await addNewMovieService(newMovie);

    return successResponse(res, 200, "Movie successfully added", newMovie);
  } catch (error) {
    createError(400, "unsuccessful");
  }
};
