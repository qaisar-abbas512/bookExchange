import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/auth";
const API_BASE_URL2 = "https://fakerestapi.azurewebsites.net/api/v1";

// Login API
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      email,
      password,
    });
    return response.data; // Returns the token and other user info
  } catch (error) {
    throw error.response?.data?.message || "Login failed. Try again.";
  }
};

export const dummyApi = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL2}/Activities`);
    return response.data; // Returns the token and other user info
  } catch (error) {
    throw error.response?.data?.message || "Login failed. Try again.";
  }
};

// Signup API
export const signupUser = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    console.log(error);

    throw error.response?.data?.message || "Signup failed. Try again.";
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/forgot-password`, {
      email,
    });
    return response.data; // Returns the token and other user info
  } catch (error) {
    throw error.response?.data?.message || "Forgot Password failed. Try again.";
  }
};

export const resetPassword = async (newPassword, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/reset-password`, {
      newPassword,
      token,
    });
    return response.data; // Returns the token and other user info
  } catch (error) {
    throw error.response?.data?.message || "Reset Password failed. Try again.";
  }
};
