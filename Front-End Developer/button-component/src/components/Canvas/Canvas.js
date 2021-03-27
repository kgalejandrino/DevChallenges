import React, { useState } from 'react';

import './Canvas.css';
import Buttons from './Buttons/Buttons';
import Panel from './Panel/Panel';

const Canvas = (props) => {
    let [disabled, setDisabled] = useState(false);
    let [shadowed, setShadow] = useState(false);

    const handleDisableSelection = () => {
        setDisabled(!disabled);
    }

    const handleBoxShadowSelection = () => {
        setShadow(!shadowed);
    }

    return (
        <div className="Canvas">
            <Buttons 
                btnStyle={props.btnStyle}
                position={props.position}
                show={props.show}
                isDisabled={disabled}
                isShadowed={shadowed}
            />
            <Panel 
                selectDisable={handleDisableSelection}
                selectShadow={handleBoxShadowSelection}
            />
        </div>
    )
}

export default Canvas;