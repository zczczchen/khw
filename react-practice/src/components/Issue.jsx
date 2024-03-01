import React from "react";
import "../css/reset.css";
import "../css/magazine.css";

function Issue(props) {
  const [issues, setIssues] = React.useState([]);

  React.useEffect(() => {
    async function getIssues() {
      const response = await fetch(
        `https://api-sandbox.thekono.com/KPI2/titles/${props.title_id}/years/${props.year}/magazines`
      );
      const result = await response.json();
      setIssues(result);
      // console.log(result);
    }
    getIssues();
  }, [props.year]);

  return (
    <div className='magazine-wrap'>
      <h2 className='issue-year'>{props.year}</h2>
      <hr className='issue-line' />
      <div className='issues-wrap'>
        {issues.map((aIssue) => {
          const bid = aIssue.bid;
          const covers = aIssue.covers;
          const issue = aIssue.issue;
          return (
            <div key={bid} className='issues'>
              <img
                // key={bid}
                className='issue-cover'
                src={covers.small.url}
                alt='issue-cover'
              />
              <h3
                //  key={bid}
                className='issue-title'
              >
                {issue}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Issue;
