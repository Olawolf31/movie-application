import Movie from "../models/movie.js";
import { successResponse } from "../utils/responseHandlers.js";
import createError from "http-errors";
import { addNewMovieService, getAllMovies } from "../service/movieService.js";

export const addNewMovie = async (req, res, next) => {
  try {
    const poster = req.file;

    const newMovie = new Movie({
      ...req.body,
      poster: poster?.filename,
    });

    await addNewMovieService(newMovie);

    return successResponse(res, 200, "Successfully Added", newMovie);
  } catch (error) {
    next(error);
  }
};

export const listAllMovie = async (req, res, next) => {
  try {
    const allMovies = await getAllMovies(Movie);
    return successResponse(res, 200, "All Movies", allMovies);
  } catch (error) {
    next(error);
  }
};
