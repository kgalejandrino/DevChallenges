import React from 'react';

import './Button.css';
import Aux from '../../../hoc/Auxilliary/Auxilliary';

const button = (props) => {
    const displayIcon = props.position ? <span className="material-icons md-24" id={props.position}>face</span> : null;

    const displayButton = 
        props.btnStyle 
            ? <button className={`btn ${props.btnStyle}`} id={props.btnStyle}>
                {displayIcon}
                {props.children}
            </button>
            : null;


    return (
        <Aux>
            {displayButton}
        </Aux>
    )
}

export default button;