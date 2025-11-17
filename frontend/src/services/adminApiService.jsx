import axios from 'axios';

const BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
if (!import.meta.env.VITE_API_BASE_URL) {
  console.warn(
    "VITE_API_BASE_URL not set — using fallback:",
    BASE
  );
}
const apiClient = axios.create({
  baseURL: `${BASE}/api`
});

// Request interceptor to add auth token to every request
apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default apiClient;