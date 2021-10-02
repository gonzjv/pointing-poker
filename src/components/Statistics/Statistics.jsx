import React from 'react';
import { Card } from '../card/Сard';
import './statistics.css';

export const Statistics = ({cardInfo}) => {
  return (
    <div className="statistics">
    <Card card={cardInfo} />
    <Card card={cardInfo} />
    <Card card={cardInfo} />
    </div>
  );
}
