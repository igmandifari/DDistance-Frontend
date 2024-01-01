import { Link } from "react-router-dom";

import Loading from "../../../components/Loading";
import EmptyState from "../../../components/EmptyState";
import ButtonLogout from "../../../components/ButtonLogout";
import HeaderListUser from "../../../components/HeaderListUser";

import { useToogle } from "../../../context/ToogleContext";
import { useFetchInvoice } from "../../../hooks/invoice/useFetchInvoice";

const InvoiceList = () => {
  const { logout } = useToogle();

  const { data: invoices, isLoading } = useFetchInvoice();

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
            {invoices?.map((inc, index) => {
              return (
                <tr key={index}>
                  <td className="text-sm border-2 border-tableColor px-3 py-2 w-16">
                    {++index}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-2 w-48">
                    {inc.namaToko}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-2 w-48">
                    {inc.namaDistributor}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-2 w-48">
                    <span className="mr-10">{inc.tanggalTagihan}</span>
                    <span>{inc.time}</span>
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-2 w-36">
                    {inc.status === "DALAM_PROSES" && "Pending"}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-2 w-40">
                    <Link
                      to={`/dashboard/invoice/${inc.id}`}
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
        {invoices && invoices.length === 0 && <EmptyState />}
      </div>
    </>
  );
};

export default InvoiceList;
