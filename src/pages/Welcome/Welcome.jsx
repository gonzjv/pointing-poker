import React, { useState, useContext } from 'react';
import ModalConnect from '../../components/ModalConnect/Modal-connect';
import ModalStartGame from '../../components/ModalStartGame/Modal-start-game';
import { MainContext } from '../../mainContext';
import { SocketContext } from '../../socketContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './welcome.css';

const Welcome = () => {
  const [modalStartActive, setModalStartActive] = useState(false);
  const [modalConnectActive, setModalConnectActive] = useState(false);
  const { lobbyID, setLobbyID } = useContext(MainContext);
  const socket = useContext(SocketContext);

  const handleClick = () => {
    socket.emit('checkLobbyID', { lobbyID }, (error) => {
      if (error) {
        return notify(error);
      }
      setModalConnectActive(true);
    });
  };

  const notify = (message) => {
    toast(message, {
      position: 'top-center',
    });
  };

  return (
    <main className="wrapper welcome-wrapper">
      <section className="main-section">
        <div className="game-title">
          <h1 className="title">
            {' '}
            <img src="./images/cards.png" alt="cards" />{' '}
            <span className="title1">Poker</span>{' '}
            <span className="title2">Planning</span>
          </h1>
          <div className="title-line" />
        </div>

        <h2 className="heading">Start your planning:</h2>
        <h4 className="form-input">Create session:</h4>
        <button className="button" onClick={() => setModalStartActive(true)}>
          Start new game
        </button>
        <p className="heading form-text">or:</p>
        <h4 className="form-input up">
          Connect to lobby by <span className="colored">ID</span> :
        </h4>
        <input
          type="text"
          name="lobby-id"
          value={lobbyID}
          onChange={(event) => setLobbyID(event.target.value)}
        />
        <button className="button" onClick={handleClick}>
          Connect
        </button>
      </section>
      <ToastContainer />
      <ModalStartGame active={modalStartActive} setActive={setModalStartActive} />
      <ModalConnect active={modalConnectActive} setActive={setModalConnectActive} />
    </main>
  );
};

export default Welcome;
