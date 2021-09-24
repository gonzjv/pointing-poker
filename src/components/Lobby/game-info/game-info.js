import MemberCard from '../members/Member-card/Member-card';
import './game-info.css';

export default function GameInfo({ dealer }) {
  return (
    <div className="game-info">
      <h2 className="lobby__subtitle game-info__title">{dealer.lobbyID}</h2>
      <div className="scram-master">
        <p>Scram master: </p>
        <MemberCard member={dealer} />
      </div>
      <div className="link">
        <p>Lobby ID:</p>
        <div className="link__text">{dealer.lobbyID}</div>
        <button>Copy</button>
      </div>
      <button>Start Game</button>
      <button className="button__close">Canсel game</button>
    </div>
  );
}
