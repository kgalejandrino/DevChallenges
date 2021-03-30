import React, { useState } from 'react';

import './Canvas.css';
import Display from './Display/Display';
import Panel from './Panel/Panel';


const Canvas = (props) => {
    let [disabled, setDisabled] = useState(false);
    let [shadowed, setShadow] = useState(false);
    let [btnText, setBtnText] = useState('Default');
    let [icon, setIcon] = useState('face');
    let [size, setSize] = useState('small');
    let [bgColor, setBgColor] = useState('');
    let [tColor, setTextColor] = useState('');
    let [sColor, setShadowColor] = useState('');
    let [hColor, setHoverColor] = useState('');

    const handleDisableSelection = () => setDisabled(!disabled);

    const handleBoxShadowSelection = () => setShadow(!shadowed);

    const handleChangeText = (e) => setBtnText(e.target.value);

    const handleSizeSelection = (e) => setSize(e.target.value);

    const handleBackgroundColorSelection = (e) => setBgColor(e.target.value);

    const handleTextColorSelection = (e) => setTextColor(e.target.value);

    const handleShadowColorSelection = (e) => setShadowColor(e.target.value);

    const handleHoverColorSelection = (e) => setHoverColor(e.target.value);

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
            default:
                break;
        }
    }

    return (
        <div className="Canvas">
            <Display 
                component={props.component}
                type={props.type}
                position={props.position}
                isDisabled={disabled}
                isShadowed={shadowed}
                text={btnText}
                setIcon={icon}
                btnSize={size}
                backgroundColor={bgColor}
                textColor={tColor}
                shadowColor={sColor}
                hoverColor={hColor}
            />
            <Panel 
                selectDisable={handleDisableSelection}
                selectShadow={handleBoxShadowSelection}
                changeText={handleChangeText}
                selectIcon={handleIconSelection}
                selectSize={handleSizeSelection}
                selectBgColor={handleBackgroundColorSelection}
                selectTextColor={handleTextColorSelection}
                selectShadowColor={handleShadowColorSelection}
                selectHoverColor={handleHoverColorSelection}
            />
        </div>
    )
}

export default Canvas;