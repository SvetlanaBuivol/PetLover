import { AxiosError } from "axios";
import $api from "../http";

export default class FavoritesNoticesService {
  static async addToFavorites(id: string): Promise<string[]> {
    try {
      const response = await $api.post<string[]>(
        `/notices/favorites/add/${id}`
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          const status = error.response.status;
          console.log(`Error Status: ${status}`);
          throw status;
        }
        throw new Error("Request failed but no response received");
      }
      throw new Error("Unexpected error occurred");
    }
  }
  static async removeFromFavorites(id: string): Promise<string[]> {
    try {
      const response = await $api.delete<string[]>(
        `/notices/favorites/remove/${id}`
      );
      console.log(
        "FavoritesNoticesService  removeFromFavorites  response",
        response
      );
      return response.data;
    } catch (error) {
      console.log("FavoritesNoticesService  removeFromFavorites  error", error);
      if (error instanceof AxiosError) {
        if (error.response) {
          const status = error.response.status;
          console.log(`Error Status: ${status}`);
          throw status;
        }
        throw new Error("Request failed but no response received");
      }
      throw new Error("Unexpected error occurred");
    }
  }
}
