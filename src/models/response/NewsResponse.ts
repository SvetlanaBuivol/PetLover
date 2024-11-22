import { INews } from "./INews";

export interface NewsResponse {
    page: number;
    perPage: number;
    totalPages: number;
    results: INews[];
}