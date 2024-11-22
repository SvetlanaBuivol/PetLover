import { AxiosResponse } from "axios";
import $api from "../http";
import { NewsResponse } from "../models/response/NewsResponse";

export default class NewsService {
  static async getNews(
    keyword?: string,
    page?: number,
  ): Promise<AxiosResponse<NewsResponse>> {
    return $api.get<NewsResponse>("/news", {
      params: { keyword: keyword || undefined, page: page ?? 1},
    });
  }
}
