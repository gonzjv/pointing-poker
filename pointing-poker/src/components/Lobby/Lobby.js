import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { MainContext } from '../../mainContext';
import { SocketContext } from '../../socketContext';
import './Lobby.css';

const Lobby = () => {
  const socket = useContext(SocketContext);
  const { name, room, setName, setRoom } = useContext(MainContext);
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <main>
      <div>Good day, {name}!</div>
      <button onClick={handleClick}>Go Home</button>
    </main>
  );
};

export default Lobby;
