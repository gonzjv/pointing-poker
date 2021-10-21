import React, { useContext, useEffect, useState } from 'react';

import './gamepage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GameInfo from '../../components/Lobby/game-info/game-info';
import Members from '../../components/Lobby/members/Members';
import IssuesList from '../../components/Lobby/issues/issues';
import { Timer } from '../../components/timer/timer';
import CardsBlock from '../../components/Lobby/cards-block/cards-block';
import { MainContext } from '../../mainContext';

export const GamePage = () => {
  const [modalCreateIssue, setModalCreateIssue] = useState(false);
  const { isTimerActive, votes } = useContext(MainContext);

  const average =
    votes.reduce((a, b) => {
      return a + Number(b.cardValue);
    }, 0) / votes.length;

  return (
    <div className="game-page-test">
      <ToastContainer />
      <div className="game-page-wrapper">
        <div className="game-page">
          <GameInfo />
          <div className="game-page-context">
            <IssuesList setActive={setModalCreateIssue} />
            <div className="game-page-timer">
              <Timer />
            </div>
          </div>
          <h2 className="average-title">Average:</h2>
          <p className="average">
            {isTimerActive ? 'Sorry, nosey, round is not end!' : Math.round(average)}
          </p>
          <CardsBlock statistics={false} />
        </div>
        <aside className="game-page-aside">
          <Members />
        </aside>
      </div>
    </div>
  );
};
