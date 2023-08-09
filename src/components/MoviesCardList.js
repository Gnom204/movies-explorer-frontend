function MoviesCardList(props) {
    return (
        <div className="movieCardList">
            <div className="cardList">
                {props.children}
            </div>
            <button className="cardList__btn">Ещё</button>
        </div>
    )
}
export default MoviesCardList;
