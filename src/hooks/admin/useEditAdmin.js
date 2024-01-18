import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useEditAdmin = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (newData) => {
      const adminResponse = await axiosInstance.put(
        "/api/admin/updateById",
        newData
      );

      return adminResponse.data;
    },
    onSuccess,
    onError,
  });
};
