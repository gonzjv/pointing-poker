import './Button-kick.css';
import React, { useContext } from 'react';
import { UsersContext } from '../../../../../usersContext';

export default function ButtonKick({ setActive, member }) {
  const { setPlayerToKick } = useContext(UsersContext);

  return (
    <button
      className="button__kick"
      onClick={() => {
        setActive(true);
        setPlayerToKick(member);
      }}
    >
      <img src="./icon/kick-icon.svg" />
    </button>
  );
}
