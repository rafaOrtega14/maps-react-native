export type Restaurant = {
    grades: number[],
    name: string,
    contact: RestaurantContact
    stars: number,
    categories: string[]
}

export type RestaurantContact = {
    email: string,
    phone: string,
    location: number[]
}