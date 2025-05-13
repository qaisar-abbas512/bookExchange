// NotificationOffcanvas.tsx
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

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
      <Button variant="primary" onClick={handleShow}>
        {buttonLabel}
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Notifications</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Replace this with your actual content */}
          <p>This is the notification content.</p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AddBookOffcanvas;
