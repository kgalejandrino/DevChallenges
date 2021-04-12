import React from 'react';

import './TaskList.css';

const taskList = (props) => {
    return (
        <div className="TaskList">
            <input type="checkbox" id="task" className="list-checkbox"></input>
            <label htmlFor="task" className="label-checkbox">{props.children}</label>
        </div>
    )
}

export default taskList;