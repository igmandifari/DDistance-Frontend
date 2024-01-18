import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useEditDistributor = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (newDistributor) => {
      const distributorResponse = await axiosInstance.put(
        "/api/distributor/updateByAdmin",
        newDistributor
      );

      return distributorResponse.data;
    },
    onSuccess,
    onError,
  });
};
