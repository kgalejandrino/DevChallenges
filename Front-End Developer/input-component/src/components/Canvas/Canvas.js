import React, { useState } from 'react';

import './Canvas.css';
import Display from './Display/Display';
import Panel from './Panel/Panel';


const Canvas = (props) => {
    // let [shadowed, setShadow] = useState(false);
    // let [componentText, setComponentText] = useState('Default');
    // let [bgColor, setBgColor] = useState('');
    // let [tColor, setTextColor] = useState('');
    // let [sColor, setShadowColor] = useState('');
    // let [hColor, setHoverColor] = useState('');
    let [commonProperties, setCommonProperties]  = useState({
        'disabled': false,
        'icon': 'face',
        'size': 'small'
    });
    let [btnProperties, setBtnProperties] = useState({
        'btnText': 'Default',
        'textColor': '',
        'bgColor': '',
        'boxShadowColor': '',
        'borderHoverColor': '',
        'disableShadow': false
    });

    /*--- Common properties between components: disable, icon, size ---*/
    /* Controller functions: sets state based on user selection*/
    const handleDisableSelection = () => setCommonProperties(({disabled, ...prevState}) => ({
        ...prevState,
        disabled: !disabled
    }));

    const handleSizeSelection = (evt) => setCommonProperties(prevState => ({
        ...prevState,
        size: evt.target.value
    }));

    const handleIconSelection = (evt) => {
        switch(evt.target.value) {
            case 'heart':
                setCommonProperties(prevState => ({
                    ...prevState,
                    icon: 'favorite'
                }));
                break;
            case 'leaf':
                setCommonProperties(prevState => ({
                    ...prevState,
                    icon: 'eco'
                }));
                break;
            case 'tool':
                setCommonProperties(prevState => ({
                    ...prevState,
                    icon: 'build'
                }));
                break;
            case 'star':
                setCommonProperties(prevState => ({
                    ...prevState,
                    icon: 'grade'
                }));
                break;
            default:
                setCommonProperties(prevState => ({
                    ...prevState,
                    icon: 'face'
                }));
                break;
        }
    }

    /* Controller functions: Button States */
    const handleChangeText = (evt) => setBtnProperties(({btnText, ...prevState}) => ({
        ...prevState,
        btnText: evt.target.value
    }));

    const handleTextColorSelection = (evt) => setBtnProperties(({textColor, ...prevState}) => ({
        ...prevState,
        textColor: evt.target.value
    }));

    const handleBackgroundColorSelection = (evt) => setBtnProperties(({bgColor, ...prevState}) => ({
        ...prevState,
        bgColor: evt.target.value
    }));

    const handleShadowColorSelection = (evt) => setBtnProperties(({boxShadowColor, ...prevState}) => ({
        ...prevState,
        boxShadowColor: evt.target.value
    }));

    const handleHoverColorSelection = (evt) => setBtnProperties(({borderHoverColor, ...prevState}) => ({
        ...prevState,
        borderHoverColor: evt.target.value
    }));

    const handleBoxShadowSelection = () => setBtnProperties(({disableShadow, ...prevState}) => ({
        ...prevState,
        disableShadow: !disableShadow
    }));

    return (
        <div className="Canvas">
            <Display 
                component={props.component}
                componentState={props.componentState}
                position={props.position}
                isDisabled={commonProperties.disabled}
                setSize={commonProperties.size}
                setIcon={commonProperties.icon}
                btnText={btnProperties.btnText}
                textColor={btnProperties.textColor}
                bgColor={btnProperties.bgColor}
                shadowColor={btnProperties.boxShadowColor}
                hoverColor={btnProperties.borderHoverColor}
                disableShadow={btnProperties.disableShadow}
            />
            <Panel 
                component={props.component}
                selectDisable={handleDisableSelection}
                selectSize={handleSizeSelection}
                selectIcon={handleIconSelection}
                changeText={handleChangeText}
                selectTextColor={handleTextColorSelection}
                selectBgColor={handleBackgroundColorSelection}
                selectShadowColor={handleShadowColorSelection}
                selectHoverColor={handleHoverColorSelection}
                selectShadow={handleBoxShadowSelection}
            />
        </div>
    )
}

export default Canvas;