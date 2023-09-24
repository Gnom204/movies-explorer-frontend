import { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import Preloader from "./Preloader";

function MoviesCardList({ movies, saveMovies, windowSize, isSave, addFavorite, isLoading, movieDelete }) {
    const [moviesCount, setMoviesCount] = useState(16)

    console.log({ movies, saveMovies })

    useEffect(() => {
        if (windowSize <= 4000 && windowSize > 768) {
            setMoviesCount(16)
        }
        if (windowSize <= 480) {
            setMoviesCount(5)
        }
        if (windowSize <= 768 && windowSize > 480) {
            setMoviesCount(8)
        }
    }, [windowSize])

    const clickHandler = () => {
        if (windowSize <= 4000 && windowSize >= 768) {
            setMoviesCount(moviesCount + 4)
            console.log(moviesCount)
        } else if (windowSize <= 768) {
            setMoviesCount(moviesCount + 2)
        }
    }
    const getDuration = (dur) => {
        let hours = Math.floor(dur / 60)
        let minute = dur % 60;
        return `${hours}ч${minute}м`;
    }

    const handleCheckBoxChange = (movie, id) => {
        console.log(movie)
        if (savedMoviesCheck(movie)) {
            const element = saveMovies.find((saveMovie) => saveMovie.movieId === id)
            movieDelete(element._id)
        } else {
            addFavorite(movie)
        }
    }

    const savedMoviesCheck = (movie) => {
        return saveMovies.some((savedMovie) => savedMovie.movieId === movie.id)
    }

    const films = movies.slice(0, moviesCount).map((movie, index) => (
        <MoviesCard changeHandler={() => handleCheckBoxChange(movie, movie.id)} isSaveCard={false} select={isSave ? '' : savedMoviesCheck(movie)} saveCard={isSave} saveLink={movie.image} index={movie._id} movieDelete={movieDelete} addFavorite={addFavorite} movie={movie} trailerLink={movie.trailerLink} key={movie.id} link={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} name={movie.nameRU} time={getDuration(movie.duration)} />
    ))

    return (
        <section className="movieCardList">
            {isLoading ? <Preloader /> :
                <ul className="cardList">
                    {films}
                </ul>
            }
            {
                movies.length === 0 || isSave ? false : <button onClick={clickHandler} className="cardList__btn">Ещё</button>
            }
        </section>
    )
}
export default MoviesCardList;
