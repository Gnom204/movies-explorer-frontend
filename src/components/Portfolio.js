function Portfolio() {
    return (
        <div className="pageInfo portfolio">
            <span className="aboutProject__progress-texts">Портфолио</span>
            <ul className="portfolio__list">
                <li className="portfolio__item"><a rel="noreferrer" target="_blank" href="https://gnom204.github.io/how-to-learn/" className="portfolio__url">Статичный сайт</a></li>
                <hr className="portfolio__underline" />
                <li className="portfolio__item"><a rel="noreferrer" target="_blank" href="https://gnom204.github.io/travel-in-russia/" className="portfolio__url">Адаптивный сайт</a></li>
                <hr className="portfolio__underline" />
                <li className="portfolio__item"><a rel="noreferrer" target="_blank" href="https://github.com/Gnom204/react-mesto-api-full-gha" className="portfolio__url">Одностраничное приложение</a></li>
            </ul>
        </div>
    )
}
export default Portfolio;
