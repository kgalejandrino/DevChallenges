import React from 'react';

import './SearchBar.css';
import FilterSearch from './FilterSearch/FilterSearch';

const searchBar = (props) => {
    return (
        <div className="SearchBar" style={props.search ? { animation: "slide .1s"} : null}>
            <div className="search_box">
                <span className="material-icons close-icon" onClick={props.closed}>close</span>
                <div className="search">
                    <span className="material-icons search-icon">search</span>
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="search location"
                        onChange={props.changed}>
                    </input>
                    <button className="btn-search" onClick={props.searched}>Search</button>
                </div>
            </div>
            <div className="filter_box">
                <FilterSearch />        
            </div>
        </div>
    )
}

export default searchBar;