import Button from '../../Button/Button';
import MemberCard from '../members/Member-card/Member-card';
import './game-info.css';

export default function GameInfo({ dealer }) {
  const copyID = (event) => {
    const idArea = document.getElementById('id__text');
    const id = idArea.value;
    navigator.clipboard.writeText(id).then(
      function () {
        console.log('Async: Copying to clipboard was successful!');
      },
      function (err) {
        console.error('Async: Could not copy text: ', err);
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
        <MemberCard member={dealer} isPossibilityKick={false} />
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
      <Button value="Start Game" />
      <Button value="Cancel game" isWhite={true} />
    </div>
  );
}
