import React from 'react';
import { useState } from 'react';
import Button from '../../Button/Button';
import Card from '../../Card/cards';
import getFiboRow from './card-rows/card-rows';

import './cards-block.css';

const CardsBlock = ({ statistics }) => {
  const [cards, setCards] = useState(getFiboRow(8, 'SP'));
  const [cardFlipped, setCardFlipped] = useState(true);

  const addNewCard = () => {
    cards.push({ value: '5', type: 'SP' });
    setCards(cards);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setCardFlipped(!cardFlipped);
  };

  return (
    <>
      {statistics ? (
        ''
      ) : (
        <Button value={'Flipp cards!'} onCustomClick={handleClick} isWhite={false} />
      )}
      <div className="cards">
        {statistics ? '' : <h2 className="lobby__subtitle">Game cards: </h2>}
        <div className="cards__block">
          {cards.map((card, i) => {
            return <Card key={i} card={card} flipped={cardFlipped} />;
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
