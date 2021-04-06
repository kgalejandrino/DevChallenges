import React, { useState, useRef } from 'react';

import './SearchBar.css';

const SearchBar = (props) => {
    let [focus, setFocus] = useState(false);
    let [addGuest, setAddGuest] = useState(false);
    let input = useRef(null);

    const expandWidth = props.show ? 'expandWidth' : null;
    const locationLabel = props.show ? <label htmlFor="location" className="label padding-left">Location</label> : null;
    const guestLabel = props.show ? <label htmlFor="location" className="label padding-left">Guest</label> : null;
    
    const handleFocusInput = () => setFocus(true);
    const handleBlurInput = () => setFocus(false);

    return (
        <div className="SearchBar">
            <div className={`search-container ${expandWidth}`} onClick={props.clickedDropdown}>
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
                        ref={focus => input = focus}>
                    </input>
                </div>
            </div>
            <div className={`search-container ${expandWidth}`} onClick={props.clickedDropdown}>
                <div className="border-focus" onClick={props.clickedAdd}>
                    {guestLabel}
                    <button 
                        className="btn-add--guest">Add Guest
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