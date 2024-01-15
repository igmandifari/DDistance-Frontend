import { IoLogOut } from "react-icons/io5";
import { useToogle } from "../context/ToogleContext";

const ButtonLogout = () => {
  const { handleShowPopup } = useToogle();

  return (
    <>
      <div
        className="flex justify-center items-center gap-2 text-primary px-4 bg-[#FFDB92] mt-2 mr-7 rounded-md cursor-pointer"
        onClick={handleShowPopup}
      >
        <IoLogOut size={30} />
        <span className="text-md font-extrabold">Keluar</span>
      </div>
    </>
  );
};

export default ButtonLogout;
