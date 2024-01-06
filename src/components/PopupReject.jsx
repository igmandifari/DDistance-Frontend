import { useToogle } from "../context/ToogleContext";

import x from "../assets/images/x.png";
import { useState } from "react";

const PopupReject = ({
  onClick,
  title,
  pengajuan,
  merchant,
  onReasonChange,
}) => {
  const [reason, setReason] = useState("");

  const { handleDecline } = useToogle();

  return (
    <div className="absolute top-0 left-0 min-w-full min-h-full mainBg flex justify-center items-center z-20">
      <div className=" notifBg py-7 px-36 rounded-xl">
        <div className="flex justify-center flex-col items-center">
          <img src={x} alt="" />
          <h1 className="text-3xl font-bold mt-2">{title}</h1>
        </div>
        <div className="mt-5">
          <p>Pengajuan : {pengajuan}</p>
          <p>Nama Merchant : {merchant}</p>
          <div className="flex flex-col mt-5">
            <label htmlFor="description" className="text-primary font-semibold">
              Alasan Penolakan
            </label>
            <textarea
              name="description"
              id="description"
              rows="5"
              className="outline-none rounded-2xl p-3"
              onChange={(e) => {
                setReason(e.target.value), onReasonChange(e.target.value);
              }}
              value={reason}
            ></textarea>
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
            onClick={handleDecline}
          >
            Tidak
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupReject;
