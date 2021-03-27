import React from 'react';

import './Canvas.css';
import Buttons from './Buttons/Buttons';
import Panel from './Panel/Panel';

const canvas = (props) => {
    return (
        <div className="Canvas">
            <Buttons 
                btnStyle={props.btnStyle}
                position={props.position}
                show={props.show}
            />
            <Panel />
        </div>
    )
}

export default canvas;