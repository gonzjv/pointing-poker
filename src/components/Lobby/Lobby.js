import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { MainContext } from '../../mainContext';
import { SocketContext } from '../../socketContext';
import { UsersContext } from '../../usersContext';
import Card from '../card/card';
import GameInfo from './game-info/game-info';
import IssuesList from './issues/issues';
import './Lobby.css';
import Members from './members/Members';
import Settings from './settings/settings';

const Lobby = () => {
  const socket = useContext(SocketContext);
  const { firstName, lastName } = useContext(MainContext);
  const history = useHistory();
  const { players, dealer, setDealer } = useContext(UsersContext);

  const handleClick = () => {
    setDealer({});
    history.push('/');
  };

  const cardInfo = {
    value: '5',
    type: 'SP',
  };

  return (
    <main>
      <div className="wrapper">
        <button onClick={handleClick}>Go Home</button>
        <GameInfo dealer={dealer} />
        <Members players={players} />
        <IssuesList />
        <Settings />
        <Card card={cardInfo} />
      </div>
    </main>
  );
};

export default Lobby;
