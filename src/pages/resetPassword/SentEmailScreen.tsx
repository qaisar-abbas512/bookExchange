import React from "react";
import SignInContent from "../../components/signInContent/SignInContent";
import SentEmail from "../../components/sentEmail/SentEmail";

const SentEmailScreen = () => {
  return (
    <>
      <div className="bgSignin d-flex align-items-lg-center justify-content-center ">
        <div className="signinWrapper d-flex align-items-center justify-content-between gap-5">
          <div>
            <SignInContent />
          </div>
          <SentEmail />
        </div>
      </div>
    </>
  );
};

export default SentEmailScreen;
