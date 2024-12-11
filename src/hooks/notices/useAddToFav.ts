import { useMutation, useQueryClient } from "@tanstack/react-query";
import FavoritesNoticesService from "../../services/FavoritesNoticesService";

export function useAddToFav(petId: string | null) {
  const queryClient = useQueryClient();
  const { mutate, error } = useMutation({
    mutationFn: (id: string) => FavoritesNoticesService.addToFavorites(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["favorites", "currentUser", "notice", petId],
      });
      queryClient.refetchQueries({
        queryKey: ["currentUser"],
      });
    },
  });
  return { addToFav: mutate, error };
}
