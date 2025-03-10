import React from "react";
import SignInContent from "../../components/signInContent/SignInContent";
import SignInForm from "../../components/signInForm/SignInForm";

const SignIn = () => {
  return (
    <>
      <div className="bgSignin d-flex align-items-lg-center justify-content-center ">
        <div className="signinWrapper d-flex align-items-center justify-content-between gap-5">
          <div>
            <SignInContent />
          </div>
          <SignInForm />
        </div>
      </div>
    </>
  );
};

export default SignIn;
