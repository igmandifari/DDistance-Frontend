import axios from "axios";

const axiosInstance = axios.create();

const removeToken = () => {
  sessionStorage.clear("token");
  sessionStorage.removeItem("role");
};

const redirectToLogin = () => {
  window.location.href = "/";
};

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      removeToken();
      redirectToLogin();
    }
  }
);

export default axiosInstance;
