import { useToogle } from "../context/ToogleContext";

import profileImg from "../assets/images/profile.png";
import {
  useFetchProfileAdmin,
  useFetchProfileKreditAnalis,
} from "../hooks/akun/useFetchProfile";

const HeaderListUser = () => {
  const { handleToogleLogout } = useToogle();

  const role = sessionStorage.getItem("role");

  const { data: profile } =
    role === "ROLE_ADMIN"
      ? useFetchProfileAdmin()
      : useFetchProfileKreditAnalis();

  return (
    <div className="flex justify-end items-center mx-[100px] mt-5">
      <div
        className="flex items-center cursor-pointer"
        onClick={handleToogleLogout}
      >
        <span className="text-xl text-primary font-extrabold">
          {role === "ROLE_ADMIN" && `Admin - ${profile?.name}`}
          {role === "ROLE_CREDIT_ANALYST" && `Kredit Analis - ${profile?.name}`}
        </span>
        <img src={profileImg} alt="" />
      </div>
    </div>
  );
};

export default HeaderListUser;
