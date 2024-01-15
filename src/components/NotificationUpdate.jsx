import PropTypes from "prop-types";

import Notif from "../assets/images/notif.png";

const NotificationUpdate = ({ title, subTitle, onClick, onDecline }) => {
  return (
    <div className="absolute top-0 left-0 min-w-full min-h-full mainBg flex justify-center items-center z-20">
      <div className=" notifBg flex justify-center items-center flex-col py-7 px-36 rounded-xl">
        <img src={Notif} alt="" />
        <h1 className="text-3xl font-bold mt-2">{title}</h1>
        <p className="text-2xl">{subTitle}</p>
        <div className="flex gap-10 mt-3">
          <button
            type="submit"
            className="bg-green-500 py-2 px-9 rounded-lg text-xl font-bold text-white"
            onClick={onClick}
          >
            Ya
          </button>
          <button
            className="bg-red-500 py-2 px-5 rounded-lg text-xl font-bold text-white"
            onClick={onDecline}
          >
            Tidak
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationUpdate;

NotificationUpdate.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
};
