import React from 'react';

import './Author.css';

const author = (props) => {
    return (
        <div className="Author">
            <div className="author-container">
                <p className="name">{props.author}</p>
                <p className="genre">{props.genre}</p>
            </div>
            <div>
            <span 
                className="material-icons icon-arrow"
                onClick={props.clicked}>arrow_right_alt
            </span>
            </div>
        </div>
    )
}

export default author;