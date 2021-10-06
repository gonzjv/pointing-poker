import React, { useState } from 'react';

import './gamepage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GameInfo from '../../components/Lobby/game-info/game-info';
import Members from '../../components/Lobby/members/Members';
import IssuesList from '../../components/Lobby/issues/issues';
import { Score } from '../../components/Score/Score';
import { Timer } from '../../components/timer/timer';
import { Statistics } from '../../components/Statistics/Statistics';
import CardsBlock from '../../components/Lobby/cards-block/cards-block';

export const GamePage = ({isDealer}) => {
  const [modalKick, setModalKick] = useState(false);
  const [modalCreateIssue, setModalCreateIssue] = useState(false);


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
          { isDealer ? <CardsBlock statistics={false}/> 
           : <Statistics />}
           <CardsBlock statistics={false}/> 
        </div>
        <aside className="game-page-aside">
          <Score />
          <Members setActive={setModalKick} />
        </aside>
      </div>
    </div>
  );
};
