import { IPetInfo } from "./IPetInfo";

export interface NoticesResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: IPetInfo<string>[];
}

export type Categories = "found" | "free" | "lost" | "sell";

export type Sex = "female" | "male" | "multiple" | "unknown";

export type Species =
  | "dog"
  | "cat"
  | "monkey"
  | "bird"
  | "snake"
  | "turtle"
  | "lizard"
  | "frog"
  | "fish"
  | "ants"
  | "bees"
  | "butterfly"
  | "spider"
  | "scorpion";
