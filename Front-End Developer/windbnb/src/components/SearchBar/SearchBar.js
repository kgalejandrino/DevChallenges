import React, { useState, useRef } from 'react';

import './SearchBar.css';

const SearchBar = (props) => {
    let [focus, setFocus] = useState(false);
    let input = useRef(null);
    
    const expandWidth = props.showDrawer ? 'expandWidth' : null;
    const locationLabel = props.showDrawer ? <label htmlFor="location" className="label padding-left">Location</label> : null;
    const guestLabel = props.showDrawer ? <label htmlFor="location" className="label padding-left">Guest</label> : null;
    
    const handleFocusInput = () => {
        setFocus(true);
        input.focus();
    }

    const handleBlurInput = () => setFocus(false);

    const handleSearchClick = () => {
        if(props.locationSelected) {
            props.searchedLocation(props.location);
            props.searchedGuestNo(props.guest);
            props.hideDrawer(false);
        } else {
            input.focus();
            props.showFilterLoc(true);
        }
    }
    
    return (
        <div className="SearchBar">
            <div className={`search-container ${expandWidth}`} onClick={handleFocusInput}>
                <div className="border-focus" style={focus ? {border: "1px solid #000"} : null} onClick={props.filterLocation}>
                    {locationLabel}
                    <input 
                        type="text" 
                        className="input-location padding-left" 
                        id="location" 
                        onChange={props.changed}
                        onFocus={handleFocusInput}
                        onBlur={handleBlurInput}
                        placeholder="Where are you going?" 
                        autoComplete="off"
                        value={props.location}
                        ref={focus => input = focus}>
                    </input>
                </div>
            </div>
            <div className={`search-container ${expandWidth}`}>
                <div className="border-focus" style={props.showGuest ? {border: "1px solid #000"} : null} onClick={props.filterGuest}>
                    {guestLabel}
                    <span 
                        className="add-guest padding-left">{props.guest} Guest
                    </span>
                </div>
            </div>
            <div className="icon-container">
                <div className={props.showDrawer ? 'icon-container--red': null} onClick={handleSearchClick}>
                    <span 
                        className="material-icons md-24 search-icon"
                        style={props.showDrawer ? {color: '#ffffff'} : null }>search
                    </span>
                    {props.showDrawer ? <span className="search-text">Search</span>: null}
                </div>
            </div>
        </div>
    )
}

export default SearchBar;