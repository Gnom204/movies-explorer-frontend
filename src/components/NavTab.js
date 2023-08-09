import { NavLink } from "react-router-dom";

function NavTab() {
    return (
        <div className="navTab">
            <nav className="navTab__menu">
                <ul className="navTab__items">
                    <li className="navTab__item">
                        <a
                            href="#about"
                            className="navTab__link"
                        >
                            О проекте
                        </a>
                    </li>
                    <li className="navTab__item">
                        <a
                            href="#techs"
                            className="navTab__link"
                        >
                            Технологии
                        </a>
                    </li>
                    <li className="navTab__item">
                        <a
                            href="#student"
                            className="navTab__link"
                        >
                            Студент
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default NavTab;
