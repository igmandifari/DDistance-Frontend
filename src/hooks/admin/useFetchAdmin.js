import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useFetchAdmin = () => {
  return useQuery({
    queryFn: async () => {
      const adminResponse = await axiosInstance.get("/api/admin");

      return adminResponse.data.data;
    },
    queryKey: ["admin.fetch"],
  });
};
