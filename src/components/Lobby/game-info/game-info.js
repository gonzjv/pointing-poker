import Button from '../../Button/Button';
import MemberCard from '../members/Member-card/Member-card';
import './game-info.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UsersContext } from '../../../usersContext';
import { SocketContext } from '../../../socketContext';
import { MainContext } from '../../../mainContext';
import fileDownload from 'js-file-download';

const GameInfo = () => {
  const history = useHistory();
  const { dealer, setDealer, players, isDealer } = useContext(UsersContext);
  const socket = useContext(SocketContext);
  const { isGameRun, issues, setResults } = useContext(MainContext);

  useEffect(() => {
    socket.on('dealerStopGame', (results) => {
      setResults(results);
      history.push('/results');
    });
  });

  const notify = (message) => {
    toast(message, {
      position: 'top-right',
    });
  };

  const closeGame = () => {
    setDealer({});
    history.push('/');
  };

  const startGame = () => {
    socket.emit('startGame', dealer.lobbyID);
  };

  const stopGame = () => {
    socket.emit('stopGame', dealer.lobbyID);
  };

  const copyID = (event) => {
    const idArea = document.getElementById('id__text');
    const id = idArea.value;
    navigator.clipboard.writeText(id).then(
      () => {
        notify('Copying to clipboard was successful!');
      },
      (err) => {
        notify('Could not copy text: ', err);
      },
    );
  };

  const saveNameGame = (e) => {
    if (e.keyCode == 13) {
      document.getElementById('game__name').contentEditable = false;
      document.removeEventListener('keypress', saveNameGame);
    }
  };

  const editNameGame = () => {
    const title = document.getElementById('game__name');
    title.contentEditable = true;
    title.focus();
    document.addEventListener('keypress', saveNameGame);
  };

  const output = JSON.stringify(
    { dealer: dealer, players: players, issues: issues, results: [] },
    null,
    4,
  );
  const download = () => {
    fileDownload(output, 'dealer.json');
  };
  return (
    <div className="game-info">
      <p className="lobby__subtitle game-info__title" id="game__name">
        New game
        <button className="subtitle__edit" onClick={editNameGame}>
          <img className="subtitle__edit__icon" src="./icon/edit.svg" />
        </button>
      </p>
      <div className="scram-master">
        <p>Scram master: </p>

        <MemberCard member={dealer} />
      </div>
      {!isGameRun ? (
        <>
          {isDealer ? (
            <div className="link">
              <p>Lobby ID:</p>
              <div className="game__id">
                <input
                  className="link__text"
                  id="id__text"
                  value={dealer.lobbyID}
                  readOnly
                />
                <Button value="Copy" onCustomClick={copyID} />
              </div>
            </div>
          ) : (
            <></>
          )}
          {isDealer ? (
            <>
              <Button
                value="Start game"
                onCustomClick={() => {
                  startGame();
                }}
              />
              <Button
                value="Cancel game"
                onCustomClick={() => {
                  closeGame();
                }}
                isWhite={true}
              />
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <div>
          {isDealer ? (
            <Button
              value="Stop Game"
              isWhite={true}
              onCustomClick={() => {
                stopGame();
              }}
            />
          ) : (
            <></>
          )}
          <div>
            <Button
              value="Download result"
              onCustomClick={() => {
                download();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default GameInfo;
