import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AddTeacher = ({
  show,
  handleClose,
  student,
  handleChange,
  addStudentData,
}) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              value={student.firstname}
              onChange={handleChange}
            />
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={student.lastname}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={student.email}
              onChange={handleChange}
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              value={student.phone}
              onChange={handleChange}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addStudentData}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddTeacher;
