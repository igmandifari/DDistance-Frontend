import { Link } from "react-router-dom";
import { BsPencilFill } from "react-icons/bs";

import ButtonLogout from "../../../components/ButtonLogout";
import HeaderListUser from "../../../components/HeaderListUser";
import Loading from "../../../components/Loading";
import EmptyState from "../../../components/EmptyState";

import { useToogle } from "../../../context/ToogleContext";
import { useFetchMerchants } from "../../../hooks/merchant/useFetchMerchant";

const MerchantList = () => {
  const { logout } = useToogle();

  const userRole = sessionStorage.getItem("role");

  const { data: merchants, isLoading } = useFetchMerchants();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <HeaderListUser />

      <div className="bg-background mx-10 h-[88vh] overflow-y-scroll">
        <div className="flex justify-end absolute right-10">
          {logout && <ButtonLogout />}
        </div>

        <h1 className="text-primary text-3xl font-extrabold mx-10 py-5 mb-20">
          Daftar Merchant
        </h1>

        <table className="table-fixed mx-4">
          <thead className="text-sm font-semibold tableBackground ">
            <tr>
              <th className="border-2 border-tableColor py-2 px-1 text-center w-16">
                ID
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-center w-36">
                Nama
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-center w-36">
                Alamat
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-center w-36">
                No. Telp
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-center w-44">
                Email
              </th>
              <th className="border-2 border-tableColor py-2 px-1 text-center w-44">
                No Rekening
              </th>
              <th className="border-2 border-tableColor py-2 px-2 text-center w-28">
                Status
              </th>
              {userRole === "ROLE_ADMIN" && (
                <th className="border-2 border-tableColor py-2 pl-3 text-center w-32">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white">
            {merchants?.map((merchant, index) => {
              return (
                <tr key={index}>
                  <td className="text-sm border-2 border-tableColor p-1 px-3">
                    {++index}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1">
                    {merchant.name}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1">
                    {merchant.address}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 px-2">
                    {merchant.phoneNumber}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 px-3">
                    {merchant.email}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-1 px-3">
                    {merchant.pan}
                  </td>
                  <td className="text-sm border-2 border-tableColor p-2">
                    {merchant.enabled ? "Aktif" : "Non Aktif"}
                  </td>
                  {userRole === "ROLE_ADMIN" && (
                    <td className="text-sm border-2 border-tableColor p-1">
                      <Link
                        to={`/dashboard/merchant/${merchant.id}/edit`}
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
        {merchants && merchants.length === 0 && (
          <EmptyState emptyStyle="w-[82%]" />
        )}
      </div>
    </>
  );
};

export default MerchantList;
