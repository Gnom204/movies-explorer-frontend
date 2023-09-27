import { useState } from "react"
import { NavLink } from "react-router-dom"
function Register({ onRegister, errorText, setError }) {
    const validator = require('validator');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [submitDisabled, setSubmitDisabled] = useState(true);

    const validateForm = (e) => {
        let isValid

        const { name, value } = e.target
        if (name === 'name') {
            if (value.length < 4) {
                setErrors({
                    ...errors,
                    [name]: 'name должен быть длиннее 4 символов'
                })
                isValid = false;
            } else {
                setErrors({
                    ...errors,
                    [name]: ''
                })
                if (Object.keys(errors).length === 0) {
                    isValid = true
                }
            }
        }
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
                if (Object.keys(errors).length === 0) {
                    isValid = true
                }
            }
        }
        if (name === 'password') {
            if (value.length < 4) {
                setErrors({
                    ...errors,
                    [name]: 'email должен быть длиннее 4 символов'
                })
                isValid = false;
            } else {
                setErrors({
                    ...errors,
                    [name]: ''
                })
                if (Object.keys(errors).length === 0) {
                    isValid = true
                }
            }
        }
        setSubmitDisabled(!isValid);
    };

    const blurValidation = () => {
        let errors = {}
        let isValid = true
        if (!name) {
            setError('')
            errors.name = 'Поле не должно быть пустым'
            isValid = false
        } if (!email) {
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

    const submitHandler = (e) => {
        e.preventDefault();
        blurValidation()
        if (Object.keys(errors).length === 0) {
            onRegister(name, email, password)
        }
    };


    return (
        <>
            <section className="register">
                <div className="authorization">
                    <NavLink to='/' className="logo" />
                    <h2 className="authorization__welcome">Добро пожаловать!</h2>
                    <form noValidate={true} onSubmit={submitHandler} className="authorization__form">
                        <div className="authorization__input-container">
                            <label className="authorization__annotation">Имя</label>
                            <input type="text" value={name} onChange={(e) => {
                                setName(e.target.value);
                                validateForm(e);
                            }} required name="name" className="authorization__input" />
                            <span className="authorization__error authorization__validation-error">{errors.name}{errorText}</span>
                        </div>
                        <div className="authorization__input-container">
                            <label className="authorization__annotation">E-mail</label>
                            <input type="text"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    validateForm(e);
                                }} required name="email" className="authorization__input" />
                            <span className="authorization__error authorization__validation-error">{errors.email}{errorText}</span>
                        </div>
                        <div className="authorization__input-container">
                            <label className="authorization__annotation">Пароль</label>
                            <input type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    validateForm(e);
                                }} name="password" className="authorization__input" />
                            <span className="authorization__error authorization__validation-error">{errors.password}{errorText}</span>
                        </div>
                        <button disabled={submitDisabled} type="submit" className="authorization__button">Зарегистрироваться</button>
                        <div className="authorization__question-container">
                            <span className="authorization__question">Уже зарегистрировались?</span>
                            <NavLink to='/signin' className="authorization__link">Войти</NavLink>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
export default Register
