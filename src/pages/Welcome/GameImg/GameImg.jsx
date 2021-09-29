import React from "react";
import "./gameimg.css"

export const GameImg = () => {
  return (
<div className="game-img">  
  <img src="./images/cards.png" alt="cards" />
<h1 className="game-img-title">
  <span className="title-word-left">Poker</span>{' '}
  <span className="title-word-right">Planning</span>
</h1>
<div className="game-img-title-line" />
</div>
  )
}
