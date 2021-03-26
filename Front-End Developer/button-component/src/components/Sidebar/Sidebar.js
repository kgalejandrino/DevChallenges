import React, { useState } from 'react';

import './Sidebar.css';
import ButtonStories from './ButtonStories/ButtonStories';

const Sidebar = (props) => {
    let [btnStories, toggleBtnStories] = useState(false);
    
    const showBtnStories = () => {
        toggleBtnStories(!btnStories);
        props.typeSelected('default');
    }

    return (
        <div className="Sidebar">
            <div className="sidebar-title">
                <span className="dev"><b>Dev</b></span>
                <span className="challenges"><b>challenges.io</b></span>
            </div>
            <nav>
                <ul className="main-nav">
                    <li>
                        <span className="material-icons md-18 add-icon">add_box</span>Colors
                    </li>
                    <li>
                        <span className="material-icons md-18 add-icon">add_box</span>Typography
                    </li>
                    <li>
                        <span className="material-icons md-18 add-icon">add_box</span>Spaces</li>
                    <li>
                        <span onClick={showBtnStories} className="material-icons md-18 add-icon">add_box</span>
                        Buttons
                    </li>
                        {btnStories
                            ? <ButtonStories typeSelected={props.typeSelected} positionSelected={props.positionSelected}/> 
                            : null
                        }
                    <li>
                        <span className="material-icons md-18 add-icon">add_box</span>
                        Inputs
                    </li>
                    <li>
                        <span className="material-icons md-18 add-icon">add_box</span>
                        Grid
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;