import React, { useContext } from 'react';
import Card from '../../components/Card/cards';
import { IssueItem } from '../../components/Lobby/issues/issue-item/issue-item';
import { MainContext } from '../../mainContext';
import './results-page.css';

const ResultsPage = () => {
  const { issues, results } = useContext(MainContext);
  console.log('results: ', results);

  const getCards = (issue) => {
    const issueResults = results.filter((result) => result.issueID === issue.id);

    return issueResults.map((result) => {
      const voteCount = issueResults.filter(
        (elem) => elem.cardValue === result.cardValue,
      );
      const votePercents = (voteCount.length / issueResults.length) * 100;

      return (
        <figure className="card-wrap">
          <Card card={{ value: result.cardValue, type: 'SP' }} flipped={true} />
          <figcaption>{votePercents}%</figcaption>
        </figure>
      );
    });
  };

  return (
    <main className="results">
      {issues.map((issue, i) => {
        return (
          <>
            <div key={i}>
              <IssueItem issue={issue} />
            </div>
            <div className="results-cards">{getCards(issue)}</div>
          </>
        );
      })}
    </main>
  );
};

export default ResultsPage;
