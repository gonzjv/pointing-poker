import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { MainContext } from '../../mainContext';
import { SocketContext } from '../../socketContext';
import { UsersContext } from '../../usersContext';
import './Lobby.css';

const Lobby = () => {
  const socket = useContext(SocketContext);
  const { firstName, lastName } = useContext(MainContext);
  const history = useHistory();
  const { players, dealer, setDealer } = useContext(UsersContext);

  const handleClick = () => {
    setDealer({});
    console.log('dealer: ', dealer);
    history.push('/');
  };

  return (
    <main>
      <p>
        Good day, {firstName} {lastName}!
      </p>
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
      <button onClick={handleClick}>Go Home</button>
      <span style={{ fontStyle: 'italic' }}></span>
    </main>
  );
};

export default Lobby;
