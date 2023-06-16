import React, { useState, useEffect } from "react";
import api from '../utils/api';
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getInitialProfile()
          .then((dataOfUser) => {
            setUserName(dataOfUser.name);
            setUserDescription(dataOfUser.about);
            setUserAvatar(dataOfUser.avatar);
          })
          .catch((error) => console.log(`Ошибка: ${error}`));
        api.getInitialCards()
        .then((data) => {
            setCards(data);
        })
        .catch((error) => console.log(`Ошибка: ${error}`));
    }, []);

    return (
        <main>
            <section className="profile">
                <button type="button" className="profile__avatar-change" onClick={props.onEditAvatar}>
                    <img src={userAvatar} alt="Аватарка" className="profile__avatar"/>
                </button>
                <div className="profile__info">
                    <h1 className="profile__info-title" id="infoname">{userName}</h1>
                    <button type="button" className="profile__edit-profile" onClick={props.onEditProfile}></button>
                    <p className="profile__info-subtitle" id="infojob">{userDescription}</p>
                </div>
                <button type="button" className="profile__edit-pic" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements" aria-label="Карточки">
                {cards.map((item) => {
                    return <Card card={item} key={item._id} link={item.link} name={item.name} likes={item.likes.length}
                    onCardClick={props.onCardClick}/>;
                    }
                )
            }
            </section>
        </main>
    );
}

export default Main;
