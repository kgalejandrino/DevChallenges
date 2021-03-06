import React from 'react';
import Radium from 'radium';

import './Button.css';
import Aux from '../../../../hoc/Auxilliary/Auxilliary';

const button = (props) => {
    let offShadow, boxShadow, borderHoverColor = null;
    const btnStyles = {
        backgroundColor: props.btnBgColor,
        color: props.btnTextColor,
    };

    const displayIcon = props.position ? <span className={`material-icons md-24 ${props.position}`}>{props.setIcon}</span> : null;

    if(props.btnDisableShadow) { offShadow = { boxShadow: "none" } }

    if(props.btnBoxShadowColor) { boxShadow = { boxShadow: `0 0 4px ${props.btnBoxShadowColor}`} }

    if(props.btnHoverColor) { 
        borderHoverColor = {
            ':hover': {
                border: `4px solid ${props.btnHoverColor}`
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
        props.componentState 
            ? <button 
                style={{...offShadow, ...boxShadow, ...borderHoverColor, ...btnStyles}}
                className={`btn ${size(props.setSize)}`} 
                id={props.componentState} 
                disabled={props.isDisabled}>
                    {displayIcon}
                    {props.btnText}
            </button>
            : null;


    return <Aux>{displayButton}</Aux>
}

export default Radium(button);