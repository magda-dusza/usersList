export type UserType = {
    id: number | null;
    name: string;
    username: string;
    email: string,
    address: AddressType;
    phone: string;
    website: string;
    company: CompanyType;
}

export type AddressType = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoCoordsType;
}

export type CompanyType = {
    name: string;
    catchPhrase: string;
    bs: string;
}

export type GeoCoordsType = {
    lat: string,
    lng: string
}