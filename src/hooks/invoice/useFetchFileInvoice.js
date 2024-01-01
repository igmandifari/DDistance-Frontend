import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useFetchFileInvoice = (id) => {
  return useQuery({
    queryFn: async () => {
      const invoiceResponse = await axiosInstance.get(
        `/api/invoice/${id}/fileInvoice`,
        { responseType: "blob" }
      );

      return URL.createObjectURL(invoiceResponse.data);
    },
    queryKey: ["fetch.fileInvoice", id],
  });
};
