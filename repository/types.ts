export type Resturant = {
    grades: number[],
    name: string,
    contact: ResturantContact
    stars: number,
    categories: string[]
}

export type ResturantContact = {
    email: string,
    phone: string,
    location: number[]
}