import React from 'react';

import './FilterSearch.css';

const filterSearch = () => {
    const country = ['London', 'Amsterdam', 'New York', 'Berlin'];

    return(
        <div className="FilterSearch">
            <div className="checkbox_container">
                <input type="checkbox" name="fulltime" className="checkbox"></input>
                <label for="fulltime" className="checkbox-label">Full time</label>
            </div>
            <div className="location_container">
                <p className="location-title">Location</p>
                <div className="loc-input_container">
                    <span class="material-icons icon-location">public</span>
                    <input type="text" placeholder="City, state, zip or country" className="input-location"></input>
                </div>
            </div>
            {country.map((country, index) => {
                return <div className="options-container" key={index}>
                            <input type="radio" name="{country}" className="option"></input>
                            <label for="{country}" className="option-label">{country}</label>
                        </div>
            })}
        </div>
    )
}

export default filterSearch;