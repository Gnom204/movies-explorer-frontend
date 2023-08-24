import { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import Preloader from "./Preloader";

function MoviesCardList({ movies, windowSize, isSave, addFavorite, isLoading, movieDelete }) {
    const [moviesCount, setMoviesCount] = useState(16)

    useEffect(() => {
        if (windowSize <= 4000 && windowSize > 480) {
            setMoviesCount(16)
        } else if (windowSize <= 480) {
            setMoviesCount(5)
        }
    }, [])

    const clickHandler = () => {
        if (windowSize <= 4000 && windowSize >= 480) {
            setMoviesCount(moviesCount + 4)
            console.log(moviesCount)
        } else if (windowSize <= 480) {
            setMoviesCount(moviesCount + 2)
        }
    }
    const getDuration = (dur) => {
        let hours = Math.floor(dur / 60)
        let minute = dur % 60;
        return `${hours}ч${minute}м`;
    }


    const films = movies.slice(0, moviesCount).map((movie, index) => (
        <MoviesCard saveCard={isSave} index={index} movieDelete={movieDelete} addFavorite={addFavorite} movie={movie} trailerLink={movie.trailerLink} key={movie.id} link={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} name={movie.nameRU} time={getDuration(movie.duration)} />
    ))

    return (
        <section className="movieCardList">
            {isLoading ? <Preloader /> :
                <ul className="cardList">
                    {films}
                </ul>
            }
            <button onClick={clickHandler} className="cardList__btn">Ещё</button>
        </section>
    )
}
export default MoviesCardList;
