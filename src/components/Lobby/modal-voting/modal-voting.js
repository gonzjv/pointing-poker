import Button from '../../Button/Button';
import { SocketContext } from '../../../socketContext';
import React, { useContext, useEffect, useState } from 'react';
import './modal-voting.css';

const ModalVoting = ({ player, initiator }) => {
  const socket = useContext(SocketContext);
  const [voteCount, setVoteCount] = useState(0);

  useEffect(() => {
    socket.on('voteCount', (voting) => {
      setVoteCount(voting.count);
    });
  }, [socket]);

  const handleClick = () => {
    socket.emit('vote', initiator.id, player);
  };
  return (
    <aside>
      <p>
        {`${initiator.firstName} want to kick member ${player.firstName}. Do you agree?`}
      </p>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Yes, this is necessary for all of us
      </button>
      <button onClick={() => {}}>
        No, no, no David Blane! Put my feet in my mouth!
      </button>
      <p>{`Users agree: ${voteCount}`}</p>
    </aside>
  );
};
export default ModalVoting;
