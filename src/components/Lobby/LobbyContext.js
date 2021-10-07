import React, { useState } from 'react';

const LobbyContext = React.createContext();

const LobbyProvider = ({ children }) => {
  const [isChatDisplay, setIsChatDisplay] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <LobbyContext.Provider
      value={{ isChatDisplay, setIsChatDisplay, message, setMessage }}
    >
      {children}
    </LobbyContext.Provider>
  );
};

export { LobbyContext, LobbyProvider };
