import React from 'react';

import './Panel.css';
import ButtonControls from './ButtonControls/ButtonControls';
import InputControls from './InputControls/InputControls';

const panel = (props) => {
    console.log(props.component);
    const renderControl = (component) => {
        if(component === 'Buttons') {
            return <ButtonControls 
                selectDisable={props.selectDisable}
                selectShadow={props.selectShadow}
                changeText={props.changeText}
                selectIcon={props.selectIcon}
                selectSize={props.selectSize}
                selectBgColor={props.selectBgColor}
                selectTextColor={props.selectTextColor}
                selectShadowColor={props.selectShadowColor}
                selectHoverColor={props.selectHoverColor}
            />
        } else if(component === 'Inputs') {
            return <InputControls 
                   />
        }
    }
    return (
        <div className="Panel">
            <div className="tab"><span>Controls</span></div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Control</th>
                    </tr>
                </thead>
                {renderControl(props.component)}
            </table>
        </div>
    )
}

export default panel;