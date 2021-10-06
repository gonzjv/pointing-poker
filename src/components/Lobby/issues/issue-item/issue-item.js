import './issue-item.css';
export const IssueItem = ({ issue, gameMode, current }) => {
  return (
    <div className={current === true ? 'issue-item current' : 'issue-item'}>
      <div className="issue__info">
        {current === true ? <p className="issue__current">current </p> : ''}
        <p className="issue__name">{issue.name} </p>
        <p className="issue__priority">{issue.priority}</p>
      </div>
      {gameMode === true ? (
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
