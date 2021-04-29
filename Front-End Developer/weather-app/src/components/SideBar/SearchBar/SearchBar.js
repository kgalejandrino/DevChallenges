import React from 'react';

import './SearchBar.css';

const searchBar = (props) => {
    return (
        <div style={props.search ? { animation: "slide .1s"} : null}>
            <span className="material-icons close-icon" onClick={props.closed}>close</span>
            <div className="SearchBar">
                <div className="search-box">
                    <span className="material-icons search-icon">search</span>
                    <input type="text" className="search-input" placeholder="search location"></input>
                </div>
                <button className="btn-search">Search</button>
            </div>
        </div>
    )
}

export default searchBar;