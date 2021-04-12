import React from 'react';

import './AddTask.css';

const addTask = (props) => {
    return (
        <div className="AddTask">
            <input 
                className="task-input" 
                type="text"
                onChange={props.input}
                value={props.task}
                placeholder="add details">
            </input>
            <button className="add-btn" onClick={props.clicked}>Add</button>
        </div>
    )
}

export default addTask;