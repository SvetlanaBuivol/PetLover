import { useQuery } from "@tanstack/react-query";
import CitiesServise from "../../services/CitiesServise";

export function useCities(queryKey: string) {
  const { data, error } = useQuery({
    queryKey: ["cities", queryKey],
    queryFn: () => CitiesServise.getCities(queryKey),
    enabled: !!queryKey,
  });
  return { cities: data?.data, error };
}
