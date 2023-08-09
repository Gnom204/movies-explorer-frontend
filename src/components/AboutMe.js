import myPhoto from '../images/pic__COLOR_pic.png'
function AboutMe() {
    return (
        <div id='student' className="pageInfo aboutMe">
            <h2 className="aboutMe__name">Студент</h2>
            <hr className="underline" />
            <div className="aboutMe__info">
                <div className="aboutMe__main-text">
                    <h3 className="promo__heading aboutMe__name">Александр</h3>
                    <p className="aboutMe__profession">Фронтенд-разработчик, 17 лет</p>
                    <p className="aboutMe__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className="aboutMe__social-media-link" href="https://github.com/Gnom204">Github</a>
                </div>
                <div className="aboutMe__img-container">
                    <img className="aboutMe__img" alt='Фотография автора' src={myPhoto} />
                </div>
            </div>
        </div>
    )
};
export default AboutMe;
