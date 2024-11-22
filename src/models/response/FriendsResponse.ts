export interface FriendsResponse {
    _id: string;
    title: string;
    url: string;
    addressUrl: string;
    imageUrl: string;
    address: string;
    phone: string;
    email: string;
    workDays: IWorkDays[];
}

interface IWorkDays {
    _id: string;
    isOpen: boolean;
    from?: string;
    to?: string;
}