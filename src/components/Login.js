import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
function Login({ onLogin, errorText, setError }) {
    const validator = require('validator');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });
    const [valid, setValid] = useState({})
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [isInput, setIsInput] = useState(false)
    useEffect(() => {
        if (valid.email && valid.password) {
            setSubmitDisabled(false)
        } else {
            setSubmitDisabled(true)
        }
    }, [valid.email, valid.password])

    useEffect(() => {
        if (isInput === false && errorText) {
            setSubmitDisabled(true)
        } else {
            setSubmitDisabled(false)
        }
    }, [isInput, errorText])

    const validateForm = (e) => {
        setIsInput(true)
        const { name, value } = e.target
        if (name === 'email') {
            if (value === '') {
                setErrors({
                    ...errors,
                    [name]: 'email должен быть длиннее 4 символов'
                })
                valid.email = false
            } else if (!validator.isEmail(value)) {
                setErrors({
                    ...errors,
                    [name]: 'email записан неправильно, попробуйте использовать символ @'
                })
                valid.email = false
            } else {
                setErrors({
                    ...errors,
                    [name]: ''
                })
                valid.email = true
            }
        }
        if (name === 'password') {
            if (value.length < 4) {
                setErrors({
                    ...errors,
                    [name]: 'Пароль должен быть длиннее 4 символов'
                })
                valid.password = false;
            } else {
                setErrors({
                    ...errors,
                    [name]: ''
                })
                valid.password = true
            }
        }
    };

    const handleSubmit = (e) => {
        setIsInput(false)
        e.preventDefault();
        onLogin(email, password)
    }
    return (
        <section className="login">
            <div className="authorization">
                <NavLink to='/' className="logo" />
                <h2 className="authorization__welcome">Рады видеть!</h2>
                <form noValidate={true} onSubmit={handleSubmit} className="authorization__form">
                    <div className="authorization__input-container">
                        <label className="authorization__annotation">E-mail</label>
                        <input value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                validateForm(e);
                            }} required name="email" className="authorization__input" />
                        <span className="authorization__error authorization__validation-error">{errors.email}{isInput ? '' : errorText}</span>
                    </div>
                    <div className="authorization__input-container">
                        <label className="authorization__annotation">Пароль</label>
                        <input type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                validateForm(e);
                            }} name="password" className="authorization__input" />
                        <span className="authorization__error authorization__validation-error">{errors.password}{isInput ? '' : errorText}</span>
                    </div>
                    <button disabled={submitDisabled} type="submit" className="authorization__button">Войти</button>
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
