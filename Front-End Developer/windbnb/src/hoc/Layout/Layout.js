import React from 'react';

import './Layout.css';
// import Aux from '../Auxilliary/Auxilliary';
import Logo from '../../components/Logo/Logo';
import SearchBar from '../../components/SearchBar/SearchBar';
import Properties from '../../components/Properties/Properties';

const layout = (props) => {
    return (
        <div className="Layout">
            <header className="header">
                <Logo />
                <SearchBar />
            </header>
            <main>
                <Properties />
            </main>
        </div>
    )
}

export default layout;

