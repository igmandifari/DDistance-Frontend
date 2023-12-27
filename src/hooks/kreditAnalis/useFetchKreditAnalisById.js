import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useFetchKreditAnalisById = (id) => {
  return useQuery({
    queryFn: async () => {
      const kreditAnalisResponse = await axiosInstance.get(
        `/api/creditAnalyst/${id}`
      );

      return kreditAnalisResponse.data.data;
    },
    queryKey: ["fetch kredit analis by id", id],
  });
};
