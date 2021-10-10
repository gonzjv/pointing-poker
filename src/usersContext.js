import React, { useState } from 'react';

const UsersContext = React.createContext();

const UsersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [dealer, setDealer] = useState({});
  const [playerToKick, setPlayerToKick] = useState({});
  const [isDealer, setIsDealer] = useState(false);
  const [asPlayer, setAsPlayer] = useState(false);

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
        asPlayer,
        setPlayers,
        setDealer,
        setPlayerToKick,
        setIsDealer,
        setAsPlayer
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
