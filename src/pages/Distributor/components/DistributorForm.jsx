import { useEffect } from "react";
import { useFormik } from "formik";
import { useParams, useNavigate } from "react-router-dom";

import ButtonLogout from "../../../components/ButtonLogout";
import HeaderListUser from "../../../components/HeaderListUser";
import Input from "../../../components/Input";
import InputError from "../../../components/InputError";

import { useToogle } from "../../../context/ToogleContext";
import { useAddDistributor } from "../../../hooks/distributor/useAddDistributor";
import { useFetchDistributors } from "../../../hooks/distributor/useFetchDistributors";
import { useEditDistributor } from "../../../hooks/distributor/useEditDistributor";
import { useFetchDistributorById } from "../../../hooks/distributor/useFetchDistributorById";
import { distributorSchema } from "../utils/distributorSchema";
import { valueAddDistributor, valueEditDistributor } from "../utils/value";

const DistributorForm = () => {
  const { logout } = useToogle();
  const { id } = useParams();
  const navigate = useNavigate();

  const initialValues = id ? valueEditDistributor : valueAddDistributor;

  const {
    values: { name, email, address, phoneNumber, enabled, companyId },
    errors,
    dirty,
    isValid,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setValues,
  } = useFormik({
    initialValues,
    onSubmit: (values) => {
      if (id) {
        editDistributor(values);
      } else {
        addDistributor(values);
      }
    },
    validationSchema: distributorSchema,
  });

  const { refetch: refetchDistributors, data: distributors } =
    useFetchDistributors();

  const { mutate: addDistributor } = useAddDistributor({
    onSuccess: () => {
      navigate("/dashboard/distributor");
      refetchDistributors();
    },
  });

  const { mutate: editDistributor } = useEditDistributor({
    onSuccess: () => {
      navigate("/dashboard/distributor");
      refetchDistributors();
    },
  });

  const { data: getDistributorById } = id ? useFetchDistributorById(id) : {};

  useEffect(() => {
    if (id && distributors) {
      const distributorToEdit = distributors.find(
        (distributor) => distributor.id === id
      );

      if (distributorToEdit) {
        setFieldValue("name", distributorToEdit.name);
        setFieldValue("email", distributorToEdit.email);
        setFieldValue("address", distributorToEdit.address);
        setFieldValue("phoneNumber", distributorToEdit.phoneNumber);
        setFieldValue("companyId", distributorToEdit.companyId);
        setFieldValue("enabled", distributorToEdit.enabled);
      }
      const result = getDistributorById;
      const updatedDistributor = { ...result };

      const values = {
        id: updatedDistributor.id,
        name: updatedDistributor.name,
        email: updatedDistributor.email,
        address: updatedDistributor.address,
        phoneNumber: updatedDistributor.phoneNumber,
        companyId: updatedDistributor.companyId,
        enabled: updatedDistributor.enabled,
      };

      setValues(values);
    }
  }, [id, distributors, setFieldValue, getDistributorById, setValues]);
  return (
    <>
      <HeaderListUser />
      <div className="bg-background mx-10 h-[90vh] overflow-y-auto">
        <div className="flex justify-end absolute right-10">
          {logout && <ButtonLogout />}
        </div>

        <h1 className="text-primary text-3xl font-extrabold mx-10 py-5">
          {id ? "Edit Distributor" : "Tambah Distributor"}
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="bg-bgSecondary ml-8 py-3 w-[60%] h-[80%] rounded-2xl pb-10">
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
                <InputError>{touched.name && errors.name}</InputError>
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
                <InputError>{touched.email && errors.email}</InputError>
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
                <InputError>{touched.address && errors.address}</InputError>
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
                <InputError>
                  {touched.phoneNumber && errors.phoneNumber}
                </InputError>
              </div>

              <label htmlFor="companyId" className="text-primary font-semibold">
                Company ID
              </label>
              <div>
                <Input
                  type="text"
                  name="companyId"
                  id="companyId"
                  value={companyId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  styleError={
                    touched.companyId && errors.companyId
                      ? "outline-red-500"
                      : ""
                  }
                />
                <InputError>{touched.companyId && errors.companyId}</InputError>
              </div>

              {id && (
                <>
                  <label className="text-primary font-semibold">
                    Tipe User
                  </label>
                  <Input
                    disabled
                    value="2"
                    styleError="bg-white text-black text-opacity-50 w-[78%]"
                  />
                </>
              )}

              <label htmlFor="enabled" className="text-primary font-semibold">
                Status User
              </label>
              <select
                name="enabled"
                id="enabled"
                onChange={handleChange}
                value={enabled}
                className="border-none outline-none px-2 py-[7px] rounded-2xl w-[78%] bg-white"
              >
                <option value="Select Status" disabled>
                  Select Status
                </option>
                <option value={true}>Aktif</option>
                <option value={false}>Non Aktif</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mr-16 py-3">
            <button
              className="bg-[#F36C21] text-white text-sm font-bold py-1 px-7 rounded-md"
              type="submit"
              disabled={!dirty || !isValid}
            >
              {id ? "Simpan" : "Tambah"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DistributorForm;
