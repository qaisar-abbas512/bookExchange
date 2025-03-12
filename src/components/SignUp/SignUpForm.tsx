import React, { useState } from "react";
import { toast } from "react-toastify";
import { Col, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { signupUser } from "../../services/services";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 2;
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const ProgressBar = ({ step }: { step: number }) => {
    const progress = (step / totalSteps) * 100;

    return (
      <div
        className="progress-container"
        style={{
          width: "100%",
          height: "8px",
          background: "#ddd",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <div
          className="progress-bar"
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "rgba(46, 90, 136, 1)",
            transition: "width 0.3s ease-in-out",
          }}
        ></div>
      </div>
    );
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    mobile: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
      setErrors((prevErrors) => ({ ...prevErrors, profileImage: "" }));
    }
  };

  const validateForm = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors: { [key: string]: string } = {};

    if (step === 1) {
      ["firstName", "lastName", "username", "mobile", "address"].forEach(
        (field) => {
          if (!(formData as any)[field]?.trim()) {
            newErrors[field] = "This field is required";
          }
        }
      );

      if (!profileImage) {
        newErrors.profileImage = "Profile image is required";
      }
    }

    if (step === 2) {
      ["email", "role", "password", "confirmPassword"].forEach((field) => {
        if (!(formData as any)[field]?.trim()) {
          newErrors[field] = "This field is required";
        }
      });

      if (formData.password?.length < 6) {
        newErrors.password = "Password must be at least 6 characters long";
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm(e)) return;

    setLoading(true);
    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formPayload.append(key, value);
    });
    if (profileImage) {
      formPayload.append("profileImage", profileImage);
    }

    try {
      const data = await signupUser(formPayload);
      toast.success(data.message);
    } catch (err: any) {
      setError(err);
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="signIn-form">
        <h2 className="heading40 text-black mb-5">Register yourself</h2>
        <div className="mb-4">
          <ProgressBar step={step} />
        </div>
        {/* Profile Image Upload */}
        {step === 1 && (
          <div className="position-relative text-center mb-4 ">
            <img
              className="profilePicture"
              src={
                profileImage
                  ? URL.createObjectURL(profileImage)
                  : "/images/user-icon.svg"
              }
              alt="profile"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="d-none"
              id="profileUpload"
            />
            <label htmlFor="profileUpload" className="profileEdit">
              <img src="/images/edit-Icon.svg" alt="edit" />
            </label>
            {errors.profileImage && (
              <div className="text-danger mt-2">{errors.profileImage}</div>
            )}
          </div>
        )}

        <Form onSubmit={handleSubmit}>
          {/* Step 1: Personal Details */}
          {step === 1 && (
            <div className="mb-3">
              <FloatingLabel label="First Name" className="mb-3">
                <Form.Control
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel label="Last Name" className="mb-3">
                <Form.Control
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  isInvalid={!!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel label="Username" className="mb-3">
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel label="Mobile No." className="mb-3">
                <Form.Control
                  name="mobile"
                  type="tel"
                  placeholder="Mobile No."
                  value={formData.mobile}
                  onChange={handleChange}
                  isInvalid={!!errors.mobile}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.mobile}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel label="Address" className="mb-3">
                <Form.Control
                  name="address"
                  type="text"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
              </FloatingLabel>
            </div>
          )}

          {/* Step 2: Contact & Password */}
          {step === 2 && (
            <div className="mb-3">
              <FloatingLabel label="Role" className="mb-3">
                <Form.Select
                  name="role"
                  onChange={handleChange}
                  value={formData.role}
                  isInvalid={!!errors.role}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.role}
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel label="Email address" className="mb-3">
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </FloatingLabel>
              <div className="position-relative">
                <FloatingLabel label="Password" className="mb-3">
                  <Form.Control
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
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
              <div className="position-relative">
                <FloatingLabel label="Confirm Password" className="mb-3">
                  <Form.Control
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
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
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-between">
            {step > 1 && (
              <Button variant="secondary" onClick={() => setStep(step - 1)}>
                Previous
              </Button>
            )}
            {step < 2 ? (
              <Button
                className="btnPrimary w-100 mb-3"
                onClick={(e) => validateForm(e) && setStep(step + 1)}
              >
                Next
              </Button>
            ) : (
              <Button className="btnPrimary" type="submit" disabled={loading}>
                {loading ? "Creating account..." : "Create account"}
              </Button>
            )}
          </div>
        </Form>
        <hr className="divider" />

        <div className="dontHave">
          Already have an account?
          <Link to="/sign-in" type="button" className="btnSignUp ms-1">
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
