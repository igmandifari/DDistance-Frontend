import ButtonLogout from "../../components/ButtonLogout";
import HeaderTitleUser from "../../components/HeaderTitleUser";
import { useToogle } from "../../context/ToogleContext";

const Bunga = () => {
  const { logout } = useToogle();
  return (
    <>
      <HeaderTitleUser>Pengaturan Bunga</HeaderTitleUser>

      <div className="bg-background mt-8 mx-20 pb-5 w-[84%] min-h-[50%] rounded-2xl">
        <div className="flex justify-end absolute right-14 top-16">
          {logout && <ButtonLogout />}
        </div>
        <form action="" className="flex gap-20 mx-10 py-5">
          <div className="w-52">
            <label htmlFor="" className="text-lg text-primary font-extrabold">
              Bunga Lama
            </label>
            <div className="w-full mt-2">
              <input
                type="text"
                name=""
                id=""
                className="w-full py-2 px-3 rounded-xl outline-none bg-[#FFDB92]"
              />
            </div>
          </div>
          <div className="w-52">
            <label htmlFor="" className="text-lg text-primary font-extrabold">
              Bunga Baru
            </label>
            <div className="w-full mt-2">
              <input
                type="text"
                name=""
                id=""
                className="w-full py-2 px-3 rounded-xl outline-none bg-[#FFDB92]"
              />
            </div>
          </div>
        </form>

        <div className="flex justify-end mt-48 px-10">
          <div className="flex gap-3">
            <button className="bg-[#F36C21] text-white font-bold py-2 px-12 rounded-lg">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bunga;
