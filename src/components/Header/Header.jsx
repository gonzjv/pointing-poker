import React, { useContext } from 'react';
import './header.css';
import { LobbyContext }  from './../Lobby/LobbyContext';

function Header() {
  const { setIsChatDisplay } = useContext(LobbyContext);

  const openChat = () => {
    setIsChatDisplay(true);
  }

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="logo-wrapper">
          <div className="logo" />
          <div className="logo-letter">
            <span className="down">P</span>
            <span className=" up">P</span>
          </div>

        </div>
        <button className='open-chat' onClick={openChat}>

          <img className='open-chat__icon' src='./icon/chat.svg'/>  
         </button>
      </div>
    </header>
  );
}

export default Header;
