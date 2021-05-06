import React from 'react';

import './Job.css';

const job = (props) => {
    return(
        <div className="Job">
            <div className="job-left--box">
                <div className="logo_container">
                    {props.logo
                        ? <img src={props.logo} alt="company-logo"></img>
                        : <div className="not-found">not found</div>
                    }
                </div>
                <div className="info_container">
                    <p className="company-name">{props.name}</p>
                    <p className="job-title">{props.title}</p>
                    <p className="job-type">{props.type ? props.type : null}</p>
                </div>
            </div>
            <div className="job-right--box">
                <div className="city_container">
                    <span className="material-icons city-icon">public</span>
                    <span>{props.location}</span>
                </div>
                <div className="time_container">
                    <span className="material-icons time-icon">schedule</span>
                    <span>5 days ago</span>
                </div>
            </div>
        </div>
    )
}

export default job;