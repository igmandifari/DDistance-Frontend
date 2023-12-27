import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useEditDistributor = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (newDistributor) => {
      const distributorResponse = await axiosInstance.put(
        "/api/distributor",
        newDistributor
      );

      return distributorResponse;
    },
    onSuccess,
  });
};
