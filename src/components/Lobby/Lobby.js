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
import ModalVoting from './modal-voting/modal-voting';
import CardsBlock from './cards-block/cards-block';

const Lobby = () => {
  const socket = useContext(SocketContext);
  const { firstName, lastName } = useContext(MainContext);
  const history = useHistory();
  const [modalCreateIssue, setModalCreateIssue] = useState(false);
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
    socket.id === dealer.lobbyID ? setIsDealer(true) : setIsDealer(false);
  };
  checkUser();

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

  const handleDelete = (id) => {
    console.log('delete id: ', id);
    socket.emit('deletePlayer', id, dealer.lobbyID);
  };


  const [gameMode, setGameMode] = useState(true);

  return (
    <main>
      <div className="wrapper">
        <GameInfo />
        <Members />
        <IssuesList setActive={setModalCreateIssue} />
        <Settings />
        <CardsBlock />
        <ModalKickPlayer />
        <ModalCreateIssue active={modalCreateIssue} />
      </div>
      <ToastContainer />
      <section className="status">
        <p>
          Good day, {firstName} {lastName}! Now you are in the lobby with gameID:{' '}
          {dealer.lobbyID}.
        </p>
        <p>Waiting for {dealer.firstName} to start the game</p>
        <p>Game ID : {dealer.lobbyID}</p>
        <p>Dealer : {dealer.firstName}</p>
      </section>
      <section className="players">
        <p>Players: </p>
        {players.map((player) => {
          return (
            <p>
              {player.firstName} {player.lastName}
              <button onClick={() => handleDelete(player.id)}>❌</button>
            </p>
          );
        })}
        <button onClick={handleExit}>Exit</button>
      </section>
      <section className="chat">
        <div className="chat-window">
          {messages.length > 0 ? (
            messages.map((msg, i) => (
              <div key={i}>
                <p>
                  {msg.user}:<span>{msg.text}</span>
                </p>
              </div>
            ))
          ) : (
            <div>----------</div>
          )}
        </div>
        <form className="chat-form" onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" onClick={handleSendMessage}>
            Send
          </button>
        </form>
      </section>
    </main>
  );
};

export default Lobby;
