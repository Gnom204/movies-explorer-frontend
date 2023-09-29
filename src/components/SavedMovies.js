import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";

function SavedMovies({ errorMassage, windowSize, isLoading, getFilteredMovies, movieDelete, movies, searchMovies, newMovies, addFilms }) {

    return (
        <>
            <SearchForm errorMassage={errorMassage} foundFilm={movies} getFilteredMovies={getFilteredMovies} isSave={true} addFilms={addFilms} searchMovies={newMovies} />
            <MoviesCardList isLoading={isLoading} windowSize={windowSize} movieDelete={movieDelete} isSave={true} movies={movies} searchMovies={searchMovies}>

            </MoviesCardList>
        </>
    )
}
export default SavedMovies;
