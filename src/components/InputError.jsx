import PropTypes from "prop-types";

const InputError = ({ children }) => {
  return <div className="text-red-500 text-sm font-semibold">{children}</div>;
};

export default InputError;

InputError.propTypes = {
  children: PropTypes.string,
};
