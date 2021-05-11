import React from 'react';

import './Job.css';
import {calculateDate} from '../../../../utils/Utils';

const job = (props) => {
    const date = calculateDate(props.date);

    const data = {
        logo: props.logo,
        name: props.name,
        title: props.title,
        type: props.type,
        location: props.location,
        date: props.date,
        description: props.description,
        how: props.how
    }

    return(
        <div className="Job" onClick={() => props.jobClicked(data)}> 
            <div className="logo_container">
                {props.logo
                    ? <img src={props.logo} alt="company-logo"></img>
                    : <div className="not-found">not found</div>
                }
            </div>
            <div className="job_details">
                <div className="info_container">
                    <p className="company-name">{props.name}</p>
                    <p className="job-title">{props.title}</p>
                    <p className="type job-type">{props.type ? props.type : null}</p>
                </div>
                <div className="job_time--date">
                    <div className="flex-end">
                        <div className="city_container">
                            <span className="material-icons city-icon">public</span>
                            <span>{props.location}</span>
                        </div>
                        <div className="time_container">
                            <span className="material-icons time-icon">schedule</span>
                            <span>{date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default job;