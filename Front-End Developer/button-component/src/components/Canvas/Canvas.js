import React, { useState } from 'react';

import './Canvas.css';
import Buttons from './Buttons/Buttons';
import Panel from './Panel/Panel';

const Canvas = (props) => {
    let [disabled, setDisabled] = useState(false);

    const handleDisableSelection = (e) => {
        // const value = e.target.value;
        setDisabled(!disabled);
    }

    return (
        <div className="Canvas">
            <Buttons 
                btnStyle={props.btnStyle}
                position={props.position}
                show={props.show}
                isDisabled={disabled}
            />
            <Panel selected={handleDisableSelection}/>
        </div>
    )
}

export default Canvas;