import React from 'react';

import './Quote.css';

const quote = (props) => {
    let quoteStyle = {};

    if(props.render) {
        quoteStyle = { 
            marginTop: "80px",
            marginBottom: "64px" 
        }
    }

    return (
        <div className="Quote" style={quoteStyle}>
            <p>"{props.text}."</p>
        </div>
    )
}

export default quote;