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
            </div>
        </div>
    )
}

export default highlights;