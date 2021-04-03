import React, { useState } from 'react';

import './SearchBar.css';

const SearchBar = () => {

    const expandWidthContainerClick = () => {
        console.log('test');
    }

    const handleSearchChange = () => {
        console.log('test');
    }

    const handleAddGuestClick = () => {
        console.log('test');
    }

    return (
        <div className="SearchBar">
            <div className="search-container">
                <label htmlFor="location" className="location-label">Location</label>
                <input type="text" placeholder="Where are you going?" className="input-location" id="location" onClick={expandWidthContainerClick}></input>
            </div>
            <button className="btn-add--guest" value="" onClick={expandWidthContainerClick}>Add Guest</button>
            <span className="material-icons md-36 search-icon">search</span>
        </div>
    )
}

export default SearchBar;