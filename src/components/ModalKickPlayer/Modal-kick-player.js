import Button from '../Button/Button';
import './modal-kick-player.css';
import React, { useContext } from 'react';
import { SocketContext } from '../../socketContext';
import { UsersContext } from '../../usersContext';

import { MainContext } from '../../mainContext';

const ModalKickPlayer = () => {
  const socket = useContext(SocketContext);
  const { dealer, playerToKick } = useContext(UsersContext);
  const { modalKick, setModalKick } = useContext(MainContext);

  const handleDelete = (id) => {
    socket.emit('deletePlayer', id, dealer.lobbyID, socket.id);
  };

  return (
    <div className={modalKick ? 'modal__kick modal__kick-active' : 'modal__kick'}>
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

            setModalKick(false);
          }}
        />
        <Button
          value="No"
          isWhite={true}
          onCustomClick={() => {
            setModalKick(false);
          }}
        />
      </div>
    </div>
  );
};

export default ModalKickPlayer;
