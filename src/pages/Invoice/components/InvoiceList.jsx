import { Link } from "react-router-dom";
import ButtonLogout from "../../../components/ButtonLogout";
import HeaderListUser from "../../../components/HeaderListUser";
import { useToogle } from "../../../context/ToogleContext";
import { invoices } from "../invoiceDummy";

const InvoiceList = () => {
  const { logout } = useToogle();
  return (
    <>
      <HeaderListUser />

      <div className="flex justify-end absolute right-10">
        {logout && <ButtonLogout />}
      </div>
      <div className="bg-background mx-10 min-h-[79%] mt-10">
        <h1 className="text-primary text-3xl font-extrabold mx-10 py-5">
          Daftar Pengajuan Invoice
        </h1>

        <table className="table-fixed border border-slate-900 mx-8 mt-10">
          <thead className="text-sm font-semibold test border border-slate-900">
            <tr>
              <th className="border-2 border-tableColor py-3 px-5 text-center">
                ID
              </th>
              <th className="border-2 border-tableColor py-3 px-2 text-center">
                Nama Merchant
              </th>
              <th className="border-2 border-tableColor py-3 px-2 text-center">
                Nama Distributor
              </th>
              <th className="border-2 border-tableColor py-3 px-2 text-center">
                Tanggal Waktu
              </th>
              <th className="border-2 border-tableColor py-3 px-2 text-center">
                Status
              </th>
              <th className="border-2 border-tableColor py-3 px-2 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {invoices.map((inc, index) => {
              return (
                <tr key={index}>
                  <td className="text-sm border-2 border-tableColor px-3 py-2 w-16">
                    {++index}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-2 w-48">
                    {inc.nama}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-2 w-48">
                    {inc.distributor}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-2 w-48">
                    <span className="mr-10">{inc.tanggal}</span>
                    <span>{inc.time}</span>
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-2 w-36">
                    {inc.status}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-2 w-40">
                    <Link
                      to={"/dashboard/invoice/detail"}
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
      </div>
    </>
  );
};

export default InvoiceList;
