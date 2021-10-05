import MemberCard from './Member-card/Member-card';
import './Members.css';
import React, { useContext } from 'react';
import { UsersContext } from '../../../usersContext';
import { MainContext } from '../../../mainContext';

const Members = () => {
  const { players } = useContext(UsersContext);
  const { isGameRun } = useContext(MainContext);

  return (
    <div className="members">
      <h2 className="lobby__subtitle members__title">members:</h2>
      <div className={isGameRun === true ? 'column__list' : 'members__list'}>
        {players.map((player) => {
          return <MemberCard member={player} />;
        })}
      </div>
    </div>
  );
};

export default Members;
