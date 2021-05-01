import React from 'react';

import './CurrentWeather.css';
import { weatherState, formatDate, convertToFarenheight } from '../../../Utils/Utils';

const currentWeather = (props) => {
    let data = {}
    if(props.data) { data = props.data }

    let temp = Math.floor(data.the_temp).toString();

    if(props.tempScale === 'farenheight') {
        temp = convertToFarenheight(Math.floor(data.the_temp).toString());
    } else if(props.tempScale === 'celsius') {
        temp = Math.floor(data.the_temp).toString();
    }

    return (
        <div className="CurrentWeather">
            <div className="cur_box1">
                <div className="box1--search" onClick={props.clicked}>Search for places</div>
                <div className="box1--icon">
                    <span className="material-icons">my_location</span>
                </div>
            </div>
            <div className="cur_box2">
                <div className="bground"></div>
                <div className="current_image">
                    <img src={weatherState[data.weather_state_abbr]} alt="Shower"></img>
                </div>
                <div className="current_temp">
                    <span className="temp">{temp}</span>
                    <span className="material-icons cur-temp--icon">radio_button_unchecked</span>
                    <span className="cur-temp--type">C</span>
                </div>
                <div className="current_description">{data.weather_state_name}</div>
                <div className="current_date">
                    <span className="today">Today</span>
                    <span className="material-icons dot">fiber_manual_record</span>
                    <span className="date-today">{formatDate(data.applicable_date)}</span>
                </div>
                <div className="current_location">
                    <span className="material-icons cur-loc--icon">location_on</span>
                    <span className="cur-loc--name">{props.location}</span>
                </div>
            </div>
        </div>
    )
}

export default currentWeather;