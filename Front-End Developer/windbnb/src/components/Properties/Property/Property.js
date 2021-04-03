import React from 'react';

import './Property.css';

const property = (props) => {
    const host = props.host ? <span className="host">Super Host</span> : null;

    return (
        <div className="property-card">
            <div className="property-image">
                <figure style={{backgroundImage:`url('${props.url}')`}}></figure>
                {/* <img src={props.url} alt="Apartment"></img> */}
            </div>
            <div className="property-detail">
                <div className="type-box">
                    {host}
                    <span className="type">{props.type}</span>
                </div>
                <div className="rating-box">
                    <span className="material-icons md-18 rating-icon">star</span>
                    <span className="rating">{props.rating}</span>
                </div>
            </div>
            <p className="property-description">{props.description}</p>
        </div>
    )
}

export default property;