import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../api/axiosInstance";

export const useFetchKreditAnalis = () => {
  return useQuery({
    queryFn: async () => {
      const kreditAnalisResponse = await axiosInstance.get("api/creditAnalyst");

      return kreditAnalisResponse.data.data;
    },
    queryKey: ["kreditAnalis.fetch"]
  });
};
