import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useFetchJaminan = () => {
  return useQuery({
    queryFn: async () => {
      const jaminanResponse = await axiosInstance.get("/api/insurance");

      return jaminanResponse.data.data;
    },
    queryKey: ["fetch.jaminan"],
  });
};
