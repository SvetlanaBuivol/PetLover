import { AxiosResponse } from "axios";
import $api from "../http";
import { ILocation } from "../models/response/ILocation";

export default class CitiesServise {
  static async getCities(
    queryKey: string
  ): Promise<AxiosResponse<ILocation[]>> {
    return $api.get<ILocation[]>("/cities/", {
      params: {
        keyword: queryKey,
      },
    });
  }
}
