import React, { useState } from 'react';

const MainContext = React.createContext();

const MainProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [lobby, setLobby] = useState('');

  return (
    <MainContext.Provider value={{ name, lobby, setName, setLobby }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
