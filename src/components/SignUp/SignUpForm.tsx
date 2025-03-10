import React from "react";
import { Col, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Tooltip, OverlayTrigger, Button } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <>
      <div className="signIn-form">
        <h2 className="heading40 text-black mb-5">Register yourself</h2>
        <div className="position-relative text-center mb-4">
          <img
            className="profilePicture"
            src="/images/user-icon.svg"
            alt="profile"
          />
          <button className="profileEdit">
            <img src="/images/edit-Icon.svg" alt="edit" />
          </button>
        </div>
        <div className="mb-4">
          <div className="prsnlDtl d-flex align-items-center justify-content-between mb-3">
            <h3 className="fs-6 fw-bold mb-0">Personal Details</h3>
            {/* show this div when user click on next button */}
            {/* <h3 className="fs-6 fw-bold mb-0">Security Details</h3> */}
            <button className="d-flex align-items-center gap-1 border-0 bg-transparent">
              Next <img src="/images/right-arrow-Icon.svg" alt="arrow" />
            </button>
            {/* show this button when user click on next button */}
            {/* <button className="d-flex align-items-center gap-1 border-0 bg-transparent">
              Back <img src="/images/left-arrow-Icon.svg" alt="arrow" />
            </button> */}
          </div>
          <ProgressBar now={50} className="custom-progress" />
        </div>

        {/* <div className="mb-5">
          <FloatingLabel
            controlId="floatingInput"
            label="First Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Last Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Username"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Mobile No."
            className="mb-3"
          >
            <Form.Control type="tel" placeholder="" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Address"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="" />
          </FloatingLabel>
        </div> */}
        <div className="mb-3">
          <div className="position-relative">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <button className="pwdShow 2">Show</button>
          </div>
          <div className="d-flex align-items-center gap-2 mb-3">
            <Row className="gap-1 w-100">
              <Col>
                <div className="weakpswd Password"></div>
              </Col>
              <Col>
                <div className="moderatepswd Password"></div>
              </Col>
              <Col>
                <div className="strongpswd Password"></div>
              </Col>
              <Col>
                <div className="securepswd Password"></div>
              </Col>
            </Row>{" "}
            <div>
              <span className="toolltips">
                <img src="/images/question-mark-icon.svg" alt="tooltip" />
              </span>
            </div>
          </div>
          <div className="position-relative">
            <FloatingLabel
              controlId="floatingPassword"
              label="Confirm Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Confirm Password" />
            </FloatingLabel>
            <button className="pwdShow">Show</button>
          </div>
          <button className="btnPrimary w-100 mb-3">Create account</button>
          <div className="infoIcon mb-2">
            <img src="/images/info-icon.svg" alt="info" />
          </div>
          <p className="prsnlDtl">
            An email will be sent to admin for approval, once approved, you will
            receive an email so you will be able to login from there
          </p>
        </div>
        <hr className="divider" />
        <div className="dontHave">
          Already have an account?<button className="btnSignUp">Log in</button>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
