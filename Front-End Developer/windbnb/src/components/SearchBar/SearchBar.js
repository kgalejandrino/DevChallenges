import React from 'react';

import './SearchBar.css';

const searchBar = () => {
    return (
        <div className="SearchBar">
            <div className="search-container">
                <label htmlFor="location" className="location-label">Location</label>
                <input type="text" placeholder="Where are you going?" className="input-location" id="location"></input>
            </div>
            <button className="btn-add--guest" value="">Add Guest</button>
            <span className="material-icons md-36 search-icon">search</span>
        </div>
    )
}

export default searchBar;