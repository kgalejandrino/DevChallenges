import React from 'react';

import './Button.css';

const button = (props) => {
    const displayIcon = props.position ? <span className="material-icons md-18" id={props.position}>face</span> : null;

    return (
        <button className={`btn ${props.btnStyle}`} id={props.btnStyle}>
            {displayIcon}
            {props.children}
        </button>
    )
}

export default button;