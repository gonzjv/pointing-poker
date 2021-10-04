import ButtonKick from './button-Kick/Button-kick';
import MemberAvatar from './member-avatar/Member-avatar';
import './Member-card.css';

const MemberCard = ({ member, setActive, isPossibilityKick = true }) => {
  const checkYourself = () => {
    return member.isYou ? <span className="yourself__marker">it's you</span> : '';
  };
  const checkPossibilityKick = () =>
    isPossibilityKick ? <ButtonKick setActive={setActive} member={member} /> : '';

  return (
    <div className="member__card">
      <MemberAvatar player={member} />
      <div >
        <p className="member__name">
          {member.firstName} {member.lastName}
          <span className="member__position">{member.jobPosition}</span>
        </p>
      </div>
      {checkPossibilityKick()}
    </div>
  );
};
export default MemberCard;
