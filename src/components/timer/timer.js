import React, { useContext } from 'react';
import './timer.css';
import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import { MainContext } from '../../mainContext';
import { SocketContext } from '../../socketContext';
import { UsersContext } from '../../usersContext';

const padTime = (time) => {
  return String(time).length === 1 ? `0${time}` : `${time}`;
};

const format = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <React.Fragment>
      <div className="timer">
        <div className="timer__text timer__input">{minutes}</div>
        <p className="timer__doubledots">:</p>
        <div className="timer__text timer__input">{padTime(seconds)}</div>
      </div>
    </React.Fragment>
  );
};

export const Timer = () => {
  const [counter, setCounter] = useState(10);
  const { isTimerActive, currentIssue, setIsTimerActive } = useContext(MainContext);
  const { dealer, isDealer } = useContext(UsersContext);
  const socket = useContext(SocketContext);

  const getVotes = () => {
    socket.emit('getVotes', currentIssue.id, dealer.id);
  };

  const startRound = () => {
    socket.emit('startRound', dealer.lobbyID);
  };

  useEffect(() => {
    let timer;
    if (counter > 0 && isTimerActive) {
      timer = setTimeout(() => setCounter((c) => c - 1), 1000);
    } else {
      setIsTimerActive(false);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter, isTimerActive]);

  useEffect(() => {
    socket.on('dealerStartRound', () => {
      setCounter(10);
      setIsTimerActive(true);
    });
  });

  if (counter == 1) {
    getVotes();
  }

  return (
    <div>
      {format(counter)}
      {isDealer ? (
        <Button
          value={isTimerActive ? 'Reset Round' : 'Run Round'}
          onCustomClick={startRound}
          isWhite={false}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
