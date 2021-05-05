import React from 'react';

import './Search.css';

const search = () => {
    return (
        <div className="Search">
            <div className="search-container">
                <div className="input-container">
                    <span className="material-icons icon-search">work_outline</span>
                    <input type="text" className="input" placeholder="Title, companies, expertise or benefits"></input>
                </div>
                <div className="btn-container">
                    <button className="btn btn-search">Search</button>
                </div>
            </div>
        </div>
    )
}

export default search;