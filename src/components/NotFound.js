import { NavLink, useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate()
    return (
        <section className="notFound">
            <h2 className="notFound__number">404</h2>
            <span className="notFound__message">Страница не найдена</span>
            <NavLink onClick={() => navigate(-1)} className="notFound__link">Назад</NavLink>
        </section>
    )
}
export default NotFound;
