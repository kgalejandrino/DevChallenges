import React from 'react';

import './WeeklyWeather.css';

const weeklyWeather = props => {
    return (
        <div className="WeeklyWeather">
            <p>Tomorrow</p>
            <img src="https://github.com/kgalejandrino/DevChallenges/blob/main/Front-End%20Developer/weather-app/src/assets/Sleet.png?raw=true" alt="Weather State Photo" className="weekly-state-img"></img>
            <div className="min-max_box">
                <div className="max-temp">
                    <span>16</span>
                    <span className="material-icons icon-scale">radio_button_unchecked</span>
                    <span>C</span>
                </div>
                <div className="min-temp">
                    <span>11</span>
                    <span className="material-icons icon-scale">radio_button_unchecked</span>
                    <span>C</span>
                </div>
            </div>
        </div>
    )
}

export default weeklyWeather;