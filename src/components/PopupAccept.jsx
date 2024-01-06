import { useToogle } from "../context/ToogleContext";

import accept from "../assets/images/accept.png";
import { useState } from "react";
import Input from "./Input";

const PopupAccept = ({
  onClick,
  title,
  pengajuan,
  merchant,
  onLimitChange,
}) => {
  const [limit, setLimit] = useState("");

  const { handleShowNotif } = useToogle();

  return (
    <div className="absolute top-0 left-0 min-w-full min-h-full mainBg flex justify-center items-center z-20">
      <div className=" notifBg py-7 px-36 rounded-xl">
        <div className="flex justify-center flex-col items-center">
          <img src={accept} alt="acc" />
          <h1 className="text-3xl font-bold mt-2">{title}</h1>
        </div>
        <div className="mt-5">
          <p>Pengajuan : {pengajuan}</p>
          <p>Nama Merchant : {merchant}</p>
          <div className="flex flex-col items-center mt-5">
            <label htmlFor="limit" className="text-primary font-semibold">
              Limit Kredit
            </label>
            <Input
              styleError="w-[80%] py-2"
              type="number"
              name="limit"
              id="limit"
              onChange={(e) => {
                setLimit(e.target.value), onLimitChange(e.target.value);
              }}
              value={limit}
            ></Input>
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 mt-5">
          <button
            className="bg-green-500 py-2 px-9 rounded-lg text-xl font-bold text-white"
            onClick={onClick}
          >
            Ya
          </button>
          <button
            className="bg-red-500 py-2 px-5 rounded-lg text-xl font-bold text-white"
            onClick={handleShowNotif}
          >
            Tidak
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupAccept;
