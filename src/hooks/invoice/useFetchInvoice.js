import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useFetchInvoice = () => {
  return useQuery({
    queryFn: async () => {
      const invoiceResponse = await axiosInstance.get("/api/invoice");
      return invoiceResponse.data.data;
    },
    queryKey: ["fetch.invoice"],
  });
};
