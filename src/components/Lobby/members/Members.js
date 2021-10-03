import MemberCard from './Member-card/Member-card';
import './Members.css';
import React, { useContext } from 'react';
import { UsersContext } from '../../../usersContext';

const Members = ({ setActive, mode}) => {
  const { players } = useContext(UsersContext);
  const test = {
    firstName: 'one',
    lastName: 'two',
  }

  return (
    <div className="members">
      <h2 className="lobby__subtitle members__title">members:</h2>
      <div className= {mode === true ? "column__list" : "members__list" }>
       {
       players.map((player) => {
          return <MemberCard member={player} setActive={setActive} />;
        })
      }
       
      </div>
    </div>
  );
};

export default Members;
