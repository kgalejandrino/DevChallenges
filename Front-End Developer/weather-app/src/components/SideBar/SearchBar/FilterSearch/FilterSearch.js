import React, { useState } from 'react';

import './FilterSearch.css';

const FilterSearch = (props) => {
    let [hover, setHover] = useState(false);

    const handleMouseOver = () => {
        setHover(prevState => !prevState);
    }

    return (
        <div className="FilterSearch" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver} onClick={() => props.getWeather(props.id)}>
                <span className="filter-location">{props.location}</span>
                {hover
                    ? <span className="material-icons filter-icon">navigate_next</span> 
                    : null
                }
        </div>
    )
}

export default FilterSearch;