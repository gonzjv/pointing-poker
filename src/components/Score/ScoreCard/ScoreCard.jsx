import React, { useContext, useEffect } from 'react';
import { MainContext } from '../../../mainContext';
import { SocketContext } from '../../../socketContext';
import './scorecard.css';

const ScoreCard = ({ player }) => {
  const { votes, setVotes, isTimerActive } = useContext(MainContext);
  const socket = useContext(SocketContext);
  const score = votes.find((vote) => vote.playerID === player.id);
  console.log('score: ', score);

  useEffect(() => {
    socket.on('sendVotes', (votesArr) => {
      setVotes(votesArr);
      console.log('votes: ', votes);
    });
  });
  return (
    <div className="score-card">
      {isTimerActive ? 'In progress' : score?.cardValue}
    </div>
  );
};

export default ScoreCard;
