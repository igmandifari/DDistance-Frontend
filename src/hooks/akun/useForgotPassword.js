import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useForgotPassword = ({ onError, onSuccess }) => {
  return useMutation({
    mutationFn: async (email) => {
      const passResponse = await axiosInstance.put(
        "/api/auth/reset-password-web",
        email
      );

      return passResponse;
    },
    mutationKey: ["Forgot Password"],
    onError,
    onSuccess,
  });
};
