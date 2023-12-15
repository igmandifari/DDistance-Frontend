import { Outlet } from "react-router-dom";
import { LogoutProvider } from "./context/LogoutContext";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";
import { useEffect, useContext } from "react";
import { ServiceContext } from "./context/ServiceContext";
import { useNavigate } from "react-router-dom";

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

  return (
    <>
      {isLoading && <Loading />}
      {/* {error && alert("Invalid Credentials")} */}
      <LogoutProvider>
        <Outlet />
      </LogoutProvider>
    </>
  );
}

export default App;
