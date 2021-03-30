import React from 'react';

import './Display.css';
import Button from './Button/Button';
import Inputs from './Input/Input';

const display = (props) => {
    const renderComponent = (render) => {
        switch(render) {
            case 'Buttons':
                return <Button 
                            type={props.type}
                            position={props.position}
                            isDisabled={props.isDisabled}
                            isShadowed={props.isShadowed}
                            setIcon={props.setIcon}
                            btnSize={props.btnSize}
                            backgroundColor={props.backgroundColor}
                            text={props.text}
                            textColor={props.textColor}
                            shadowColor={props.shadowColor}
                            hoverColor={props.hoverColor}>{props.text}
                        </Button>
            case 'Inputs':
                return <Inputs 
                            type={props.type}
                            position={props.position}
                            setIcon={props.setIcon}   
                       />
            default:
                return null;
        }
    }
    return (
        <div className="Display">
            <h2>{props.component}</h2>
            {renderComponent(props.component)}
        </div>
    )
}

export default display;