import React from 'react';

import './Highlight.css';

const highlight = (props) => {
    let margin = {};
    if(props.title === 'Visibility' || props.title === 'Air Pressure') {
        margin = { marginRight: "8px" };
    }

    return (
        <div className="highlight">
            <p>{props.title}</p>
            <div>
                <span className="value" style={margin}>{props.value}</span>
                <span className="unit">{props.unit}</span>
            </div>
            {props.children}
        </div>
    )
}

export default highlight;