import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useFetchMerchantById = (id) => {
  return useQuery({
    queryFn: async () => {
      const merchantResponse = await axiosInstance.get(`/api/merchant/${id}`);

      return merchantResponse.data.data;
    },
    queryKey: ["Fetch merchant by id", id],
  });
};
