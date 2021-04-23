import React, { Component } from 'react';

import './Weather.css';
import SideMenu from '../../components/SideMenu/SideMenu';

class Weather extends Component {
    render() {
        return (
            <div className="Weather">
                <SideMenu />
            </div>
        )
    }
}

export default Weather;