import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL2}`,
});

const API2 = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL2}`,
});

API.interceptors.request.use(
  function (config) {
    let token = localStorage.getItem("token");
    config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

API2.interceptors.request.use(
  function (config) {
    let token = localStorage.getItem("token");
    config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export { API, API2 };
