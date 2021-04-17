import React from 'react';

import './Quote.css';

const quote = (props) => {
    return (
        <div className="Quote">
            <p>"{props.text}."</p>
        </div>
    )
}

export default quote;