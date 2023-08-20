function MoviesCardList(props) {
    return (
        <section className="movieCardList">
            <div className="cardList">
                {props.children}
            </div>
            <button className="cardList__btn">Ещё</button>
        </section>
    )
}
export default MoviesCardList;
