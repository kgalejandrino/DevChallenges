import React, { useState } from 'react';

import './Sidebar.css';
import Aux from '../../hoc/Auxilliary/Auxilliary';

import ButtonStories from './ButtonStories/ButtonStories';

const lists = ['Colors', 'Typography', 'Spaces', 'Buttons', 'Inputs', 'Grid'];

const Sidebar = (props) => {
    let [btnStories, setBtnStories] = useState(false);
    let [listIcon, setlistIcon] = useState({
        0: 'add_box',
        1: 'add_box',
        2: 'add_box',
        3: 'add_box',
        4: 'add_box',
        5: 'add_box',
    });

    const showBtnStories = (i) => {
        // console.log(i);
        // console.log(listIcon[i]);

        // if(listIcon[i] === 'add_box') {
        //     setlistIcon(prevState => ({
        //         ...prevState,
        //         [i]: 'remove'  
        //     }));
        //     props.typeSelected('');    
        // } 

        // if(listIcon[i] === 'remove') {
        //     setlistIcon(prevState => ({
        //         ...prevState,
        //         [i]: 'add_box'  
        //     }));   
        // }

        const selectedList = lists.forEach((list, idx) => {
            if(idx === i && listIcon[i] === 'add_box') {
                if(list === 'Buttons') {
                    setBtnStories(!btnStories);
                    props.typeSelected('default');
                }

                setlistIcon(prevState => ({
                    ...prevState,
                    [i]: 'remove'  
                }));
            } else if(idx === i && listIcon[i] === 'remove'){
                if(list === 'Buttons') {
                    setBtnStories(!btnStories);
                    props.typeSelected('');
                }
                setlistIcon(prevState => ({
                    ...prevState,
                    [i]: 'add_box'  
                }));
                props.typeSelected('');
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
                                        {listIcon[idx]}
                                    </span>
                                    {list} 
                                </li> 
                                {list === 'Buttons' ? stories : null }
                            </Aux>  
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;