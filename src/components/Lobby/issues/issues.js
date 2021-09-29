import IssueItem from "./issue-item/issue-item";
import "./issues.css";

const issueExample = {
  name: "Issue 542",
  priority: "Low priority",
};

export default function IssuesList({mode}) {
  return (
    <div className="issues">
      <h2 className="title issues__title">Issues:</h2>
      <div className= {mode === true ? "column__list" : "issues__list" }>
        <IssueItem issue={issueExample} />
        <IssueItem issue={issueExample} />
        <IssueItem issue={issueExample} />
        <IssueItem issue={issueExample} />
        <button className='issue__create'>
          <p className='issue__create__text'>Create new Issue</p>
          <img src="./icon/add.svg" />
        </button>
      </div>
    </div>
  );
}
