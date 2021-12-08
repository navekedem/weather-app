import React from 'react';
import { City } from '../../models/city';
import './favourite-card.css'

interface FavouriteCardProps {
    city: City;
    handleFavouriteClick: Function;
}


export const FavouriteCard = (props: FavouriteCardProps) => {

    //Pass click to parent component
    const handleCardClick = () => {
        props.handleFavouriteClick(props.city);
    }

    return <div className="max-w-sm rounded overflow-hidden shadow-lg favourite-card text-center" onClick={handleCardClick} data-aos="zoom-in">
        <div className="font-bold text-xl mb-2"><h3 className="favourite-card-title">{props.city.cityName}</h3></div>
        <p className="text-gray-700 text-base favourite-card-weather">
            {props.city.weatherText}
        </p>
        <p className="text-gray-700 text-base favourite-card-temperture">
            {props.city.temperature} &#8451;
        </p>
    </div>
}