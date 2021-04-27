import React from 'react';

import './Highlights.css';
import Highlight from './Highlight/Highlight';

const highlights = (props) => {
    let data = {};
    if(props.highlights) { data = props.highlights }

    return (
        <div className="Highlights">
            <h2>Today's Highlights</h2>
            <div className="highlight_cards">
                <Highlight 
                    title={'Wind Status'} 
                    unit={'mph'}
                    value={Math.floor(data.wind_speed)}>
                <div className="card-direction">
                    <span 
                        className="material-icons icon-wind"
                        style={{ transform: `rotate(${Math.floor(data.wind_direction)}deg)`}}>navigation
                    </span>
                    <span className="direction">{data.wind_direction_compass}</span>
                </div>
                </Highlight>
                <Highlight
                    title={'Humidity'}
                    unit={'%'}
                    value={data.humidity}>
                    <div className="card-humidity">
                        <div className="humidity-percentage">
                            <span>0</span>
                            <span>50</span>
                            <span>100</span>
                        </div>
                        <div className="humidity-bar bar">
                            <div className="bar-percentage bar" style={{ width: `${data.humidity}px`}}></div>
                        </div>
                        <div className="percentage-sign">%</div>
                    </div>
                </Highlight>
            </div>
        </div>
    )
}

export default highlights;