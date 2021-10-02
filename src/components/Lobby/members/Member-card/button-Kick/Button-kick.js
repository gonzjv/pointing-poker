import './Button-kick.css';
import React, { useContext } from 'react';
import { UsersContext } from '../../../../../usersContext';
import { MainContext } from '../../../../../mainContext';
import { SocketContext } from '../../../../../socketContext';

const ButtonKick = ({ playerToKick }) => {
  const socket = useContext(SocketContext);

  const { isDealer, setPlayerToKick } = useContext(UsersContext);
  const { setModalKick } = useContext(MainContext);

  const handleCLick = () => {
    setPlayerToKick(playerToKick);
    isDealer
      ? setModalKick(true)
      : socket.emit('startVoting', playerToKick, socket.id);
  };
  return (
    <button
      className="button__kick"
      onClick={() => {
        handleCLick();
      }}
    >
      <img src="./icon/kick-icon.svg" />
    </button>
  );
};
export default ButtonKick;
