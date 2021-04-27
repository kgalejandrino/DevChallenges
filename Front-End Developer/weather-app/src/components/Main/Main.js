import React from 'react';

import './Main.css';
import TempScale from './TempScale/TempScale';
import WeeklyWeather from './WeeklyWeather/WeeklyWeather';
import { formatDate } from '../../Utils/Utils';

const main = (props) => {
    let weekly = [];
    if(props.data) {
        weekly = props.data.slice(1);
    }
    // console.log(weekly);
    return (
        <div className="Main">
            <div className="main-wrapper">
                <TempScale />
                <div className="weekly">
                    {weekly.map((data, index) => {
                        return <WeeklyWeather 
                                    key={index}
                                    date={index === 0 ? 'Tomorrow' : formatDate(data.applicable_date) }
                                    state={data.weather_state_abbr}
                                    max={data.max_temp} 
                                    min={data.min_temp}
                               /> 
                    })}
                </div>
            </div>
        </div>
    )
}

export default main;