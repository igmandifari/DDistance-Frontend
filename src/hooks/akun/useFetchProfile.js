import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useFetchProfileAdmin = () => {
  return useQuery({
    queryFn: async () => {
      const profileResponse = await axiosInstance.get("/api/admin/my");

      return profileResponse.data.data;
    },
    queryKey: ["Fetch profile ADM"],
  });
};


export const useFetchProfileKreditAnalis = () => {
  return useQuery({
    queryFn: async () => {
      const profileResponse = await axiosInstance.get("/api/creditAnalyst/my");

      return profileResponse.data.data;
    },
    queryKey: ["Fetch profile CA"],
  });
};
