import Button from '../Button/Button';
import './modal-kick-player.css';
import React, { useContext } from 'react';
import { SocketContext } from '../../socketContext';
import { UsersContext } from '../../usersContext';

const ModalKickPlayer = ({ active, setActive }) => {
  const socket = useContext(SocketContext);
  const { dealer, playerToKick } = useContext(UsersContext);
  console.log('toKick: ', playerToKick);

  const handleDelete = (id) => {
    console.log('delete id: ', id);
    socket.emit('deletePlayer', id, dealer.lobbyID);
  };

  const closeModalKick = () => {
    setActive(false);
  };
  return (
    <div className={active ? 'modal__kick modal__kick-active' : 'modal__kick'}>
      <div className="form__kick__player">
        <h3 className="form__kick__title"> Kick player?</h3>
        <p className="form__kick__text">
          Are you really want to remove player{' '}
          <span className="form__kick__name">{playerToKick.firstName}</span> from
          game session?
        </p>
        <Button
          value="Yes"
          onCustomClick={() => {
            handleDelete(playerToKick.id);
            closeModalKick();
          }}
        />
        <Button value="No" isWhite={true} onCustomClick={closeModalKick} />
      </div>
    </div>
  );
};

export default ModalKickPlayer;
