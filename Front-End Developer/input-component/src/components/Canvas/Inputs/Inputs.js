import React from 'react';

import './Inputs.css';
import Input from './Input/Input';

const buttons = (props) => {
    return (
        <div className="Buttons">
            <h2>Input</h2>
            <Input 
                type={props.type}
            />
        </div>
    )
}

export default buttons;