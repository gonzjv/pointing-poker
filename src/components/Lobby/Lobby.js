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
    console.log('dealer: ', dealer);
    history.push('/');
  };

  const cardInfo = {
    value: '5',
    type: 'SP',
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
      <GameInfo />
      <Members />
      <IssuesList />
      <Settings />
      <Card card={cardInfo} />
    </main>
  );
};

export default Lobby;
