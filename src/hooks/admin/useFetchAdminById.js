import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useFetchAdminById = (id) => {
  return useQuery({
    queryFn: async () => {
      const adminResponse = await axiosInstance.get(`/api/admin/${id}`);

      return adminResponse.data.data;
    },
    queryKey: ["fetch.admin by id", id],
  });
};
