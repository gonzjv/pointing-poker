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
        setPlayers,
        setDealer,
        setPlayerToKick,
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
