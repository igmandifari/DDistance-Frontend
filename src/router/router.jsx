import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import AuthLayout from "../layout/AuthLayout";
import MainDashboard from "../pages/MainDashboard";
import Distributor from "../pages/Distributor";
import Merchant from "../pages/Merchant/components/MerchantList";
import KreditAnalis from "../pages/KreditAnalis";
import Admin from "../pages/Admin";
import DistributorList from "../pages/Distributor/components/DistributorList";
import DistributorForm from "../pages/Distributor/components/DistributorForm";
import KreditAnalisList from "../pages/KreditAnalis/components/KreditAnalisList";
import KreditAnalisForm from "../pages/KreditAnalis/components/KreditAnalisForm";
import AdminList from "../pages/Admin/components/AdminList";
import AdminForm from "../pages/Admin/components/AdminForm";
import Akun from "../pages/Akun";
import UpdateAkun from "../pages/Akun/components/UpdateAkun";
import UpdatePassword from "../pages/Akun/components/UpdatePassword";
import Bunga from "../pages/Bunga";
import ActivityLog from "../pages/ActivityLog";
import Invoice from "../pages/Invoice";
import InvoiceList from "../pages/Invoice/components/InvoiceList";
import Jaminan from "../pages/Jaminan";
import JaminanList from "../pages/Jaminan/components/JaminanList";
import InvoiceDetail from "../pages/Invoice/components/InvoiceDetail";
import JaminanDetail from "../pages/Jaminan/components/JaminanDetail";
import MerchantList from "../pages/Merchant/components/MerchantList";
import MerchantForm from "../pages/Merchant/components/MerchantForm";

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
                {
                  path: "new",
                  element: <KreditAnalisList />,
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
              path: "pengaturanbunga",
              element: <Bunga />,
            },
            {
              path: "activitylog",
              element: <ActivityLog />,
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
          ],
        },
      ],
    },
  ]);

export default setupRouter;
