import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((item) => item._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `element__like-btn ${isLiked && 'element__like-btn_active'}` 
  );

  function handleLikeClick() {
    return props.onCardLike(props.card);
  };
  function handleDeleteClick() {
    return props.onCardDelete(props.card);
  };

  function handleClick() {
      props.onCardClick(props.card)
    }

  return (
    <div className="element">
      {isOwn && (
        <button 
          type="button" 
          className="element__delete-btn"
          onClick={handleDeleteClick}
        ></button>
      )}
      <img 
        src={props.link} 
        alt={props.name} 
        className="element__pic" 
        onClick={handleClick}
      />
      <div className="element__caption">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__like-box">
          <button 
            type="button" 
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <p className="element__like-counter">{props.likes}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;