import React from 'react';
import { useState } from 'react';
import Button from '../../Button/Button';
import Card from '../../Card/cards';

import './cards-block.css';

const CardsBlock = ({statistics}) => {
  const cardInfo = [
    {
      value: '1',
      type: 'SP',
    },
    {
      value: '2',
      type: 'SP',
    },
    {
      value: '3',
      type: 'SP',
    },
    {
      value: '4',
      type: 'SP',
    },
    {
      value: '5',
      type: 'SP',
    },
  ];
  const [cards, setCards] = useState(cardInfo);
  const [cardFlipped, setCardFlipped] = useState(true);

  const addNewCard = () => {
    cards.push({ value: '5', type: 'SP' });
    setCards(cards);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setCardFlipped(!cardFlipped);
  }

  return (
    <>
     {statistics ? "" : 
    <Button value={"Flipp cards!"} onCustomClick={handleClick} isWhite={false} />}
    <div className="cards">
      {statistics ? "" :  <h2 className="lobby__subtitle">Game cards: </h2>}
           <div className="cards__block">
        {cards.map((card) => {
          return <Card card={card} flipped={cardFlipped} />;
        })}
        <button className="add__card" onClick={addNewCard}>
          <img className="add__card__icon" src="./icon/add-card.svg" />
        </button>
      </div>
    </div>
    </>
  );
};

export default CardsBlock;