import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import AuthLayout from "../layout/AuthLayout";
import MainDashboard from "../pages/MainDashboard";
import Distributor from "../pages/Distributor";
import Merchant from "../pages/Merchant";
import KreditAnalis from "../pages/KreditAnalis";
import Admin from "../pages/Admin";

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
              // children: [
              //   {

              //   }
              // ]
            },
            {
              path: "merchant",
              element: <Merchant />,
              // children: [
              //   {

              //   }
              // ]
            },
            {
              path: "kreditanalis",
              element: <KreditAnalis />,
              // children: [
              //   {

              //   }
              // ]
            },
            {
              path: "admin",
              element: <Admin />,
              // children: [
              //   {

              //   }
              // ]
            },
          ],
        },
      ],
    },
  ]);

export default setupRouter;
