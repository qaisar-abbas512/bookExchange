import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/auth";

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
