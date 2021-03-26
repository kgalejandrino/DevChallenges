import React, { useState } from 'react';

import './Sidebar.css';
import ButtonStories from './ButtonStories/ButtonStories';

const Sidebar = (props) => {
    let [btnStories, toggleBtnStories] = useState(false);

    const showBtnStories = () => {
        toggleBtnStories(!btnStories);
    }

    return (
        <div className="Sidebar">
            <div className="sidebar-title">
                <span className="dev"><b>Dev</b></span>
                <span className="challenges"><b>challenges.io</b></span>
            </div>
            <nav>
                <ul className="main-nav">
                    <li>Colors</li>
                    <li>Typography</li>
                    <li>Spaces</li>
                    <li onClick={showBtnStories}>Buttons</li>
                        {btnStories
                            ? <ButtonStories typeSelected={props.typeSelected} positionSelected={props.positionSelected}/> 
                            : null
                        }
                    <li>Inputs</li>
                    <li>Grid</li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;