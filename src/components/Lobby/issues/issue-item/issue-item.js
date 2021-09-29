import "./issue-item.css";

export default function IssueItem(props) {
  return (
    <div className="issue-item">
      <div className="issue__info">
        <p className="issue__name">{props.issue.name} </p>
        <p className="issue__priority">{props.issue.priority}</p>
      </div>
      <button className="issue__button issue__button__edit">
        <img src="./icon/edit.svg" />
      </button>
      <button className="issue__button issue__button__delete">
        <img src="./icon/delete.svg" />
      </button>
    </div>
  );
}
