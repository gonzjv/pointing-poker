import './chat.css';
import { useState, useContext } from 'react';
import { LobbyContext } from './../Lobby/LobbyContext';
import { SocketContext } from '../../socketContext';

const Chat = ({ messages }) => {
  const { isChatDisplay, setIsChatDisplay } = useContext(LobbyContext);
  const { message, setMessage } = useContext(LobbyContext);
  const socket = useContext(SocketContext);

  const chatClose = () => {
    setIsChatDisplay(false);
  };

  const disabledSendButton = (text) => {
    const buttonSend = document.querySelector('.chat__send');
    if (text.length > 0) {
      buttonSend.disabled = false;
    } else {
      buttonSend.disabled = true;
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    socket.emit('sendMessage', message);
    setMessage('');
    disabledSendButton('');
  };

  const clickCtrlAndEnter = (e) => {
    if (e.ctrlKey && e.keyCode == 13 && message.length > 0) {
      socket.emit('sendMessage', message);
      setMessage('');
      disabledSendButton('');
    }
  };

  const changeMessage = (e) => {
    setMessage(e.target.value);
    disabledSendButton(e.target.value);
  };

  return (
    <div className={isChatDisplay ? 'chat1' : 'chat1 chat-hide'}>
      <div className="chat__close">
        <button className="chat__close__button" onClick={chatClose}>
          <img className="chat__close__icon" src="./icon/close.svg" />
        </button>
      </div>
      <div className="chat__messages">
        {messages.map((message) => {
          return (
            <div className="chat__message">
              <p className="chat__message__name">{message.user}</p>
              <p className="chat__message__text">{message.text}</p>
            </div>
          );
        })}
      </div>
      <form className="chat__form" onSubmit={handleSendMessage}>
        <textarea
          className="chat__input"
          type="text"
          value={message}
          placeholder="Message:"
          onChange={changeMessage}
          onKeyDown={clickCtrlAndEnter}
        />
        <button className="chat__send" disabled>
          <img src="./icon/send_message.svg" />
        </button>
      </form>
    </div>
  );
};

export default Chat;
