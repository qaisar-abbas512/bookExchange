import React from "react";
import SignInContent from "../../components/signInContent/SignInContent";
import SentEmail from "../../components/sentEmail/SentEmail";

const SentApprovalEmail = () => {
  return (
    <>
      <div className="bgSignin d-flex align-items-lg-center justify-content-center ">
        <div className="signinWrapper d-flex align-items-center justify-content-between gap-5">
          <div>
            <SignInContent />
          </div>
          <SentEmail
            title="Sent for approval!"
            message="An email has been sent to admin for approval, once approved, you will receive an email so you will be able to login from there"
          />
        </div>
      </div>
    </>
  );
};

export default SentApprovalEmail;
