import { useState } from 'react';
import Card from '../../card/card';
import './cards-block.css';

const CardsBlock = () => {
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

  const addNewCard = () => {
    cards.push({ value: '5', type: 'SP' });
    setCards(cards);
  };

  return (
    <div className="cards">
      <h2 className="lobby__subtitle">Game cards: </h2>
      <div className="cards__block">
        {cards.map((card) => {
          return <Card card={card} />;
        })}
        <button className="add__card" onClick={addNewCard}>
          <img className="add__card__icon" src="./icon/add-card.svg" />
        </button>
      </div>
    </div>
  );
};

export default CardsBlock;
