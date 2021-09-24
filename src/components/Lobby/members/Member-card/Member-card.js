import ButtonKick from './button-Kick/Button-kick';
import MemberAvatar from './member-avatar/Member-avatar';
import './Member-card.css';

export default function MemberCard({ member }) {
  const checkYourself = () => {
    return member.isYou ? (
      <span className="yourself__marker">it's you</span>
    ) : (
      ''
    );
  };

  return (
    <div className="member__card">
      <MemberAvatar player={member} />
      <div className>
        <p className="member__name">
          {member.firstName} {member.lastName}
          <span className="member__position">{member.jobPosition}</span>
        </p>
      </div>
      <ButtonKick />
    </div>
  );
}
