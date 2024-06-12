// src/components/JobRequest.js
import React from 'react';
import './JobRequest.css';

function JobRequest() {
  return (
    <div className="job-request">
      <h1>Job Request</h1>
      <div className="job-list">
        <div className="job-item">
          <div>Job Title - RPA Developer</div>
          <div>Qualification</div>
          <div>Salary</div>
          <div>No. days of working</div>
          <div>No. of candidates required</div>
          <div className="posted">Posted a day ago</div>
        </div>
        {/* Repeat job-item as needed */}
      </div>
      <div className="recent-requests">
        <h2>Recent job requests</h2>
        <div>Yesterday you have posted a job post for <a href="#">Java developer</a></div>
        <div>Thursday you have posted a job post for <a href="#">DB developer</a></div>
      </div>
    </div>
  );
}

export default JobRequest;
