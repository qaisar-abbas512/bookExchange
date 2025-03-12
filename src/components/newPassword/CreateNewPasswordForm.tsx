import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../../services/services";
import { toast } from "react-toastify";

const CreateNewPasswordForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const Token = location.search.substring(1);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let formErrors = { newPassword: "", confirmPassword: "" };

    if (!newPassword) {
      formErrors.newPassword = "New password is required";
    } else if (newPassword.length < 6) {
      formErrors.newPassword = "Password must be at least 6 characters long";
    }

    if (!confirmPassword) {
      formErrors.confirmPassword = "Confirm password is required";
    } else if (confirmPassword !== newPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(formErrors);
    return Object.values(formErrors).every((error) => error === "");
  };

  const handleChangePassword = async () => {
    if (!validateForm()) return;
    setLoading(true);

    try {
      const response = await resetPassword(newPassword, Token);
      toast.success(response.message);
      navigate("/sign-in");
    } catch (error) {
      toast.error("Failed to Change password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="signIn-form">
        <h2 className="heading40 text-black mb-5">Create new password</h2>
        <div className="position-relative">
          <FloatingLabel
            controlId="floatingNewPassword"
            label="New Password"
            className="mb-3"
          >
            <Form.Control
              type={showNewPassword ? "text" : "password"}
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              isInvalid={!!errors.newPassword}
            />
            <Form.Control.Feedback type="invalid">
              {errors.newPassword}
            </Form.Control.Feedback>
          </FloatingLabel>
          <button
            type="button"
            className="pwdShow"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            {showNewPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="position-relative">
          <FloatingLabel
            controlId="floatingConfirmPassword"
            label="Confirm Password"
            className="mb-4"
          >
            <Form.Control
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              isInvalid={!!errors.confirmPassword}
            />
            <Form.Control.Feedback type="invalid">
              {errors.confirmPassword}
            </Form.Control.Feedback>
          </FloatingLabel>
          <button
            type="button"
            className="pwdShow"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button
          className="btnPrimary w-100 mb-3"
          onClick={handleChangePassword}
          disabled={loading}
        >
          {loading ? "Changing Password..." : "Change Password"}
        </button>
      </div>
    </>
  );
};

export default CreateNewPasswordForm;
