import React from "react";
import "../css/loading.css";

function Loading() {
  return (
    <div className='loading-box'>
      <img className='loading-picture' src='/kono-loading.gif' alt='loading' />
    </div>
  );
}

export default Loading;