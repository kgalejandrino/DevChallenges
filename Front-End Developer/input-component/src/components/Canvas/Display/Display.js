import React from 'react';

import './Display.css';
import Button from './Button/Button';
import Inputs from './Input/Input';

const display = (props) => {
    const renderComponent = (render) => {
        switch(render) {
            case 'Buttons':
                return <Button 
                            componentState={props.componentState}
                            position={props.position}
                            isDisabled={props.isDisabled}
                            setIcon={props.setIcon}
                            setSize={props.setSize}
                            btnText={props.btnText}
                            textColor={props.textColor}
                            bgColor={props.bgColor}
                            hoverColor={props.hoverColor}
                            shadowColor={props.shadowColor}
                            disableShadow={props.disableShadow}>{props.text}
                        </Button>
            case 'Inputs':
                return <Inputs 
                            componentState={props.componentState}
                            position={props.position}
                            setIcon={props.setIcon} 
                       />
            default:
                return null;
        }
    }
    return (
        <div className="Display">
            <h2>{props.componentState === 'progress' ? 'In Progress' : props.component}</h2>
            {renderComponent(props.component)}
        </div>
    )
}

export default display;