import React from 'react';

import './Main.css';
import FilterSearch from './FilterSearch/FilterSearch';
import Jobs from './Jobs/Jobs';
import Pagination from '../Pagination/Pagination';

const main = (props) => {
    return (
        <div className="Main">
            <FilterSearch 
                location={props.location}
                locationChanged={props.locationChanged}
                fullTimeChanged={props.fullTimeChanged}
            />
            <div className="jobs-container">
                <Jobs 
                    data={props.data}
                />
                <Pagination 
                    jobsPerPage={props.jobsPerPage}
                    totalPosts={props.totalPosts}
                    paginate={props.paginate}
                    maxPage={props.maxPage}
                    minPage={props.minPage}
                    currentPage={props.currentPage}
                    nextPage={props.nextPage}
                    prevPage={props.prevPage}
                />
            </div>
        </div>
    )
}

export default main;