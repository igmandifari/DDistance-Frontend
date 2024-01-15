import { useState } from "react";

import Loading from "../../components/Loading";
import ButtonLogout from "../../components/ButtonLogout";
import HeaderTitleUser from "../../components/HeaderTitleUser";
import NotificationUpdate from "../../components/NotificationUpdate";

import { useToogle } from "../../context/ToogleContext";
import { useFetchBunga } from "../../hooks/bunga/useFetchBunga";
import { useUpdateBunga } from "../../hooks/bunga/useUpdateBunga";

const Bunga = () => {
  const [interest, setInterest] = useState("");
  const [notif, setNotif] = useState(false);
  const { logout } = useToogle();

  const { data: bunga, refetch, isLoading } = useFetchBunga();
  const { mutate: updateBunga, isPending } = useUpdateBunga({
    onSuccess: () => {
      refetch();
    },
  });

  const handleNotif = () => {
    setNotif(!notif);
  };

  const handleUpdate = () => {
    if (interest === "") {
      handleNotif();
      alert("Bunga baru tidak boleh kosong");
    } else {
      const newInterest = {
        id: "ff8081818cebea43018cebea4b930000",
        value: interest,
      };
      updateBunga(newInterest);
      handleNotif();
      setInterest("");
    }
  };

  if (isLoading || isPending) {
    return <Loading />;
  }

  return (
    <>
      <HeaderTitleUser>Pengaturan Bunga</HeaderTitleUser>

      <div className="bg-background mt-8 mx-20 pb-5 w-[84%] min-h-[50%] rounded-2xl">
        <div className="flex justify-end absolute right-14 top-16">
          {logout && <ButtonLogout />}
        </div>
        <form action="" className="flex gap-20 mx-10 py-5">
          <div className="w-52">
            <label
              htmlFor="bungaLama"
              className="text-lg text-primary font-extrabold"
            >
              Bunga Lama
            </label>
            <div className="w-full mt-2">
              <input
                type="text"
                name="bungaLama"
                id="bungaLama"
                value={`${bunga?.value}%`}
                className="w-full text-sm py-2 px-3 rounded-xl outline-none bg-[#FFDB92]"
              />
            </div>
          </div>
          <div className="w-52">
            <label
              htmlFor="bungaBaru"
              className="text-lg text-primary font-extrabold"
            >
              Bunga Baru
            </label>
            <div className="w-full mt-2">
              <input
                type="text"
                name="bungaBaru"
                id="bungaBaru"
                onChange={(e) => setInterest(Number(e.target.value))}
                value={interest}
                // onChange={handleChange}
                className="w-full py-2 px-3 rounded-xl outline-none bg-[#FFDB92]"
              />
            </div>
          </div>
        </form>

        <div className="flex justify-end mt-48 px-10">
          <div className="flex gap-3">
            <button
              className="bg-[#F36C21] text-white font-bold py-2 px-12 rounded-lg"
              onClick={handleNotif}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
      {notif && (
        <NotificationUpdate
          title="Apakah Data Sudah Benar ?"
          onClick={handleUpdate}
          onDecline={handleNotif}
        />
      )}
    </>
  );
};

export default Bunga;
