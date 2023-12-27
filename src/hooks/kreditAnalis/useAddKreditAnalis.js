import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useAddKreditAnalis = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (request) => {
      const kreditAnalisResponse = await axiosInstance.post(
        "/api/creditAnalyst",
        request
      );

      return kreditAnalisResponse;
    },
    onSuccess,
  });
};
