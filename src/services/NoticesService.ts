import { AxiosResponse } from "axios";
import { FilterFormData } from "../models/request/FilterFormData";
import $api from "../http";
import { Categories, NoticesResponse } from "../models/response/NoticesResponse";

export default class NoticesServise {
  static async getNotices(filters: FilterFormData): Promise<AxiosResponse<NoticesResponse>> {
    return $api.get<NoticesResponse>("/notices", {
      params: {
        keyword: filters.keyword,
        category: filters.category,
        species: filters.species,
        locationId: filters.locationId,
        byDate: filters.byDate,
        byPrice: filters.byPrice,
        byPopularity: filters.byPopularity,
        page: filters.page,
        sex: filters.sex,
      },
    });
    }
    static async getCategories(): Promise<AxiosResponse<Categories[]>> {
        return $api.get<Categories[]>("/notices/categories")
    }
}
