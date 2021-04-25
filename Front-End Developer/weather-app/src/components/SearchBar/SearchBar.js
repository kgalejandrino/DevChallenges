import React from 'react';

import './SearchBar.css';
import SideBar from '../UI/SideBar/SideBar';

const searchBar = (props) => {
    return (
        <SideBar>
            <span class="material-icons close-icon" onClick={props.searched}>close</span>
            <div className="SearchBar">
                <div className="search-box">
                    <span className="material-icons search-icon">search</span>
                    <input type="text" className="search-input" placeholder="search location"></input>
                </div>
                <button className="btn-search">Search</button>
            </div>
        </SideBar>
    )
}

export default searchBar;