import ButtonKick from './button-Kick/Button-kick';
import MemberAvatar from './member-avatar/Member-avatar';
import './Member-card.css';
import React, { useContext } from 'react';
import { UsersContext } from '../../../../usersContext';
import { SocketContext } from '../../../../socketContext';

const MemberCard = ({ member }) => {
  const { dealer } = useContext(UsersContext);
  const socket = useContext(SocketContext);

  return (
    <div className="member__card">
      <MemberAvatar player={member} />
      <div className>
        <p className="member__name">
          {member.firstName} {member.lastName}
          <span className="member__position">{member.jobPosition}</span>
        </p>
      </div>
      {member.id == dealer.id ? (
        <p>"Tsss 🤫...he is a powder dealer"</p>
      ) : member.id == socket.id ? (
        <p>🐒</p>
      ) : (
        <ButtonKick playerToKick={member} />
      )}
    </div>
  );
};
export default MemberCard;
