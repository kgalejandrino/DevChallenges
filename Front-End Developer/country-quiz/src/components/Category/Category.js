import React from 'react';

import './Category.css';

const data = ['Capital', 'Flag'];

const category = () => {
    return (
        <div className="Category">
        <h3>Select Category</h3>
        <ul>
            {data.map((name, index) => {
                return <li key={index}>{name}</li>
            })}
        </ul>
    </div>
    )
}

export default category;