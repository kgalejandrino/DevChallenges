import React from 'react';

import './Main.css';
import FilterSearch from './FilterSearch/FilterSearch';
import Jobs from './Jobs/Jobs';

const main = (props) => {
    return (
        <div className="Main">
            <FilterSearch 
                location={props.location}
                locationChanged={props.locationChanged}
                fullTimeChanged={props.fullTimeChanged}
            />
            <Jobs 
                data={props.data}
            />
        </div>
    )
}

export default main;