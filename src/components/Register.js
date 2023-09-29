import { useEffect, useState } from "react"
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
    const [isInput, setIsInput] = useState(false)
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [valid, setValid] = useState({})

    useEffect(() => {
        if (isInput === false && errorText) {
            setSubmitDisabled(true)
        } else {
            setSubmitDisabled(false)
        }
    }, [isInput, errorText])

    useEffect(() => {
        if (valid.name && valid.email && valid.password) {
            setSubmitDisabled(false)
        } else {
            setSubmitDisabled(true)
        }
    }, [valid.name, valid.email, valid.password])

    const validateForm = (e) => {
        setIsInput(true)
        console.log(isInput)
        const { name, value } = e.target
        if (name === 'name') {
            if (value.length < 4) {
                setErrors({
                    ...errors,
                    [name]: 'Имя должно быть длиннее 4 символов'
                })
                valid.name = false;
            } else {
                setErrors({
                    ...errors,
                    [name]: ''
                })
                valid.name = true
            }
        }
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

    const submitHandler = (e) => {
        e.preventDefault();
        setIsInput(false)
        console.log(isInput)
        onRegister(name, email, password)
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
                            <span className="authorization__error authorization__validation-error">{errors.name}{isInput ? '' : errorText}</span>
                        </div>
                        <div className="authorization__input-container">
                            <label className="authorization__annotation">E-mail</label>
                            <input type="text"
                                value={email}
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
