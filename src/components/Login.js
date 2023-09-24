import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
function Login({ onLogin, errorText }) {
    const validator = require('validator');
    const [errorMessage, setErrorMessage] = useState({
        email: '',
        password: ''
    })
    const [stateBtn, setStateBtn] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        errorMessage.email !== '' || errorMessage.password !== '' ? setStateBtn(true) : console.log('net')
    }, [errorMessage])

    const inputValidation = (e) => {
        const { name, value } = e.target;
        if (value === '') {
            setErrorMessage({
                ...errorMessage,
                [name]: 'Поле не должно быть пустым'
            })
            setStateBtn(true)
        }
        else {
            setErrorMessage({
                ...errorMessage,
                [name]: ''
            })
            setStateBtn(false)
        }
    }

    const emailValidation = (email) => {
        console.log('функция выполняется')
        console.log(!validator.isEmail(email))
        if (email === '') {
            setErrorMessage({
                ...errorMessage,
                email: 'Поле не должно быть пустым'
            })
            setStateBtn(true)
        }
        else if (!validator.isEmail(email)) {
            setErrorMessage({
                ...errorMessage,
                email: 'Email не валиден'
            })
            setStateBtn(true)
        } else {
            setErrorMessage({
                ...errorMessage,
                email: ''
            })
            setStateBtn(false)
        }
    }

    const blurHandler = (e) => {
        // eslint-disable-next-line default-case
        switch (e.target.name) {
            case "email":
                // inputValidation(e)
                emailValidation(e.target.value)
                break

            case "password":
                inputValidation(e)
                break
        }
    }


    const emailChangeHandler = (e) => {
        emailValidation(e.target.value)
        // inputValidation(e)
        setEmail(e.target.value);
    }

    const passwordChangehandler = (e) => {
        inputValidation(e)
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log(errorText)
        e.preventDefault();
        if (validator.isEmail(email)) {
            onLogin(email, password);
            setErrorMessage({
                ...errorMessage,
                password: errorText
            })
        }
    }
    return (
        <section className="login">
            <div className="authorization">
                <NavLink to='/' className="logo" />
                <h2 className="authorization__welcome">Рады видеть!</h2>
                <form noValidate={true} onSubmit={handleSubmit} className="authorization__form">
                    <div className="authorization__input-container">
                        <label className="authorization__annotation">E-mail</label>
                        <input name="email" onBlur={blurHandler} value={email} onChange={emailChangeHandler} required className="authorization__input" />
                        <span className="authorization__error authorization__validation-error">{errorMessage.email}</span>
                    </div>
                    <div className="authorization__input-container">
                        <label className="authorization__annotation">Пароль</label>
                        <input name="password" onBlur={blurHandler} value={password} onChange={passwordChangehandler} required type="password" className="authorization__input" />
                        <span className="authorization__error authorization__validation-error">{errorMessage.password}</span>
                    </div>
                    <button disabled={stateBtn} type="submit" className="authorization__button">Войти</button>
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
