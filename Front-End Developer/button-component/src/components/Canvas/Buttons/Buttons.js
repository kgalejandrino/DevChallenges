import React from 'react';

import './Buttons.css';
import Button from './Button/Button';

const buttons = (props) => {
    return (
        <div className="Buttons">
            <h2>Buttons</h2>
            <Button 
                btnStyle={props.btnStyle}
                position={props.position}
                show={props.show}
                isDisabled={props.isDisabled}
                isShadowed={props.isShadowed}
                btnIcon={props.btnIcon}
                btnSize={props.btnSize}>{props.text}
            </Button>
        </div>
    )
}

export default buttons;