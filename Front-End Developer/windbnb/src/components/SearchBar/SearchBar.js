import React, { useState } from 'react';

import './SearchBar.css';

const city = [];

const SearchBar = (props) => {
    let [input, setInput] = useState('');
    let [focus, setFocus] = useState(false);

    const expandWidth = props.show ? 'expandWidth' : null;
    const locationLabel = props.show ? <label htmlFor="location" className="label padding-left">Location</label> : null;
    const guestLabel = props.show ? <label htmlFor="location" className="label padding-left">Guest</label> : null;
    
    props.propertiesList.forEach(property => {
        if(city.indexOf(property.location) === -1) {
            city.push(property.location);
        }
    });

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }

    const handleFocusInput = () => setFocus(true);

    let filteredCity = city.filter(city => {
        return city.toLowerCase().indexOf(input) !== -1;
    });

    return (
        <div className="SearchBar">
            <div className={`search-container ${expandWidth}`} onClick={props.clicked}>
                <div className="border-focus">
                    {locationLabel}
                    <input 
                        type="text" 
                        className="input-location padding-left" 
                        id="location"
                        onChange={handleInputChange}
                        onFocus={handleFocusInput}
                        placeholder="Where are you going?" 
                        autoComplete="off">
                    </input>
                </div>
            </div>
            <div className={`search-container ${expandWidth}`} onClick={props.clicked}>
                <div className="border-focus">
                    {guestLabel}
                    <button 
                        className="btn-add--guest padding-left">Add Guest
                    </button>
                </div>
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