import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useUpdateJaminan = ({onSuccess}) => {
  return useMutation({
    mutationFn: async (updatedResponse) => {
      const jaminanResponse = await axiosInstance.put(
        "/api/insurance",
        updatedResponse
      );

      return jaminanResponse;
    },
    onSuccess,
  });
};
