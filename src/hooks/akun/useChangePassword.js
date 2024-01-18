import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useChangePasswordAdmin = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (newPassword) => {
      const passResponse = await axiosInstance.put(
        "/api/admin/changePasswordByUser",
        newPassword
      );

      return passResponse.data;
    },
    onSuccess,
    onError,
  });
};
export const useChangePasswordCreditAnalyst = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (newPassword) => {
      const passResponse = await axiosInstance.put(
        "/api/creditAnalyst/changePasswordByUser",
        newPassword
      );

      return passResponse.data;
    },
    onSuccess,
    onError,
  });
};
