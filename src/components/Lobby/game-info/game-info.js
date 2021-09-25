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

  const emptyFunction = () => {};

  return (
    <div className="game-info">
      <h2 className="lobby__subtitle game-info__title">{dealer.lobbyID}</h2>
      <div className="scram-master">
        <p>Scram master: </p>
        <MemberCard member={dealer} />
      </div>
      <div className="link">
        <p>Lobby ID:</p>
        <div className="game__id">
          <input className="link__text" id="id__text" value={dealer.lobbyID} />

          <Button value="Copy" onCustomClick={copyID} />
        </div>
      </div>
      <Button value="Start Game" />
      <Button value="Cancel game" isWhite={true} />
    </div>
  );
}
