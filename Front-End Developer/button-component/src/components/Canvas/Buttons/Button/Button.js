import React from 'react';

import './Button.css';
import Aux from '../../../../hoc/Auxilliary/Auxilliary';

const button = (props) => {
    let offShadow = null;

    const displayIcon = props.position ? <span className="material-icons md-24" id={props.position}>face</span> : null;

    if(props.isShadowed) {
        offShadow = { boxShadow: "none" }
    }

    console.log(offShadow);

    const displayButton = 
        props.btnStyle 
            ? <button 
                style={offShadow}
                className={`btn ${props.btnStyle}`} 
                id={props.btnStyle} 
                disabled={props.isDisabled}>
                    {displayIcon}
                    {props.children}
            </button>
            : null;


    return <Aux>{displayButton}</Aux>
}

export default button;