import { useQuery } from "@tanstack/react-query";
import NoticesServise from "../../services/NoticesService";
import { IPetInfo } from "../../models/response/IPetInfo";

export function useNoticeById(petId: string | null): {
  notice: IPetInfo<{_id: string, email: string, phone: string}> | undefined;
  error: unknown;
} {
  const { data, error } = useQuery({
    queryKey: ["notice", petId],
    queryFn: () => NoticesServise.getNoticeById(petId),
    enabled: !!petId,
  });
  return { notice: data?.data, error };
}
