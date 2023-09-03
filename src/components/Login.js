import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
function Login({ onLogin, errorText }) {
    const validator = require('validator');
    const [btnState, setBtnState] = useState(false)
    const [email, setEmail] = useState('');
    const [errorMessagePassword, setErrorMassegePassword] = useState('')
    const [errorMessageEmail, setErrorMassegeEmail] = useState('')
    const [dirtyEmail, setDirtyEmail] = useState(false);
    const [password, setPassword] = useState('');
    const [dirtyPassword, setDirtyPassword] = useState(false);

    const checkDirtyEmail = (e) => {
        if (validator.isEmail(e.target.value)) {
            setBtnState(false)
        }
        else if (e.target.value === '') {
            setErrorMassegeEmail('Поле не может быть пустым')
            setDirtyEmail(true)
            setBtnState(true)
        } else {
            setDirtyEmail(false)
            setBtnState(true)
            setErrorMassegeEmail('')
        }
    }

    const checkDirtyPassword = (e) => {
        if (e.target.value === '') {
            setErrorMassegePassword('Поле не может быть пустым')
            setDirtyPassword(true)
            setBtnState(true)
        } else {
            setDirtyPassword(false)
            setErrorMassegePassword('')
            setBtnState(false)
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
        console.log(errorText)
        e.preventDefault();
        if (validator.isEmail(email)) {
            onLogin(email, password);
            setErrorMassegeEmail(errorText)
            setErrorMassegePassword(errorText)
        } else if (!validator.isEmail(email)) {
            setErrorMassegeEmail('email не валиден')
            setBtnState(true)
        }
    }
    return (
        <section className="login">
            <div className="authorization">
                <NavLink to='/' className="logo" />
                <h2 className="authorization__welcome">Рады видеть!</h2>
                <form onSubmit={handleSubmit} className="authorization__form">
                    <div className="authorization__input-container">
                        <label className="authorization__annotation">E-mail</label>
                        <input onChange={emailHandler} required className="authorization__input" />
                        <span className="authorization__error authorization__validation-error">{errorMessageEmail}</span>
                    </div>
                    <div className="authorization__input-container">
                        <label className="authorization__annotation">Пароль</label>
                        <input onChange={passwordHandler} required type="password" className="authorization__input" />
                        <span className="authorization__error authorization__validation-error">{errorMessagePassword}</span>
                    </div>
                    <button disabled={btnState} type="submit" className="authorization__button">Войти</button>
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
