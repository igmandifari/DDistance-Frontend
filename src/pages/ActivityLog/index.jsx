import ButtonLogout from "../../components/ButtonLogout";
import HeaderListUser from "../../components/HeaderListUser";
import Loading from "../../components/Loading";
import { useToogle } from "../../context/ToogleContext";
import { useFetchActivityLog } from "../../hooks/activityLog/useFetchActivityLog";

const ActivityLog = () => {
  const { logout } = useToogle();

  const { data: activities, isLoading } = useFetchActivityLog();

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
          Activity Log
        </h1>

        <table className="table-fixed border border-slate-900 mx-8 mt-10">
          <thead className="text-sm font-semibold test border border-slate-900">
            <tr>
              <th className="border-2 border-tableColor py-3 px-5 text-center">
                ID
              </th>
              <th className="border-2 border-tableColor py-3 px-2 text-center">
                ID User
              </th>
              <th className="border-2 border-tableColor py-3 px-2 text-center">
                Nama User
              </th>
              <th className="border-2 border-tableColor py-3 px-2 text-center">
                Tipe User
              </th>
              <th className="border-2 border-tableColor py-3 px-2 text-center">
                Tanggal Waktu
              </th>
              <th className="border-2 border-tableColor py-3 px-2 text-center">
                Activity
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {activities?.map((act, index) => {
              return (
                <tr key={index}>
                  <td className="text-sm border-2 border-tableColor px-3 py-5 w-16">
                    {++index}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-5 w-32">
                    {act.idUser}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-5 w-36">
                    {act.userName}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-5 w-32">
                    {act.erole === "ROLE_ADMIN" && "1"}
                    {act.erole === "ROLE_CREDIT_ANALYST" && "2"}
                    {act.erole === "ROLE_DISTRIBUTOR" && "3"}
                    {act.erole === "ROLE_MERCHANT" && "4"}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-5 w-36">
                    {act.dateTime.toLocaleString()}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-5 w-72">
                    {act.title}
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

export default ActivityLog;
