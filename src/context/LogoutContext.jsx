import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const LogoutContext = createContext();

export const LogoutProvider = ({ children }) => {
  const [logout, setLogout] = useState(false);

  const handleToogleLogout = () => {
    setLogout(!logout);
  };

  return (
    <LogoutContext.Provider value={{ handleToogleLogout, logout }}>
      {children}
    </LogoutContext.Provider>
  );
};

export const useLogout = () => {
  const context = useContext(LogoutContext);

  return context
};
