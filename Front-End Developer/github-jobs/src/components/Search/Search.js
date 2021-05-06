import React from 'react';

import './Search.css';

const search = (props) => {
    return (
        <div className="Search">
            <div className="search-container">
                <div className="input-container">
                    <span className="material-icons icon-search">work_outline</span>
                    <input type="text" className="input" placeholder="Title, companies, expertise or benefits" onChange={props.descriptionChanged}></input>
                </div>
                <div className="btn-container">
                    <button className="btn btn-search" onClick={props.searched}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default search;