import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import Loading from "../../../components/Loading";
import InputError from "../../../components/InputError";
import ButtonLogout from "../../../components/ButtonLogout";
import HeaderTitleUser from "../../../components/HeaderTitleUser";
import NotificationUpdate from "../../../components/NotificationUpdate";

import { useToogle } from "../../../context/ToogleContext";
import {
  useFetchProfileAdmin,
  useFetchProfileKreditAnalis,
} from "../../../hooks/akun/useFetchProfile";
import { schema } from "../utils/schema";
import {
  useUpdateProfileAdmin,
  useUpdateProfileKreditAnalis,
} from "../../../hooks/akun/useUpdateProfile";

const UpdateAkun = () => {
  const [show, setShow] = useState(false);
  const { logout } = useToogle();

  const userRole = sessionStorage.getItem("role");

  const initialValues = {
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
  };

  const {
    data: profile,
    refetch,
    isLoading,
  } = userRole === "ROLE_ADMIN"
    ? useFetchProfileAdmin()
    : useFetchProfileKreditAnalis();

  const { mutate: updateProfileAdmin, isPending: isUpdateAdmin } =
    useUpdateProfileAdmin({
      onSuccess: () => {
        refetch();
      },
    });

  const {
    mutate: updateProfileCreditAnalyst,
    isPending: isUpdateCreditAnalyst,
  } = useUpdateProfileKreditAnalis({
    onSuccess: () => {
      refetch();
    },
  });

  const {
    values: { name, email, address, phoneNumber },
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setValues,
  } = useFormik({
    initialValues,
    onSubmit: (values) => {
      if (userRole === "ROLE_ADMIN") {
        updateProfileAdmin(values);
        setShow(false);
      }

      if (userRole === "ROLE_CREDIT_ANALYST") {
        updateProfileCreditAnalyst(values);
        setShow(false);
      }
    },
    validationSchema: schema,
  });

  useEffect(() => {
    if (profile) {
      setFieldValue("name", profile.name);
      setFieldValue("email", profile.email);
      setFieldValue("address", profile.address);
      setFieldValue("phoneNumber", profile.phoneNumber);
    }

    const newProfile = { ...profile };

    const values = {
      name: newProfile?.name,
      email: newProfile?.email,
      address: newProfile?.address,
      phoneNumber: newProfile?.phoneNumber,
    };

    setValues(values);
  }, [profile, setFieldValue, setValues]);

  if (isLoading || isUpdateAdmin || isUpdateCreditAnalyst) {
    return <Loading />;
  }

  return (
    <>
      <HeaderTitleUser>Akun</HeaderTitleUser>

      <div className="bg-background mt-8 mx-20 pb-5 w-[84%] min-h-[50%] rounded-2xl">
        <div className="flex justify-end absolute right-14 top-16">
          {logout && <ButtonLogout />}
        </div>
        <form>
          <div className="flex mx-14 gap-40 py-5">
            <div className="flex flex-col gap-10">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="text-lg text-primary font-extrabold"
                >
                  Nama
                </label>
                <div className="w-full mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full py-2 px-3 rounded-xl outline-none bg-[#FFDB92]"
                  />
                  <InputError>{touched.name && errors.name}</InputError>
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="address"
                  className="text-lg text-primary font-extrabold"
                >
                  Alamat
                </label>
                <div className="w-full mt-2">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full py-2 px-3 rounded-xl outline-none bg-[#FFDB92]"
                  />
                  <InputError>{touched.address && errors.address}</InputError>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="text-lg text-primary font-extrabold"
                >
                  Email
                </label>
                <div className="w-full mt-2">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full py-2 px-3 rounded-xl outline-none bg-[#FFDB92]"
                  />
                  <InputError>{touched.email && errors.email}</InputError>
                </div>
              </div>

              <div className="w-full">
                <label
                  htmlFor="phoneNumber"
                  className="text-lg text-primary font-extrabold"
                >
                  No. Telp
                </label>
                <div className="w-full mt-2">
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full py-2 px-3 rounded-xl outline-none bg-[#FFDB92]"
                  />
                  <InputError>
                    {touched.phoneNumber && errors.phoneNumber}
                  </InputError>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-48 px-10">
            <div className="flex gap-3">
              <Link
                to={"/dashboard/akun/updatepassword"}
                className="bg-[#F36C21] text-white font-bold py-2 px-4 rounded-lg"
              >
                Ganti Password
              </Link>
              <p
                type="button"
                className="bg-green-500 text-white font-bold py-2 px-12 rounded-lg cursor-pointer"
                onClick={() => setShow(true)}
              >
                Simpan
              </p>
            </div>
          </div>
        </form>
      </div>
      {show && (
        <NotificationUpdate
          title="Apakah Anda Yakin ?"
          subTitle="Pastikan data sudah sesuai"
          onClick={handleSubmit}
          onDecline={() => setShow(false)}
        />
      )}
    </>
  );
};

export default UpdateAkun;
