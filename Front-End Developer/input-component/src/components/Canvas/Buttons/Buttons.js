import React from 'react';

import './Buttons.css';
import Button from './Button/Button';

const buttons = (props) => {
    return (
        <div className="Buttons">
            <h2>Button</h2>
            <Button 
                type={props.type}
                position={props.position}
                isDisabled={props.isDisabled}
                isShadowed={props.isShadowed}
                btnIcon={props.btnIcon}
                btnSize={props.btnSize}
                backgroundColor={props.backgroundColor}
                text={props.text}
                textColor={props.textColor}
                shadowColor={props.shadowColor}
                hoverColor={props.hoverColor}>{props.text}
            </Button>
        </div>
    )
}

export default buttons;