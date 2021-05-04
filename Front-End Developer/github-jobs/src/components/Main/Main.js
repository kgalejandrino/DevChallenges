import React from 'react';

import './Main.css';
import FilterSearch from './FilterSearch/FilterSearch';
import Jobs from './Jobs/Jobs';

const main = () => {
    return (
        <div className="Main">
            <FilterSearch />
            <Jobs />
        </div>
    )
}

export default main;