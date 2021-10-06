import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MainContext } from '../../mainContext';
import { SocketContext } from '../../socketContext';
import { UsersContext } from '../../usersContext';

import ModalCreateIssue from '../ModalCreateIssue/Modal-create-issue';
import ModalKickPlayer from '../ModalKickPlayer/Modal-kick-player';
import GameInfo from './game-info/game-info';
import IssuesList from './issues/issues';
import './Lobby.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Members from './members/Members';
import Settings from './settings/settings';
import Chat from '../chat/chat';
import CardsBlock from './cards-block/cards-block';
import ModalVoting from './modal-voting/modal-voting';

const Lobby = () => {
  const socket = useContext(SocketContext);
  const { firstName, lastName, setIsGameRun } = useContext(MainContext);
  const history = useHistory();
  const { players, dealer, isDealer, setPlayers, setDealer, setIsDealer } =
    useContext(UsersContext);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const notify = (message) => {
    toast(message, {
      position: 'top-center',
    });
  };
  const toastVoting = React.useRef(null);

  useEffect(() => {
    socket.on('players', (players) => {
      setPlayers(players);
    });
    socket.on('kickFromLobby', () => {
      history.push('/');
    });
    socket.on('dealerStartGame', () => {
      setIsGameRun(true);
      history.push('/game');
    });
  });

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((messages) => [...messages, msg]);
    });
    socket.on('votingPopup', (player, initiator) => {
      toastVoting.current = toast(
        <ModalVoting player={player} initiator={initiator} />,
        {
          position: 'top-center',
          autoClose: false,
          closeOnClick: false,
        },
      );
    });
    socket.on('notification', (message) => {
      notify(message);
    });
    socket.on('closeVoting', () => {
      toast.dismiss(toastVoting.current);
    });
  }, [socket]);

  const checkUser = () => {
    console.log('dealer', dealer);
    socket.id === dealer.lobbyID ? setIsDealer(true) : setIsDealer(false);
  };
  checkUser();

  const handleExit = () => {
    setDealer({});
    socket.emit('exit', () => {
      history.push('/');
    });
  };

  const handleDelete = (id) => {
    console.log('delete id: ', id);
    socket.emit('deletePlayer', id, dealer.lobbyID);
  };

  return (
    <main>
      <div className="wrapper">
        <GameInfo />

        <Members />
        <IssuesList />
        <Settings />
        <CardsBlock />
        <ModalKickPlayer />
        <ModalCreateIssue />
        <Chat messages={messages} />
      </div>
      <ToastContainer />
    </main>
  );
};

export default Lobby;
