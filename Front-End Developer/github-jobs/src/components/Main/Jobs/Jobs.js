import React from 'react';

import './Jobs.css';
import Job from './Job/Job';

const jobs = (props) => {
    return(
        <div className="Jobs">
            { props.data.length
                ?  props.data.map((data, index) => {
                    return <Job 
                                key={index}
                                logo={data.company_logo}
                                name={data.company}
                                title={data.title}
                                type={data.type}
                                location={data.location}
                                date={data.created_at}
                                jobClicked={props.jobClicked}
                           />
                    })
                : <div className="no-jobs">No jobs found</div>
            }
        </div>
    )
}

export default jobs;