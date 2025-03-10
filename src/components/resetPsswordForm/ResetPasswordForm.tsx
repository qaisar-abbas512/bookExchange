import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const ResetPasswordForm = () => {
  return (
    <>
      <div className="signIn-form">
        <h2 className="heading40 text-black mb-5">Reset your password</h2>
        <div className="position-relative">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </div>

        <button className="btnPrimary w-100 mb-3">Verify</button>

        <hr className="divider" />
        <div className="dontHave">
          Need to Login?<button className="btnSignUp">Sign in</button>
        </div>
      </div>{" "}
    </>
  );
};

export default ResetPasswordForm;
