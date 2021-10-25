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
  const [vote, setVote] = useState({});
  const [results, setResults] = useState([]);

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
        vote,
        results,
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
        setVote,
        setResults,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
