import React from 'react';

import './SearchBar.css';
import FilterSearch from './FilterSearch/FilterSearch';

const searchBar = (props) => {
    return (
        <div className="SearchBar" style={props.search ? { animation: "slide .1s"} : null}>
            <div className="search_box">
                <span className="material-icons close-icon" onClick={props.closed}>close</span>
                <div className="search">
                    <div>
                        <span className="material-icons search-icon">search</span>
                        <input 
                            type="text" 
                            className="search-input" 
                            placeholder="search location"
                            onChange={props.changed}
                            value={props.input}>
                        </input>
                    </div>
                    <button className="btn-search" onClick={props.searched}>Search</button>
                </div>
            </div>
            <div className="filter_box">
                { props.filtered 
                    ? props.filtered.map((loc, index) => {
                        return <FilterSearch key={index} location={loc.title} id={loc.woeid}getWeather={props.getWeather}/>
                    })
                    : null
                }
            </div>
        </div>
    )
}

export default searchBar;