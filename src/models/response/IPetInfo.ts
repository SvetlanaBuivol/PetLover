import { ILocation } from "./ILocation";

export interface IPetInfo<T> {
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
    user: T;
    popularity: number;
    updatedAt?: string;
}