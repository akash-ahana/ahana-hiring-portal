// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../assets/logo.png';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
      <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/job-request">Job Request</Link></li>
          <li><Link to="/candidates">Candidates</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
