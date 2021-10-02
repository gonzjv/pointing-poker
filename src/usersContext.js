import React, { useState } from 'react';

const UsersContext = React.createContext();

const UsersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [dealer, setDealer] = useState({});
  const [playerToKick, setPlayerToKick] = useState({});
  const [isDealer, setIsDealer] = useState(false);

  return (
    <UsersContext.Provider
      value={{
        players,
        dealer,
        playerToKick,
        isDealer,
        setPlayers,
        setDealer,
        setPlayerToKick,
        setIsDealer,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
