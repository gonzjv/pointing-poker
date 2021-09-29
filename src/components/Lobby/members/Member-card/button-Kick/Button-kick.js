import './Button-kick.css';
import React, { useContext } from 'react';
import { UsersContext } from '../../../../../usersContext';

const ButtonKick = ({ setActive, member }) => {
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
};
export default ButtonKick;
