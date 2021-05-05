import React from 'react';

import './Job.css';

const job = () => {
    return(
        <div className="Job">
            <div className="job-left--box">
                <div className="logo_container">
                    <img src="https://github-jobs.s3.amazonaws.com/okF4QAWNFFWEUanmBAMdCq4S?response-content-disposition=inline%3B%20filename%3D%22bluevine-leaf-rgb.png%22%3B%20filename%2A%3DUTF-8%27%27bluevine-leaf-rgb.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJENXOYUQN2IQEWRA%2F20210505%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210505T212509Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=0479fecd7cd66325523459151d4ab9112e32a61257726c579d7e1ea2e6c4c8c2" alt="logo"></img>
                </div>
                <div className="info_container">
                    <p className="company-name">Kasisto</p>
                    <p className="job-title">Front-End Software Engineer</p>
                    <p className="job-type">Full Time</p>
                </div>
            </div>
            <div className="job-right--box">
                <div className="city_container">
                    <span className="material-icons city-icon">public</span>
                    <span>New York</span>
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