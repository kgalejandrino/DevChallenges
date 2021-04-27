import React from 'react';

import './Main.css';
import TempScale from './TempScale/TempScale';
import WeeklyWeather from './WeeklyWeather/WeeklyWeather';

const main = () => {
    return (
        <div className="Main">
            <TempScale />
            <WeeklyWeather />
        </div>
    )
}

export default main;