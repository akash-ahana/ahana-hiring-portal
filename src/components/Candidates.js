// src/components/Candidates.js
import React from 'react';
import './Candidates.css';
import TuneIcon from '@mui/icons-material/Tune';

function Candidates() {
  return (
    <div className="candidates">
      <h1>Candidate List</h1>
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline" type="submit"><TuneIcon/></button>
    </form>
  </div>
</nav>
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
        
 
      </div>
    </div>
  );
}

export default Candidates;
