import React from "react";

const SentEmail = () => {
  return (
    <>
      <div className="signIn-form">
        <h2 className="heading40 text-black mb-4">Email Sent!</h2>

        <p className="emailContent">
          An email to reset password was sent to your given email ID. Verify
          your email address to reset the password
        </p>

        <hr className="divider" />
        <div className="dontHave">
          Need to Login?<button className="btnSignUp">Sign in</button>
        </div>
      </div>{" "}
    </>
  );
};

export default SentEmail;
