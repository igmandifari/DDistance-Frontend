import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useFetchDistributors = () => {
  return useQuery({
    queryFn: async () => {
      const distributorResponse = await axiosInstance.get("/api/distributor");

      return distributorResponse.data.data;
    },
    queryKey: ["distributor.fetch"],
  });
};
