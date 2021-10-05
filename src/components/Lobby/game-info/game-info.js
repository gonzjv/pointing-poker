import Button from '../../Button/Button';
import MemberCard from '../members/Member-card/Member-card';
import './game-info.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UsersContext } from '../../../usersContext';

const GameInfo = ({ mode }) => {
  const history = useHistory();
  const { dealer, setDealer } = useContext(UsersContext);

  const notify = (message) => {
    toast(message, {
      position: 'top-right',
    });
  };

  const closeGame = () => {
    setDealer({});
    history.push('/');
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
      <div className="link">
        <p>Lobby ID:</p>
        <div className="game__id">
          <input
            className="link__text"
            id="id__text"
            value={dealer.lobbyID}
            readonly
          />
          <Button value="Copy" onCustomClick={copyID} />
        </div>
      </div>
      <Link to="/game">
        <Button value="Start game" onCustomClick={() => {}} />
      </Link>
      <Button value="Cancel game" onCustomClick={closeGame} isWhite={true} />
      <Button value="Stop Game" isWhite={true} onCustomClick={undefined} />
    </div>
  );
};
export default GameInfo;
