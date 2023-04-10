import Axios from "axios";

const axios = Axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
    headers: {
        Accept: "application/json"
    },
    withCredentials: true,
});

axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default axios;
