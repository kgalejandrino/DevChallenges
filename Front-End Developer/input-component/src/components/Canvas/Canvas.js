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
        }
    }

    const renderComponent = (render) => {
        switch(render) {
            case 'Buttons':
                return <Buttons 
                        type={props.type}
                        position={props.position}
                        show={props.show}
                        isDisabled={disabled}
                        isShadowed={shadowed}
                        text={btnText}
                        btnIcon={icon}
                        btnSize={size}
                        backgroundColor={bgColor}
                        textColor={tColor}
                        shadowColor={sColor}
                        hoverColor={hColor}
                        />
            default:
                return <div></div>;
        }
    }
    return (
        <div className="Canvas">
            {renderComponent(props.component)}
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