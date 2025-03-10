import React from "react";
import SignInContent from "../../components/signInContent/SignInContent";
import CreateNewPasswordForm from "../../components/newPassword/CreateNewPasswordForm";

const CreateNewPassword = () => {
  return (
    <>
      <div className="bgSignin d-flex align-items-lg-center justify-content-center ">
        <div className="signinWrapper d-flex align-items-center justify-content-between gap-5">
          <div>
            <SignInContent />
          </div>
          <CreateNewPasswordForm />
        </div>
      </div>
    </>
  );
};

export default CreateNewPassword;
