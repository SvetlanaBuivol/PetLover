import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { FilterFormData } from "../../models/request/FilterFormData";
import NoticesServise from "../../services/NoticesService";

export function useNotices(filters: FilterFormData) {
  const {
    keyword,
    category,
    species,
    byDate,
    byPopularity,
    byPrice,
    sex,
    locationId,
    page,
  } = filters;
  const { data, error } = useQuery({
    queryKey: [
      "notices",
      page,
      keyword,
      category,
      byDate,
      byPopularity,
      byPrice,
      locationId,
      sex,
      species,
    ],
    queryFn: () => NoticesServise.getNotices(filters),
    placeholderData: keepPreviousData,
    enabled: Boolean(
      keyword ||
        category ||
        species ||
        locationId ||
        page ||
        byDate ||
        byPopularity ||
        byPrice ||
        sex
    ),
  });

  return { notices: data?.data, error };
}

export function useCategories() {
  const { data, error } = useQuery({
    queryKey: ['categories'],
    queryFn: () => NoticesServise.getCategories(),
    placeholderData: keepPreviousData,
  })
  return {categories: data?.data, error}
}

export function useSex() {
  const { data, error } = useQuery({
    queryKey: ['sex'],
    queryFn: () => NoticesServise.getSex(),
    placeholderData: keepPreviousData,
  })
  return {sex: data?.data, error}
}

export function useSpecies() {
  const { data, error } = useQuery({
    queryKey: ['species'],
    queryFn: () => NoticesServise.getSpecies(),
    placeholderData: keepPreviousData,
  })
  return {species: data?.data, error}
}