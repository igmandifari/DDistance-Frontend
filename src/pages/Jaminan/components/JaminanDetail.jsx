import { useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../../components/Input";
import Loading from "../../../components/Loading";
import PopupSurvey from "../../../components/PopupSurvey";
import PopupAccept from "../../../components/PopupAccept";
import PopupReject from "../../../components/PopupReject";
import ButtonLogout from "../../../components/ButtonLogout";
import HeaderListUser from "../../../components/HeaderListUser";

import { useToogle } from "../../../context/ToogleContext";
import { useFetchJaminanById } from "../../../hooks/jaminan/useFetchJaminanById";
import {
  useFetchAgunanData,
  useFetchKtpData,
  useFetchSiuData,
} from "../../../hooks/jaminan/useFetchDataJaminan";
import { useUpdateJaminan } from "../../../hooks/jaminan/useUpdateJaminan";
import { formatIDRCurrency } from "../../../utils/utility";

const JaminanDetail = () => {
  const [reason, setReason] = useState("");
  const [limit, setLimit] = useState(0);

  const { logout, handleShowNotif, showNotif, showDecline, handleDecline } =
    useToogle();

  const { id } = useParams();

  const {
    data: getJaminanById,
    refetch,
    isLoading,
  } = id ? useFetchJaminanById(id) : {};

  const { data: ktpFile } = id ? useFetchKtpData(id) : {};
  const { data: siuFile } = id ? useFetchSiuData(id) : {};
  const { data: agunanFile } = id ? useFetchAgunanData(id) : {};

  const { mutate: updateJaminan, isPending } = useUpdateJaminan({
    onSuccess: () => {
      refetch();
    },
  });

  const jaminanDetail = getJaminanById;

  let index = 0;

  const handleSurvey = () => {
    const value = "ON_SURVEY";
    const newId = id;

    const valueUpdate = {
      id: newId,
      installemnt: value,
      rejection: "",
      limit,
    };

    updateJaminan(valueUpdate);

    refetch();
    handleShowNotif();
  };

  const handleReject = () => {
    const value = "DITOLAK";
    const newId = id;

    const valueUpdate = {
      id: newId,
      installemnt: value,
      rejection: reason,
      limit: 0,
    };

    updateJaminan(valueUpdate);

    refetch();
    handleDecline();
  };

  const handleAccept = () => {
    const value = "DITERIMA";
    const newId = id;

    const valueUpdate = {
      id: newId,
      installemnt: value,
      rejection: "",
      limit,
    };

    updateJaminan(valueUpdate);

    refetch();
    handleShowNotif();
  };

  if (isPending || isLoading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderListUser />

      <div className="bg-background mx-10 h-[90vh] overflow-y-scroll">
        <div className="flex justify-end absolute right-10">
          {logout && <ButtonLogout />}
        </div>

        <h1 className="text-primary text-3xl font-extrabold mx-10 py-5 ">
          Detail Approval Pengajuan Jaminan
        </h1>

        <div className="bg-bgSecondary ml-8 py-3 w-[60%] h-full rounded-2xl mb-7">
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

            {jaminanDetail?.limit > 0 && (
              <>
                <label htmlFor="limit" className="text-primary font-semibold">
                  Limit Kredit
                </label>
                <div>
                  <Input
                    type="text"
                    name="limit"
                    id="limit"
                    disabled
                    styleError="bg-white"
                    value={formatIDRCurrency(jaminanDetail?.limit)}
                  />
                </div>
              </>
            )}

            <p className="text-primary font-semibold">
              {jaminanDetail?.status === "DITERIMA" ||
              jaminanDetail?.status === "DITOLAK"
                ? "Final Status"
                : "Current Status"}
            </p>
            <p
              className={`font-semibold ${
                jaminanDetail?.status === "DITERIMA" && "text-green-500"
              } ${jaminanDetail?.status === "DITOLAK" && "text-red-500"}`}
            >
              {jaminanDetail?.status === "DALAM_PROSES" && "Pending"}
              {jaminanDetail?.status === "ON_SURVEY" && "On Survey"}
              {jaminanDetail?.status === "DITERIMA" && "Accepted"}
              {jaminanDetail?.status === "DITOLAK" && "Declined"}
            </p>

            {(jaminanDetail?.status === "DALAM_PROSES" ||
              jaminanDetail?.status === "ON_SURVEY") && (
              <div className="flex gap-4 mt-4">
                <button
                  className="text-white font-bold px-8 py-1 rounded-lg bg-green-600"
                  onClick={handleShowNotif}
                >
                  {jaminanDetail?.status === "DALAM_PROSES" && "Survey"}
                  {jaminanDetail?.status === "ON_SURVEY" && "Accept"}
                </button>
                <button
                  className="bg-red-600 text-white font-bold px-8 py-1 rounded-lg"
                  onClick={handleDecline}
                >
                  Decline
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {showNotif && jaminanDetail?.status === "DALAM_PROSES" && (
        <PopupSurvey
          title="Apakah yakin untuk MENYURVEI ?"
          subTitle="Pastikan data sudah sesuai"
          pengajuan={`Pengajuan #${++index}`}
          merchant={jaminanDetail?.nameStore}
          onClick={handleSurvey}
        />
      )}
      {showNotif && jaminanDetail?.status === "ON_SURVEY" && (
        <PopupAccept
          title="Apakah yakin untuk MENYETUJUI ?"
          pengajuan={`Pengajuan #${++index}`}
          merchant={jaminanDetail?.nameStore}
          onClick={handleAccept}
          onLimitChange={(limit) => setLimit(limit)}
        />
      )}
      {showDecline && (
        <PopupReject
          title="Apakah yakin untuk MENOLAK ?"
          pengajuan={`Pengajuan #${++index}`}
          merchant={jaminanDetail?.nameStore}
          onReasonChange={(reason) => setReason(reason)}
          onClick={handleReject}
        />
      )}
    </>
  );
};

export default JaminanDetail;
