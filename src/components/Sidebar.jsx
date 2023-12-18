import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiSolidDownArrow, BiSolidRightArrow } from "react-icons/bi";

import sidebarImage from "../assets/images/sidebarImage.png";

const Sidebar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="w-1/4">
      <div className="py-10 bg-primary min-h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl font-extrabold uppercase text-shadow">
            D-distance
          </h1>
          <div className="pr-9 mt-5">
            <img src={sidebarImage} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-10">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-white text-orange-500 py-1" : "text-white"
              }  font-extrabold text-xl text-left transition-all duration-300 hover:bg-white hover:text-primary  cursor-pointer hover:py-1 pl-24`
            }
            end
          >
            Dashboard
          </NavLink>
          <div>
            <div
              onClick={() => setDropdown(!dropdown)}
              className="flex items-center justify-between text-white font-extrabold text-xl transition-all cursor-pointer duration-300 hover:text-primary hover:bg-white hover:py-1"
            >
              <p className="pl-24">User</p>
              {dropdown ? (
                <BiSolidDownArrow size={18} className="mr-2" />
              ) : (
                <BiSolidRightArrow size={18} className="mr-2" />
              )}
            </div>
            {dropdown && (
              <ul className="flex flex-col gap-3 px-3 text-xs font-extrabold mt-1">
                <NavLink
                  to={"/dashboard/distributor"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-white text-orange-500 py-1" : "text-white"
                    } transition-all duration-300 pl-24 hover:bg-white hover:text-primary hover:py-1 my-1 cursor-pointer`
                  }
                >
                  Distributor
                </NavLink>
                <NavLink
                  to={"/dashboard/merchant"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-white text-orange-500 py-1" : "text-white"
                    }  transition-all duration-300 pl-24 hover:bg-white hover:text-primary hover:py-1 my-1 cursor-pointer`
                  }
                >
                  Merchant
                </NavLink>
                <NavLink
                  to={"/dashboard/kreditanalis"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-white text-orange-500 py-1" : "text-white"
                    } transition-all duration-300 pl-24 hover:bg-white hover:text-primary hover:py-1 my-1 cursor-pointer`
                  }
                >
                  Kredit Analis
                </NavLink>
                <NavLink
                  to={"/dashboard/admin"}
                  className={({ isActive }) =>
                    `${
                      isActive ? "bg-white text-orange-500 py-1" : "text-white"
                    } transition-all duration-300 pl-24 hover:bg-white hover:text-primary hover:py-1 my-1 cursor-pointer`
                  }
                >
                  Admin
                </NavLink>
              </ul>
            )}
          </div>
          <NavLink
            to={"/dashboard/jaminan"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-white text-orange-500 py-1" : "text-white"
              }  font-extrabold text-xl text-left transition-all duration-300 hover:bg-white hover:text-primary  cursor-pointer hover:py-1 pl-24`
            }
            end
          >
            Pengajuan Jaminan
          </NavLink>
          <NavLink
            to={"/dashboard/invoice"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-white text-orange-500 py-1" : "text-white"
              }  font-extrabold text-xl text-left transition-all duration-300 hover:bg-white hover:text-primary  cursor-pointer hover:py-1 pl-24`
            }
            end
          >
            Invoice
          </NavLink>
          <NavLink
            to={"/dashboard/akun"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-white text-orange-500 py-1" : "text-white"
              }  font-extrabold text-xl text-left transition-all duration-300 hover:bg-white hover:text-primary  cursor-pointer hover:py-1 pl-24`
            }
            end
          >
            Akun
          </NavLink>
          <NavLink
            to={"/dashboard/activitylog"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-white text-orange-500 py-1" : "text-white"
              }  font-extrabold text-xl text-left transition-all duration-300 hover:bg-white hover:text-primary  cursor-pointer hover:py-1 pl-24`
            }
            end
          >
            Activity Log
          </NavLink>

          <NavLink
            to={"/dashboard/pengaturanbunga"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-white text-orange-500 py-1" : "text-white"
              }  font-extrabold text-xl text-left transition-all duration-300 hover:bg-white hover:text-primary  cursor-pointer hover:py-1 pl-24`
            }
            end
          >
            Pengaturan Bunga
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
