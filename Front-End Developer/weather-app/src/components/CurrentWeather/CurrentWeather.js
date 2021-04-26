import React from 'react';

import './CurrentWeather.css';
import SideBar from '../UI/SideBar/SideBar';
import { weatherState, formatDate } from '../../Utils/Utils';

const currentWeather = (props) => {
    let init = {
        "img": 's',
        "temp": 15,
        "state": 'Shower',
        "date": 'Fri, 5 Jun'
    }

    if(props.weather) {
        init.img = props.weather.weather_state_abbr;
        init.temp = Math.floor(props.weather.the_temp);
        init.state = props.weather.weather_state_name;
        init.date = props.weather.applicable_date;
    }

    return (
        <SideBar>
            <div className="side_box1">
                <div className="box1--search" onClick={props.searched}>Search for places</div>
                <div className="box1--icon">
                    <span className="material-icons">my_location</span>
                </div>
            </div>
            <div className="bground"></div>
            <div className="side_box2">
                <div className="current_image">
                    <img src={weatherState[init.img]} alt="Shower"></img>
                </div>
                <div className="current_temp">
                    <span className="temp">{init.temp}</span>
                    <span className="material-icons cur-temp--icon">radio_button_unchecked</span>
                    <span className="cur-temp--type">C</span>
                </div>
                <div className="current_description">{init.state}</div>
                <div className="current_date">
                    <span className="today">Today</span>
                    <span className="material-icons dot">fiber_manual_record</span>
                    <span className="date-today">{formatDate(init.date)}</span>
                </div>
                <div className="current_location">
                    <span className="material-icons cur-loc--icon">location_on</span>
                    <span className="cur-loc--name">{props.location}</span>
                </div>
            </div>
        </SideBar>
    )
}

export default currentWeather;