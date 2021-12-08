import { City } from "../models/city"

export const addFavourite = (cityFavourite:City) => ({
    type: 'ADD_FAVOURITE',
    city:cityFavourite
})

export const removeFavourite = (cityFavourite:City) => ({
    type: 'REMOVE_FAVOURITE',
    city:cityFavourite
})
