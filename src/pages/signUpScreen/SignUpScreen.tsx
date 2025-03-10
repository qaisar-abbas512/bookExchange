import React from "react";
import SignInContent from "../../components/signInContent/SignInContent";
import SignUpForm from "../../components/SignUp/SignUpForm";

const SignUpScreen = () => {
  return (
    <>
      <div className="bgSignin d-flex align-items-lg-center justify-content-center ">
        <div className="signinWrapper d-flex align-items-center justify-content-between gap-5">
          <div>
            <SignInContent />
          </div>
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default SignUpScreen;
