import React from "react";
import { useState } from "react";
import "./card-item.css";

const cardInfo = [

]

export const CardItem = ({value, type}) => {
  // const [currentCard, setCurrentCard] = useState(false)

  return (
    <div className="card card__current">
      <p className="card__type">{type}</p>
      <p className="card__value">{value}</p>
      <p className="card__type card__type-reverse">{type} </p>
    </div>
  );
}
