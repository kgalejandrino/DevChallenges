import React from 'react';

import './Guest.css';

const guest = props => {
    return (
        <div className="guest">
            <p className="category">{props.category}</p>
            <p className="age">Ages 13 or above</p>
            {props.children}
        </div>        
    )
}

export default guest;