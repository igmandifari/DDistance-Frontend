import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import ServiceProvider from "./context/ServiceContext";
import ServiceFactory from "./services/ServiceFactory";
import setupRouter from "./router/router.jsx";
import setupStore from "./store";

import "./index.css";

const store = setupStore();
const router = setupRouter();
const service = ServiceFactory();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ServiceProvider service={service}>
        <RouterProvider router={router} />
      </ServiceProvider>
    </Provider>
  </React.StrictMode>
);
