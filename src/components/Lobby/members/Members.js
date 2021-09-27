import MemberCard from './Member-card/Member-card';
import './Members.css';

export default function Members({ players, setActive, setPlayerNameKick }) {
  return (
    <div className="members">
      <h2 className="lobby__subtitle members__title">members:</h2>
      <div className="members__list">
        {players.map((player) => {
          return (
            <MemberCard
              member={player}
              setActive={setActive}
              setPlayerNameKick={setPlayerNameKick}
            />
          );
        })}
      </div>
    </div>
  );
}
