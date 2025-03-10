import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import ProgressBar from "react-bootstrap/ProgressBar";

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
            <button className="d-flex align-items-center gap-1 border-0 bg-transparent">
              Next <img src="/images/right-arrow-Icon.svg" alt="arrow" />
            </button>
          </div>
          <ProgressBar now={50} className="custom-progress" />
        </div>

        <div className="mb-5">
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
