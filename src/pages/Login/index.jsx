import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

import { ServiceContext } from "../../context/ServiceContext";
import { authAction } from "../../slices/authSlice";

import danamon from "../../assets/images/danamon.png";
import imageLogin from "../../assets/images/sidebarImage.png";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authService } = useContext(ServiceContext);
  const { error } = useSelector((state) => state.ui);

  const schema = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be greater than 6 character")
      .required("Password is required"),
  });

  const {
    values: { email, password },
    errors,
    dirty,
    isValid,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const { payload } = await dispatch(
        authAction(
          async () => await authService.login(values)
          // console.log(result);
          // if (result.statusCode === 200) {
          //   dispatch(setIsAuthenticated(true));
          //   alert("sukses 200", result);
          //   sessionStorage.setItem("token", result.data.token);
          //   navigate("/dashboard");
          // }
        )
      );
      if (payload.statusCode == 200) {
        sessionStorage.setItem("token", payload.data.token);
        navigate("/dashboard");
      } else {
        alert("login gagal");
      }
    },
    validationSchema: schema,
  });

  useEffect(() => {
    const getToken = async () => {
      await dispatch(
        authAction(async () => {
          const token = await authService.getTokenFromStorage();
        })
      );
    };
    getToken();
  }, [dispatch]);

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
                  name="email"
                  value={email}
                  id="email"
                  placeholder="Email"
                  className={`outline-none border-2 px-4 py-3 rounded-md placeholder:text-center ${
                    touched.password && errors.password
                      ? "border-red-600"
                      : "border-none"
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="text-sm text-white">
                  {touched.email && errors.email}
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-center">
                  <input
                    type={passwordType}
                    name="password"
                    value={password}
                    id="password"
                    placeholder="Kata Sandi"
                    className={`outline-none border-2 px-4 py-3 rounded-md placeholder:text-center ${
                      touched.password && errors.password
                        ? "border-red-600"
                        : "border-none"
                    }`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span onClick={togglePassword} className="relative">
                    {passwordType === "password" ? (
                      <IoEyeOutline
                        size={23}
                        className="absolute right-4 -top-2 cursor-pointer"
                        color={"#F48300"}
                      />
                    ) : (
                      <IoEyeOffOutline
                        size={23}
                        className="absolute right-4 -top-2 cursor-pointer"
                        color={"#F48300"}
                      />
                    )}
                  </span>
                </div>
                <div className="text-sm text-white">
                  {touched.password && errors.password}
                </div>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  disabled={!isValid || !dirty}
                  className={`bg-buttonColor text-buttonText w-full py-3 font-bold btn-shadow ${
                    !isValid || (!dirty && "cursor-not-allowed")
                  }`}
                >
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
