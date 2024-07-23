import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true, // Important to include cookies
});

export default api;