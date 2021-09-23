import React, { useState } from 'react';

const UsersContext = React.createContext();

const UsersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [dealer, setDealer] = useState({});

  return (
    <UsersContext.Provider value={{ players, dealer, setPlayers, setDealer }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
