import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { MainContext } from '../../mainContext';
import { SocketContext } from '../../socketContext';
import { UsersContext } from '../../usersContext';
import './Lobby.css';

const Lobby = () => {
  const socket = useContext(SocketContext);
  const { name, room, setName, setRoom } = useContext(MainContext);
  const history = useHistory();
  const { users } = useContext(UsersContext);
  console.log('users: ', users);

  const handleClick = () => {
    history.push('/');
  };

  return (
    <main>
      <div>Good day, {name}!</div>
      {users.map((user) => {
        return (
          <>
            {/* <p>{user.id}</p> */}
            <p>{user.name}</p>
          </>
        );
      })}
      <button onClick={handleClick}>Go Home</button>
      <span style={{ fontStyle: 'italic' }}>
        then add user to the same room for check BE
      </span>
    </main>
  );
};

export default Lobby;
