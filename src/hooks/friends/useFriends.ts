import { useQuery } from "@tanstack/react-query";
import FriendsService from "../../services/FriendsService";

export function useFriends() {
  const { data, error } = useQuery({
    queryKey: ["friends"],
    queryFn: () => FriendsService.getFriends(),
  });

  return { friends: data?.data, error };
}