import * as Yup from "yup";

export const merchantSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  address: Yup.string().required("Alamat is required"),
  phoneNumber: Yup.string().required("No Telp is required"),
  enabled: Yup.string().oneOf(["true", "false"]).required("Status is required"),
});
