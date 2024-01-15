import PropTypes from "prop-types";
import x from "../assets/images/x.png";

const ActionFailed = ({ title, subtitle, onClick }) => {
  return (
    <div className="absolute top-0 left-0 min-w-full min-h-full mainBg flex justify-center items-center z-20">
      <div className=" notifBg flex justify-center items-center flex-col py-7 px-36 rounded-xl">
        <img src={x} alt="" />
        <h1 className="text-3xl font-bold mt-2">{title}</h1>
        <p>{subtitle}</p>
        <div className="flex gap-10 mt-3">
          <button
            className="bg-green-500 py-2 px-5 rounded-lg text-xl font-bold text-white"
            onClick={onClick}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionFailed;

ActionFailed.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onClick: PropTypes.func,
};
