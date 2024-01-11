import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

import Loading from "../../components/Loading";
import ActionFailed from "../../components/ActionFailed";
import ActionSuccess from "../../components/ActionSuccess";

import { useForgotPassword } from "../../hooks/akun/useForgotPassword";

import danamon from "../../assets/images/danamon.png";
import imageLogin from "../../assets/images/sidebarImage.png";

const ForgotPassword = () => {
  const [showFailed, setShowFailed] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const schema = Yup.object({
    email: Yup.string().email().required("Email is required"),
  });

  const { mutate: forgotPassword, isPending } = useForgotPassword({
    onSuccess: () => {
      setShowSuccess(true);
    },
    onError: () => {
      setShowFailed(true);
    },
  });

  const handleSuccess = () => {
    setShowSuccess(!showSuccess);
    navigate("/");
  };

  const {
    values: { email },
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
    },
    onSubmit: (values) => {
      forgotPassword(values);
    },
    validationSchema: schema,
  });

  if (isPending) {
    return <Loading />;
  }

  return (
    <>
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
            <p className="text-2xl text-white font-bold mt-10">
              Masukan Email Akun Anda!
            </p>
            <form className="mt-10" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-8">
                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    id="email"
                    placeholder="Email"
                    className={`outline-none border-2 px-4 py-3 rounded-md placeholder:text-center ${
                      touched.email && errors.email
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
                  <button
                    type="submit"
                    disabled={!isValid || !dirty}
                    className={`bg-buttonColor text-buttonText w-full py-3 font-bold btn-shadow ${
                      !isValid || (!dirty && "cursor-not-allowed")
                    }`}
                  >
                    Kirim
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showFailed && (
        <ActionFailed
          subtitle="Email salah atau tidak terdaftar"
          onClick={() => setShowFailed(!showFailed)}
        />
      )}
      {showSuccess && (
        <ActionSuccess
          subtitle="Berhasil mengirim email reset kata sandi."
          onClick={handleSuccess}
        />
      )}
    </>
  );
};

export default ForgotPassword;
