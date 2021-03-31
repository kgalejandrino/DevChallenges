import React from 'react';

import './Display.css';
import Button from './Button/Button';
import Input from './Input/Input';

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
                            btnTextColor={props.btnTextColor}
                            btnBgColor={props.btnBgColor}
                            btnBoxShadowColor={props.btnBoxShadowColor}
                            btnHoverColor={props.btnHoverColor}
                            btnDisableShadow={props.btnDisableShadow}>{props.text}
                        </Button>
            case 'Inputs':
                return <Input 
                            componentState={props.componentState}
                            position={props.position}
                            setIcon={props.setIcon}
                            inputTextColor={props.inputTextColor}
                            inputBorderColor={props.inputBorderColor}
                            inputHoverColor={props.inputHoverColor}
                            inputFocusColor={props.inputFocusColor} 
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