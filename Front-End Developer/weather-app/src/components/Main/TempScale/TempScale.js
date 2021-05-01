import React, { useState } from 'react';

import './TempScale.css';

const TempScale = () => {
    let [celsius, setCelsius] = useState(true);

    const activeCelsiusScale = () => setCelsius(true);
    const activeFarenheightScale = () => setCelsius(false);

    return (
        <div className="TempScale">
            <div className={celsius ? 'scale_box active' : 'scale_box'} onClick={activeCelsiusScale}>
                <span className="material-icons icon-scale">radio_button_unchecked</span>
                <span className="temp-scale">C</span>
            </div>
            <div className={celsius ? 'scale_box' : 'scale_box active'} onClick={activeFarenheightScale}>
                <span className="material-icons icon-scale">radio_button_unchecked</span>
                <span className="temp-scale">F</span>
            </div>
        </div>
    )
}

export default TempScale;