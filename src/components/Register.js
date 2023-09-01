import { useState } from "react"
import { NavLink } from "react-router-dom"
function Register({ onRegister }) {
    const validator = require('validator');

    const [name, setName] = useState('');
    const [dirtyName, setDirtyName] = useState(false);
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

    const checkDirtyName = (e) => {
        if (e.target.value === '') {
            setDirtyName(true)
        } else {
            setDirtyName(false)
        }
    }

    const checkDirtyPassword = (e) => {
        if (e.target.value === '') {
            setDirtyPassword(true)
        } else {
            setDirtyPassword(false)
        }
    }

    const emailChangeHandler = (e) => {
        checkDirtyEmail(e)
        setEmail(e.target.value);
    }

    const nameChangeHandler = (e) => {
        checkDirtyName(e)
        setName(e.target.value);
    }

    const passwordChangehandler = (e) => {
        checkDirtyPassword(e)
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
                    <form onSubmit={submitHandler} className="authorization__form">
                        <div className="authorization__input-container">
                            <label className="authorization__annotation">Имя</label>
                            <input value={name} name="name" onChange={nameChangeHandler} required type="text" className="authorization__input" />
                            <span className="authorization__error authorization__validation-error">{dirtyName ? 'Поле не может быть пустым' : ''}</span>
                        </div>
                        <div className="authorization__input-container">
                            <label className="authorization__annotation">E-mail</label>
                            <input value={email} name="email" onChange={emailChangeHandler} required type="email" className="authorization__input" />
                            <span className="authorization__error authorization__validation-error">{dirtyEmail ? 'Поле не может быть пустым' : ''}</span>
                        </div>
                        <div className="authorization__input-container">
                            <label className="authorization__annotation">Пароль</label>
                            <input value={password} name="password" onChange={passwordChangehandler} required type="password" className="authorization__input" />
                            <span className="authorization__error authorization__validation-error">{dirtyPassword ? 'Поле не может быть пустым' : ''}</span>
                        </div>
                        <button type="submit" className="authorization__button">Зарегистрироваться</button>
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
