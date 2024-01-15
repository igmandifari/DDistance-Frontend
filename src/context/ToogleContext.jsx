import { useContext, useState, createContext } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import { ServiceContext } from "../context/ServiceContext";
import { authAction } from "../slices/authSlice";

const ToogleContext = createContext();

export const ToogleProvider = ({ children }) => {
  const [logout, setLogout] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [showDecline, setShowDecline] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authService } = useContext(ServiceContext);

  const handleToogleLogout = () => {
    setLogout(!logout);
  };

  const handleShowPopup = () => {
    setShowPopup(!showPopup);
  };

  const handleShowNotif = () => {
    setShowNotif(!showNotif);
  };

  const handleDecline = () => {
    setShowDecline(!showDecline);
  };

  const handleLogout = () => {
    dispatch(
      authAction(() => {
        authService.logout();
        setShowPopup(false);
        return null;
      })
    );
    navigate("/");
  };

  return (
    <ToogleContext.Provider
      value={{
        handleToogleLogout,
        setLogout,
        logout,
        showPopup,
        handleShowPopup,
        handleLogout,
        handleShowNotif,
        showNotif,
        handleDecline,
        showDecline,
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

ToogleProvider.propTypes = {
  children: PropTypes.array,
};
