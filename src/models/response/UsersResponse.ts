import { IPetInfo } from "./IPetInfo";

export interface UsersResponse {
    _id: string;
    email: string;
    name: string;
    token: string;
    avatar?: string;
    phone?: string;
    createdAt?: string;
    updatedAt?: string;
    noticesFavorites: IPetInfo[];
    noticesViewed?: IPetInfo[];
    pets?: Omit<IPetInfo[], 'price'|'category'|'comment'|'location'|'user'|'popularity'>
}