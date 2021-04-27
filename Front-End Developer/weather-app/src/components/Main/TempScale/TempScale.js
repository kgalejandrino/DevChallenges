import React from 'react';

import './TempScale.css';

const tempScale = () => {
    return (
        <div className="TempScale">
            <div className="scale_box active">
                <span className="material-icons icon-scale">radio_button_unchecked</span>
                <span className="temp-scale">C</span>
            </div>
            <div className="scale_box">
                <span className="material-icons icon-scale">radio_button_unchecked</span>
                <span className="temp-scale">F</span>
            </div>
        </div>
    )
}

export default tempScale;