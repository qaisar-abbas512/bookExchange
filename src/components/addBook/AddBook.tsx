// NotificationOffcanvas.tsx
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

import { Form, Button } from 'react-bootstrap';

type NotificationOffcanvasProps = {
  buttonLabel?: string; // Optional button label
};

const AddBookOffcanvas: React.FC<NotificationOffcanvasProps> = ({
  buttonLabel = "Notifications",
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btnSignin d-inline-block" onClick={handleShow}>
        {buttonLabel}
      </button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>New Book</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form>
        <h5>Add Pictures</h5>
        <div
          className="border rounded mb-4 d-flex flex-column justify-content-center align-items-center"
          style={{ height: '150px', borderStyle: 'dashed', cursor: 'pointer' }}
        >
          <div className="text-center">
            <div style={{ fontSize: '2rem' }}>+</div>
            <strong>Add Attachment</strong>
            <div className="text-muted">Max. size 5mb. JPEG, PNG only</div>
          </div>
        </div>

        <h5>Add Details</h5>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Control type="text" placeholder="Author" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGenre">
          <Form.Select>
            <option>Genre</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-fiction</option>
            <option value="biography">Biography</option>
            <option value="history">History</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLocation">
          <Form.Control type="text" placeholder="Location" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCondition">
          <Form.Label>Condition</Form.Label>
          <Form.Range />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AddBookOffcanvas;
