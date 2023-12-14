import { TiChevronRight } from "react-icons/ti";

import profile from "../../assets/images/profile.png";
import { cards, notifications } from "./dummyData";
import ButtonLogout from "../../components/ButtonLogout";
import { useLogout } from "../../context/LogoutContext";

const MainDashboard = () => {
  const { logout, handleToogleLogout } = useLogout();
  return (
    <>
      <div className="flex justify-between items-center mx-[100px] mt-5">
        <h1 className="text-2xl text-primary font-extrabold">Dashboard</h1>
        <div
          className="flex items-center cursor-pointer"
          onClick={handleToogleLogout}
        >
          <span className="text-xl text-primary font-extrabold">Admin</span>
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="bg-background mx-10 min-w-4/5 min-h-[85%] ">
        <div className="flex justify-end">{logout && <ButtonLogout />}</div>

        <div className="flex pb-2">
          <div className="flex flex-col w-3/4">
            <div className="flex justify-evenly mt-5">
              {cards.map((card) => {
                return (
                  <div
                    className="secondaryColor p-1.5 w-[250px] h-[280px] rounded-2xl"
                    key={card.id}
                  >
                    <div className="bg-primary py-10 rounded-2xl"></div>
                    <div className="p-3">
                      <h2 className="text-white text-lg font-extrabold ">
                        {card.name}
                      </h2>
                      <p className="text-white text-xs font-extrabold">
                        {card.count} {card.name}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-9 px-3">
                      <div className="flex">
                        <div className="bg-bgSecondary rounded-full w-5 h-5"></div>
                        <div className="bg-bgSecondary rounded-full w-5 h-5"></div>
                        <div className="bg-bgSecondary rounded-full w-5 h-5"></div>
                      </div>
                      <div className="bg-primary w-7 h-5 flex justify-center items-center rounded-md cursor-pointer">
                        <TiChevronRight color="white" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mx-10">
              <h2 className="text-2xl text-primary font-extrabold my-4">
                Notification
              </h2>

              <div className="flex flex-col gap-4 mt-5 ">
                {notifications.map((notif) => {
                  return (
                    <div
                      className="flex justify-between items-center bg-buttonColor px-5 py-3 rounded-xl"
                      key={notif.id}
                    >
                      <span className="text-sm font-semibold">
                        {notif.name}
                      </span>
                      <span className="text-sm time-color">{notif.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col w-1/4">
            <div className="secondaryColor p-1.5 w-[90%] h-[330px] rounded-2xl mt-5">
              <div className="bg-primary py-10 rounded-2xl"></div>
              <div className="p-3">
                <h2 className="text-white text-lg font-extrabold ">
                  Distributor
                </h2>
                <p className="text-white text-xs font-extrabold">
                  150 Merchant
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

            <div className="secondaryColor p-1.5 w-[90%] h-[330px] rounded-2xl mt-5">
              <div className="bg-primary py-10 rounded-2xl"></div>
              <div className="p-3">
                <h2 className="text-white text-lg font-extrabold ">
                  Distributor
                </h2>
                <p className="text-white text-xs font-extrabold">
                  150 Merchant
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
