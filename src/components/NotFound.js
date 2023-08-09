import { NavLink } from "react-router-dom";

function NotFound() {
    return (
        <div className="notFound">
            <h2 className="notFound__number">404</h2>
            <span className="notFound__message">Страница не найдена</span>
            <NavLink to='/' className="notFound__link">Назад</NavLink>
        </div>
    )
}
export default NotFound;
