import { useLogout } from "../context/LogoutContext";

import profile from "../assets/images/profile.png";

const HeaderListUser = () => {
  const { handleToogleLogout } = useLogout();
  return (
    <div className="flex justify-end items-center mx-[100px] mt-5">
      <div
        className="flex items-center cursor-pointer"
        onClick={handleToogleLogout}
      >
        <span className="text-xl text-primary font-extrabold">Admin</span>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default HeaderListUser;
