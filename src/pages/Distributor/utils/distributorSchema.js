import * as Yup from "yup";

export const distributorSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  address: Yup.string().required("Alamat is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must only contain numbers")
    .required("No Telp is required")
    .min(11, "No Telp min 11 number"),
  companyId: Yup.string().required("Company Id is required"),
  pan: Yup.string()
    .matches(/^[0-9]+$/, "No Rek Not Valid")
    .required("No Rek is Required")
    .min(10, "No Rek Not Valid"),
  enabled: Yup.string().oneOf(["true", "false"]).required("Status is required"),
});
