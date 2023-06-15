import React from 'react';

function PopupWithForm(props) {
    return (
        <div id={props.id} className={`popup ${props.isOpen ? "popup_opened" : ""}` }>
            <div className="popup__container">
                <button type="button" className="popup__close-btn" onClick={props.onClose}></button>
                <h3 className="popup__title">{props.title}</h3>
                <form className="popup__form" name={`edit-${props.id}`} noValidate>
                    {props.children}
                    <button type="submit" className="popup__submit">{props.btnSubmit}</button>
                </form>
            </div>            
        </div>
    );
}

export default PopupWithForm;