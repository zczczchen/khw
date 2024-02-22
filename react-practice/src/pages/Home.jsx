import React from "react";
import { Link } from "react-router-dom";
import "../css/reset.css";
import "../css/home.css";

function Home() {
  return (
    <div className='wrap'>
      <Link to='/counter'>
        <button className='counter-button'>Counter</button>
      </Link>
      <Link to='/magazines/golf_digest'>
        <button className='magazine-button'>Magazine</button>
      </Link>
    </div>
  );
}

export default Home;
