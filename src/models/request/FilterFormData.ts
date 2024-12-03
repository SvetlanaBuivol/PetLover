export interface FilterFormData {
  keyword?: string | undefined;
  category?: string | undefined;
  species?: string | undefined;
  locationId?: string | undefined;
  byDate?: boolean | null;
  byPrice?: boolean | null;
  byPopularity?: boolean | null;
  page?: number | 1;
  sex?: string | undefined;
}
