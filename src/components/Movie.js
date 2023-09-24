import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";

function Movie({ searchMovies, isSave, movieDelete, saveMovies, movies, addFilms, windowSize, isLoading, addFavorite }) {

    return (
        <>
            <SearchForm foundFilm={movies} isSave={false} addFilms={addFilms} searchMovies={searchMovies} />
            <MoviesCardList isSave={false} movieDelete={movieDelete} saveMovies={saveMovies} isLoading={isLoading} windowSize={windowSize} addFavorite={addFavorite} movies={movies} />
        </>
    )
}

export default Movie;
