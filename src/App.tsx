import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/login/SignIn";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import SentEmailScreen from "./pages/resetPassword/SentEmailScreen";
import CreateNewPassword from "./pages/resetPassword/CreateNewPassword";
import SignUpScreen from "./pages/signUpScreen/SignUpScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/sent-email" element={<SentEmailScreen />} />
        <Route path="/create-newPassword" element={<CreateNewPassword />} />
        <Route path="/sign-up" element={<SignUpScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
