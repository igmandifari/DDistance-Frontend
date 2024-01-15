import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useUpdateBunga = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (newBunga) => {
      const bungarResponse = await axiosInstance.put("/api/interest", newBunga);

      return bungarResponse;
    },
    onSuccess,
  });
};
