import axios from "axios";
import React, { useRef, useState } from "react";
import Autocomplete from 'react-autocomplete';
import './auto-complete.css';
import { Location } from '../../models/location'

interface ApiProps {
    apiKey: string;
    setSelectedCity: Function;
}
export const AutoCompleteHandler = (props: ApiProps) => {
    //component properties
    const apiKey = props.apiKey;
    const regex = /^[a-zA-Z\s]*$/g;

    //state declerations
    const [value, setValue] = useState<string>('');
    const [locationData, setLocationData] = useState<Location[]>([]);
    const [error, setError] = useState<string>('');
    const errorRef = useRef<HTMLDivElement>(null);

    //auto complete handlers
    const handleAutocompleteChange = (event: React.ChangeEvent<any>): void => {
        if (!regex.test(event.target.value) && event.target.value.length >= 0) {
            setError("Only english letters please");
            errorRef.current?.focus();
        } else {
            setError("");
            if(event.target.value.length > 3) {
                axios.get('https://dataservice.accuweather.com/locations/v1/cities/autocomplete/?apikey=' + apiKey + '&q=' +event.target.value)
                .then((response) => {
                    if(response.data.length > 0) {
                        let locationData: Location[]= response.data
                        setLocationData(locationData)
                        
                    }
                 
                })
                .catch((error) => {
                    setError("No data was found.. \n Try to search something else");
                    errorRef.current?.focus();
                })
            }
        }
        setValue(event.target.value);
    }
    const handleAutocompleteSelect = (value: string, item: Location) => {
        setValue(item.LocalizedName)
        props.setSelectedCity(item.Key, item.LocalizedName)
        return item.LocalizedName;
    }
    return <div className="autocomplete-wrapper">
        <div className="autocomplete-wrapper-item" >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <Autocomplete
                getItemValue={(item) => item.LocalizedName}
                items={locationData}
                renderMenu={item => (
                    <div className="dropdown">
                        {item}
                    </div>
                )}
                renderInput={(props) => <input {...props} placeholder="Search City" className="autocomplete-input" />}
                renderItem={(item, isHighlighted) =>
                    <div className="option" key={item.Key} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                        {item.LocalizedName}
                    </div>
                }
                value={value}
                onChange={handleAutocompleteChange}
                onSelect={handleAutocompleteSelect}
            />
            {error !== "" ?
                <div className="text-red-700 px-4 py-3 relative error" ref={errorRef} tabIndex={-1} role="alert">
                    <strong className="font-bold">*{error}</strong>
                </div> : ""
            }

        </div>
    </div>
}