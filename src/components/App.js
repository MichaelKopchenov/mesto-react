import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isPicturePopupOpen, setIsPicturePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({});

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsPicturePopupOpen(false);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }

  const handleCardClick = (data) => {
    setSelectedCard({
      ...selectedCard,
      name: data.name,
      link: data.link
    })
    setIsPicturePopupOpen(true)
  }

  return (
    <>
      <Header/>

      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick} 
        onCardClick = {handleCardClick}
      />

      <Footer/>

      <PopupWithForm 
        id="profile" 
        title="Редактировать профиль" 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups} 
        btnSubmit="Сохранить"
      >
        <label className='popup__label'>
          <input 
            name="title" 
            type="text" 
            className="popup__input" 
            placeholder="Имя" 
            required 
            minLength="2" 
            maxLength="40" 
            id="title-name"
          />
          <span className="title-name-input-error popup__form-input-error"/>{/*В данной ПР элемент без контента, думаю в следующих спринтах добавится текст ошибки. Решил описать элемент как самозакрывающийся.*/}
        </label>
        <label className='popup__label'>
          <input 
            name="job" 
            type="text" 
            className="popup__input" 
            placeholder="О себе" 
            required 
            minLength="2" 
            maxLength="200" 
            id="job"
          />
          <span className="job-input-error popup__form-input-error"/>
        </label>
      </PopupWithForm>

      <PopupWithForm 
        id="avatar" 
        title="Новый аватар" 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups} 
        btnSubmit="Сохранить"
      >
        <label className="popup__label">
          <input 
            type="url" 
            className="popup__input" 
            name="link" 
            id="avatar-link" 
            placeholder="Ссылка на картинку" 
            required
          />
          <span className="avatar-link-input-error popup__form-input-error"/>
        </label>
      </PopupWithForm>

      <PopupWithForm 
        id="cards" 
        title="Новое место" 
        isOpen={isAddPlacePopupOpen} 
        onClose={closeAllPopups} 
        btnSubmit="Создать"
      >
        <label className="popup__label">
          <input 
            type="text" 
            className="popup__input" 
            name="name" 
            id="card-name" 
            placeholder="Название" 
            minLength="2" 
            maxLength="30" 
            required
          />
          <span className="card-name-input-error popup__form-input-error"/>
        </label>
        <label className="popup__label">
          <input 
            type="url" 
            className="popup__input" 
            name="link" 
            id="card-link" 
            placeholder="Ссылка на картинку" 
            required
          />
          <span className="card-link-input-error popup__form-input-error"/>
        </label>
      </PopupWithForm>

      <ImagePopup 
        id="pictures" 
        card={selectedCard} 
        isOpen={isPicturePopupOpen} 
        onClose={closeAllPopups}
      />
      {/* <div id="delete" className="popup">
          <div className="popup__container">
              <button type="button" className="popup__close-btn"></button>
              <h3 className="popup__title">Вы уверены?</h3>
              <form id="form-delete" className="popup__form" name="delete-place" noValidate>
                  <button id="delete-submit" type="submit" className="popup__submit">Да</button>
              </form>
          </div>
      </div> */}
    </>
  );
};

export default App;