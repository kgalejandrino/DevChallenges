import React, { useState } from 'react';

import './Canvas.css';
import Display from './Display/Display';
import Panel from './Panel/Panel';


const Canvas = (props) => {
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

    let [inputProperties, setInputProperties] = useState({
        'textColor': '',
        'borderColor': '',
        'hoverColor': '',
        'focusColor': ''
    })

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
    const hanldeBtnTextChange = (evt) => setBtnProperties(({btnText, ...prevState}) => ({
        ...prevState,
        btnText: evt.target.value
    }));

    const handleBtnTextColorChange = (evt) => setBtnProperties(({textColor, ...prevState}) => ({
        ...prevState,
        textColor: evt.target.value
    }));

    const handleBtnBgColorChange = (evt) => setBtnProperties(({bgColor, ...prevState}) => ({
        ...prevState,
        bgColor: evt.target.value
    }));

    const handleBtnShadowColorChange = (evt) => setBtnProperties(({boxShadowColor, ...prevState}) => ({
        ...prevState,
        boxShadowColor: evt.target.value
    }));

    const handleBtnHoverColorChange = (evt) => setBtnProperties(({borderHoverColor, ...prevState}) => ({
        ...prevState,
        borderHoverColor: evt.target.value
    }));

    const handleBtnBoxShadowChange = () => setBtnProperties(({disableShadow, ...prevState}) => ({
        ...prevState,
        disableShadow: !disableShadow
    }));

    /* Controller functions: Input States */  
    const handleInputTextColorChange = (evt) => setBtnProperties(({textColor, ...prevState}) => ({
        ...prevState,
        textColor: evt.target.value
    }));

    const handleInputBorderColorChange = (evt) => setBtnProperties(({borderColor, ...prevState}) => ({
        ...prevState,
        borderColor: evt.target.value
    }));

    const handleInputHoverColorChange = (evt) => setBtnProperties(({hoverColor, ...prevState}) => ({
        ...prevState,
        hoverColor: evt.target.value
    }));

    const handleInputFocusColorChange = (evt) => setBtnProperties(({focusColor, ...prevState}) => ({
        ...prevState,
        focusColor: evt.target.value
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
                btnTextColor={btnProperties.textColor}
                btnBgColor={btnProperties.bgColor}
                btnBoxShadowColor={btnProperties.boxShadowColor}
                btnHoverColor={btnProperties.borderHoverColor}
                btnDisableShadow={btnProperties.disableShadow}
                inputTextColor={inputProperties.textColor}
                inputBorderColor={inputProperties.borderColor}
                inputHoverColor={inputProperties.hoverColor}
                inputFocusColor={inputProperties.focusColor}
            />
            <Panel 
                component={props.component}
                selectDisable={handleDisableSelection}
                selectSize={handleSizeSelection}
                selectIcon={handleIconSelection}
                btnTextChange={hanldeBtnTextChange}
                btnTextColorChange={handleBtnTextColorChange}
                btnBgColorChange={handleBtnBgColorChange}
                btnShadowColorChange={handleBtnShadowColorChange}
                btnHoverColorChange={handleBtnHoverColorChange}
                btnShadowChange={handleBtnBoxShadowChange}
                inputTextColorChange={handleInputTextColorChange}
                inputBorderColorChange={handleInputBorderColorChange}
                inputHoverColorChange={handleInputHoverColorChange}
                inputFocusColorChange={handleInputFocusColorChange}
            />
        </div>
    )
}

export default Canvas;