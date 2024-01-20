import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import Input from "../../../components/Input";
import Loading from "../../../components/Loading";
import InputError from "../../../components/InputError";
import ButtonLogout from "../../../components/ButtonLogout";
import HeaderListUser from "../../../components/HeaderListUser";
import NotificationUpdate from "../../../components/NotificationUpdate";

import { useEditMerchant } from "../../../hooks/merchant/useEditMerchant";
import { useFetchMerchants } from "../../../hooks/merchant/useFetchMerchant";
import { useFetchMerchantById } from "../../../hooks/merchant/useFetchMerchantById";
import { useToogle } from "../../../context/ToogleContext";
import { merchantSchema } from "../merchantSchema";

const MerchantForm = () => {
  const [show, setShow] = useState(false);

  const { logout } = useToogle();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    values: { name, email, address, phoneNumber, enabled, pan },
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
    initialValues: {
      id: "",
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
      enabled: "Aktif",
      pan: "",
    },
    onSubmit: async (values) => {
      if (id) {
        editMerchant(values);
        setShow(false);
      }
    },
    validationSchema: merchantSchema,
  });

  const { refetch: refetchMerchants, data: merchants } = useFetchMerchants();

  const { mutate: editMerchant, isPending } = useEditMerchant({
    onSuccess: () => {
      navigate("/dashboard/merchant");
      refetchMerchants();
      toast.success("Edit Merchant Success");
    },
    onError: () => {
      toast.error("Email Already Exist");
    },
  });

  const { data: getMerchantById, isLoading } = id
    ? useFetchMerchantById(id)
    : {};

  useEffect(() => {
    if (id && merchants) {
      const merchantToedit = merchants.find((merchant) => merchant.id === id);

      if (merchantToedit) {
        setFieldValue("name", merchantToedit.name);
        setFieldValue("email", merchantToedit.email);
        setFieldValue("address", merchantToedit.address);
        setFieldValue("phoneNumber", merchantToedit.phoneNumber);
        setFieldValue("enabled", merchantToedit.enabled);
        setFieldValue("pan", merchantToedit.pan);
      }

      const result = getMerchantById;
      const updatedMerchant = { ...result };

      const values = {
        id: updatedMerchant.id,
        name: updatedMerchant.name,
        email: updatedMerchant.email,
        address: updatedMerchant.address,
        phoneNumber: updatedMerchant.phoneNumber,
        enabled: updatedMerchant.enabled,
        pan: updatedMerchant.pan,
      };

      setValues(values);
    }
  }, [getMerchantById, id, merchants, setFieldValue, setValues]);

  if (isPending || isLoading) {
    return <Loading />;
  }

  return (
    <>
      <HeaderListUser />
      <div className="bg-background mx-10 h-[88vh] overflow-y-auto">
        <div className="flex justify-end absolute right-10">
          {logout && <ButtonLogout />}
        </div>

        <h1 className="text-primary text-3xl font-extrabold mx-10 py-5">
          Edit Merchant
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

              <label htmlFor="pan" className="text-primary font-semibold">
                No. Rekening Danamon
              </label>
              <div>
                <Input
                  type="text"
                  name="pan"
                  id="pan"
                  value={pan}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  styleError={
                    touched.pan && errors.pan ? "outline-red-500" : ""
                  }
                />
                <InputError>{touched.pan && errors.pan}</InputError>
              </div>

              <label htmlFor="role" className="text-primary font-semibold">
                Tipe User
              </label>
              <div>
                <Input
                  type="text"
                  value={4}
                  disabled
                  styleError="bg-white text-black text-opacity-30"
                />
                <InputError>{touched.enabled && errors.enabled}</InputError>
              </div>

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
          <div className="flex justify-end mr-16 pb-5 ">
            <p
              className="bg-[#F36C21] text-white text-sm font-bold py-1 px-7 rounded-md cursor-pointer"
              type="button"
              disabled={!isValid || !dirty}
              onClick={() => setShow(true)}
            >
              Simpan
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

export default MerchantForm;
