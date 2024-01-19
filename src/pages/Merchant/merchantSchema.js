import * as Yup from "yup";

export const merchantSchema = Yup.object({
  name: Yup.string().required("Nama is required"),
  email: Yup.string().email().required("Email is required"),
  address: Yup.string().required("Alamat is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must only contain numbers")
    .required("No Telp is required")
    .min(10, "This field must have 10-13 digit numbers")
    .max(13, "This field must have 10-13 digit numbers"),
  enabled: Yup.string().oneOf(["true", "false"]).required("Status is required"),
  pan: Yup.string()
    .matches(/^[0-9]+$/, "No Rek Not Valid")
    .required("No Rek is Required")
    .min(10, "This field must have 10-19 digit numbers")
    .max(19, "This field must have 10-19 digit numbers"),
});
