import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useFetchDistributorById = (id) => {
  return useQuery({
    queryFn: async () => {
      const distributorResponse = await axiosInstance.get(
        `/api/distributor/${id}`
      );

      return distributorResponse.data.data;
    },
    queryKey: ["fetch distributor By Id", id],
  });
};
