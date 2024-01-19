import axiosInstance from "../api/axiosInstance";

const AuthService = () => {
  const TOKEN_KEY = "token";

  const url = "http://43.218.88.7:8081/api/auth/login";
  console.log(url);

  const login = async (user) => {
    const { data } = await axiosInstance.post(url, user);
    return data;
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
  };

  const getTokenFromStorage = () => {
    return sessionStorage.getItem(TOKEN_KEY);
  };

  return {
    login,
    logout,
    getTokenFromStorage,
  };
};

export default AuthService;
