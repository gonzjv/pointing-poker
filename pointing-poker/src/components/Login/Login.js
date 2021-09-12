import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { MainContext } from '../../mainContext';
import { SocketContext } from '../../socketContext';
import { UsersContext } from '../../usersContext';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const socket = useContext(SocketContext);
  const { name, lobby, setName, setLobby } = useContext(MainContext);
  const history = useHistory();
  const { setUsers } = useContext(UsersContext);

  useEffect(() => {
    socket.on('users', (users) => {
      setUsers(users);
    });
  });

  const notify = (message) => {
    toast(message, {
      position: 'top-center',
    });
  };

  const handleClick = () => {
    socket.emit('login', { name, lobby }, (error) => {
      if (error) {
        console.log(error);
        return notify(error);
      }
      history.push('/lobby');
    });
  };

  return (
    <main>
      <header>Pointing Poker</header>
      <input
        value={name}
        placeholder="User name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label htmlFor="lobby-id">
        Lobby ID:
        <input
          id="lobby-id"
          value={lobby}
          placeholder="Lobby ID"
          onChange={(e) => setLobby(e.target.value)}
        ></input>
      </label>
      <button onClick={handleClick}>Connect</button>
      <ToastContainer />
    </main>
  );
};

export default Login;
