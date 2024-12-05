import { AxiosResponse } from "axios";
import { FilterFormData } from "../models/request/FilterFormData";
import $api from "../http";
import {
  Categories,
  NoticesResponse,
  Sex,
  Species,
} from "../models/response/NoticesResponse";
import { IPetInfo } from "../models/response/IPetInfo";

export default class NoticesServise {
  static async getNotices(
    filters: FilterFormData
  ): Promise<AxiosResponse<NoticesResponse>> {
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
   static async getNoticeById(id: string | null): Promise<AxiosResponse<IPetInfo>> {
    return $api.get<IPetInfo>(`/notices/${id}`);
  }
  static async getCategories(): Promise<AxiosResponse<Categories[]>> {
    return $api.get<Categories[]>("/notices/categories");
  }
  static async getSex(): Promise<AxiosResponse<Sex[]>> {
    return $api.get<Sex[]>("/notices/sex");
  }
  static async getSpecies(): Promise<AxiosResponse<Species[]>> {
    return $api.get<Species[]>("/notices/species");
  }
}
