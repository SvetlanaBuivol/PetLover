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
    location: string;
    imgURL: string;
    createdAt: string;
    user: string;
    popularity: number;
    updatedAt?: string;
}