import React from "react";
import { Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const SignInForm = () => {
  return (
    <>
      <div className="signIn-form">
        <h2 className="heading40 text-black mb-5">Sign in</h2>
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
            className="mb-4"
          >
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>

          <button className="pwdShow">Show</button>
        </div>
        <div className="d-flex justify-content-end mb-4">
          <button className="btnForget">Forgot Password?</button>
        </div>{" "}
        <button className="btnPrimary w-100 mb-3">Sign in</button>
        <div className="mb-3">
          {" "}
          <Form.Check
            inline
            label="Remember me?"
            name="group1"
            className="custom-checkbox"
          />
        </div>
        <hr className="divider" />
        <div className="dontHave">
          Don’t have an account?<button className="btnSignUp">Sign up</button>
        </div>
      </div>{" "}
    </>
  );
};

export default SignInForm;
