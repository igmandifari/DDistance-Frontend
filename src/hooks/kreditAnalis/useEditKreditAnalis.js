import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useEditKreditAnalis = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: async (newKreditAnalis) => {
      const kreditAnalisResponse = await axiosInstance.put(
        "/api/creditAnalyst/updateByAdmin",
        newKreditAnalis
      );

      return kreditAnalisResponse.data;
    },
    onSuccess,
    onError,
  });
};
