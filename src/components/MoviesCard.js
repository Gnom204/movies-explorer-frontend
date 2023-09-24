import { useEffect, useState } from "react";

function MoviesCard(props) {

    return (
        <li className="card">
            <a target="_blank" rel="noreferrer" className="card__trailerLink" href={props.trailerLink}>
                {props.saveCard ?
                    <img src={props.saveLink} alt={props.name} className="card__img" /> :
                    <img src={props.link} alt={props.name} className="card__img" />
                }            </a>
            <div className="card__description">
                <div className="card__container">
                    <span className="card__heading">{props.name}</span>
                    {props.saveCard ? <button onClick={() => props.movieDelete(props.index)} className="card__btn-dlt" />
                        :
                        <input onChange={props.changeHandler} checked={props.select} type="checkbox" name="select" className="card__btn" />
                    }
                </div>
                <p className="card__timing">{props.time}</p>
            </div>
        </li>
    )
}
export default MoviesCard;
