import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useEditAdmin = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (newData) => {
      const adminResponse = await axiosInstance.put("/api/admin", newData);

      return adminResponse;
    },
    onSuccess,
  });
};
