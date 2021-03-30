import React from 'react';
import Radium from 'radium';

import './Input.css';
import Aux from '../../../../hoc/Auxilliary/Auxilliary';

const input = (props) => {
    console.log(props.position);
    const displayIcon = props.position ? <span className={`material-icons md-24 ${props.position}`}id={props.type}>{props.setIcon}</span> : null;

    const displayInput = props.type 
            ? <Aux>
                {displayIcon}
                <input 
                  type="text"
                  className="input"
                  id={props.type}
                  placeholder="Placeholder">
                </input>
              </Aux>
            : null;

    return <Aux>{displayInput}</Aux>
}

export default Radium(input);