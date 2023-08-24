import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";

function Movie({ searchMovies, movies, addFilms, windowSize, isLoading, addFavorite }) {

    return (
        <>
            <SearchForm foundFilm={movies} addFilms={addFilms} searchMovies={searchMovies} />
            <MoviesCardList isSave={false} isLoading={isLoading} windowSize={windowSize} addFavorite={addFavorite} movies={movies} />
        </>
    )
}

export default Movie;
