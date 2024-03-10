import React from "react";
import "../css/reset.css";
import "../css/magazine.css";

function Issue(props) {
  const [issues, setIssues] = React.useState([]);

  React.useEffect(() => {
    async function getIssues() {
      const response = await fetch(
        `https://api-sandbox.thekono.com/KPI2/titles/${props.titleId}/years/${props.year}/magazines`
      );
      const result = await response.json();
      setIssues(result);
    }
    if (props.year && props.titleId) {
      getIssues();
    }
  }, [props.year, props.titleId]);

  return (
    <div className='magazine-wrap'>
      <h2 className='issue-year'>{props.year}</h2>
      <hr className='issue-line' />
      <div className='issues-wrap'>
        {issues.map((oneIssue) => {
          const bid = oneIssue.bid;
          const covers = oneIssue.covers;
          const issue = oneIssue.issue;
          return (
            <div key={bid} className='issues'>
              <img
                className='issue-cover'
                src={covers.small.url}
                alt='issue-cover'
              />
              <h3 className='issue-title'>{issue}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Issue;
