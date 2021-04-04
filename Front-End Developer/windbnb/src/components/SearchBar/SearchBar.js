import React, { useState } from 'react';

import './SearchBar.css';

const SearchBar = (props) => {

    const expandWidth = props.show ? 'expandWidth' : null;
    const locationLabel = props.show ? <label htmlFor="location" className="label">Location</label> : null;
    const guestLabel = props.show ? <label htmlFor="location" className="label">Guest</label> : null;
    
    return (
        <div className="SearchBar">
            <div className={`search-container ${expandWidth}`} onClick={props.clicked}>
                {locationLabel}
                <input 
                    type="text" 
                    className="input-location" 
                    id="location"
                    placeholder="Where are you going?" 
                    autoComplete="off">
                </input>
            </div>
            <div className={`search-container ${expandWidth}`}>
                {guestLabel}
                <button 
                    className="btn-add--guest"
                    onClick={props.clicked}>Add Guest
                </button>
            </div>
            <div className="icon-container">
                <div className={props.show ? 'icon-container--red': null}>
                    <span 
                        className="material-icons md-24 search-icon"
                        style={props.show ? {color: '#ffffff'} : null }>search
                    </span>
                    {props.show ? <span>Search</span>: null}
                </div>
            </div>
        </div>
    )
}

export default SearchBar;