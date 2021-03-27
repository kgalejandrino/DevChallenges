import React, { useState } from 'react';

import './Canvas.css';
import Buttons from './Buttons/Buttons';
import Panel from './Panel/Panel';

const Canvas = (props) => {
    let [disabled, setDisabled] = useState(false);
    let [shadowed, setShadow] = useState(false);
    let [btnText, setBtnText] = useState('Default');

    const handleDisableSelection = () => {
        setDisabled(!disabled);
    }

    const handleBoxShadowSelection = () => {
        setShadow(!shadowed);
    }

    const handleChangeText = (e) => {
        setBtnText(e.target.value);
    }

    return (
        <div className="Canvas">
            <Buttons 
                btnStyle={props.btnStyle}
                position={props.position}
                show={props.show}
                isDisabled={disabled}
                isShadowed={shadowed}
                text={btnText}
            />
            <Panel 
                selectDisable={handleDisableSelection}
                selectShadow={handleBoxShadowSelection}
                changeText={handleChangeText}
            />
        </div>
    )
}

export default Canvas;