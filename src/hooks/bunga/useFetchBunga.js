import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useFetchBunga = () => {
  return useQuery({
    queryFn: async () => {
      const bungaResponse = await axiosInstance.get("/api/interest");

      return bungaResponse.data.data;
    },
    queryKey: ["Fetch bunga"],
  });
};
