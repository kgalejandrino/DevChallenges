import React from 'react';
import Radium from 'radium';

import './Property.css';

const property = (props) => {
    const host = props.host ? <div className="first-box"><span className="host">Super Host</span></div> : null;

    const styles = {
        propertyCard: {
            marginRight: "80px",
            '@media (max-width: 1325px)': {
                marginRight: "0"
            }   
        }
    }

    return (
        <div className="property-card" style={props.length < 3 ? styles.propertyCard: null}>
            <div className="property-image">
                <figure style={{backgroundImage:`url('${props.url}')`}}></figure>
            </div>
            <div className="property-detail">
                {host}
                <div className="second-box" style={props.host ? { width: "70%"} : { width: "100%"}}>
                    <span className="type">{props.type}</span>
                    <div className="rating-box">
                        <span className="material-icons md-18 rating-icon">star</span>
                        <span className="rating">{props.rating}</span>
                    </div>
                </div>
            </div>
            <p className="property-description">{props.description}</p>
        </div>
    )
}

export default Radium(property);