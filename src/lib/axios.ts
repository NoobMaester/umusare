import axios from 'axios';

const api = axios.create({
  baseURL: 'https://randomuser.me/api', //API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;