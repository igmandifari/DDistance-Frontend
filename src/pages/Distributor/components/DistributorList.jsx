import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";

import Loading from "../../../components/Loading";
import EmptyState from "../../../components/EmptyState";
import ButtonLogout from "../../../components/ButtonLogout";
import HeaderListUser from "../../../components/HeaderListUser";

import { useFetchDistributors } from "../../../hooks/distributor/useFetchDistributors";
import { useToogle } from "../../../context/ToogleContext";

const DistributorList = () => {
  const { logout } = useToogle();

  const userRole = sessionStorage.getItem("role");

  const { data: distributors, isLoading } = useFetchDistributors();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderListUser />
      <div className="bg-background mx-10 h-[90vh] overflow-y-scroll pb-10">
        <div className="flex justify-end absolute right-10">
          {logout && <ButtonLogout />}
        </div>

        <h1 className="text-primary text-3xl font-extrabold mx-10 py-5">
          Daftar Distributor
        </h1>
        {userRole === "ROLE_ADMIN" && (
          <Link
            to={"/dashboard/distributor/new"}
            className="bg-primary text-white font-extrabold ml-10 px-3 py-1 w-56 flex items-center gap-3 mt-16 mb-5 cursor-pointer"
          >
            <FaPlus />
            <span>Tambah Distributor</span>
          </Link>
        )}

        <table className="table-fixed mx-2">
          <thead className="text-sm font-semibold tableBackground">
            <tr>
              <th className="border-2 border-tableColor py-2 px-1 text-left w-16">
                ID
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-left w-36">
                Nama
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-left w-36">
                Alamat
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-left w-36">
                No. Telp
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-left w-44">
                No. Rekening Danamon
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-left w-28">
                Tipe User
              </th>
              <th className="border-2 border-tableColor py-2 px-2 text-left w-36">
                Status
              </th>
              {userRole === "ROLE_ADMIN" && (
                <th className="border-2 border-tableColor py-2 pl-3 text-left w-32">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white">
            {distributors?.map((distri, index) => {
              return (
                <tr key={index}>
                  <td className="text-sm border-2 border-tableColor p-1 w-16">
                    {++index}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 w-36">
                    {distri.name}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 w-36">
                    {distri.address}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 w-36">
                    {distri.phoneNumber}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 w-44">
                    {distri.pan}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 w-28">
                    3
                  </td>
                  <td className="text-sm border-2 border-tableColor p-2 w-36">
                    {distri.enabled ? "Aktif" : "Non Aktif"}
                  </td>
                  {userRole === "ROLE_ADMIN" && (
                    <td className="text-sm border-2 border-tableColor p-1 w-32">
                      <Link
                        to={`/dashboard/distributor/${distri.id}/edit`}
                        className="flex items-center gap-3 pl-2 cursor-pointer"
                      >
                        <BsPencilFill color="#F48300" />
                        <span className="text-sm font-semibold">Edit</span>
                      </Link>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
        {distributors && distributors.length === 0 && (
          <EmptyState emptyStyle="w-[80%]" />
        )}
      </div>
    </>
  );
};

export default DistributorList;
