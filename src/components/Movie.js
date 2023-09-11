import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";

function Movie({ searchMovies, saveMovies, movies, addFilms, windowSize, isLoading, addFavorite }) {

    return (
        <>
            <SearchForm foundFilm={movies} addFilms={addFilms} searchMovies={searchMovies} />
            <MoviesCardList isSave={false} saveMovies={saveMovies} isLoading={isLoading} windowSize={windowSize} addFavorite={addFavorite} movies={movies} />
        </>
    )
}

export default Movie;
