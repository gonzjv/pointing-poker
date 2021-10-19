import { useContext } from 'react';
import { IssueItem } from '../../components/Lobby/issues/issue-item/issue-item';
import { MainContext } from '../../mainContext';
import './results-page.css';

const ResultsPage = () => {
  const { issues } = useContext(MainContext);

  return (
    <main className="results">
      {issues.map((issue, i) => {
        return (
          <div key={i}>
            <IssueItem issue={issue} />
          </div>
        );
      })}
    </main>
  );
};

export default ResultsPage;
