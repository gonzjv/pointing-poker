import React, { useEffect } from "react";
import { useState } from "react";
import "./card-item.css";


export const CardItem = ({ value, type }) => {
  const [cardFlipped, setCardFlipped] = useState(false);


  const handleClick = (e) => {
    e.preventDefault();
   setCardFlipped(true);

  }


  return (
    <div className="scene" onClick={handleClick}>
      <div className={`card card__current${cardFlipped ? " is-flipped" : "" }`}  >
        <div className="card__face card__face--front">
          <p className="card__type">{type}</p>
          <p className="card__value">{value}</p>
          <p className="card__type card__type-reverse">{type} </p>
        </div>
        <div className="card__face card__face--back" onClick={handleClick}>back</div>
      </div>
    </div>
  )
}
