import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useAddDistributor = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (request) => {
      const distributorResponse = await axiosInstance.post(
        "/api/distributor",
        request
      );

      return distributorResponse.data;
    },
    onSuccess,
    onError
  });
};
