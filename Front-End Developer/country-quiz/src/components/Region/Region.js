import React from 'react';

import './Region.css';

const names = ['Africa', 'Americas', 'Asia', 'Europe', 'Ocenia'];

const region = () => {
    return (
        <div className="Region">
            <h3>Select Category</h3>
            <ul>
                {names.map((name, index) => {
                    return <li key={index}>{name}</li>
                })}
            </ul>
        </div>
    )
}

export default region;