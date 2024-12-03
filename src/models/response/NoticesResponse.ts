import { IPetInfo } from "./IPetInfo";

export interface NoticesResponse {
    page: number;
    perPage: number;
    totalPages: number;
    results: IPetInfo[];
}

export type Categories = "found" | "free" | "lost" | "sell";