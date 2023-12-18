import { useContext, useState, createContext } from "react";

const ToogleContext = createContext();

export const ToogleProvider = ({ children }) => {
  const [logout, setLogout] = useState(false);
  const [decline, setDecline] = useState(false);

  const handleToogleLogout = () => {
    setLogout(!logout);
  };
  const handleDecline = () => {
    setDecline(!decline);
  };

  return (
    <ToogleContext.Provider
      value={{ handleToogleLogout, logout, decline, handleDecline }}
    >
      {children}
    </ToogleContext.Provider>
  );
};

export const useToogle = () => {
  const context = useContext(ToogleContext);

  return context;
};
