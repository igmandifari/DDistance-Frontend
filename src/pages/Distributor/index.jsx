import { FaPlus } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";

import { useLogout } from "../../context/LogoutContext";
import ButtonLogout from "../../components/ButtonLogout";
import { distributors } from "./distributorDummy";
import HeaderListUser from "../../components/HeaderListUser";

const Distributor = () => {
  const { logout } = useLogout();
  return (
    <>
      <HeaderListUser />
      <div className="bg-background mx-10 min-h-[85%]">
        <div className="flex justify-end absolute right-10">
          {logout && <ButtonLogout />}
        </div>

        <h1 className="text-primary text-3xl font-extrabold mx-10 py-5">
          Daftar Distributor
        </h1>

        <div className="bg-primary text-white font-extrabold ml-10 px-3 py-1 w-56 flex items-center gap-3 mt-28 mb-5 cursor-pointer">
          <FaPlus />
          <span>Tambah Distributor</span>
        </div>

        <table className="table-fixed border border-slate-900 mx-2">
          <thead className="text-sm font-semibold tableBackground border border-slate-900">
            <tr>
              <th className="border-2 border-tableColor py-2 px-1 text-left">
                ID
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-left">
                Nama
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-left">
                Alamat
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-left">
                No. Telp
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-left">
                No. Rekening Danamon
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-left">
                Tipe User
              </th>
              <th className="border-2 border-tableColor py-2 px-2 text-left">
                Status
              </th>
              <th className="border-2 border-tableColor py-2 pl-3 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {distributors.map((distri, index) => {
              return (
                <tr key={index}>
                  <td className="text-sm border-2 border-tableColor p-1 w-16">
                    {++index}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 w-36">
                    {distri.nama}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 w-36">
                    {distri.alamat}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 w-36">
                    {distri.noTelp}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 w-44">
                    {distri.noRek}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 w-28">
                    {distri.tipe}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-2 w-36">
                    {distri.status}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 w-32">
                    <div className="flex items-center gap-3 pl-2 cursor-pointer">
                      <BsPencilFill color="#F48300" />
                      <span className="text-sm font-semibold">Edit</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Distributor;
