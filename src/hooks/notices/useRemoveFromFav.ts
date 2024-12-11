import { useMutation, useQueryClient } from "@tanstack/react-query";
import FavoritesNoticesService from "../../services/FavoritesNoticesService";

export function useRemoveFromFav(petId: string | null) {
  const queryClient = useQueryClient();
  const { mutate, error, isSuccess } = useMutation({
    mutationFn: (id: string) => FavoritesNoticesService.removeFromFavorites(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["favorites", "currentUser", "notice", petId],
      });
      queryClient.refetchQueries({
        queryKey: ["currentUser"],
      });
    },
  });
  return { removeFromFav: mutate, error, isSuccess };
}
