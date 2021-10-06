import './issue-item.css';
import React, { useContext } from 'react';
import { MainContext } from '../../../../mainContext';

export const IssueItem = ({ issue }) => {
  const { isGameRun } = useContext(MainContext);

  return (
    <div className={issue.isCurrent === true ? 'issue-item current' : 'issue-item'}>
      <div className="issue__info">
        {issue.isCurrent === true ? <p className="issue__current">current </p> : ''}
        <p className="issue__name">{issue.title} </p>
        <p className="issue__priority">{issue.priority}</p>
      </div>

      {isGameRun === true ? (
        <div>
          <button className="issue__button">
            <img className="issue__icon" src="./icon/close.svg" />
          </button>
        </div>
      ) : (
        <div>
          <button className="issue__button">
            <img className="issue__icon" src="./icon/edit.svg" />
          </button>
          <button className="issue__button">
            <img className="issue__icon" src="./icon/delete.svg" />
          </button>
        </div>
      )}
    </div>
  );
};
