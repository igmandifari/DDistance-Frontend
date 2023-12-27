import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import AuthLayout from "../layout/AuthLayout";
import MainDashboard from "../pages/MainDashboard";

import Distributor from "../pages/Distributor";
import DistributorList from "../pages/Distributor/components/DistributorList";
import DistributorForm from "../pages/Distributor/components/DistributorForm";

import Merchant from "../pages/Merchant";
import MerchantList from "../pages/Merchant/components/MerchantList";
import MerchantForm from "../pages/Merchant/components/MerchantForm";

import KreditAnalis from "../pages/KreditAnalis";
import KreditAnalisList from "../pages/KreditAnalis/components/KreditAnalisList";
import KreditAnalisForm from "../pages/KreditAnalis/components/KreditAnalisForm";

import Admin from "../pages/Admin";
import AdminList from "../pages/Admin/components/AdminList";
import AdminForm from "../pages/Admin/components/AdminForm";

import Jaminan from "../pages/Jaminan";
import JaminanList from "../pages/Jaminan/components/JaminanList";
import JaminanDetail from "../pages/Jaminan/components/JaminanDetail";

import Invoice from "../pages/Invoice";
import InvoiceList from "../pages/Invoice/components/InvoiceList";
import InvoiceDetail from "../pages/Invoice/components/InvoiceDetail";

import Akun from "../pages/Akun";
import UpdateAkun from "../pages/Akun/components/UpdateAkun";
import UpdatePassword from "../pages/Akun/components/UpdatePassword";

import ActivityLog from "../pages/ActivityLog";
import Bunga from "../pages/Bunga";

const setupRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <>Page Not Found</>,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "dashboard",
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <MainDashboard />,
            },
            {
              path: "distributor",
              element: <Distributor />,
              children: [
                {
                  index: true,
                  element: <DistributorList />,
                },
                {
                  path: "new",
                  element: <DistributorForm />,
                },
                {
                  path: ":id/edit",
                  element: <DistributorForm />,
                },
              ],
            },
            {
              path: "merchant",
              element: <Merchant />,
              children: [
                {
                  index: true,
                  element: <MerchantList />,
                },
                {
                  path: ":id/edit",
                  element: <MerchantForm />,
                },
              ],
            },
            {
              path: "kreditanalis",
              element: <KreditAnalis />,
              children: [
                {
                  index: true,
                  element: <KreditAnalisList />,
                },
                {
                  path: "new",
                  element: <KreditAnalisForm />,
                },
                {
                  path: ":id/edit",
                  element: <KreditAnalisForm />,
                },
              ],
            },
            {
              path: "admin",
              element: <Admin />,
              children: [
                {
                  index: true,
                  element: <AdminList />,
                },
                {
                  path: "new",
                  element: <AdminForm />,
                },
                {
                  path: ":id/edit",
                  element: <AdminForm />,
                },
              ],
            },
            {
              path: "jaminan",
              element: <Jaminan />,
              children: [
                {
                  index: true,
                  element: <JaminanList />,
                },
                {
                  path: "detail",
                  element: <JaminanDetail />,
                },
              ],
            },
            {
              path: "invoice",
              element: <Invoice />,
              children: [
                {
                  index: true,
                  element: <InvoiceList />,
                },
                {
                  path: "detail",
                  element: <InvoiceDetail />,
                },
              ],
            },
            {
              path: "akun",
              element: <Akun />,
              children: [
                {
                  index: true,
                  element: <UpdateAkun />,
                },
                {
                  path: "updatepassword",
                  element: <UpdatePassword />,
                },
              ],
            },
            {
              path: "activitylog",
              element: <ActivityLog />,
            },
            {
              path: "pengaturanbunga",
              element: <Bunga />,
            },
          ],
        },
      ],
    },
  ]);

export default setupRouter;
