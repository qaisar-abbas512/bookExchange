import React from "react";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/login/SignIn";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import SentEmailScreen from "./pages/resetPassword/SentEmailScreen";
import CreateNewPassword from "./pages/resetPassword/CreateNewPassword";
import SignUpScreen from "./pages/signUpScreen/SignUpScreen";
import SentApprovalEmail from "./pages/signUpScreen/SentApprovalEmail";
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";
import "./global.css";
import BookManagement from "./pages/bookManagement/BookManagement";
import WishlistBooks from "./pages/wishlist/WishlistBooks";
import Chat from "./pages/chatScreen/Chat";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-management" element={<BookManagement />} />
          <Route path="/wishlist" element={<WishlistBooks />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/sent-email" element={<SentEmailScreen />} />
          <Route path="/create-newPassword" element={<CreateNewPassword />} />
          <Route path="/sign-up" element={<SignUpScreen />} />
          <Route path="/approval-email" element={<SentApprovalEmail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
