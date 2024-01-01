import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useFetchSiuData = (id) => {
  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get(`/api/insurance/${id}/siu`, {
        responseType: "blob",
      });

      return URL.createObjectURL(response.data);
    },
    queryKey: ["fetch siu"],
  });
};

export const useFetchKtpData = (id) => {
  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get(`/api/insurance/${id}/ktp`, {
        responseType: "blob",
      });

      return URL.createObjectURL(response.data);
    },
    queryKey: ["fetch ktp"],
  });
};

export const useFetchAgunanData = (id) => {
  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get(`/api/insurance/${id}/agunan`, {
        responseType: "blob",
      });

      return URL.createObjectURL(response.data);
    },
    queryKey: ["fetch agunan"],
  });
};
