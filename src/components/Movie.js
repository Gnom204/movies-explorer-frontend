import { useState } from "react";
import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";

function Movie({ searchMovies, errorMassage, getSearchedFilm, firstSearch, getFilteredMovies, isSave, movieDelete, saveMovies, movies, addFilms, windowSize, isLoading, addFavorite }) {
    const [processSearch, setProcessSearch] = useState(false)
    return (
        <>
            <SearchForm setProcessSearch={setProcessSearch} errorMassage={errorMassage} getSearchedFilm={getSearchedFilm} foundFilm={movies} getFilteredMovies={getFilteredMovies} isSave={false} addFilms={addFilms} searchMovies={searchMovies} />
            <MoviesCardList processSearch={processSearch} firstSearch={firstSearch} isSave={false} movieDelete={movieDelete} saveMovies={saveMovies} isLoading={isLoading} windowSize={windowSize} addFavorite={addFavorite} movies={movies} />
        </>
    )
}

export default Movie;
