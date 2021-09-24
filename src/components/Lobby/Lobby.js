import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MainContext } from '../../mainContext';
import { SocketContext } from '../../socketContext';
import { UsersContext } from '../../usersContext';
import './Lobby.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Lobby = () => {
  const socket = useContext(SocketContext);
  const { firstName, lastName } = useContext(MainContext);
  const history = useHistory();
  const { players, dealer, setPlayers, setDealer } = useContext(UsersContext);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

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

  return (
    <main>
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
            <>
              <p>
                {player.firstName} {player.lastName}
              </p>
            </>
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
