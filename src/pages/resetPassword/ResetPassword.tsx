import React from "react";
import SignInContent from "../../components/signInContent/SignInContent";
import ResetPasswordForm from "../../components/resetPsswordForm/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <>
      <div className="bgSignin d-flex align-items-lg-center justify-content-center ">
        <div className="signinWrapper d-flex align-items-center justify-content-between gap-5">
          <div>
            <SignInContent />
          </div>
          <ResetPasswordForm />
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
