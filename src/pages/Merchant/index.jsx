import { BsPencilFill } from "react-icons/bs";

import ButtonLogout from "../../components/ButtonLogout";
import HeaderListUser from "../../components/HeaderListUser";
import { useToogle } from "../../context/ToogleContext";
import { merchants } from "./merchantsDummy";

const Merchant = () => {
  const { logout } = useToogle();
  return (
    <>
      <HeaderListUser />

      <div className="bg-background mx-10 min-h-[85%]">
        <div className="flex justify-end absolute right-10">
          {logout && <ButtonLogout />}
        </div>

        <h1 className="text-primary text-3xl font-extrabold mx-10 py-5 mb-40">
          Daftar Merchant
        </h1>

        <table className="table-fixed border border-slate-900 mx-4">
          <thead className="text-sm font-semibold tableBackground border border-slate-900">
            <tr>
              <th className="border-2 border-tableColor py-2 px-1 text-center">
                ID
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-center">
                Nama
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-center">
                Alamat
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-center">
                No. Telp
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-center">
                Tipe User
              </th>
              <th className="border-2 border-tableColor py-2 px-2 text-center">
                Status
              </th>
              <th className="border-2 border-tableColor py-2 pl-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {merchants.map((merchant, index) => {
              return (
                <tr key={index}>
                  <td className="text-sm border-2 border-tableColor p-1 px-3 w-16">
                    {++index}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 w-36">
                    {merchant.nama}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 w-36">
                    {merchant.alamat}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 w-36">
                    {merchant.noTelp}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 px-3 w-28">
                    {merchant.tipe}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-2 w-36">
                    {merchant.status}
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

export default Merchant;
