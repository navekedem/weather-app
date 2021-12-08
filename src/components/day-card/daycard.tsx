import React from 'react';
import './daycard.css'
import {Temperature} from '../../models/temperture'

interface DayProps {
    indexAnimation:number;
    title:string;
    temperature:Temperature;
}

export const DayCard = (props:DayProps) => {
    return <div className="day-card rounded-md shadow-lg border-4 border-light-blue-500 border-opacity-50 text-center" data-aos="fade-right" data-aos-delay={props.indexAnimation + "50"}>
        <div className="day-card-title"><h3>{props.title}</h3></div>
        <div className="day-card-desc">
           <span className="font-bold">Max</span>: {props.temperature.Maximum.Value} &#8451; <br/>
           <span className="font-bold">Min</span>: {props.temperature.Minimum.Value} &#8451;
        </div>
    </div>
}