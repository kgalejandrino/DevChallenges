import React, { useState } from 'react';

import './SearchBar.css';

const SearchBar = (props) => {

    const expandWidthContainerClick = () => {
        console.log('test');
    }

    const handleSearchChange = () => {
        console.log('test');
    }

    const handleAddGuestClick = () => {
        console.log('test');
    }

    const dropdownStyle= { width: '40%' };

    return (
        <div className="SearchBar">
            <div className="search-container" style={props.dropdown ? dropdownStyle : null }>
                <label htmlFor="location" className="location-label">Location</label>
                <input 
                    type="text" 
                    className="input-location" 
                    id="location"
                    onClick={props.clickedDropdown}
                    placeholder="Where are you going?" 
                    autoComplete="off">
                </input>
            </div>
            <button 
                className="btn-add--guest"
                style={props.dropdown ? dropdownStyle : null } 
                onClick={props.clickedDropdown}>Add Guest
            </button>
            <div className="icon-container">
                <div className={props.dropdown ? 'icon-container--red': null}>
                    <span 
                        className="material-icons md-24 search-icon"
                        style={props.dropdown ? {color: '#ffffff'} : null }>search
                    </span>
                    {props.dropdown ? <span>Search</span>: null}
                </div>
            </div>
        </div>
    )
}

export default SearchBar;