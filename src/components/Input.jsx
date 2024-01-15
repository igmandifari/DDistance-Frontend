import PropTypes from "prop-types";

const Input = ({
  onChange,
  onBlur,
  type,
  value,
  name,
  id,
  styleError,
  disabled,
}) => {
  return (
    <input
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      value={value}
      name={name}
      id={id}
      disabled={disabled}
      className={`outline-none px-3 py-1 rounded-2xl ${styleError}`}
    />
  );
};

export default Input;

Input.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  id: PropTypes.string,
  styleError: PropTypes.string,
  disabled: PropTypes.bool,
};
