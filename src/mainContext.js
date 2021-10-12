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
  const [currentIssue, setCurrentIssue] = useState({});
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [votes, setVotes] = useState([]);

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
        currentIssue,
        isTimerActive,
        votes,
        setFirstName,
        setLastName,
        setJobPosition,
        setLobbyID,
        setModalKick,
        setIsGameRun,
        setModalIssue,
        setIssues,
        setCurrentIssue,
        setIsTimerActive,
        setVotes,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
