import { useEffect, useState } from "react";

import CardUsers from "./components/CardUsers";
import CardRequest from "./components/CardRequest";
import ButtonLogout from "../../components/ButtonLogout";
import HeaderTitleUser from "../../components/HeaderTitleUser";

import { useToogle } from "../../context/ToogleContext";
import { useFetchDistributors } from "../../hooks/distributor/useFetchDistributors";
import { useFetchMerchants } from "../../hooks/merchant/useFetchMerchant";
import { useFetchKreditAnalis } from "../../hooks/kreditAnalis/useFetchKreditAnalis";
import { useFetchInvoice } from "../../hooks/invoice/useFetchInvoice";
import { useFetchJaminan } from "../../hooks/jaminan/useFetchJaminan";
import { useFetchActivityLog } from "../../hooks/activityLog/useFetchActivityLog";
import EmptyState from "../../components/EmptyState";

const MainDashboard = () => {
  const { logout, setLogout } = useToogle();

  const { data: distributors } = useFetchDistributors();
  const { data: merchants } = useFetchMerchants();
  const { data: kreditAnalis } = useFetchKreditAnalis();
  const { data: invoice } = useFetchInvoice();
  const { data: jaminan } = useFetchJaminan();
  const { data: notifications, refetch } = useFetchActivityLog();

  useEffect(() => {
    setLogout(false);
  }, [setLogout]);

  useEffect(() => {
    refetch();
  }, [notifications, refetch]);

  return (
    <>
      <HeaderTitleUser>Dashboard</HeaderTitleUser>
      <div className="bg-background mx-10 min-w-4/5 min-h-[85%] relative">
        <div className="flex justify-end absolute right-0">
          {logout && <ButtonLogout />}
        </div>

        <div className="flex pb-2 pt-5">
          <div className="flex flex-col w-3/4">
            <div className="flex justify-evenly mt-5">
              <CardUsers
                href="distributor"
                role="Distributor"
                count={distributors?.length}
              />
              <CardUsers
                role="Merchant"
                href="merchant"
                count={merchants?.length}
              />
              <CardUsers
                role="Kredit Analis"
                href="kredit-analis"
                count={kreditAnalis?.length}
              />
            </div>

            <div className="mx-10">
              <h2 className="text-2xl text-primary font-extrabold my-4">
                Notification
              </h2>

              {notifications && notifications.length !== 0 ? (
                <div className="flex flex-col gap-4 mt-5 ">
                  {notifications?.map((notif) => {
                    const waktuDariAPI = notif.time;
                    let fixTime;

                    const selisihJam = waktuDariAPI / 60;
                    const selisihHari = selisihJam / 24;

                    if (waktuDariAPI < 60) {
                      fixTime = waktuDariAPI + " Minutes Ago";
                    } else if (selisihJam < 24) {
                      fixTime = Math.floor(selisihJam) + " Hours Ago";
                    } else {
                      fixTime = Math.floor(selisihHari) + " Days Ago";
                    }

                    return (
                      <div
                        className="flex justify-between items-center bg-buttonColor px-5 py-3 rounded-xl"
                        key={notif.id}
                      >
                        <span className="text-sm font-semibold">
                          {notif.title}
                        </span>
                        <span className="text-sm time-color">{fixTime}</span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <EmptyState />
              )}
            </div>
          </div>

          <div className="flex flex-col w-1/4">
            <CardRequest
              requestName="Daftar Pengajuan"
              href="jaminan"
              count={jaminan?.length}
            />
            <CardRequest
              requestName="Daftar Invoice"
              href="invoice"
              count={invoice?.length}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
