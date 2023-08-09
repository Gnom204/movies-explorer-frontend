function Footer() {
    return (
        <footer className="footer">
            <div className="footer__description">
                <span className="footer__annotation">Учебный проект Яндекс.Практикум х BeatFilm.</span>
            </div>
            <span className="footer__underline"></span>
            <div className="footer__info">
                <span>© 2023</span>
                <div className="footer__links">
                    <a className="footer__link" target="_blank" rel="noopener" href="https://practicum.yandex.ru">Яндекс.Практикум</a>
                    <a className="footer__link" target="_blank" rel="noopener" href="https://github.com/Gnom204">Github</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer
