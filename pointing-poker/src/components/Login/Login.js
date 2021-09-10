import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MainContext } from '../../mainContext';
import { SocketContext } from '../../socketContext';
import { UsersContext } from '../../usersContext';
import './Login.css';

const Login = () => {
  const socket = useContext(SocketContext);
  const { name, room, setName, setRoom } = useContext(MainContext);
  const history = useHistory();
  const { setUsers } = useContext(UsersContext);

  useEffect(() => {
    socket.on('users', (users) => {
      setUsers(users);
    });
  });

  const handleClick = () => {
    socket.emit('login', { name, room }, (error) => {
      if (error) {
        console.log(error);
      }
      history.push('/lobby');
    });
  };

  return (
    <main>
      <div>Good day!</div>
      <input
        value={name}
        placeholder="User name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        value={room}
        placeholder="Room name"
        onChange={(e) => setRoom(e.target.value)}
      ></input>
      <button onClick={handleClick}>Log In</button>
    </main>
  );
};

export default Login;
