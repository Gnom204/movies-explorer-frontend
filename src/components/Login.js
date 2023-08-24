import { useState } from "react";
import { NavLink } from "react-router-dom"
function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [dirtyEmail, setDirtyEmail] = useState(false);
    const [password, setPassword] = useState('');
    const [dirtyPassword, setDirtyPassword] = useState(false);

    const checkDirtyEmail = (e) => {
        if (e.target.value === '') {
            setDirtyEmail(true)
        } else {
            setDirtyEmail(false)
        }
    }

    const checkDirtyPassword = (e) => {
        if (e.target.value === '') {
            setDirtyPassword(true)
        } else {
            setDirtyPassword(false)
        }
    }

    const emailHandler = (e) => {
        checkDirtyEmail(e)
        setEmail(e.target.value);
    }

    const passwordHandler = (e) => {
        checkDirtyPassword(e)
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(email, password);
    }
    return (
        <section className="login">
            <div className="authorization">
                <NavLink to='/' className="logo" />
                <h2 className="authorization__welcome">Рады видеть!</h2>
                <form onSubmit={handleSubmit} className="authorization__form">
                    <div className="authorization__input-container">
                        <label className="authorization__annotation">E-mail</label>
                        <input onChange={emailHandler} required type="email" className="authorization__input" />
                        <span className="authorization__error authorization__validation-error">{dirtyEmail ? 'Поле не может быть пустым' : ''}</span>
                    </div>
                    <div className="authorization__input-container">
                        <label className="authorization__annotation">Пароль</label>
                        <input onChange={passwordHandler} required type="password" className="authorization__input" />
                        <span className="authorization__error authorization__validation-error">{dirtyPassword ? 'Поле не может быть пустым' : ''}</span>
                    </div>
                    <button type="submit" className="authorization__button">Войти</button>
                    <div className="authorization__question-container">
                        <span className="authorization__question">Ещё не зарегистрированы?</span>
                        <NavLink to='/signup' className="authorization__link">Зарегистрироваться</NavLink>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Login;
