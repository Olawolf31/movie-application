

export const addNewMovieService = async (movie) => {
    return movie.save()
}

export const getAllMovies = async (movie) => {
    return movie.find()
}