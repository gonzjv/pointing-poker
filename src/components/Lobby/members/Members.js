import MemberCard from './Member-card/Member-card';
import './Members.css';
import React, { useContext } from 'react';
import { UsersContext } from '../../../usersContext';

const Members = () => {
  const { players } = useContext(UsersContext);

  return (
    <div className="members">
      <h2 className="lobby__subtitle members__title">members:</h2>
      <div className="members__list">
        {players.map((player) => {
          return <MemberCard member={player} />;
        })}
      </div>
    </div>
  );
};
export default Members;
