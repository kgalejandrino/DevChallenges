import React, { useState } from 'react';

import './Canvas.css';
import Buttons from './Buttons/Buttons';
import Panel from './Panel/Panel';


const Canvas = (props) => {
    let [disabled, setDisabled] = useState(false);
    let [shadowed, setShadow] = useState(false);
    let [btnText, setBtnText] = useState('Default');
    let [icon, setIcon] = useState('face');
    let [size, setSize] = useState('small');

    const handleDisableSelection = () => setDisabled(!disabled);

    const handleBoxShadowSelection = () => setShadow(!shadowed);

    const handleChangeText = (e) => setBtnText(e.target.value);

    const handleSizeSelection = (e) => setSize(e.target.value);

    const handleIconSelection = (e) => {
        switch(e.target.value) {
            case 'face':
                setIcon('face');
                break;
            case 'heart':
                setIcon('favorite');
                break;
            case 'leaf':
                setIcon('eco');
                break;
            case 'tool':
                setIcon('build');
                break;
            case 'star':
                setIcon('grade');
                break;
        }
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
                btnIcon={icon}
                btnSize={size}
            />
            <Panel 
                selectDisable={handleDisableSelection}
                selectShadow={handleBoxShadowSelection}
                changeText={handleChangeText}
                selectIcon={handleIconSelection}
                selectSize={handleSizeSelection}
            />
        </div>
    )
}

export default Canvas;