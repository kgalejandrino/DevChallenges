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

    const displayIcon = props.position ? <span className="material-icons md-24" id={props.position}>{props.btnIcon}</span> : null;

    if(props.isShadowed) { offShadow = { boxShadow: "none" } }

    if(props.shadowColor) { boxShadow = { boxShadow: `0 0 4px ${props.shadowColor}`} }

    if(props.hoverColor) { 
        borderHoverColor = {
            ':hover': {
                border: `4px solid ${props.hoverColor}`
            } 
        }
    }

    const displayButton = 
        props.btnStyle 
            ? <button 
                style={{...offShadow, ...boxShadow, ...borderHoverColor, ...btnStyles}}
                className={`btn ${props.btnStyle} ${props.btnSize}`} 
                id={props.btnStyle} 
                disabled={props.isDisabled}>
                    {displayIcon}
                    {props.text}
            </button>
            : null;


    return <Aux>{displayButton}</Aux>
}

export default Radium(button);