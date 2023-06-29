import React from "react";

function ImagePopup(props) {
  return (
    <div id={props.id} className={`popup popup_type_picture ${ props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container popup__container_type_picture">
            <button 
              type="button" 
              className="popup__close-btn" 
              onClick={props.onClose}
            />
                <img 
                  src={`${props.card.link}`} 
                  alt={props.card.name} 
                  className="popup__picture"
                />
                <h2 className="popup__name">{props.card.name}</h2>
        </div>
    </div>
  );
}

export default ImagePopup;