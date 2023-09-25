import { useState } from "react";
import { NavLink } from "react-router-dom"
function Login({ onLogin, errorText, setError }) {
    const validator = require('validator');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });
    const [submitDisabled, setSubmitDisabled] = useState(true);

    const validateForm = (e) => {
        let isValid = true;
        const { name, value } = e.target
        if (name === 'email') {
            if (value === '') {
                setErrors({
                    ...errors,
                    [name]: 'email должен быть длиннее 4 символов'
                })
                isValid = false
            } else if (!validator.isEmail(value)) {
                setErrors({
                    ...errors,
                    [name]: 'email записан неправильно, попробуйте использовать символ @'
                })
                isValid = false
            } else {
                setErrors({
                    ...errors,
                    [name]: ''
                })
            }
        }
        if (name === 'password') {
            if (value.length < 4) {
                setErrors({
                    ...errors,
                    [name]: 'Пароль должен быть длиннее 4 символов'
                })
                isValid = false;
            } else {
                setErrors({
                    ...errors,
                    [name]: ''
                })
            }
        }
        setError('')
        setSubmitDisabled(!isValid);
    };

    const blurValidation = () => {
        let errors = {}
        let isValid = true
        if (!email) {
            setError('')
            errors.email = 'Поле не должно быть пустым'
            isValid = false
        } if (!password) {
            setError('')
            errors.password = 'Поле не должно быть пустым'
            isValid = false
        }
        setError('')
        setErrors(errors)
        setSubmitDisabled(!isValid)
    }


    const handleSubmit = (e) => {
        let errors = {}
        e.preventDefault();
        blurValidation()
        if (Object.keys(errors).length === 0) {
            onLogin(email, password)
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
                        <input value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                validateForm(e);
                            }} onBlur={blurValidation} required name="email" className="authorization__input" />
                        <span className="authorization__error authorization__validation-error">{errors.email}{errorText}</span>
                    </div>
                    <div className="authorization__input-container">
                        <label className="authorization__annotation">Пароль</label>
                        <input type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                validateForm(e);
                            }} onBlur={blurValidation} name="password" className="authorization__input" />
                        <span className="authorization__error authorization__validation-error">{errors.password}{errorText}</span>
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
