import survey from "../assets/images/survey.png";
import { useToogle } from "../context/ToogleContext";

const PopupSurvey = ({ onClick, title, subTitle, pengajuan, merchant }) => {
  const { handleShowNotif } = useToogle();

  return (
    <div className="absolute top-0 left-0 min-w-full min-h-full mainBg flex justify-center items-center z-20">
      <div className=" notifBg py-7 px-36 rounded-xl">
        <div className="flex justify-center flex-col items-center">
          <img src={survey} alt="" />
          <h1 className="text-3xl font-bold mt-2">{title}</h1>
          <p className="text-2xl">{subTitle}</p>
        </div>
        <div className="mt-5">
          <p>Pengajuan : {pengajuan}</p>
          <p>Nama Merchant : {merchant}</p>
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

export default PopupSurvey;
