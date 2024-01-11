import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";

import Loading from "../../../components/Loading";
import EmptyState from "../../../components/EmptyState";
import ButtonLogout from "../../../components/ButtonLogout";
import HeaderListUser from "../../../components/HeaderListUser";

import { useToogle } from "../../../context/ToogleContext";
import { useFetchKreditAnalis } from "../../../hooks/kreditAnalis/useFetchKreditAnalis";

const KreditAnalisList = () => {
  const { logout } = useToogle();

  const userRole = sessionStorage.getItem("role");

  const { data: kreditAnalis, isLoading } = useFetchKreditAnalis();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderListUser />
      <div className="bg-background mx-10 h-[90vh] overflow-y-scroll">
        <div className="flex justify-end absolute right-10">
          {logout && <ButtonLogout />}
        </div>

        <h1 className="text-primary text-3xl font-extrabold mx-10 py-5">
          Daftar Kredit Analis
        </h1>

        {userRole === "ROLE_ADMIN" && (
          <Link
            to={"/dashboard/kredit-analis/new"}
            className="bg-primary text-white font-extrabold ml-10 px-3 py-1 w-56 flex items-center gap-3 mt-20 mb-5 cursor-pointer"
          >
            <FaPlus />
            <span>Tambah Kredit Analis</span>
          </Link>
        )}

        <table className="table-fixed mx-9">
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
            {kreditAnalis?.map((kredit, index) => {
              return (
                <tr key={index}>
                  <td className="text-sm border-2 border-tableColor p-1 w-16">
                    {++index}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 w-36">
                    {kredit.name}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 w-36">
                    {kredit.address}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 w-36">
                    {kredit.phoneNumber}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 w-28">
                    {kredit.role && "2"}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-2 w-36">
                    {kredit.enabled ? "Aktif" : "Non Aktif"}
                  </td>
                  {userRole === "ROLE_ADMIN" && (
                    <td className="text-sm border-2 border-tableColor p-1 w-32">
                      <Link
                        to={`/dashboard/kreditanalis/${kredit.id}/edit`}
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
        {kreditAnalis && kreditAnalis.length === 0 && (
          <EmptyState emptyStyle="w-[82%]" />
        )}
      </div>
    </>
  );
};

export default KreditAnalisList;
