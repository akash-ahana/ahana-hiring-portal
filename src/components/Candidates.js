// src/components/Candidates.js
import React from 'react';
import './Candidates.css';

function Candidates() {
  return (
    <div className="candidates">
      <h1>Candidate List</h1>
      <div className="candidate-list">
        <div className="candidate-item">
          <div>RPA0010</div>
          <div>Akshay</div>
          <div>8938833992</div>
          <div>DBA</div>
          <div>5 Years</div>
          <div>6 LPA</div>
          <div>L1 Interview</div>
          <div><a href="#">View Resume</a></div>
        </div>
        {/* Repeat candidate-item as needed */}
      </div>
    </div>
  );
}

export default Candidates;
