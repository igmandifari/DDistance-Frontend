import { useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loading from "./components/Loading";
import { ToogleProvider } from "./context/ToogleContext";
import { ServiceContext } from "./context/ServiceContext";

function App() {
  const { isLoading } = useSelector((state) => state.ui);
  const navigate = useNavigate();

  const { authService } = useContext(ServiceContext);

  useEffect(() => {
    const getToken = async () => {
      const token = authService.getTokenFromStorage();
      if (token) {
        navigate("/dashboard");
      }
    };
    getToken();
  }, [authService, navigate]);

  const queryClient = new QueryClient();

  return (
    <>
      {isLoading && <Loading />}
      <QueryClientProvider client={queryClient}>
        <ToogleProvider>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={false} />
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
          />
        </ToogleProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
