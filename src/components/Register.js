import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
function Register({ onRegister }) {
    const validator = require('validator');
    const [errorMessage, setErrorMessage] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [name, setName] = useState('');
    const [stateBtn, setStateBtn] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        errorMessage.email !== '' || errorMessage.name !== '' || errorMessage.password !== '' ? setStateBtn(true) : console.log('da')
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
            case "name":
                inputValidation(e)
                break

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

    const nameChangeHandler = (e) => {
        inputValidation(e)
        setName(e.target.value);
    }

    const passwordChangehandler = (e) => {
        inputValidation(e)
        setPassword(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (validator.isEmail(email)) {
            onRegister(name, email, password)
        }
    }

    return (
        <>
            <section className="register">
                <div className="authorization">
                    <NavLink to='/' className="logo" />
                    <h2 className="authorization__welcome">Добро пожаловать!</h2>
                    <form noValidate={true} onSubmit={submitHandler} className="authorization__form">
                        <div className="authorization__input-container">
                            <label className="authorization__annotation">Имя</label>
                            <input onBlur={blurHandler} value={name} name="name" onChange={nameChangeHandler} required type="text" className="authorization__input" />
                            <span className="authorization__error authorization__validation-error">{errorMessage.name}</span>
                        </div>
                        <div className="authorization__input-container">
                            <label className="authorization__annotation">E-mail</label>
                            <input onBlur={blurHandler} value={email} name="email" onChange={emailChangeHandler} required className="authorization__input" />
                            <span className="authorization__error authorization__validation-error">{errorMessage.email}</span>
                        </div>
                        <div className="authorization__input-container">
                            <label className="authorization__annotation">Пароль</label>
                            <input onBlur={blurHandler} value={password} name="password" onChange={passwordChangehandler} required type="password" className="authorization__input" />
                            <span className="authorization__error authorization__validation-error">{errorMessage.password}</span>
                        </div>
                        <button disabled={stateBtn} type="submit" className="authorization__button">Зарегистрироваться</button>
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
