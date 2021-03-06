import React, { useState, useRef } from 'react';
import Radium from 'radium';
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
            props.searchedLocation(props.locationInput);
            props.searchedGuestNo(props.guestInput);
            props.hideDrawer(false);
        } else {
            input.focus();
            props.setFilterLocation(true);
        }
    }
    
    const styles = {
        searchBar: {
            '@media (max-width: 770px)': {
                flexFlow: "column",
                height: "auto",
                width: "100%"
            }   
        },
        searchContainer: { 
            '@media (max-width: 770px)': {
                width: "100%",
                borderRight: "none",
                borderBottom: "1px solid #f2f2f2",
                height: "60px"
            }
        },
        iconContainer: { 
            '@media (max-width: 770px)': {
                width: "100%",
                position: "absolute",
                left: "0",
                bottom: "340px"
            }
        },
    }

    return (
            <div className="SearchBar" style={props.showDrawer ? styles.searchBar : null}>
            <div className={`search-container ${expandWidth}`} onClick={handleFocusInput} style={props.showDrawer ? styles.searchContainer : null}>
                <div className="border-focus" style={focus ? {border: "1px solid #000"} : null} onClick={props.showFilterLocation}>
                    {locationLabel}
                    <input 
                        type="text" 
                        className="input-location padding-left" 
                        id="location" 
                        onChange={props.changed}
                        onFocus={handleFocusInput}
                        onBlur={handleBlurInput}
                        placeholder="Add location" 
                        autoComplete="off"
                        value={props.locationInput}
                        ref={focus => input = focus}>
                    </input>
                </div>
            </div>
            <div className={`search-container ${expandWidth}`} style={props.showDrawer ? styles.searchContainer : null}>
                <div className="border-focus" style={props.filterGuest ? {border: "1px solid #000"} : null} onClick={props.showFilterGuest}>
                    {guestLabel}
                    <span 
                        className="add-guest padding-left">{props.guestInput} Guest
                    </span>
                </div>
            </div>
            <div className="icon-container" style={props.showDrawer ? styles.iconContainer : null}>
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

export default Radium(SearchBar);