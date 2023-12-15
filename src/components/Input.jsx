const Input = ({ type, value, name, id }) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      id={id}
      className="border-none outline-none px-3 py-1 rounded-2xl"
    />
  );
};

export default Input;
