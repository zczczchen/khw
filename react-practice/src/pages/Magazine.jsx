import React from "react";
import { useParams } from "react-router-dom";
import Issue from "../components/Issue";
import "../css/magazine.css";

function Magazine() {
  const { title_id } = useParams();

  const [years, setYears] = React.useState([]);

  React.useEffect(() => {
    async function getYears() {
      const response = await fetch(
        `https://api-sandbox.thekono.com/KPI2/titles/${title_id}/years`
      );
      const result = await response.json();

      setYears(
        result.sort(function compareYears(a, b) {
          console.log(a.year, b.year);
          return b.year - a.year;
        })
      );
    }
    getYears();
  }, []);

  return (
    <div className='magazines-wrap'>
      {years.map(({ year }) => (
        <Issue key={year} year={year} title_id={title_id} />
      ))}
    </div>
  );
}

export default Magazine;
