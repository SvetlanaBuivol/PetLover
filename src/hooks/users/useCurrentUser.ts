import { useQuery } from "@tanstack/react-query";
import UsersService from "../../services/UsersService";

export function useCurrentUser() {
  const { data, error } = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => UsersService.currentUser(),
  });
  return { user: data, error };
}

