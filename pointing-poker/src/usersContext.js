import React, { useState } from 'react';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
