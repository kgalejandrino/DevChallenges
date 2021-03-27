import React from 'react';

import './Button.css';
import Aux from '../../../../hoc/Auxilliary/Auxilliary';

const button = (props) => {
    let offShadow = null;
    let bgColor = { backgroundColor: props.backgroundColor };
    let textColor = { color: props.textColor };

    const displayIcon = props.position ? <span className="material-icons md-24" id={props.position}>{props.btnIcon}</span> : null;

    if(props.isShadowed) {
        offShadow = { boxShadow: "none" }
    }

    const displayButton = 
        props.btnStyle 
            ? <button 
                style={offShadow, bgColor, textColor}
                className={`btn ${props.btnStyle} ${props.btnSize}`} 
                id={props.btnStyle} 
                disabled={props.isDisabled}>
                    {displayIcon}
                    {props.children}
            </button>
            : null;


    return <Aux>{displayButton}</Aux>
}

export default button;