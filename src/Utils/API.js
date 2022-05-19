import axios from 'axios';

const API = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api`,
});

API.interceptors.request.use(
  function (config) {
    let token = localStorage.getItem('token');
    config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default API;
