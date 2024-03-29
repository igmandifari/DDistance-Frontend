import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { TiChevronRight } from "react-icons/ti";

const CardUsers = ({ role, count, href }) => {
  return (
    <div className="secondaryColor p-1.5 w-[250px] h-[280px] rounded-2xl">
      <div className="bg-primary py-10 rounded-2xl"></div>
      <div className="p-3">
        <h2 className="text-white text-xl font-extrabold ">{role}</h2>
        <p className="text-white text-xs font-extrabold">
          {count} {role}
        </p>
      </div>
      <div className="flex justify-between items-center mt-9 px-3">
        <div className="flex">
          <div className="bg-bgSecondary rounded-full w-5 h-5"></div>
          <div className="bg-bgSecondary rounded-full w-5 h-5"></div>
          <div className="bg-bgSecondary rounded-full w-5 h-5"></div>
        </div>
        <Link
          to={`/dashboard/${href}`}
          className="bg-primary w-7 h-5 flex justify-center items-center rounded-md cursor-pointer"
        >
          <TiChevronRight color="white" />
        </Link>
      </div>
    </div>
  );
};

export default CardUsers;

CardUsers.propTypes = {
  role: PropTypes.string,
  href: PropTypes.string,
  count: PropTypes.any,
};
