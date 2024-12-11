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

// $api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.log("interceptor error", error.status);
//     if (error.status === 401) {
//       localStorage.removeItem("token");
//     }
//   }
// );

$api.interceptors.response.use(
  (response) => response, // Успешный ответ
  (error) => {
    if (error.response) {
      // Проверяем статус ошибки через error.response.status
      console.log("interceptor error", error.response.status);

      // Если ошибка 401, удаляем токен
      if (error.response.status === 401) {
        localStorage.removeItem("token");
      }

      // Пробрасываем ошибку дальше
      return Promise.reject(error);
    }

    // Если нет ответа от сервера (например, сетевая ошибка)
    console.error("Network error", error);
    return Promise.reject(error);
  }
);

export default $api;
