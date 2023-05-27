import axios from 'axios';

const api = axios.create({
  baseURL: '20.253.100.224', // Adjust the base URL according to your backend server configuration
  timeout: 5000, // Optional timeout value
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
