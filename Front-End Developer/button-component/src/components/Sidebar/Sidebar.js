import React from 'react';

import './Sidebar.css';
import NavLink from './NavLinks/Navlink';

const links = ['Colors', 'Typography', 'Spaces', 'Buttons', 'Inputs', 'Grid'];

const sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="title">
                <span className="dev"><b>Dev</b></span>
                <span className="challenges"><b>challenges.io</b></span>
            </div>
            <nav className="main-nav">
                <ul>
                    {links.map((link, i) => 
                        <NavLink key={i}>{link}</NavLink>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default sidebar;