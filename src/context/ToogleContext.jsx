import { useContext, useState, createContext } from "react";

const ToogleContext = createContext();

export const ToogleProvider = ({ children }) => {
  const [logout, setLogout] = useState(false);
  const [decline, setDecline] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleToogleLogout = () => {
    setLogout(!logout);
  };
  const handleDecline = () => {
    setDecline(!decline);
  };

  const handleShowPopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <ToogleContext.Provider
      value={{
        handleToogleLogout,
        setLogout,
        logout,
        decline,
        handleDecline,
        showPopup,
        handleShowPopup,
      }}
    >
      {children}
    </ToogleContext.Provider>
  );
};

export const useToogle = () => {
  const context = useContext(ToogleContext);

  return context;
};
