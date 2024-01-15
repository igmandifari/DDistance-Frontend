import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useFetchInvoiceById = (id) => {
  return useQuery({
    queryFn: async () => {
      const invoiceResponse = await axiosInstance.get(`/api/invoice/${id}`);

      return invoiceResponse.data.data;
    },
    queryKey: ["fetch.invoice", id],
  });
};
