import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Issue from "../components/Issue";
import "../css/magazine.css";

function Magazine() {
  const { titleId } = useParams();

  const [years, setYears] = useState([]);

  useEffect(() => {
    async function getYears() {
      const response = await fetch(
        `https://api-sandbox.thekono.com/KPI2/titles/${titleId}/years`
      );
      const result = await response.json();

      setYears(
        result.sort(function compareYears(a, b) {
          return b.year - a.year;
        })
      );
    }
    getYears();
  }, []);

  return (
    <div className='magazines-wrap'>
      {years.map(({ year }) => (
        <Issue key={year} year={year} titleId={titleId} />
      ))}
    </div>
  );
}

export default Magazine;
