import React, { useState } from 'react';

const MainContext = React.createContext();

const MainProvider = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobPosition, setJobPosition] = useState('');
  const [lobbyID, setLobbyID] = useState('');
  const [modalKick, setModalKick] = useState(false);
  const [isGameRun, setIsGameRun] = useState(false);

  return (
    <MainContext.Provider
      value={{
        firstName,
        lastName,
        jobPosition,
        lobbyID,
        modalKick,
        isGameRun,
        setFirstName,
        setLastName,
        setJobPosition,
        setLobbyID,
        setModalKick,
        setIsGameRun,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
