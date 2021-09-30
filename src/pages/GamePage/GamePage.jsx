import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MainContext } from '../../mainContext';
import { SocketContext } from '../../socketContext';
import { UsersContext } from '../../usersContext';
// import Card from '../card/card';

import './gamepage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GameInfo from '../../components/Lobby/game-info/game-info';
import Members from '../../components/Lobby/members/Members';
import IssuesList from '../../components/Lobby/issues/issues';
import Settings from '../../components/Lobby/settings/settings';
import { Score } from '../../components/Score/Score';
import Timer from '../../components/timer/timer';
import Button from '../../components/Button/Button';


export const GamePage = () => {
  const socket = useContext(SocketContext);
  const { firstName, lastName } = useContext(MainContext);
  const history = useHistory();
  const { players, dealer, setPlayers, setDealer } = useContext(UsersContext);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [modalKick, setModalKick] = useState(false);
  const [modalCreateIssue, setModalCreateIssue] = useState(false);
  const [gameMode, setGameMode] = useState(true);

  const notify = (message) => {
    toast(message, {
      position: 'top-center',
    });
  };

  useEffect(() => {
    socket.on('players', (players) => {
      setPlayers(players);
    });
  });

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((messages) => [...messages, msg]);
    });
    socket.on('notification', (message) => {
      notify(message);
    });
  }, [socket]);

  const handleExit = () => {
    setDealer({});
    socket.emit('exit', () => {
      history.push('/');
    });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    socket.emit('sendMessage', message);
    setMessage('');
  };

  const cardInfo = {
    value: '5',
    type: 'SP',
  };
  const handleClick = () => {
  console.log(gameMode);
  }

  return (
    <main className="wrapper" >
      <ToastContainer />
      <div className="game-page-wrapper">
        <div className="game-page" >
          <GameInfo />
          <Button value="Stop Game" onCustomClick={handleClick} isWhite={true} />
         <IssuesList setActive={setModalCreateIssue} mode={gameMode} />
         <Timer />
         <Button value="Run Round" onCustomClick={handleClick} isWhite={false} />
          {/*  <Settings /> */}
        </div>
        <aside className="game-page-aside">

          <Score />
          <Members  setActive={setModalKick}  mode={gameMode} />

        </aside>
      </div>
      {/* <Card card={cardInfo} /> */}
    </main>
  );
};

