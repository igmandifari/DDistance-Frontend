import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

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
  const [error, setError] = useState(false);
  const { logout } = useToogle();

  const userRole = sessionStorage.getItem("role");
  const navigate = useNavigate();

  const schema = Yup.object({
    oldPassword: Yup.string()
      .required("Current Password is required")
      .min(6, "Password must be at least 6 characters"),
    newPassword: Yup.string()
      .required("New Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
  });

  const { mutate: updatePasswordAdmin } = useChangePasswordAdmin({
    onSuccess: () => {
      setShowSuccess(true);
    },
    onError: () => {
      setError(true);
    },
  });

  const { mutate: updatePasswordCreditAnalyst } =
    useChangePasswordCreditAnalyst({
      onSuccess: () => {
        setShowSuccess(true);
      },
      onError: () => {
        setError(true);
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
    setError(false);
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
              <input
                type="password"
                name="oldPassword"
                id="oldPassword"
                className="w-full py-1 px-3 rounded-xl outline-none bg-[#FFDB92]"
                value={oldPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                onClick={handlePasswordClick}
              />
              {error && <InputError>Password lama tidak sesuai</InputError>}
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
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                className="w-full py-1 px-3 rounded-xl outline-none bg-[#FFDB92]"
                value={newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
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
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="w-full py-1 px-3 rounded-xl outline-none bg-[#FFDB92]"
                value={confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
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
