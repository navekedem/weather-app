import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { City } from '../../models/city';
import { AutoCompleteHandler } from '../auto-complete/auto-complete';
import { DayCard } from '../day-card/daycard';
import CityImage from '../../images/city.png'
import { DailyForcast } from '../../models/daily-forcast';
import { addFavourite, removeFavourite } from '../../actions'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { MovingClouds } from '../moving-clouds/moving-clouds';
import './home.css';

const buttonClasses = "city-container-favourites-btn bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
export const Home = () => {
    //component state and properties
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY as string;
    const defaultCityKey: string = "215854";
    const defaultCityName: string = "Tel Aviv";
    const { state } = useLocation();
    const favouritesCities:City[] = useSelector((state) => state) as City[];
    const favouriteCity = state;
    const dispatch = useDispatch();
    const [city, setCity] = useState<City>();
    const [isFavourite, setFavourite] = useState<boolean>(false);
    const [dailyForcast, setDailyForcast] = useState<DailyForcast[]>([]);
    const [apiError, setApiError] = useState<string>('');


    //Send api request only when the Component first loaded
    useEffect(() => {
        //check if city data came from favourite component
        if (favouriteCity) {
            setCity(favouriteCity.city);
            setFavourite(true);
            handleSelectedCity(favouriteCity.city.cityKey, favouriteCity.city.cityName, false);
        } else {
            handleSelectedCity("", defaultCityName);
        }
    }, [])


    const checkIfCityIsInFavourites = (cityKey:string):boolean => {
        let favouriteCity = favouritesCities.find((favCity) => favCity.cityKey === cityKey);
        if(favouriteCity){
            return true;
        }
        return false;
    }

    //component Function handlers
    const handleSelectedCity = (cityKey: string, cityName: string, callCityData: boolean = true) => {
        let requestkey = defaultCityKey;
        if (cityKey !== "") requestkey = cityKey;
        if (callCityData) handleCityData(cityKey, cityName);
        //Get 5 day forecasts
        axios.get('https://dataservice.accuweather.com/forecasts/v1/daily/5day/' + requestkey + '?apikey=' + apiKey + '&metric=true')
            .then((response) => {
                if (response.data) {
                    let dailyForcast: DailyForcast[] = response.data.DailyForecasts;
                    setDailyForcast(dailyForcast);
                }

            })
            .catch((error) => {
                setApiError("No Data About 5 day forecasts please try different locations");
                return;
            })


    }
    const addFavouriteHandler = () => {
        if (city) {
            updateFavourite(true); 
            dispatch(addFavourite(city));  
        }
    
    }
    const removeFavouriteHandler = () => {
        if (city) {
            updateFavourite(false);
            console.log(city.cityKey);
            dispatch(removeFavourite(city));
        }
    }

    const updateFavourite = (setFavorite: boolean) => {
        let updateCity = city;
        if(updateCity) {
            updateCity.favourite = setFavorite;
            setFavourite(setFavorite);
            setCity(updateCity);
        }
    }
    const handleCityData = (cityKey: string, cityName: string) => {
        let requestkey = defaultCityKey;
        if (cityKey !== "") requestkey = cityKey;
        //Get City Data
        axios.get('https://dataservice.accuweather.com/currentconditions/v1/' + requestkey + '?apikey=' + apiKey)
            .then((response) => {
                if(response.data) {
                    let isFavourite = checkIfCityIsInFavourites(requestkey);
                    let city: City = {
                        cityKey: requestkey,
                        cityName: cityName,
                        temperature: response.data[0].Temperature.Metric.Value,
                        weatherText: response.data[0].WeatherText,
                        favourite: isFavourite,
                    }
                    setFavourite(isFavourite);
                    setCity(city);

                }
            })
            .catch((error) => {
                setApiError("No Data About Location please try different locations");
                return;
            })
       

    }
    return <section className="home">
        <AutoCompleteHandler apiKey={apiKey} setSelectedCity={handleSelectedCity} />
        {apiError !== "" ? <div className="container error-container mx-auto">{apiError}</div> : <div className="container mx-auto city-container">
            <div className="city-container-title flex flex-row justify-between">
                <h2 className="font-bold" data-aos="fade-right"><img src={CityImage} alt="city icon" />{city ? <span>{city.cityName} <br /> {city.temperature} &#8451;</span> : ""}</h2>
                <div className="city-container-favourites" data-aos="fade-left">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isFavourite ? "#000" : "#fff"} viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {isFavourite ? <button onClick={removeFavouriteHandler} className={buttonClasses}>Remove From Favourites</button> : <button onClick={addFavouriteHandler} className={buttonClasses} >Add To Favourites</button>}
                </div>
            </div>
            <div className="city-container-image">
                <MovingClouds></MovingClouds>
            </div>
            <div className="city-container-days flex flex-row justify-between">
                {dailyForcast.length > 0 ? dailyForcast.map((day, index) => {
                    let date = new Date(day.Date);
                    let dayName = date.toString().split(' ')[0];
                    return <DayCard title={dayName} key={dayName + index} temperature={day.Temperature} indexAnimation={index} />
                }) : ""}
            </div>
        </div>}
    </section>
}