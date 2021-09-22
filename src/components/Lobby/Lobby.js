import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MainContext } from '../../mainContext';
import { SocketContext } from '../../socketContext';
import { UsersContext } from '../../usersContext';
import './Lobby.css';

const Lobby = () => {
  const socket = useContext(SocketContext);
  const { firstName, lastName } = useContext(MainContext);
  const history = useHistory();
  const { players, dealer, setPlayers, setDealer } = useContext(UsersContext);

  useEffect(() => {
    socket.on('players', (players) => {
      setPlayers(players);
    });
  });

  const handleClick = () => {
    setDealer({});
    socket.emit('exit', () => {
      history.push('/');
    });
  };

  return (
    <main>
      <p>
        Good day, {firstName} {lastName}! Now you are in the lobby with gameID:{' '}
        {dealer.lobbyID}.
      </p>
      <p>Waiting for {dealer.firstName} to start the game</p>
      <p>Game ID : {dealer.lobbyID}</p>
      <p>Dealer : {dealer.firstName}</p>
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
      <button onClick={handleClick}>Exit</button>
      <span style={{ fontStyle: 'italic' }}></span>
    </main>
  );
};

export default Lobby;
