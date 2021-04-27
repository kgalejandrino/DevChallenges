import React from 'react';

import './Highlight.css';

const highlight = (props) => {
    return (
        <div className="highlight">
            <p>{props.title}</p>
            <div>
                <span className="value">{props.value}</span>
                <span className="unit">{props.unit}</span>
            </div>
            {props.children}
        </div>
    )
}

export default highlight;