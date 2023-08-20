import { useState } from "react";

function MoviesCard(props) {
    const [select, setSelect] = useState(false)
    return (
        <div className="card">
            <img src={props.link} alt={props.name} className="card__img" />
            <div className="card__description">
                <div className="card__container">
                    <span className="card__heading">{props.name}</span>
                    {props.saveCard ? <button className="card__btn-dlt" />
                        :
                        <input value={select} type="radio" name="select" className="card__btn" />
                    }
                </div>
                <p className="card__timing">{props.time}</p>
            </div>
        </div>
    )
}
export default MoviesCard;
