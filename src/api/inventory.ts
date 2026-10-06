import { useQuery } from "@tanstack/react-query";
import { api } from "./client";

export const useInventory = () =>
  useQuery({
    queryKey: ["inventory"],
    queryFn: async () => (await api.get("/inventory")).data,
    refetchInterval: 30000,
  });