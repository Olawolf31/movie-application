import { Schema, model } from "mongoose";

const movieSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },
  genre: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
  },
  year: {
    type: Number,
  },
  poster:{
    type: String
  }
});

const Movie = model("movies", movieSchema);

export default Movie;
