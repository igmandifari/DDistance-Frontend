import { useParams } from "react-router-dom";

import Input from "../../../components/Input";
import ButtonLogout from "../../../components/ButtonLogout";
import HeaderListUser from "../../../components/HeaderListUser";
import PopupNotification from "../../../components/PopupNotification";

import { useToogle } from "../../../context/ToogleContext";
import { useFetchJaminanById } from "../../../hooks/jaminan/useFetchJaminanById";
import {
  useFetchAgunanData,
  useFetchKtpData,
  useFetchSiuData,
} from "../../../hooks/jaminan/useFetchDataJaminan";

const JaminanDetail = () => {
  const { logout, decline, handleDecline, showPopup, handleShowPopup } =
    useToogle();

  const { id } = useParams();

  const { data: getJaminanById } = id ? useFetchJaminanById(id) : {};

  const { data: ktpFile } = id ? useFetchKtpData(id) : {};
  const { data: siuFile } = id ? useFetchSiuData(id) : {};
  const { data: agunanFile } = id ? useFetchAgunanData(id) : {};

  const jaminanDetail = getJaminanById;

  return (
    <>
      <HeaderListUser />

      <div className="bg-background mx-10 h-[85vh] overflow-y-scroll">
        <div className="flex justify-end absolute right-10">
          {logout && <ButtonLogout />}
        </div>

        <h1 className="text-primary text-3xl font-extrabold mx-10 py-5 ">
          Detail Approval
        </h1>

        <div className="bg-bgSecondary ml-8 py-3 w-[60%] rounded-2xl mb-7">
          <div className="flex flex-col gap-2 w-[50%] mx-5 pb-6">
            <label htmlFor="nameStore" className="text-primary font-semibold">
              Nama Merchant
            </label>
            <div>
              <Input
                type="text"
                name="nameStore"
                id="nameStore"
                disabled
                styleError="bg-white"
                value={jaminanDetail?.nameStore}
              />
            </div>

            <label htmlFor="ktp" className="text-primary font-semibold">
              KTP
            </label>
            <img src={ktpFile} alt="" className="w-40 h-28" />

            <label htmlFor="siu" className="text-primary font-semibold">
              SIU
            </label>
            <img src={siuFile} alt="" className="w-40 h-28" />

            <label htmlFor="agunan" className="text-primary font-semibold">
              Agunan
            </label>
            <img src={agunanFile} alt="" className="w-40 h-28" />

            <p className="text-primary font-semibold">Current Status</p>
            <p>{jaminanDetail?.status === "DALAM_PROSES" && "Pending"}</p>

            {jaminanDetail?.status === "DALAM_PROSES" && (
              <div className="flex gap-4 mt-4">
                <button
                  disabled={decline}
                  className={`text-white font-bold px-8 py-1 rounded-lg ${
                    decline ? "bg-green-400 cursor-not-allowed" : "bg-green-600"
                  }`}
                  onClick={handleShowPopup}
                >
                  Accept
                </button>
                <button
                  className="bg-red-600 text-white font-bold px-8 py-1 rounded-lg"
                  onClick={handleDecline}
                >
                  Decline
                </button>
              </div>
            )}

            {decline && (
              <div className="mt-5">
                <label
                  htmlFor="description"
                  className="text-primary font-semibold"
                >
                  Alasan Penolakan
                </label>
                <textarea
                  name="description"
                  id="description"
                  cols="100"
                  rows="5"
                  className="outline-none rounded-2xl w-full p-3"
                ></textarea>
              </div>
            )}
          </div>
        </div>
      </div>
      {showPopup && <PopupNotification />}
    </>
  );
};

export default JaminanDetail;
