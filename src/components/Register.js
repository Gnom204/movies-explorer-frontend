import { NavLink } from "react-router-dom"
function Register() {
    return (
        <>
            <div className="register">
                <div className="authorization">
                    <NavLink to='/' className="logo" />
                    <h2 className="authorization__welcome">Добро пожаловать!</h2>
                    <form className="authorization__form">
                        <div className="authorization__input-container">
                            <label className="authorization__annotation">Имя</label>
                            <input type="text" className="authorization__input" />
                            <span className="authorization__error authorization__validation-error"></span>
                        </div>
                        <div className="authorization__input-container">
                            <label className="authorization__annotation">E-mail</label>
                            <input type="email" className="authorization__input" />
                            <span className="authorization__error authorization__validation-error"></span>
                        </div>
                        <div className="authorization__input-container">
                            <label className="authorization__annotation">Пароль</label>
                            <input type="password" className="authorization__input" />
                            <span className="authorization__error authorization__validation-error"></span>
                        </div>
                        <button type="submit" className="authorization__button">Зарегистрироваться</button>
                        <div className="authorization__question-container">
                            <span className="authorization__question">Уже зарегистрировались?</span>
                            <NavLink to='/signin' className="authorization__link">Войти</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register
