function AboutProject() {
    return (
        <section id="about" className=" pageInfo aboutProject">
            <h2 className="page__heading">О проекте</h2>
            <hr className="underline" />
            <div className="aboutProject__container">
                <div className="aboutProject__description">
                    <h3 className="aboutProject__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="aboutProject__description">
                    <h3 className="aboutProject__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="aboutProject__progress">
                <div className="aboutProject__back-progress">
                    <span className="aboutProject__text">1 неделя</span>
                </div>
                <div className="aboutProject__front-progress">
                    <span className="aboutProject__text">4 недели</span>
                </div>
            </div>
            <div className="aboutProject__progress-texts">
                <span className="aboutProject__progress-backText">Back-end</span>
                <span className="aboutProject__progress-frontText">Front-end</span>
            </div>
        </section>
    )
};
export default AboutProject;
