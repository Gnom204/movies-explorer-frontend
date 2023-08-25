import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";

function SavedMovies({ windowSize, movieDelete, movies, searchMovies, addFilms }) {

    return (
        <>
            <SearchForm foundFilm={movies} addFilms={addFilms} searchMovies={searchMovies} />
            <MoviesCardList windowSize={windowSize} movieDelete={movieDelete} isSave={true} movies={movies} searchMovies={searchMovies}>

            </MoviesCardList>
        </>
    )
}
export default SavedMovies;
