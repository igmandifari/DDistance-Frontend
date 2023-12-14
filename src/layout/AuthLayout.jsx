import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Sidebar from "../components/Sidebar";
import { ServiceContext } from "../context/ServiceContext";
// import { authAction } from "../slices/authSlice";

const AuthLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authService } = useContext(ServiceContext);

  useEffect(() => {
    const token = authService.getTokenFromStorage();
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [authService, navigate]);
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
