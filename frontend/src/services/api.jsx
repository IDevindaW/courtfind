import axios from "axios";

// Vite uses import.meta.env instead of process.env
const BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
if (!import.meta.env.VITE_API_BASE_URL) {
  console.warn(
    "VITE_API_BASE_URL not set — using fallback:",
    BASE
  );
}
const API_URL = `${BASE}/api`; // Base API URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach Token to Requests if Available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Retrieve token from local storage
  //console.log("Token:", token); // Debugging line
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  console.error("Request Error:", error);
  return Promise.reject(error);
});

// Response Error Handling
api.interceptors.response.use(
  (response) => response, // Return the response if no errors
  (error) => {
    console.error("API Error:", error.response || error.message); // Log errors
    return Promise.reject(error);
  }
);

export default api;
