import React from 'react';
import Radium from 'radium';

import './Button.css';
import Aux from '../../../../hoc/Auxilliary/Auxilliary';

const button = (props) => {
    let offShadow, boxShadow, borderHoverColor = null;
    const btnStyles = {
        backgroundColor: props.backgroundColor,
        color: props.textColor,
    };

    const displayIcon = props.position ? <span className={`material-icons md-24 ${props.position}`}>{props.setIcon}</span> : null;

    if(props.isShadowed) { offShadow = { boxShadow: "none" } }

    if(props.shadowColor) { boxShadow = { boxShadow: `0 0 4px ${props.shadowColor}`} }

    if(props.hoverColor) { 
        borderHoverColor = {
            ':hover': {
                border: `4px solid ${props.hoverColor}`
            } 
        }
    }

    const size = (s) => {
        if(s === 'small') {
            s = 'btn-small';
        } else if(s === 'medium') {
            s = 'btn-medium';
        } else if(s === 'large') {
            s = 'btn-large';
        }
        return s;
    }

    const displayButton = 
        props.type 
            ? <button 
                style={{...offShadow, ...boxShadow, ...borderHoverColor, ...btnStyles}}
                className={`btn ${size(props.btnSize)}`} 
                id={props.type} 
                disabled={props.isDisabled}>
                    {displayIcon}
                    {props.text}
            </button>
            : null;


    return <Aux>{displayButton}</Aux>
}

export default Radium(button);