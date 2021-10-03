import React, { useContext } from "react";
import { useState } from "react";
import { CardItem } from "./card-item/CardItem";
import "./cards.css";

export const Cards = (props) => {
  const [currentCard, setCurrentCard] = useState(false);

  const cardValues = [
    0, 1, 13, 21, 34, 55, 89, 144
  ]

  const cardType = "SP"


  return (
    <div className="cards__items">
      {cardValues.map( (value) => {
        return <CardItem value={value} type={cardType} />
      })
      }
    </div>
  )
}
