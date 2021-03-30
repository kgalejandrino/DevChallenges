import React, { useState } from 'react';

import './Sidebar.css';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import ComponentStates from './ComponentStates/ComponentStates';

const componentsList = {
    'Colors': [],
    'Typography': [],
    'Spaces': [],
    'Buttons': [
        { id: 1, type: 'btn-default', text: 'Default Button'}, 
        { id: 2, type: 'btn-outline', text: 'Outline Button' },
        { id: 3, type: 'btn-text', text: 'Text Button'},
        { id: 4, type: 'btn-left--icon', text: 'Left Icon Button'},
        { id: 5, type: 'btn-right--icon', text: 'Right Icon Button'},
        { id: 6, type: 'btn-primary', text: 'Primary Button' },
        { id: 7, type: 'btn-secondary', text: 'Secondary Button'}, 
        { id: 8, type: 'btn-danger', text: 'Danger Button' }
    ],
    'Inputs': [
        { id: 1, type: 'input-default', text: 'Default Input' },
        { id: 2, type: 'input-error', text: 'Error Input' },
        { id: 3, type: 'input-validation', text: 'Validation Input' },
        { id: 4, type: 'input-left--icon', text: 'Left Icon Input' },
        { id: 5, type: 'input-right--icon', text: 'Right Icon Input' },
        { id: 6, type: 'input-multiline', text: 'Multiline Input' },
    ] ,
    'Grid': []
}

const Sidebar = (props) => {
    let [listIcon, setlistIcon] = useState({
        'Colors': 'add_box',
        'Typography': 'add_box',
        'Spaces': 'add_box',
        'Buttons': 'add_box',
        'Inputs': 'add_box',
        'Grid': 'add_box',
    });
    let [componentStates, setComponentStates] = useState('');

    /* Toggle button states lists */
    const toggleListBtnStates = (i) => {
        Object.keys(componentsList).forEach((list, idx) => {
            if(idx === i && listIcon[list] === 'add_box') {
                console.log(componentsList[list][0]);
                setComponentStates(list);
                props.setComponent(list);

                setlistIcon(prevState => ({
                    ...prevState,
                    [list]: 'remove'  
                }));

                /* Render default state at first selection */
                if(componentsList[list][0] !== undefined) {
                    props.typeClicked(componentsList[list][0].type);
                } else {
                    props.typeClicked('progress');
                }
            } else if(idx === i && listIcon[list] === 'remove'){
                setComponentStates('');
                props.typeClicked('');
                props.setComponent(null);

                setlistIcon(prevState => ({
                    ...prevState,
                    [list]: 'add_box'  
                }));
            }

            /* If drop down list is currently open and user selects another component
               it will automatically close that drop down and switch to another component,
               so will the icons*/
            if(idx !== i && listIcon[list] === 'remove') {
                setlistIcon(prevState => ({
                    ...prevState,
                    [list]: 'add_box'  
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
                    {Object.keys(componentsList).map((list, idx) => {
                        return (
                            <Aux key={idx}>
                                <li>
                                    <span 
                                        onClick={() => toggleListBtnStates(idx)}
                                        className="material-icons md-18 add-icon">
                                        {listIcon[list]}
                                    </span>
                                    {list} 
                                </li> 
                                {list === componentStates
                                    ? <ComponentStates 
                                        typeClicked={props.typeClicked} 
                                        posClicked={props.posClicked} 
                                        list={componentsList[list]}
                                        /> 
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