import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useFetchJaminanById = (id) => {
  return useQuery({
    queryFn: async () => {
      const jaminanResponse = await axiosInstance.get(`/api/insurance/${id}`);

      return jaminanResponse.data.data;
    },
    queryKey: ["fetch.jaminan by id", id],
  });
};
