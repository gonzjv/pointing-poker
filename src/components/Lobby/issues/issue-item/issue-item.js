import './issue-item.css';
import React, { useContext } from 'react';
import { MainContext } from '../../../../mainContext';
import { SocketContext } from '../../../../socketContext';
import { UsersContext } from '../../../../usersContext';

export const IssueItem = ({ issue }) => {
  const { isGameRun, currentIssue, setCurrentIssue } = useContext(MainContext);
  const socket = useContext(SocketContext);
  const { dealer } = useContext(UsersContext);

  const changeCurrentIssue = () => {
    socket.emit('changeCurrentIssue', issue, dealer.lobbyID);
  };
  return (
    <div
      className={issue.id === currentIssue.id ? 'issue-item current' : 'issue-item'}
      onClick={() => {
        changeCurrentIssue();
      }}
    >
      <div className="issue__info">
        {issue.id === currentIssue.id ? (
          <p className="issue__current">current </p>
        ) : (
          ''
        )}
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
