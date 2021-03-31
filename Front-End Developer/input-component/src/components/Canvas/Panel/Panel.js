import React from 'react';

import './Panel.css';
import ButtonControls from './ButtonControls/ButtonControls';
import InputControls from './InputControls/InputControls';

const panel = (props) => {
    const renderControl = (component) => {
        if(component === 'Buttons') {
            return <ButtonControls 
                selectDisable={props.selectDisable}
                selectSize={props.selectSize}
                selectIcon={props.selectIcon}
                btnTextChange={props.btnTextChange}
                btnTextColorChange={props.btnTextColorChange}
                btnBgColorChange={props.btnBgColorChange}
                btnShadowColorChange={props.btnShadowColorChange}
                btnHoverColorChange={props.btnHoverColorChange}
                btnShadowChange={props.btnShadowChange}
            />
        } else if(component === 'Inputs') {
            return <InputControls 
                inputTextColorChange={props.inputTextColorChange}
                inputBorderColorChange={props.inputBorderColorChange}
                inputHoverColorChange={props.inputHoverColorChange}
                inputFocusColorChange={props.inputFocusColorChange}
                selectDisable={props.selectDisable}
                selectIcon={props.selectIcon}
                selectSize={props.selectSize}
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