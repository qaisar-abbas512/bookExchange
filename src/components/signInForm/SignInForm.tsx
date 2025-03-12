import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { loginUser } from "../../services/services";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validateForm = () => {
    let formErrors: { email?: string; password?: string } = {};

    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formErrors.email = "Invalid email format";
    }

    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const data = await loginUser(email, password);
      toast.success(data.message);
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err: any) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signIn-form">
      <h2 className="heading40 text-black mb-5">Sign in</h2>
      <Form onSubmit={handleLogin}>
        <FloatingLabel
          controlId="floatingInput"
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
        <div className="position-relative">
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-4"
          >
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </FloatingLabel>
          <button
            type="button"
            className="pwdShow"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* {error && <p className="text-danger">{error}</p>} */}

        <div className="d-flex justify-content-end mb-4">
          <Link to="/reset-password" type="button" className="btnForget">
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          className="btnPrimary w-100 mb-3"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign in"}
        </Button>

        <div className="mb-3">
          <Form.Check
            inline
            label="Remember me?"
            name="group1"
            className="custom-checkbox"
          />
        </div>

        <hr className="divider" />

        <div className="dontHave">
          Don’t have an account?
          <Link to="/sign-up" type="button" className="btnSignUp ms-1">
            Sign up
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default SignInForm;
