import React from 'react';
import './card.css';
import { useEffect, useState } from 'react';

export default function Card({ card, flipped }) {
  const [value, setValue] = useState(card.value);
  const [isEditCard, setIsEditCard] = useState(false);

  useEffect(() => {
    document.querySelectorAll('.card__input').forEach((input) => {
      if (!input.disabled) {
        input.focus();
      }
    });
  });

  const onEditMode = () => {
    setIsEditCard(true);
  };

  const offEditMode = () => {
    setIsEditCard(false);
  };

  const changeValueCard = (e) => {
    if (e.target.value.length < 4) {
      setValue(e.target.value.replace(/[^0-9]/gi, ''));
    }
  };

  return (
    <div className="scene" >
      <div className={`card${flipped ? " is-flipped" : ""}`} data-value={value}>
        <div className="card__face card__face--front">
          <p className="card__type">{card.type}</p>
          <p className={isEditCard ? 'card__value card__value-hidden' : 'card__value'}>
            {value}
          </p>
          <input
            className={isEditCard ? 'card__input' : 'card__input card__input-hidden'}
            value={value}
            type="text"
            size={value.length}
            onChange={changeValueCard}
            onBlur={offEditMode}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.target.blur();
              }
            }}
            disabled={!isEditCard}
          />
          <p className="card__type card__type-reverse">{card.type} </p>
          <button
            className={isEditCard ? 'card__edit card__edit-hidden' : 'card__edit '}
            onClick={onEditMode}
          >
            <img className="card__edit__icon" src="./icon/edit.svg" />
          </button>
        </div>
      </div>
  
    </div>
  );
}