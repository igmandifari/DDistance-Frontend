import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import PopupNotification from "../components/PopupNotification";

import { useToogle } from "../context/ToogleContext";

const AuthLayout = () => {
  const navigate = useNavigate();
  const { showPopup, handleLogout } = useToogle();

  const token = sessionStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate, token]);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow">
        <Outlet />
        {showPopup && (
          <PopupNotification
            title="Apa Anda Yakin Ingin Keluar? "
            onClick={handleLogout}
          />
        )}
      </main>
    </div>
  );
};

export default AuthLayout;
