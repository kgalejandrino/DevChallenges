import React from 'react';

import './Main.css';
import FilterSearch from './FilterSearch/FilterSearch';
import Jobs from './Jobs/Jobs';
import Pagination from '../Pagination/Pagination';
import Aux from '../../hoc/Auxiliary';

const main = (props) => {
    return (
        <div className="Main">
            <FilterSearch 
                location={props.location}
                locationChanged={props.locationChanged}
                fullTimeChanged={props.fullTimeChanged}
            />
            <div className="jobs-container">
                { props.loading
                    ? <div className="loader">Loading...</div>
                    : <Aux>
                         <Jobs
                            data={props.data}
                            jobClicked={props.jobClicked} 
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
                    </Aux>
                }   
            </div>
        </div>
    )
}

export default main;