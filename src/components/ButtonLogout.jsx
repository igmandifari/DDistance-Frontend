import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";

import { ServiceContext } from "../context/ServiceContext";
import { authAction } from "../slices/authSlice";

const ButtonLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authService } = useContext(ServiceContext);

  const handleLogout = () => {
    if (!confirm("are you sure?")) return;
    dispatch(
      authAction(() => {
        authService.logout();
        return null;
      })
    );
    navigate("/");
  };
  return (
    <div
      className="flex justify-center items-center gap-2 text-primary px-4 bg-[#FFDB92] mt-2 mr-7 rounded-md cursor-pointer"
      onClick={handleLogout}
    >
      <IoLogOut size={30} />
      <span className="text-md font-extrabold">Keluar</span>
    </div>
  );
};

export default ButtonLogout;
