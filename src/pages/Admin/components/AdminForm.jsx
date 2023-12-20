import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { useFetchAdmin } from "../../../hooks/admin/useFetchAdmin";
import { schema } from "./validationSchema";
import { useToogle } from "../../../context/ToogleContext";
import ButtonLogout from "../../../components/ButtonLogout";
import HeaderListUser from "../../../components/HeaderListUser";
import Input from "../../../components/Input";
import axiosInstance from "../../../api/axiosInstance";

const AdminForm = () => {
  const { logout } = useToogle();
  const { data: fetchAdmin } = useFetchAdmin();

  const {
    values: { name, email, address, phoneNumber, enabled },
    errors,
    dirty,
    isValid,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
      enabled: "Aktif",
    },
    onSubmit: (values) => {
      mutate(values);
    },
    validationSchema: schema,
  });

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: async (newAdmin) => {
      return await axiosInstance.post("/api/admin", newAdmin);
    },
    onSuccess: () => {
      navigate("/dashboard/admin");
      fetchAdmin();
    },
  });

  return (
    <>
      <HeaderListUser />
      <div className="bg-background mx-10 h-[88vh]">
        <div className="flex justify-end absolute right-10">
          {logout && <ButtonLogout />}
        </div>

        <h1 className="text-primary text-3xl font-extrabold mx-10 py-5">
          Tambah Admin
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="bg-bgSecondary ml-8 py-3 w-[60%] min-h-full rounded-2xl pb-10">
            <div className="flex flex-col gap-2 w-[50%] mx-5">
              <label htmlFor="name" className="text-primary font-semibold">
                Nama
              </label>
              <div>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  styleError={
                    touched.name && errors.name ? "outline-red-500" : ""
                  }
                />
                <div className="text-red-500 text-sm font-semibold">
                  {touched.name && errors.name}
                </div>
              </div>

              <label htmlFor="email" className="text-primary font-semibold">
                Email
              </label>
              <div>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  styleError={
                    touched.email && errors.email ? "outline-red-500" : ""
                  }
                />
                <div className="text-red-500 text-sm font-semibold">
                  {touched.email && errors.email}
                </div>
              </div>

              <label htmlFor="address" className="text-primary font-semibold">
                Alamat
              </label>
              <div>
                <Input
                  type="text"
                  name="address"
                  id="address"
                  value={address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  styleError={
                    touched.address && errors.address ? "outline-red-500" : ""
                  }
                />
                <div className="text-red-500 text-sm font-semibold">
                  {touched.address && errors.address}
                </div>
              </div>

              <label
                htmlFor="phoneNumber"
                className="text-primary font-semibold"
              >
                No. Telp
              </label>
              <div>
                <Input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  styleError={
                    touched.phoneNumber && errors.phoneNumber
                      ? "outline-red-500"
                      : ""
                  }
                />
                <div className="text-red-500 text-sm font-semibold mt-1">
                  {touched.phoneNumber && errors.phoneNumber}
                </div>
              </div>

              <label htmlFor="enabled" className="text-primary font-semibold">
                Status User
              </label>
              <select
                name="enabled"
                id="enabled"
                onChange={handleChange}
                value={enabled}
                className="border-none outline-none px-2 py-[7px] rounded-2xl w-[84%] bg-white"
              >
                <option value={true}>Aktif</option>
                <option value={false}>Non Aktif</option>
              </select>
            </div>
          </div>
          <div className={`flex justify-end mr-16 py-14`}>
            <button
              className="bg-[#F36C21] text-white text-sm font-bold py-1 px-7 rounded-md"
              type="submit"
              disabled={!dirty || !isValid}
            >
              Tambah
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminForm;
