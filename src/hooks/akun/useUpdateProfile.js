import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useUpdateProfileAdmin = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (newProfle) => {
      const profileResponse = await axiosInstance.put("/api/admin", newProfle);

      return profileResponse;
    },
    onSuccess,
  });
};

export const useUpdateProfileKreditAnalis = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (newProfle) => {
      const profileResponse = await axiosInstance.put(
        "/api/creditAnalyst",
        newProfle
      );

      return profileResponse;
    },
    onSuccess,
  });
};
