import React from 'react';
import { City } from '../../models/city';
import { useNavigate } from "react-router-dom";
import { FavouriteCard } from '../favourite-card/favourite-card';
import './favourites.css'
import { useSelector } from 'react-redux';

export const Favourites = () => {
    const favouritesCities:City[] = useSelector((state) => state) as City[];
    let navigate = useNavigate();
    //Navigate to Home An Pass The City to home page
    const handleFavouriteClick = (city:City) => {
        navigate("/", { state: { city: city } });
    }

    return <section className="favourites">
        <div className="container favourites-title text-center">
            <h2 className="font-bold">Your Favourites</h2>
        </div>
        <div className="favourites-container container mx-auto">
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
                {favouritesCities.length > 0 ? favouritesCities.map((city) => {
                  return <FavouriteCard city={city} key={city.cityKey} handleFavouriteClick={handleFavouriteClick}/>
                }): ""}
            </div>
        </div>
    </section >
}