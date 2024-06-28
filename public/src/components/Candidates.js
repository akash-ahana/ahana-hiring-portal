import React, { useState } from 'react';
import './Candidates.css';
import TuneIcon from '@mui/icons-material/Tune';
import { Modal, Button, Form } from 'react-bootstrap';

function Candidates() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="candidates">
      <h1>Candidate List</h1>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline" type="submit"><TuneIcon /></button>
          </form>
          <button type="button" className="btn btn-dark ms-auto" onClick={handleShow}>Candidates</button>
          <button type="button" className="btn btn-light ms-2 border border-dark">Export</button>
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
        {/* Add more candidate items here */}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Candidate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formJobId">
              <Form.Label>Job Id</Form.Label>
              <Form.Control type="text" placeholder="RPA0010" disabled />
            </Form.Group>
            <Form.Group controlId="formFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>
            <Form.Group controlId="formMiddleName">
              <Form.Label>Middle name</Form.Label>
              <Form.Control type="text" placeholder="Middle name" />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Last name" />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="text" placeholder="Phone number" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email Id</Form.Label>
              <Form.Control type="email" placeholder="Email Id" />
            </Form.Group>
            <Form.Group controlId="formLocation">
              <Form.Label>Current location</Form.Label>
              <Form.Control type="text" placeholder="Current location" />
            </Form.Group>
            <Form.Group controlId="formCTC">
              <Form.Label>Current CTC</Form.Label>
              <Form.Control type="text" placeholder="Current CTC" />
            </Form.Group>
            <Form.Group controlId="formExpectedCTC">
              <Form.Label>Expected CTC</Form.Label>
              <Form.Control type="text" placeholder="Expected CTC" />
            </Form.Group>
            <Form.Group controlId="formCompany">
              <Form.Label>Current company</Form.Label>
              <Form.Control type="text" placeholder="Current company" />
            </Form.Group>
            <Form.Group controlId="formNoticePeriod">
              <Form.Label>Notice period</Form.Label>
              <Form.Control type="text" placeholder="Notice period" />
            </Form.Group>
            <Form.Group controlId="formJobRole">
              <Form.Label>Job role</Form.Label>
              <Form.Control type="text" placeholder="Job role" />
            </Form.Group>
            <Form.Group controlId="formReason">
              <Form.Label>Reason for job change</Form.Label>
              <Form.Control type="text" placeholder="Reason for job change" />
            </Form.Group>
            <Form.Group controlId="formResume">
              <Form.Label>Upload Resume</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Candidates;
