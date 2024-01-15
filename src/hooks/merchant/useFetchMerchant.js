import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useFetchMerchants = () => {
  return useQuery({
    queryFn: async () => {
      const merchantResponse = await axiosInstance.get("/api/merchant");

      return merchantResponse.data.data;
    },
    queryKey: ["merchants.fetch"],
  });
};
