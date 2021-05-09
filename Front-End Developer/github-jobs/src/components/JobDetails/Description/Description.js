import React from 'react';

import './Description.css';
import Aux from '../../../hoc/Auxiliary';

const description = (props) => {
    return(
        <Aux>
            <div className="des_box1">
                <span className="des-title">Front-End Software Engineer</span>
                <span className="type des-type">Full-time</span>
            </div>
            <div className="des_box2">
                <span className="material-icons time-icon">schedule</span>
                <span>5 days ago</span>
            </div>
            <div className="des_box3">
                <div className="des-logo">
                    <img src="https://github-jobs.s3.amazonaws.com/wrqTfPmWyFGXqCeb3MaSEZ47?response-content-disposition=inline%3B%20filename%3D%22WEX-LOGO.jpg%22%3B%20filename%2A%3DUTF-8%27%27WEX-LOGO.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJENXOYUQN2IQEWRA%2F20210509%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210509T055819Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=85dd42756029bb69ca682d5cd3f483389fad9a2179b98bc84913095280e3e781" alt="company-logo"></img>
                </div>
            </div>
        </Aux>
    )
}

export default description;