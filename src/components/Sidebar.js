// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../assets/logo.png';
<<<<<<< HEAD
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import GroupIcon from '@mui/icons-material/Group';



=======
>>>>>>> 93d7257269631ad2878f43739ddd68bf3ef86f8e


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
      <img src={logo} alt="Logo" />
      </div>
      <nav>
        <ul>
<<<<<<< HEAD
          <li><Link to="/">   <DashboardIcon/>  Dashboard</Link></li>
          <li><Link to="/job-request"> < CalendarViewDayIcon/> Request</Link></li>
          <li><Link to="/candidates">  <GroupIcon/>      Candidates</Link></li>
=======
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/job-request">Job Request</Link></li>
          <li><Link to="/candidates">Candidates</Link></li>
>>>>>>> 93d7257269631ad2878f43739ddd68bf3ef86f8e
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
