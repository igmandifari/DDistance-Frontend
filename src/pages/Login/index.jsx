import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

import danamon from "../../assets/danamon.png";
import imageLogin from "../../assets/sidebarImage.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const emailUser = "test@mail.com";
  const passUser = "password";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailUser !== email || passUser !== password) {
      alert("Invalid Credential");
      return;
    }
    alert("Succesfully Login");
    setEmail("");
    setPassword("");
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <div className="min-w-full min-h-screen">
      <div className="bg-secondary shadow-inner min-h-screen px-8 w-1/2 clip-path absolute z-10">
        <img src={danamon} alt="" />
      </div>
      <div className="bg-primary flex justify-center min-h-screen relative">
        <div className="w-1/4 flex flex-col py-10 justify-center items-center absolute mt-20 z-10">
          <h1 className="text-white text-shadow uppercase font-extrabold text-[50px] mb-3">
            D-Distance
          </h1>
          <img src={imageLogin} alt="image" className="pr-6" />
          <form className="mt-14" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8">
              <div className="w-full">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  value={email}
                  id="email"
                  placeholder="Email"
                  className="outline-none px-4 py-3 rounded-md placeholder:text-center"
                />
              </div>
              <div className="flex items-center w-full">
                <input
                  type={passwordType}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  value={password}
                  id="password"
                  placeholder="Kata Sandi"
                  className="outline-none border-none px-4 py-3 rounded-md placeholder:text-center"
                />
                <span onClick={togglePassword}>
                  {passwordType === "password" ? (
                    <IoEyeOutline
                      className="absolute right-16 bottom-[170px]"
                      color={"#F48300"}
                    />
                  ) : (
                    <IoEyeOffOutline
                      className="absolute right-16 bottom-[170px]"
                      color={"#F48300"}
                    />
                  )}
                </span>
              </div>
              <div className="w-full">
                <button className="bg-buttonColor text-buttonText w-full py-3 font-bold btn-shadow">
                  Masuk
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
