import React from 'react';

import './WeeklyWeather.css';
import { weatherState } from '../../../Utils/Utils';

const weeklyWeather = props => {
    return (
        <div className="WeeklyWeather">
            <p>{props.date}</p>
            <img src={weatherState[props.state]} alt="Weather State" className="weekly-state-img"></img>
            <div className="min-max_box">
                <div className="max-temp">
                    <span>{Math.floor(props.max).toString()}</span>
                    <span className="material-icons icon-scale">radio_button_unchecked</span>
                    <span>C</span>
                </div>
                <div className="min-temp">
                    <span>{Math.floor(props.min).toString()}</span>
                    <span className="material-icons icon-scale">radio_button_unchecked</span>
                    <span>C</span>
                </div>
            </div>
        </div>
    )
}

export default weeklyWeather;