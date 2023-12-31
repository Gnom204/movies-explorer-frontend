import currentUserContext from "../utils/currentUserContext";
import { useEffect, useState } from "react";
import Notification from "./Notification";

function Profile({ logout, update, errorTextProfile }) {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [inputDisabled, setInputDisabled] = useState(true)
    const [isEditing, setIsEditing] = useState(false)
    const [errorText, setErrorText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [errors, setErrors] = useState({
        name: '',
        email: ''
    })
    const [isOpen, setIsOpen] = useState(false)
    const validator = require('validator')
    const [nameValid, setNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false)
    const [isNotChange, setIsNotChange] = useState(false)

    useEffect(() => {
        setErrorText(errorTextProfile)
    }, [errorTextProfile])

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(false)
        }, 2000)
    }, [isOpen])

    useEffect(() => {
        if (nameValid && emailValid) {
            setBtnDisabled(false)
        } else {
            setBtnDisabled(true)
        }
    }, [])

    useEffect(() => {
        if (nameValid && emailValid) {
            setBtnDisabled(false)
        } else {
            setBtnDisabled(true)
        }
    }, [nameValid, emailValid])

    const blurHandler = (e, userName, userEmail) => {
        const { name, value } = e.target;
        if (name === "name") {
            if (value === userName) {
                setErrors({
                    ...errors,
                    [name]: 'Данные не изменились'
                })
                setNameValid(false)
            } else {
                console.log({ value, userName })
                setNameValid(true)
            }
        } if (name === "email") {
            if (value === userEmail) {
                setErrors({
                    ...errors,
                    [name]: 'Данные не изменились'
                })
                setEmailValid(false)
                console.log({ value, userEmail })
            } else {
                setEmailValid(true)
            }
        }
    }

    const validateForm = (e, userName, userEmail) => {
        const { name, value } = e.target;
        console.log(errors)
        if (name === "name") {
            if (!value) {
                setErrors({
                    ...errors,
                    [name]: 'Поле должно быть заполнено'
                })
                setNameValid(false)
            }
            if (value.length < 4) {
                setErrors({
                    ...errors,
                    [name]: 'Длина имени должн абыть больше 4 символов'
                })
                setNameValid(false)
            } else if (userName === value) {
                setErrors({
                    ...errors,
                    [name]: 'Данные совпадают с предыдущими'
                })
                setNameValid(false)
            } else {
                setErrors({
                    ...errors,
                    [name]: ''
                })
                setNameValid(true)
            }
        }
        if (name === "email") {
            if (!value) {
                setErrors({
                    ...errors,
                    [name]: 'Поле должно быть заполнено'
                })
                setEmailValid(false)
            }
            if (!validator.isEmail(value)) {
                setErrors({
                    ...errors,
                    [name]: 'Email не валиден, попробуйте использовать символ @'
                })
                setEmailValid(false)
            } else if (userEmail === value) {
                setErrors({
                    ...errors,
                    [name]: 'Данные совпадают с предыдущими'
                })
                setEmailValid(false)
            } else {
                setErrors({
                    ...errors,
                    [name]: ''
                })
                setEmailValid(true)
            }
        }
        setErrorText('')
    }

    const changeHandlerName = (e, name, email) => {
        validateForm(e, name, email)
        setNameValue(e.target.value);
    }

    const changeHandlerEmail = (e, name, email) => {
        validateForm(e, name, email)
        setEmailValue(e.target.value);
    }

    const handleEdit = (name, email) => {
        setNameValue(name)
        setEmailValue(email)
        setIsEditing(true)
        setErrorText('')
        setInputDisabled(!inputDisabled)
    }

    const changeProfileHandler = () => {
        try {
            setIsNotChange(true)
            update(nameValue, emailValue)
            console.log({ nameValue, emailValue })
            setIsOpen(true)
            setIsEditing(false)
        } catch {
            setIsEditing(false)
            setErrorText('Данные не изменились')
        }
    }

    return (
        <currentUserContext.Consumer>
            {({ name, email }) => (

                <section className="profile">
                    <Notification isNotChange={isNotChange} isOpen={isOpen} />
                    <h2 className="profile__heading">Привет, {name}!</h2>
                    <form className="profile__form">
                        <div className="profile__input-container">
                            <label htmlFor="profileName" className="profile__annotation">Имя</label>
                            <input onClick={(e) => blurHandler(e, name, email)} name="name" disabled={!isEditing} onChange={(e) => changeHandlerName(e, name, email)} id="profileName" placeholder="Введите имя" value={isEditing ? nameValue : name} className="profile__input" />
                        </div>
                        <span className="profile__error">{errors.name}{errorText}</span>
                        <span className="profile__underline"></span>
                        <div className="profile__input-container">
                            <label htmlFor="profileEmail" className="profile__annotation">E-mail</label>
                            <input onClick={(e) => blurHandler(e, name, email)} name="email" disabled={!isEditing} onChange={(e) => changeHandlerEmail(e, name, email)} id="profileEmail" placeholder="Введите почту" value={isEditing ? emailValue : email} className="profile__input" />
                        </div>
                        <span className="profile__error">{errors.email}{errorText}</span>
                    </form>
                    {
                        isEditing ?
                            <button type="button" onClick={changeProfileHandler} disabled={btnDisabled} className="profile__button">Сохранить</button>
                            :
                            <button type="button" onClick={() => handleEdit(name, email)} className="profile__button">Редактировать</button>

                    }
                    <button onClick={logout} className="profile__button_warn profile__button">Выйти из аккаунта</button>
                </section>

            )}
        </currentUserContext.Consumer>

    )
}
export default Profile;
