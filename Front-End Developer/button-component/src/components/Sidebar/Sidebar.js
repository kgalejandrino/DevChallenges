import React, { useState } from 'react';

import './Sidebar.css';
import Aux from '../../hoc/Auxilliary/Auxilliary';

import ButtonStories from './ButtonStories/ButtonStories';

const lists = ['Colors', 'Typography', 'Spaces', 'Buttons', 'Inputs', 'Grid'];

const Sidebar = (props) => {
    let [btnStories, setBtnStories] = useState(false);
    let [icon, setIcon] = useState('add_box');

    const showBtnStories = (i) => {
        const selectedList = lists.forEach((list, idx) => {
            if(idx === i && list === 'Buttons') {
                setBtnStories(!btnStories);
                props.typeSelected('default');
            }
        })
        return selectedList;
    }

    const stories = btnStories 
        ? <ButtonStories typeSelected={props.typeSelected} positionSelected={props.positionSelected}/> 
        : null;
    
    return (
        <div className="Sidebar">
            <div className="sidebar-title">
                <span className="dev"><b>Dev</b></span>
                <span className="challenges"><b>challenges.io</b></span>
            </div>
            <nav>
                <ul className="main-nav">
                    {lists.map((list, idx) => {
                        return (
                            <Aux key={idx}>
                                <li>
                                    <span 
                                        onClick={() => showBtnStories(idx)}
                                        className="material-icons md-18 add-icon">
                                        {icon}
                                    </span>
                                    {list} 
                                </li> 
                                {list === 'Buttons' ? stories : null }
                            </Aux>  
                        )
                    })}
                    {/* <li>
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
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;