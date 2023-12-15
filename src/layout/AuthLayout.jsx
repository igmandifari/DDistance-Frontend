import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import { ServiceContext } from "../context/ServiceContext";

const AuthLayout = () => {
  const navigate = useNavigate();
  const { authService } = useContext(ServiceContext);

  useEffect(() => {
    const token = authService.getTokenFromStorage();
    if (!token) {
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
