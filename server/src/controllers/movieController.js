import Movie from "../models/movie.js";
import { successResponse } from "../utils/responseHandlers.js";
import createError from "http-errors";
import { addNewMovieService } from "../service/movieService.js";

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
