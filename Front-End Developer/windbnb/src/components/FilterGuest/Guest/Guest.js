import React from 'react';

import './Guest.css';

const guest = props => {
    return (
        <div className="guest">
            <p className="category">{props.category}</p>
            <p className="age">Ages 13 or above</p>
            <div className="inc-dec--btn">
                <button className="btn btn-dec">-</button>
                <span className="value">0</span>
                <button className="btn btn-inc">+</button>
            </div>
        </div>        
    )
}

export default guest;