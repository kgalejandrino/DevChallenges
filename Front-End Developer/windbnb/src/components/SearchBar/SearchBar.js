import React, { useState, useRef } from 'react';

import './SearchBar.css';

const SearchBar = (props) => {
    let [focus, setFocus] = useState(false);
    let input = useRef(null);
    
    const expandWidth = props.showSearch || props.showGuest ? 'expandWidth' : null;
    const locationLabel = props.showSearch || props.showGuest ? <label htmlFor="location" className="label padding-left">Location</label> : null;
    const guestLabel = props.showSearch || props.showGuest ? <label htmlFor="location" className="label padding-left">Guest</label> : null;
    
    const handleFocusInput = () => setFocus(true);
    const handleBlurInput = () => setFocus(false);
    
    return (
        <div className="SearchBar">
            <div className={`search-container ${expandWidth}`} onClick={props.filterSearch}>
                <div className="border-focus" style={focus ? {border: "1px solid #000"} : null} onClick={() => {input.focus()}}>
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
                        value={props.input}
                        ref={focus => input = focus}>
                    </input>
                </div>
            </div>
            <div className={`search-container ${expandWidth}`}>
                <div className="border-focus" style={props.showGuest ? {border: "1px solid #000"} : null}
                onClick={props.filterGuest}>
                    {guestLabel}
                    <button 
                        className="btn-add--guest">Add Guest
                    </button>
                </div>
            </div>
            <div className="icon-container">
                <div className={props.showSearch || props.showGuest ? 'icon-container--red': null}>
                    <span 
                        className="material-icons md-24 search-icon"
                        style={props.showSearch || props.showGuest ? {color: '#ffffff'} : null }>search
                    </span>
                    {props.showSearch || props.showGuest ? <span>Search</span>: null}
                </div>
            </div>
        </div>
    )
}

export default SearchBar;