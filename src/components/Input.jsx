const Input = ({ onChange, onBlur, type, value, name, id, styleError }) => {
  return (
    <input
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      value={value}
      name={name}
      id={id}
      className={`outline-none px-3 py-1 rounded-2xl ${styleError}`}
    />
  );
};

export default Input;
