import { useState } from "react";

function MoviesCard(props) {
    const [select, setSelect] = useState(false)

    const clickHandler = () => {
        setSelect(!select)
    }

    return (
        <li className="card">
            <a target="_blank" rel="noreferrer" className="card__trailerLink" href={props.trailerLink}>
                <img src={props.link} alt={props.name} className="card__img" />
                <div className="card__description">
                    <div className="card__container">
                        <span className="card__heading">{props.name}</span>
                        {props.saveCard ? <button onClick={() => props.movieDelete(props.index)} className="card__btn-dlt" />
                            :
                            <input onClick={clickHandler} onChange={() => props.addFavorite(props.movie)} value={select} type="checkbox" name="select" className="card__btn" />
                        }
                    </div>
                    <p className="card__timing">{props.time}</p>
                </div>
            </a>
        </li>
    )
}
export default MoviesCard;
