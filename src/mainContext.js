import React, { useState } from 'react';

const MainContext = React.createContext();

const MainProvider = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobPosition, setJobPosition] = useState('');

  // const [lobby, setLobby] = useState('');

  return (
    <MainContext.Provider
      value={{
        firstName,
        lastName,
        jobPosition,
        setFirstName,
        setLastName,
        setJobPosition,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
