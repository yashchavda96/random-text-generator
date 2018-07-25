import React from 'react';
import './App.css';

const DisplayArea = ({text}) => {
  return (
    <div className="card-panel light-blue lighten-1">
      <div className="bigFont white-text">
        {text}
      </div>
    </div>
     
  );
}

export default DisplayArea;
