import React from 'react';

import './JobDetails.css';
import Description from './Description/Description';

const jobDetails = (props) => {
    let how = props.data.how;
    how = how.match('"(.*)"');

    return (
        <div className="JobDetails">
            <div className="left_details">
                <div className="back-to-box">
                    <span className="material-icons icon-back" onClick={props.backToSearch}>keyboard_backspace</span>
                    <span>Back to Search</span>
                </div>
                <div className="how-box">
                    <p className="how-box--title">How to apply</p>
                    <div className="how-box--text">
                        <span>Visit the 
                            <a href={how[1]} className="how-link">link</a> 
                            to apply.
                        </span>
                    </div>
                </div>
            </div>
            <div className="right_details">
                <Description 
                    data={props.data}
                />
            </div>
        </div>
    )
}

export default jobDetails;