import { keepPreviousData, useQuery } from "@tanstack/react-query";
import NewsService from "../../services/NewsService";

export function useNews(
  page?: number,
  keyword?: string,
) {
  const { data, error } = useQuery({
    queryKey: ["news", page, keyword],
    queryFn: () => NewsService.getNews(keyword, page),
    placeholderData: keepPreviousData,
  });

  return { news: data?.data, error };
}
