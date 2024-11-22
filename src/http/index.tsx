import axios from "axios";

export const API_URL = "https://petlove.b.goit.study/api";

const $api = axios.create({
  //   withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

$api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log('interceptor error', error.status)
        if (error.status === 401) {
            localStorage.removeItem('token')
        }
    }
);

export default $api;
