import { useToogle } from "../context/ToogleContext";

import profile from "../assets/images/profile.png";

const HeaderTitleUser = ({ children }) => {
  const { handleToogleLogout } = useToogle();

  const role = sessionStorage.getItem("role");

  return (
    <div className="flex justify-between items-center mx-[100px] mt-5">
      <h1 className="text-2xl text-primary font-extrabold">{children}</h1>

      <div
        className="flex items-center cursor-pointer"
        onClick={handleToogleLogout}
      >
        <span className="text-xl text-primary font-extrabold">
          {role === "ROLE_ADMIN" && "Admin"}
          {role === "ROLE_CREDIT_ANALYST" && "Kredit Analis"}
        </span>
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default HeaderTitleUser;
