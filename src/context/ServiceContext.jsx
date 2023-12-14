import { createContext } from "react";

export const ServiceContext = createContext({});

const ServiceProvider = ({ service, children, ...rest }) => {
  return (
    <ServiceContext.Provider value={service} {...rest}>
      {children}
    </ServiceContext.Provider>
  );
};

// ServiceProvider.propTypes = {
//   children: PropTypes.any,
//   service: PropTypes.any,
// };

export default ServiceProvider;
