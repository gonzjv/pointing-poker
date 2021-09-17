import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { MainContext } from '../../mainContext';
import { SocketContext } from '../../socketContext';
import { UsersContext } from '../../usersContext';
import './Lobby.css';

const Lobby = () => {
  const socket = useContext(SocketContext);
  const { firstName, lastName, lobbyID } = useContext(MainContext);
  const history = useHistory();
  const { users, dealer, setDealer } = useContext(UsersContext);
  console.log('users: ', users);

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
      <p>Game ID is {dealer.lobbyID}</p>
      <p>Dealer is {dealer.firstName}</p>
      {users.map((user) => {
        return (
          <>
            <p>{user.name}</p>
          </>
        );
      })}
      <button onClick={handleClick}>Go Home</button>
      <span style={{ fontStyle: 'italic' }}></span>
    </main>
  );
};

export default Lobby;
