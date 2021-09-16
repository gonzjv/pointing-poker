import React, { useState } from 'react';

const UsersContext = React.createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [dealer, setDealer] = useState({});

  return (
    <UsersContext.Provider value={{ users, dealer, setUsers, setDealer }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
