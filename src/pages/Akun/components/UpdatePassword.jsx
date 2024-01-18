import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { toast } from "react-toastify";

import InputError from "../../../components/InputError";
import ButtonLogout from "../../../components/ButtonLogout";
import ActionSuccess from "../../../components/ActionSuccess";
import HeaderTitleUser from "../../../components/HeaderTitleUser";

import { useToogle } from "../../../context/ToogleContext";
import {
  useChangePasswordAdmin,
  useChangePasswordCreditAnalyst,
} from "../../../hooks/akun/useChangePassword";

const UpdatePassword = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [passError, setPassError] = useState(false);

  const [oldPassType, setOldpassType] = useState("password");
  const [newPassType, setNewpassType] = useState("password");
  const [confirmNewPassType, setConfirmNewpassType] = useState("password");

  const { logout } = useToogle();

  const oldShowPass = () => {
    if (oldPassType === "password") {
      setOldpassType("text");
      return;
    }
    setOldpassType("password");
  };

  const newShowPass = () => {
    if (newPassType === "password") {
      setNewpassType("text");
      return;
    }
    setNewpassType("password");
  };

  const confirmNewShowPass = () => {
    if (confirmNewPassType === "password") {
      setConfirmNewpassType("text");
      return;
    }
    setConfirmNewpassType("password");
  };

  const userRole = sessionStorage.getItem("role");
  const navigate = useNavigate();

  const schema = Yup.object({
    oldPassword: Yup.string()
      .required("Current Password is required")
      .min(8, "Password must be at least 8 characters"),
    newPassword: Yup.string()
      .required("New Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
  });

  const { mutate: updatePasswordAdmin } = useChangePasswordAdmin({
    onSuccess: () => {
      setShowSuccess(true);
    },
    onError: () => {
      toast.error("Old Password incorrect");
    },
  });

  const { mutate: updatePasswordCreditAnalyst } =
    useChangePasswordCreditAnalyst({
      onSuccess: () => {
        setShowSuccess(true);
      },
      onError: (error) => {
        if (error.response?.status === 400) {
          toast.error("Old Password incorrect");
        }
      },
    });

  const handleSuccess = () => {
    setShowSuccess(false);
    navigate("/dashboard/akun");
  };

  const {
    values: { oldPassword, newPassword, confirmPassword },
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      if (userRole === "ROLE_ADMIN") {
        updatePasswordAdmin(values);
      }
      if (userRole === "ROLE_CREDIT_ANALYST") {
        updatePasswordCreditAnalyst(values);
      }
    },
    validationSchema: schema,
  });

  const handlePasswordClick = () => {
    setPassError(false);
  };

  return (
    <>
      <HeaderTitleUser>Akun</HeaderTitleUser>

      <div className="bg-background mt-8 mx-20 pb-5 w-[84%] min-h-[50%] rounded-2xl">
        <div className="flex justify-end absolute right-14 top-16">
          {logout && <ButtonLogout />}
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[80%] gap-5 mx-10 py-5"
        >
          <div className="w-full">
            <label
              htmlFor="oldPassword"
              className="text-lg text-primary font-extrabold"
            >
              Password Lama
            </label>
            <div className="w-full mt-2">
              <div className="flex">
                <input
                  type={oldPassType}
                  name="oldPassword"
                  id="oldPassword"
                  className="w-full py-1 px-3 rounded-xl outline-none bg-[#FFDB92]"
                  value={oldPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onClick={handlePasswordClick}
                />

                <span onClick={oldShowPass} className="relative">
                  {oldPassType === "password" ? (
                    <IoEyeOutline
                      size={23}
                      className="absolute right-4 top-1 cursor-pointer"
                      color={"#F48300"}
                    />
                  ) : (
                    <IoEyeOffOutline
                      size={23}
                      className="absolute right-4 top-1 cursor-pointer"
                      color={"#F48300"}
                    />
                  )}
                </span>
              </div>
              {passError && <InputError>Password lama tidak sesuai</InputError>}
              <InputError>
                {touched.oldPassword && errors.oldPassword}
              </InputError>
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="newPassword"
              className="text-lg text-primary font-extrabold"
            >
              Password Baru
            </label>
            <div className="w-full mt-2">
              <div className="flex">
                <input
                  type={newPassType}
                  name="newPassword"
                  id="newPassword"
                  className="w-full py-1 px-3 rounded-xl outline-none bg-[#FFDB92]"
                  value={newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span onClick={newShowPass} className="relative">
                  {newPassType === "password" ? (
                    <IoEyeOutline
                      size={23}
                      className="absolute right-4 top-1 cursor-pointer"
                      color={"#F48300"}
                    />
                  ) : (
                    <IoEyeOffOutline
                      size={23}
                      className="absolute right-4 top-1 cursor-pointer"
                      color={"#F48300"}
                    />
                  )}
                </span>
              </div>
              <InputError>
                {touched.newPassword && errors.newPassword}
              </InputError>
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="confirmPassword"
              className="text-lg text-primary font-extrabold"
            >
              Konfirmasi Password Baru
            </label>
            <div className="w-full mt-2">
              <div className="flex">
                <input
                  type={confirmNewPassType}
                  name="confirmPassword"
                  id="confirmPassword"
                  className="w-full py-1 px-3 rounded-xl outline-none bg-[#FFDB92]"
                  value={confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span onClick={confirmNewShowPass} className="relative">
                  {confirmNewPassType === "password" ? (
                    <IoEyeOutline
                      size={23}
                      className="absolute right-4 top-1 cursor-pointer"
                      color={"#F48300"}
                    />
                  ) : (
                    <IoEyeOffOutline
                      size={23}
                      className="absolute right-4 top-1 cursor-pointer"
                      color={"#F48300"}
                    />
                  )}
                </span>
              </div>
              <InputError>
                {touched.confirmPassword && errors.confirmPassword}
              </InputError>
            </div>
          </div>
          <div className="flex justify-end mt-20 ">
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-[#F36C21] text-white font-bold py-2 px-3 rounded-lg"
              >
                Ganti Password
              </button>
            </div>
          </div>
        </form>
      </div>
      {showSuccess && (
        <ActionSuccess
          title="Update Password Success"
          onClick={handleSuccess}
        />
      )}
    </>
  );
};

export default UpdatePassword;
