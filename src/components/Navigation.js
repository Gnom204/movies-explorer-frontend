import { useState } from "react"
import { NavLink } from "react-router-dom"

function Navigation(props, items) {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(active => !active);
    }
    console.log(items)
    return (
        <>
            <nav className={`navigation ${active ? "navigation__active" : ""}`}>
                {props.isLoggedIn ?
                    <>
                        <div style={active ? { display: 'flex' } : {}} className={`navigation__links ${active ? "navigation__links-active" : ""}`}>
                            <NavLink to='/' style={active ? { display: 'flex' } : { display: 'none' }} className={`navigation__link ${active ? "navigation__link-active" : ""}`}>Главная</NavLink>
                            <NavLink to='/movies' className={`navigation__link ${active ? "navigation__link-active" : ""}`}>Фильмы</NavLink>
                            <NavLink to='/saved-movies' className={`navigation__link ${active ? "navigation__link-active" : ""}`}>Сохранённые фильмы</NavLink>
                        </div>
                        <NavLink to='/profile' style={active ? { display: 'flex' } : {}} className="navigation__account">Аккаунт</NavLink>

                    </>
                    :
                    <>
                        <div style={active ? { display: 'flex' } : {}} className="navigation__auth">
                            <NavLink to='/signup' className="navigation__link">Регистрация</NavLink>
                            <NavLink to='/signin' className="navigation__loginLink">Войти</NavLink>
                        </div>
                    </>
                }
            </nav >
            {props.isLoggedIn ?
                <>
                    <div onClick={handleClick} className={`burger ${active ? 'burger__active' : ''}`}>
                        <span className={`burger__line ${active ? 'burger__line-active' : ''}`} ></span>
                    </div>
                </>
                : ""
            }
        </>
    )
}
export default Navigation