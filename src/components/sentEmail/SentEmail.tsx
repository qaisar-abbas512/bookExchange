import React from "react";
import { Link } from "react-router-dom";
interface SentEmailProps {
  title: string;
  message: string;
}

const SentEmail: React.FC<SentEmailProps> = ({ title, message }) => {
  return (
    <div className="signIn-form">
      <h2 className="heading40 text-black mb-4">{title}</h2>
      <p className="emailContent">{message}</p>
      <hr className="divider" />
      <div className="dontHave">
        Need to Login?{" "}
        <Link to="/sign-in" className="btnSignUp">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SentEmail;
