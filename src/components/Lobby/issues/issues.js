import React, { useContext, useEffect, useState } from 'react';
import { IssueItem } from './issue-item/issue-item';
import './issues.css';
import { MainContext } from '../../../mainContext';
import { SocketContext } from '../../../socketContext';
import { UsersContext } from '../../../usersContext';

const IssuesList = () => {
  const { isGameRun, issues, setModalIssue, setIssues, setCurrentIssue } =
    useContext(MainContext);
  const socket = useContext(SocketContext);
  const { isDealer } = useContext(UsersContext);

  useEffect(() => {
    socket.on('refreshIssues', (issues) => {
      setIssues(issues);
      if (issues.length == 1) {
        setCurrentIssue(issues[0]);
      }
    });
    socket.on('dealerSetIssue', (issue) => {
      setCurrentIssue(issue);
    });
  });

  return (
    <div className="issues">
      <h2 className="lobby__subtitle issues__title">Issues:</h2>
      <div className={isGameRun === true ? 'column__list' : 'issues__list'}>
        {issues.map((issue, i) => {
          return (
            <div key={i}>
              <IssueItem issue={issue} />
            </div>
          );
        })}
        {isDealer ? (
          <button className="issue__create" onClick={() => setModalIssue(true)}>
            <p className="issue__create__text">Create new Issue</p>
            <img className="issue__icon" src="./icon/add.svg" />
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default IssuesList;
