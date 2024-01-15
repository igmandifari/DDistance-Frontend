import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useAddAdmin = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (newAdmin) => {
      const adminResponse = await axiosInstance.post("/api/admin", newAdmin);

      return adminResponse;
    },
    onSuccess,
  });
};
