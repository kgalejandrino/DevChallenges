import React, { useState } from 'react';

import './FilterSearch.css';

const FilterSearch = () => {
    let [hover, setHover] = useState(false);

    const handleMouseOver = () => {
        setHover(prevState => !prevState);
    }

    // const toggleHoverState = () => setHover(prevState => !prevState);

    return (
        <div className="FilterSearch" onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}>
                <span className="filter-location">London</span>
                {hover
                    ? <span className="material-icons filter-icon">navigate_next</span> 
                    : null
                }
        </div>
    )
}

export default FilterSearch;