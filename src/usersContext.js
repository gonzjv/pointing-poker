import React, { useState } from 'react';

const UsersContext = React.createContext();

const UsersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [dealer, setDealer] = useState({});
  const [playerToKick, setPlayerToKick] = useState({});

  return (
    <UsersContext.Provider
      value={{
        players,
        dealer,
        playerToKick,
        setPlayers,
        setDealer,
        setPlayerToKick,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
