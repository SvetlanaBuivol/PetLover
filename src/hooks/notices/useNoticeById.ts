import { keepPreviousData, useQuery } from "@tanstack/react-query";
import NoticesServise from "../../services/NoticesService";

export function useNoticeById(petId: string | null) {
  const { data, error } = useQuery({
    queryKey: ["notice", petId],
    queryFn: () => NoticesServise.getNoticeById(petId),
    placeholderData: keepPreviousData,
    enabled: !!petId,
  });
  return { notice: data?.data, error };
}
