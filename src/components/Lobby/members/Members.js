import MemberCard from './Member-card/Member-card';
import './Members.css';

export default function Members({ players }) {
  return (
    <div className="members">
      <h2 className="title members__title">members:</h2>
      <div className="members__list">
        {players.map((player) => {
          return <MemberCard member={player} />;
        })}
      </div>
    </div>
  );
}
