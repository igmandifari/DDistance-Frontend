import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useFetchActivityLog = () => {
  return useQuery({
    queryFn: async () => {
      const logResponse = await axiosInstance.get("/api/activityLog");

      return logResponse.data.data;
    },
    queryKey: ["Fetch Activity Log"],
  });
};
