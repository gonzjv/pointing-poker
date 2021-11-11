import React from 'react';
import './score.css';
import ScoreCard from './ScoreCard/ScoreCard';

export const Score = () => {
  return (
    <div className="members">
      <h2 className="title members__title">score:</h2>
      <div className="column__list">
        <ScoreCard />
        <ScoreCard />
        <ScoreCard />
        <ScoreCard />
        <ScoreCard />
        <ScoreCard />
      </div>
    </div>
  );
};
