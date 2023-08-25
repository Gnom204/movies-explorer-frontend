import currentUserContext from "../utils/currentUserContext";
import { useState } from "react";

function Profile({ logout }) {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');

    const changeHandlerName = (e) => {
        setNameValue(e.target.value);
    }

    const changeHandlerEmail = (e) => {
        setEmailValue(e.target.value);
    }

    return (
        <currentUserContext.Consumer>
            {({ name, email }) => (

                <section className="profile">
                    <h2 className="profile__heading">Привет, {name}!</h2>
                    <form className="profile__form">
                        <div className="profile__input-container">
                            <label htmlFor="profileName" className="profile__annotation">Имя</label>
                            <input onChange={changeHandlerName} id="profileName" value={name} className="profile__input" />
                        </div>
                        <span className="profile__underline"></span>
                        <div className="profile__input-container">
                            <label htmlFor="profileEmail" className="profile__annotation">E-mail</label>
                            <input onChange={changeHandlerEmail} id="profileEmail" value={email} className="profile__input" />
                        </div>
                    </form>
                    <button className="profile__button">Редактировать</button>
                    <button onClick={logout} className="profile__button profile__button_warn">Выйти из аккаунта</button>
                </section>
            )}
        </currentUserContext.Consumer>

    )
}
export default Profile;
