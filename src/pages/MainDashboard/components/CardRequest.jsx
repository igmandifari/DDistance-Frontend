import { TiChevronRight } from "react-icons/ti";

const CardRequest = ({ requestName, count }) => {
  return (
    <div className="secondaryColor p-1.5 w-[90%] h-[330px] rounded-2xl mt-5">
      <div className="bg-primary py-10 rounded-2xl"></div>
      <div className="p-3">
        <h2 className="text-white text-xl font-extrabold ">{requestName}</h2>
        <p className="text-white text-xs font-extrabold">
          {count} {requestName}
        </p>
      </div>
      <div className="flex justify-between items-center mt-[80px] px-3">
        <div className="flex">
          <div className="bg-bgSecondary rounded-full w-6 h-6"></div>
          <div className="bg-bgSecondary rounded-full w-6 h-6"></div>
          <div className="bg-bgSecondary rounded-full w-6 h-6"></div>
        </div>
        <div className="bg-primary w-7 h-6 flex justify-center items-center rounded-md cursor-pointer">
          <TiChevronRight size={25} color="white" />
        </div>
      </div>
    </div>
  );
};

export default CardRequest;
