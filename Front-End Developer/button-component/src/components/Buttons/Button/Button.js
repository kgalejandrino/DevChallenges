import React from 'react';

import './Button.css';

const button = (props) => {
    return (
        <div>
            <p className={props.textStyle}>{props.paragraph}</p>
            <button className="Button" id={props.btnStyle}>{props.button}</button>
        </div>
    )
}

export default button;