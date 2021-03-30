import React from 'react';
import Radium from 'radium';

import './Input.css';
import Aux from '../../../../hoc/Auxilliary/Auxilliary';

const input = (props) => {

    const displayInput = props.type 
            ? <input placeholder="Placeholder"></input> 
            : null;

    return <Aux>{displayInput}</Aux>
}

export default Radium(input);