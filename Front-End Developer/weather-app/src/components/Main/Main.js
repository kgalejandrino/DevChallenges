import React from 'react';

import './Main.css';
import TempScale from './TempScale/TempScale';
import WeeklyWeather from './WeeklyWeather/WeeklyWeather';
import Highlights from './Highlights/Highlights';
import { formatDate } from '../../Utils/Utils';

const main = (props) => {
    let weekly = [];
    if(props.data) {
        weekly = props.data.slice(1);
    }

    return (
        <div className="Main">
            <div className="main-wrapper">
                <TempScale 
                    getScale={props.getScale}
                />
                <div className="weekly">
                    {weekly.map((data, index) => {
                        return <WeeklyWeather 
                                    key={index}
                                    date={index === 0 ? 'Tomorrow' : formatDate(data.applicable_date) }
                                    state={data.weather_state_abbr}
                                    max={data.max_temp} 
                                    min={data.min_temp}
                                    tempScale={props.tempScale}
                               /> 
                    })}
                </div>
                <Highlights highlights={props.highlights}/>
            </div>
            <footer>
                <span>created by</span>
                <a href="https://github.com/kgalejandrino">Kevin Alejandrino</a>
                <span>- <a href="https://devchallenges.io/" target="_blank" rel="noreferrer">devChallenges.io</a></span>
            </footer>
        </div>
    )
}

export default main;