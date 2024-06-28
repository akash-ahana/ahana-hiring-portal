// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import JobRequest from './components/JobRequest';
import Candidates from './components/Candidates';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    

    <Router>
      
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <TopBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/job-request" element={<JobRequest />} />
              <Route path="/candidates" element={<Candidates />} />
            </Routes>
          </div>
        </div>
      </div>


      
    </Router>


        
  );
}

export default App;
