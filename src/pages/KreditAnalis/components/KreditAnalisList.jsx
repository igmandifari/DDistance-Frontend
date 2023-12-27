import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";

import HeaderListUser from "../../../components/HeaderListUser";
import ButtonLogout from "../../../components/ButtonLogout";
import EmptyState from "../../../components/EmptyState";
import Loading from "../../../components/Loading";

import { useFetchKreditAnalis } from "../../../hooks/kreditAnalis/useFetchKreditAnalis";
import { useToogle } from "../../../context/ToogleContext";

const KreditAnalisList = () => {
  const { logout } = useToogle();
  const { data: kreditAnalis, isLoading } = useFetchKreditAnalis();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderListUser />
      <div className="bg-background mx-10 min-h-[85%]">
        <div className="flex justify-end absolute right-10">
          {logout && <ButtonLogout />}
        </div>

        <h1 className="text-primary text-3xl font-extrabold mx-10 py-5">
          Daftar Kredit Analis
        </h1>

        <Link
          to={"/dashboard/kreditanalis/new"}
          className="bg-primary text-white font-extrabold ml-10 px-3 py-1 w-56 flex items-center gap-3 mt-28 mb-5 cursor-pointer"
        >
          <FaPlus />
          <span>Tambah Kredit Analis</span>
        </Link>

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
              <th className="border-2 border-tableColor py-2 pl-3 text-left w-32">
                Action
              </th>
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
                  <td className="text-sm border-2 border-tableColor p-1 w-32">
                    <Link
                      to={`/dashboard/kreditanalis/${kredit.id}/edit`}
                      className="flex items-center gap-3 pl-2 cursor-pointer"
                    >
                      <BsPencilFill color="#F48300" />
                      <span className="text-sm font-semibold">Edit</span>
                    </Link>
                  </td>
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
