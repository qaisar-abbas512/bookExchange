import React, { useState } from "react";
import { toast } from "react-toastify";

import { Col, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { signupUser } from "../../services/services";

const SignUpForm = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

    // Clear error on change
    setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
      setErrors((prevErrors) => ({ ...prevErrors, profileImage: "" }));
    }
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = "This field is required";
      }
    });

    if (!profileImage) {
      newErrors.profileImage = "Profile image is required";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

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
        <div className="position-relative text-center mb-4">
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

        <Form onSubmit={handleSubmit}>
          <div className="mb-3">
            <FloatingLabel label="First Name" className="mb-3">
              <Form.Control
                name="firstName"
                type="text"
                placeholder=""
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
                placeholder=""
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
                placeholder=""
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
                placeholder=""
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
                placeholder=""
                onChange={handleChange}
                isInvalid={!!errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </FloatingLabel>
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
          </div>
          <div className="mb-3">
            <FloatingLabel label="Email address" className="mb-3">
              <Form.Control
                name="email"
                type="email"
                placeholder="name@example.com"
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel label="Password" className="mb-3">
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </FloatingLabel>
            <FloatingLabel label="Confirm Password" className="mb-3">
              <Form.Control
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                isInvalid={!!errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </FloatingLabel>
          </div>

          <Button
            type="submit"
            className="btnPrimary w-100 mb-3"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create account"}
          </Button>
        </Form>
        <hr className="divider" />
        <div className="dontHave">
          Already have an account?<button className="btnSignUp">Log in</button>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
