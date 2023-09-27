import currentUserContext from "../utils/currentUserContext";
import { useEffect, useState } from "react";

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

    const validator = require('validator')
    const [nameValid, setNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false)

    useEffect(() => {
        setErrorText(errorTextProfile)
    }, [errorTextProfile])

    useEffect(() => {
        if (nameValid && emailValid) {
            setBtnDisabled(false)
        } else {
            setBtnDisabled(true)
        }
    }, [nameValid, emailValid])

    const validateForm = (e) => {
        const { name, value } = e.target;
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

    const changeHandlerName = (e) => {
        validateForm(e)
        setNameValue(e.target.value);
        console.log(nameValue)
    }

    const changeHandlerEmail = (e) => {
        validateForm(e)
        setEmailValue(e.target.value);
        console.log(emailValue)
    }

    const handleEdit = () => {
        setIsEditing(true)
        setErrorText('')
        setInputDisabled(!inputDisabled)
    }

    const changeProfileHandler = () => {
        update(nameValue, emailValue)
        setIsEditing(false)
        console.log(errorTextProfile)
    }

    return (
        <currentUserContext.Consumer>
            {({ name, email }) => (

                <section className="profile">
                    <h2 className="profile__heading">Привет, {name}!</h2>
                    <form className="profile__form">
                        <div className="profile__input-container">
                            <label htmlFor="profileName" className="profile__annotation">Имя</label>
                            <input name="name" disabled={!isEditing} onChange={changeHandlerName} id="profileName" placeholder="Введите имя" value={isEditing ? nameValue : name} className="profile__input" />
                        </div>
                        <span className="profile__error">{errors.name}{errorText}</span>
                        <span className="profile__underline"></span>
                        <div className="profile__input-container">
                            <label htmlFor="profileEmail" className="profile__annotation">E-mail</label>
                            <input name="email" disabled={!isEditing} onChange={changeHandlerEmail} id="profileEmail" placeholder="Введите почту" value={isEditing ? emailValue : email} className="profile__input" />
                        </div>
                        <span className="profile__error">{errors.email}{errorText}</span>
                    </form>
                    {
                        isEditing ?
                            <button type="button" onClick={changeProfileHandler} disabled={btnDisabled} className="profile__button">Сохранить</button>
                            :
                            <button type="button" onClick={handleEdit} className="profile__button">Редактировать</button>

                    }
                    <button onClick={logout} className="profile__button_warn profile__button">Выйти из аккаунта</button>
                </section>
            )}
        </currentUserContext.Consumer>

    )
}
export default Profile;
