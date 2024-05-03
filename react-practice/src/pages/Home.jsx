import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

function Home() {
  return (
    <main className='contain-wrap'>
      <Link to='/counter'>
        <button className='counter-button'>Counter</button>
      </Link>
      <Link to='/magazines/golf_digest'>
        <button className='magazine-button'>Magazine</button>
      </Link>
      <Link to='/darkmode'>
        <button className='darkmode-button'>Dark Mode</button>
      </Link>
    </main>
  );
}

export default Home;
