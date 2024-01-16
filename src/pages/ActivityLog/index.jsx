import ButtonLogout from "../../components/ButtonLogout";
import HeaderListUser from "../../components/HeaderListUser";
import { useToogle } from "../../context/ToogleContext";
import { activities } from "./activityDummy";

const ActivityLog = () => {
  const { logout } = useToogle();

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
            {activities.map((act, index) => {
              return (
                <tr key={index}>
                  <td className="text-sm border-2 border-tableColor px-3 py-5 w-16">
                    {++index}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-5 w-32">
                    {act.idUser}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-5 w-36">
                    {act.nama}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-5 w-32">
                    {act.tipe}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-5 w-36">
                    {act.tanggal}
                  </td>
                  <td className="text-sm border-2 border-tableColor px-3 py-5 w-72">
                    {act.activity}
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
