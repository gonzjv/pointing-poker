import React, { useContext, useState } from 'react';
import { IssueItem } from './issue-item/issue-item';
import './issues.css';
import { MainContext } from '../../../mainContext';

const issueExample = {
  name: 'Issue 542',
  priority: 'Low priority',
};

export default function IssuesList({ setActive }) {
  const [currentIssue, setCurrentIssue] = useState(true);
  const { isGameRun } = useContext(MainContext);

  return (
    <div className="issues">
      <h2 className="lobby__subtitle issues__title">Issues:</h2>
      <div className={isGameRun === true ? 'column__list' : 'issues__list'}>
        <IssueItem
          issue={issueExample}
          gameMode={isGameRun}
          current={currentIssue}
        />
        <IssueItem issue={issueExample} gameMode={isGameRun} current={false} />
        <IssueItem issue={issueExample} gameMode={isGameRun} current={false} />
        <IssueItem issue={issueExample} gameMode={isGameRun} current={false} />
        <button className="issue__create" onClick={() => setActive(true)}>
          <p className="issue__create__text">Create new Issue</p>
          <img className="issue__icon" src="./icon/add.svg" />
        </button>
      </div>
    </div>
  );
}
