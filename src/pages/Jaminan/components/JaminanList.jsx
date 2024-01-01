import { Link } from "react-router-dom";

import Loading from "../../../components/Loading";
import EmptyState from "../../../components/EmptyState";
import ButtonLogout from "../../../components/ButtonLogout";
import HeaderListUser from "../../../components/HeaderListUser";

import { useToogle } from "../../../context/ToogleContext";
import { useFetchJaminan } from "../../../hooks/jaminan/useFetchJaminan";

const JaminanList = () => {
  const { logout } = useToogle();

  const { data: jaminan, isLoading } = useFetchJaminan();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderListUser />

      <div className="flex justify-end absolute right-10">
        {logout && <ButtonLogout />}
      </div>
      <div className="bg-background mx-10 min-h-[79%] mt-10">
        <h1 className="text-primary text-3xl font-extrabold mx-10 py-5">
          Daftar Pengajuan Jaminan
        </h1>

        <table className="table-fixed border mx-8 mt-10">
          <thead className="text-sm font-semibold tableBackground">
            <tr>
              <th className="border-2 border-tableColor py-3 px-5 text-center w-16">
                ID
              </th>
              <th className="border-2 border-tableColor py-3 px-2 text-center w-44">
                Nama Merchant
              </th>

              <th className="border-2 border-tableColor py-3 px-2 text-center w-44">
                Tanggal Waktu
              </th>
              <th className="border-2 border-tableColor py-3 px-2 text-center w-32">
                Status
              </th>
              <th className="border-2 border-tableColor py-3 px-2 text-center w-32">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {jaminan?.map((inc, index) => {
              return (
                <tr key={index}>
                  <td className="text-sm border-2 border-tableColor px-3 py-2 w-16">
                    {++index}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-2 w-48">
                    {inc.nameStore}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-2 w-48">
                    {inc.date}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-2 w-36">
                    {inc.status === "DALAM_PROSES" && "Pending"}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-2 w-40">
                    <Link
                      to={`/dashboard/jaminan/${inc.id}`}
                      className="text-primary font-bold"
                    >
                      Detail
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {jaminan && jaminan.length === 0 && <EmptyState />}
      </div>
    </>
  );
};

export default JaminanList;
