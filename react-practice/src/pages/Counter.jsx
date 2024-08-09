import React from "react";
import { useState } from "react";
import "../css/counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function minusOne() {
    setCount((prevCount) => prevCount - 1);
  }

  function plusOne() {
    setCount((prevCount) => prevCount + 1);
  }

  function toZero() {
    setCount(0);
  }

  return (
    <div className='counter-wrap'>
      <div className='number'>{count}</div>
      <div className='caculater-button'>
        <button className='minus-button' onClick={minusOne}>
          -1
        </button>
        <button className='plus-button' onClick={plusOne}>
          +1
        </button>
      </div>
      <button className='zero-button' onClick={toZero}>
        Return to 0
      </button>
    </div>
  );
}

export default Counter;
