import React from 'react';
import { Cards } from '../Card/Сards';
import './statistics.css';

export const Statistics = ({ cardInfo }) => {
  return (
    <div className="statistics">
      <h2>Statistics:</h2>
      <Cards card={cardInfo} />
    </div>
  );
}
