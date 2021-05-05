import React from 'react';

import './Main.css';
import FilterSearch from './FilterSearch/FilterSearch';
import Jobs from './Jobs/Jobs';

const main = (props) => {
    return (
        <div className="Main">
            <FilterSearch />
            <Jobs 
                data={props.data}
            />
        </div>
    )
}

export default main;