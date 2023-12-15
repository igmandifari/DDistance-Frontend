import { Outlet } from "react-router-dom";
import { LogoutProvider } from "./context/LogoutContext";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";

function App() {
  const { isLoading, error } = useSelector((state) => state.ui);

  return (
    <>
      {isLoading && <Loading />}
      {error && alert("TEST")}
      <LogoutProvider>
        <Outlet />
      </LogoutProvider>
    </>
  );
}

export default App;
