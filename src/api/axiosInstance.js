import axios from "axios";

const axiosInstance = axios.create();

const removeToken = () => {
  sessionStorage.clear("token");
  sessionStorage.removeItem("role");
};

const MSG_LOGIN = "Bad credentials";
const EXP_TOKEN = "Full authentication is required to access this resource";

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
      if (error.response.data.message === MSG_LOGIN) {
        removeToken();
      }

      if (error.response.data.message === EXP_TOKEN) {
        removeToken();
        window.location.href = "/";
      }
    }
  }
);

export default axiosInstance;
