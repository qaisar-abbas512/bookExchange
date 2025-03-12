import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { forgotPassword } from "../../services/services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email?: string }>({});
  const navigate = useNavigate();
  const validateForm = () => {
    let formErrors: { email?: string } = {};

    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formErrors.email = "Invalid email format";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const data = await forgotPassword(email);
      toast.success(data.message);
      navigate("/sent-email");
    } catch (err: any) {
      toast.error("Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="signIn-form">
        <h2 className="heading40 text-black mb-5">Reset your password</h2>
        <Form onSubmit={handleResetPassword}>
          <FloatingLabel
            controlId="floatingEmail"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </FloatingLabel>

          <Button
            type="submit"
            className="btnPrimary w-100 mb-3"
            disabled={loading}
          >
            {loading ? "Sending Email..." : "Verify"}
          </Button>
        </Form>

        <hr className="divider" />
        <div className="dontHave">
          Need to Login?<button className="btnSignUp">Sign in</button>
        </div>
      </div>{" "}
    </>
  );
};

export default ResetPassword;
