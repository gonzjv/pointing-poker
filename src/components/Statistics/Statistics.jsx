import React, { useState } from 'react';
import CardsBlock from '../Lobby/cards-block/cards-block';
import './statistics.css';

export const Statistics = () => {
  const [isStatistic, setStatistic] = useState(true)
  return (
    <div className="statistics">
      <h2>Statistics:</h2>
      <CardsBlock statistics={isStatistic}/>
    </div>
  );
}
