function Card(props) {
    function handleClick() {
        props.onCardClick(props.card)
      }

    return (
      <div className="element">
        <button type="button" className="element__delete-btn"></button>
        <img src={props.link} alt={props.name} className="element__pic" onClick={handleClick} />
        <div className="element__caption">
          <h2 className="element__title">{props.name}</h2>
          <div className="element__like-box">
            <button type="button" className="element__like-btn"></button>
            <p className="element__like-counter">{props.likes}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;