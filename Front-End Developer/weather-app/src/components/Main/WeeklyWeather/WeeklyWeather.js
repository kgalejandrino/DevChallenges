import React from 'react';

import './WeeklyWeather.css';
import { weatherState, convertToFarenheight } from '../../../Utils/Utils';

const weeklyWeather = props => {
    let max = Math.floor(props.max).toString();
    let min = Math.floor(props.min).toString();

    if(props.tempScale === 'farenheight') {
        max = convertToFarenheight(Math.floor(props.max).toString());
        min = convertToFarenheight(Math.floor(props.min).toString());
    } else if(props.tempScale === 'celsius') {
        max = Math.floor(props.max).toString();
        min = Math.floor(props.min).toString()
    }

    return (
        <div className="WeeklyWeather">
            <p>{props.date}</p>
            <img src={weatherState[props.state]} alt="Weather State" className="weekly-state-img"></img>
            <div className="min-max_box">
                <div className="max-temp">
                    <span>{max}</span>
                    <span className="material-icons icon-scale">radio_button_unchecked</span>
                    <span>C</span>
                </div>
                <div className="min-temp">
                    <span>{min}</span>
                    <span className="material-icons icon-scale">radio_button_unchecked</span>
                    <span>C</span>
                </div>
            </div>
        </div>
    )
}

export default weeklyWeather;