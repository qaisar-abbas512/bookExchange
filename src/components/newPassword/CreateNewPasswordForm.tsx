import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
const CreateNewPasswordForm = () => {
  return (
    <>
      <div className="signIn-form">
        <h2 className="heading40 text-black mb-5">Create new password</h2>
        <div className="position-relative">
          <FloatingLabel
            controlId="floatingPassword"
            label="New Password"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="name@example.com" />
          </FloatingLabel>
          <button className="pwdShow">Show</button>
        </div>
        <div className="position-relative">
          <FloatingLabel
            controlId="floatingPassword"
            label="Confirm Password"
            className="mb-4"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>

          <button className="pwdShow">Show</button>
        </div>

        <button className="btnPrimary w-100 mb-3">Change Password</button>
      </div>{" "}
    </>
  );
};

export default CreateNewPasswordForm;
