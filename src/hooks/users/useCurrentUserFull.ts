import { useQuery } from "@tanstack/react-query";
import UsersService from "../../services/UsersService";

export function useCurrentUserFull() {
  const { data, error } = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => UsersService.fullUserInfo(),
  });
  return { user: data, error };
}