import React, { useState } from 'react';

import './Sidebar.css';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import ButtonStates from './ButtonStates/ButtonStates';

const test = {
    'Colors': [],
    'Typography': [],
    'Spaces': [],
    'Buttons': [
        { id: 1, type: 'default', text: 'Default Button'}, 
        { id: 2, type: 'outline', text: 'Outline Button' },
        { id: 3, type: 'text', text: 'Text Button'},
        { id: 4, type: 'left-icon', text: 'Left Icon Button'},
        { id: 5, type: 'right-icon', text: 'Right Icon Button'},
        { id: 6, type: 'primary', text: 'Primary Button' },
        { id: 7, type: 'secondary', text: 'Secondary Button'}, 
        { id: 8, type: 'danger', text: 'Danger Button' }
    ],
    'Inputs': [
        { id: 1, type: 'default', text: 'Default Input' },
        { id: 2, type: 'error', text: 'Error Input' },
        { id: 3, type: 'validation', text: 'Validation Input' },
        { id: 4, type: 'left-icon', text: 'Left-Icon Input' },
        { id: 5, type: 'right-icon', text: 'Right-Icon Input' },
        { id: 6, type: 'full-width', text: 'Full Width Input' },
    ] ,
    'Grid': []
}

const Sidebar = (props) => {
    let [listIcon, setlistIcon] = useState({
        0: 'add_box',
        1: 'add_box',
        2: 'add_box',
        3: 'add_box',
        4: 'add_box',
        5: 'add_box',
    });
    let [btnStates, setBtnStates] = useState('');

    /* Toggle button states lists */
    const toggleListBtnStates = (i) => {
        Object.keys(test).forEach((list, idx) => {
            if(idx === i && listIcon[i] === 'add_box') {
                setBtnStates(list);
                props.typeClicked('default');
                props.setComponent(list);

                setlistIcon(prevState => ({
                    ...prevState,
                    [i]: 'remove'  
                }));
            } else if(idx === i && listIcon[i] === 'remove'){
                setBtnStates('');
                props.typeClicked('');
                props.setComponent(null);

                setlistIcon(prevState => ({
                    ...prevState,
                    [i]: 'add_box'  
                }));
            }
        })
    }
 
    const slideRight = props.menu ? 'slide-right' : null;

    return (
        <div className="Sidebar" id={slideRight}>
            <div className="sidebar-title">
                <span className="dev"><b>Dev</b></span>
                <span className="challenges"><b>challenges.io</b></span>
            </div>
            <nav>
                <ul className="main-nav">
                    {Object.keys(test).map((list, idx) => {
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
                                {list === btnStates
                                    ? <ButtonStates typeClicked={props.typeClicked} posClicked={props.posClicked} list={test[list]}/> 
                                    : null 
                                }
                            </Aux>  
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;