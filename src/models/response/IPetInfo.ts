import { ILocation } from "./ILocation";

export interface IPetInfo {
    _id: string;
    price?: number;
    species: string;
    category: string;
    title: string;
    name: string;
    birthday: string;
    comment: string;
    sex: string;
    location: string | ILocation;
    imgURL: string;
    createdAt: string;
    user: string | {_id: string, email: string, phone: string};
    popularity: number;
    updatedAt?: string;
}