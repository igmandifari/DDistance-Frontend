import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useEditMerchant = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (newMerchant) => {
      const merchantResponse = await axiosInstance.put(
        "/api/merchant/updateByAdmin",
        newMerchant
      );

      return merchantResponse.data;
    },
    onSuccess,
    onError,
  });
};
