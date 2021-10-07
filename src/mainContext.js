import React, { useState } from 'react';

const MainContext = React.createContext();

const MainProvider = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobPosition, setJobPosition] = useState('');
  const [lobbyID, setLobbyID] = useState('');
  const [modalKick, setModalKick] = useState(false);
  const [isGameRun, setIsGameRun] = useState(false);
  const [modalIssue, setModalIssue] = useState(false);
  const [issues, setIssues] = useState([]);

  return (
    <MainContext.Provider
      value={{
        firstName,
        lastName,
        jobPosition,
        lobbyID,
        modalKick,
        isGameRun,
        modalIssue,
        issues,
        setFirstName,
        setLastName,
        setJobPosition,
        setLobbyID,
        setModalKick,
        setIsGameRun,
        setModalIssue,
        setIssues,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
