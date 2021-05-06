import React from 'react';

import './FilterSearch.css';

const filterSearch = (props) => {
    const country = ['London', 'Amsterdam', 'New York', 'Berlin'];

    return(
        <div className="FilterSearch">
            <div className="checkbox_container">
                <input type="checkbox" name="fulltime" className="checkbox" onChange={props.fullTimeChanged}></input>
                <label htmlFor="fulltime" className="checkbox-label">Full time</label>
            </div>
            <div className="location_container">
                <p className="location-title">Location</p>
                <div className="loc-input_container">
                    <span className="material-icons icon-location">public</span>
                    <input type="text" placeholder="City, state, zip or country" className="input-location" value={props.location} onChange={props.locationChanged}></input>
                </div>
            </div>
            {country.map((country, index) => {
                return <div className="options-container" key={index}>
                        <label htmlFor={country} className="option-label">
                            <input 
                                type="radio" 
                                name="{country}" 
                                className="option" 
                                value={country} 
                                onChange={props.locationChanged}
                                checked={props.location === country}
                            />
                            {country}
                        </label>
                        </div>
            })}
        </div>
    )
}

export default filterSearch;