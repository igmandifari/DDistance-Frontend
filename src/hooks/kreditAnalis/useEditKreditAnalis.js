import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useEditKreditAnalis = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (newKreditAnalis) => {
      const kreditAnalisResponse = await axiosInstance.put(
        "/api/creditAnalyst",
        newKreditAnalis
      );

      return kreditAnalisResponse;
    },
    onSuccess,
  });
};
