import { useState } from "react";
import PropTypes from "prop-types";

import Input from "./Input";
import accept from "../assets/images/accept.png";

import { useToogle } from "../context/ToogleContext";

const PopupAccept = ({
  onClick,
  title,
  pengajuan,
  merchant,
  onLimitChange,
}) => {
  const [limit, setLimit] = useState(0);
  const [isLimitValid, setIsLimitValid] = useState(false);

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
                const newLimit = e.target.value;
                setLimit(newLimit);
                onLimitChange(newLimit);
                setIsLimitValid(newLimit !== "" || newLimit <= 0);
              }}
              value={limit}
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-10 mt-5">
          <button
            className="bg-green-500 py-2 px-9 rounded-lg text-xl font-bold text-white"
            onClick={() => {
              if (isLimitValid) {
                onClick();
              } else {
                alert("Limit Tidak Boleh Kosong");
              }
            }}
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

PopupAccept.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  pengajuan: PropTypes.string.isRequired,
  merchant: PropTypes.string.isRequired,
  onLimitChange: PropTypes.func.isRequired,
};
