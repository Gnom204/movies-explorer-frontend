import MoviesCardList from "./MoviesCardList";
import SearchForm from "./SearchForm";

function SavedMovies({ windowSize, movieDelete, movies, searchMovies, newMovies, addFilms }) {

    return (
        <>
            <SearchForm foundFilm={movies} addFilms={addFilms} searchMovies={newMovies} />
            <MoviesCardList windowSize={windowSize} movieDelete={movieDelete} isSave={true} movies={movies} searchMovies={searchMovies}>

            </MoviesCardList>
        </>
    )
}
export default SavedMovies;
