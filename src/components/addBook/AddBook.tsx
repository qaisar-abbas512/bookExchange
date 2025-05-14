// NotificationOffcanvas.tsx
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

import { Form, Button } from "react-bootstrap";
import CustomSlider from "./CustomSlider";

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
        <Offcanvas.Header closeButton className="p-4">
          <Offcanvas.Title>Add New Book</Offcanvas.Title>
        </Offcanvas.Header>
        <hr className="mt-0 mb-3" />
        <Offcanvas.Body className="p-4 position-relative customOffcanvasBody">
          <Form>
            <h5 className="mb-3">Add Pictures</h5>
            <label
              htmlFor="file-upload"
              className="border rounded mb-3 d-flex flex-column justify-content-center align-items-center"
              style={{
                height: "150px",
                borderStyle: "dashed",
                cursor: "pointer",
              }}
            >
              <input
                id="file-upload"
                type="file"
                accept=".jpeg, .jpg, .png"
                style={{ display: "none" }}
                // onChange={(e) => {
                //   const file = e.target.files[0];
                //   console.log("Selected file:", file);
                // }}
              />
              <div className="text-center">
                <div style={{ fontSize: "2rem" }}>+</div>
                <strong>Add Attachment</strong>
                <div className="text-muted">Max. size 5mb. JPEG, PNG only</div>
              </div>
            </label>
            <div className="mb-3 d-flex align-items-center gap-3">
              <div
                className="uploadBookImg position-relative"
                style={{ width: "75px", height: "75px" }}
              >
                <img
                  src="./images/small-book.png"
                  alt="book"
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "24px",
                  }}
                />
                <button className="btnDltBookImg">x</button>
              </div>
              <div
                className="uploadBookImg position-relative"
                style={{ width: "75px", height: "75px" }}
              >
                <img
                  src="./images/small-book.png"
                  alt="book"
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "24px",
                  }}
                />
                <button className="btnDltBookImg">x</button>
              </div>
            </div>

            <h5 className="mb-3">Add Details</h5>
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

            <Form.Group className="mb-5" controlId="formLocation">
              <Form.Control type="text" placeholder="Location" />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex align-items-center gap-3"
              controlId="formCondition"
            >
              <Form.Label>Condition</Form.Label>
              <CustomSlider />
            </Form.Group>
            <div
              className="d-flex align-items-center justify-content-end canvasBtn gap-3"
              style={{ position: "absolute", bottom: "20px", right: "20px" }}
            >
              <Button className="btnSecondary">Cancel</Button>
              <Button className="btnPrimary" type="submit">
                Add Book
              </Button>
            </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AddBookOffcanvas;
