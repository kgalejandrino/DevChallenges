import React, { useState } from 'react';

import './Sidebar.css';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import ButtonStories from './ButtonStories/ButtonStories';

const lists = ['Colors', 'Typography', 'Spaces', 'Buttons', 'Inputs', 'Grid'];

const Sidebar = (props) => {
    let [btnStates, setBtnStates] = useState(false);
    let [listIcon, setlistIcon] = useState({
        0: 'add_box',
        1: 'add_box',
        2: 'add_box',
        3: 'add_box',
        4: 'add_box',
        5: 'add_box',
    });


    /* Toggle button states lists */
    const toggleListBtnStates = (i) => {
        lists.forEach((list, idx) => {
            if(idx === i && listIcon[i] === 'add_box') {
                if(list === 'Buttons') {
                    setBtnStates(!btnStates);
                    props.typeClicked('default');
                }

                setlistIcon(prevState => ({
                    ...prevState,
                    [i]: 'remove'  
                }));
            } else if(idx === i && listIcon[i] === 'remove'){
                if(list === 'Buttons') {
                    setBtnStates(!btnStates);
                    props.typeClicked('');
                }
                
                setlistIcon(prevState => ({
                    ...prevState,
                    [i]: 'add_box'  
                }));
            }
        })
    }

    const states = btnStates 
        ? <ButtonStories typeClicked={props.typeClicked} posClicked={props.posClicked}/> 
        : null;
    
    const slideRight = props.menu ? 'slide-right' : null;
    return (
        <div className="Sidebar" id={slideRight}>
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
                                        onClick={() => toggleListBtnStates(idx)}
                                        className="material-icons md-18 add-icon">
                                        {listIcon[idx]}
                                    </span>
                                    {list} 
                                </li> 
                                {list === 'Buttons' ? states : null }
                            </Aux>  
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;