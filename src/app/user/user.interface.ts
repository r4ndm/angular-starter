export interface ILocation {
    address: string;
    city: string;
    country: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    role: string;
    dateJoined: string;
    imageUrl: string;
    location?: ILocation;
}
