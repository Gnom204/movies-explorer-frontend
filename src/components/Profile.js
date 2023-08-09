import { useState } from "react";

function Profile() {
    const [name, setName] = useState('Виталий')
    return (
        <div className="profile">
            <h2 className="profile__heading">Привет, {name}!</h2>
            <form className="profile__form">
                <div className="profile__input-container">
                    <label for="profileName" className="profile__annotation">Имя</label>
                    <input id="profileName" className="profile__input" />
                </div>
                <span className="profile__underline"></span>
                <div className="profile__input-container">
                    <label for="profileEmail" className="profile__annotation">E-mail</label>
                    <input id="profileEmail" className="profile__input" />
                </div>
            </form>
            <button className="profile__button">Редактировать</button>
            <button className="profile__button profile__button_warn">Выйти из аккаунта</button>
        </div>
    )
}
export default Profile;
