import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import Input from "../../../components/Input";
import Loading from "../../../components/Loading";
import InputError from "../../../components/InputError";
import ButtonLogout from "../../../components/ButtonLogout";
import HeaderListUser from "../../../components/HeaderListUser";
import NotificationUpdate from "../../../components/NotificationUpdate";

import { useFetchKreditAnalis } from "../../../hooks/kreditAnalis/useFetchKreditAnalis";
import { useAddKreditAnalis } from "../../../hooks/kreditAnalis/useAddKreditAnalis";
import { useToogle } from "../../../context/ToogleContext";
import { kreditAnalisSchema } from "../utils/kreditAnalisSchema";
import { useEditKreditAnalis } from "../../../hooks/kreditAnalis/useEditKreditAnalis";
import { useFetchKreditAnalisById } from "../../../hooks/kreditAnalis/useFetchKreditAnalisById";
import { valueAddKreditAnalis, valueEditKreditAnalis } from "../utils/value";

const KreditAnalisForm = () => {
  const [show, setShow] = useState(false);

  const { logout } = useToogle();
  const { id } = useParams();
  const navigate = useNavigate();

  const initialValues = id ? valueEditKreditAnalis : valueAddKreditAnalis;

  const {
    values: { name, email, address, phoneNumber, enabled, role },
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
    onSubmit: async (values) => {
      if (id) {
        editKreditAnalis(values);
        setShow(false);
      } else {
        addKreditAnalis(values);
        setShow(false);
      }
    },
    validationSchema: kreditAnalisSchema,
  });

  const { refetch: refetchKreditAnalis, data: kreditAnalis } =
    useFetchKreditAnalis();

  const { mutate: addKreditAnalis, isPending: isAdding } = useAddKreditAnalis({
    onSuccess: () => {
      navigate("/dashboard/kredit-analis");
      refetchKreditAnalis();
      toast.success("Add Kredit Analis Success");
    },
    onError: () => {
      toast.error("Email Already Exist");
    },
  });

  const { mutate: editKreditAnalis, isPending: isUpdate } = useEditKreditAnalis(
    {
      onSuccess: () => {
        navigate("/dashboard/kredit-analis");
        refetchKreditAnalis();
        toast.success("Edit Kredit Analis Success");
      },
      onError: () => {
        toast.error("Email Already Exist");
      },
    }
  );

  const { data: getKreditAnalisById, isLoading } = id
    ? useFetchKreditAnalisById(id)
    : {};

  useEffect(() => {
    if (id && kreditAnalis) {
      const kreditAnalisToEdit = kreditAnalis.find((ka) => ka.id === id);

      if (kreditAnalisToEdit) {
        setFieldValue("name", kreditAnalisToEdit.name);
        setFieldValue("email", kreditAnalisToEdit.email);
        setFieldValue("address", kreditAnalisToEdit.address);
        setFieldValue("phoneNumber", kreditAnalisToEdit.phoneNumber);
        setFieldValue("role", kreditAnalisToEdit.role);
        setFieldValue("enabled", kreditAnalisToEdit.enabled);
      }

      const result = getKreditAnalisById;
      const updatedKreditAnalis = { ...result };

      const values = {
        id: updatedKreditAnalis.id,
        name: updatedKreditAnalis.name,
        email: updatedKreditAnalis.email,
        address: updatedKreditAnalis.address,
        phoneNumber: updatedKreditAnalis.phoneNumber,
        role: updatedKreditAnalis.role,
        enabled: updatedKreditAnalis.enabled,
      };

      setValues(values);
    }
  }, [getKreditAnalisById, id, kreditAnalis, setFieldValue, setValues]);

  if (isAdding || isUpdate || isLoading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderListUser />
      <div className="bg-background mx-10 h-[88vh]">
        <div className="flex justify-end absolute right-10">
          {logout && <ButtonLogout />}
        </div>

        <h1 className="text-primary text-3xl font-extrabold mx-10 py-5">
          {id ? "Edit Kredit Analis" : "Tambah Kredit Analis"}
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

              {id && (
                <>
                  <label htmlFor="role" className="text-primary font-semibold">
                    Tipe User
                  </label>
                  <select
                    name="role"
                    id="role"
                    onChange={handleChange}
                    value={role}
                    disabled
                    className="border-none outline-none px-2 py-[7px] rounded-2xl w-[78%] bg-white"
                  >
                    <option value="ROLE_ADMIN">1</option>
                    <option value="ROLE_CREDIT_ANALYST">2</option>
                  </select>
                </>
              )}

              <label htmlFor="enabled" className="text-primary font-semibold">
                Status User
              </label>
              <select
                name="enabled"
                id="enabled"
                value={enabled}
                onChange={handleChange}
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
          <div className="flex justify-end mr-16 py-12">
            <p
              className="bg-[#F36C21] text-white text-sm font-bold py-1 px-7 rounded-md cursor-pointer"
              type="button"
              disabled={!isValid || !dirty}
              onClick={() => setShow(true)}
            >
              {id ? "Simpan" : "Tambah"}
            </p>
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

export default KreditAnalisForm;
