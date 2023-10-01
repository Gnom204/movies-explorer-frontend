import { useState } from "react";
import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";

function SavedMovies({ errorMassage, windowSize, isLoading, getFilteredMovies, movieDelete, movies, searchMovies, newMovies, addFilms }) {

    const [processSearch, setProcessSearch] = useState(false)

    return (
        <>
            <SearchForm setProcessSearch={setProcessSearch} errorMassage={errorMassage} foundFilm={movies} getFilteredMovies={getFilteredMovies} isSave={true} addFilms={addFilms} searchMovies={newMovies} />
            <MoviesCardList processSearch={processSearch} isLoading={isLoading} windowSize={windowSize} movieDelete={movieDelete} isSave={true} movies={movies} searchMovies={searchMovies}>

            </MoviesCardList>
        </>
    )
}
export default SavedMovies;
