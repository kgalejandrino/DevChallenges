import React from 'react';

import './SideMenu.css';

const sideMenu = () => {
    return (
        <div className="SideMenu">
            <div className="side_box1">
                <div className="box1--search">Search for places</div>
                <div className="box1--icon">
                    <span className="material-icons">my_location</span>
                </div>
            </div>
            <div className="bground"></div>
            <div className="side_box2">
                <div className="current_image">
                    <img src="https://github.com/kgalejandrino/DevChallenges/blob/main/Front-End%20Developer/weather-app/src/assets/Shower.png?raw=true" alt="Shower"></img>
                </div>
                <div className="current_temp">
                    <span className="temp">15</span>
                    <span className="material-icons cur-temp--icon">radio_button_unchecked</span>
                    <span className="cur-temp--type">C</span>
                </div>
                <div className="current_description">Shower</div>
                <div className="current_date">
                    <span className="today">Today</span>
                    <span className="material-icons dot">fiber_manual_record</span>
                    <span className="date-today">Fri, 5 Jun</span>
                </div>
                <div className="current_location">
                    <span className="material-icons cur-loc--icon">location_on</span>
                    <span className="cur-loc--name">Helsinki</span>
                </div>
            </div>
        </div>
    )
}

export default sideMenu;